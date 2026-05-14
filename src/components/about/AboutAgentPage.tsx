import {
  Camera,
  CheckCircle2,
  FileDown,
  MapPinned,
  ShieldCheck,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { en } from '@/content/en'
import { Button } from '@/components/ui/button'
import { reportHref } from '@/lib/site-links'

const portraitImage = '/images/agent-huang-onsite-placeholder.webp'
const contextImage = '/images/report-evidence.webp'

const a = en.About
const trustIcons = [ShieldCheck, Camera, MapPinned]

export function AboutAgentPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 antialiased">
      <SiteHeader activePage="about" topBanner={null} />
      <SiteBreadcrumbs items={[{ label: 'About Agent Huang' }]} />
      <article className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <section className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-red-600">
              {a.badge}
            </p>
            <h1 className="mt-3 max-w-3xl text-balance text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              {a.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-slate-800 sm:text-lg">
              {a.tagline}
            </p>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-slate-200 shadow-sm">
                <Image
                  alt={a.portraitAlt}
                  className="object-cover"
                  fill
                  priority
                  src={portraitImage}
                  sizes="(max-width: 640px) 100vw, 28vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-slate-200 shadow-sm">
                <Image
                  alt={a.contextImageAlt}
                  className="object-cover"
                  fill
                  src={contextImage}
                  sizes="(max-width: 640px) 100vw, 26vw"
                />
              </div>
            </div>
            <p className="mt-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-relaxed text-slate-700 shadow-sm">
              {a.locationNote}
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {a.trustPoints.map((point, index) => {
            const Icon = trustIcons[index] ?? ShieldCheck

            return (
              <div
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                key={point.title}
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-red-50 text-red-600">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-4 text-base font-extrabold text-slate-950">{point.title}</h2>
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                  {point.body}
                </p>
              </div>
            )
          })}
        </section>

        <div className="mx-auto mt-14 max-w-3xl space-y-10">
          <section>
            <h2 className="text-xl font-extrabold text-slate-900">{a.s1Title}</h2>
            {a.s1Body.map((paragraph) => (
              <p
                className="mt-3 text-base font-medium leading-relaxed text-slate-700 sm:text-lg"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-slate-900">{a.s2Title}</h2>
            {a.s2Body.map((paragraph) => (
              <p
                className="mt-3 text-base font-medium leading-relaxed text-slate-700 sm:text-lg"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-slate-900">{a.s3Title}</h2>
            {a.s3Body.map((paragraph) => (
              <p
                className="mt-3 text-base font-medium leading-relaxed text-slate-700 sm:text-lg"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {a.workCards.map((card) => (
                <div
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                  key={card.title}
                >
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-slate-900">{a.s4Title}</h2>
            {a.s4Body.map((paragraph) => (
              <p
                className="mt-3 text-base font-medium leading-relaxed text-slate-700 sm:text-lg"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-slate-900">{a.s5Title}</h2>
            {a.s5Body.map((paragraph) => (
              <p
                className="mt-3 text-base font-medium leading-relaxed text-slate-700 sm:text-lg"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </section>
          <section>
            <h2 className="text-xl font-extrabold text-slate-900">{a.s6Title}</h2>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-950">
                {a.s6ChecklistTitle}
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {a.s6Items.map((item) => (
                  <li
                    className="flex items-start gap-2 text-sm font-semibold leading-relaxed text-slate-700"
                    key={item}
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-red-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
              {a.s6NextStep}
            </p>
            <p className="mt-3 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
              {a.s6Turnaround}
            </p>
          </section>
          <section className="rounded-lg border border-slate-200 bg-slate-100 p-6">
            <h2 className="text-base font-extrabold text-slate-900">{a.scopeTitle}</h2>
            {a.scopeBody.map((paragraph) => (
              <p
                className="mt-3 text-sm font-medium leading-relaxed text-slate-700 sm:text-base"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </section>
          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-slate-900">{a.personalNoteTitle}</h2>
            {a.personalNoteBody.map((paragraph) => (
              <p
                className="mt-4 text-base font-medium leading-relaxed text-slate-700 sm:text-lg"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
            <p className="mt-5 text-base font-extrabold text-slate-900">{a.signatureName}</p>
          </section>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-center text-2xl font-extrabold leading-tight text-slate-950">
            {a.ctaTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base font-medium leading-relaxed text-slate-800">
            {a.cta}
          </p>
          <div className="mt-5 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
            <ContactAgentButton
              className="h-12 rounded-md bg-red-600 px-6 text-base font-extrabold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98]"
              size="lg"
              variant="default"
            >
              {a.ctaWhatsapp}
            </ContactAgentButton>
            <Button
              asChild
              className="h-12 rounded-md border border-slate-300 bg-white px-6 text-base font-extrabold text-slate-900 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-700 hover:shadow-md active:scale-[0.98]"
              size="lg"
              variant="outline"
            >
              <a className="inline-flex items-center justify-center gap-2" href={reportHref}>
                <FileDown className="size-5" />
                {a.ctaReport}
              </a>
            </Button>
          </div>
        </div>

        <p className="mt-10 text-center">
          <Link
            className="text-sm font-extrabold text-red-600 underline-offset-4 hover:underline"
            href="/"
          >
            ← {a.backHome}
          </Link>
        </p>
      </article>
      <SiteFooter />
    </main>
  )
}
