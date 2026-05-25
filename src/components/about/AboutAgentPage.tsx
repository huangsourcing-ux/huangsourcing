import {
  Camera,
  CheckCircle2,
  FileText,
  MapPinned,
  ShieldCheck,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { en } from '@/content/en'
import { Button } from '@/components/ui/button'
import {
  privacyConfidentialityHref,
  sampleReportPageHref,
  scopeLimitationsHref,
} from '@/lib/site-links'

const portraitImage = '/images/agent-huang-onsite-placeholder.webp'
const contextImage = '/images/report-evidence.webp'

const a = en.About
const trustIcons = [ShieldCheck, Camera, MapPinned]

export function AboutAgentPage() {
  return (
    <main className="hs-page min-h-screen overflow-x-hidden antialiased">
      <SiteHeader activePage="about" topBanner={null} />
      <SiteBreadcrumbs currentPath="/about" items={[{ label: 'About Agent Huang' }]} />
      <article>
        <section className="hs-hero">
          <div className="hs-container grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1fr_0.95fr] lg:py-16">
          <Reveal>
            <p className="hs-eyebrow">
              {a.badge}
            </p>
            <h1 className="mt-3 max-w-3xl text-balance text-4xl font-extrabold leading-tight text-[var(--hs-text)] sm:text-5xl">
              {a.h1}
            </h1>
            <p className="hs-muted mt-6 max-w-2xl text-base font-semibold leading-relaxed sm:text-lg">
              {a.tagline}
            </p>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] shadow-[var(--hs-shadow-md)]">
                <Image
                  alt={a.portraitAlt}
                  className="object-cover"
                  fill
                  priority
                  src={portraitImage}
                  sizes="(max-width: 640px) 100vw, 28vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] shadow-[var(--hs-shadow-md)]">
                <Image
                  alt={a.contextImageAlt}
                  className="object-cover"
                  fill
                  src={contextImage}
                  sizes="(max-width: 640px) 100vw, 26vw"
                />
              </div>
            </div>
            <p className="hs-card mt-3 bg-white px-4 py-3 text-sm font-semibold leading-relaxed text-[var(--hs-muted)]">
              {a.locationNote}
            </p>
          </Reveal>
          </div>
        </section>

        <section className="hs-container mt-10 grid gap-4 md:grid-cols-3">
          {a.trustPoints.map((point, index) => {
            const Icon = trustIcons[index] ?? ShieldCheck

            return (
              <Reveal
                className="hs-card hs-card-hover bg-white p-5"
                key={point.title}
                staggerIndex={index}
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-[var(--hs-accent-soft)] text-[var(--hs-accent)]">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-4 text-base font-extrabold text-[var(--hs-text)]">{point.title}</h2>
                <p className="hs-muted mt-2 text-sm font-medium leading-relaxed">
                  {point.body}
                </p>
              </Reveal>
            )
          })}
        </section>

        <div className="hs-container mt-14 max-w-3xl space-y-10">
          <Reveal as="section">
            <h2 className="text-xl font-extrabold text-[var(--hs-text)]">{a.s1Title}</h2>
            {a.s1Body.map((paragraph) => (
              <p
                className="hs-muted mt-3 text-base font-medium leading-relaxed sm:text-lg"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal as="section">
            <h2 className="text-xl font-extrabold text-[var(--hs-text)]">{a.s2Title}</h2>
            {a.s2Body.map((paragraph) => (
              <p
                className="hs-muted mt-3 text-base font-medium leading-relaxed sm:text-lg"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal as="section">
            <h2 className="text-xl font-extrabold text-[var(--hs-text)]">{a.s3Title}</h2>
            {a.s3Body.map((paragraph) => (
              <p
                className="hs-muted mt-3 text-base font-medium leading-relaxed sm:text-lg"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {a.workCards.map((card) => (
                <div
                  className="hs-card bg-white p-5"
                  key={card.title}
                >
                  <h3 className="text-sm font-extrabold uppercase text-[var(--hs-text)]">
                    {card.title}
                  </h3>
                  <p className="hs-muted mt-2 text-sm font-medium leading-relaxed">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal as="section">
            <h2 className="text-xl font-extrabold text-[var(--hs-text)]">{a.s4Title}</h2>
            {a.s4Body.map((paragraph) => (
              <p
                className="hs-muted mt-3 text-base font-medium leading-relaxed sm:text-lg"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal as="section">
            <h2 className="text-xl font-extrabold text-[var(--hs-text)]">{a.s5Title}</h2>
            {a.s5Body.map((paragraph) => (
              <p
                className="hs-muted mt-3 text-base font-medium leading-relaxed sm:text-lg"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal as="section">
            <h2 className="text-xl font-extrabold text-[var(--hs-text)]">{a.s6Title}</h2>
            <div className="hs-card mt-4 bg-white p-5">
              <h3 className="text-sm font-extrabold uppercase text-[var(--hs-text)]">
                {a.s6ChecklistTitle}
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {a.s6Items.map((item) => (
                  <li
                    className="flex items-start gap-2 text-sm font-semibold leading-relaxed text-[var(--hs-muted)]"
                    key={item}
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="hs-muted mt-4 text-base font-medium leading-relaxed sm:text-lg">
              {a.s6NextStep}
            </p>
            <p className="hs-muted mt-3 text-base font-medium leading-relaxed sm:text-lg">
              {a.s6Turnaround}
            </p>
          </Reveal>
          <Reveal as="section" className="hs-card bg-[var(--hs-bg-soft)] p-6">
            <h2 className="text-base font-extrabold text-[var(--hs-text)]">{a.scopeTitle}</h2>
            {a.scopeBody.map((paragraph) => (
              <p
                className="hs-muted mt-3 text-sm font-medium leading-relaxed sm:text-base"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
            <p className="mt-4 text-sm font-extrabold leading-relaxed text-[var(--hs-text)] sm:text-base">
              Read the standard{' '}
              <Link className="text-[var(--hs-accent-strong)] hover:underline" href={scopeLimitationsHref}>
                Scope & Limitations
              </Link>{' '}
              and{' '}
              <Link className="text-[var(--hs-accent-strong)] hover:underline" href={privacyConfidentialityHref}>
                Privacy & Confidentiality
              </Link>{' '}
              pages for the full buyer-side trust policy.
            </p>
          </Reveal>
          <Reveal as="section" className="hs-card bg-white p-6">
            <h2 className="text-xl font-extrabold text-[var(--hs-text)]">{a.personalNoteTitle}</h2>
            {a.personalNoteBody.map((paragraph) => (
              <p
                className="hs-muted mt-4 text-base font-medium leading-relaxed sm:text-lg"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
            <p className="mt-5 text-base font-extrabold text-[var(--hs-text)]">{a.signatureName}</p>
          </Reveal>
        </div>

        <Reveal className="hs-card mx-auto mt-10 max-w-3xl bg-white p-6 shadow-[var(--hs-shadow-md)] sm:p-8">
          <h2 className="text-center text-2xl font-extrabold leading-tight text-[var(--hs-text)]">
            {a.ctaTitle}
          </h2>
          <p className="hs-muted mx-auto mt-3 max-w-2xl text-center text-base font-medium leading-relaxed">
            {a.cta}
          </p>
          <div className="mt-5 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
            <ContactAgentButton
              className="hs-btn-primary h-12 px-6 text-base"
              size="lg"
              variant="default"
            >
              {a.ctaWhatsapp}
            </ContactAgentButton>
            <Button
              asChild
              className="hs-btn-secondary h-12 px-6 text-base"
              size="lg"
              variant="outline"
            >
              <Link className="inline-flex items-center justify-center gap-2" href={sampleReportPageHref}>
                <FileText className="size-5" />
                {a.ctaReport}
              </Link>
            </Button>
          </div>
        </Reveal>

        <p className="mt-10 text-center">
          <Link
            className="text-sm font-extrabold text-[var(--hs-accent)] underline-offset-4 hover:underline"
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
