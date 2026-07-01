import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { normalizePageHtml } from './normalize-page-html.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const destDir = join(root, 'wp-theme', 'lagos', 'data')
const dest = join(destDir, 'pages.json')

const pageHeroImages = {
  '/about-us': 'services/service_1.png',
  '/bondi': 'services/service_2.png',
  '/launceston': 'services/service_3.png',
  '/buying-a-property': 'services/service_1.png',
  '/refinance-your-home': 'services/service_3.png',
  '/property-investment': 'services/service_4.png',
  '/construction-loan': 'services/service_5.png',
  '/commercial-property': 'services/service_4.png',
  '/smsf-loans-property-investment': 'services/service_5.png',
  '/home-loan': 'services/service_2.png',
  '/car-loan': 'services/service_3.png',
  '/finance': 'services/service_1.png',
  '/partners': 'challenges-img.png',
  '/privacy-policy': 'challenges-img.png',
  '/home-equity-loan': 'services/service_2.png',
  '/terms-of-use': 'challenges-img.png',
}

const pageAccentLines = {
  '/about-us': 'Built on Trust.',
  '/bondi': 'Sydney Specialists.',
  '/launceston': 'Tasmania Specialists.',
  '/buying-a-property': 'Your First Home.',
  '/refinance-your-home': 'Save More.',
  '/property-investment': 'Build Wealth.',
  '/construction-loan': 'Plans to Keys.',
  '/commercial-property': 'Grow Your Portfolio.',
  '/smsf-loans-property-investment': 'Done Right.',
  '/home-loan': 'Find Your Fit.',
  '/car-loan': 'Drive Sooner.',
  '/finance': 'Every Goal.',
}

const legalPages = new Set(['/privacy-policy', '/terms-of-use'])
const guidePages = new Set([
  '/buying-a-property',
  '/refinance-your-home',
  '/property-investment',
  '/construction-loan',
  '/commercial-property',
  '/smsf-loans-property-investment',
  '/home-loan',
  '/car-loan',
  '/home-equity-loan',
  '/finance',
])
const testimonialPages = new Set(['/about-us', '/bondi', '/launceston'])

const pagesSrc = JSON.parse(readFileSync(join(root, 'src', 'data', 'pages.json'), 'utf8'))
const pages = {}

for (const [path, page] of Object.entries(pagesSrc.pages)) {
  const slug = path.replace(/^\//, '')
  pages[slug] = {
    title: page.title,
    description: page.description,
    eyebrow: page.eyebrow ?? '',
    heading: page.heading,
    subheading: page.subheading ?? '',
    accent: pageAccentLines[path] ?? '',
    hero_image: pageHeroImages[path] ?? 'challenges-img.png',
    contentHtml: normalizePageHtml(page.contentHtml ?? ''),
    variant: legalPages.has(path) ? 'legal' : guidePages.has(path) ? 'guide' : 'default',
    is_legal: legalPages.has(path),
    show_testimonials: testimonialPages.has(path),
  }
}

mkdirSync(destDir, { recursive: true })
writeFileSync(dest, `${JSON.stringify({ pages }, null, 2)}\n`, 'utf8')
console.log(`Wrote ${Object.keys(pages).length} pages → ${dest.replace(/\\/g, '/')}`)
