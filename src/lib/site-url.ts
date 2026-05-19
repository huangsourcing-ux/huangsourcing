const fallbackSiteUrl = 'https://www.huangsourcing.com'

function normalizeSiteUrl(value: string | undefined) {
  if (!value) return fallbackSiteUrl

  try {
    const url = new URL(value)
    const hostname = url.hostname.toLowerCase()

    if (
      hostname === 'huangsourcing.com' ||
      hostname === 'www.huangsourcing.com' ||
      hostname === 'localhost' ||
      hostname === '127.0.0.1'
    ) {
      return fallbackSiteUrl
    }

    url.protocol = 'https:'
    return url.origin
  } catch {
    return fallbackSiteUrl
  }
}

export function getSiteUrl() {
  return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
}

export function getAbsoluteUrl(path: string) {
  const siteUrl = getSiteUrl()
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${siteUrl}${normalizedPath}`
}
