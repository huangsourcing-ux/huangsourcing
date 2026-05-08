const fallbackSiteUrl = 'https://huangsourcing.com'

function normalizeSiteUrl(value: string | undefined) {
  if (!value) return fallbackSiteUrl

  try {
    const url = new URL(value)
    return url.origin
  } catch {
    return fallbackSiteUrl
  }
}

export function getSiteUrl() {
  return normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXT_PUBLIC_SERVER_URL,
  )
}

export function getAbsoluteUrl(path: string) {
  const siteUrl = getSiteUrl()
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${siteUrl}${normalizedPath}`
}
