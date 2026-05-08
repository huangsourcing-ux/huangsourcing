type WhatsAppClickEvent = {
  ctaLabel: string
  ctaLocation: string
}

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      eventParams: Record<string, string>,
    ) => void
  }
}

export function trackWhatsAppClick({ ctaLabel, ctaLocation }: WhatsAppClickEvent) {
  if (typeof window === 'undefined') return

  window.gtag?.('event', 'whatsapp_click', {
    cta_label: ctaLabel,
    cta_location: ctaLocation,
    page_path: window.location.pathname,
  })
}
