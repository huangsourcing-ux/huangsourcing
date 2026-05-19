import type { Metadata } from 'next'

import { ChinaSourcingServicesPage } from '@/components/services/ChinaSourcingServicesPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { businessEmail, chinaSourcingServicesHref } from '@/lib/site-links'
import { getAbsoluteUrl } from '@/lib/site-url'

const title = 'China Sourcing Services'
const description =
  'Compare Huang Sourcing services by procurement stage and buyer type, from free sourcing risk checks to supplier verification, QC inspection, pre-shipment inspection, Amazon FBA prep, and sample consolidation.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: chinaSourcingServicesHref,
  },
  openGraph: {
    title,
    description,
    url: chinaSourcingServicesHref,
    siteName: 'Huang Sourcing',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Huang Sourcing China sourcing services overview',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: title,
  description,
  url: getAbsoluteUrl(chinaSourcingServicesHref),
  inLanguage: 'en',
  publisher: {
    '@type': 'Organization',
    name: 'Huang Sourcing',
    url: getAbsoluteUrl('/'),
    email: businessEmail,
  },
  hasPart: [
    'Free Sourcing Risk Check',
    'Supplier Verification China',
    'Sample Consolidation China',
    'QC Inspection China',
    'China Pre-Shipment Inspection',
    'Amazon FBA Prep China',
  ].map((name) => ({
    '@type': 'Service',
    name,
    provider: {
      '@type': 'Organization',
      name: 'Huang Sourcing',
    },
  })),
}

export default function ChinaSourcingServices() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ChinaSourcingServicesPage />
    </>
  )
}
