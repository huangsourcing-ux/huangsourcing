'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { FileDown, Menu, MessageCircle, X } from 'lucide-react'
import Link from 'next/link'
import { type MouseEvent, useState } from 'react'

import { WhatsAppIcon } from '@/components/site/SocialLinks'
import { Button } from '@/components/ui/button'
import { en } from '@/content/en'
import { trackWhatsAppClick } from '@/lib/analytics'
import { publicWhatsAppHref, reportHref } from '@/lib/site-links'
import { cn } from '@/lib/utils'

type ActivePage = 'home' | 'about' | 'service'

type MobileSiteNavProps = {
  activePage: ActivePage
}

const sectionHref = (activePage: ActivePage, id: string) =>
  activePage === 'home' ? `#${id}` : `/#${id}`

const nav = en.Nav

function MobileSiteNav({ activePage }: MobileSiteNavProps) {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)
  const servicesHref = sectionHref(activePage, 'services')

  const handleServicesClick = (event: MouseEvent<HTMLAnchorElement>) => {
    close()

    if (servicesHref !== '#services') return

    event.preventDefault()
    window.history.pushState(null, '', servicesHref)
    window.setTimeout(() => {
      document.getElementById('services')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 150)
  }

  return (
    <DialogPrimitive.Root onOpenChange={setOpen} open={open}>
      <DialogPrimitive.Trigger asChild>
        <Button
          aria-label="Open site menu"
          className="size-11 rounded-md border-slate-300 bg-white text-slate-900 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-700 active:scale-[0.98] sm:hidden"
          size="icon"
          type="button"
          variant="outline"
        >
          <Menu className="size-5" aria-hidden />
        </Button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[70] bg-slate-950/50 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed inset-x-3 top-3 z-[80] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2 sm:hidden">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
            <div className="min-w-0">
              <DialogPrimitive.Title className="truncate text-base font-extrabold text-slate-950">
                {nav.brand}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-0.5 text-xs font-semibold text-slate-500">
                {nav.tagline}
              </DialogPrimitive.Description>
            </div>
            <DialogPrimitive.Close asChild>
              <Button
                aria-label="Close site menu"
                className="size-10 rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                size="icon"
                type="button"
                variant="ghost"
              >
                <X className="size-5" aria-hidden />
              </Button>
            </DialogPrimitive.Close>
          </div>

          <nav aria-label="Mobile site navigation" className="grid gap-2 p-3">
            <Link
              className={cn(
                'flex min-h-12 items-center rounded-md px-3 text-base font-bold transition-all hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.99]',
                activePage === 'about' ? 'bg-red-50 text-red-700' : 'text-slate-800',
              )}
              href="/about"
              onClick={close}
            >
              {nav.about}
            </Link>
            <a
              className="flex min-h-12 items-center rounded-md px-3 text-base font-bold text-slate-800 transition-all hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.99]"
              href={servicesHref}
              onClick={handleServicesClick}
            >
              {nav.services}
            </a>
            <a
              className="flex min-h-12 items-center justify-between gap-3 rounded-md border border-slate-200 bg-slate-50 px-3 text-base font-bold text-slate-900 shadow-sm transition-all hover:border-red-200 hover:bg-white hover:text-red-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.99]"
              href={reportHref}
              onClick={close}
            >
              <span>{nav.sampleReport}</span>
              <FileDown className="size-4 shrink-0" aria-hidden />
            </a>
            <a
              aria-label="Talk to Agent Huang on WhatsApp"
              className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-4 text-base font-extrabold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.99]"
              href={publicWhatsAppHref}
              onClick={() => {
                trackWhatsAppClick({
                  ctaLabel: nav.contact,
                  ctaLocation: 'mobile_site_nav',
                })
                close()
              }}
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="size-4 shrink-0" />
              {nav.contact}
            </a>
          </nav>

          <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold leading-5 text-slate-600">
            <MessageCircle className="mr-1.5 inline size-3.5 text-red-600" aria-hidden />
            China-side sourcing support before payment or pickup.
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export { MobileSiteNav }
