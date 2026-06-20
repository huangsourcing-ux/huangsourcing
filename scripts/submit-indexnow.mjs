import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const defaultSiteUrl = 'https://www.huangsourcing.com'
const defaultEndpoint = 'https://api.indexnow.org/indexnow'
const defaultKeyFileName = '241e0649f2054a81ae807477053abbbe.txt'
const maxUrlsPerRequest = 10000

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const projectRoot = dirname(scriptDirectory)

const rawArgs = process.argv.slice(2)
const dryRun = rawArgs.includes('--dry-run')
const inputUrls = rawArgs.filter((arg) => arg !== '--dry-run')

function normalizeSiteUrl(value) {
  const rawUrl = value || defaultSiteUrl
  const url = new URL(rawUrl)

  url.protocol = 'https:'
  url.pathname = ''
  url.search = ''
  url.hash = ''

  return url
}

function decodeXmlEntities(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
}

function extractSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)]
    .map((match) => decodeXmlEntities(match[1].trim()))
    .filter(Boolean)
}

function normalizeInputUrl(value, siteUrl) {
  const url = value.startsWith('/') ? new URL(value, siteUrl) : new URL(value)

  if (url.hostname !== siteUrl.hostname) {
    throw new Error(`URL host "${url.hostname}" does not match IndexNow host "${siteUrl.hostname}": ${url.href}`)
  }

  return url.href
}

function uniqueUrls(urls) {
  return [...new Set(urls)]
}

function chunkUrls(urls) {
  const chunks = []

  for (let index = 0; index < urls.length; index += maxUrlsPerRequest) {
    chunks.push(urls.slice(index, index + maxUrlsPerRequest))
  }

  return chunks
}

async function getIndexNowKey(keyFileName) {
  if (process.env.INDEXNOW_KEY) {
    return process.env.INDEXNOW_KEY.trim()
  }

  const keyPath = join(projectRoot, 'public', keyFileName)
  return (await readFile(keyPath, 'utf8')).trim()
}

async function fetchSitemapUrls(siteUrl) {
  const sitemapUrl = new URL('/sitemap.xml', siteUrl)
  const response = await fetch(sitemapUrl)

  if (!response.ok) {
    throw new Error(`Could not fetch ${sitemapUrl.href}: HTTP ${response.status}`)
  }

  const xml = await response.text()
  return extractSitemapUrls(xml)
}

async function submitIndexNow({ endpoint, host, key, keyLocation, urlList }) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList,
    }),
  })

  const responseText = await response.text()
  const accepted = response.status === 200 || response.status === 202

  if (!accepted) {
    throw new Error(`IndexNow returned HTTP ${response.status}${responseText ? `: ${responseText}` : ''}`)
  }

  return response.status
}

async function main() {
  const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
  const endpoint = process.env.INDEXNOW_ENDPOINT || defaultEndpoint
  const keyFileName = process.env.INDEXNOW_KEY_FILE || defaultKeyFileName
  const key = await getIndexNowKey(keyFileName)
  const keyLocation = new URL(`/${keyFileName}`, siteUrl).href
  const sourceUrls = inputUrls.length > 0 ? inputUrls : await fetchSitemapUrls(siteUrl)
  const urlList = uniqueUrls(sourceUrls.map((url) => normalizeInputUrl(url, siteUrl)))

  if (urlList.length === 0) {
    throw new Error('No URLs found to submit.')
  }

  const batches = chunkUrls(urlList)

  if (dryRun) {
    console.log(`Dry run: ${urlList.length} URL(s) ready for ${endpoint}`)
    console.log(`Host: ${siteUrl.hostname}`)
    console.log(`Key location: ${keyLocation}`)
    console.log(urlList.join('\n'))
    return
  }

  for (const [index, batch] of batches.entries()) {
    const status = await submitIndexNow({
      endpoint,
      host: siteUrl.hostname,
      key,
      keyLocation,
      urlList: batch,
    })

    console.log(`Submitted batch ${index + 1}/${batches.length}: ${batch.length} URL(s), HTTP ${status}`)
  }
}

main().catch((error) => {
  console.error(error.message)
  process.exitCode = 1
})
