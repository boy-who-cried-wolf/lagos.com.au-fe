import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const BASE = 'https://lagosfinancial.com.au'
const BLOG_CATEGORY_ID = 13
const DEFAULT_IMAGE = '/assets/images/services/service_4.png'

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
  content = content.replace(/data-src="/g, 'src="')
  content = content.replace(/src="\/wp-content/g, 'src="https://lagosfinancial.com.au/wp-content')
  content = content.replace(/\sdata-[a-z0-9-]+="[^"]*"/gi, '')
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

function mapPost(item) {
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

async function fetchAllPosts() {
  const search = new URLSearchParams({
    per_page: '100',
    categories: String(BLOG_CATEGORY_ID),
    _embed: '1',
  })

  const url = `${BASE}/wp-json/wp/v2/posts?${search}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch blog posts: ${response.status}`)
  }

  const firstPage = await response.json()
  const totalPages = Number(response.headers.get('x-wp-totalpages') ?? '1')
  const posts = [...firstPage]

  for (let page = 2; page <= totalPages; page += 1) {
    const pageSearch = new URLSearchParams({
      per_page: '100',
      categories: String(BLOG_CATEGORY_ID),
      _embed: '1',
      page: String(page),
    })
    const pageResponse = await fetch(`${BASE}/wp-json/wp/v2/posts?${pageSearch}`)
    if (!pageResponse.ok) {
      throw new Error(`Failed to fetch blog page ${page}: ${pageResponse.status}`)
    }
    posts.push(...(await pageResponse.json()))
  }

  return posts
}

async function main() {
  const items = await fetchAllPosts()
  const posts = items.map(mapPost).sort((a, b) => b.date.localeCompare(a.date))

  const outPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'blogs.json')
  writeFileSync(outPath, `${JSON.stringify({ posts }, null, 2)}\n`, 'utf8')
  process.stdout.write(`Wrote ${posts.length} posts to ${outPath}\n`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
