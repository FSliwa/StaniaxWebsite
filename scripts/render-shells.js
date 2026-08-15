// Renders SPA routes with headless Chrome so that crawlers receive the same
// markup a user sees. Replaces the previous approach of injecting invisible
// `sr-only` headings, which is a Google spam-policy violation (hidden text).

import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.JPG': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml'
}

function startStaticServer(distDir) {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
    const candidates = [
      path.join(distDir, urlPath),
      path.join(distDir, urlPath, 'index.html'),
      path.join(distDir, 'index.html') // SPA fallback
    ]
    for (const candidate of candidates) {
      // Keep the server inside dist/ even if a request tries to escape it.
      if (!candidate.startsWith(distDir)) continue
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        res.writeHead(200, { 'Content-Type': MIME[path.extname(candidate)] || 'application/octet-stream' })
        fs.createReadStream(candidate).pipe(res)
        return
      }
    }
    res.writeHead(404).end('not found')
  })
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }))
  })
}

// framer-motion leaves `opacity: 0` on elements whose entry animation has not
// run. Capturing those verbatim would ship invisible content, so they are
// normalised away before the markup is written to disk.
//
// Odpinamy też `src` z <video>. Kapturowanie strony wymaga przewinięcia jej do
// końca, co wyzwala komponent LazyVideo i utrwala adresy filmów w statycznym
// HTML — przeglądarka zaczęłaby wtedy pobierać ~15 MB, zanim React w ogóle
// wystartuje. Filmy są dekoracyjne, a React przywraca je przy hydratacji, więc
// dla użytkownika nic się nie zmienia.
const REVEAL_SCRIPT = `
  document.querySelectorAll('[style]').forEach((el) => {
    const s = el.style;
    if (s.opacity !== '' && parseFloat(s.opacity) < 0.95) s.opacity = '1';
    if (s.transform && s.transform !== 'none') s.transform = 'none';
    if (s.visibility === 'hidden') s.visibility = 'visible';
  });
  document.querySelectorAll('video').forEach((video) => {
    video.removeAttribute('src');
    video.querySelectorAll('source').forEach((source) => source.removeAttribute('src'));
    video.setAttribute('preload', 'none');
  });
`

async function renderOne(page, origin, route) {
  const target = `${origin}/${route}`.replace(/\/+$/, '/')
  await page.goto(target, { waitUntil: 'networkidle2', timeout: 60000 })
  await page.waitForFunction("document.querySelector('#root') && document.querySelector('#root').children.length > 0", {
    timeout: 30000
  })

  // Walk the page so viewport-triggered sections mount before capture.
  await page.evaluate(async () => {
    const step = window.innerHeight
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 120))
    }
    window.scrollTo(0, 0)
    await new Promise((r) => setTimeout(r, 400))
  })

  await page.evaluate(REVEAL_SCRIPT)
  return page.evaluate(() => document.querySelector('#root').innerHTML)
}

/**
 * @param {string} distDir  built site
 * @param {string[]} routes sub-paths without leading slash ('' = home)
 * @returns {Promise<Map<string,string>>} route -> #root innerHTML
 */
export async function renderShells(distDir, routes) {
  const rendered = new Map()
  let puppeteer
  try {
    puppeteer = (await import('puppeteer')).default
  } catch {
    console.warn('[prerender] puppeteer unavailable - shells will ship without pre-rendered body')
    return rendered
  }

  const { server, port } = await startStaticServer(distDir)
  const origin = `http://127.0.0.1:${port}`
  let browser
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    })
    const page = await browser.newPage()
    await page.setViewport({ width: 1366, height: 900 })
    // Reduced motion keeps entry animations from hiding content at capture time.
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])

    for (const route of routes) {
      try {
        const html = await renderOne(page, origin, route)
        if (html && html.trim().length > 500) {
          rendered.set(route, html)
          console.log(`[prerender] rendered /${route} (${html.length} B)`)
        } else {
          console.warn(`[prerender] /${route} produced too little markup - skipped`)
        }
      } catch (err) {
        console.warn(`[prerender] failed to render /${route}: ${err.message}`)
      }
    }
  } catch (err) {
    console.warn(`[prerender] headless Chrome unavailable (${err.message}) - falling back to plain shells`)
  } finally {
    if (browser) await browser.close().catch(() => {})
    server.close()
  }
  return rendered
}
