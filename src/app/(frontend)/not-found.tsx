import type { Metadata } from 'next'
import { ArrowRight, Home, SearchX } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { NotFoundRedirect } from '@/components/site/NotFoundRedirect'
import { Reveal } from '@/components/site/Reveal'
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
    <main className="hs-page min-h-screen antialiased">
      <SiteHeader activePage="home" topBanner={null} />

      <section className="hs-hero flex min-h-[calc(100vh-4rem)] items-center">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(220,38,38,0.65),transparent)]"
          aria-hidden
        />
        <div className="hs-container grid w-full items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="min-w-0 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-md border border-[var(--hs-border)] bg-[var(--hs-accent-soft)] px-3 py-1 text-sm font-extrabold text-[var(--hs-accent-strong)]">
              <SearchX className="size-4" aria-hidden />
              404 error
            </div>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-[var(--hs-text)] sm:text-5xl lg:text-6xl">
              This page could not be found.
            </h1>
            <p className="hs-muted mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
              The link may have moved, expired, or been typed incorrectly. We will send you back to
              the Huang Sourcing homepage automatically.
            </p>

            <NotFoundRedirect />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="hs-btn-primary h-11 px-5 text-sm">
                <Link href="/">
                  <Home className="size-4" aria-hidden />
                  Return home
                </Link>
              </Button>
              <Button asChild className="hs-btn-secondary h-11 px-5 text-sm" variant="outline">
                <Link href="/about">
                  Meet Agent Huang
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delayMs={120}>
            <div className="hs-card bg-white p-6 shadow-[var(--hs-shadow-md)] sm:p-8">
              <div className="flex items-center gap-4">
                <Image
                  alt="Huang Sourcing logo"
                  className="size-14 rounded-md shadow-sm"
                  height={56}
                  src="/brand-mark.svg"
                  width={56}
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--hs-muted)]">Huang Sourcing</p>
                  <p className="mt-1 text-xl font-extrabold text-[var(--hs-text)]">Buyer-aligned China support</p>
                </div>
              </div>
              <div className="mt-8 space-y-4 border-t border-[var(--hs-border)] pt-6">
                <div>
                  <p className="text-sm font-extrabold text-[var(--hs-text)]">Need supplier or QC help?</p>
                  <p className="hs-muted mt-2 text-sm leading-6">
                    Start from the homepage to request sourcing, supplier verification, inspection,
                    sample consolidation, or shipment prep support.
                  </p>
                </div>
                <Button asChild className="hs-btn-secondary w-full" variant="outline">
                  <Link href="/#services">View services</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
