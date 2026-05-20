type WhatsAppClickEvent = {
  ctaLabel: string
  ctaLocation: string
}

type FreeRiskCheckSubmitEvent = {
  paymentStatus?: string
  riskScenario?: string
  shipmentStage?: string
  source: string
}

type SampleReportDownloadEvent = {
  ctaLabel: string
  ctaLocation: string
}

type EmailClickEvent = {
  ctaLocation: string
  email: string
}

type ServiceViewEvent = {
  serviceName: string
  serviceSlug: string
}

type QuoteSentEvent = {
  quoteId?: string
  source?: string
}

type BookingPaidEvent = {
  bookingId?: string
  currency?: string
  source?: string
  value?: number
}

type AnalyticsParamValue = boolean | number | string | undefined
type AnalyticsParams = Record<string, AnalyticsParamValue>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (
      command: 'event',
      eventName: string,
      eventParams: Record<string, boolean | number | string>,
    ) => void
  }
}

export const analyticsEvents = {
  bookingPaid: 'booking_paid',
  clickEmail: 'click_email',
  clickWhatsApp: 'click_whatsapp',
  downloadSampleReport: 'download_sample_report',
  quoteSent: 'quote_sent',
  submitFreeRiskCheck: 'submit_free_risk_check',
  viewServiceFba: 'view_service_fba',
  viewServiceQc: 'view_service_qc',
  viewServiceSupplierVerification: 'view_service_supplier_verification',
} as const

export type AnalyticsEventName = (typeof analyticsEvents)[keyof typeof analyticsEvents]

function cleanParams(params: AnalyticsParams) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  ) as Record<string, boolean | number | string>
}

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') return

  const eventParams = cleanParams({
    ...params,
    page_path: window.location.pathname,
    page_title: document.title,
  })

  if (window.gtag) {
    window.gtag('event', eventName, eventParams)
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(['event', eventName, eventParams])
}

export function trackWhatsAppClick({ ctaLabel, ctaLocation }: WhatsAppClickEvent) {
  trackEvent(analyticsEvents.clickWhatsApp, {
    cta_label: ctaLabel,
    cta_location: ctaLocation,
  })
}

export function trackFreeRiskCheckSubmit({
  paymentStatus,
  riskScenario,
  shipmentStage,
  source,
}: FreeRiskCheckSubmitEvent) {
  trackEvent(analyticsEvents.submitFreeRiskCheck, {
    payment_status: paymentStatus,
    risk_scenario: riskScenario,
    shipment_stage: shipmentStage,
    source,
  })
}

export function trackSampleReportDownload({
  ctaLabel,
  ctaLocation,
}: SampleReportDownloadEvent) {
  trackEvent(analyticsEvents.downloadSampleReport, {
    cta_label: ctaLabel,
    cta_location: ctaLocation,
  })
}

export function trackEmailClick({ ctaLocation, email }: EmailClickEvent) {
  trackEvent(analyticsEvents.clickEmail, {
    cta_location: ctaLocation,
    email,
  })
}

export function trackServiceSupplierVerificationView(event: ServiceViewEvent) {
  trackEvent(analyticsEvents.viewServiceSupplierVerification, {
    service_name: event.serviceName,
    service_slug: event.serviceSlug,
  })
}

export function trackServiceQcView(event: ServiceViewEvent) {
  trackEvent(analyticsEvents.viewServiceQc, {
    service_name: event.serviceName,
    service_slug: event.serviceSlug,
  })
}

export function trackServiceFbaView(event: ServiceViewEvent) {
  trackEvent(analyticsEvents.viewServiceFba, {
    service_name: event.serviceName,
    service_slug: event.serviceSlug,
  })
}

export function trackQuoteSent({ quoteId, source }: QuoteSentEvent = {}) {
  trackEvent(analyticsEvents.quoteSent, {
    quote_id: quoteId,
    source,
  })
}

export function trackBookingPaid({
  bookingId,
  currency,
  source,
  value,
}: BookingPaidEvent = {}) {
  trackEvent(analyticsEvents.bookingPaid, {
    booking_id: bookingId,
    currency,
    source,
    value,
  })
}
