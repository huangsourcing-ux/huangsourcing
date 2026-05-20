'use client'

import { CheckCircle2, ShieldCheck, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { WhatsAppIcon } from '@/components/site/SocialLinks'
import { trackWhatsAppClick } from '@/lib/analytics'
import { freeRiskCheckWhatsAppHref } from '@/lib/site-links'

const dismissKey = 'huang-sourcing-free-risk-check-dismissed-v1'
const offerItems = ['Supplier link review', 'Risk flags', 'Next-step recommendation'] as const
const promptDelay = 15000
const scrollTriggerProgress = 0.4

function hasDismissedPrompt() {
  try {
    return window.sessionStorage.getItem(dismissKey) === 'true'
  } catch {
    return false
  }
}

function saveDismissedPrompt() {
  try {
    window.sessionStorage.setItem(dismissKey, 'true')
  } catch {
    // Browser storage can be unavailable in private or locked-down contexts.
  }
}

function FreeRiskCheckPrompt() {
  const pathname = usePathname()
  const isSuppressedPage =
    pathname === '/free-china-sourcing-risk-check' || pathname === '/thank-you'
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isSuppressedPage) {
      return
    }

    if (hasDismissedPrompt()) return

    let timeout: number | undefined

    const clearTimer = () => {
      if (timeout) {
        window.clearTimeout(timeout)
        timeout = undefined
      }
    }

    const showPrompt = () => {
      clearTimer()
      window.removeEventListener('scroll', handleScroll)
      setIsVisible(true)
    }

    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight

      if (scrollableHeight <= 0) {
        return
      }

      const progress = window.scrollY / scrollableHeight
      if (progress >= scrollTriggerProgress) {
        showPrompt()
      }
    }

    timeout = window.setTimeout(showPrompt, promptDelay)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      clearTimer()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isSuppressedPage])

  if (isSuppressedPage || !isVisible) return null

  const dismiss = () => {
    saveDismissedPrompt()
    setIsVisible(false)
  }

  return (
    <aside
      aria-label="Start Free sourcing risk check"
      className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[360px]"
    >
      <div className="relative overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-lg)] ring-1 ring-white/70 sm:hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[var(--hs-accent)]" aria-hidden />
        <button
          aria-label="Dismiss Start Free prompt"
          className="absolute right-2 top-2 inline-flex size-8 items-center justify-center rounded-md text-[var(--hs-muted-soft)] transition-all hover:bg-[var(--hs-bg-soft)] hover:text-[var(--hs-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hs-accent)] focus-visible:ring-offset-2"
          onClick={dismiss}
          type="button"
        >
          <X className="size-4" />
        </button>

        <div className="flex items-center gap-3 p-3 pr-10">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-white shadow-[var(--hs-shadow-sm)]">
            <ShieldCheck className="size-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-extrabold text-[var(--hs-text)]">Start Free</p>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-extrabold uppercase text-emerald-700">
                Free
              </span>
            </div>
            <p className="mt-0.5 text-xs font-semibold leading-5 text-[var(--hs-muted)]">
              Quick supplier risk check before payment.
            </p>
          </div>
        </div>

        <a
          className="hs-btn-primary mx-3 mb-3 inline-flex h-10 w-[calc(100%-1.5rem)] items-center justify-center gap-2 px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hs-accent)] focus-visible:ring-offset-2"
          href={freeRiskCheckWhatsAppHref}
          onClick={() =>
            trackWhatsAppClick({
              ctaLabel: 'Start Free on WhatsApp',
              ctaLocation: 'free_risk_check_prompt_mobile',
            })
          }
          rel="noreferrer"
          target="_blank"
        >
          <WhatsAppIcon className="size-4 shrink-0" />
          Start Free on WhatsApp
        </a>
      </div>

      <div className="relative hidden overflow-hidden rounded-[var(--hs-radius)] border border-[var(--hs-border)] bg-white shadow-[var(--hs-shadow-lg)] ring-1 ring-white/70 sm:block">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[var(--hs-accent)]" aria-hidden />
        <button
          aria-label="Dismiss Start Free prompt"
          className="absolute right-2 top-2 inline-flex size-7 items-center justify-center rounded-md text-[var(--hs-muted-soft)] transition-all hover:bg-[var(--hs-bg-soft)] hover:text-[var(--hs-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hs-accent)] focus-visible:ring-offset-2"
          onClick={dismiss}
          type="button"
        >
          <X className="size-4" />
        </button>

        <div className="flex gap-3 p-3 pr-9 sm:p-4 sm:pr-10">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[var(--hs-navy)] text-white shadow-[var(--hs-shadow-sm)]">
            <ShieldCheck className="size-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-extrabold text-[var(--hs-text)]">Start Free</p>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-extrabold uppercase text-emerald-700">
                Free
              </span>
            </div>

            <p className="mt-1 text-xs font-semibold leading-5 text-[var(--hs-muted)] sm:text-sm">
              Quick sourcing risk check for a supplier link, quote, or first China order.
            </p>

            <ul className="mt-2 grid gap-1 text-xs font-semibold text-[var(--hs-muted)]">
              {offerItems.map((item) => (
                <li className="flex items-center gap-1.5" key={item}>
                  <CheckCircle2 className="size-3.5 shrink-0 text-[var(--hs-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              className="hs-btn-primary mt-3 inline-flex h-9 w-full items-center justify-center gap-2 px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hs-accent)] focus-visible:ring-offset-2 sm:w-auto"
              href={freeRiskCheckWhatsAppHref}
              onClick={() =>
                trackWhatsAppClick({
                  ctaLabel: 'Start Free on WhatsApp',
                  ctaLocation: 'free_risk_check_prompt',
                })
              }
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="size-4 shrink-0" />
              Start Free on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export { FreeRiskCheckPrompt }
