import type { Metadata } from 'next'

import {
  freeRiskCheckWhatsAppHref,
  privacyConfidentialityHref,
  refundPolicyHref,
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
  | 'refund-policy'
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
    title: 'Privacy Policy',
    metaTitle: 'Privacy Policy',
    description:
      'How Huang Sourcing handles buyer supplier information, reports, photos, order details, and sample report examples confidentially.',
    eyebrow: 'Trust & policies',
    h1: 'Privacy and confidentiality for China sourcing support.',
    intro:
      'Buyers often share supplier names, quotes, product details, photos, labels, and order timelines before payment or shipment. Huang Sourcing treats that information as client-specific service context, not public marketing material.',
    coreStatement:
      'Client supplier information is not published. Reports, photos, order details, and supplier documents are used to deliver the agreed service, and sample reports are examples or anonymized materials. Huang Sourcing does not pass buyer information to suppliers for supplier marketing or lead generation.',
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
        title: 'No supplier marketing handoff',
        body: 'Huang Sourcing is buyer-aligned. The buyer pays for the service; supplier information is not transferred to factories, traders, or platforms for marketing follow-up.',
        items: [
          'Paid by buyers, not suppliers',
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
          'No. Huang Sourcing does not transfer buyer inquiry details to suppliers for supplier marketing or lead generation.',
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
    title: 'Terms',
    metaTitle: 'Terms',
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
  'refund-policy': {
    slug: 'refund-policy',
    href: refundPolicyHref,
    title: 'Refund Policy',
    metaTitle: 'Refund Policy',
    description:
      'Refund policy for Huang Sourcing services, including refunds before work starts, partial refunds after committed costs, blocked factory access, and limits around supplier refunds.',
    eyebrow: 'Trust & policies',
    h1: 'Refund policy for China-side sourcing checks.',
    intro:
      'This page explains how refunds are handled when a buyer books supplier verification, QC inspection, sample consolidation, shipment-prep support, or another practical China-side service with Huang Sourcing.',
    coreStatement:
      'Refunds depend on whether work has started and whether inspector time, coordination, travel, onsite arrangements, or supplier communication costs have already been committed. Huang Sourcing handles service refunds fairly, but does not guarantee supplier refunds, product refunds, dispute recovery, or compensation from factories.',
    sections: [
      {
        title: 'Before work starts or costs are committed',
        body: 'If the buyer cancels before Huang Sourcing has started coordination or committed inspector time, travel, supplier communication, or other service costs, the paid amount may be refunded or applied to a revised booking.',
        items: [
          'Notify cancellation or change requests as early as possible',
          'Unstarted work with no committed cost can usually be refunded or rescheduled',
          'Bank, payment platform, or transfer fees may be deducted when they apply',
        ],
      },
      {
        title: 'After coordination or onsite costs are committed',
        body: 'Once work has started, refunds are reviewed based on the remaining unused service value after committed time, coordination, travel, and onsite arrangements are deducted.',
        items: [
          'Inspector scheduling, supplier coordination, and file review may count as started work',
          'Travel, standby, accommodation, and same-day arrangements may be deducted',
          'A partial refund may apply only to the unused portion of the agreed service',
        ],
      },
      {
        title: 'Late cancellation, blocked access, or wrong details',
        body: 'If the buyer, supplier, or factory causes late cancellation, blocked access, wrong address details, missing contacts, or unavailable goods, Huang Sourcing will document the issue and explain what cost has already been used.',
        items: [
          'Factory access must be arranged by the buyer, supplier, or factory contact',
          'Blocked access may still consume inspector time, travel, and standby cost',
          'A replacement visit or changed location is quoted separately unless agreed otherwise',
        ],
      },
      {
        title: 'If Huang Sourcing cannot perform the confirmed service',
        body: 'If Huang Sourcing cannot provide the confirmed service for reasons within its control, the buyer may receive a refund for the unavailable service portion or choose a practical reschedule where possible.',
        items: [
          'The buyer will be informed if a confirmed service cannot be performed as agreed',
          'Refunds are limited to the affected Huang Sourcing service fee portion',
          'Rescheduling may be offered when the buyer’s decision timeline still allows it',
        ],
      },
      {
        title: 'Supplier refunds and product disputes are outside this policy',
        body: 'This policy covers Huang Sourcing service fees only. It does not guarantee supplier refunds, order cancellation success, product replacement, factory compensation, marketplace reimbursement, or dispute recovery.',
        items: [
          'Supplier payment disputes remain between the buyer and supplier unless separately scoped',
          'Reports and photos are decision evidence, not a promise of supplier compensation',
          'Legal, customs, marketplace, and payment-platform outcomes are outside standard scope',
        ],
      },
      {
        title: 'Re-inspection and follow-up work',
        body: 'Re-inspection, follow-up correction checks, new supplier locations, or added product requirements are usually treated as new service work because they require new time, access, and coordination.',
        items: [
          'A narrower follow-up scope can be quoted when only corrected issues need review',
          'New defects, new files, or new product requirements may require added review',
          'Refunds for one service do not automatically cover a separate follow-up service',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I get a refund if I cancel before work starts?',
        answer:
          'Usually yes, if Huang Sourcing has not started coordination and no inspector time, travel, onsite arrangement, or other service cost has been committed. Payment or bank fees may still be deducted.',
      },
      {
        question: 'What if the factory blocks access or changes the date?',
        answer:
          'Huang Sourcing will document the access or schedule issue. Inspector time, travel, standby, or coordination costs may still be deducted, and a new visit may need a separate quote.',
      },
      {
        question: 'Do you refund supplier payments or product costs?',
        answer:
          'No. This policy applies to Huang Sourcing service fees only. Supplier refunds, product refunds, factory compensation, and dispute recovery are outside the standard service promise.',
      },
      {
        question: 'What if Huang Sourcing cannot perform the confirmed service?',
        answer:
          'If the confirmed service cannot be performed for reasons within Huang Sourcing’s control, the unavailable service portion may be refunded or rescheduled where practical.',
      },
    ],
    ctaLabel: 'Ask about refund scope',
    ctaHref: freeRiskCheckWhatsAppHref,
    ctaBody:
      'If your order timing, factory access, or payment decision may change, send the details before booking so Huang Sourcing can explain the practical refund and reschedule scope.',
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
