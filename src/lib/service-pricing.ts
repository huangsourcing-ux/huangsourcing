import { chinaSourcingInspectionPricingHref } from '@/lib/site-links'
import { getAbsoluteUrl } from '@/lib/site-url'
import {
  makeFaqPageJsonLd,
  makeServiceJsonLd,
  makeWebPageJsonLd,
} from '@/lib/structured-data'

export type PricedServiceSlug =
  | 'supplier-verification-china'
  | 'qc-inspection-china'
  | 'china-pre-shipment-inspection'
  | 'sample-consolidation-china'
  | 'amazon-fba-prep-china'

export type ServicePricingGuideItem = {
  slug: PricedServiceSlug
  service: string
  href: `/${PricedServiceSlug}`
  startingPoint: string
  whatAffectsPrice: string
  factors: string[]
  quoteNote: string
  priceValue?: string
  priceCurrency?: 'USD'
}

export type PricingGuideFaq = {
  question: string
  answer: string
}

export const pricingGuideHref = chinaSourcingInspectionPricingHref

export const servicePricingGuideItems: ServicePricingGuideItem[] = [
  {
    slug: 'supplier-verification-china',
    service: 'Supplier Verification',
    href: '/supplier-verification-china',
    startingPoint: 'From $249',
    whatAffectsPrice: 'supplier count, document depth, onsite need',
    factors: ['Supplier count', 'Document depth', 'Onsite need'],
    quoteNote:
      'A focused one-supplier review starts from $249. Multi-supplier comparison, deeper document work, or onsite follow-up is scoped before work starts.',
    priceValue: '249',
    priceCurrency: 'USD',
  },
  {
    slug: 'qc-inspection-china',
    service: 'QC Inspection',
    href: '/qc-inspection-china',
    startingPoint: 'From $299 / inspector day',
    whatAffectsPrice: 'location, SKU count, complexity, AQL scope',
    factors: ['Factory location', 'SKU count', 'Product complexity', 'AQL scope'],
    quoteNote:
      'Standard QC starts from $299 per inspector day. Travel-heavy locations, complex checks, or special sampling requirements are confirmed before booking.',
    priceValue: '299',
    priceCurrency: 'USD',
  },
  {
    slug: 'china-pre-shipment-inspection',
    service: 'Pre-Shipment Inspection',
    href: '/china-pre-shipment-inspection',
    startingPoint: 'From $299 / inspector day',
    whatAffectsPrice: 'cartons, pickup deadline, factory location',
    factors: ['Carton volume', 'Pickup deadline', 'Factory location'],
    quoteNote:
      'Pre-shipment inspection starts from $299 per inspector day. Tight pickup windows, carton volume, and location can change the quote.',
    priceValue: '299',
    priceCurrency: 'USD',
  },
  {
    slug: 'sample-consolidation-china',
    service: 'Sample Consolidation',
    href: '/sample-consolidation-china',
    startingPoint: 'From $99 + freight',
    whatAffectsPrice: 'sample count, storage, repacking, comparison',
    factors: ['Sample count', 'Storage time', 'Repacking', 'Comparison notes'],
    quoteNote:
      'Sample consolidation starts from $99 plus freight. Larger sample batches, storage, repacking, or detailed comparison notes are quoted before handling.',
    priceValue: '99',
    priceCurrency: 'USD',
  },
  {
    slug: 'amazon-fba-prep-china',
    service: 'Amazon FBA Prep',
    href: '/amazon-fba-prep-china',
    startingPoint: 'Custom quote',
    whatAffectsPrice: 'SKU count, carton count, labels, prep work',
    factors: ['SKU count', 'Carton count', 'Labels', 'Prep work'],
    quoteNote:
      'FBA prep is quoted by SKU count, carton count, label files, prep work, supplier location, and coordination needs.',
  },
]

export const servicePricingBySlug = Object.fromEntries(
  servicePricingGuideItems.map((item) => [item.slug, item]),
) as Record<PricedServiceSlug, ServicePricingGuideItem>

export const pricingGuideFaqs: PricingGuideFaq[] = [
  {
    question: 'How much does China inspection cost?',
    answer:
      'QC inspection and pre-shipment inspection start from $299 per inspector day. The final quote depends on factory location, SKU count, product complexity, carton volume, timing, and the inspection scope.',
  },
  {
    question: 'Why is Amazon FBA prep a custom quote?',
    answer:
      'FBA prep depends heavily on SKU count, carton count, label files, label application or checking, inserts, packaging work, and coordination with the supplier or forwarder.',
  },
  {
    question: 'Does the starting price include travel?',
    answer:
      'The starting point covers a standard scope. Travel-heavy factory locations, urgent timing, multiple factories, or extended onsite work may be quoted separately before work starts.',
  },
  {
    question: 'Can I start with a free risk check?',
    answer:
      'Yes. If you are unsure which paid service fits, send the supplier, product, order stage, order value, and deadline first. Huang Sourcing can suggest the practical next step before you book paid work.',
  },
]

export function makePricingGuideJsonLd() {
  return [
    makeWebPageJsonLd({
      type: 'CollectionPage',
      name: 'China sourcing inspection pricing and quote guide',
      description:
        'Starting prices and quote factors for supplier verification, QC inspection, pre-shipment inspection, sample consolidation, and Amazon FBA prep in China.',
      path: pricingGuideHref,
      hasPart: servicePricingGuideItems.map((item) =>
        makeServiceJsonLd(
          {
            name: item.service,
            description: item.quoteNote,
            serviceType: item.service,
            url: getAbsoluteUrl(item.href),
            offers: item.priceValue
              ? {
                  '@type': 'Offer',
                  price: item.priceValue,
                  priceCurrency: item.priceCurrency ?? 'USD',
                  url: getAbsoluteUrl(item.href),
                }
              : {
                  '@type': 'Offer',
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    priceCurrency: 'USD',
                    description: item.startingPoint,
                  },
                  url: getAbsoluteUrl(item.href),
                },
          },
          { includeContext: false },
        ),
      ),
    }),
    makeFaqPageJsonLd(pricingGuideFaqs),
  ]
}
