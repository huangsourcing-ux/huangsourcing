import type { Metadata } from 'next'
import { ArrowRight, Home, SearchX } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { NotFoundRedirect } from '@/components/site/NotFoundRedirect'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The requested Huang Sourcing page could not be found.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-slate-950 antialiased">
      <SiteHeader activePage="home" topBanner={null} />

      <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#fbfcfd_0%,#f5f7f8_100%)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(220,38,38,0.65),transparent)]"
          aria-hidden
        />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-24">
          <div className="min-w-0 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-md border border-red-100 bg-red-50 px-3 py-1 text-sm font-semibold text-red-700">
              <SearchX className="size-4" aria-hidden />
              404 error
            </div>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              This page could not be found.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              The link may have moved, expired, or been typed incorrectly. We will send you back to
              the Huang Sourcing homepage automatically.
            </p>

            <NotFoundRedirect />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-11 bg-red-600 px-5 font-bold text-white hover:bg-red-700">
                <Link href="/">
                  <Home className="size-4" aria-hidden />
                  Return home
                </Link>
              </Button>
              <Button asChild className="h-11 border-slate-300 px-5 font-bold" variant="outline">
                <Link href="/about">
                  Meet Agent Huang
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <Image
                  alt="Huang Sourcing logo"
                  className="size-14 rounded-md shadow-sm"
                  height={56}
                  src="/brand-mark.svg"
                  width={56}
                />
                <div>
                  <p className="text-sm font-semibold text-slate-500">Huang Sourcing</p>
                  <p className="mt-1 text-xl font-bold text-slate-950">Buyer-aligned China support</p>
                </div>
              </div>
              <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
                <div>
                  <p className="text-sm font-bold text-slate-950">Need supplier or QC help?</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Start from the homepage to request sourcing, supplier verification, inspection,
                    sample consolidation, or shipment prep support.
                  </p>
                </div>
                <Button asChild className="w-full border-slate-300 font-bold" variant="outline">
                  <Link href="/#services">View services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
