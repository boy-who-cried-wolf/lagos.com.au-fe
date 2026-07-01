import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const indexCss = readFileSync(join(root, 'src', 'index.css'), 'utf8')
const dest = join(root, 'wp-theme', 'lagos', 'assets', 'css', 'page-content.css')

const start = indexCss.indexOf('/* Synced page content — themed layout */')
const end = indexCss.indexOf('section:not(#about-us)', start)

if (start === -1 || end === -1) {
  throw new Error('Could not find page-article CSS block in src/index.css')
}

const block = indexCss.slice(start, end).trim()
const output = `${block}

.section-page-content {
  padding: 4rem 0;
}

@media (min-width: 1024px) {
  .section-page-content {
    padding: 6rem 0;
  }
}

.section-page-content__inner {
  max-width: 56rem;
  margin: 0 auto;
}
`

writeFileSync(dest, `${output}\n`, 'utf8')
console.log(`Wrote page-content.css → ${dest.replace(/\\/g, '/')}`)
