import { ShieldCheck } from 'lucide-react'
import Link from 'next/link'

import { Reveal } from '@/components/site/Reveal'

type ArticleBylineProps = {
  author?: 'agent-huang' | 'editorial-team'
  modifiedDate?: string
  publishedDate: string
}

type EvidenceBasisSectionProps = {
  className?: string
  intro: string
  items: string[]
  title?: string
}

type EvidenceDecisionRow = {
  buyerDecision: string
  evidence: string
  riskNode: string
}

type EvidenceDecisionMatrixProps = {
  id?: string
  intro: string
  rows: EvidenceDecisionRow[]
  title: string
}

export function ArticleByline({
  author = 'agent-huang',
  modifiedDate,
  publishedDate,
}: ArticleBylineProps) {
  return (
    <div className="mt-5 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-4 shadow-[var(--hs-shadow-sm)]">
      <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm font-extrabold leading-6 text-[var(--hs-text)]">
        <span>
          Written by{' '}
          <Link
            className="text-[var(--hs-accent)] underline-offset-4 hover:underline"
            href={author === 'editorial-team' ? '/about' : '/about#agent-huang'}
          >
            {author === 'editorial-team'
              ? 'Huang Sourcing Editorial Team'
              : 'Agent Huang'}
          </Link>
        </span>
        <span className="hidden sm:inline" aria-hidden>
          |
        </span>
        <span className="basis-full sm:basis-auto">Published on {publishedDate}</span>
        {modifiedDate ? (
          <>
            <span className="hidden sm:inline" aria-hidden>
              |
            </span>
            <span className="basis-full sm:basis-auto">Updated on {modifiedDate}</span>
          </>
        ) : null}
      </p>
      <p className="hs-muted mt-1 text-sm leading-6">
        {author === 'editorial-team'
          ? 'Based on cited public records and buyer-side sourcing analysis; limits and specialist responsibilities are stated below.'
          : 'China-side sourcing partner helping overseas buyers verify suppliers, inspect goods, and reduce payment or shipment risk before money or goods move.'}
      </p>
    </div>
  )
}

export function EvidenceBasisSection({
  className = 'hs-section-soft',
  intro,
  items,
  title = 'Evidence basis for this advice.',
}: EvidenceBasisSectionProps) {
  return (
    <section className={className} id="evidence-basis">
      <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="hs-icon-box size-12">
            <ShieldCheck className="size-6" aria-hidden />
          </div>
          <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
            {title}
          </h2>
          <p className="hs-muted mt-3 text-base leading-7">{intro}</p>
        </Reveal>
        <Reveal className="lg:col-span-8">
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--hs-muted)]">
            {items.map((item) => (
              <li className="flex gap-2" key={item}>
                <ShieldCheck
                  className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function EvidenceDecisionMatrix({
  id = 'evidence-basis',
  intro,
  rows,
  title,
}: EvidenceDecisionMatrixProps) {
  return (
    <section className="hs-section-soft" id={id}>
      <div className="hs-container hs-section">
        <Reveal className="max-w-3xl">
          <p className="hs-eyebrow">Evidence to decision matrix</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
            {title}
          </h2>
          <p className="hs-muted mt-3 text-base leading-7">{intro}</p>
        </Reveal>
        <div className="mt-8 overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
          <div className="grid bg-[var(--hs-navy)] text-sm font-extrabold text-white md:grid-cols-3">
            <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">Risk node</div>
            <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">Evidence basis</div>
            <div className="p-4">Buyer decision</div>
          </div>
          {rows.map((row) => (
            <div
              className="grid border-t border-[var(--hs-border)] text-sm leading-6 text-[var(--hs-muted)] md:grid-cols-3"
              key={row.riskNode}
            >
              <div className="bg-[var(--hs-bg-soft)] p-4 font-extrabold text-[var(--hs-text)] md:border-r md:border-[var(--hs-border)]">
                {row.riskNode}
              </div>
              <div className="p-4 md:border-r md:border-[var(--hs-border)]">{row.evidence}</div>
              <div className="p-4">{row.buyerDecision}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
