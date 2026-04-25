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
        <div className="border-b border-slate-200/90 bg-gradient-to-r from-violet-600/90 to-[#ff3d3d] py-2 text-center text-xs font-semibold text-white sm:text-sm">
          {topBanner}
        </div>
      ) : null}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link className="group flex items-center gap-2.5" href="/">
            <span className="grid size-10 place-content-center rounded-full bg-gradient-to-br from-violet-600 to-[#ff3d3d] text-sm font-extrabold text-white shadow-md">
              HF
            </span>
            <div className="flex flex-col leading-tight sm:flex-row sm:items-baseline sm:gap-2">
              <span className="text-base font-extrabold tracking-tight text-slate-900">{nav.brand}</span>
              <span className="text-xs font-medium text-slate-500 sm:text-sm">{nav.tagline}</span>
            </div>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              className={cn(
                'text-sm font-semibold hover:text-violet-700',
                activePage === 'about' ? 'text-violet-800' : 'text-slate-600',
              )}
              href="/about"
            >
              {nav.about}
            </Link>
            <a
              className="hidden text-sm font-semibold text-slate-600 hover:text-violet-700 lg:inline"
              href={sectionHref(activePage, 'roadmap')}
            >
              {nav.roadmap}
            </a>
            <a
              className="hidden text-sm font-semibold text-slate-600 hover:text-violet-700 lg:inline"
              href={sectionHref(activePage, 'integrity')}
            >
              {nav.trust}
            </a>
            <a
              className="text-sm font-semibold text-slate-600 hover:text-violet-700"
              href={sectionHref(activePage, 'services')}
            >
              {nav.services}
            </a>
            <a
              className="text-sm font-semibold text-slate-600 hover:text-violet-700"
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
              className="h-9 bg-[#ff3d3d] px-4 text-sm font-bold text-white shadow-sm hover:bg-[#e63535]"
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
