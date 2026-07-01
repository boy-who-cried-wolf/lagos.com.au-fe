import { copyFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(root, 'src', 'data', 'podcasts.json')
const destDir = join(root, 'wp-theme', 'lagos', 'data')
const dest = join(destDir, 'podcasts.json')

mkdirSync(destDir, { recursive: true })
copyFileSync(src, dest)
console.log(`Copied podcasts.json → ${dest.replace(/\\/g, '/')}`)
