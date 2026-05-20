import { FileText, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { sampleReportPageHref } from '@/lib/site-links'

type HomeHeroCtasProps = {
  primaryLabel: string
  secondaryLabel: string
}

export function HomeHeroCtas({ primaryLabel, secondaryLabel }: HomeHeroCtasProps) {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
      <Button
        asChild
        className="h-12 w-full min-w-0 rounded-md bg-[var(--hs-accent)] px-4 text-sm font-extrabold text-white shadow-[var(--hs-shadow-md)] transition-all hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-lg)] active:scale-[0.98] sm:w-auto sm:px-8 sm:text-base"
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
        className="h-12 w-full min-w-0 rounded-md border border-[var(--hs-border)] bg-white/80 px-4 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] backdrop-blur transition-all hover:border-[var(--hs-accent)] hover:bg-white hover:text-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] active:scale-[0.98] sm:w-auto sm:px-8 sm:text-base"
        size="lg"
        variant="outline"
      >
        <Link className="inline-flex items-center justify-center gap-2" href={sampleReportPageHref}>
          {secondaryLabel}
          <FileText className="size-4 shrink-0" aria-hidden />
        </Link>
      </Button>
    </div>
  )
}
