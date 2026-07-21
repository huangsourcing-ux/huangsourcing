import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileText,
  FlaskConical,
  Globe2,
  Scale,
  ShieldCheck,
  Tags,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import {
  ArticleByline,
  EvidenceBasisSection,
  EvidenceDecisionMatrix,
} from '@/components/resources/ArticleTrustSignals'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  euToySafetyRegulationChinaArticle,
  makeEuToySafetyRegulationChinaArticleJsonLd,
} from '@/lib/eu-toy-safety-regulation-china-article'
import { buildWhatsAppHref } from '@/lib/site-links'

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--hs-muted)]">
      {items.map((item) => (
        <li className="flex gap-2" key={item}>
          <CheckCircle2
            aria-hidden
            className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function InlineEvidence({ sectionId }: { sectionId: string }) {
  if (sectionId === 'why-current') {
    return (
      <p className="hs-muted mt-5 text-sm leading-6">
        Current basis:{' '}
        <a
          className="hs-text-link"
          href="https://single-market-economy.ec.europa.eu/sectors/toys/toy-safety_en"
          rel="noreferrer"
          target="_blank"
        >
          European Commission toy-safety overview
        </a>{' '}
        and the Commission&apos;s{' '}
        <a
          className="hs-text-link"
          href="https://digital-strategy.ec.europa.eu/en/news/commission-fines-aliexpress-eu550-million-breaching-digital-services-act"
          rel="noreferrer"
          target="_blank"
        >
          July 20, 2026 AliExpress decision
        </a>
        .
      </p>
    )
  }

  if (sectionId === 'current-vs-future') {
    return (
      <p className="hs-muted mt-5 text-sm leading-6">
        Transition and DPP details:{' '}
        <a
          className="hs-text-link"
          href="https://eur-lex.europa.eu/EN/legal-content/summary/ensuring-the-safety-of-toys-on-the-eu-market.html"
          rel="noreferrer"
          target="_blank"
        >
          EUR-Lex summary of Regulation (EU) 2025/2509
        </a>
        .
      </p>
    )
  }

  if (sectionId === 'technical-file') {
    return (
      <p className="hs-muted mt-5 text-sm leading-6">
        Confirm product-specific duties against the{' '}
        <a
          className="hs-text-link"
          href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32025R2509"
          rel="noreferrer"
          target="_blank"
        >
          full Toy Safety Regulation text
        </a>{' '}
        and qualified advice; this guide does not make the legal determination.
      </p>
    )
  }

  return null
}

export function EuToySafetyRegulationChinaArticlePage() {
  const article = euToySafetyRegulationChinaArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeEuToySafetyRegulationChinaArticleJsonLd()} />
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
            <ArticleByline
              author={article.author}
              modifiedDate={article.modifiedDate}
              publishedDate={article.publishedDate}
            />
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {article.intro}
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
              {article.answerSummary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={article.primaryCta.label}
                analyticsLocation="eu_toy_safety_regulation_china_article_hero"
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={whatsappHref}
                size="lg"
                variant="default"
              >
                {article.primaryCta.label}
              </ContactAgentButton>
              <Button
                asChild
                className="hs-btn-secondary h-12 px-6 text-sm sm:px-8"
                size="lg"
                variant="outline"
              >
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
                  unoptimized
                />
              </div>
            </div>
            <p className="hs-muted mt-3 text-xs leading-5">
              Neutral illustration of a toy evidence-check workflow; it is not evidence
              from the public case discussed below.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Scope', 'Technical file', 'Labels and DPP', 'Bulk release'].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#release-checklist"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">
                    Confirm
                  </span>
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
                <ClipboardCheck aria-hidden className="size-6" />
              </div>
              <h2 className="mt-5 text-2xl font-extrabold text-[var(--hs-text)]">
                Article guide
              </h2>
              <nav aria-label="Article table of contents" className="mt-5 grid gap-2">
                {article.tableOfContents.map((item) => (
                  <a
                    className="inline-flex min-h-10 items-center justify-between gap-3 rounded-md bg-white px-3 text-sm font-extrabold text-[var(--hs-text)] ring-1 ring-[var(--hs-border)] transition-colors hover:text-[var(--hs-accent-strong)] hover:ring-[var(--hs-accent)]"
                    href={item.href}
                    key={item.href}
                  >
                    <span>{item.label}</span>
                    <ArrowRight aria-hidden className="size-4 shrink-0 text-[var(--hs-muted-soft)]" />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0 lg:col-span-8">
            <Reveal>
              <p className="hs-eyebrow">Quick answer</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
                What should an EU toy buyer check before goods leave China?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Confirm today&apos;s product-specific conformity route first. Then connect the
                exact factory and production model to the safety assessment, full technical
                file, test evidence, warnings, instructions, traceability, approved sample,
                physical units, and cartons. Prepare future DPP data separately for models
                expected to remain on the market after August 1, 2030.
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

            <Reveal as="section" className="mt-12 scroll-mt-24" id="release-checklist">
              <div className="flex items-center gap-3">
                <div className="hs-icon-box size-12">
                  <FlaskConical aria-hidden className="size-6" />
                </div>
                <div>
                  <p className="hs-eyebrow">China-side evidence module</p>
                  <h2 className="mt-1 text-3xl font-extrabold text-[var(--hs-text)]">
                    EU toy evidence and shipment release checklist
                  </h2>
                </div>
              </div>
              <p className="hs-muted mt-4 text-base leading-7">
                The module connects qualified technical references to the physical order.
                It does not turn a visual inspection into chemical, flammability,
                electrical, mechanical, or conformity testing.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {article.checkGroups.map((group) => (
                  <section
                    className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] p-5 shadow-[var(--hs-shadow-sm)]"
                    key={group.title}
                  >
                    <div className="flex items-center gap-2">
                      <Tags aria-hidden className="size-5 text-[var(--hs-accent)]" />
                      <h3 className="text-lg font-extrabold text-[var(--hs-text)]">{group.title}</h3>
                    </div>
                    <BulletList items={group.items} />
                  </section>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 grid gap-12">
              {article.sections.map((section, index) => (
                <Reveal
                  as="section"
                  className="scroll-mt-24"
                  id={section.id}
                  key={section.id}
                  staggerIndex={index}
                >
                  <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">{section.title}</h2>
                  <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.bullets ? <BulletList items={section.bullets} /> : null}
                  <InlineEvidence sectionId={section.id} />
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>

      <EvidenceDecisionMatrix
        id="decision-table"
        intro="Separate current legal and laboratory decisions from observable China-side evidence and future DPP preparation. Release only when the responsible EU owner accepts the combined file for the exact product."
        rows={article.decisionRows}
        title="Turn toy evidence into a payment or pickup decision."
      />

      <EvidenceBasisSection
        className="hs-section-white"
        intro="This guide uses current official EU regulatory and enforcement sources, an independent report on the public case, and buyer-side sourcing analysis. Product-specific legal and conformity decisions remain with responsible qualified parties."
        items={article.evidenceBasis}
      />

      <section className="hs-section-white" id="public-case">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Public case example</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Temu DSA decision: a platform listing was not product-level safety evidence.
            </h2>
            <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
              <p>
                On May 28, 2026, the European Commission announced a €200 million fine
                against Temu under the Digital Services Act. The Commission said the
                platform failed to diligently identify, analyse, and assess systemic risks
                from illegal products. Its public statement cited a mystery-shopping
                exercise in which a high percentage of selected baby toys posed medium-to-high
                safety risks because of chemicals above legal limits or detachable parts
                presenting suffocation hazards.
              </p>
              <p>
                The public evidence was the Commission&apos;s platform-risk decision and its
                description of the mystery-shopping results. Associated Press reported that
                Temu disagreed with the decision and said it did not reflect the current
                state of its systems. Huang Sourcing was not involved in the products,
                sellers, tests, platform, investigation, decision, or response.
              </p>
              <p>
                The buyer lesson is narrow: marketplace availability and a supplier&apos;s
                uploaded files do not replace a product-specific evidence match before
                payment or shipment. The case does not prove every Temu listing, China-made
                toy, factory, or supplier has the same risk, and it was a DSA decision—not
                a finding that a named SKU violated Regulation (EU) 2025/2509. Read the{' '}
                <a
                  className="hs-text-link"
                  href="https://digital-strategy.ec.europa.eu/en/news/commission-fines-temu-eu200-million-breaching-digital-services-act"
                  rel="noreferrer"
                  target="_blank"
                >
                  official European Commission decision
                </a>{' '}
                and the{' '}
                <a
                  className="hs-text-link"
                  href="https://apnews.com/article/temu-european-union-brussels-ecommerce-digital-07f53e968da89562e3f032abfa626fa4"
                  rel="noreferrer"
                  target="_blank"
                >
                  Associated Press report
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="source-notes">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12"><ShieldCheck aria-hidden className="size-6" /></div>
            <p className="hs-eyebrow mt-5">Sources</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Check the current rule and the exact product file.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              These sources support the transition timing, hazard and documentation
              context, current trend signals, and public case. They do not replace
              product-specific laboratory, importer, notified-body, customs, or legal advice.
            </p>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2 lg:col-span-8">
            {article.sourceNotes.map((source, index) => (
              <a
                className="hs-link-card group bg-white p-5"
                href={source.href}
                key={source.href}
                rel="noreferrer"
                style={{ transitionDelay: `${index * 35}ms` }}
                target="_blank"
              >
                <h3 className="text-base font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">{source.label}</h3>
                <p className="hs-muted mt-2 text-sm leading-6">{source.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                  Open source <ExternalLink aria-hidden className="size-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="documents">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12"><FileText aria-hidden className="size-6" /></div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              What to send for an EU toy evidence check.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Send controlled references so physical evidence can be matched to the exact
              toy, production revision, destination, and release decision.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8"><BulletList items={article.whatToSend} /></Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="red-flags">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12"><AlertTriangle aria-hidden className="size-6" /></div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              EU toy red flags before shipment.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Pause payment or pickup when the current conformity route, product identity,
              technical file, warnings, or packed-goods match cannot be reconciled.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8"><BulletList items={article.redFlags} /></Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="scope-limits">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <div className="hs-icon-box size-12"><Scale aria-hidden className="size-6" /></div>
            <p className="hs-eyebrow mt-5">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              A China-side check is not EU toy conformity approval.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              The report can show what was visible, sampled, checked against approved
              references, and provided before shipment. It cannot replace controlled tests,
              a complete safety assessment, technical or legal conclusions, or the future
              official DPP system.
            </p>
            <BulletList items={article.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Related next steps</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Keep technical evidence connected to production and payment.
            </h2>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2 lg:col-span-8">
            {article.relatedLinks.map((link, index) => (
              <Link
                className="hs-link-card group bg-white p-5"
                href={link.href}
                key={link.href}
                style={{ transitionDelay: `${index * 35}ms` }}
              >
                <h3 className="text-lg font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">{link.label}</h3>
                <p className="hs-muted mt-2 text-sm leading-6">{link.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                  Open page <ArrowRight aria-hidden className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="faq">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal><h2 className="text-3xl font-extrabold text-[var(--hs-text)]">Frequently asked questions</h2></Reveal>
          <div className="mt-6 grid gap-3">
            {article.faqs.map((faq, index) => (
              <Reveal key={faq.question} staggerIndex={index}>
                <details className="group hs-card bg-white p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-[var(--hs-text)] marker:content-none">
                    <span>{faq.question}</span>
                    <span aria-hidden className="text-xl leading-none text-[var(--hs-accent)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="hs-muted mt-3 border-t border-[var(--hs-border)] pt-3 text-sm leading-6">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="hs-container hs-section">
          <Reveal className="hs-cta-band px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="relative">
              <div className="flex items-center gap-2 text-sm font-extrabold text-red-200">
                <Globe2 aria-hidden className="size-4" /> Before EU-bound toys leave China
              </div>
              <h2 className="mt-3 text-3xl font-extrabold">
                Check product identity, evidence, warnings, production, and cartons while correction is practical.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the model list, safety plan, full reports, technical files, approved
                artwork, packed-goods records, and release deadline before pickup.
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel={article.primaryCta.label}
              analyticsLocation="eu_toy_safety_regulation_china_article_final"
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
