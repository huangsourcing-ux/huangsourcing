import type { Metadata } from 'next'

import { businessEmail } from '@/lib/site-links'
import { getAbsoluteUrl } from '@/lib/site-url'

export type SourcingStageSlug =
  | 'before-deposit-china-supplier-check'
  | 'before-balance-payment-qc-china'
  | 'before-forwarder-pickup-inspection-china'
  | 'before-amazon-fba-shipment-china'
  | 'compare-china-supplier-samples'

type FaqItem = {
  question: string
  answer: string
}

type ServicePathItem = {
  href: string
  note: string
  title: string
}

export type SourcingStagePage = {
  slug: SourcingStageSlug
  stage: string
  seoKeyword: string
  title: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  imageAlt: string
  imageSrc: string
  intro: string
  primaryService: string
  primaryServiceHref: string
  primaryCtaLabel: string
  ctaMessage: string
  riskSummary: string
  buyerQuestions: string[]
  riskSignals: string[]
  checks: string[]
  servicePath: ServicePathItem[]
  whatToSend: string[]
  decisionOutcomes: string[]
  scopeLimits: string[]
  faqs: FaqItem[]
  relatedStages: SourcingStageSlug[]
}

export const sourcingStagePages: Record<SourcingStageSlug, SourcingStagePage> = {
  'before-deposit-china-supplier-check': {
    slug: 'before-deposit-china-supplier-check',
    stage: 'Before Deposit',
    seoKeyword: 'verify Chinese supplier before payment, verify Chinese supplier before deposit',
    title: 'Before Deposit China Supplier Check',
    metaTitle: 'Verify Chinese Supplier Before Payment | Before Deposit Check',
    metaDescription:
      'Verify a Chinese supplier before payment or deposit with buyer-side checks for company identity, factory or trader signals, quote terms, and payment risk.',
    eyebrow: 'Before deposit',
    h1: 'Verify a Chinese supplier before payment or deposit.',
    imageAlt:
      'Verify Chinese supplier before payment with buyer-side company and factory signal checks',
    imageSrc: '/images/service-supplier-verification.webp',
    intro:
      'Use this page when a Chinese supplier is asking for a deposit but the company identity, factory role, quote terms, or payment pressure still feels unclear. Huang Sourcing helps overseas buyers slow the decision down and check visible supplier risk before money leaves the account.',
    primaryService: 'Supplier Verification China',
    primaryServiceHref: '/supplier-verification-china',
    primaryCtaLabel: 'Start supplier risk check',
    riskSummary:
      'The deposit stage is where many sourcing mistakes become expensive. The goal is not to promise that a supplier is risk-free, but to give you a clearer buyer-side view before you approve payment, sign a PI, or let the supplier control the timeline.',
    buyerQuestions: [
      'Is this supplier actually the company I think I am paying?',
      'Do the company name, address, product range, and quote terms line up?',
      'Is the supplier acting like a factory, trader, or unclear middleman?',
      'What should I ask before sending the first payment?',
    ],
    riskSignals: [
      'The supplier pushes for a 30% deposit before basic details are clear',
      'Company name, address, invoice details, or Alibaba profile details do not match cleanly',
      'The quote is attractive but payment terms, MOQ, lead time, or tooling terms are vague',
      'The supplier avoids simple proof such as production photos, licenses, or facility details',
    ],
    checks: [
      'Visible supplier identity and company consistency',
      'Factory or trader signals based on the information available',
      'Quote, PI, MOQ, lead time, and payment-term risk',
      'Product range and capability signals that should be challenged before payment',
      'Practical next questions to ask before deposit release',
    ],
    servicePath: [
      {
        title: 'Free Sourcing Risk Check',
        href: '/free-china-sourcing-risk-check',
        note: 'Use first when you are unsure whether the visible risk needs a paid supplier verification scope.',
      },
      {
        title: 'Supplier Verification China',
        href: '/supplier-verification-china',
        note: 'Use when you need a focused buyer-side check before sending deposit payment.',
      },
      {
        title: 'Alibaba Supplier Verification China',
        href: '/alibaba-supplier-verification-china',
        note: 'Use when the supplier was found on Alibaba and the profile, invoice, or company signals need review.',
      },
    ],
    whatToSend: [
      'Supplier link, website, company name, and contact details',
      'Quote, PI, payment terms, MOQ, lead time, and order value',
      'Product photos, specifications, and target quantity',
      'Any warning signs or questions you already noticed',
    ],
    decisionOutcomes: [
      'Proceed with clearer questions and better payment conditions',
      'Request more proof before deposit payment',
      'Add onsite verification, sample comparison, or QC before the next payment',
      'Pause the supplier if the visible risk is too high',
    ],
    scopeLimits: [
      'We do not promise zero supplier risk',
      'We do not replace legal due diligence or contract review',
      'We do not replace certification, lab testing, or regulated compliance checks',
      'We do not make supplier-paid recommendations',
    ],
    faqs: [
      {
        question: 'Can you verify a Chinese supplier before I pay a deposit?',
        answer:
          'Yes. Send the supplier link, company details, quote, product, and order stage. Huang Sourcing can review visible supplier risk and suggest the next buyer-side step.',
      },
      {
        question: 'Is this the same as a full factory audit?',
        answer:
          'No. Supplier verification is a practical early-stage check. A full factory audit or onsite visit can be quoted separately when the order risk justifies it.',
      },
      {
        question: 'Can you tell me if it is safe to pay?',
        answer:
          'The check gives practical risk guidance, not a legal guarantee. The purpose is to make supplier signals and payment risks clearer before you decide.',
      },
      {
        question: 'Should I do this before or after samples?',
        answer:
          'If the supplier identity or payment pressure feels unclear, check before deposit. If you already have several suppliers, sample consolidation can help before final selection.',
      },
    ],
    relatedStages: [
      'compare-china-supplier-samples',
      'before-balance-payment-qc-china',
      'before-forwarder-pickup-inspection-china',
    ],
    ctaMessage: `Hi Agent Huang,

I need to verify a Chinese supplier before deposit.

Supplier link / company name:
Product:
Quote / order value:
Payment deadline:
Main concern:
`,
  },
  'before-balance-payment-qc-china': {
    slug: 'before-balance-payment-qc-china',
    stage: 'Before Balance Payment',
    seoKeyword: 'inspection before balance payment China',
    title: 'Before Balance Payment QC China',
    metaTitle: 'Inspection Before Balance Payment China | QC & Label Check',
    metaDescription:
      'Arrange inspection before balance payment in China with buyer-side QC checks for visible defects, packaging, labels, cartons, and shipment readiness.',
    eyebrow: 'Before balance payment',
    h1: 'Inspection before balance payment in China.',
    imageAlt:
      'Inspection before balance payment in China checking product packaging labels and cartons',
    imageSrc: '/images/service-qc-inspection.webp',
    intro:
      'Use this page when production is finished or nearly finished and the supplier is asking for the final balance. Huang Sourcing checks goods, packaging, labels, cartons, and visible shipment readiness while the order is still in China and corrections are still possible.',
    primaryService: 'QC Inspection China',
    primaryServiceHref: '/qc-inspection-china',
    primaryCtaLabel: 'Check goods before balance payment',
    riskSummary:
      'The balance-payment stage is a practical leverage point. Once the final payment is released and freight is booked, wrong labels, visible defects, missing cartons, or poor packaging become harder and more expensive to fix.',
    buyerQuestions: [
      'Are the finished goods acceptable enough to release the balance?',
      'Do product condition, packaging, labels, and carton marks match my requirements?',
      'Is the supplier asking for payment before giving enough evidence?',
      'Should I approve, request rework, or schedule a re-inspection?',
    ],
    riskSignals: [
      'The supplier says production is finished but provides only limited photos',
      'The balance payment deadline arrives before independent QC evidence exists',
      'Product defects, wrong packaging, or label mistakes would create returns or bad reviews',
      'Carton count, packing list, or shipment readiness is still unclear',
    ],
    checks: [
      'Sampled goods for visible product condition and workmanship',
      'Quantity signals, cartons, packing condition, labels, barcodes, and carton marks',
      'Simple function checks when they are included in the agreed scope',
      'Photo evidence of defects, packaging issues, and shipment-readiness signals',
      'Decision notes for approve, hold payment, request rework, or re-check',
    ],
    servicePath: [
      {
        title: 'Free Sourcing Risk Check',
        href: '/free-china-sourcing-risk-check',
        note: 'Use when you need quick triage before choosing the inspection scope.',
      },
      {
        title: 'QC Inspection China',
        href: '/qc-inspection-china',
        note: 'Use when goods are ready or nearly ready and final payment depends on evidence.',
      },
      {
        title: 'Sample Inspection Report',
        href: '/sample-inspection-report-china',
        note: 'Review the sample report format before you decide what evidence you need.',
      },
    ],
    whatToSend: [
      'Purchase order, invoice, product photos, and approved sample notes',
      'Factory address, contact person, and target inspection date',
      'Packing list, carton labels, barcode files, and packaging requirements',
      'Critical defects or special checkpoints that matter before payment',
    ],
    decisionOutcomes: [
      'Release balance payment with clearer evidence',
      'Hold balance payment until supplier corrections are complete',
      'Request rework, replacement, sorting, or updated packaging',
      'Schedule re-inspection before pickup or shipment release',
    ],
    scopeLimits: [
      'We do not replace laboratory testing or certification review',
      'We do not guarantee hidden defects outside the inspection scope',
      'We do not replace legal claims, contracts, or supplier dispute resolution',
      'We do not promise that every risk can be eliminated before payment',
    ],
    faqs: [
      {
        question: 'When should I book inspection before balance payment?',
        answer:
          'Book it when production is finished or close enough that goods, packaging, and cartons are available to check before you release the final payment.',
      },
      {
        question: 'Can you check labels and packaging as part of QC?',
        answer:
          'Yes. Provide the packaging specs, label files, barcode requirements, and carton-mark details before inspection so they can be included in the scope.',
      },
      {
        question: 'Can the report help me negotiate with the supplier?',
        answer:
          'It gives photo evidence and practical findings you can use to request correction, rework, sorting, or follow-up checks before payment.',
      },
      {
        question: 'Is this useful if the supplier already sent photos?',
        answer:
          'Often yes. Supplier photos may not show sampled defects, carton details, or label issues from a buyer-side perspective.',
      },
    ],
    relatedStages: [
      'before-forwarder-pickup-inspection-china',
      'before-amazon-fba-shipment-china',
      'before-deposit-china-supplier-check',
    ],
    ctaMessage: `Hi Agent Huang,

I need inspection before balance payment in China.

Product:
Factory location:
Order quantity:
Balance payment deadline:
Main checks needed:
`,
  },
  'before-forwarder-pickup-inspection-china': {
    slug: 'before-forwarder-pickup-inspection-china',
    stage: 'Before Pickup',
    seoKeyword: 'pre pickup inspection China',
    title: 'Before Forwarder Pickup Inspection China',
    metaTitle: 'Pre Pickup Inspection China | Before Forwarder Collection',
    metaDescription:
      'Book a pre pickup inspection in China before forwarder collection, with checks for cartons, packing condition, labels, shipping marks, and shipment readiness.',
    eyebrow: 'Before forwarder pickup',
    h1: 'Pre-pickup inspection in China before your forwarder collects goods.',
    imageAlt:
      'Pre pickup inspection in China checking cartons labels and shipment readiness before forwarder collection',
    imageSrc: '/images/service-pre-shipment.webp',
    intro:
      'Use this page when your supplier says cartons are ready and the forwarder is about to collect. Huang Sourcing checks visible shipment readiness, carton condition, labels, shipping marks, and final release issues before the goods leave the supplier.',
    primaryService: 'China Pre-Shipment Inspection',
    primaryServiceHref: '/china-pre-shipment-inspection',
    primaryCtaLabel: 'Check cartons before pickup',
    riskSummary:
      'The pickup stage is the last practical moment to catch visible shipment problems at the supplier side. After the forwarder collects, access is harder, correction options shrink, and responsibility can become messy.',
    buyerQuestions: [
      'Are the cartons actually ready for pickup?',
      'Do carton labels, shipping marks, and packing details match the order?',
      'Should pickup proceed, be delayed, or wait for supplier correction?',
      'Is there enough photo evidence before the goods leave the factory?',
    ],
    riskSignals: [
      'The forwarder pickup is scheduled but carton evidence is thin',
      'The supplier asks for fast release while labels or packing details remain unclear',
      'Cartons, shipping marks, packing-list details, or final quantity signals do not match cleanly',
      'The buyer cannot easily inspect or correct goods after pickup',
    ],
    checks: [
      'Packed cartons, carton condition, and visible shipment readiness',
      'Carton labels, shipping marks, packing-list signals, and basic count indicators',
      'Visible goods or packaging issues when included in the pre-shipment scope',
      'Pickup blockers that should be corrected before release',
      'Photo evidence for the buyer, supplier, and forwarder discussion',
    ],
    servicePath: [
      {
        title: 'China Pre-Shipment Inspection',
        href: '/china-pre-shipment-inspection',
        note: 'Use when goods are packed or nearly packed and pickup depends on final evidence.',
      },
      {
        title: 'QC Inspection China',
        href: '/qc-inspection-china',
        note: 'Use earlier when the product itself still needs deeper sampled QC before balance payment.',
      },
      {
        title: 'Amazon FBA Prep China',
        href: '/amazon-fba-prep-china',
        note: 'Use when pickup is for an Amazon shipment with FNSKU or carton-label risk.',
      },
    ],
    whatToSend: [
      'Pickup date, forwarder contact, and supplier contact',
      'Packing list, carton count, shipping marks, and label files',
      'Order quantity, product photos, and packaging requirements',
      'Any final payment or pickup condition that must be checked',
    ],
    decisionOutcomes: [
      'Approve forwarder pickup with documented shipment readiness',
      'Delay pickup until carton, label, or packing issues are corrected',
      'Hold final payment until release conditions are clearer',
      'Add QC or FBA prep checks if the risk is broader than pickup readiness',
    ],
    scopeLimits: [
      'We do not guarantee hidden defects inside sealed cartons unless opening is scoped and allowed',
      'We do not guarantee future transit damage will not happen',
      'We do not replace freight forwarder responsibility or customs compliance',
      'We do not approve supplier release on your behalf without your decision',
    ],
    faqs: [
      {
        question: 'What is pre pickup inspection in China?',
        answer:
          'It is a buyer-side check before the forwarder collects goods, focused on cartons, labels, packing condition, and visible shipment readiness.',
      },
      {
        question: 'Is this different from pre-shipment inspection?',
        answer:
          'They overlap. This page focuses on the pickup decision: whether the goods should leave the supplier now or wait for correction.',
      },
      {
        question: 'Can you coordinate with my forwarder?',
        answer:
          'Yes, when included in the scope. Send the forwarder contact, pickup window, factory address, and shipment details.',
      },
      {
        question: 'Can inspection happen after pickup?',
        answer:
          'It is usually better before pickup. After goods move to a forwarder warehouse, access and correction options may be more limited.',
      },
    ],
    relatedStages: [
      'before-balance-payment-qc-china',
      'before-amazon-fba-shipment-china',
      'before-deposit-china-supplier-check',
    ],
    ctaMessage: `Hi Agent Huang,

I need a pre pickup inspection in China.

Product:
Factory location:
Pickup date:
Forwarder:
Main pickup risk:
`,
  },
  'before-amazon-fba-shipment-china': {
    slug: 'before-amazon-fba-shipment-china',
    stage: 'Before FBA Shipment',
    seoKeyword: 'FBA prep China before shipment',
    title: 'Before Amazon FBA Shipment China',
    metaTitle: 'FBA Prep China Before Shipment | FNSKU & Carton Label Check',
    metaDescription:
      'Get FBA prep in China before shipment with checks for FNSKU labels, carton labels, SKU separation, packaging, and forwarder pickup readiness.',
    eyebrow: 'Before FBA shipment',
    h1: 'FBA prep in China before shipment to Amazon.',
    imageAlt:
      'FBA prep China before shipment checking FNSKU labels carton labels and SKU separation',
    imageSrc: '/images/service-fba-prep.webp',
    intro:
      'Use this page when Amazon-bound goods are still in China and you need evidence before cartons leave the supplier or forwarder. Huang Sourcing checks visible FNSKU, carton labels, SKU organization, packing details, and pickup readiness before shipment.',
    primaryService: 'Amazon FBA Prep China',
    primaryServiceHref: '/amazon-fba-prep-china',
    primaryCtaLabel: 'Check FBA prep before shipment',
    riskSummary:
      'Amazon shipment mistakes are often operational rather than dramatic: mixed SKUs, missing FNSKU labels, wrong carton labels, or unclear shipment-plan evidence. The goal is to catch visible China-side prep issues before freight moves.',
    buyerQuestions: [
      'Are FNSKU and carton labels applied correctly enough before pickup?',
      'Are SKUs separated and packed according to the shipment plan?',
      'Does the supplier need to correct packing or labels before the forwarder collects?',
      'Is there enough photo evidence before export?',
    ],
    riskSignals: [
      'The supplier sends only partial label photos before shipment',
      'Multiple SKUs are being packed and mixed carton risk is high',
      'Carton labels, FNSKU files, shipment plan, or pickup details changed recently',
      'Amazon receiving delays would create cash-flow or inventory problems',
    ],
    checks: [
      'FNSKU labels, carton labels, and visible label placement',
      'SKU separation, carton condition, packing details, and basic shipment-plan match',
      'Supplier or forwarder pickup readiness before cartons leave China',
      'Photo evidence of labels, cartons, and issues needing correction',
      'Practical recommendation before pickup or shipment release',
    ],
    servicePath: [
      {
        title: 'Amazon FBA Prep China',
        href: '/amazon-fba-prep-china',
        note: 'Use for label checks, carton evidence, SKU separation, and China-side prep coordination.',
      },
      {
        title: 'FNSKU Label Check China',
        href: '/fnsku-label-check-china',
        note: 'Use when FNSKU labels, carton labels, or mixed-SKU risk is the main shipment concern.',
      },
      {
        title: 'China Pre-Shipment Inspection',
        href: '/china-pre-shipment-inspection',
        note: 'Use when you also need broader carton, packing, and shipment-readiness checks before pickup.',
      },
      {
        title: 'QC Inspection China',
        href: '/qc-inspection-china',
        note: 'Use earlier if product condition and defects still need sampled inspection before payment.',
      },
    ],
    whatToSend: [
      'FNSKU files, carton labels, shipment plan, and SKU list',
      'Carton count, unit count, product photos, and packaging requirements',
      'Factory address, forwarder contact, and pickup window',
      'Any insert, bundle, polybag, suffocation label, or special prep requirement',
    ],
    decisionOutcomes: [
      'Approve FBA pickup with clearer label and carton evidence',
      'Ask the supplier to correct labels, cartons, or SKU separation before shipment',
      'Add broader pre-shipment inspection if the order needs more than FBA prep checks',
      'Delay pickup when visible prep evidence is not ready',
    ],
    scopeLimits: [
      'We do not guarantee Amazon receiving approval or final FBA acceptance',
      'We do not replace marketplace compliance, listing approval, or product safety testing',
      'We do not guarantee hidden carton contents unless opening and checking is scoped',
      'We do not control Amazon warehouse processing after shipment',
    ],
    faqs: [
      {
        question: 'Can you check FNSKU labels before shipment from China?',
        answer:
          'Yes. Send the FNSKU files, shipment plan, SKU list, carton count, and supplier details so the visible label evidence can be checked.',
      },
      {
        question: 'Can you apply labels or only inspect them?',
        answer:
          'Both may be possible depending on location, volume, and scope. Send label files, SKU count, carton count, and prep requirements for a quote.',
      },
      {
        question: 'Do you guarantee Amazon will accept the shipment?',
        answer:
          'No. The service helps reduce visible China-side prep errors, but final Amazon receiving and marketplace compliance are separate.',
      },
      {
        question: 'Should I combine FBA prep with QC inspection?',
        answer:
          'If product quality is still uncertain, yes. FBA prep checks labels and operational readiness, while QC inspection checks sampled goods and packaging defects.',
      },
    ],
    relatedStages: [
      'before-forwarder-pickup-inspection-china',
      'before-balance-payment-qc-china',
      'compare-china-supplier-samples',
    ],
    ctaMessage: `Hi Agent Huang,

I need FBA prep in China before shipment.

Product:
SKUs:
Cartons / units:
Factory location:
FBA prep concern:
`,
  },
  'compare-china-supplier-samples': {
    slug: 'compare-china-supplier-samples',
    stage: 'Before Supplier Selection',
    seoKeyword: 'sample consolidation China',
    title: 'Compare China Supplier Samples',
    metaTitle: 'Sample Consolidation China | Compare China Supplier Samples',
    metaDescription:
      'Use sample consolidation in China to receive, photograph, compare, and forward samples from multiple suppliers before choosing a factory.',
    eyebrow: 'Before supplier selection',
    h1: 'Compare China supplier samples before choosing a factory.',
    imageAlt:
      'Sample consolidation China comparing China supplier samples before supplier selection',
    imageSrc: '/images/service-sample-consolidation.webp',
    intro:
      'Use this page when several Chinese suppliers are sending samples and you need one China-side hub to receive, photograph, organize, compare, and forward them together. Sample consolidation helps buyers see obvious differences before committing to a supplier or paying repeated international freight.',
    primaryService: 'Sample Consolidation China',
    primaryServiceHref: '/sample-consolidation-china',
    primaryCtaLabel: 'Compare supplier samples',
    riskSummary:
      'Supplier selection is easier when samples are compared side by side, not judged through scattered supplier photos or separate international parcels. The goal is to reduce freight waste and identify obvious sample issues before a larger order.',
    buyerQuestions: [
      'Which supplier sample looks closest to the product I actually want?',
      'Are there obvious quality, finish, packaging, or size differences?',
      'Should all samples be shipped overseas, or should some be rejected first?',
      'Which supplier deserves verification, negotiation, or a trial order?',
    ],
    riskSignals: [
      'Several suppliers are sending samples from different cities at different times',
      'International freight cost is multiplying because each supplier ships separately',
      'Supplier photos are not enough to compare finish, packaging, or visible quality',
      'The buyer needs sample evidence before choosing one supplier for production',
    ],
    checks: [
      'Inbound sample receipt by supplier and item',
      'Unboxing photos or video evidence',
      'Basic side-by-side notes on visible differences when scoped',
      'Supplier origin tracking so samples are not mixed or mislabeled',
      'Consolidated outbound shipment after buyer confirmation',
    ],
    servicePath: [
      {
        title: 'Sample Consolidation China',
        href: '/sample-consolidation-china',
        note: 'Use when you want samples from multiple suppliers received, organized, compared, and forwarded together.',
      },
      {
        title: 'Supplier Verification China',
        href: '/supplier-verification-china',
        note: 'Use after samples narrow the shortlist and you need supplier identity checks before deposit.',
      },
      {
        title: 'QC Inspection China',
        href: '/qc-inspection-china',
        note: 'Use later when the chosen supplier produces bulk goods and you need production evidence before payment.',
      },
    ],
    whatToSend: [
      'Supplier names, tracking numbers, and sample descriptions',
      'What you want compared across samples',
      'Destination country and preferred outbound shipping method',
      'Expected arrival timeline and any special handling requirements',
    ],
    decisionOutcomes: [
      'Choose the strongest supplier sample for deeper review',
      'Reject weak samples before paying international freight',
      'Ask suppliers clearer questions based on side-by-side evidence',
      'Move shortlisted suppliers to verification, negotiation, or trial order',
    ],
    scopeLimits: [
      'We do not replace bulk production QC with sample review',
      'We do not promise mass production will match samples unless later QC is scoped',
      'We do not perform lab testing or technical certification unless separately arranged',
      'We do not hide supplier origin or make supplier-paid recommendations',
    ],
    faqs: [
      {
        question: 'Can samples from several suppliers be sent to one China address?',
        answer:
          'Yes. Suppliers can send samples to a China-side consolidation point so receipt, photos, comparison, and outbound shipping can be managed together.',
      },
      {
        question: 'Can you compare samples before forwarding them?',
        answer:
          'Yes. Basic side-by-side notes and photos can be included when the comparison points are clear. Technical testing is a separate scope.',
      },
      {
        question: 'Does sample consolidation replace supplier verification?',
        answer:
          'No. Sample consolidation helps compare product samples. Supplier verification checks company and payment risk before deposit.',
      },
      {
        question: 'Can you hold samples until all suppliers send theirs?',
        answer:
          'Usually yes. Share the supplier count, expected timeline, and outbound plan so storage and consolidation can be scoped properly.',
      },
    ],
    relatedStages: [
      'before-deposit-china-supplier-check',
      'before-balance-payment-qc-china',
      'before-amazon-fba-shipment-china',
    ],
    ctaMessage: `Hi Agent Huang,

I need sample consolidation in China before choosing a supplier.

Product:
Number of suppliers:
Sample tracking / locations:
What to compare:
Destination country:
`,
  },
}

export const sourcingStageSlugs = Object.keys(
  sourcingStagePages,
) as SourcingStageSlug[]

export function getSourcingStagePage(slug: SourcingStageSlug) {
  return sourcingStagePages[slug]
}

export function makeSourcingStageMetadata(page: SourcingStagePage): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/${page.slug}`,
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
      description: page.metaDescription,
      images: ['/og-image.png'],
    },
  }
}

export function makeSourcingStageJsonLd(page: SourcingStagePage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.metaTitle,
    description: page.metaDescription,
    url: getAbsoluteUrl(`/${page.slug}`),
    inLanguage: 'en',
    keywords: page.seoKeyword,
    publisher: {
      '@type': 'Organization',
      name: 'Huang Sourcing',
      url: getAbsoluteUrl('/'),
      email: businessEmail,
    },
    about: {
      '@type': 'Service',
      name: page.primaryService,
      serviceType: page.primaryService,
      provider: {
        '@type': 'Organization',
        name: 'Huang Sourcing',
      },
      areaServed: 'China',
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  }
}
