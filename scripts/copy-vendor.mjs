import { copyFile, access } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const swiperDir = join(root, 'node_modules', 'swiper')
const themeJs = join(root, 'wp-theme', 'lagos', 'assets', 'js', 'swiper-bundle.min.js')
const themeCss = join(root, 'wp-theme', 'lagos', 'assets', 'css', 'swiper-bundle.min.css')

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

if (await exists(join(swiperDir, 'swiper-bundle.min.js'))) {
  await copyFile(join(swiperDir, 'swiper-bundle.min.js'), themeJs)
  await copyFile(join(swiperDir, 'swiper-bundle.min.css'), themeCss)
  console.log('Swiper bundle copied to theme')
} else {
  console.log('Swiper not found in node_modules — run npm install')
}
