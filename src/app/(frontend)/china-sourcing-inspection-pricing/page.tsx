import type { Metadata } from 'next'

import { ChinaSourcingInspectionPricingPage } from '@/components/pricing/ChinaSourcingInspectionPricingPage'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  makePricingGuideJsonLd,
  pricingGuideHref,
} from '@/lib/service-pricing'

const title = 'China Sourcing Inspection Pricing'
const description =
  'China sourcing inspection pricing guide for supplier verification, QC inspection, pre-shipment inspection, sample consolidation, and Amazon FBA prep quote factors.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pricingGuideHref,
  },
  openGraph: {
    title,
    description,
    url: pricingGuideHref,
    siteName: 'Huang Sourcing',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Huang Sourcing China sourcing inspection pricing guide',
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

export default function ChinaSourcingInspectionPricing() {
  return (
    <>
      <JsonLd data={makePricingGuideJsonLd()} />
      <ChinaSourcingInspectionPricingPage />
    </>
  )
}
