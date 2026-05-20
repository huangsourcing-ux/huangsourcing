'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { MobileSiteNav } from '@/components/site/MobileSiteNav'
import { en } from '@/content/en'
import {
  chinaSourcingServicesHref,
  resourceGuideHref,
  sampleReportPageHref,
} from '@/lib/site-links'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type SiteHeaderProps = {
  topBanner: string | null
  activePage: 'home' | 'about' | 'service' | 'resources'
}

const nav = en.Nav
const navLinkClassName =
  'inline-flex h-10 items-center rounded-md px-2 text-sm font-semibold transition-all hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.98]'

export function SiteHeader({ topBanner, activePage }: SiteHeaderProps) {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {topBanner ? (
        <div className="border-b border-white/10 bg-[var(--hs-navy)] px-4 py-2.5 text-center text-[13px] font-semibold leading-5 text-white sm:py-3 sm:text-sm">
          {topBanner}
        </div>
      ) : null}
      <header
        className={cn(
          'sticky top-0 z-50 border-b bg-white/82 backdrop-blur-xl transition-all duration-300',
          hasScrolled
            ? 'border-[var(--hs-border)] shadow-[0_12px_30px_rgba(17,24,39,0.08)]'
            : 'border-transparent shadow-none',
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
          <Link
            aria-label="Huang Sourcing home"
            className="group flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            href="/"
          >
            <Image
              alt="Huang Sourcing logo"
              className="h-11 w-auto shrink-0 transition-transform group-hover:scale-[1.03] sm:h-12"
              height={238}
              priority
              sizes="48px"
              src="/brand-mark-logo.webp"
              width={192}
            />
            <div className="min-w-0 leading-tight">
              <span className="block truncate text-base font-extrabold tracking-tight text-slate-900">{nav.brand}</span>
              <span className="hidden text-xs font-medium text-slate-500 md:block">{nav.tagline}</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 md:flex md:gap-2">
            <Link
              className={cn(
                navLinkClassName,
                activePage === 'about' ? 'text-red-700' : 'text-slate-600',
              )}
              href="/about"
            >
              {nav.about}
            </Link>
            <Link
              className={cn(
                navLinkClassName,
                activePage === 'service' ? 'text-red-700' : 'text-slate-600',
              )}
              href={chinaSourcingServicesHref}
            >
              {nav.services}
            </Link>
            <Link
              className={cn(
                navLinkClassName,
                activePage === 'resources' ? 'text-red-700' : 'text-slate-600',
              )}
              href={resourceGuideHref}
            >
              {nav.resources}
            </Link>
            <Button
              asChild
              className="h-10 border-slate-300 bg-white px-4 font-bold text-slate-900 shadow-sm hover:border-red-200 hover:bg-red-50 hover:text-red-700 hover:shadow-md active:scale-[0.98]"
              size="sm"
              variant="outline"
            >
              <Link href={sampleReportPageHref}>{nav.sampleReport}</Link>
            </Button>
            <ContactAgentButton
              analyticsLabel={nav.contact}
              analyticsLocation="site_header"
              className="h-10 rounded-md bg-[#1f7a4d] px-4 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(31,122,77,0.22)] transition-all hover:bg-[#17643e] hover:shadow-[0_14px_30px_rgba(31,122,77,0.28)] active:scale-[0.98]"
              size="sm"
              variant="default"
            >
              {nav.contact}
            </ContactAgentButton>
          </nav>
          <MobileSiteNav activePage={activePage} />
        </div>
      </header>
    </>
  )
}
