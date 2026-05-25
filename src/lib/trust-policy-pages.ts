import type { Metadata } from 'next'

import {
  freeRiskCheckWhatsAppHref,
  privacyConfidentialityHref,
  scopeLimitationsHref,
  termsBookingPolicyHref,
} from '@/lib/site-links'
import { getAbsoluteUrl } from '@/lib/site-url'
import {
  makeFaqPageJsonLd,
  makeOrganizationReference,
} from '@/lib/structured-data'

export type TrustPolicySlug =
  | 'privacy-confidentiality'
  | 'scope-limitations'
  | 'terms-booking-policy'

type TrustPolicySection = {
  body: string
  items: string[]
  title: string
}

type TrustPolicyFaq = {
  answer: string
  question: string
}

export type TrustPolicyPage = {
  coreStatement: string
  ctaBody: string
  ctaLabel: string
  ctaHref: string
  description: string
  eyebrow: string
  faqs: TrustPolicyFaq[]
  h1: string
  href: string
  intro: string
  metaTitle: string
  sections: TrustPolicySection[]
  slug: TrustPolicySlug
  title: string
}

export const trustPolicyPages: Record<TrustPolicySlug, TrustPolicyPage> = {
  'privacy-confidentiality': {
    slug: 'privacy-confidentiality',
    href: privacyConfidentialityHref,
    title: 'Privacy & Confidentiality',
    metaTitle: 'Privacy & Confidentiality',
    description:
      'How Huang Sourcing handles buyer supplier information, reports, photos, order details, and sample report examples confidentially.',
    eyebrow: 'Trust & policies',
    h1: 'Privacy and confidentiality for China sourcing support.',
    intro:
      'Buyers often share supplier names, quotes, product details, photos, labels, and order timelines before payment or shipment. Huang Sourcing treats that information as client-specific service context, not public marketing material.',
    coreStatement:
      'Client supplier information is not published. Reports, photos, order details, and supplier documents are used to deliver the agreed service, and sample reports are examples or anonymized materials. Huang Sourcing does not pass buyer information to suppliers for supplier-paid marketing.',
    sections: [
      {
        title: 'Supplier information stays private',
        body: 'Supplier links, company names, contact details, quote terms, purchase orders, and product information are handled as buyer-provided context for the requested check.',
        items: [
          'Supplier names and contact details are not listed publicly',
          'Quote, payment, order, and shipment details are used only to understand the service scope',
          'Buyer-side questions and concerns are not shared as marketing leads for suppliers',
        ],
      },
      {
        title: 'Reports and photos are service evidence',
        body: 'Photos, inspection notes, label files, carton evidence, and report findings exist to help the buyer make a practical decision before payment, pickup, or shipment.',
        items: [
          'Photos and findings are prepared for the buyer’s decision process',
          'Report materials are not reused as public case studies without permission or anonymization',
          'Client-specific documents remain tied to the service request that created them',
        ],
      },
      {
        title: 'Sample reports are examples or anonymized',
        body: 'Public sample reports are designed to show format, evidence style, and honest scope boundaries without exposing private client details.',
        items: [
          'Real client-specific information is removed or replaced in public samples',
          'Sample files are not a promise that every order has the same scope or findings',
          'A real report may contain confidential buyer, supplier, product, and order details',
        ],
      },
      {
        title: 'No supplier-paid recommendation handoff',
        body: 'Huang Sourcing is buyer-aligned. The buyer pays for the service; supplier information is not transferred to factories, traders, or platforms for marketing follow-up.',
        items: [
          'No supplier-paid recommendations',
          'No selling buyer inquiry details to factories',
          'No public posting of buyer supplier lists or order documents',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will my supplier information be published?',
        answer:
          'No. Supplier links, company details, quotes, and order information are used for the requested service and are not published as public content.',
      },
      {
        question: 'Can sample reports include real client information?',
        answer:
          'Public sample reports should be examples or anonymized. Real reports may contain client-specific information, but that information is handled confidentially.',
      },
      {
        question: 'Do you share my information with suppliers for marketing?',
        answer:
          'No. Huang Sourcing does not transfer buyer inquiry details to suppliers for supplier-paid marketing or lead generation.',
      },
    ],
    ctaLabel: 'Send a confidential risk check',
    ctaHref: freeRiskCheckWhatsAppHref,
    ctaBody:
      'Send the supplier, order stage, and main concern. The details are used to understand your buyer-side risk and suggest the next practical China-side check.',
  },
  'scope-limitations': {
    slug: 'scope-limitations',
    href: scopeLimitationsHref,
    title: 'Scope & Limitations',
    metaTitle: 'Scope & Limitations',
    description:
      'Understand what Huang Sourcing can and cannot promise when reducing visible sourcing, inspection, shipment, and FBA prep risk in China.',
    eyebrow: 'Trust & policies',
    h1: 'Scope and limitations for buyer-side China checks.',
    intro:
      'Huang Sourcing gives overseas buyers practical evidence before deposit, supplier selection, balance payment, pickup, or shipment. Clear limits make that evidence more useful because the buyer knows what the check can and cannot prove.',
    coreStatement:
      'Huang Sourcing helps buyers reduce visible sourcing and shipment risk, but no inspection can remove every risk. Our work does not replace laboratory testing, legal due diligence, customs compliance review, or full marketplace compliance approval unless specifically scoped.',
    sections: [
      {
        title: 'What Huang Sourcing helps reduce',
        body: 'The work is designed around visible, practical risk signals that can affect a buyer’s payment, pickup, supplier selection, or shipment decision.',
        items: [
          'Supplier identity and factory or trader signals',
          'Visible product condition, defects, packaging, labels, and carton marks',
          'Shipment readiness before balance payment, pickup, or FBA shipment',
        ],
      },
      {
        title: 'What is outside a standard check',
        body: 'Some risks require specialist providers, formal documents, regulated tests, legal review, or marketplace approval processes outside a practical sourcing or inspection scope.',
        items: [
          'Laboratory testing and regulated certification',
          'Legal due diligence, contracts, and dispute resolution',
          'Customs compliance review and full Amazon or marketplace compliance approval',
        ],
      },
      {
        title: 'How reports should be used',
        body: 'A report is decision support. It helps buyers discuss corrections, hold payment, approve pickup, request rework, or ask for additional checks while goods are still accessible.',
        items: [
          'Use findings to ask better supplier questions',
          'Use photos as evidence for correction discussions',
          'Add lab, legal, customs, or marketplace review when the product requires it',
        ],
      },
      {
        title: 'No inspection finds everything',
        body: 'Onsite checks, sample review, carton checks, and photo-backed reports reduce uncertainty, but hidden defects, future transit damage, or issues outside the agreed scope may still exist.',
        items: [
          'Hidden or untested defects may remain',
          'Sampling cannot guarantee every unit',
          'Future supplier behavior, transit events, or platform decisions cannot be guaranteed',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does inspection remove all risk?',
        answer:
          'No. Inspection helps reduce visible risk and improves the buyer’s evidence before a decision, but it cannot remove every possible risk.',
      },
      {
        question: 'Can you replace lab testing?',
        answer:
          'No, not unless a lab-testing scope is separately arranged with the appropriate provider. Standard checks are not laboratory tests.',
      },
      {
        question: 'Can you guarantee Amazon or customs approval?',
        answer:
          'No. China-side prep and inspection can reduce visible mistakes, but final marketplace receiving, listing, customs, and compliance decisions are outside a standard scope.',
      },
    ],
    ctaLabel: 'Start with a scoped risk check',
    ctaHref: freeRiskCheckWhatsAppHref,
    ctaBody:
      'If you are unsure which risk can be checked practically, send the supplier, product, deadline, and decision point first.',
  },
  'terms-booking-policy': {
    slug: 'terms-booking-policy',
    href: termsBookingPolicyHref,
    title: 'Terms / Booking Policy',
    metaTitle: 'Terms / Booking Policy',
    description:
      'Booking policy for Huang Sourcing services, including confirmation after payment, cancellation, factory access, travel fees, re-inspection, report timing, and inspection limits.',
    eyebrow: 'Trust & policies',
    h1: 'Terms and booking policy for China-side sourcing checks.',
    intro:
      'This page explains how practical service booking usually works when a buyer needs supplier verification, QC inspection, pre-shipment inspection, FBA prep, sample consolidation, or a related China-side check.',
    coreStatement:
      'A booking is confirmed after the agreed scope, location, timing, deliverables, and payment are confirmed. Factory access, cancellation, travel, re-inspection, and report timing are handled according to the confirmed scope and practical onsite conditions.',
    sections: [
      {
        title: 'After payment and booking confirmation',
        body: 'Work is confirmed around the agreed service scope, supplier or factory details, target date, required files, and deliverables. The buyer should provide accurate requirements before work starts.',
        items: [
          'Service scope, location, timing, and deliverables are confirmed before work begins',
          'Label files, packing requirements, order details, or supplier contacts should be sent early',
          'Changes after confirmation may require a revised quote or schedule',
        ],
      },
      {
        title: 'Temporary cancellation or schedule changes',
        body: 'If the buyer, supplier, or factory changes the schedule, Huang Sourcing will try to adjust practically. Costs may apply when inspector time, travel, or confirmed arrangements have already been committed.',
        items: [
          'Notify cancellations or delays as early as possible',
          'Same-day or late changes may still incur service, travel, or standby costs',
          'A new date may need a revised quote if the scope or location changes',
        ],
      },
      {
        title: 'Factory does not cooperate or access is blocked',
        body: 'If the factory refuses cooperation, cannot provide access, or the site cannot be entered, Huang Sourcing will document the access issue and inform the buyer. A full inspection report may not be possible without access.',
        items: [
          'Factory access must be arranged by the buyer, supplier, or factory contact',
          'Blocked access may still consume inspector time and travel cost',
          'A re-visit or replacement check is quoted separately unless otherwise agreed',
        ],
      },
      {
        title: 'Travel fees and urgent locations',
        body: 'Travel-heavy locations, multiple factories, urgent trips, remote cities, accommodation, or special logistics are quoted before confirmation whenever they are known.',
        items: [
          'Travel is quoted based on location, distance, timing, and transport needs',
          'Urgent or remote work may require separate approval before booking',
          'Unexpected onsite changes may require buyer confirmation before extra cost is incurred',
        ],
      },
      {
        title: 'Re-inspection and follow-up checks',
        body: 'Re-inspection is usually a new service event because it requires new time, access, coordination, and often travel. The scope can be narrower if it only checks corrected issues.',
        items: [
          'Re-inspection is quoted separately unless the original quote states otherwise',
          'Follow-up checks can focus on specific corrections',
          'New defects or new scope items may require additional review',
        ],
      },
      {
        title: 'Report delivery and inspection limits',
        body: 'Standard report timing is confirmed with the service scope. For many practical checks, delivery is targeted within 24 hours after onsite work, but complex findings, missing information, or special reporting needs may take longer.',
        items: [
          'Urgent issues may be escalated with photos before the full report',
          'Report timing depends on scope, onsite access, and information completeness',
          'No inspection can guarantee that every issue will be found',
        ],
      },
    ],
    faqs: [
      {
        question: 'When is a service officially confirmed?',
        answer:
          'After scope, timing, location, deliverables, and payment are confirmed. Required files and supplier contacts should be provided before work starts.',
      },
      {
        question: 'What happens if the factory refuses entry?',
        answer:
          'The access issue is documented and shared with the buyer. Inspector time or travel may still be chargeable, and a new visit may need a separate quote.',
      },
      {
        question: 'How fast is the report delivered?',
        answer:
          'Standard timing is confirmed by scope. Many practical checks target delivery within 24 hours after onsite work, but complex scopes may take longer.',
      },
      {
        question: 'Can you guarantee all problems will be found?',
        answer:
          'No. The work reduces visible risk and provides evidence, but hidden defects, untested issues, or problems outside scope may remain.',
      },
    ],
    ctaLabel: 'Ask about booking scope',
    ctaHref: freeRiskCheckWhatsAppHref,
    ctaBody:
      'Send the product, supplier location, timing, and decision point so Huang Sourcing can suggest the right scope before you book.',
  },
}

export const trustPolicySlugs = Object.keys(trustPolicyPages) as TrustPolicySlug[]

export function getTrustPolicyPage(slug: TrustPolicySlug) {
  return trustPolicyPages[slug]
}

export function makeTrustPolicyMetadata(page: TrustPolicyPage): Metadata {
  return {
    title: page.metaTitle,
    description: page.description,
    alternates: {
      canonical: page.href,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: page.href,
      siteName: 'Huang Sourcing',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${page.title} by Huang Sourcing`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.description,
      images: ['/og-image.png'],
    },
  }
}

export function makeTrustPolicyJsonLd(page: TrustPolicyPage) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.metaTitle,
      description: page.description,
      url: getAbsoluteUrl(page.href),
      inLanguage: 'en',
      publisher: makeOrganizationReference(),
    },
    makeFaqPageJsonLd(page.faqs),
  ]
}
