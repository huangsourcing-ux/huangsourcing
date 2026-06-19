import { AlertTriangle, ArrowRight, CheckCircle2, ClipboardCheck, PackageCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { ArticleByline, EvidenceBasisSection } from '@/components/resources/ArticleTrustSignals'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  goldenSampleChinaManufacturingArticle,
  makeGoldenSampleChinaManufacturingArticleJsonLd,
} from '@/lib/golden-sample-china-manufacturing-article'
import { buildWhatsAppHref } from '@/lib/site-links'

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--hs-muted)]">
      {items.map((item) => (
        <li className="flex gap-2" key={item}>
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function GoldenSampleChinaManufacturingArticlePage() {
  const article = goldenSampleChinaManufacturingArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeGoldenSampleChinaManufacturingArticleJsonLd()} />
      <SiteBreadcrumbs
        currentPath={article.href}
        items={[
          { label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' },
          { label: article.title },
        ]}
      />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">{article.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">
              {article.h1}
            </h1>
            <ArticleByline publishedDate={article.publishedDate} />
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {article.intro}
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">{article.answerSummary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={article.primaryCta.label}
                analyticsLocation="golden_sample_article_hero"
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={whatsappHref}
                size="lg"
                variant="default"
              >
                {article.primaryCta.label}
              </ContactAgentButton>
              <Button asChild className="hs-btn-secondary h-12 px-6 text-sm sm:px-8" size="lg" variant="outline">
                <a href={article.secondaryCta.href}>{article.secondaryCta.label}</a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delayMs={120}>
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-video">
                <Image
                  alt={article.image.alt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src={article.image.src}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Identify', 'Seal', 'Specify', 'Compare'].map((item, index) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#approval-checklist"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">Step {index + 1}</span>
                  <span className="mt-2 block leading-5">{item}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="quick-answer">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="hs-card sticky top-24 bg-[var(--hs-bg-soft)] p-5">
              <div className="hs-icon-box size-12"><ClipboardCheck className="size-6" aria-hidden /></div>
              <h2 className="mt-5 text-2xl font-extrabold text-[var(--hs-text)]">Article guide</h2>
              <nav aria-label="Article table of contents" className="mt-5 grid gap-2">
                {article.tableOfContents.map((item) => (
                  <a
                    className="inline-flex min-h-10 items-center justify-between gap-3 rounded-md bg-white px-3 text-sm font-extrabold text-[var(--hs-text)] ring-1 ring-[var(--hs-border)] transition-colors hover:text-[var(--hs-accent-strong)] hover:ring-[var(--hs-accent)]"
                    href={item.href}
                    key={item.href}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="size-4 shrink-0 text-[var(--hs-muted-soft)]" aria-hidden />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0 lg:col-span-8">
            <Reveal>
              <p className="hs-eyebrow">Quick answer</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
                What makes an approved sample usable for quality control?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Identity, written criteria, custody, and change control. Without those four controls, a factory sample is only an object that looks familiar. It does not reliably show which revision the buyer approved or how much production variation is acceptable.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {article.quickChecks.map((item, index) => (
                  <div
                    className="flex min-h-16 gap-3 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-card-warm)] p-4 text-sm leading-6 text-[var(--hs-muted)]"
                    key={item}
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-xs font-extrabold text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </article>
        </div>
      </section>

      <section className="hs-section-soft" id="what-it-controls">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Control scope</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What a golden sample can—and cannot—control by itself.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              The physical sample is strongest as a side-by-side reference. Written criteria make that comparison repeatable and prevent appearance from hiding a material, construction, or performance change.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {article.controlAreas.map((item, index) => (
              <Reveal className="hs-card bg-white p-5" key={item.title} staggerIndex={index}>
                <h3 className="text-xl font-extrabold text-[var(--hs-text)]">{item.title}</h3>
                <p className="hs-muted mt-3 text-sm leading-6">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="approval-checklist">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Approval checklist</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Turn the final sample into a controlled production reference.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-5">
            {article.approvalSteps.map((item, index) => (
              <Reveal className="hs-card bg-[var(--hs-bg-soft)] p-5" key={item.step} staggerIndex={index}>
                <span className="flex size-9 items-center justify-center rounded-md bg-[var(--hs-navy)] text-sm font-extrabold text-white">{item.step}</span>
                <h3 className="mt-4 text-lg font-extrabold text-[var(--hs-text)]">{item.title}</h3>
                <p className="hs-muted mt-2 text-sm leading-6">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="comparison-table">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Inspection criteria</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Pair every sample comparison with a written control.
            </h2>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <div className="grid bg-[var(--hs-navy)] text-sm font-extrabold text-white md:grid-cols-3">
              <div className="border-b border-white/10 p-4 md:border-r md:border-b-0">Control area</div>
              <div className="border-b border-white/10 p-4 md:border-r md:border-b-0">What the sample shows</div>
              <div className="p-4">What must be written</div>
            </div>
            {article.comparisonRows.map((row) => (
              <div className="grid border-t border-[var(--hs-border)] text-sm leading-6 md:grid-cols-3" key={row.area}>
                <div className="bg-[var(--hs-bg-soft)] p-4 font-extrabold text-[var(--hs-text)] md:border-r md:border-[var(--hs-border)]">{row.area}</div>
                <div className="hs-muted p-4 md:border-r md:border-[var(--hs-border)]">{row.sampleUse}</div>
                <div className="hs-muted p-4">{row.writtenControl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="change-control">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12"><PackageCheck className="size-6" aria-hidden /></div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">Control every change after approval.</h2>
            <p className="hs-muted mt-3 text-base leading-7">
              A revised component or “small improvement” can invalidate the reference. Revision control should follow the product, files, production order, and inspection instruction together.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8"><BulletList items={article.changeControl} /></Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="decision-table">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Buyer decision table</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What to do when production differs.</h2>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <div className="grid bg-[var(--hs-navy)] text-sm font-extrabold text-white md:grid-cols-3">
              <div className="border-b border-white/10 p-4 md:border-r md:border-b-0">Inspection signal</div>
              <div className="border-b border-white/10 p-4 md:border-r md:border-b-0">What it means</div>
              <div className="p-4">Buyer action</div>
            </div>
            {article.decisionRows.map((row) => (
              <div className="grid border-t border-[var(--hs-border)] text-sm leading-6 md:grid-cols-3" key={row.signal}>
                <div className="bg-[var(--hs-bg-soft)] p-4 font-extrabold text-[var(--hs-text)] md:border-r md:border-[var(--hs-border)]">{row.signal}</div>
                <div className="hs-muted p-4 md:border-r md:border-[var(--hs-border)]">{row.meaning}</div>
                <div className="hs-muted p-4">{row.action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EvidenceBasisSection
        intro="A defensible sample-based comparison connects the physical reference to controlled buyer files, traceable production units, consistent comparison conditions, and the commercial decision in front of the buyer."
        items={article.evidenceBasis}
      />

      <section className="hs-section-white" id="what-to-send">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12"><ClipboardCheck className="size-6" aria-hidden /></div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">What to send before booking QC.</h2>
            <p className="hs-muted mt-3 text-base leading-7">Send both the reference evidence and the rules that explain how the inspector should use it.</p>
          </Reveal>
          <Reveal className="lg:col-span-8"><BulletList items={article.whatToSend} /></Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="limits">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <div className="flex gap-3 rounded-[var(--hs-radius)] border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
              <AlertTriangle className="mt-0.5 size-5 shrink-0" aria-hidden />
              <p>A sample is evidence of one approved unit. It is not proof that every production unit, hidden material, safety requirement, or future-use condition conforms.</p>
            </div>
            <h2 className="mt-8 text-3xl font-extrabold text-[var(--hs-text)]">Golden sample scope limits.</h2>
            <BulletList items={article.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Related next steps</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Move from sample approval to buyer-side evidence.</h2>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2 lg:col-span-8">
            {article.relatedLinks.map((link, index) => (
              <Link className="hs-link-card group bg-[var(--hs-bg-soft)] p-5" href={link.href} key={link.href} style={{ transitionDelay: `${index * 35}ms` }}>
                <h3 className="text-lg font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">{link.label}</h3>
                <p className="hs-muted mt-2 text-sm leading-6">{link.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">Open page<ArrowRight className="size-4" aria-hidden /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="faq">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Frequently asked questions</h2></Reveal>
          <div className="mt-6 grid gap-3">
            {article.faqs.map((faq, index) => (
              <Reveal as="article" className="hs-card bg-white p-5" key={faq.question} staggerIndex={index}>
                <h3 className="text-base font-extrabold text-[var(--hs-text)]">{faq.question}</h3>
                <p className="hs-muted mt-2 text-sm leading-6">{faq.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="hs-container hs-section">
          <Reveal className="hs-cta-band px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="relative">
              <p className="text-sm font-extrabold text-red-200">Before balance payment or pickup</p>
              <h2 className="mt-3 text-3xl font-extrabold">Connect the approved sample to the inspection plan.</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the sample evidence, final specification, production stage, factory location, and release deadline. Agent Huang will help scope what can be compared onsite before the goods leave supplier control.
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel={article.primaryCta.label}
              analyticsLocation="golden_sample_article_final"
              className="relative mt-7 h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] lg:mt-0"
              href={whatsappHref}
              size="lg"
              variant="default"
            >
              {article.primaryCta.label}
            </ContactAgentButton>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
