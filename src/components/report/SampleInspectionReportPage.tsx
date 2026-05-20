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
        <li className="flex gap-3 text-sm font-medium leading-6 text-slate-700" key={item}>
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-red-600" aria-hidden />
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
        <li className="flex gap-3 text-sm font-medium leading-6 text-slate-700" key={item}>
          <XCircle className="mt-0.5 size-4 shrink-0 text-slate-500" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function SampleInspectionReportPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950 antialiased">
      <SiteHeader activePage="service" topBanner={null} />
      <SiteBreadcrumbs items={[{ label: 'Sample inspection report' }]} />

      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#fbfcfd_0%,#f5f7f8_100%)]">
        <div className="mx-auto grid w-full min-w-0 max-w-7xl items-center gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-12 lg:py-16">
          <div className="min-w-0 lg:col-span-6">
            <p className="text-sm font-semibold text-red-600">Sample inspection report</p>
            <h1 className="mt-4 max-w-full break-words text-balance text-4xl font-bold tracking-tight text-slate-950 sm:max-w-4xl sm:text-5xl">
              Sample inspection report for China sourcing decisions.
            </h1>
            <p className="mt-5 max-w-full break-words text-base leading-7 text-slate-600 sm:max-w-3xl sm:text-lg sm:leading-8">
              Review the kind of decision note, packaging evidence, label checks,
              and honest scope limits a buyer can expect before payment, pickup, or shipment.
            </p>
            <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <ContactAgentButton
                analyticsLabel="Send supplier/order stage for a free risk check"
                analyticsLocation="sample_report_page_hero"
                className="h-auto min-h-12 w-full min-w-0 shrink whitespace-normal rounded-md bg-red-600 px-5 py-3 text-sm font-bold leading-5 text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98] sm:w-auto sm:px-8"
                href={freeRiskCheckWhatsAppHref}
                size="lg"
                variant="default"
              >
                Send your supplier/order stage for a free risk check
              </ContactAgentButton>
              <Button
                asChild
                className="h-12 w-full min-w-0 shrink rounded-md border-slate-300 bg-white px-6 text-sm font-bold text-slate-900 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-700 hover:shadow-md active:scale-[0.98] sm:w-auto sm:px-8"
                size="lg"
                variant="outline"
              >
                <a download href={reportHref}>
                  <FileDown className="size-4" aria-hidden />
                  Download PDF (520 KB)
                </a>
              </Button>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-6">
            <div className="max-w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/10] min-h-[250px]">
                <Image
                  alt="Sample inspection report preview with product photos, packaging notes, barcode labels, and red pen"
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={reportPreviewImage}
                />
              </div>
              <div className="border-t border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Example decision note
                </p>
                <p className="mt-2 text-xl font-bold text-slate-950">
                  Wait before paying the balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-red-600">What a buyer receives</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Evidence that supports the next payment or shipment decision.
            </h2>
          </div>
          <div className="grid gap-4 lg:col-span-8 sm:grid-cols-2">
            {buyerReceives.map((item, index) => {
              const icons = [ClipboardCheck, ShieldCheck, Tags, PackageCheck, ArrowRight]
              const Icon = icons[index] ?? CheckCircle2

              return (
                <article className="rounded-lg border border-slate-200 bg-slate-50 p-5" key={item}>
                  <div className="flex size-10 items-center justify-center rounded-md bg-white text-red-600 shadow-sm">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <p className="mt-4 text-sm font-bold leading-6 text-slate-900">{item}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-red-300">Example decision note</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              The report helps you slow down when evidence is not ready.
            </h2>
          </div>
          <div className="grid gap-4 lg:col-span-8 md:grid-cols-3">
            {decisionNotes.map((note) => (
              <article className="rounded-lg border border-white/10 bg-white/5 p-5" key={note.label}>
                <p className="text-sm font-bold text-red-300">{note.label}</p>
                <p className="mt-3 text-base font-semibold leading-7 text-white">{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
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
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold text-red-600">Example packaging and label evidence</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              The report focuses on visible evidence a buyer can act on.
            </h2>
            <CheckList items={packagingEvidence} />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-red-600">What the report does not claim</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Clear limits make the report more useful, not less.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The report is designed to make visible sourcing risk easier to discuss
              before you release money or goods. It should be paired with specialist
              review when your product or channel requires it.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:col-span-7">
            <LimitList items={reportLimits} />
            <p className="mt-5 border-t border-slate-200 pt-4 text-sm font-bold leading-6 text-slate-800">
              Read the full{' '}
              <Link className="text-red-700 hover:underline" href={scopeLimitationsHref}>
                Scope & Limitations
              </Link>{' '}
              page for the standard boundary statement used across Huang Sourcing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="rounded-lg border border-slate-200 bg-slate-950 px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
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
                className="h-auto min-h-11 w-full min-w-0 shrink whitespace-normal rounded-md bg-red-600 px-5 py-2 text-sm font-bold leading-5 text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg active:scale-[0.98] sm:w-auto sm:px-6"
                href={freeRiskCheckWhatsAppHref}
                size="default"
                variant="default"
              >
                Send your supplier/order stage for a free risk check
              </ContactAgentButton>
              <Button
                asChild
                className="h-11 w-full min-w-0 shrink rounded-md border-white/20 bg-white px-6 text-sm font-bold text-slate-950 shadow-sm transition-all hover:bg-red-50 hover:text-red-700 hover:shadow-md active:scale-[0.98] sm:w-auto"
                variant="outline"
              >
                <a download href={reportHref}>
                  <FileDown className="size-4" aria-hidden />
                  Download PDF (520 KB)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
