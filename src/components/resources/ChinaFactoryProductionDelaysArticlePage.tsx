import {
  AlertTriangle,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  FileText,
} from 'lucide-react'
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
  chinaFactoryProductionDelaysArticle,
  makeChinaFactoryProductionDelaysArticleJsonLd,
} from '@/lib/china-factory-production-delays-article'
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

export function ChinaFactoryProductionDelaysArticlePage() {
  const article = chinaFactoryProductionDelaysArticle
  const whatsappHref = buildWhatsAppHref(article.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeChinaFactoryProductionDelaysArticleJsonLd()} />
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
              modifiedDate={article.modifiedDate}
              publishedDate={article.publishedDate}
            />
            <p className="hs-muted mt-3 max-w-3xl text-sm leading-6">
              The October 20 update was researched and drafted by the Huang Sourcing Editorial
              Team with AI assistance using the public sources below. Agent Huang remains the
              original byline; this update does not claim his personal or specialist review.
            </p>
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {article.intro}
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
              {article.answerSummary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={article.primaryCta.label}
                analyticsLocation="china_factory_production_delays_article_hero"
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
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Milestones', 'Evidence', 'Recovery', 'Release'].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#decision-table"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">
                    Control
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
                    <ArrowRight
                      aria-hidden
                      className="size-4 shrink-0 text-[var(--hs-muted-soft)]"
                    />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0 lg:col-span-8">
            <Reveal>
              <p className="hs-eyebrow">Quick answer</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
                How should importers manage China factory production delays?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Record the missed milestone, supplier owner, affected quantity, evidence still
                missing, buyer approval, and next inspection or forwarder handoff. Keep reported
                status separate from what an agreed China-side check actually verifies.
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

            <div className="mt-12 grid gap-12">
              {article.sections.map((section, index) => (
                <Reveal
                  as="section"
                  className="scroll-mt-24"
                  id={section.id}
                  key={section.id}
                  staggerIndex={index}
                >
                  <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">
                    {section.title}
                  </h2>
                  <div className="hs-muted mt-4 grid gap-4 text-base leading-7">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? <BulletList items={section.bullets} /> : null}
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="hs-section-soft" id="exception-handoff">
        <div className="hs-container hs-section">
          <Reveal className="max-w-4xl">
            <p className="hs-eyebrow">A buyer-ready exception record</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What changes hands when a production milestone slips?
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Keep the original date, revised date, order and SKU, named supplier contact,
              evidence received, unresolved proof, buyer decision owner, and next update time
              in one record. The{' '}
              <a className="font-semibold text-[var(--hs-accent)] underline underline-offset-4 hover:text-[var(--hs-accent-strong)]" href={article.sources[0].href} rel="noreferrer" target="_blank">
                World Bank procurement guide
              </a>{' '}
              identifies roles, milestones, progress reports, change control, and escalation.{' '}
              <a className="font-semibold text-[var(--hs-accent)] underline underline-offset-4 hover:text-[var(--hs-accent-strong)]" href={article.sources[1].href} rel="noreferrer" target="_blank">
                New Zealand procurement guidance
              </a>{' '}
              recommends monitoring frequency that matches risk and written records of problems.
              This table adapts those public-sector practices to a private buying decision. It
              does not state a rule for Chinese factories or describe a completed client order.
            </p>
            <p className="hs-muted mt-3 text-sm leading-6">
              Example workflow: agree access and scope before asking for an onsite check. The
              buyer owns commercial approval; Huang Sourcing offers scoped QC and pre-shipment
              inspection, not an automatic standing production-management service.
            </p>
          </Reveal>
          <div className="mt-8 overflow-x-auto rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <table className="w-full min-w-[1180px] border-collapse text-left text-sm leading-6">
              <thead className="bg-[var(--hs-navy)] text-white">
                <tr>
                  <th className="w-[15%] p-4 font-extrabold" scope="col">Missed gate</th>
                  <th className="w-[22%] border-l border-white/10 p-4 font-extrabold" scope="col">Supplier owner and evidence</th>
                  <th className="w-[21%] border-l border-white/10 p-4 font-extrabold" scope="col">Scoped China-side check</th>
                  <th className="w-[22%] border-l border-white/10 p-4 font-extrabold" scope="col">Buyer approval or escalation</th>
                  <th className="w-[20%] border-l border-white/10 p-4 font-extrabold" scope="col">QC and forwarder handoff</th>
                </tr>
              </thead>
              <tbody>
                {article.exceptionRows.map((row) => (
                  <tr className="border-t border-[var(--hs-border)]" key={row.milestone}>
                    <th className="bg-[var(--hs-bg-soft)] p-4 align-top font-extrabold text-[var(--hs-text)]" scope="row">{row.milestone}</th>
                    <td className="border-l border-[var(--hs-border)] p-4 align-top text-[var(--hs-muted)]">{row.supplierEvidence}</td>
                    <td className="border-l border-[var(--hs-border)] p-4 align-top text-[var(--hs-muted)]">{row.scopedCheck}</td>
                    <td className="border-l border-[var(--hs-border)] p-4 align-top text-[var(--hs-muted)]">{row.buyerDecision}</td>
                    <td className="border-l border-[var(--hs-border)] p-4 align-top text-[var(--hs-muted)]">{row.handoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="hs-muted mt-3 text-sm leading-6">
            For a change to product, payment, or contract rights, use the buyer’s qualified
            technical or legal adviser and the signed agreement before instructing the supplier.
          </p>
        </div>
      </section>

      <section className="hs-section-white" id="decision-table">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Timeline decision table</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Connect production evidence to the next buyer decision.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              A status update becomes useful when it changes what the buyer will approve, pay,
              inspect, book, split, or hold.
            </p>
          </Reveal>
          <div className="mt-8 overflow-x-auto rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <table className="w-full min-w-3xl border-collapse text-left text-sm leading-6">
              <thead className="bg-[var(--hs-navy)] text-white">
                <tr>
                  <th className="p-4 font-extrabold" scope="col">
                    Risk node
                  </th>
                  <th className="border-l border-white/10 p-4 font-extrabold" scope="col">
                    What was checked
                  </th>
                  <th className="border-l border-white/10 p-4 font-extrabold" scope="col">
                    Buyer decision
                  </th>
                </tr>
              </thead>
              <tbody>
                {article.decisionRows.map((row) => (
                  <tr className="border-t border-[var(--hs-border)]" key={row.riskNode}>
                    <th
                      className="bg-[var(--hs-bg-soft)] p-4 align-top font-extrabold text-[var(--hs-text)]"
                      scope="row"
                    >
                      {row.riskNode}
                    </th>
                    <td className="border-l border-[var(--hs-border)] p-4 align-top text-[var(--hs-muted)]">
                      {row.whatWasChecked}
                    </td>
                    <td className="border-l border-[var(--hs-border)] p-4 align-top text-[var(--hs-muted)]">
                      {row.buyerDecision}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <EvidenceBasisSection
        className="hs-section-soft"
        intro="The October 20 editorial update adapts cited public procurement process guidance to an order-specific buyer worksheet. Check the real purchase order, factory access, and available inspection scope before using it."
        items={article.evidenceBasis}
      />

      <section className="hs-section-white" id="documents">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <FileText aria-hidden className="size-6" />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              What to send for timeline review.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Send the original timeline and every revision so the current promise can be tested
              against order status and the commercial deadline.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={article.whatToSend} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="red-flags">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <AlertTriangle aria-hidden className="size-6" />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              Red flags in factory delay updates.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              These signals do not prove that an order will fail, but they require stronger
              evidence before the buyer relies on the next completion date.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={article.redFlags} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="limits">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <div className="hs-icon-box size-12">
              <CalendarClock aria-hidden className="size-6" />
            </div>
            <p className="hs-eyebrow mt-5">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What an exception record cannot guarantee.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Better tracking supports earlier decisions. It does not control every factory,
              supplier, quality, logistics, or external event.
            </p>
            <BulletList items={article.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="sources">
        <div className="hs-container hs-section max-w-5xl">
          <Reveal>
            <p className="hs-eyebrow">Research basis · checked October 19, 2026</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Sources and transfer limits.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              These official sources describe public procurement contract management. The
              milestone record above is an editorial adaptation for overseas private buyers,
              not a legal requirement, inspection result, or claim that Huang Sourcing worked
              on the cited contracts. The{' '}
              <a className="font-semibold text-[var(--hs-accent)] underline underline-offset-4 hover:text-[var(--hs-accent-strong)]" href={article.sources[2].href} rel="noreferrer" target="_blank">
                Victoria government guide
              </a>{' '}
              also supports measurable checkpoints and written issue logs; it does not decide
              payment or cancellation rights under a buyer’s agreement.
            </p>
            <ul className="mt-6 grid gap-3">
              {article.sources.map((source) => (
                <li className="hs-card bg-[var(--hs-bg-soft)] p-5" key={source.href}>
                  <a className="font-extrabold text-[var(--hs-accent)] underline-offset-4 hover:underline" href={source.href} rel="noreferrer" target="_blank">
                    {source.label}
                  </a>
                  <p className="hs-muted mt-2 text-sm leading-6">{source.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Related next steps</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Protect quality and payment while the schedule moves.
            </h2>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2 lg:col-span-8">
            {article.relatedLinks.map((link, index) => (
              <Link
                className="hs-link-card group bg-[var(--hs-bg-soft)] p-5"
                href={link.href}
                key={link.href}
                style={{ transitionDelay: `${index * 35}ms` }}
              >
                <h3 className="text-lg font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent)]">
                  {link.label}
                </h3>
                <p className="hs-muted mt-2 text-sm leading-6">{link.note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-[var(--hs-accent)]">
                  Open page
                  <ArrowRight aria-hidden className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="faq">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3">
            {article.faqs.map((faq, index) => (
              <Reveal key={faq.question} staggerIndex={index}>
                <details className="group hs-card bg-white p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-[var(--hs-text)] marker:content-none">
                    <span>{faq.question}</span>
                    <span
                      aria-hidden
                      className="text-xl leading-none text-[var(--hs-accent)] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="hs-muted mt-3 border-t border-[var(--hs-border)] pt-3 text-sm leading-6">
                    {faq.answer}
                  </p>
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
              <p className="text-sm font-extrabold text-red-200">Before the next milestone slips</p>
              <h2 className="mt-3 text-3xl font-extrabold">
                Scope the check needed before the next payment or pickup decision.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the order, factory updates, buyer-approved requirements, payment stage,
                and shipment deadline. We can discuss a scoped{' '}
                <Link className="underline underline-offset-4" href="/qc-inspection-china">QC inspection</Link>{' '}
                or pre-shipment check where goods and access allow.
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel={article.primaryCta.label}
              analyticsLocation="china_factory_production_delays_article_final"
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
