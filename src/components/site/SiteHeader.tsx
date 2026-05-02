import Link from 'next/link'
import Image from 'next/image'

import { ContactAgentDialog } from '@/components/home/ContactAgentDialog'
import { en } from '@/content/en'
import { reportHref } from '@/lib/site-links'
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
          <Link aria-label="Huang Sourcing home" className="group flex min-w-0 items-center gap-2.5" href="/">
            <Image
              alt="Huang Sourcing logo"
              className="size-10 rounded-md shadow-sm"
              height={40}
              src="/brand-mark.svg"
              width={40}
            />
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
              className="hidden text-sm font-semibold text-slate-600 hover:text-red-600 sm:inline"
              href={sectionHref(activePage, 'services')}
            >
              {nav.services}
            </a>
            <Button
              asChild
              className="hidden h-9 border-slate-300 sm:inline-flex"
              size="sm"
              variant="outline"
            >
              <a href={reportHref}>{nav.sampleReport}</a>
            </Button>
            <ContactAgentDialog
              className="hidden h-9 rounded-md bg-red-600 px-4 text-sm font-bold text-white shadow-sm hover:bg-red-700 sm:inline-flex"
              size="sm"
              variant="default"
            >
              {nav.contact}
            </ContactAgentDialog>
          </nav>
        </div>
      </header>
    </>
  )
}
