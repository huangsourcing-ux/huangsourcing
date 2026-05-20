import type { Metadata } from 'next'

import { WhatToSendBeforeChinaInspectionPage } from '@/components/prep/WhatToSendBeforeChinaInspectionPage'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  bookingPrepHref,
  makeBookingPrepJsonLd,
} from '@/lib/inspection-booking-prep'

const title = 'What to Send Before China Inspection'
const description =
  'What to send before booking supplier verification, QC inspection, pre-shipment inspection, Amazon FBA prep, or sample consolidation in China.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: bookingPrepHref,
  },
  openGraph: {
    title,
    description,
    url: bookingPrepHref,
    siteName: 'Huang Sourcing',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Huang Sourcing China inspection booking prep guide',
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

export default function WhatToSendBeforeChinaInspection() {
  return (
    <>
      <JsonLd data={makeBookingPrepJsonLd()} />
      <WhatToSendBeforeChinaInspectionPage />
    </>
  )
}
