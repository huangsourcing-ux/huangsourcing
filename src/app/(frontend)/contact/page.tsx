import type { Metadata } from 'next'

import { ContactPage } from '@/components/contact/ContactPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { contactHref } from '@/lib/site-links'
import { getAbsoluteUrl } from '@/lib/site-url'
import { makeOrganizationReference } from '@/lib/structured-data'

const title = 'Contact Huang Sourcing'
const description =
  'Contact Huang Sourcing for buyer-side China sourcing support, supplier verification, QC inspection, sample coordination, and shipment preparation.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: contactHref,
  },
  openGraph: {
    title,
    description,
    url: contactHref,
    siteName: 'Huang Sourcing',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Huang Sourcing buyer-side China sourcing support contact details',
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
  '@type': 'ContactPage',
  name: title,
  description,
  url: getAbsoluteUrl(contactHref),
  inLanguage: 'en',
  publisher: makeOrganizationReference(),
}

export default function ContactRoutePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ContactPage />
    </>
  )
}
