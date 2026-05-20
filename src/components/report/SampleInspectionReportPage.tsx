import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileDown,
  PackageCheck,
  ShieldCheck,
  Tags,
  XCircle,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactAgentButton } from '@/components/home/ContactAgentButton'
import { Reveal } from '@/components/site/Reveal'
import { SiteBreadcrumbs } from '@/components/site/SiteBreadcrumbs'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/button'
import {
  freeRiskCheckWhatsAppHref,
  reportHref,
  scopeLimitationsHref,
} from '@/lib/site-links'

const reportPreviewImage = '/images/report-evidence.webp'

const buyerReceives = [
  'A decision note you can use before balance payment, pickup, or shipment',
  'Photo evidence from the supplier, warehouse, cartons, labels, and product condition',
  'Packaging, carton mark, barcode, and FNSKU checks when requirements are provided',
  'Visible defect notes and practical risk flags',
  'Recommended next steps based on the evidence collected',
]

const packagingEvidence = [
  'Carton labels and shipping marks are photographed before release',
  'FNSKU and barcode placement can be checked against files you provide',
  'SKU separation, carton count, and packing-list match are reviewed visually',
  'Wrong, missing, or mixed labels are called out before forwarder pickup',
]

const reportLimits = [
  'It is not a lab test',
  'It is not a legal guarantee',
  'It is not a full Amazon compliance review',
  'It is not a replacement for every formal QC protocol',
]

