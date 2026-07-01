import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { normalizePageHtml } from './normalize-page-html.mjs'

const BASE = 'https://lagosfinancial.com.au'

/** React route path -> live site WP page slug */
const PAGE_SLUGS = {
  '/about-us': 'about-us',
  '/bondi': 'bondi',
  '/launceston': 'launceston',
  '/buying-a-property': 'buying-a-property',
  '/refinance-your-home': 'refinance-your-home',
  '/property-investment': 'property-investment',
  '/construction-loan': 'construction-loan',
  '/commercial-property': 'commercial-property',
  '/smsf-loans-property-investment': 'smsf-loans-property-investment',
  '/home-loan': 'home-loan',
  '/car-loan': 'car-loan',
  '/finance': 'finance',
  '/partners': 'partners',
  '/privacy-policy': 'privacy-policy',
  '/home-equity-loan': 'home-equity-loan',
  '/terms-of-use': 'terms-and-conditions',
}

function decodeHtml(text) {
  return text
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, '…')
    .replace(/&hellip;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
}

function stripTags(html) {
  return decodeHtml(html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
}

function parseMeta(html, property) {
  const match = html.match(new RegExp(`<meta property="${property}" content="([^"]*)"`, 'i'))
  return match ? decodeHtml(match[1]) : ''
}

function cleanTitle(title) {
  return title.replace(/\s*\|\s*Lagos Financial.*$/i, '').replace(/\s*-\s*Lagos Financial.*$/i, '').trim()
}

function cleanContent(raw) {
  let content = raw

  content = content.replace(/<script[\s\S]*?<\/script>/gi, '')
  content = content.replace(/<style[\s\S]*?<\/style>/gi, '')
  content = content.replace(/<link[^>]*>/gi, '')
  content = content.replace(/<presto-player[\s\S]*?<\/presto-player>/gi, (block) => {
    const iframe = block.match(/<iframe[^>]*src="([^"]+)"[^>]*>/i)
    return iframe ? `<div class="video-embed"><iframe src="${iframe[1]}" title="Video" allowfullscreen loading="lazy"></iframe></div>` : ''
  })
  content = content.replace(/<noscript>[\s\S]*?<\/noscript>/gi, '')
  content = content.replace(/\ssrc="data:image[^"]*"/gi, '')
  content = content.replace(/data-lazy-src="/g, 'src="')
  content = content.replace(/data-src="/g, 'src="')
  content = content.replace(/src="\/wp-content/g, 'src="https://lagosfinancial.com.au/wp-content')
  content = content.replace(/\sdata-[a-z0-9-]+="[^"]*"/gi, '')
  content = content.replace(/\sclass="[^"]*"/gi, '')
  content = content.replace(/\sstyle="[^"]*"/gi, '')
  content = content.replace(/<hr\s*\/?>/gi, '')

  content = content.replace(/href="https:\/\/lagosfinancial\.com\.au\/([^"]*?)"/g, (_, path) => {
    const normalized = path.replace(/\/$/, '')
    if (normalized === 'terms-and-conditions') return 'href="/terms-of-use"'
    if (normalized === 'book-complimentary-assessment') return 'href="/contact"'
    return normalized ? `href="/${normalized}"` : 'href="/"'
  })
  content = content.replace(/href="\/(?!\/)([^"]*?)"/g, (_, path) => {
    const normalized = path.replace(/\/$/, '')
    if (normalized === 'terms-and-conditions') return 'href="/terms-of-use"'
    if (normalized === 'book-complimentary-assessment') return 'href="/contact"'
    return normalized ? `href="/${normalized}"` : 'href="/"'
  })

  return normalizePageHtml(content.trim())
}

function extractHeading(html) {
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
  if (h1) return stripTags(h1[1])

  const entryH1 = html.match(/<div class="entry-content">[\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>/i)
  if (entryH1) return stripTags(entryH1[1])

  return ''
}

function extractEyebrow(path, heading) {
  const map = {
    '/about-us': 'About Us',
    '/bondi': 'Bondi Junction',
    '/launceston': 'Launceston',
    '/buying-a-property': 'Buy Your First Property',
    '/refinance-your-home': 'Refinance',
    '/property-investment': 'Investment Property',
    '/construction-loan': 'Construction Loans',
    '/commercial-property': 'Commercial Property',
    '/smsf-loans-property-investment': 'SMSF Property Investment',
    '/home-loan': 'Home Loans',
    '/car-loan': 'Car Loans',
    '/finance': 'All Services',
    '/partners': 'Ecosystem',
    '/privacy-policy': 'Legal',
    '/home-equity-loan': 'Equity Release',
    '/terms-of-use': 'Legal',
  }
  return map[path] ?? heading.split(' ').slice(0, 2).join(' ')
}

async function fetchWpPage(slug) {
  const url = `${BASE}/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}&_embed`
  const response = await fetch(url)
  if (!response.ok) throw new Error(`WP API failed for ${slug}: ${response.status}`)
  const data = await response.json()
  return data[0] ?? null
}

async function fetchHtmlMeta(wpSlug) {
  const response = await fetch(`${BASE}/${wpSlug}/`)
  if (!response.ok) throw new Error(`HTML fetch failed for ${path}: ${response.status}`)
  const html = await response.text()
  const titleTag = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? ''
  return {
    title: cleanTitle(decodeHtml(titleTag)),
    description: parseMeta(html, 'og:description') || parseMeta(html, 'description'),
    heading: extractHeading(html),
    image: parseMeta(html, 'og:image'),
  }
}

async function syncPage(path, wpSlug) {
  const [wpPage, htmlMeta] = await Promise.all([fetchWpPage(wpSlug), fetchHtmlMeta(wpSlug)])

  if (!wpPage) {
    throw new Error(`Page not found: ${wpSlug}`)
  }

  const heading = htmlMeta.heading || cleanTitle(stripTags(wpPage.title?.rendered ?? ''))
  const description =
    htmlMeta.description ||
    stripTags(wpPage.excerpt?.rendered ?? '') ||
    `Learn more about ${heading} with Lagos Financial.`

  return {
    path,
    title: htmlMeta.title || `${heading} | Lagos Financial`,
    description,
    eyebrow: extractEyebrow(path, heading),
    heading,
    subheading: description,
    contentHtml: cleanContent(wpPage.content?.rendered ?? ''),
    heroImage: htmlMeta.image || '',
  }
}

async function main() {
  const pages = {}

  for (const [path, wpSlug] of Object.entries(PAGE_SLUGS)) {
    process.stdout.write(`Fetching ${path} (${wpSlug})...\n`)
    pages[path] = await syncPage(path, wpSlug)
  }

  const outPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'pages.json')
  writeFileSync(outPath, `${JSON.stringify({ pages }, null, 2)}\n`, 'utf8')
  process.stdout.write(`Wrote ${Object.keys(pages).length} pages to ${outPath}\n`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
