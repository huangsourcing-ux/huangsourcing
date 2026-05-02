// [!code ++] Central contact URLs (mailto bodies address Agent Huang, not a former placeholder name)
export const businessEmail = 'max@hfsourcing.com' as const

export const reportHref = '/sample-report.pdf'

const bookingBody = `Hi Agent Huang,

I want to book a $299 inspection.

Product:
Factory location:
Inspection date:
Order quantity:
`
const customQuoteBody = `Hi Agent Huang,

I need a quote for:

- Channel: Amazon / Walmart / other
- Volume:
- SKUs:
- Destinations:
- Label / insert needs:
`
export const bookingMailto = `mailto:${businessEmail}?subject=${encodeURIComponent('Book a Free Sourcing Call - Huang Sourcing')}&body=${encodeURIComponent(bookingBody)}`
export const customQuoteMailto = `mailto:${businessEmail}?subject=${encodeURIComponent('Custom Quote — FBA & Logistics')}&body=${encodeURIComponent(customQuoteBody)}`

export const publicWhatsAppHref =
  process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim() || 'https://wa.me/8610000000000'
