import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  chinaFactoryProductionDelaysArticleHref,
  chinaFactorySubcontractingRiskArticleHref,
  chinaQcInspectionFailsArticleHref,
  goldenSampleChinaManufacturingArticleHref,
  preShipmentBeforePickupArticleHref,
  productionVsPreShipmentInspectionArticleHref,
  supplierVerificationVsFactoryAuditArticleHref,
} from '@/lib/site-links'

type ArticleSection = {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
}

type DecisionRow = {
  riskNode: string
  whatWasChecked: string
  buyerDecision: string
}

type ExceptionRow = {
  milestone: string
  supplierEvidence: string
  scopedCheck: string
  buyerDecision: string
  handoff: string
}

type FaqItem = {
  question: string
  answer: string
}

type RelatedLink = {
  href: string
  label: string
  note: string
}

type SourceNote = {
  href: string
  label: string
  note: string
}

export const chinaFactoryProductionDelaysArticle = {
  href: chinaFactoryProductionDelaysArticleHref,
  title: 'China Factory Production Delays: Timeline Management for Importers',
  metaTitle: 'China Factory Production Delays Guide',
  metaDescription:
    'Use a missed-milestone record to verify factory progress, assign recovery owners, protect QC and pickup, and decide what a buyer should approve or escalate.',
  publishedDate: 'June 19, 2026',
  publishedDateIso: '2026-06-19T14:00:00-04:00',
  modifiedDate: 'October 20, 2026',
  modifiedDateIso: '2026-10-20T03:24:25+08:00',
  h1: 'China Factory Production Delays: Timeline Management for Importers',
  eyebrow: 'Missed milestones · buyer decisions · shipment handoffs',
  image: {
    alt: 'Illustrative production timeline and milestone review inside a China factory',
    height: 900,
    src: '/images/china-factory-production-delays-timeline-management.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/china-factory-production-delays-timeline-management.webp', width: 1600 },
    { height: 1200, src: '/images/china-factory-production-delays-timeline-management-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/china-factory-production-delays-timeline-management-1x1.webp', width: 1200 },
  ],
  intro:
    'When a China order misses a production milestone, the buyer needs to know which quantity and version are affected, what the factory can prove, and which decision must change before payment or pickup. A revised finish date alone does not answer whether materials, production, inspection, and shipping can still meet the business deadline.',
  answerSummary:
    'Keep one missed-milestone record with the original and revised dates, supplier owner, affected SKU and quantity, evidence received, evidence still unverified, buyer decision owner, and next QC or forwarder handoff. Use it to decide whether to accept a revised plan, inspect a separate finished lot, escalate a missing proof point, or seek specialist advice before changing contractual terms.',
  primaryCta: {
    label: 'Scope a QC or Shipment Check',
  },
  secondaryCta: {
    href: '#exception-handoff',
    label: 'See Delay Decisions',
  },
  whatsappMessage: `Hi Agent Huang,

I need help scoping a QC or pre-shipment check for a delayed China order.

Supplier and factory:
Product and quantity:
PO date:
Original completion date:
Current production status:
Required ship date:
Deposit / balance status:
Main delay concern:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick checks' },
    { href: '#common-causes', label: 'Common causes' },
    { href: '#realistic-lead-times', label: 'Realistic lead times' },
    { href: '#delay-communication', label: 'Delay communication' },
    { href: '#exception-handoff', label: 'Missed-milestone record' },
    { href: '#decision-table', label: 'Decision framework' },
    { href: '#chronic-delay-risk', label: 'Chronic delay red flags' },
    { href: '#timeline-buffers', label: 'Timeline buffers' },
    { href: '#documents', label: 'What to send' },
    { href: '#sources', label: 'Sources and limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Record the promised ex-factory date, required ship date, and latest acceptable arrival date separately',
    'Break the lead time into material, tooling, pilot run, bulk production, packing, inspection, and pickup milestones',
    'Confirm whether lead time starts at deposit, final artwork, sample approval, or material approval',
    'Request dated evidence for material arrival, line start, completed quantity, packing progress, and rework',
    'Check factory holidays, worker-return periods, and supplier shutdown dates before placing the order',
    'Keep final inspection, correction, re-inspection, and forwarder booking outside the factory production promise',
    'Agree on a risk-based escalation deadline before a missed milestone threatens inspection, payment, or pickup',
    'Know the commercial trigger for accepting delay, splitting shipment, switching factories, or cancelling',
  ],
  sections: [
    {
      id: 'common-causes',
      title: 'Common causes of China factory production delays',
      paragraphs: [
        'A supplier may describe every delay as an unexpected factory issue, but the recovery decision depends on the actual constraint. Ask what stopped, which quantity is affected, when the constraint began, and what evidence shows the revised date is achievable.',
        'The same late completion date can come from very different risks. Material shortages may need a substitute approval, capacity problems may need a reserved line, QC failures may need sorting or rework, and holiday disruption may leave no practical recovery until workers return.',
      ],
      bullets: [
        'Raw material: late purchase orders, minimum-order constraints, failed incoming material, color mismatch, component shortage, or sub-supplier delay',
        'Capacity: overbooking, priority given to a larger buyer, unavailable tooling, labor shortage, machine breakdown, or production moved to another workshop',
        'Quality control: pilot-run failure, high defect rate, failed testing, rework, replacement production, packaging error, or inspection failure',
        'Holiday schedule: Chinese New Year shutdown, worker return after the holiday, National Day, local closures, or reduced sub-supplier capacity before and after holidays',
        'Buyer-side input: late deposit, changing specifications, slow sample approval, incomplete artwork, delayed packaging files, or unconfirmed shipping marks',
      ],
    },
    {
      id: 'realistic-lead-times',
      title: 'How to set realistic lead times with Chinese suppliers',
      paragraphs: [
        'Do not negotiate only one number called lead time. Define the start event, each production milestone, the factory completion event, and the activities that happen after completion. A 30-day production quote is not a 30-day delivered timeline if materials, approvals, inspection, rework, booking, consolidation, and export handling sit outside it.',
        'Ask the supplier to build the schedule backward from the required ex-factory date and name the longest dependency. Confirm the schedule again after the deposit and final approvals because the original capacity quote may no longer be available.',
      ],
      bullets: [
        'Use calendar dates rather than phrases such as 25 to 30 days after confirmation',
        'Define whether completion means assembled, packed, inspection-ready, or released for pickup',
        'Add approval deadlines for samples, materials, colors, labels, manuals, cartons, and shipping marks',
        'Ask for line-start date, daily output assumption, planned completion quantity, and packing duration',
        'Separate production lead time from inspection, correction, re-inspection, forwarder booking, and transit time',
      ],
    },
    {
      id: 'delay-communication',
      title: 'Communication protocol when a production milestone slips',
      paragraphs: [
        'When a delay appears, move the discussion from reassurance to a written exception record. Name the supplier owner of each recovery action and the buyer who can approve a change. Separate what the supplier reports from what documents or a scoped onsite check actually verify.',
        'Set an update cadence against the risk and next decision deadline. A near-term inspection or pickup may need more frequent reporting than early material procurement. Record decisions in email, the purchase order record, or another durable channel even if the discussion starts on WeChat or WhatsApp.',
      ],
      bullets: [
        'State the missed milestone, original date, verified current status, affected quantity, and root cause',
        'Require a recovery plan with action owner, completion date, capacity allocation, and quality controls',
        'Request timestamped photos, production counts, material receipts, line records, or onsite verification as appropriate',
        'Record buyer decisions on substitutions, overtime, split quantities, air freight, inspection, and revised delivery dates',
        'Escalate to factory management when evidence is missing, dates change repeatedly, or the sales contact cannot commit resources',
      ],
    },
    {
      id: 'chronic-delay-risk',
      title: 'Red flags indicating chronic delay risk',
      paragraphs: [
        'A one-time disruption can happen at a capable factory. Chronic risk appears when the supplier cannot plan capacity, disclose dependencies, or report progress consistently. Repeatedly optimistic dates without evidence are more important than a single late milestone.',
        'Track forecast accuracy across sample, material, pilot, production, packing, and inspection dates. If every milestone moves only when the buyer follows up, the factory is reporting history rather than managing a schedule.',
      ],
      bullets: [
        'The supplier agrees to every requested date before checking material or line capacity',
        'Production is always almost finished, but completed and packed quantities are never reported',
        'The cause changes between sales staff, factory management, QC staff, and the sub-supplier',
        'The factory refuses a video walkthrough, onsite progress check, or timestamped production evidence',
        'A new deposit or early balance payment is presented as the only way to recover time',
      ],
    },
    {
      id: 'timeline-buffers',
      title: 'How to build timeline buffers into a sourcing plan',
      paragraphs: [
        'A useful buffer is assigned to a known uncertainty instead of added as one hidden number at the end. Place time between material approval and line start, between production completion and inspection, and between inspection and vessel cutoff so one small slip does not consume the entire delivery window.',
        'Size the buffer according to product novelty, supplier history, tooling, seasonal demand, holiday exposure, compliance testing, and the cost of missing the market date. Protect the external launch date by managing an earlier internal need date, but still show suppliers the real milestone commitments they control.',
      ],
      bullets: [
        'Reserve time for sample or material approval before bulk production begins',
        'Include a rework and re-inspection window for quality-sensitive or new products',
        'Avoid first production during the final weeks before Chinese New Year when possible',
        'Hold logistics buffer for booking rollover, consolidation, export documents, and port disruption',
        'Create a decision deadline earlier than the cancellation or launch-failure date',
      ],
    },
  ] satisfies ArticleSection[],
  exceptionRows: [
    {
      milestone: 'Materials due; line start at risk',
      supplierEvidence:
        'Named purchasing or production owner reports the affected SKU, approved material revision, required and received quantity, receipt record, missing balance, and realistic arrival date.',
      scopedCheck:
        'If access is agreed, compare visible received materials and identifiers with buyer-approved files. A photo or receipt alone does not prove all required material is onsite.',
      buyerDecision:
        'The buyer names a deadline to accept the revised line start or asks the qualified product owner to review any proposed substitution. No one silently changes the approved specification.',
      handoff:
        'Factory issues a revised line-start and pilot date; buyer updates the inspection window and flags downstream freight risk.',
    },
    {
      milestone: 'Pilot or production output below plan',
      supplierEvidence:
        'Named production manager separates started, completed, accepted, and rework quantities by SKU and lot, with dated records and the process blocking the remaining output.',
      scopedCheck:
        'A scoped during-production QC visit can compare accessible work in progress with the approved sample and specification; it cannot certify the uninspected remainder.',
      buyerDecision:
        'Buyer decides whether to request correction, another pilot, or an updated capacity plan. Product or test changes go to the qualified owner before approval.',
      handoff:
        'Supplier sets the next evidence checkpoint and affected-lot list; QC revises its check timing before the factory continues or packs the lot.',
    },
    {
      milestone: 'Packing or final inspection booking slips',
      supplierEvidence:
        'Named packing lead reports finished and packed quantity by SKU, carton identifiers, open corrections, packing list revision, and when goods will be accessible.',
      scopedCheck:
        'A scoped pre-shipment inspection can check accessible finished goods, quantities, labels, cartons, and documented corrections against the buyer file.',
      buyerDecision:
        'Buyer decides whether to keep or move the inspection booking and whether the available lot supports a separate release decision. Payment follows the agreed contract terms and qualified advice if disputed.',
      handoff:
        'Inspection owner sends findings and correction status to the buyer; supplier and forwarder receive only the revised pickup forecast, not an assumed release.',
    },
    {
      milestone: 'Pickup requested before release evidence is complete',
      supplierEvidence:
        'Named logistics contact supplies the final packing list, carton count, pickup address, ready time, and proof that agreed corrections were completed.',
      scopedCheck:
        'Compare the released lot and carton evidence with the inspection findings and buyer-approved shipping file; unresolved items remain marked open.',
      buyerDecision:
        'Only the buyer or its designated release owner decides whether to authorize pickup, hold, re-check, or seek broker or legal advice for disputed obligations.',
      handoff:
        'Send the written release or hold decision, lot and carton IDs, and confirmed pickup instructions to the supplier and forwarder.',
    },
  ] satisfies ExceptionRow[],
  decisionRows: [
    {
      riskNode: 'Accept the delay',
      whatWasChecked:
        'Verified completion status, credible recovery date, remaining QC steps, sales impact, inventory cover, and unchanged product requirements',
      buyerDecision:
        'Accept a documented revised date when the delay cost is lower than intervention and the factory can show a credible completion path.',
    },
    {
      riskNode: 'Split the shipment',
      whatWasChecked:
        'Finished good quantity, batch consistency, inspection readiness, partial pickup cost, freight options, packaging completeness, and priority customer demand',
      buyerDecision:
        'Release an inspected priority quantity first and keep the balance under a separate dated production and inspection plan.',
    },
    {
      riskNode: 'Switch factories',
      whatWasChecked:
        'Transferable tooling and files, material ownership, alternate capacity, new sample approval, quality ramp risk, duplicate cost, and realistic restart timing',
      buyerDecision:
        'Move future or unfinished quantity only when the alternate factory has been verified and the restart is faster and safer than recovery at the current factory.',
    },
    {
      riskNode: 'Cancel the order',
      whatWasChecked:
        'Contract rights, deposit exposure, recoverable materials and tooling, evidence of non-performance, compliance or quality risk, and the last commercially useful delivery date',
      buyerDecision:
        'Ask qualified counsel to assess cancellation and deposit remedies under the signed agreement; separately compare recovery and replacement timelines.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Purchase order dates, supplier production schedules, approval records, material status, production counts, packing progress, and inspection readiness compared against the required ship date.',
    'Timestamped supplier evidence, onsite observations where scoped, QC findings, rework status, and forwarder cutoff information used to test revised completion claims.',
    'Inventory, launch, customer, freight, payment, tooling, and cancellation constraints used to frame the buyer decision rather than treating lateness as a schedule issue alone.',
    'This is an editorial decision worksheet adapted from public procurement guidance, not a report of a Huang Sourcing client project or a standing production-management service.',
  ],
  whatToSend: [
    'Purchase order, proforma invoice, order quantity, deposit date, and current payment status',
    'Original quotation, promised lead time, start-date definition, completion date, and required ship or arrival date',
    'Approved sample, specification, artwork, packaging files, and the date each approval was released',
    'Supplier schedule, milestone updates, delay messages, photos, videos, production counts, and claimed root cause',
    'Inspection plan, quality findings, rework evidence, forwarder booking, vessel cutoff, and pickup constraints',
    'Your decision deadline and acceptable options for delay, partial shipment, substitution, factory switch, or cancellation',
  ],
  redFlags: [
    'The supplier will not provide a milestone schedule or define when the quoted lead time starts',
    'Every revised completion date arrives without completed-quantity or material-status evidence',
    'The factory claims material shortage only after the planned production start date',
    'The supplier requests balance payment before proving production or correction progress',
    'Inspection is repeatedly postponed because goods are not ready on the confirmed booking date',
    'Production moves to an undisclosed sub-supplier or different site after the order begins',
    'The factory misses sample, material, pilot, bulk, and packing dates in the same order',
  ],
  scopeLimits: [
    'A missed-milestone record improves visibility and escalation but cannot guarantee that a factory will meet a revised date',
    'Remote photos, videos, and production counts may be incomplete and do not replace onsite verification when site-level evidence is required',
    'A split shipment reduces timing risk only for quantities that are complete, inspected, packed, and commercially useful',
    'Switching factories can create new tooling, sample, material, compliance, quality, and intellectual-property risks',
    'Cancellation, deposit recovery, damages, and contract enforcement require qualified legal advice for the governing agreement and jurisdiction',
    'Timeline guidance does not replace product testing, regulatory compliance, final inspection, freight planning, or inventory forecasting',
  ],
  relatedLinks: [
    {
      href: '/qc-inspection-china',
      label: 'Scope a China QC inspection',
      note: 'Use the offered onsite QC service when an agreed production-stage check can resolve a specific evidence gap.',
    },
    {
      href: chinaFactorySubcontractingRiskArticleHref,
      label: 'China factory subcontracting risk',
      note: 'Check whether an undisclosed site transfer or capacity subcontractor sits behind the delay.',
    },
    {
      href: productionVsPreShipmentInspectionArticleHref,
      label: 'During-production vs pre-shipment inspection',
      note: 'Choose the inspection stage that can expose schedule and quality risk before final completion.',
    },
    {
      href: preShipmentBeforePickupArticleHref,
      label: 'Pre-shipment inspection before pickup',
      note: 'Keep final verification and correction time ahead of the forwarder pickup decision.',
    },
    {
      href: chinaQcInspectionFailsArticleHref,
      label: 'What to do when China QC inspection fails',
      note: 'Build a correction, evidence, and release plan when quality failure creates the delay.',
    },
    {
      href: goldenSampleChinaManufacturingArticleHref,
      label: 'Golden sample quality control',
      note: 'Reduce approval ambiguity that can cause pilot-run failure and production rework.',
    },
    {
      href: supplierVerificationVsFactoryAuditArticleHref,
      label: 'Supplier verification vs factory audit',
      note: 'Check whether the supplier and factory capacity evidence fit the order before committing.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What is a realistic production lead time for a China factory?',
      answer:
        'There is no reliable universal number. A realistic lead time starts from a defined event, includes material and sub-supplier dependencies, names line-start and packing dates, and separates production from approval, inspection, rework, booking, and transit time.',
    },
    {
      question: 'How often should a buyer request production updates?',
      answer:
        'Match the cadence to the risk. Weekly milestone evidence may be enough early in a stable order, twice-weekly updates help around material and line start, and daily updates are reasonable when a critical shipment is late and nearing completion.',
    },
    {
      question: 'Should I pay the balance if production is delayed?',
      answer:
        'Do not treat a revised promise as completion evidence. Compare it with the contract terms, verified status, inspection results, and pickup conditions. If payment rights or withholding are disputed, ask qualified counsel before changing the agreed terms.',
    },
    {
      question: 'When does splitting a shipment make sense?',
      answer:
        'A split makes sense when an inspected, correctly packed quantity can protect priority sales or customers and the added inspection, pickup, and freight cost is lower than waiting. Do not split unverified goods merely to create the appearance of progress.',
    },
    {
      question: 'When should an importer switch factories after repeated delays?',
      answer:
        'Consider switching when delays are chronic, evidence is unreliable, and an alternate verified factory can control tooling, materials, samples, quality, and restart timing. Compare the full restart risk with recovery at the current factory before moving unfinished quantity.',
    },
  ] satisfies FaqItem[],
  sources: [
    {
      href: 'https://documents1.worldbank.org/curated/en/099629208202516861/pdf/IDU-e2e57ebf-34aa-4499-9ed1-99d1b06fe315.pdf',
      label: 'World Bank: Project Procurement Strategy for Development (March 2025)',
      note: 'Pages 90–91 describe named roles, milestones, progress reports, risk logs, change control, and issue escalation for World Bank-financed contracts.',
    },
    {
      href: 'https://www.procurement.govt.nz/guides/guide-to-procurement/manage-the-contract/managing-performance-during-delivery/',
      label: 'New Zealand Government Procurement: Managing performance during delivery',
      note: 'Explains monitoring cadence proportionate to risk, delivery measures, written issue records, and remedy follow-up for New Zealand public contracts.',
    },
    {
      href: 'https://www.buyingfor.vic.gov.au/contract-management-goods-and-services-guide',
      label: 'Victoria Department of Government Services: Contract management guide',
      note: 'Describes measurable supplier performance checks, milestone-based reporting, issue logs, and change records for Victorian public procurement.',
    },
  ] satisfies SourceNote[],
}

export function makeChinaFactoryProductionDelaysArticleMetadata(): Metadata {
  const canonicalPath = chinaFactoryProductionDelaysArticle.href

  return {
    title: chinaFactoryProductionDelaysArticle.metaTitle,
    description: chinaFactoryProductionDelaysArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: chinaFactoryProductionDelaysArticle.metaTitle,
      description: chinaFactoryProductionDelaysArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        ...getArticleOpenGraphImages(chinaFactoryProductionDelaysArticle),
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: chinaFactoryProductionDelaysArticle.metaTitle,
      description: chinaFactoryProductionDelaysArticle.metaDescription,
      images: [chinaFactoryProductionDelaysArticle.image.src],
    },
  }
}

export function makeChinaFactoryProductionDelaysArticleJsonLd() {
  return [
    makeArticleJsonLd(chinaFactoryProductionDelaysArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'China factory production delay timeline management checklist',
      itemListElement: chinaFactoryProductionDelaysArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
