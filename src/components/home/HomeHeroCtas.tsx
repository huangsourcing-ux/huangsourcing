'use client'

import { FileDown, MessageCircle } from 'lucide-react'

import { ContactAgentDialog } from '@/components/home/ContactAgentDialog'
import { Button } from '@/components/ui/button'
import { reportHref } from '@/lib/site-links'

type HomeHeroCtasProps = {
  primaryLabel: string
  secondaryLabel: string
}

export function HomeHeroCtas({ primaryLabel, secondaryLabel }: HomeHeroCtasProps) {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
      <ContactAgentDialog
        className="h-12 w-full min-w-0 rounded-md bg-red-600 px-3 text-sm font-bold text-white shadow-sm hover:bg-red-700 sm:w-auto sm:px-8 sm:text-base"
        size="lg"
        variant="default"
      >
        <span className="inline-flex items-center justify-center gap-2">
          <MessageCircle className="size-4 shrink-0" aria-hidden />
          {primaryLabel}
        </span>
      </ContactAgentDialog>
      <Button
        asChild
        className="h-12 w-full min-w-0 rounded-md border border-slate-300 bg-white px-3 text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-50 sm:w-auto sm:px-8 sm:text-base"
        size="lg"
        variant="outline"
      >
        <a className="inline-flex items-center justify-center gap-2" href={reportHref}>
          {secondaryLabel}
          <FileDown className="size-4 shrink-0" aria-hidden />
        </a>
      </Button>
    </div>
  )
}
