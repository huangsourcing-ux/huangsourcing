'use client'

import { CheckCircle2, ShieldCheck, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { WhatsAppIcon } from '@/components/site/SocialLinks'
import { trackWhatsAppClick } from '@/lib/analytics'
import { freeRiskCheckWhatsAppHref } from '@/lib/site-links'

const dismissKey = 'huang-sourcing-free-risk-check-dismissed-v1'
const offerItems = ['Supplier link review', 'Risk flags', 'Next-step recommendation'] as const
const mobileViewportQuery = '(max-width: 639px)'
const mobileScrollTrigger = 240

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
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (hasDismissedPrompt()) return

    const mediaQuery = window.matchMedia(mobileViewportQuery)
    let timeout: number | undefined

    const clearDesktopTimer = () => {
      if (timeout) {
        window.clearTimeout(timeout)
        timeout = undefined
      }
    }

    const showPrompt = () => {
      setIsVisible(true)
    }

    const handleMobileScroll = () => {
      if (window.scrollY >= mobileScrollTrigger) {
        showPrompt()
        window.removeEventListener('scroll', handleMobileScroll)
      }
    }

    const setupPromptTiming = () => {
      clearDesktopTimer()
      setIsVisible(false)
      window.removeEventListener('scroll', handleMobileScroll)

      if (mediaQuery.matches) {
        handleMobileScroll()
        window.addEventListener('scroll', handleMobileScroll, { passive: true })
        return
      }

      timeout = window.setTimeout(showPrompt, 3000)
    }

    setupPromptTiming()
    mediaQuery.addEventListener('change', setupPromptTiming)

    return () => {
      clearDesktopTimer()
      window.removeEventListener('scroll', handleMobileScroll)
      mediaQuery.removeEventListener('change', setupPromptTiming)
    }
  }, [])

  if (!isVisible) return null

  const dismiss = () => {
    saveDismissedPrompt()
    setIsVisible(false)
  }

  return (
    <aside
      aria-label="Start Free sourcing risk check"
      className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[360px]"
    >
      <div className="relative overflow-hidden rounded-lg border border-red-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] ring-1 ring-red-100 sm:hidden">
        <button
          aria-label="Dismiss Start Free prompt"
          className="absolute right-2 top-2 inline-flex size-8 items-center justify-center rounded-md text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          onClick={dismiss}
          type="button"
        >
          <X className="size-4" />
        </button>

        <div className="flex items-center gap-3 p-3 pr-10">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-red-600 text-white shadow-sm">
            <ShieldCheck className="size-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-extrabold text-slate-950">Start Free</p>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-extrabold uppercase text-emerald-700">
                Free
              </span>
            </div>
            <p className="mt-0.5 text-xs font-semibold leading-5 text-slate-700">
              Quick supplier risk check before payment.
            </p>
          </div>
        </div>

        <a
          className="mx-3 mb-3 inline-flex h-10 w-[calc(100%-1.5rem)] items-center justify-center gap-2 rounded-md bg-red-600 px-3 text-sm font-extrabold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.98]"
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

      <div className="relative hidden overflow-hidden rounded-lg border border-red-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] ring-1 ring-red-100 sm:block">
        <button
          aria-label="Dismiss Start Free prompt"
          className="absolute right-2 top-2 inline-flex size-7 items-center justify-center rounded-md text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          onClick={dismiss}
          type="button"
        >
          <X className="size-4" />
        </button>

        <div className="flex gap-3 p-3 pr-9 sm:p-4 sm:pr-10">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-red-600 text-white shadow-sm">
            <ShieldCheck className="size-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-extrabold text-slate-950">Start Free</p>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-extrabold uppercase text-emerald-700">
                Free
              </span>
            </div>

            <p className="mt-1 text-xs font-semibold leading-5 text-slate-700 sm:text-sm">
              Quick sourcing risk check for a supplier link, quote, or first China order.
            </p>

            <ul className="mt-2 grid gap-1 text-xs font-semibold text-slate-600">
              {offerItems.map((item) => (
                <li className="flex items-center gap-1.5" key={item}>
                  <CheckCircle2 className="size-3.5 shrink-0 text-red-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              className="mt-3 inline-flex h-9 w-full items-center justify-center gap-2 rounded-md bg-red-600 px-3 text-sm font-extrabold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.98] sm:w-auto"
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
