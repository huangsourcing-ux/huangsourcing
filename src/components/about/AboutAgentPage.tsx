import { FileDown, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { SiteHeader } from '@/components/site/SiteHeader'
import { en } from '@/content/en'
import { Button } from '@/components/ui/button'
import { publicWhatsAppHref, reportHref } from '@/lib/site-links'
import { cn } from '@/lib/utils'

const portraitImage =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=75'
const contextImage =
  'https://images.unsplash.com/photo-1539650116574-75c0c6d76927?auto=format&fit=crop&w=1200&q=75'

const a = en.About
const nav = en.Nav

export function AboutAgentPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f8] text-[#1a1a2e] antialiased">
      <SiteHeader activePage="about" topBanner={null} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-center text-xs font-extrabold uppercase tracking-widest text-violet-700">
          {a.badge}
        </p>
        <h1 className="mt-3 text-balance text-center text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
          {a.h1}
        </h1>
        <p
          className={cn(
            'mx-auto mt-6 max-w-2xl text-center text-base font-semibold leading-relaxed text-slate-800 sm:text-lg',
          )}
        >
          {a.tagline}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-md">
            <Image
              alt={a.portraitAlt}
              className="object-cover"
              fill
              priority
              src={portraitImage}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-md">
            <Image
              alt={a.contextImageAlt}
              className="object-cover"
              fill
              src={contextImage}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <p className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-slate-950/80 px-3 py-2 text-center text-[11px] font-medium leading-snug text-slate-100">
              {a.locationNote}
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-none space-y-10">
          <section>
            <h2 className="text-xl font-extrabold text-slate-900">{a.s1Title}</h2>
            <p className="mt-3 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
              {a.s1Body}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-slate-900">{a.s2Title}</h2>
            <p className="mt-3 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
              {a.s2Before}
              <mark
                className={cn(
                  'rounded-sm px-0.5 font-bold text-slate-900',
                  'bg-amber-200/95 decoration-clone',
                )}
              >
                {a.s2Highlight}
              </mark>
              {a.s2After}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-slate-900">{a.s3Title}</h2>
            <p className="mt-3 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
              {a.s3Intro}
            </p>
            <p className="mt-3 text-base font-medium leading-relaxed text-slate-800 sm:text-lg">
              {a.s3First}
            </p>
            <p className="mt-3 text-base font-medium leading-relaxed text-slate-800 sm:text-lg">
              {a.s3Second}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-slate-900">{a.s4Title}</h2>
            <p className="mt-3 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
              {a.s4Body}
            </p>
          </section>
        </div>

        <footer className="mt-12 border-t border-slate-200 pt-8 text-center">
          <p className="text-lg font-extrabold text-slate-900">{a.signatureName}</p>
          <p className="mt-1 text-sm font-semibold text-slate-600">{a.signatureRole}</p>
        </footer>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
          <p className="text-center text-base font-medium leading-relaxed text-slate-800">{a.cta}</p>
          <div className="mt-5 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="h-12 rounded-full bg-[#ff3d3d] px-6 text-base font-extrabold text-white shadow-md hover:bg-[#e63535]"
              size="lg"
            >
              <a
                className="inline-flex items-center justify-center gap-2"
                href={publicWhatsAppHref}
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle className="size-5" />
                {a.ctaWhatsapp}
              </a>
            </Button>
            <Button
              asChild
              className="h-12 rounded-full border-2 border-slate-200 bg-white px-6 text-base font-extrabold text-slate-900 shadow-sm"
              size="lg"
              variant="outline"
            >
              <Link className="inline-flex items-center justify-center gap-2" href={reportHref}>
                <FileDown className="size-5" />
                {a.ctaReport}
              </Link>
            </Button>
          </div>
        </div>

        <p className="mt-10 text-center">
          <Link
            className="text-sm font-extrabold text-violet-700 underline-offset-4 hover:underline"
            href="/"
          >
            ← {nav.brand}
          </Link>
        </p>
      </article>
    </main>
  )
}
