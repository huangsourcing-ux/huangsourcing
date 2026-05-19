import type { Metadata } from 'next'

import { JsonLd } from '@/components/seo/JsonLd'
import { SiteFooter } from '@/components/site/SiteFooter'
import { TikTokRiskCheckLanding } from '@/components/tiktok/TikTokRiskCheckLanding'
import { businessEmail, publicWhatsAppHref } from '@/lib/site-links'
import { getAbsoluteUrl } from '@/lib/site-url'

const title = 'Free China Sourcing Risk Check'
const description =
  'Send your supplier, product, payment status, and shipment stage. Huang Sourcing will suggest the next practical China-side check before you pay, pickup, or ship.'
const path = '/free-china-sourcing-risk-check'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: path,
    siteName: 'Huang Sourcing',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Huang Sourcing inspection report, warehouse cartons, and label evidence',
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

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: getAbsoluteUrl(path),
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 'Huang Sourcing',
      url: getAbsoluteUrl('/'),
      email: businessEmail,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Huang Sourcing',
      url: getAbsoluteUrl('/'),
    },
    areaServed: {
      '@type': 'Country',
      name: 'China',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: publicWhatsAppHref,
      availableLanguage: ['English', 'Chinese'],
    },
  },
]

export default function FreeChinaSourcingRiskCheckPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <TikTokRiskCheckLanding />
      <SiteFooter />
    </>
  )
}
