'use client'

import { FileDown, MessageCircle } from 'lucide-react'
import Link from 'next/link'

import { ContactAgentDialog } from '@/components/home/ContactAgentDialog'
import { Button } from '@/components/ui/button'
import { reportHref } from '@/lib/site-links'

type HomeHeroCtasProps = {
  primaryLabel: string
  secondaryLabel: string
}

export function HomeHeroCtas({ primaryLabel, secondaryLabel }: HomeHeroCtasProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <ContactAgentDialog
        className="h-12 rounded-full bg-[#ff3d3d] px-8 text-base font-bold text-white shadow-lg shadow-red-500/25 hover:bg-[#e63535]"
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
        className="h-12 rounded-full border-2 border-slate-200 bg-white px-8 text-base font-bold text-slate-900 shadow-sm hover:bg-slate-50"
        size="lg"
        variant="outline"
      >
        <Link className="inline-flex items-center justify-center gap-2" href={reportHref}>
          {secondaryLabel}
          <FileDown className="size-4 shrink-0" aria-hidden />
        </Link>
      </Button>
    </div>
  )
}