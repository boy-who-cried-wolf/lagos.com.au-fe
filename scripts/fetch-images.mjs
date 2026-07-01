import { mkdir, writeFile, copyFile, access } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const publicImages = join(root, 'public', 'assets', 'images')
const themeImages = join(root, 'wp-theme', 'lagos', 'assets', 'images')

const imageFiles = [
  'header-logo.svg',
  'favicon.svg',
  'footer-logo.svg',
  'header-border-img.png',
  'footer-border-img.png',
  'challenges-img.png',
  'partners/img_1.png',
  'partners/img_2.png',
  'partners/img_3.png',
  'partners/img_4.png',
  'partners/img_5.png',
  'partners/img_6.png',
  'partners/img_7.png',
  'services/service_1.png',
  'services/service_2.png',
  'services/service_3.png',
  'services/service_4.png',
  'services/service_5.png',
  'services/footer-logo.svg',
  'reviews/img_1.png',
  'reviews/img_2.png',
  'reviews/img_3.png',
]

const sources = [
  'https://lagosfinancial.com.au/assets/images/',
  'https://www.lagosfinancial.com.au/assets/images/',
]

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

async function download(url, dest) {
  const res = await fetch(url, { redirect: 'follow' })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  if (buf.length < 100) throw new Error(`too small ${url}`)
  await mkdir(dirname(dest), { recursive: true })
  await writeFile(dest, buf)
}

async function syncImage(relative) {
  const publicDest = join(publicImages, relative)
  const themeDest = join(themeImages, relative)

  if (await exists(publicDest)) {
    console.log('Using cached', relative)
    await mkdir(dirname(themeDest), { recursive: true })
    await copyFile(publicDest, themeDest)
    return true
  }

  for (const base of sources) {
    const url = base + relative.replace(/\\/g, '/')
    try {
      await download(url, publicDest)
      console.log('Downloaded', relative)
      await mkdir(dirname(themeDest), { recursive: true })
      await copyFile(publicDest, themeDest)
      return true
    } catch (err) {
      console.log('Miss', relative, `(${err.message})`)
    }
  }

  return false
}

let ok = 0
let missing = 0

for (const file of imageFiles) {
  if (await syncImage(file)) ok++
  else missing++
}

// Footer logo lives under services/ on the live site.
const footerSrc = join(publicImages, 'services', 'footer-logo.svg')
const footerDest = join(publicImages, 'footer-logo.svg')
const themeFooterDest = join(themeImages, 'footer-logo.svg')
if (await exists(footerSrc)) {
  await copyFile(footerSrc, footerDest)
  await copyFile(footerSrc, themeFooterDest)
  console.log('Copied services/footer-logo.svg → footer-logo.svg')
}

console.log(`Done. Images ready: ${ok}/${imageFiles.length}`)
if (missing) {
  console.log(`${missing} image(s) could not be downloaded — check public/assets/images/`)
  process.exitCode = missing === imageFiles.length ? 1 : 0
}
