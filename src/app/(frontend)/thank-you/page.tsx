import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, FileDown, Home } from 'lucide-react'
import Link from 'next/link'

import { ThankYouEventTracker } from '@/components/analytics/ThankYouEventTracker'
import { Reveal } from '@/components/site/Reveal'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  chinaSourcingServicesHref,
  sampleReportPageHref,
} from '@/lib/site-links'

export const metadata: Metadata = {
  title: 'Thank You',
  description:
    'Thank you for sending your Huang Sourcing request. Agent Huang will review the sourcing risk context and suggest the next China-side step.',
  alternates: {
    canonical: '/thank-you',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <main className="hs-page min-h-screen antialiased">
      <ThankYouEventTracker />
      <SiteHeader activePage="home" topBanner={null} />

      <section className="hs-hero">
        <Reveal className="hs-container max-w-4xl py-16 text-center sm:py-20">
          <div className="mx-auto flex size-14 items-center justify-center rounded-md bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
            <CheckCircle2 className="size-7" aria-hidden />
          </div>
          <p className="hs-eyebrow mt-6">Request received</p>
          <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-5xl">
            Thank you. Agent Huang has your sourcing context.
          </h1>
          <p className="hs-muted mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            We will review the visible risk points and suggest the next practical China-side
            check before deposit, balance payment, pickup, or shipment.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="hs-btn-primary h-12 px-6 text-sm"
              size="lg"
              variant="default"
            >
              <Link href={sampleReportPageHref}>
                <FileDown className="size-4" aria-hidden />
                View sample report page
              </Link>
            </Button>
            <Button
              asChild
              className="hs-btn-secondary h-12 px-6 text-sm"
              size="lg"
              variant="outline"
            >
              <Link href={chinaSourcingServicesHref}>
                View services overview
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>

          <Link
            className="mt-6 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-extrabold text-[var(--hs-muted)] transition-colors hover:bg-white hover:text-[var(--hs-text)]"
            href="/"
          >
            <Home className="size-4" aria-hidden />
            Return home
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  )
}
