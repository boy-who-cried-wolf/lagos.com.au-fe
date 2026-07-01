import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const BASE = 'https://lagosfinancial.com.au/frequently-asked-questions/'

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

function parseFaq(html) {
  const entryMatch = html.match(/<div class="entry-content">([\s\S]*?)<\/div>\s*<\/div>\s*<\/article>/i)
  if (!entryMatch) {
    throw new Error('Could not find FAQ entry content')
  }

  let content = entryMatch[1]
  const footerIndex = content.search(/<h2[^>]*>\s*Services\s*<\/h2>/i)
  if (footerIndex !== -1) {
    content = content.slice(0, footerIndex)
  }

  const categories = []
  const categoryRegex = /<h2[^>]*>([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2[^>]*>|$)/gi
  let categoryMatch

  while ((categoryMatch = categoryRegex.exec(content)) !== null) {
    const categoryTitle = stripTags(categoryMatch[1])
    if (!categoryTitle || /book your complimentary/i.test(categoryTitle)) continue

    const block = categoryMatch[2]
    const items = []
    const questionRegex = /<h5[^>]*>([\s\S]*?)<\/h5>\s*([\s\S]*?)(?=<h5[^>]*>|$)/gi
    let questionMatch

    while ((questionMatch = questionRegex.exec(block)) !== null) {
      const question = stripTags(questionMatch[1])
      const answer = stripTags(questionMatch[2])
      if (question && answer) {
        items.push({ question, answer })
      }
    }

    if (items.length) {
      categories.push({ title: categoryTitle, items })
    }
  }

  const heroMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
  const subheadingMatch = html.match(/<div class="entry-content">[\s\S]*?<h1[^>]*>[\s\S]*?<\/h1>\s*<p[^>]*>([\s\S]*?)<\/p>/i)

  return {
    heading: heroMatch ? stripTags(heroMatch[1]) : 'Frequently Asked Questions',
    subheading: subheadingMatch
      ? stripTags(subheadingMatch[1])
      : 'Your Questions Answered, Your Property Journey Simplified',
    categories,
  }
}

async function main() {
  const response = await fetch(BASE)
  if (!response.ok) throw new Error(`Failed to fetch FAQ: ${response.status}`)
  const html = await response.text()
  const faq = parseFaq(html)

  const outPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'faq.json')
  writeFileSync(outPath, `${JSON.stringify(faq, null, 2)}\n`, 'utf8')
  process.stdout.write(
    `Wrote ${faq.categories.length} categories (${faq.categories.reduce((n, c) => n + c.items.length, 0)} items) to ${outPath}\n`,
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
