import type { Metadata } from 'next'

import { SampleInspectionReportPage } from '@/components/report/SampleInspectionReportPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { sampleReportPageHref } from '@/lib/site-links'
import { makeWebPageJsonLd } from '@/lib/structured-data'

const title = 'Sample Inspection Report China'
const description =
  'Preview a Huang Sourcing sample inspection report with decision notes, packaging and label evidence, scope limits, and practical next steps before payment or shipment.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: sampleReportPageHref,
  },
  openGraph: {
    title,
    description,
    url: sampleReportPageHref,
    siteName: 'Huang Sourcing',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Huang Sourcing sample inspection report and packaging label evidence',
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

const jsonLd = makeWebPageJsonLd({
  name: title,
  description,
  path: sampleReportPageHref,
  mainEntity: {
    '@type': 'CreativeWork',
    name: 'Huang Sourcing sample inspection report',
    about: [
      'China sourcing inspection report',
      'Packaging and label evidence',
      'Buyer-side risk check',
    ],
  },
})

export default function SampleInspectionReportChina() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <SampleInspectionReportPage />
    </>
  )
}
