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
    <div className="mt-8 rounded-lg border border-slate-200 bg-white">
      <button
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg px-5 py-4 text-left text-base font-bold text-slate-950 transition-all hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
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
        <div className="border-t border-slate-200 px-5 py-5">
          <div className="grid gap-4 lg:grid-cols-2">
            {services.map((service) => (
              <article
                className={`rounded-md border border-slate-200 bg-slate-50 p-4 ${
                  service.title === 'FBA prep and logistics' ? 'lg:col-span-2' : ''
                }`}
                key={service.title}
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row">
                  <div>
                    <h3 className="font-bold text-slate-950">{service.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{service.summary}</p>
                  </div>
                  <p className="shrink-0 font-bold text-red-600">{service.price}</p>
                </div>
                <p className="mt-3 text-sm text-slate-700">
                  <span className="font-semibold text-slate-950">Best for: </span>
                  {service.bestFor}
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-950">Includes:</p>
                <ul className="mt-2 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
                  {service.deliverables.map((item) => (
                    <li className="flex gap-2" key={item}>
                      <Check className="mt-0.5 size-4 shrink-0 text-red-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-semibold text-slate-950">
                  Starting from: <span className="text-red-600">{service.price}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
