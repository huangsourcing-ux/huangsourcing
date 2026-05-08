// [!code ++] Central contact URLs (mailto bodies address Agent Huang, not a former placeholder name)
export const businessEmail = 'agent@huangsourcing.com' as const

export const reportHref = '/media/huang-sourcing-sample-report-website-edition-v3.pdf'
export const publicWhatsAppHref = 'https://wa.me/15035930974' as const
export const publicLinkedInHref = 'https://www.linkedin.com/in/agenthuang/' as const
export const whatsappPhoneDisplay = '+1 503 593 0974' as const

export function buildWhatsAppHref(message: string) {
  return `${publicWhatsAppHref}?text=${encodeURIComponent(message)}` as const
}

const freeRiskCheckMessage = `Hi Agent Huang,

I want to Start Free - quick sourcing risk check.

Supplier link / quote:
Product:
Order stage:
Deadline:
`

export const freeRiskCheckWhatsAppHref =
  buildWhatsAppHref(freeRiskCheckMessage)

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
