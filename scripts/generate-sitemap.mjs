/**
 * Generates public/sitemap.xml by scanning pages/ for static routes.
 *
 * Runs automatically before `npm run build` / `npm run generate`, or on demand
 * with `npm run sitemap`. The site origin comes from NUXT_PUBLIC_SITE_URL
 * (read from .env), falling back to SITE_URL below.
 */
import { readdir, stat, writeFile, mkdir, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const PAGES_DIR = join(ROOT, 'pages')
const OUT_FILE = join(ROOT, 'public', 'sitemap.xml')
const ROBOTS_FILE = join(ROOT, 'public', 'robots.txt')

const SITE_URL = 'https://eishipartners.com'

// Per-route tuning. Anything not listed falls back to depth-based defaults.
const ROUTE_META = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/about': { changefreq: 'monthly', priority: '0.8' },
  '/property': { changefreq: 'monthly', priority: '0.8' },
  '/business_holdings': { changefreq: 'monthly', priority: '0.8' },
  '/partnership_opportunities': { changefreq: 'monthly', priority: '0.8' },
  '/contact': { changefreq: 'yearly', priority: '0.7' },
}

function escapeXml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function defaultMeta(route) {
  if (route.startsWith('/tour/')) return { changefreq: 'yearly', priority: '0.5' }
  return { changefreq: 'monthly', priority: '0.6' }
}

async function readSiteUrl() {
  if (process.env.NUXT_PUBLIC_SITE_URL) return process.env.NUXT_PUBLIC_SITE_URL

  // The script runs outside Nuxt, so .env is not loaded for us.
  const envPath = join(ROOT, '.env')
  if (existsSync(envPath)) {
    const match = (await readFile(envPath, 'utf8')).match(/^NUXT_PUBLIC_SITE_URL\s*=\s*(.+)$/m)
    if (match) return match[1].trim().replace(/^["']|["']$/g, '')
  }

  return SITE_URL
}

async function collectVueFiles(dir) {
  const found = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) found.push(...(await collectVueFiles(full)))
    else if (entry.name.endsWith('.vue')) found.push(full)
  }
  return found
}

function fileToRoute(file) {
  const rel = relative(PAGES_DIR, file).split(/[\\/]/).join('/')
  const route = '/' + rel.replace(/\.vue$/, '').replace(/(^|\/)index$/, '')
  return route === '' ? '/' : route
}

/**
 * Rewrites only the `Sitemap:` line in robots.txt so the origin stays in one
 * place. Any crawl rules already in the file are left untouched.
 */
async function syncRobots(origin) {
  if (!existsSync(ROBOTS_FILE)) return

  const current = await readFile(ROBOTS_FILE, 'utf8')
  const directive = `Sitemap: ${origin}/sitemap.xml`
  const updated = /^Sitemap:.*$/m.test(current)
    ? current.replace(/^Sitemap:.*$/m, directive)
    : `${current.replace(/\s*$/, '')}\n\n${directive}\n`

  if (updated !== current) {
    await writeFile(ROBOTS_FILE, updated, 'utf8')
    console.log('sitemap: updated Sitemap directive in public/robots.txt')
  }
}

async function main() {
  const origin = (await readSiteUrl()).replace(/\/+$/, '')

  const files = await collectVueFiles(PAGES_DIR)
  const entries = []
  const skipped = []

  for (const file of files) {
    const route = fileToRoute(file)

    // Dynamic and catch-all routes can't be enumerated from the filesystem.
    if (/[[\]]/.test(route)) {
      skipped.push(route)
      continue
    }

    const { mtime } = await stat(file)
    entries.push({
      loc: origin + route,
      lastmod: mtime.toISOString().slice(0, 10),
      ...(ROUTE_META[route] || defaultMeta(route)),
    })
  }

  entries.sort((a, b) => a.loc.localeCompare(b.loc))

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.flatMap((e) => [
      '  <url>',
      `    <loc>${escapeXml(e.loc)}</loc>`,
      `    <lastmod>${e.lastmod}</lastmod>`,
      `    <changefreq>${e.changefreq}</changefreq>`,
      `    <priority>${e.priority}</priority>`,
      '  </url>',
    ]),
    '</urlset>',
    '',
  ].join('\n')

  await mkdir(dirname(OUT_FILE), { recursive: true })
  await writeFile(OUT_FILE, xml, 'utf8')
  await syncRobots(origin)

  console.log(`sitemap: wrote ${entries.length} routes to public/sitemap.xml (${origin})`)
  if (skipped.length) {
    console.warn(`sitemap: skipped ${skipped.length} dynamic route(s): ${skipped.join(', ')}`)
  }
}

main().catch((error) => {
  console.error('sitemap: generation failed')
  console.error(error)
  process.exit(1)
})
