import type { Metadata } from 'next'
import Script from 'next/script'

import { en } from '@/content/en'

import '../globals.css'

const googleAnalyticsId = 'G-WCDP8RQ374'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://huangsourcing.com'),
  title: {
    default: en.Meta.title,
    template: '%s | Huang Sourcing',
  },
  description: en.Meta.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: en.Meta.title,
    description: en.Meta.description,
    url: '/',
    siteName: 'Huang Sourcing',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Huang Sourcing inspection report, packaging labels, and warehouse QC evidence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: en.Meta.title,
    description: en.Meta.description,
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/brand-mark.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

type Props = {
  children: React.ReactNode
}

const RootFrontendLayout = ({ children }: Props) => (
  <html className="h-full antialiased" lang="en" suppressHydrationWarning>
    <body className="min-h-full flex flex-col bg-background text-foreground">
      {children}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}');
        `}
      </Script>
    </body>
  </html>
)

export default RootFrontendLayout
