import Link from 'next/link'
import Image from 'next/image'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { MobileSiteNav } from '@/components/site/MobileSiteNav'
import { en } from '@/content/en'
import { reportHref } from '@/lib/site-links'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type SiteHeaderProps = {
  topBanner: string | null
  activePage: 'home' | 'about' | 'service'
}

const sectionHref = (activePage: SiteHeaderProps['activePage'], id: string) =>
  activePage === 'home' ? `#${id}` : `/#${id}`

const nav = en.Nav
const navLinkClassName =
  'inline-flex h-10 items-center rounded-md px-2 text-sm font-semibold transition-all hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.98]'

export function SiteHeader({ topBanner, activePage }: SiteHeaderProps) {
  return (
    <>
      {topBanner ? (
        <div className="border-b border-slate-200 bg-slate-950 px-4 py-2.5 text-center text-[13px] font-semibold leading-5 text-white sm:py-3 sm:text-sm">
          {topBanner}
        </div>
      ) : null}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
          <Link
            aria-label="Huang Sourcing home"
            className="group flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            href="/"
          >
            <Image
              alt="Huang Sourcing logo"
              className="size-10 rounded-md shadow-sm transition-transform group-hover:scale-[1.03]"
              height={40}
              src="/brand-mark.svg"
              width={40}
            />
            <div className="min-w-0 leading-tight">
              <span className="block truncate text-base font-extrabold tracking-tight text-slate-900">{nav.brand}</span>
              <span className="hidden text-xs font-medium text-slate-500 md:block">{nav.tagline}</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 sm:flex sm:gap-2">
            <Link
              className={cn(
                navLinkClassName,
                activePage === 'about' ? 'text-red-700' : 'text-slate-600',
              )}
              href="/about"
            >
              {nav.about}
            </Link>
            <a
              className="inline-flex h-10 items-center rounded-md px-2 text-sm font-semibold text-slate-600 transition-all hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.98]"
              href={sectionHref(activePage, 'services')}
            >
              {nav.services}
            </a>
            <Button
              asChild
              className="h-10 border-slate-300 bg-white px-4 font-bold text-slate-900 shadow-sm hover:border-red-200 hover:bg-red-50 hover:text-red-700 hover:shadow-md active:scale-[0.98]"
              size="sm"
              variant="outline"
            >
              <a href={reportHref}>{nav.sampleReport}</a>
            </Button>
            <ContactAgentButton
              analyticsLabel={nav.contact}
              analyticsLocation="site_header"
              className="h-10 rounded-md bg-red-600 px-4 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98]"
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
