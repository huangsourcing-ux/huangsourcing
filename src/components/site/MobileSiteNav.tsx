'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { FileDown, Menu, MessageCircle, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { WhatsAppIcon } from '@/components/site/SocialLinks'
import { Button } from '@/components/ui/button'
import { en } from '@/content/en'
import { trackWhatsAppClick } from '@/lib/analytics'
import {
  chinaSourcingServicesHref,
  publicWhatsAppHref,
  resourceGuideHref,
  sampleReportPageHref,
} from '@/lib/site-links'
import { cn } from '@/lib/utils'

type ActivePage = 'home' | 'about' | 'service' | 'resources' | 'contact'

type MobileSiteNavProps = {
  activePage: ActivePage
}

const nav = en.Nav

function MobileSiteNav({ activePage }: MobileSiteNavProps) {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <DialogPrimitive.Root onOpenChange={setOpen} open={open}>
      <DialogPrimitive.Trigger asChild>
        <Button
          aria-label="Open site menu"
          className="size-11 rounded-md border-[var(--hs-border)] bg-white text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-all hover:border-[var(--hs-accent)] hover:bg-[var(--hs-accent-soft)] hover:text-[var(--hs-accent-strong)] active:scale-[0.98] lg:hidden"
          size="icon"
          type="button"
          variant="outline"
        >
          <Menu className="size-5" aria-hidden />
        </Button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[70] bg-[var(--hs-navy)]/55 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed inset-x-3 top-3 z-[80] overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-lg)] outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2 lg:hidden">
          <div className="flex items-center justify-between border-b border-[var(--hs-border)] bg-[var(--hs-bg-soft)] px-4 py-3">
            <div className="min-w-0">
              <DialogPrimitive.Title className="truncate text-base font-extrabold text-[var(--hs-text)]">
                {nav.brand}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-0.5 text-xs font-semibold text-[var(--hs-muted)]">
                {nav.tagline}
              </DialogPrimitive.Description>
            </div>
            <DialogPrimitive.Close asChild>
              <Button
                aria-label="Close site menu"
                className="size-10 rounded-md text-[var(--hs-muted)] hover:bg-white hover:text-[var(--hs-text)]"
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
                'flex min-h-12 items-center rounded-md px-3 text-base font-extrabold transition-all hover:bg-[var(--hs-accent-soft)] hover:text-[var(--hs-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hs-accent)] focus-visible:ring-offset-2 active:scale-[0.99]',
                activePage === 'about' ? 'bg-[var(--hs-accent-soft)] text-[var(--hs-accent-strong)]' : 'text-[var(--hs-text)]',
              )}
              href="/about"
              onClick={close}
            >
              {nav.about}
            </Link>
            <Link
              className={cn(
                'flex min-h-12 items-center rounded-md px-3 text-base font-extrabold transition-all hover:bg-[var(--hs-accent-soft)] hover:text-[var(--hs-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hs-accent)] focus-visible:ring-offset-2 active:scale-[0.99]',
                activePage === 'service' ? 'bg-[var(--hs-accent-soft)] text-[var(--hs-accent-strong)]' : 'text-[var(--hs-text)]',
              )}
              href={chinaSourcingServicesHref}
              onClick={close}
            >
              {nav.services}
            </Link>
            <Link
              className={cn(
                'flex min-h-12 items-center rounded-md px-3 text-base font-extrabold transition-all hover:bg-[var(--hs-accent-soft)] hover:text-[var(--hs-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hs-accent)] focus-visible:ring-offset-2 active:scale-[0.99]',
                activePage === 'resources' ? 'bg-[var(--hs-accent-soft)] text-[var(--hs-accent-strong)]' : 'text-[var(--hs-text)]',
              )}
              href={resourceGuideHref}
              onClick={close}
            >
              {nav.resources}
            </Link>
            <Link
              className="flex min-h-12 items-center justify-between gap-3 rounded-md border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] px-3 text-base font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-all hover:border-[var(--hs-accent)] hover:bg-white hover:text-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hs-accent)] focus-visible:ring-offset-2 active:scale-[0.99]"
              href={sampleReportPageHref}
              onClick={close}
            >
              <span>{nav.sampleReport}</span>
              <FileDown className="size-4 shrink-0" aria-hidden />
            </Link>
            <a
              aria-label="Talk to Agent Huang on WhatsApp"
              className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#1f7a4d] px-4 text-base font-extrabold text-white shadow-[0_10px_24px_rgba(31,122,77,0.22)] transition-all hover:bg-[#17643e] hover:shadow-[0_14px_30px_rgba(31,122,77,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f7a4d] focus-visible:ring-offset-2 active:scale-[0.99]"
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

          <div className="border-t border-[var(--hs-border)] bg-[var(--hs-bg-soft)] px-4 py-3 text-xs font-semibold leading-5 text-[var(--hs-muted)]">
            <MessageCircle className="mr-1.5 inline size-3.5 text-[var(--hs-accent)]" aria-hidden />
            China-side sourcing support before payment or pickup.
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export { MobileSiteNav }