const decisionNotes = [
  {
    label: 'Recommended decision',
    body: 'Wait before paying the balance.',
  },
  {
    label: 'Why this matters',
    body: 'The buyer should not release final payment until packaging, labels, and visible readiness issues are clarified.',
  },
  {
    label: 'Next step',
    body: 'Ask the supplier for correction evidence, then decide whether a follow-up check or onsite inspection is needed.',
  },
]

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3">
      {items.map((item) => (
        <li className="flex gap-3 text-sm font-semibold leading-6 text-[var(--hs-muted)]" key={item}>
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--hs-accent)]" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function LimitList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3">
      {items.map((item) => (
        <li className="flex gap-3 text-sm font-semibold leading-6 text-[var(--hs-muted)]" key={item}>
          <XCircle className="mt-0.5 size-4 shrink-0 text-slate-500" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function SampleInspectionReportPage() {
  return (
    <main className="hs-page min-h-screen overflow-x-hidden antialiased">
      <SiteHeader activePage="service" topBanner={null} />
      <SiteBreadcrumbs items={[{ label: 'Sample inspection report' }]} />

      <section className="relative overflow-hidden border-b border-[var(--hs-border)] bg-[radial-gradient(circle_at_82%_12%,rgba(200,61,50,0.13),transparent_24rem),linear-gradient(180deg,#fffdf9_0%,#f4f0e8_100%)]">
        <div className="hs-container relative grid w-full min-w-0 items-center gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:py-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="hs-eyebrow">Sample inspection report</p>
            <h1 className="mt-4 max-w-full break-words text-balance text-4xl font-extrabold tracking-tight text-[var(--hs-text)] sm:max-w-4xl sm:text-5xl">
              Sample inspection report for China sourcing decisions.
            </h1>
            <p className="hs-muted mt-5 max-w-full break-words text-base leading-7 sm:max-w-3xl sm:text-lg sm:leading-8">
              Review the kind of decision note, packaging evidence, label checks,
              and honest scope limits a buyer can expect before payment, pickup, or shipment.
            </p>
            <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <ContactAgentButton
                analyticsLabel="Send supplier/order stage for a free risk check"
                analyticsLocation="sample_report_page_hero"
                className="h-auto min-h-12 w-full min-w-0 shrink whitespace-normal rounded-md bg-[var(--hs-accent)] px-5 py-3 text-sm font-extrabold leading-5 text-white shadow-[var(--hs-shadow-md)] transition-all hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-lg)] active:scale-[0.98] sm:w-auto sm:px-8"
                href={freeRiskCheckWhatsAppHref}
                size="lg"
                variant="default"
              >
                Send your supplier/order stage for a free risk check
              </ContactAgentButton>
              <Button
                asChild
                className="h-12 w-full min-w-0 shrink rounded-md border-[var(--hs-border)] bg-white/80 px-6 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] backdrop-blur transition-all hover:border-[var(--hs-accent)] hover:bg-white hover:text-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] active:scale-[0.98] sm:w-auto sm:px-8"
                size="lg"
                variant="outline"
              >
                <a download href={reportHref}>
                  <FileDown className="size-4" aria-hidden />
                  Download PDF (520 KB)
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-6" delayMs={120}>
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -right-3 top-5 h-full w-full rounded-lg border border-[var(--hs-border)] bg-white/70 shadow-[var(--hs-shadow-md)]" aria-hidden />
              <div className="absolute -left-3 bottom-6 hidden h-24 w-48 rounded-lg border border-[var(--hs-border)] bg-[var(--hs-accent-soft)] shadow-[var(--hs-shadow-sm)] sm:block" aria-hidden />
              <div className="hs-report-mockup relative max-w-full overflow-hidden rounded-lg border border-[var(--hs-border)] bg-white p-3 shadow-[var(--hs-shadow-lg)]">
                <div className="relative aspect-[16/10] min-h-[250px] overflow-hidden rounded-md">
                  <Image
                    alt="Sample inspection report preview with product photos, packaging notes, barcode labels, and red pen"
                    className="object-cover"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src={reportPreviewImage}
                  />
                </div>
                <div className="border-t border-[var(--hs-border)] bg-white p-5">
                  <p className="text-xs font-extrabold uppercase text-[var(--hs-muted-soft)]">
                    Example decision note
                  </p>
                  <p className="mt-2 text-xl font-extrabold text-[var(--hs-text)]">
                    Wait before paying the balance.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Packaging evidence', 'Carton label check', 'Buyer decision'].map((tag) => (
                      <span className="rounded-full bg-[var(--hs-accent-soft)] px-2.5 py-1 text-xs font-extrabold text-[var(--hs-accent-strong)]" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="hs-eyebrow">What a buyer receives</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Evidence that supports the next payment or shipment decision.
            </h2>
          </Reveal>
          <div className="grid gap-4 lg:col-span-8 sm:grid-cols-2">
            {buyerReceives.map((item, index) => {
              const icons = [ClipboardCheck, ShieldCheck, Tags, PackageCheck, ArrowRight]
              const Icon = icons[index] ?? CheckCircle2

              return (
                <Reveal
                  as="article"
                  className="hs-card hs-card-hover bg-[var(--hs-bg-soft)] p-5"
                  key={item}
                  staggerIndex={index}
                >
                  <div className="flex size-10 items-center justify-center rounded-md bg-white text-[var(--hs-accent)] shadow-[var(--hs-shadow-sm)]">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <p className="mt-4 text-sm font-extrabold leading-6 text-[var(--hs-text)]">{item}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-[var(--hs-navy)] text-white">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-sm font-extrabold text-red-200">Example decision note</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              The report helps you slow down when evidence is not ready.
            </h2>
          </Reveal>
          <div className="grid gap-4 lg:col-span-8 md:grid-cols-3">
            {decisionNotes.map((note, index) => (
              <Reveal
                as="article"
                className="rounded-lg border border-white/10 bg-white/5 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.16)]"
                key={note.label}
                staggerIndex={index}
              >
                <p className="text-sm font-extrabold text-red-200">{note.label}</p>
                <p className="mt-3 text-base font-semibold leading-7 text-white">{note.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-white">
        <div className="hs-container hs-section grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="hs-report-mockup overflow-hidden rounded-lg border border-[var(--hs-border)] bg-slate-100 shadow-[var(--hs-shadow-md)]">
              <div className="relative aspect-[16/10]">
                <Image
                  alt="Packaging and label evidence from a sample inspection report"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={reportPreviewImage}
                />
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6" delayMs={120}>
            <p className="hs-eyebrow">Example packaging and label evidence</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              The report focuses on visible evidence a buyer can act on.
            </h2>
            <CheckList items={packagingEvidence} />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[var(--hs-border)] bg-[var(--hs-bg)]">
        <div className="hs-container hs-section grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="hs-eyebrow">What the report does not claim</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--hs-text)]">
              Clear limits make the report more useful, not less.
            </h2>
            <p className="hs-muted mt-4 text-base leading-7">
              The report is designed to make visible sourcing risk easier to discuss
              before you release money or goods. It should be paired with specialist
              review when your product or channel requires it.
            </p>
          </Reveal>
          <Reveal className="hs-card bg-white p-6 lg:col-span-7" delayMs={120}>
            <LimitList items={reportLimits} />
            <p className="mt-5 border-t border-[var(--hs-border)] pt-4 text-sm font-extrabold leading-6 text-[var(--hs-text)]">
              Read the full{' '}
              <Link className="text-[var(--hs-accent-strong)] hover:underline" href={scopeLimitationsHref}>
                Scope & Limitations
              </Link>{' '}
              page for the standard boundary statement used across Huang Sourcing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="hs-container hs-section">
          <Reveal className="hs-cta-band px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="relative">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Want this kind of risk read on your order?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Send the supplier, product, payment status, and shipment stage.
                Agent Huang will suggest the safest next check.
              </p>
            </div>
            <div className="mt-7 flex w-full min-w-0 flex-col gap-3 sm:w-auto sm:flex-row lg:mt-0">
              <ContactAgentButton
                analyticsLabel="Send supplier/order stage for a free risk check"
                analyticsLocation="sample_report_page_final_cta"
                className="relative h-auto min-h-11 w-full min-w-0 shrink whitespace-normal rounded-md bg-[var(--hs-accent)] px-5 py-2 text-sm font-extrabold leading-5 text-white shadow-[var(--hs-shadow-sm)] transition-all hover:bg-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] active:scale-[0.98] sm:w-auto sm:px-6"
                href={freeRiskCheckWhatsAppHref}
                size="default"
                variant="default"
              >
                Send your supplier/order stage for a free risk check
              </ContactAgentButton>
              <Button
                asChild
                className="relative h-11 w-full min-w-0 shrink rounded-md border-white/20 bg-white px-6 text-sm font-extrabold text-[var(--hs-text)] shadow-[var(--hs-shadow-sm)] transition-all hover:bg-red-50 hover:text-[var(--hs-accent-strong)] hover:shadow-[var(--hs-shadow-md)] active:scale-[0.98] sm:w-auto"
                variant="outline"
              >
                <a download href={reportHref}>
                  <FileDown className="size-4" aria-hidden />
                  Download PDF (520 KB)
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
