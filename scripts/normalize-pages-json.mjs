import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { normalizePageHtml } from './normalize-page-html.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pagesPath = join(root, 'src', 'data', 'pages.json')
const data = JSON.parse(readFileSync(pagesPath, 'utf8'))

for (const page of Object.values(data.pages)) {
  if (page.contentHtml) {
    page.contentHtml = normalizePageHtml(page.contentHtml)
  }
}

writeFileSync(pagesPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
console.log(`Normalized contentHtml in ${pagesPath.replace(/\\/g, '/')}`)
