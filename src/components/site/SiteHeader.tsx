import Link from 'next/link'

import { en } from '@/content/en'
import { bookingMailto, reportHref } from '@/lib/site-links'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type SiteHeaderProps = {
  topBanner: string | null
  activePage: 'home' | 'about'
}

const sectionHref = (activePage: SiteHeaderProps['activePage'], id: string) =>
  activePage === 'home' ? `#${id}` : `/#${id}`

const nav = en.Nav

export function SiteHeader({ topBanner, activePage }: SiteHeaderProps) {
  return (
    <>
      {topBanner ? (
        <div className="border-b border-slate-200 bg-slate-950 py-2 text-center text-xs font-medium text-white sm:text-sm">
          {topBanner}
        </div>
      ) : null}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
          <Link className="group flex min-w-0 items-center gap-2.5" href="/">
            <span className="grid size-10 place-content-center rounded-md bg-slate-950 text-sm font-extrabold text-white shadow-sm">
              HS
            </span>
            <div className="min-w-0 leading-tight">
              <span className="block truncate text-base font-extrabold tracking-tight text-slate-900">{nav.brand}</span>
              <span className="hidden text-xs font-medium text-slate-500 md:block">{nav.tagline}</span>
            </div>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              className={cn(
                'text-sm font-semibold hover:text-red-600',
                activePage === 'about' ? 'text-red-700' : 'text-slate-600',
              )}
              href="/about"
            >
              {nav.about}
            </Link>
            <a
              className="hidden text-sm font-semibold text-slate-600 hover:text-red-600 lg:inline"
              href={sectionHref(activePage, 'integrity')}
            >
              {nav.trust}
            </a>
            <a
              className="hidden text-sm font-semibold text-slate-600 hover:text-red-600 sm:inline"
              href={sectionHref(activePage, 'services')}
            >
              {nav.services}
            </a>
            <a
              className="hidden text-sm font-semibold text-slate-600 hover:text-red-600 sm:inline"
              href={sectionHref(activePage, 'proof')}
            >
              {nav.reviews}
            </a>
            <Button
              asChild
              className="hidden h-9 border-slate-300 sm:inline-flex"
              size="sm"
              variant="outline"
            >
              <a href={reportHref}>{nav.sampleReport}</a>
            </Button>
            <Button
              asChild
              className="hidden h-9 rounded-md bg-red-600 px-4 text-sm font-bold text-white shadow-sm hover:bg-red-700 sm:inline-flex"
              size="sm"
            >
              <a href={bookingMailto}>{nav.bookFrom299}</a>
            </Button>
          </nav>
        </div>
      </header>
    </>
  )
}
