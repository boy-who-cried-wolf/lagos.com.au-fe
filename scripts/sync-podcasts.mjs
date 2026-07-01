import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const BASE = 'https://lagosfinancial.com.au'
const PODCAST_CATEGORY_ID = 11
const DEFAULT_IMAGE = '/assets/images/services/service_5.png'

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
}

function stripTags(html) {
  return decodeHtml(html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
}

function cleanContent(raw) {
  let content = raw

  content = content.replace(/<noscript>[\s\S]*?<\/noscript>/gi, '')
  content = content.replace(/\ssrc="data:image[^"]*"/gi, '')
  content = content.replace(/data-lazy-src="/g, 'src="')
  content = content.replace(/src="\/wp-content/g, 'src="https://lagosfinancial.com.au/wp-content')
  content = content.replace(/\sclass="[^"]*"/gi, '')
  content = content.replace(/\sstyle="[^"]*"/gi, '')
  content = content.replace(/\sdata-[a-z0-9-]+="[^"]*"/gi, '')
  content = content.replace(/<span>([^<]*)<\/span>/gi, '$1')

  content = content.replace(/href="https:\/\/lagosfinancial\.com\.au\/([^"]*?)"/g, (_, path) => {
    const normalized = path.replace(/\/$/, '')
    return normalized ? `href="/${normalized}"` : 'href="/"'
  })
  content = content.replace(/href="\/(?!\/)([^"]*?)"/g, (_, path) => {
    const normalized = path.replace(/\/$/, '')
    return normalized ? `href="/${normalized}"` : 'href="/"'
  })

  return content.trim()
}

function mapEpisode(item) {
  const image = item._embedded?.['wp:featuredmedia']?.[0]?.source_url || DEFAULT_IMAGE

  return {
    slug: item.slug,
    title: stripTags(item.title?.rendered ?? ''),
    excerpt: stripTags(item.excerpt?.rendered ?? ''),
    date: (item.date ?? '').slice(0, 10),
    image,
    contentHtml: cleanContent(item.content?.rendered ?? ''),
    author: 'Victor Lagos',
  }
}

async function fetchAll(endpoint, params = {}) {
  const search = new URLSearchParams({ per_page: '100', _embed: '1', ...params })
  const url = `${BASE}/wp-json/wp/v2/${endpoint}?${search}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`)
  }

  return response.json()
}

async function main() {
  const [podcastItems, categoryPosts] = await Promise.all([
    fetchAll('podcast'),
    fetchAll('posts', { categories: String(PODCAST_CATEGORY_ID) }),
  ])

  const seen = new Set()
  const episodes = []

  for (const item of [...podcastItems, ...categoryPosts]) {
    if (!item?.slug || seen.has(item.slug)) {
      continue
    }

    seen.add(item.slug)
    episodes.push(mapEpisode(item))
  }

  episodes.sort((a, b) => b.date.localeCompare(a.date))

  const outPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'podcasts.json')
  writeFileSync(outPath, `${JSON.stringify({ episodes }, null, 2)}\n`, 'utf8')
  process.stdout.write(`Wrote ${episodes.length} episodes to ${outPath}\n`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
