import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const BASE = 'https://lagosfinancial.com.au'
const BLOG_SLUGS = [
  'what-does-a-mortgage-broker-do-australia',
  'australian-property-market-forecast-2026',
  'buying-interstate-property-investment-australia',
  'debt-consolidation-refinancing-guide',
  'guarantor-home-loans-family-equity-explained',
  'how-to-read-comparison-rate-home-loans',
  'interest-only-vs-principal-and-interest-home-loans',
  'bridging-finance-explained-australia',
  'non-bank-lenders-vs-big-banks-australia',
  'investment-property-tax-deductions-2026',
  'best-interests-duty-mortgage-broker-explained',
  'how-mortgage-broker-commissions-work-australia',
]

function decodeHtml(text) {
  return text
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
}

function parseMeta(html, property) {
  const match = html.match(new RegExp(`<meta property="${property}" content="([^"]*)"`, 'i'))
  return match ? decodeHtml(match[1]) : ''
}

function parseDate(html) {
  const match = html.match(/<span class="published">([^<]+)<\/span>/i)
  if (!match) return ''
  const parsed = new Date(match[1].trim())
  if (Number.isNaN(parsed.getTime())) return match[1].trim()
  return parsed.toISOString().slice(0, 10)
}

function parseFeaturedImage(html) {
  const ogImage = parseMeta(html, 'og:image')
  if (ogImage) return ogImage

  const lazy = html.match(/data-lazy-src="(https:\/\/lagosfinancial\.com\.au\/wp-content[^"]+)"/i)
  if (lazy) return lazy[1]

  const direct = html.match(/src="(https:\/\/lagosfinancial\.com\.au\/wp-content[^"]+)"/i)
  return direct?.[1] ?? ''
}

function cleanTitle(title) {
  return title.replace(/\s*\|\s*Lagos Financial.*$/i, '').trim()
}

function extractArticleHtml(html) {
  const nested = html.match(/<div class="entry-content">\s*<article>([\s\S]*?)<\/article>/i)
  if (nested) {
    return cleanContent(nested[1])
  }

  const start = html.search(/<div class="entry-content">/i)
  if (start === -1) return ''

  const articleEnd = html.indexOf('</article>', start)
  if (articleEnd === -1) return ''

  const chunk = html.slice(start, articleEnd)
  const inner = chunk.replace(/^<div class="entry-content">/i, '').replace(/<\/div>\s*$/i, '')

  return cleanContent(inner)
}

function cleanContent(raw) {
  let content = raw

  content = content.replace(/<noscript>[\s\S]*?<\/noscript>/gi, '')
  content = content.replace(/\ssrc="data:image[^"]*"/gi, '')
  content = content.replace(/data-lazy-src="/g, 'src="')
  content = content.replace(/src="\/wp-content/g, 'src="https://lagosfinancial.com.au/wp-content')
  content = content.replace(/\sclass="[^"]*"/gi, '')
  content = content.replace(/\sstyle="[^"]*"/gi, '')
  content = content.replace(/<hr\s*\/?>/gi, '')

  content = content.replace(/href="https:\/\/lagosfinancial\.com\.au\/([^"]*?)"/g, (_, path) => {
    const normalized = path.replace(/\/$/, '')
    return normalized ? `href="/${normalized}"` : 'href="/"'
  })
  content = content.replace(/href="\/(?!\/)([^"]*?)"/g, (_, path) => {
    const normalized = path.replace(/\/$/, '')
    return normalized ? `href="/${normalized}"` : 'href="/"'
  })

  const relatedIndex = content.search(/<h2[^>]*>\s*Related Reading\s*<\/h2>/i)
  if (relatedIndex !== -1) {
    content = content.slice(0, relatedIndex)
  }

  return content.trim()
}

async function fetchPost(slug) {
  const url = `${BASE}/${slug}/`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`)
  }

  const html = await response.text()
  const entryTitle = html.match(/<h1 class="entry-title">([\s\S]*?)<\/h1>/i)?.[1]
  const ogTitle = parseMeta(html, 'og:title')
  const title = cleanTitle(entryTitle ? decodeHtml(entryTitle.replace(/<[^>]+>/g, '')) : ogTitle || slug)
  const excerpt = parseMeta(html, 'og:description')
  const date = parseDate(html)
  const image = parseFeaturedImage(html)
  const contentHtml = extractArticleHtml(html)

  if (!contentHtml) {
    throw new Error(`No article content found for ${slug}`)
  }

  return { slug, title, excerpt, date, image, contentHtml }
}

async function main() {
  const posts = []

  for (const slug of BLOG_SLUGS) {
    process.stdout.write(`Fetching ${slug}...\n`)
    const post = await fetchPost(slug)
    posts.push({ ...post, author: 'Victor Lagos' })
  }

  const outPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'blogs.json')
  writeFileSync(outPath, `${JSON.stringify({ posts }, null, 2)}\n`, 'utf8')
  process.stdout.write(`Wrote ${posts.length} posts to ${outPath}\n`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
