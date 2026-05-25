import type { Metadata } from 'next'

import { ChinaSourcingServicesPage } from '@/components/services/ChinaSourcingServicesPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { servicePricingBySlug } from '@/lib/service-pricing'
import { chinaSourcingServicesHref } from '@/lib/site-links'
import { getAbsoluteUrl } from '@/lib/site-url'
import {
  makeOrganizationReference,
  makeServiceJsonLd,
} from '@/lib/structured-data'

const title = 'China Sourcing Services'
const description =
  'Compare Huang Sourcing services by procurement stage and buyer type, from free sourcing risk checks to supplier verification, QC inspection, pre-shipment inspection, Amazon FBA prep, and sample consolidation.'

type ServiceOverviewJsonLdItem = {
  description: string
  href: string
  name: string
  offers?: unknown
  priceValue?: string
}

const serviceOverviewJsonLdItems: ServiceOverviewJsonLdItem[] = [
  {
    name: 'Free Sourcing Risk Check',
    href: '/free-china-sourcing-risk-check',
    description:
      'A free first-pass review of supplier, product, payment, and shipment-stage risk before choosing a paid China-side service.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      url: getAbsoluteUrl('/free-china-sourcing-risk-check'),
    },
  },
  {
    name: 'Supplier Verification China',
    href: '/supplier-verification-china',
    description: servicePricingBySlug['supplier-verification-china'].quoteNote,
    priceValue: servicePricingBySlug['supplier-verification-china'].priceValue,
  },
  {
    name: 'Sample Consolidation China',
    href: '/sample-consolidation-china',
    description: servicePricingBySlug['sample-consolidation-china'].quoteNote,
    priceValue: servicePricingBySlug['sample-consolidation-china'].priceValue,
  },
  {
    name: 'QC Inspection China',
    href: '/qc-inspection-china',
    description: servicePricingBySlug['qc-inspection-china'].quoteNote,
    priceValue: servicePricingBySlug['qc-inspection-china'].priceValue,
  },
  {
    name: 'China Pre-Shipment Inspection',
    href: '/china-pre-shipment-inspection',
    description: servicePricingBySlug['china-pre-shipment-inspection'].quoteNote,
    priceValue: servicePricingBySlug['china-pre-shipment-inspection'].priceValue,
  },
  {
    name: 'Amazon FBA Prep China',
    href: '/amazon-fba-prep-china',
    description: servicePricingBySlug['amazon-fba-prep-china'].quoteNote,
  },
]

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
  publisher: makeOrganizationReference(),
  hasPart: serviceOverviewJsonLdItems.map((item) =>
    makeServiceJsonLd(
      {
        name: item.name,
        description: item.description,
        serviceType: item.name,
        url: getAbsoluteUrl(item.href),
        offers:
          item.offers ??
          (item.priceValue
            ? {
                '@type': 'Offer',
                price: item.priceValue,
                priceCurrency: 'USD',
                url: getAbsoluteUrl(item.href),
              }
            : {
                '@type': 'Offer',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'USD',
                  description: 'Custom quote',
                },
                url: getAbsoluteUrl(item.href),
              }),
      },
      { includeContext: false },
    ),
  ),
}

export default function ChinaSourcingServices() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ChinaSourcingServicesPage />
    </>
  )
}
