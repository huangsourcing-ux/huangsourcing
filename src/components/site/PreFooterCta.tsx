import { ArrowRight, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const freeRiskCheckHref = '/free-china-sourcing-risk-check'

function PreFooterCta() {
  return (
    <section aria-labelledby="prefooter-cta" className="hs-container py-10 sm:py-12">
      <div className="grid gap-5 rounded-2xl border border-white/10 bg-[var(--hs-navy)] p-6 text-white shadow-[0_22px_55px_rgba(0,0,0,0.16)] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--hs-accent-soft)]">
            Risk Check
          </p>
          <h2
            className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl"
            id="prefooter-cta"
          >
            Before you pay or ship, start with a quick risk check.
          </h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-white/72">
            Send the supplier link, quote, product photos, or order stage. We’ll
            review the situation and suggest the safest next step from the China
            side.
          </p>
        </div>
        <Link
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[var(--hs-accent)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_34px_rgba(200,61,50,0.28)] transition-all hover:bg-[var(--hs-accent-strong)] active:scale-[0.98] sm:w-auto lg:min-w-[250px]"
          href={freeRiskCheckHref}
        >
          <ShieldCheck className="size-4 shrink-0" aria-hidden />
          Free Sourcing Risk Check
          <ArrowRight className="size-4 shrink-0" aria-hidden />
        </Link>
      </div>
    </section>
  )
}

export { PreFooterCta }
