import { FileDown, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { reportHref } from '@/lib/site-links'

type HomeHeroCtasProps = {
  primaryLabel: string
  secondaryLabel: string
}

export function HomeHeroCtas({ primaryLabel, secondaryLabel }: HomeHeroCtasProps) {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
      <Button
        asChild
        className="h-12 w-full min-w-0 rounded-md bg-red-600 px-4 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98] sm:w-auto sm:px-8 sm:text-base"
        size="lg"
        variant="default"
      >
        <Link className="inline-flex items-center justify-center gap-2" href="/free-china-sourcing-risk-check">
          <ShieldCheck className="size-4 shrink-0" aria-hidden />
          {primaryLabel}
        </Link>
      </Button>
      <Button
        asChild
        className="h-12 w-full min-w-0 rounded-md border border-slate-300 bg-white px-4 text-sm font-bold text-slate-900 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-700 hover:shadow-md active:scale-[0.98] sm:w-auto sm:px-8 sm:text-base"
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
