import type { Metadata } from 'next'

import { ChinaSourcingRiskGuidesPage } from '@/components/resources/ChinaSourcingRiskGuidesPage'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  makeResourceGuideJsonLd,
} from '@/lib/resource-guide-categories'
import { resourceGuideHref } from '@/lib/site-links'

const title = 'China Sourcing Risk Guides'
const description =
  'China sourcing risk guide center for overseas buyers comparing supplier verification, QC inspection, pre-shipment inspection, Amazon FBA prep, sample consolidation, risk notes, and buyer decision checklists.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: resourceGuideHref,
  },
  openGraph: {
    title,
    description,
    url: resourceGuideHref,
    siteName: 'Huang Sourcing',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Huang Sourcing China sourcing risk guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
}

export default function ChinaSourcingRiskGuides() {
  return (
    <>
      <JsonLd data={makeResourceGuideJsonLd()} />
      <ChinaSourcingRiskGuidesPage />
    </>
  )
}
