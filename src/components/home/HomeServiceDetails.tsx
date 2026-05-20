'use client'

import { Check, Plus, X } from 'lucide-react'
import { useState } from 'react'

type DetailService = {
  title: string
  summary: string
  price: string
  bestFor: string
  deliverables: string[]
}

type HomeServiceDetailsProps = {
  services: DetailService[]
}

export function HomeServiceDetails({ services }: HomeServiceDetailsProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-8 overflow-hidden rounded-lg border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
      <button
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-base font-extrabold text-[var(--hs-text)] transition-all hover:bg-[var(--hs-accent-soft)] hover:text-[var(--hs-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hs-accent)] focus-visible:ring-offset-2"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span>{open ? 'Hide detailed service options' : 'See detailed service options and starting prices'}</span>
        {open ? (
          <X className="size-5 shrink-0 text-slate-400" aria-hidden />
        ) : (
          <Plus className="size-5 shrink-0 text-slate-400" aria-hidden />
        )}
      </button>
      {open ? (
        <div className="border-t border-[var(--hs-border)] bg-[var(--hs-bg-soft)] px-5 py-5">
          <div className="grid gap-4 lg:grid-cols-2">
            {services.map((service) => (
              <article
                className={`rounded-md border border-[var(--hs-border)] bg-white p-4 shadow-[var(--hs-shadow-sm)] transition-all hover:-translate-y-0.5 hover:border-[var(--hs-accent)] hover:shadow-[var(--hs-shadow-md)] ${
                  service.title === 'FBA prep and logistics' ? 'lg:col-span-2' : ''
                }`}
                key={service.title}
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row">
                  <div>
                    <h3 className="font-extrabold text-[var(--hs-text)]">{service.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--hs-muted)]">{service.summary}</p>
                  </div>
                  <p className="shrink-0 font-extrabold text-[var(--hs-accent)]">{service.price}</p>
                </div>
                <p className="mt-3 text-sm text-[var(--hs-muted)]">
                  <span className="font-bold text-[var(--hs-text)]">Best for: </span>
                  {service.bestFor}
                </p>
                <p className="mt-3 text-sm font-bold text-[var(--hs-text)]">Includes:</p>
                <ul className="mt-2 grid gap-2 text-sm text-[var(--hs-muted)] sm:grid-cols-3">
                  {service.deliverables.map((item) => (
                    <li className="flex gap-2" key={item}>
                      <Check className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-bold text-[var(--hs-text)]">
                  Starting from: <span className="text-[var(--hs-accent)]">{service.price}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
