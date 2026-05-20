import type { MetadataRoute } from 'next'

import { getAbsoluteUrl } from '@/lib/site-url'
import { riskGuideSlugs } from '@/lib/risk-guide-pages'
import { seoServiceSlugs } from '@/lib/seo-service-pages'
import {
  chinaSourcingInspectionPricingHref,
  resourceGuideHref,
  supplierDepositGuideHref,
} from '@/lib/site-links'
import { sourcingStageSlugs } from '@/lib/sourcing-stage-pages'
import { trustPolicyPages, trustPolicySlugs } from '@/lib/trust-policy-pages'

type SitemapEntry = {
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  path: string
  priority: number
}

const staticRoutes: SitemapEntry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  {
    path: '/china-sourcing-services',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: chinaSourcingInspectionPricingHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: '/free-china-sourcing-risk-check',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/sample-inspection-report-china',
    changeFrequency: 'monthly',
    priority: 0.78,
  },
  {
    path: resourceGuideHref,
    changeFrequency: 'monthly',
    priority: 0.82,
  },
  {
    path: supplierDepositGuideHref,
    changeFrequency: 'monthly',
    priority: 0.76,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const serviceRoutes: SitemapEntry[] = seoServiceSlugs.map((slug) => ({
    path: `/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))
  const stageRoutes: SitemapEntry[] = sourcingStageSlugs.map((slug) => ({
    path: `/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.84,
  }))
  const trustPolicyRoutes: SitemapEntry[] = trustPolicySlugs.map((slug) => ({
    path: trustPolicyPages[slug].href,
    changeFrequency: 'yearly',
    priority: 0.5,
  }))
  const riskGuideRoutes: SitemapEntry[] = riskGuideSlugs.map((slug) => ({
    path: `/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.76,
  }))

  return [...staticRoutes, ...stageRoutes, ...serviceRoutes, ...riskGuideRoutes, ...trustPolicyRoutes].map((route) => ({
    url: getAbsoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
