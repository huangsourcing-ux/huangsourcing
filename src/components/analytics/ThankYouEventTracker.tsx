'use client'

import { useEffect } from 'react'

import { trackBookingPaid, trackQuoteSent } from '@/lib/analytics'

function markOnce(eventName: string, key: string) {
  const storageKey = `huang-sourcing-ga4:${eventName}:${key}`

  try {
    if (window.sessionStorage.getItem(storageKey) === 'true') return false
    window.sessionStorage.setItem(storageKey, 'true')
  } catch {
    // If storage is unavailable, still allow the analytics event to fire once per mount.
  }

  return true
}

export function ThankYouEventTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const event = params.get('event') ?? ''
    const source = params.get('source') ?? undefined
    const quoteId = params.get('quote_id') ?? undefined
    const bookingId = params.get('booking_id') ?? undefined
    const currency = params.get('currency') ?? undefined
    const rawValue = params.get('value')
    const value = rawValue ? Number(rawValue) : undefined

    if (event === 'quote_sent' || source === 'quote-sent') {
      if (markOnce('quote_sent', window.location.href)) {
        trackQuoteSent({
          quoteId,
          source,
        })
      }
      return
    }

    if (event === 'booking_paid' || source === 'booking-paid') {
      if (markOnce('booking_paid', window.location.href)) {
        trackBookingPaid({
          bookingId,
          currency,
          source,
          value: Number.isFinite(value) ? value : undefined,
        })
      }
    }
  }, [])

  return null
}
