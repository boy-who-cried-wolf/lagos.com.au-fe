import { mkdir, writeFile, copyFile, access } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const publicFonts = join(root, 'public', 'assets', 'fonts')
const themeFonts = join(root, 'wp-theme', 'lagos', 'assets', 'fonts')

const interFiles = [
  {
    name: 'inter-v20-latin-regular.woff2',
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/files/inter-latin-400-normal.woff2',
  },
  {
    name: 'inter-v20-latin-500.woff2',
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/files/inter-latin-500-normal.woff2',
  },
  {
    name: 'inter-v20-latin-600.woff2',
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/files/inter-latin-600-normal.woff2',
  },
  {
    name: 'inter-v20-latin-700.woff2',
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/files/inter-latin-700-normal.woff2',
  },
]

const neulisFiles = [
  'Neulis-Regular.otf',
  'NeulisAlt-Medium.otf',
  'neulis-cursive-regular.otf',
]

const neulisSources = [
  'https://lagosfinancial.com.au/assets/fonts/Neulis/',
  'https://www.lagosfinancial.com.au/assets/fonts/Neulis/',
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
  await mkdir(dirname(dest), { recursive: true })
  await writeFile(dest, buf)
}

async function tryDownload(url, dest) {
  try {
    await download(url, dest)
    return true
  } catch {
    return false
  }
}

async function syncInter() {
  await mkdir(join(publicFonts, 'Inter'), { recursive: true })
  await mkdir(join(themeFonts, 'Inter'), { recursive: true })

  for (const file of interFiles) {
    const publicDest = join(publicFonts, 'Inter', file.name)
    const themeDest = join(themeFonts, 'Inter', file.name)

    if (!(await exists(publicDest))) {
      console.log('Downloading Inter', file.name)
      await download(file.url, publicDest)
    } else {
      console.log('Using cached Inter', file.name)
    }

    await copyFile(publicDest, themeDest)
  }
}

async function syncNeulisFromUrls() {
  await mkdir(join(publicFonts, 'Neulis'), { recursive: true })
  await mkdir(join(themeFonts, 'Neulis'), { recursive: true })

  let found = 0
  for (const name of neulisFiles) {
    const publicDest = join(publicFonts, 'Neulis', name)
    const themeDest = join(themeFonts, 'Neulis', name)

    if (await exists(publicDest)) {
      console.log('Using cached Neulis', name)
      await copyFile(publicDest, themeDest)
      found++
      continue
    }

    let ok = false
    for (const base of neulisSources) {
      if (await tryDownload(base + name, publicDest)) {
        console.log('Downloaded Neulis', name)
        await copyFile(publicDest, themeDest)
        found++
        ok = true
        break
      }
    }
    if (!ok) console.log('Missing Neulis', name, '(add file to public/assets/fonts/Neulis/)')
  }

  return found
}

await syncInter()
const neulisCount = await syncNeulisFromUrls()
console.log(`Done. Neulis files ready: ${neulisCount}/${neulisFiles.length}`)

if (neulisCount < neulisFiles.length) {
  console.log('')
  console.log('Neulis is a licensed font. Copy your .otf files to:')
  console.log('  public/assets/fonts/Neulis/')
  console.log('Then run: npm run sync:fonts')
  process.exitCode = 0
}
