import { whatToSendBeforeChinaInspectionHref } from '@/lib/site-links'
import { getAbsoluteUrl } from '@/lib/site-url'
import {
  seoServicePages,
  type SeoServiceSlug,
} from '@/lib/seo-service-pages'
import {
  makeFaqPageJsonLd,
  makeOrganizationReference,
  makeServiceJsonLd,
} from '@/lib/structured-data'

export type BookingPrepServiceItem = {
  slug: SeoServiceSlug
  service: string
  href: `/${SeoServiceSlug}`
  stage: string
  note: string
  whatToSend: string[]
}

export type BookingPrepFaq = {
  question: string
  answer: string
}

const servicePrepMeta: Record<SeoServiceSlug, Pick<BookingPrepServiceItem, 'stage' | 'note'>> = {
  'supplier-verification-china': {
    stage: 'Before deposit',
    note: 'Use this when supplier identity, quote terms, or company background needs a buyer-side review before payment.',
  },
  'qc-inspection-china': {
    stage: 'Before balance payment',
    note: 'Use this when finished or nearly finished goods need product, packaging, label, and carton evidence.',
  },
  'china-pre-shipment-inspection': {
    stage: 'Before pickup or final release',
    note: 'Use this when packed goods need shipment-readiness evidence before final payment or forwarder pickup.',
  },
  'amazon-fba-prep-china': {
    stage: 'Before FBA shipment',
    note: 'Use this when FNSKU, carton label, SKU separation, and prep details need China-side confirmation.',
  },
  'sample-consolidation-china': {
    stage: 'Before supplier selection',
    note: 'Use this when several supplier samples need receiving, photos, comparison, and organized forwarding.',
  },
}

const orderedPrepServiceSlugs: SeoServiceSlug[] = [
  'supplier-verification-china',
  'qc-inspection-china',
  'china-pre-shipment-inspection',
  'amazon-fba-prep-china',
  'sample-consolidation-china',
]

export const bookingPrepHref = whatToSendBeforeChinaInspectionHref

export const bookingPrepQuickChecklist = [
  'Supplier name, link, factory address, and contact person',
  'Product photos, specifications, SKU count, order quantity, and carton count',
  'Order stage, payment deadline, pickup window, or shipment deadline',
  'Labels, packing files, barcode files, sample notes, or shipment-plan details',
  'Main concern you want checked before payment, pickup, or shipment',
]

export const bookingPrepServiceItems: BookingPrepServiceItem[] = orderedPrepServiceSlugs.map((slug) => {
  const page = seoServicePages[slug]

  return {
    slug,
    service: page.title,
    href: `/${slug}`,
    stage: servicePrepMeta[slug].stage,
    note: servicePrepMeta[slug].note,
    whatToSend: page.whatToSend,
  }
})

export const bookingPrepQuoteReasons = [
  {
    title: 'Scope is clearer',
    body: 'The service can be matched to the exact decision: supplier verification, QC, pickup release, FBA prep, or sample comparison.',
  },
  {
    title: 'Location and timing are confirmed',
    body: 'Factory city, pickup window, inspection date, and supplier contact details affect scheduling and quote accuracy.',
  },
  {
    title: 'Files reduce back-and-forth',
    body: 'POs, packing lists, label files, shipment plans, and approved sample notes help avoid vague inspection instructions.',
  },
  {
    title: 'The right service is easier to choose',
    body: 'Complete context helps avoid booking QC when supplier verification, sample consolidation, or FBA prep is the better first step.',
  },
]

export const bookingPrepFaqs: BookingPrepFaq[] = [
  {
    question: 'Can I send partial information first?',
    answer:
      'Yes. Send what you already have, including the supplier, product, order stage, deadline, and main concern. Agent Huang can tell you what is still missing before a paid scope is confirmed.',
  },
  {
    question: 'Do I need a purchase order and packing list before QC?',
    answer:
      'For QC inspection, a purchase order, product photos, approved sample notes, packing list, label requirements, barcode files, factory address, and target inspection date make the scope much clearer. If production is not ready yet, send the available files first.',
  },
  {
    question: 'What if the supplier will not share documents?',
    answer:
      'That is useful risk information. Send the supplier link, quote, product details, and what the supplier refused to share so Huang Sourcing can suggest whether to ask harder questions, verify the supplier, or delay payment.',
  },
  {
    question: 'Can Agent Huang tell me which service fits?',
    answer:
      'Yes. If you are not sure whether you need supplier verification, QC inspection, pre-shipment inspection, FBA prep, or sample consolidation, start with a free risk check and share the order context.',
  },
]

export function makeBookingPrepJsonLd() {
  const pageUrl = getAbsoluteUrl(bookingPrepHref)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'What to send before booking a China inspection or supplier check',
      description:
        'Booking preparation guide for supplier verification, QC inspection, pre-shipment inspection, Amazon FBA prep, and sample consolidation in China.',
      url: pageUrl,
      inLanguage: 'en',
      publisher: makeOrganizationReference(),
      hasPart: bookingPrepServiceItems.map((item) =>
        makeServiceJsonLd(
          {
            name: item.service,
            description: `${item.stage}: ${item.whatToSend.join(', ')}.`,
            serviceType: item.service,
            url: getAbsoluteUrl(item.href),
          },
          { includeContext: false },
        ),
      ),
    },
    makeFaqPageJsonLd(bookingPrepFaqs),
  ]
}
