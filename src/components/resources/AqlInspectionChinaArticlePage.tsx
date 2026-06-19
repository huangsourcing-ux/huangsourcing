import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  Ruler,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import {
  ArticleByline,
  EvidenceBasisSection,
} from '@/components/resources/ArticleTrustSignals'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  aqlInspectionChinaArticle,
  makeAqlInspectionChinaArticleJsonLd,
} from '@/lib/aql-inspection-china-article'
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

export function AqlInspectionChinaArticlePage() {
  const whatsappHref = buildWhatsAppHref(aqlInspectionChinaArticle.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeAqlInspectionChinaArticleJsonLd()} />
      <SiteBreadcrumbs
        currentPath={aqlInspectionChinaArticle.href}
        items={[
          { label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' },
          { label: aqlInspectionChinaArticle.title },
        ]}
      />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">{aqlInspectionChinaArticle.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">
              {aqlInspectionChinaArticle.h1}
            </h1>
            <ArticleByline
              publishedDate={aqlInspectionChinaArticle.publishedDate}
            />
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {aqlInspectionChinaArticle.intro}
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
              {aqlInspectionChinaArticle.answerSummary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={aqlInspectionChinaArticle.primaryCta.label}
                analyticsLocation="aql_inspection_china_article_hero"
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={whatsappHref}
                size="lg"
                variant="default"
              >
                {aqlInspectionChinaArticle.primaryCta.label}
              </ContactAgentButton>
              <Button
                asChild
                className="hs-btn-secondary h-12 px-6 text-sm sm:px-8"
                size="lg"
                variant="outline"
              >
                <a href={aqlInspectionChinaArticle.secondaryCta.href}>
                  {aqlInspectionChinaArticle.secondaryCta.label}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delayMs={120}>
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-video">
                <Image
                  alt={aqlInspectionChinaArticle.image.alt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src={aqlInspectionChinaArticle.image.src}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Lot', 'Level', 'Sample', 'Ac / Re'].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#how-aql-works"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">Define</span>
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
              <div className="hs-icon-box size-12">
                <ClipboardCheck className="size-6" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-extrabold text-[var(--hs-text)]">Article guide</h2>
              <nav aria-label="Article table of contents" className="mt-5 grid gap-2">
                {aqlInspectionChinaArticle.tableOfContents.map((item) => (
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
                What must be fixed before an AQL inspection starts?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Freeze the sampling plan and the product-specific defect rules before anyone counts a defect. Otherwise the factory, inspector, and buyer can use different assumptions and produce a number that does not support a defensible shipment decision.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {aqlInspectionChinaArticle.quickChecks.map((item, index) => (
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

      <section className="hs-section-soft" id="how-aql-works">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Sampling workflow</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              How an AQL sample becomes a lot decision.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              AQL is not one percentage applied to every order. It is a sequence of decisions that must remain traceable from the contract to the inspection report.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {aqlInspectionChinaArticle.workflow.map((item, index) => (
              <Reveal className="hs-card bg-white p-5" key={item.step} staggerIndex={index}>
                <span className="flex size-9 items-center justify-center rounded-md bg-[var(--hs-navy)] text-sm font-extrabold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-[var(--hs-text)]">{item.title}</h3>
                <p className="hs-muted mt-2 text-sm leading-6">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="worked-example">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Worked example</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Sample size and defect limits for a 1,200-unit lot.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              This common configuration shows how the plan is read. It is not a universal recommendation for every product, buyer, or isolated shipment.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <Reveal className="hs-card bg-[var(--hs-bg-soft)] p-5 lg:col-span-4">
              <div className="hs-icon-box size-12"><Ruler className="size-6" aria-hidden /></div>
              <h3 className="mt-5 text-xl font-extrabold text-[var(--hs-text)]">Plan inputs</h3>
              <dl className="mt-5 grid gap-4">
                {aqlInspectionChinaArticle.example.facts.map(([term, detail]) => (
                  <div key={term}>
                    <dt className="text-xs font-extrabold uppercase tracking-wide text-[var(--hs-accent)]">{term}</dt>
                    <dd className="hs-muted mt-1 text-sm leading-6">{detail}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)] lg:col-span-8">
              <div className="grid bg-[var(--hs-navy)] text-sm font-extrabold text-white md:grid-cols-3">
                <div className="border-b border-white/10 p-4 md:border-r md:border-b-0">Defect class</div>
                <div className="border-b border-white/10 p-4 md:border-r md:border-b-0">Illustrative rule</div>
                <div className="p-4">Decision</div>
              </div>
              {aqlInspectionChinaArticle.example.limits.map((row) => (
                <div className="grid border-t border-[var(--hs-border)] text-sm leading-6 md:grid-cols-3" key={row.classification}>
                  <div className="bg-[var(--hs-bg-soft)] p-4 font-extrabold text-[var(--hs-text)] md:border-r md:border-[var(--hs-border)]">{row.classification}</div>
                  <div className="hs-muted p-4 md:border-r md:border-[var(--hs-border)]">{row.rule}</div>
                  <div className="hs-muted p-4">{row.result}</div>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="mt-6 flex gap-3 rounded-[var(--hs-radius)] border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
            <AlertTriangle className="mt-0.5 size-5 shrink-0" aria-hidden />
            <p>{aqlInspectionChinaArticle.example.caveat}</p>
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="defect-classes">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Classification</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Critical, major, and minor must be product-specific.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {aqlInspectionChinaArticle.defectClasses.map((item, index) => (
              <Reveal className="hs-card bg-white p-5" key={item.title} staggerIndex={index}>
                <h3 className="text-xl font-extrabold text-[var(--hs-text)]">{item.title}</h3>
                <p className="hs-muted mt-3 text-sm leading-6">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="decision-table">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Buyer decision table</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What to do with the AQL result.
            </h2>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <div className="grid bg-[var(--hs-navy)] text-sm font-extrabold text-white md:grid-cols-3">
              <div className="border-b border-white/10 p-4 md:border-r md:border-b-0">Inspection signal</div>
              <div className="border-b border-white/10 p-4 md:border-r md:border-b-0">What it means</div>
              <div className="p-4">Buyer action</div>
            </div>
            {aqlInspectionChinaArticle.decisionRows.map((row) => (
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
        intro="This AQL guidance is based on the standards, buyer-approved files, physical lot access, and release-stage facts needed to turn a sample into a documented decision."
        items={aqlInspectionChinaArticle.evidenceBasis}
      />

      <section className="hs-section-white" id="what-to-send">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12"><ClipboardCheck className="size-6" aria-hidden /></div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">What to send before booking.</h2>
            <p className="hs-muted mt-3 text-base leading-7">
              The inspector needs the decision rules before arriving at the factory, not after defects appear.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8"><BulletList items={aqlInspectionChinaArticle.whatToSend} /></Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="limits">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">What passing AQL cannot prove.</h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Sampling controls inspection effort and formalizes a lot decision. It does not remove sampling risk or expand a visual check into certification.
            </p>
            <BulletList items={aqlInspectionChinaArticle.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="sources">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Standards sources</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Verify the standard behind the plan.</h2>
            <p className="hs-muted mt-3 text-base leading-7">
              ISO 2859-1:2026 is the current ISO edition. Use the licensed standard or the sampling standard named in your contract for operative tables and rules.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {aqlInspectionChinaArticle.sources.map((source, index) => (
              <Reveal className="hs-link-card bg-[var(--hs-bg-soft)] p-5" key={source.href} staggerIndex={index}>
                <a className="group" href={source.href} rel="noreferrer" target="_blank">
                  <h3 className="inline-flex items-center gap-2 text-lg font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">
                    {source.label}<ExternalLink className="size-4" aria-hidden />
                  </h3>
                  <p className="hs-muted mt-2 text-sm leading-6">{source.note}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Related next steps</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">Move from the plan to buyer-side evidence.</h2>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2 lg:col-span-8">
            {aqlInspectionChinaArticle.relatedLinks.map((link, index) => (
              <Link className="hs-link-card group bg-white p-5" href={link.href} key={link.href} style={{ transitionDelay: `${index * 35}ms` }}>
                <h3 className="text-lg font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">{link.label}</h3>
                <p className="hs-muted mt-2 text-sm leading-6">{link.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">Open page<ArrowRight className="size-4" aria-hidden /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="faq">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Frequently asked questions</h2></Reveal>
          <div className="mt-6 grid gap-3">
            {aqlInspectionChinaArticle.faqs.map((faq, index) => (
              <Reveal as="article" className="hs-card bg-[var(--hs-bg-soft)] p-5" key={faq.question} staggerIndex={index}>
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
              <h2 className="mt-3 text-3xl font-extrabold">Freeze the AQL plan before the factory visit.</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the lot details, approved specs, defect examples, proposed limits, and release deadline. Agent Huang will help scope the buyer-side inspection before goods leave supplier control.
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel={aqlInspectionChinaArticle.primaryCta.label}
              analyticsLocation="aql_inspection_china_article_final"
              className="relative mt-7 h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] lg:mt-0"
              href={whatsappHref}
              size="lg"
              variant="default"
            >
              {aqlInspectionChinaArticle.primaryCta.label}
            </ContactAgentButton>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
