import { readdir, stat } from 'node:fs/promises'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const themeDir = join(root, 'wp-theme', 'lagos')
const zipPath = join(root, 'wp-theme', 'lagos-financial.zip')

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await collectFiles(full)))
    else files.push(full)
  }
  return files
}

const py = `
import zipfile
from pathlib import Path
theme = Path(${JSON.stringify(themeDir.replace(/\\/g, '/'))})
out = Path(${JSON.stringify(zipPath.replace(/\\/g, '/'))})
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as zf:
    for f in sorted(theme.rglob('*')):
        if f.is_file():
            zf.write(f, f.relative_to(theme).as_posix())
print('created', out)
`

await execFileAsync('python', ['-c', py])

const files = await collectFiles(themeDir)
const fontFiles = files.filter((f) => f.includes('assets\\fonts') || f.includes('assets/fonts'))
const imageFiles = files.filter((f) => f.includes('assets\\images') || f.includes('assets/images'))

console.log(`Theme zip ready: ${zipPath}`)
console.log(`Total files: ${files.length}`)
console.log(`Image files included: ${imageFiles.length}`)
console.log(`Font files included: ${fontFiles.length}`)
for (const font of fontFiles) {
  const info = await stat(font)
  console.log(`  ${relative(themeDir, font).replace(/\\/g, '/')} (${info.size} bytes)`)
}
