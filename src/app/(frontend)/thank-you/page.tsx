import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, FileDown, Home } from 'lucide-react'
import Link from 'next/link'

import { ThankYouEventTracker } from '@/components/analytics/ThankYouEventTracker'
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
    <main className="min-h-screen bg-white text-slate-950 antialiased">
      <ThankYouEventTracker />
      <SiteHeader activePage="home" topBanner={null} />

      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#fbfcfd_0%,#f5f7f8_100%)]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <div className="mx-auto flex size-14 items-center justify-center rounded-md bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
            <CheckCircle2 className="size-7" aria-hidden />
          </div>
          <p className="mt-6 text-sm font-semibold text-red-600">Request received</p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Thank you. Agent Huang has your sourcing context.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We will review the visible risk points and suggest the next practical China-side
            check before deposit, balance payment, pickup, or shipment.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-md bg-red-600 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98]"
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
              className="h-12 rounded-md border-slate-300 bg-white px-6 text-sm font-bold text-slate-900 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-700 hover:shadow-md active:scale-[0.98]"
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
            className="mt-6 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
            href="/"
          >
            <Home className="size-4" aria-hidden />
            Return home
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
