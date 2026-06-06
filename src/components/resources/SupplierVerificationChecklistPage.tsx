import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  ShieldCheck,
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
  makeSupplierVerificationChecklistJsonLd,
  supplierVerificationChecklist,
} from '@/lib/supplier-verification-checklist'
import { buildWhatsAppHref } from '@/lib/site-links'

function BulletList({ items }: { items: string[] }) {
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

export function SupplierVerificationChecklistPage() {
  const whatsappHref = buildWhatsAppHref(supplierVerificationChecklist.whatsappMessage)

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeSupplierVerificationChecklistJsonLd()} />
      <SiteBreadcrumbs
        currentPath={supplierVerificationChecklist.href}
        items={[
          { label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' },
          { label: supplierVerificationChecklist.title },
        ]}
      />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">{supplierVerificationChecklist.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">
              {supplierVerificationChecklist.h1}
            </h1>
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {supplierVerificationChecklist.intro}
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
              {supplierVerificationChecklist.answerSummary}
            </p>
            <ArticleByline
              modifiedDate={supplierVerificationChecklist.modifiedDate}
              publishedDate={supplierVerificationChecklist.publishedDate}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                size="lg"
                variant="default"
              >
                <Link href={supplierVerificationChecklist.primaryCta.href}>
                  {supplierVerificationChecklist.primaryCta.label}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                className="hs-btn-secondary h-12 px-6 text-sm sm:px-8"
                size="lg"
                variant="outline"
              >
                <a href={supplierVerificationChecklist.secondaryCta.href}>
                  {supplierVerificationChecklist.secondaryCta.label}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delayMs={120}>
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-video">
                <Image
                  alt={supplierVerificationChecklist.image.alt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src={supplierVerificationChecklist.image.src}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {supplierVerificationChecklist.stages.map((stage) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href={`#${stage.id}`}
                  key={stage.id}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">Check</span>
                  <span className="mt-2 block leading-5">{stage.title}</span>
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
              <h2 className="mt-5 text-2xl font-extrabold text-[var(--hs-text)]">
                Article guide
              </h2>
              <nav aria-label="Article table of contents" className="mt-5 grid gap-2">
                {supplierVerificationChecklist.tableOfContents.map((item) => (
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
                What should be checked in a supplier verification China checklist?
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                The checklist should connect supplier identity, payment path, production evidence,
                packaging, documents, and shipment readiness to the next buyer decision. These are
                the practical checks overseas buyers should not skip.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {supplierVerificationChecklist.quickChecks.map((item, index) => (
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

            <Reveal className="mt-12 scroll-mt-24" id="stage-checklist">
              <p className="hs-eyebrow">Process flow</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
                Start from the risk moment, not from a generic supplier score.
              </h2>
              <div className="mt-6 grid gap-3 md:grid-cols-4">
                {supplierVerificationChecklist.stages.map((stage, index) => (
                  <a
                    className="group rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-4 shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)]"
                    href={`#${stage.id}`}
                    key={stage.id}
                  >
                    <span className="inline-flex size-9 items-center justify-center rounded-md bg-[var(--hs-accent-soft)] text-sm font-extrabold text-[var(--hs-accent-strong)]">
                      {index + 1}
                    </span>
                    <h3 className="mt-4 text-base font-extrabold text-[var(--hs-text)] group-hover:text-[var(--hs-accent-strong)]">
                      {stage.title}
                    </h3>
                    <p className="hs-muted mt-2 text-sm leading-6">{stage.summary}</p>
                  </a>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 grid gap-12">
              {supplierVerificationChecklist.stages.map((stage, index) => (
                <Reveal as="section" className="scroll-mt-24" id={stage.id} key={stage.id} staggerIndex={index}>
                  <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">{stage.title}</h2>
                  <p className="hs-muted mt-4 text-base leading-7">{stage.summary}</p>
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    <div className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5">
                      <div className="flex items-center gap-3">
                        <div className="hs-icon-box size-10">
                          <FileText className="size-5" aria-hidden />
                        </div>
                        <h3 className="text-xl font-extrabold text-[var(--hs-text)]">
                          What was checked
                        </h3>
                      </div>
                      <BulletList items={stage.checked} />
                    </div>
                    <div className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-card-warm)] p-5">
                      <div className="flex items-center gap-3">
                        <div className="hs-icon-box size-10">
                          <ShieldCheck className="size-5" aria-hidden />
                        </div>
                        <h3 className="text-xl font-extrabold text-[var(--hs-text)]">
                          Buyer decision
                        </h3>
                      </div>
                      <BulletList items={stage.buyerDecision} />
                    </div>
                  </div>
                  <div className="mt-5 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-accent-soft)] p-5">
                    <p className="text-sm font-extrabold uppercase text-[var(--hs-accent-strong)]">
                      Agent Huang field note
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--hs-muted)]">{stage.fieldNote}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Checklist table</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Practical checklist by buyer decision.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Use this table to decide what evidence should be checked before the next payment
              or shipment movement.
            </p>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <div className="grid bg-[var(--hs-navy)] text-sm font-extrabold text-white md:grid-cols-3">
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">Risk node</div>
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">What was checked</div>
              <div className="p-4">Buyer decision</div>
            </div>
            {supplierVerificationChecklist.decisionRows.map((row) => (
              <div
                className="grid border-t border-[var(--hs-border)] text-sm leading-6 text-[var(--hs-muted)] md:grid-cols-3"
                key={row.riskNode}
              >
                <div className="bg-[var(--hs-bg-soft)] p-4 font-extrabold text-[var(--hs-text)] md:border-r md:border-[var(--hs-border)]">
                  {row.riskNode}
                </div>
                <div className="p-4 md:border-r md:border-[var(--hs-border)]">{row.whatWasChecked}</div>
                <div className="p-4">{row.decision}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EvidenceBasisSection
        intro="This checklist is based on supplier documents, payment-path signals, product and packing evidence, and the buyer decision stage before money or goods move."
        items={supplierVerificationChecklist.evidenceBasis}
      />

      <section className="hs-section-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4" id="documents">
            <p className="hs-eyebrow">Documents</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Documents buyers should request.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              One document rarely proves much. Several documents that match each other are
              more useful than one impressive certificate.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={supplierVerificationChecklist.documents} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft" id="red-flags">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <AlertTriangle className="size-6" aria-hidden />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              Red flags overseas buyers should not ignore.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              One warning sign does not always mean fraud. Two or three together usually mean
              the buyer should slow down before paying or releasing shipment.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={supplierVerificationChecklist.redFlags} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="limits">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What supplier verification cannot guarantee.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Clear limits make the checklist more useful. Verification should reduce visible
              risk before a buyer decision, not pretend every hidden issue has been removed.
            </p>
            <BulletList items={supplierVerificationChecklist.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Related next steps</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Move from checklist to the right China-side check.
            </h2>
          </Reveal>
          <div className="grid gap-3 lg:col-span-8 md:grid-cols-2">
            {supplierVerificationChecklist.relatedLinks.map((link, index) => (
              <Link
                className="hs-link-card group bg-white p-5"
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
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3">
            {supplierVerificationChecklist.faqs.map((faq, index) => (
              <Reveal
                as="article"
                className="hs-card bg-[var(--hs-bg-soft)] p-5"
                key={faq.question}
                staggerIndex={index}
              >
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
              <p className="text-sm font-extrabold text-red-200">Supplier verification checklist</p>
              <h2 className="mt-3 text-3xl font-extrabold">
                Not sure whether your supplier is safe to pay?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the supplier name, product, quotation, invoice, and current order stage.
                Huang Sourcing will review the visible risk points and suggest the next practical step.
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel="Free Risk Check"
              analyticsLocation="supplier_verification_checklist_final"
              className="relative mt-7 h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] lg:mt-0"
              href={whatsappHref}
              size="lg"
              variant="default"
            >
              Free Risk Check
            </ContactAgentButton>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
