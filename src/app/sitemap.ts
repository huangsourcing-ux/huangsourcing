import type { MetadataRoute } from 'next'

import { getAbsoluteUrl } from '@/lib/site-url'
import { seoServiceSlugs } from '@/lib/seo-service-pages'

type SitemapEntry = {
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  path: string
  priority: number
}

const staticRoutes: SitemapEntry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const serviceRoutes: SitemapEntry[] = seoServiceSlugs.map((slug) => ({
    path: `/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: getAbsoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
