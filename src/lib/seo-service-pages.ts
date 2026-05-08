import type { Metadata } from 'next'

import { getAbsoluteUrl } from '@/lib/site-url'

export type SeoServiceSlug =
  | 'supplier-verification-china'
  | 'qc-inspection-china'
  | 'china-pre-shipment-inspection'
  | 'amazon-fba-prep-china'
  | 'sample-consolidation-china'

type FaqItem = {
  question: string
  answer: string
}

type CaseStudy = {
  title: string
  situation: string
  action: string
  outcome: string
}

export type SeoServicePage = {
  slug: SeoServiceSlug
  title: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  intro: string
  startingPrice: string
  pricingNote: string
  priceValue?: string
  priceCurrency?: string
  bestFor: string[]
  whenToUse: string[]
  checks: string[]
  processSteps: string[]
  decisionSupport: string[]
  commonRisks: string[]
  whatToSend: string[]
  deliverables: string[]
  scopeNote: string
  caseStudy: CaseStudy
  faqs: FaqItem[]
  ctaLabel: string
  ctaMessage: string
}

export const seoServicePages: Record<SeoServiceSlug, SeoServicePage> = {
  'supplier-verification-china': {
    slug: 'supplier-verification-china',
    title: 'Supplier Verification China',
    metaTitle: 'Supplier Verification China | Buyer-Side Factory Checks',
    metaDescription:
      'Verify a Chinese supplier before deposit payment with buyer-side company checks, factory signals, quote review, risk notes, and practical next steps.',
    eyebrow: 'Supplier verification in China',
    h1: 'Supplier verification in China before you send a deposit.',
    intro:
      'Use this page when you have a supplier name, quote, Alibaba link, company profile, or factory contact, but you need a buyer-side review before deposit payment. The goal is to separate credible supplier signals from unclear claims before you commit money or production time.',
    startingPrice: 'From $249',
    pricingNote:
      'The $249 starting scope covers a focused supplier verification review for one supplier. Onsite visits, multi-supplier comparisons, deeper document review, or urgent travel are quoted separately before work starts.',
    priceValue: '249',
    priceCurrency: 'USD',
    bestFor: [
      'Overseas buyers checking a new Chinese supplier before deposit payment',
      'Amazon, ecommerce, and private-label sellers before a first production order',
      'Importers comparing factory claims, company names, quotes, and payment terms',
      'Small teams without a trusted China-side sourcing or audit contact',
    ],
    whenToUse: [
      'Before paying a 30% deposit',
      'Before choosing between two or more similar suppliers',
      'When the supplier profile, address, quote, or business license feels unclear',
      'When a supplier found through a marketplace gives limited background information',
    ],
    checks: [
      'Factory vs trading company signals',
      'Company background and visible business details',
      'Supplier quote, MOQ, lead time, and payment terms',
      'Risk flags that should be clarified before payment',
      'Basic consistency between supplier identity, address, products, and stated capabilities',
    ],
    processSteps: [
      'Send the supplier link, quote, company name, and product context',
      'Review visible supplier identity, factory signals, quote terms, and risk indicators',
      'Summarize what looks consistent, what looks unclear, and what should be challenged',
      'Decide whether to proceed, ask for more proof, request onsite verification, or stop',
    ],
    decisionSupport: [
      'Whether the supplier is credible enough for a first deposit discussion',
      'Which questions to ask before signing a PI or wiring money',
      'Whether an onsite factory visit or QC inspection should be added before the next step',
      'Whether the quote risk is supplier quality, payment terms, factory identity, or unclear capacity',
    ],
    commonRisks: [
      'Supplier name, address, or business details do not line up',
      'A trading company presents itself as the actual factory',
      'Quote terms look attractive but leave unclear payment or delivery risk',
      'The buyer is pressured to send a deposit before basic checks are complete',
    ],
    whatToSend: [
      'Supplier website, Alibaba link, or company name',
      'Quote, payment terms, MOQ, and lead time',
      'Product photos, specifications, and target order quantity',
      'Any warning signs or questions you already noticed',
    ],
    deliverables: [
      'Supplier verification summary',
      'Factory or trader risk notes',
      'Quote and payment-term review',
      'Go, caution, or stop recommendation',
    ],
    scopeNote:
      'Supplier verification is best used as an early decision filter. It helps you decide whether to continue, ask harder questions, or slow down before deposit payment. It does not replace legal due diligence, certification review, or a full factory audit when those are required.',
    caseStudy: {
      title: 'Case example: supplier looked strong, but the company details did not match',
      situation:
        'A buyer had a competitive quote and wanted to pay a deposit quickly.',
      action:
        'The supplier details, address signals, quote terms, and business identity were reviewed before payment.',
      outcome:
        'The buyer slowed down, asked for clarification, and avoided wiring money before the supplier risk was clear.',
    },
    faqs: [
      {
        question: 'Is supplier verification the same as a factory audit?',
        answer:
          'No. Supplier verification is a practical buyer-side risk check. A full factory audit is deeper and may require a separate onsite scope.',
      },
      {
        question: 'Can you verify Alibaba suppliers?',
        answer:
          'Yes. Send the supplier link, company name, quote, product details, and order stage so the visible risk can be reviewed.',
      },
      {
        question: 'When should I book supplier verification?',
        answer:
          'Book it before deposit payment, before final supplier selection, or whenever the supplier details do not feel clear enough.',
      },
      {
        question: 'Can you compare more than one supplier?',
        answer:
          'Yes. Send all supplier links, quotes, and product requirements. Multi-supplier comparison may need a custom scope if the review is deeper than one focused supplier check.',
      },
      {
        question: 'Will this tell me if the supplier is safe to pay?',
        answer:
          'It gives a practical buyer-side risk view, not a legal guarantee. The purpose is to make visible supplier risks clear enough for a better payment decision.',
      },
    ],
    ctaLabel: 'Verify a supplier on WhatsApp',
    ctaMessage: `Hi Agent Huang,

I need supplier verification in China.

Supplier link / company name:
Product:
Order value:
Current stage:
Main concern:
`,
  },
  'qc-inspection-china': {
    slug: 'qc-inspection-china',
    title: 'QC Inspection China',
    metaTitle: 'QC Inspection China | Product & Packaging Checks',
    metaDescription:
      'Book buyer-side QC inspection in China for product appearance, quantity, packaging, labels, carton marks, defects, and photo evidence before shipment.',
    eyebrow: 'QC inspection in China',
    h1: 'QC inspection in China before products leave the factory.',
    intro:
      'Use this page when production is ready or nearly ready and you need buyer-side QC evidence before final payment, pickup, or shipment. The inspection focuses on visible product condition, quantity, packaging, labels, and shipment readiness so you can push corrections before goods leave China.',
    startingPrice: 'From $299 / inspector day',
    pricingNote:
      'The $299 starting price is for one standard inspector day in China. Complex products, multiple factories, travel-heavy locations, re-inspection, or special testing are scoped and quoted before confirmation.',
    priceValue: '299',
    priceCurrency: 'USD',
    bestFor: [
      'Importers who need product and packaging evidence before final payment',
      'Amazon, Walmart, or private-label sellers checking bulk goods',
      'Buyers whose margin or reviews would be hurt by avoidable defects',
      'Teams that need photo evidence to discuss rework with a supplier',
    ],
    whenToUse: [
      'Before paying the balance',
      'Before goods are collected by a forwarder',
      'When the supplier says production is finished but you need proof',
      'When product defects, packaging mistakes, or label errors would create costly returns',
    ],
    checks: [
      'Quantity and carton count against order details',
      'Product appearance, simple function, and visible defects',
      'Packaging, labels, barcodes, carton marks, and basic shipment readiness',
      'Photo evidence for issues that need supplier rework or confirmation',
      'AQL-style sampling logic when the product and order scope support it',
    ],
    processSteps: [
      'Confirm product details, factory location, inspection date, and critical checkpoints',
      'Check sampled goods, packaging, labels, carton marks, and visible defects onsite',
      'Escalate urgent findings with photos so the supplier can respond before release',
      'Use the findings to approve shipment, request rework, or schedule re-inspection',
    ],
    decisionSupport: [
      'Whether final payment should be released now or held until issues are corrected',
      'Whether the shipment can be picked up by the forwarder',
      'Which defects or packaging issues need written supplier confirmation',
      'Whether the buyer needs rework, replacement, sorting, or a second inspection',
    ],
    commonRisks: [
      'Bulk goods do not match approved samples or order expectations',
      'Carton labels, barcodes, or packaging are wrong before pickup',
      'Visible defects are discovered only after international freight is paid',
      'The supplier asks for final payment before the buyer has evidence',
    ],
    whatToSend: [
      'Purchase order, product photos, and approved sample notes',
      'Packing list, carton label requirements, and barcode files',
      'Factory address, contact person, and target inspection date',
      'Critical defects or product details that must be checked',
    ],
    deliverables: [
      'QC inspection findings',
      'Photo evidence of checked goods',
      'Defect and packaging notes',
      'Same-day issue escalation when urgent',
    ],
    scopeNote:
      'QC inspection is a practical onsite check before payment or pickup. It can surface visible product, packaging, label, and quantity issues, but it should be paired with lab testing or compliance review when your product requires certification or regulated testing.',
    caseStudy: {
      title: 'Case example: wrong carton labels caught before pickup',
      situation:
        'A buyer was ready to release the balance after the supplier said the order was packed.',
      action:
        'Cartons, labels, and packaging evidence were checked before the shipment handoff.',
      outcome:
        'A label issue was found early, giving the buyer time to ask the supplier for correction before pickup.',
    },
    faqs: [
      {
        question: 'What does a QC inspection in China include?',
        answer:
          'It can include quantity, visible product condition, packaging, labels, carton marks, and photo evidence based on the order scope.',
      },
      {
        question: 'Is this a lab test?',
        answer:
          'No. This is practical onsite QC inspection. Laboratory testing, certification, and legal compliance checks are separate scopes.',
      },
      {
        question: 'How much does QC inspection cost?',
        answer:
          'Standard QC inspection starts from $299 per inspector day. Travel, special tests, or complex scopes may be quoted separately.',
      },
      {
        question: 'Can you inspect packaging and labels as well as the product?',
        answer:
          'Yes. Packaging, barcode, carton label, shipping mark, and basic readiness checks can be included when you provide the requirements before inspection.',
      },
      {
        question: 'Do I need to be in China for the inspection?',
        answer:
          'No. You can send the order details, product requirements, factory contact, and inspection priorities remotely. Findings are shared with photo evidence.',
      },
    ],
    ctaLabel: 'Book QC inspection on WhatsApp',
    ctaMessage: `Hi Agent Huang,

I need QC inspection in China.

Product:
Factory location:
Order quantity:
Inspection date:
Main checks needed:
`,
  },
  'china-pre-shipment-inspection': {
    slug: 'china-pre-shipment-inspection',
    title: 'China Pre-Shipment Inspection',
    metaTitle: 'China Pre-Shipment Inspection Before Final Payment',
    metaDescription:
      'Arrange pre-shipment inspection in China before final payment or pickup, with buyer-side checks for goods, packaging, labels, cartons, and shipment readiness.',
    eyebrow: 'Pre-shipment inspection in China',
    h1: 'China pre-shipment inspection before final payment or pickup.',
    intro:
      'Use this page when goods are packed or close to completion and you need a final buyer-side check before the shipment leaves China. A pre-shipment inspection helps confirm whether the order is ready for final payment, forwarder pickup, or supplier correction.',
    startingPrice: 'From $299 / inspector day',
    pricingNote:
      'Pre-shipment inspection starts from $299 per inspector day. Scope can change with factory location, SKU count, carton volume, urgency, and whether a follow-up inspection is needed.',
    priceValue: '299',
    priceCurrency: 'USD',
    bestFor: [
      'Buyers about to pay the final balance',
      'Importers shipping from a new factory',
      'Ecommerce sellers who need carton, label, and packaging confirmation',
      'Orders where pickup timing is tight and shipment readiness needs proof',
    ],
    whenToUse: [
      'When production is 80-100% complete',
      'Before the supplier releases goods to a forwarder',
      'Before approving a shipment that has tight timing or high defect risk',
      'Before final payment when the buyer has not seen packed-goods evidence',
    ],
    checks: [
      'Finished goods and visible workmanship',
      'Carton count, packing condition, labels, and shipping marks',
      'Order details against supplier-provided packing information',
      'Issues that should be fixed before pickup or final payment',
      'Photos of packed cartons and visible shipment-readiness indicators',
    ],
    processSteps: [
      'Confirm the final payment deadline, pickup plan, packing list, and inspection priorities',
      'Check finished goods, cartons, packaging, labels, marks, and visible readiness onsite',
      'Report blockers that should be corrected before final payment or forwarder pickup',
      'Use the report to approve release, request correction, or delay collection',
    ],
    decisionSupport: [
      'Whether the shipment is ready enough for pickup',
      'Whether final payment should be released or delayed',
      'Whether carton, label, packing, or quantity issues need supplier action',
      'Whether the buyer should approve, hold, or re-check the shipment',
    ],
    commonRisks: [
      'The supplier says goods are ready, but cartons or quantities are incomplete',
      'Final packaging details are different from buyer instructions',
      'Issues are found after the forwarder already collects the shipment',
      'Final payment is released before shipment readiness is documented',
    ],
    whatToSend: [
      'Final invoice, packing list, and order quantity',
      'Product photos, approved sample notes, and packaging requirements',
      'Pickup date, forwarder details, and factory contact information',
      'Any final-payment conditions that must be verified',
    ],
    deliverables: [
      'Pre-shipment inspection summary',
      'Photos of goods, cartons, labels, and findings',
      'Issue list for supplier correction',
      'Buyer-side recommendation before release',
    ],
    scopeNote:
      'Pre-shipment inspection should happen when goods are mostly finished and available to check. It supports the final release decision before payment or pickup, but it cannot guarantee hidden defects, future transit damage, or compliance issues outside the agreed scope.',
    caseStudy: {
      title: 'Case example: shipment was not as ready as claimed',
      situation:
        'A supplier said the goods were ready for pickup and asked the buyer to release final payment.',
      action:
        'A pre-shipment check reviewed carton readiness, quantity signals, and packaging details.',
      outcome:
        'The buyer delayed pickup until missing or unclear details were corrected, reducing shipment risk.',
    },
    faqs: [
      {
        question: 'When should pre-shipment inspection happen?',
        answer:
          'It usually happens when most or all goods are finished and packed, but before final payment or forwarder pickup.',
      },
      {
        question: 'Is pre-shipment inspection different from QC inspection?',
        answer:
          'They overlap. Pre-shipment inspection focuses on the final release decision before goods leave the supplier.',
      },
      {
        question: 'Can you check Amazon FBA labels during pre-shipment inspection?',
        answer:
          'Yes, label and carton checks can be included when you provide the required label and shipment details.',
      },
      {
        question: 'Can inspection happen after goods are already with the forwarder?',
        answer:
          'It is better to inspect before pickup while goods are still with the supplier. After pickup, access and correction options are usually more limited.',
      },
      {
        question: 'What if the order fails the pre-shipment inspection?',
        answer:
          'The findings can be used to request rework, replacement, sorting, or a follow-up inspection before final release.',
      },
    ],
    ctaLabel: 'Book pre-shipment inspection',
    ctaMessage: `Hi Agent Huang,

I need a China pre-shipment inspection.

Product:
Factory location:
Shipment / pickup date:
Order quantity:
Main risk:
`,
  },
  'amazon-fba-prep-china': {
    slug: 'amazon-fba-prep-china',
    title: 'Amazon FBA Prep China',
    metaTitle: 'Amazon FBA Prep China | Labels, Cartons & Shipment Prep',
    metaDescription:
      'Coordinate Amazon FBA prep in China with carton checks, labels, packaging details, SKU organization, shipment handoff, and buyer-side photo evidence.',
    eyebrow: 'Amazon FBA prep in China',
    h1: 'Amazon FBA prep in China before goods ship to fulfillment.',
    intro:
      'Use this page when your supplier has produced the goods, but you need China-side help checking FNSKU labels, carton labels, SKU organization, packaging details, and forwarder handoff before the shipment goes to Amazon fulfillment.',
    startingPrice: 'Custom quote',
    pricingNote:
      'Amazon FBA prep is quoted by SKU count, carton count, label requirements, packaging work, supplier location, and logistics coordination. Send the shipment plan and prep requirements for a clear quote.',
    bestFor: [
      'Amazon sellers preparing shipments from China',
      'Private-label brands with carton, SKU, insert, or label requirements',
      'Buyers who need China-side coordination before freight pickup',
      'Sellers managing multiple SKUs, suppliers, or shipment plans from outside China',
    ],
    whenToUse: [
      'Before cartons are sealed or handed to the forwarder',
      'When FNSKU, carton labels, or packaging requirements need confirmation',
      'When multiple SKUs or suppliers need coordination before shipment',
      'When seller central requirements must be checked before international freight',
    ],
    checks: [
      'FNSKU, carton labels, and basic label placement',
      'Carton condition, SKU organization, and packing details',
      'Supplier readiness for forwarder pickup',
      'Photos that help the buyer confirm prep before release',
      'Basic match between provided shipment plan details and visible carton/SKU evidence',
    ],
    processSteps: [
      'Send FNSKU files, carton labels, SKU list, shipment plan, and supplier details',
      'Confirm the prep scope: label checks, carton checks, inserts, packing, or handoff support',
      'Check visible label placement, carton organization, SKU separation, and pickup readiness',
      'Use photo evidence to approve forwarder pickup or request supplier correction',
    ],
    decisionSupport: [
      'Whether cartons are ready for pickup under the provided FBA prep requirements',
      'Whether SKU or carton labels need correction before shipping',
      'Whether the supplier and forwarder handoff has enough visible evidence',
      'Whether a custom prep or rework step is needed before export',
    ],
    commonRisks: [
      'FNSKU or carton labels are missing, misplaced, or mixed between SKUs',
      'Packaging details do not match the seller central shipment plan',
      'Multiple SKUs are packed in a way that creates receiving problems',
      'Goods are handed to the forwarder before label evidence is checked',
    ],
    whatToSend: [
      'FNSKU files, carton labels, and shipment plan requirements',
      'SKU list, unit count, carton count, and product photos',
      'Factory address, forwarder contact, and pickup window',
      'Any inserts, suffocation labels, polybag, or bundle requirements',
    ],
    deliverables: [
      'FBA prep coordination scope',
      'Label and carton photo evidence',
      'Packaging and SKU notes',
      'Pickup or logistics handoff support when included',
    ],
    scopeNote:
      'Amazon FBA prep support is scoped around China-side coordination and evidence before shipment. Marketplace compliance, listing approval, product safety testing, and final Amazon receiving decisions remain separate from this operational prep work.',
    caseStudy: {
      title: 'Case example: label confirmation before FBA pickup',
      situation:
        'An Amazon seller needed confirmation that carton labels and SKU organization matched the shipment plan.',
      action:
        'Labels, carton marks, packaging details, and pickup readiness were checked on the China side.',
      outcome:
        'The buyer had evidence before the forwarder collected the goods and could correct issues before shipment.',
    },
    faqs: [
      {
        question: 'Do you provide Amazon FBA prep in China?',
        answer:
          'Yes. The scope can include label checks, carton checks, SKU organization, packaging details, and shipment handoff coordination.',
      },
      {
        question: 'Is FBA prep pricing fixed?',
        answer:
          'FBA prep is quoted by scope, volume, SKU count, label needs, and logistics coordination requirements.',
      },
      {
        question: 'Can you work with my freight forwarder?',
        answer:
          'Yes. Provide the forwarder details, pickup window, shipment plan, and label requirements so the handoff can be scoped.',
      },
      {
        question: 'Can you apply labels or only check them?',
        answer:
          'Both may be possible depending on the location, volume, and scope. Send the SKU count, carton count, label files, and prep requirements for a quote.',
      },
      {
        question: 'Do you guarantee Amazon receiving approval?',
        answer:
          'No. The service helps reduce visible China-side prep errors, but Amazon receiving, marketplace compliance, and listing approval remain separate from onsite prep support.',
      },
    ],
    ctaLabel: 'Ask for FBA prep quote',
    ctaMessage: `Hi Agent Huang,

I need Amazon FBA prep support in China.

Product:
SKUs:
Cartons / units:
Factory location:
Label or prep requirements:
`,
  },
  'sample-consolidation-china': {
    slug: 'sample-consolidation-china',
    title: 'Sample Consolidation China',
    metaTitle: 'Sample Consolidation China | Compare Supplier Samples',
    metaDescription:
      'Consolidate supplier samples in China before international shipping, with unboxing photos, side-by-side notes, sample checks, and outbound shipment support.',
    eyebrow: 'Sample consolidation in China',
    h1: 'Sample consolidation in China before you choose a supplier.',
    intro:
      'Use this page when several Chinese suppliers are sending samples and you want one China-side hub to receive, photograph, compare, and forward them together. Sample consolidation helps reduce freight waste and gives you early visibility before choosing a supplier.',
    startingPrice: 'From $99 + freight',
    pricingNote:
      'Sample consolidation starts from $99 plus freight. Larger batches, multiple rounds, detailed comparison notes, special handling, or repacking needs are quoted before work begins.',
    priceValue: '99',
    priceCurrency: 'USD',
    bestFor: [
      'Buyers comparing samples from two or more suppliers',
      'Amazon and ecommerce sellers trying to reduce sample freight cost',
      'Importers who want photos or notes before samples ship overseas',
      'Product teams that need a simple China-side comparison before shortlisting factories',
    ],
    whenToUse: [
      'Before choosing the final supplier',
      'When sample freight from each factory is too expensive',
      'When you want obvious quality issues caught before international shipping',
      'When several suppliers are sending samples at different times or from different cities',
    ],
    checks: [
      'Inbound sample receipt and basic condition',
      'Unboxing photos or video evidence',
      'Side-by-side sample notes when multiple suppliers are compared',
      'Outbound consolidation for international shipment',
      'Basic organization by supplier so samples are not mixed or mislabeled',
    ],
    processSteps: [
      'Send supplier names, tracking numbers, sample descriptions, and comparison priorities',
      'Receive samples in China and confirm arrival by supplier and item',
      'Capture unboxing photos or video and note obvious differences or concerns',
      'Consolidate the samples for outbound shipment after buyer confirmation',
    ],
    decisionSupport: [
      'Which supplier samples deserve deeper review or follow-up questions',
      'Whether any sample should be rejected before paying international freight',
      'Whether samples match the expected product, packaging, or finish',
      'Whether a supplier should move to quote negotiation, verification, or bulk-order QC',
    ],
    commonRisks: [
      'Sample freight costs multiply when each supplier ships separately',
      'Bad samples are sent overseas before obvious issues are noticed',
      'The buyer cannot compare supplier samples side by side',
      'Sample labels or supplier origins become unclear during review',
    ],
    whatToSend: [
      'Supplier names, tracking numbers, and sample descriptions',
      'What you want compared across samples',
      'Destination country and preferred outbound shipping method',
      'Photos or specs of the sample version you expected',
    ],
    deliverables: [
      'Sample receipt confirmation',
      'Unboxing photos or video',
      'Basic comparison notes',
      'Consolidated outbound shipment support',
    ],
    scopeNote:
      'Sample consolidation helps you compare early supplier options and reduce unnecessary freight. It is not a substitute for bulk production QC, since sample quality can differ from mass production unless the order is checked again before shipment.',
    caseStudy: {
      title: 'Case example: four samples compared before supplier selection',
      situation:
        'A buyer had four similar suppliers and wanted to compare samples without paying separate international freight each time.',
      action:
        'Samples were received in China, photographed, compared side by side, and prepared for consolidated shipment.',
      outcome:
        'The buyer narrowed the supplier list before placing a larger order and avoided extra freight waste.',
    },
    faqs: [
      {
        question: 'Can samples from different suppliers be sent to one address in China?',
        answer:
          'Yes. Suppliers can send samples to the China-side consolidation point, then the samples can be reviewed and forwarded together.',
      },
      {
        question: 'Does sample consolidation include quality inspection?',
        answer:
          'It includes basic review, photos, and comparison notes. Full technical testing or detailed QC requires a separate scope.',
      },
      {
        question: 'How much does sample consolidation cost?',
        answer:
          'Sample consolidation starts from $99 plus freight. Larger batches, special handling, or detailed checks may be quoted separately.',
      },
      {
        question: 'Can you compare samples before shipping them to me?',
        answer:
          'Yes. Basic side-by-side notes and photos can be included. More detailed product testing or technical evaluation should be scoped separately.',
      },
      {
        question: 'Can you hold samples while more suppliers send theirs?',
        answer:
          'Usually yes. Share the expected arrival timeline, number of suppliers, and outbound shipping plan so storage and consolidation can be scoped properly.',
      },
    ],
    ctaLabel: 'Start sample consolidation',
    ctaMessage: `Hi Agent Huang,

I need sample consolidation in China.

Product:
Number of suppliers:
Sample locations:
What to compare:
Destination country:
`,
  },
}

export const seoServiceSlugs = Object.keys(seoServicePages) as SeoServiceSlug[]

export function getSeoServicePage(slug: SeoServiceSlug) {
  return seoServicePages[slug]
}

export function makeSeoServiceMetadata(page: SeoServicePage): Metadata {
  const canonicalPath = `/${page.slug}`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonicalPath,
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

export function makeSeoServiceJsonLd(page: SeoServicePage) {
  const pageUrl = getAbsoluteUrl(`/${page.slug}`)
  const offers = page.priceValue
    ? {
        '@type': 'Offer',
        price: page.priceValue,
        priceCurrency: page.priceCurrency ?? 'USD',
        url: pageUrl,
      }
    : {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          description: 'Custom quote',
        },
        url: pageUrl,
      }

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.title,
      description: page.metaDescription,
      serviceType: page.title,
      inLanguage: 'en',
      provider: {
        '@type': 'Organization',
        name: 'Huang Sourcing',
        url: getAbsoluteUrl('/'),
      },
      areaServed: {
        '@type': 'Country',
        name: 'China',
      },
      offers,
      url: pageUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: getAbsoluteUrl('/'),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: page.title,
          item: pageUrl,
        },
      ],
    },
  ]
}
