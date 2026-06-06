import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  SearchCheck,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { ArticleByline } from '@/components/resources/ArticleTrustSignals'
import { JsonLd } from '@/components/seo/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  makeSupplierVerificationChinaLimitsArticleJsonLd,
  supplierVerificationChinaLimitsArticle,
} from '@/lib/supplier-verification-china-limits-article'
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

export function SupplierVerificationChinaLimitsArticlePage() {
  const whatsappHref = buildWhatsAppHref(
    supplierVerificationChinaLimitsArticle.whatsappMessage,
  )

  return (
    <main className="hs-page min-h-screen overflow-x-clip antialiased">
      <SiteHeader activePage="resources" topBanner={null} />
      <JsonLd data={makeSupplierVerificationChinaLimitsArticleJsonLd()} />
      <SiteBreadcrumbs
        currentPath={supplierVerificationChinaLimitsArticle.href}
        items={[
          { label: 'China sourcing risk guides', href: '/china-sourcing-risk-guides' },
          { label: supplierVerificationChinaLimitsArticle.title },
        ]}
      />

      <section className="hs-hero">
        <div className="hs-container grid gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">{supplierVerificationChinaLimitsArticle.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold text-[var(--hs-text)] sm:text-5xl">
              {supplierVerificationChinaLimitsArticle.h1}
            </h1>
            <ArticleByline
              publishedDate={supplierVerificationChinaLimitsArticle.publishedDate}
            />
            <p className="hs-muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {supplierVerificationChinaLimitsArticle.intro}
            </p>
            <p className="hs-muted mt-4 max-w-3xl text-base leading-7">
              {supplierVerificationChinaLimitsArticle.answerSummary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactAgentButton
                analyticsLabel={supplierVerificationChinaLimitsArticle.primaryCta.label}
                analyticsLocation="supplier_verification_china_limits_article_hero"
                className="hs-btn-primary h-12 px-6 text-sm sm:px-8"
                href={whatsappHref}
                size="lg"
                variant="default"
              >
                {supplierVerificationChinaLimitsArticle.primaryCta.label}
              </ContactAgentButton>
              <Button
                asChild
                className="hs-btn-secondary h-12 px-6 text-sm sm:px-8"
                size="lg"
                variant="outline"
              >
                <a href={supplierVerificationChinaLimitsArticle.secondaryCta.href}>
                  {supplierVerificationChinaLimitsArticle.secondaryCta.label}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delayMs={120}>
            <div className="overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-[var(--hs-bg-soft)] shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-video">
                <Image
                  alt={supplierVerificationChinaLimitsArticle.image.alt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src={supplierVerificationChinaLimitsArticle.image.src}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['Identity', 'Payment', 'Supplier Role', 'Scope Limits'].map((item) => (
                <a
                  className="min-h-24 rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-3 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-colors hover:border-[var(--hs-accent)] hover:text-[var(--hs-accent-strong)]"
                  href="#proof-matrix"
                  key={item}
                >
                  <span className="block text-xs uppercase text-[var(--hs-accent)]">Proof</span>
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
              <h2 className="mt-5 text-2xl font-extrabold text-[var(--hs-text)]">
                Article guide
              </h2>
              <nav aria-label="Article table of contents" className="mt-5 grid gap-2">
                {supplierVerificationChinaLimitsArticle.tableOfContents.map((item) => (
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
                Supplier verification proves visible consistency, not zero risk.
              </h2>
              <p className="hs-muted mt-4 text-base leading-7">
                Supplier verification China helps buyers decide whether the current
                documents, payment details, supplier role, product evidence, and order-stage
                facts are consistent enough to continue. It cannot honestly prove that the
                supplier is risk-free or that every future order will be safe.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {supplierVerificationChinaLimitsArticle.quickChecks.map((item, index) => (
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
              {supplierVerificationChinaLimitsArticle.sections.map((section, index) => (
                <Reveal
                  as="section"
                  className="scroll-mt-24"
                  id={section.id}
                  key={section.id}
                  staggerIndex={index}
                >
                  <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">{section.title}</h2>
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

      <section className="hs-section-soft" id="proof-matrix">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Proof limits matrix</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What each supplier verification check can support.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              The proof value depends on the evidence checked and the buyer decision. A useful
              verification report should show both the supporting evidence and the limit.
            </p>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <div className="grid bg-[var(--hs-navy)] text-sm font-extrabold text-white lg:grid-cols-4">
              <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">Check area</div>
              <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">Can support</div>
              <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">Cannot prove</div>
              <div className="p-4">Buyer decision</div>
            </div>
            {supplierVerificationChinaLimitsArticle.proofRows.map((row) => (
              <div
                className="grid border-t border-[var(--hs-border)] text-sm leading-6 text-[var(--hs-muted)] lg:grid-cols-4"
                key={row.checkArea}
              >
                <div className="bg-[var(--hs-bg-soft)] p-4 font-extrabold text-[var(--hs-text)] lg:border-r lg:border-[var(--hs-border)]">
                  {row.checkArea}
                </div>
                <div className="p-4 lg:border-r lg:border-[var(--hs-border)]">{row.canSupport}</div>
                <div className="p-4 lg:border-r lg:border-[var(--hs-border)]">{row.cannotProve}</div>
                <div className="p-4">{row.buyerDecision}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="decision-table">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Buyer decision table</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What was checked before deciding to pay, hold, verify, or inspect.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Supplier verification is useful when the report connects evidence to the next
              action, especially before deposit or when a supplier changes payment details.
            </p>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-sm)]">
            <div className="grid bg-[var(--hs-navy)] text-sm font-extrabold text-white md:grid-cols-3">
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">Risk node</div>
              <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">What was checked</div>
              <div className="p-4">Buyer decision</div>
            </div>
            {supplierVerificationChinaLimitsArticle.decisionRows.map((row) => (
              <div
                className="grid border-t border-[var(--hs-border)] text-sm leading-6 text-[var(--hs-muted)] md:grid-cols-3"
                key={row.riskNode}
              >
                <div className="bg-[var(--hs-bg-soft)] p-4 font-extrabold text-[var(--hs-text)] md:border-r md:border-[var(--hs-border)]">
                  {row.riskNode}
                </div>
                <div className="p-4 md:border-r md:border-[var(--hs-border)]">{row.whatWasChecked}</div>
                <div className="p-4">{row.buyerDecision}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-soft" id="evidence-basis">
        <div className="hs-container hs-section">
          <Reveal className="max-w-3xl">
            <p className="hs-eyebrow">Evidence basis</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What this guidance is based on.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              This article uses buyer-side China sourcing workflow evidence: supplier
              documents, payment details, product and address signals, and the order stage
              where the buyer still has leverage.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {supplierVerificationChinaLimitsArticle.evidenceBasis.map((group) => (
              <Reveal
                as="section"
                className="rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white p-5 shadow-[var(--hs-shadow-sm)]"
                key={group.title}
              >
                <div className="hs-icon-box size-11">
                  <SearchCheck className="size-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-[var(--hs-text)]">{group.title}</h3>
                <BulletList items={group.items} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hs-section-white" id="documents">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="hs-icon-box size-12">
              <FileText className="size-6" aria-hidden />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-[var(--hs-text)]">
              What to send for supplier verification.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              The result is stronger when Agent Huang can compare supplier identity,
              payment path, product scope, and the decision deadline in one view.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={supplierVerificationChinaLimitsArticle.whatToSend} />
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
              Red flags that limit what verification can prove.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              A red flag does not automatically prove fraud. It means the buyer should slow
              down, ask for evidence, or change the check scope before payment.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <BulletList items={supplierVerificationChinaLimitsArticle.redFlags} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-white" id="limits">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <p className="hs-eyebrow">Scope limits</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              What supplier verification should not promise.
            </h2>
            <p className="hs-muted mt-3 text-base leading-7">
              Supplier verification is useful when the buyer keeps the evidence and limit
              together. It should reduce visible risk before a decision, not create a
              guarantee that no future supplier problem can happen.
            </p>
            <BulletList items={supplierVerificationChinaLimitsArticle.scopeLimits} />
          </Reveal>
        </div>
      </section>

      <section className="hs-section-soft">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">Related next steps</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[var(--hs-text)]">
              Move from proof limits to the right China-side check.
            </h2>
          </Reveal>
          <div className="grid gap-3 lg:col-span-8 md:grid-cols-2">
            {supplierVerificationChinaLimitsArticle.relatedLinks.map((link, index) => (
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

      <section className="hs-section-white" id="faq">
        <div className="hs-container hs-section max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-[var(--hs-text)]">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3">
            {supplierVerificationChinaLimitsArticle.faqs.map((faq, index) => (
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
              <p className="text-sm font-extrabold text-red-200">Before supplier payment</p>
              <h2 className="mt-3 text-3xl font-extrabold">
                Ask Agent Huang what supplier verification can prove for this order.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the supplier link, PI, bank details, product evidence, and decision
                deadline so the check can separate useful proof from scope limits.
              </p>
            </div>
            <ContactAgentButton
              analyticsLabel={supplierVerificationChinaLimitsArticle.primaryCta.label}
              analyticsLocation="supplier_verification_china_limits_article_final"
              className="relative mt-7 h-12 bg-[var(--hs-accent)] px-6 text-sm font-extrabold text-white shadow-[var(--hs-shadow-sm)] hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] lg:mt-0"
              href={whatsappHref}
              size="lg"
              variant="default"
            >
              <FileCheck2 className="size-4" aria-hidden />
              Check Supplier Verification Scope
            </ContactAgentButton>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
