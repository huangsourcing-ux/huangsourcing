import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  chinaFactoryProductionDelaysArticleHref,
  chinaFactorySubcontractingRiskArticleHref,
  goldenSampleChinaManufacturingArticleHref,
  productionVsPreShipmentInspectionArticleHref,
  qcBeforeBalanceArticleHref,
  supplierVerificationVsFactoryAuditArticleHref,
} from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

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

export const chinaFactorySubcontractingRiskArticle = {
  href: chinaFactorySubcontractingRiskArticleHref,
  title: 'China Factory Subcontracting Risk: Verify Who Makes Your Order',
  metaTitle: 'China Factory Subcontracting Risk Guide',
  metaDescription:
    'China factory subcontracting checklist: verify the production site, control sub-suppliers, detect site changes, and decide when to inspect or hold.',
  publishedDate: 'June 20, 2026',
  publishedDateIso: '2026-06-20T14:00:00-04:00',
  h1: 'China Factory Subcontracting Risk: How Importers Verify Who Makes the Order',
  eyebrow: 'Factory identity · sub-supplier control · production evidence',
  image: {
    alt: 'Buyer-side professionals checking the production site behind a China supplier order',
    height: 900,
    src: '/images/china-factory-subcontracting-risk.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/china-factory-subcontracting-risk.webp', width: 1600 },
    { height: 1200, src: '/images/china-factory-subcontracting-risk-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/china-factory-subcontracting-risk-1x1.webp', width: 1200 },
  ],
  intro:
    'A supplier may sell an order under one company name while materials, components, assembly, finishing, packing, or the entire production run happen elsewhere. Subcontracting is not automatically a problem. The risk is an undisclosed or uncontrolled site that changes the capability, quality, traceability, schedule, or compliance assumptions behind the buyer’s approval.',
  answerSummary:
    'Verify the legal seller, named production site, actual manufacturing role, critical outside processes, and inspection access before production. Put approved sites and change-notification rules in writing, then compare dated production evidence with the factory and order you approved. If the site changes, pause automatic payment or release decisions until the new location, product status, quality controls, and commercial impact are understood.',
  primaryCta: {
    label: 'Check the Factory Behind Your Order',
  },
  secondaryCta: {
    href: '#decision-table',
    label: 'See Site-Change Decisions',
  },
  whatsappMessage: `Hi Agent Huang,

I need help checking which China factory is making my order.

Supplier company:
Product and quantity:
Quoted factory address:
Current production address:
Deposit / balance status:
Production stage:
Reason I suspect subcontracting:
Required inspection or ship date:
`,
  tableOfContents: [
    { href: '#quick-checks', label: 'Quick checks' },
    { href: '#what-it-means', label: 'What subcontracting means' },
    { href: '#acceptable-vs-risky', label: 'Acceptable vs risky' },
    { href: '#before-deposit', label: 'Before deposit' },
    { href: '#production-controls', label: 'Production controls' },
    { href: '#evidence', label: 'Production evidence' },
    { href: '#site-change', label: 'If the site changes' },
    { href: '#documents', label: 'What to send' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Write down the legal seller, invoice issuer, bank beneficiary, export company, and actual production-site name separately',
    'Ask which processes happen at the quoted factory and which are performed by outside processors or sub-suppliers',
    'Match the approved address with current production photos, video, visit notes, inspection booking, and pickup plan',
    'Identify critical outsourced steps such as molding, casting, plating, printing, electronics, testing, assembly, and packing',
    'Require written notice and buyer approval before the factory, assembly site, or critical processor changes',
    'Confirm that approved samples, specifications, materials, tooling, test methods, and defect limits follow the order to every site',
    'Keep inspection access, correction responsibility, and balance-payment timing workable if production moves',
    'Escalate unexplained site, company, contact, equipment, packaging, or pickup-address changes before goods ship',
  ],
  sections: [
    {
      id: 'what-it-means',
      title: 'What factory subcontracting means in China sourcing',
      paragraphs: [
        'Subcontracting means that a supplier relies on another company or location for part or all of the order. A trading company may coordinate several factories. A manufacturer may send specialized work to an approved processor. A busy factory may also transfer production to an unapproved workshop without telling the buyer.',
        'The buyer does not need every screw or carton made under one roof. The buyer does need to know which site controls the critical product characteristics, whether that site was evaluated for the order, and who remains accountable for quality, delivery, records, access, and correction.',
      ],
      bullets: [
        'Component subcontracting: purchased parts, electronics, hardware, fabric, packaging, labels, or other inputs',
        'Special-process subcontracting: molding, heat treatment, welding, coating, plating, printing, sterilization, or laboratory testing',
        'Capacity subcontracting: assembly or packing shifted because the quoted factory lacks line space, workers, equipment, or time',
        'Full-order subcontracting: the seller manages the transaction while a different factory makes and packs the goods',
      ],
    },
    {
      id: 'acceptable-vs-risky',
      title: 'When subcontracting is acceptable and when it becomes risky',
      paragraphs: [
        'Controlled subcontracting can be normal when the process is disclosed, the outside site is capable, specifications and traceability move with the work, incoming and outgoing checks are defined, and the buyer’s inspection and correction rights remain intact.',
        'Risk rises when the supplier conceals the site, cannot explain who controls production, changes factories after sample approval, or uses a location that cannot reproduce the approved material, process, testing, or packing method. A lower-cost workshop can change the product even when the seller and purchase order remain the same.',
      ],
      bullets: [
        'Acceptable: named outside process, clear owner, approved specification, receiving check, traceable batch, and available records',
        'Caution: the supplier discloses a site only after deposit or cannot show how work is transferred and checked',
        'High risk: finished goods appear at a different address, inspection access is blocked, or the pickup location changes without a credible explanation',
        'Stop-and-review: the new site changes regulated materials, product claims, certification assumptions, safety controls, or the ability to correct defects',
      ],
    },
    {
      id: 'before-deposit',
      title: 'Verify the production site before deposit',
      paragraphs: [
        'Separate supplier identity from factory capability. The company receiving payment may be a manufacturer, exporter, trading company, affiliate, or service company. Ask for the Chinese legal names and addresses of the seller and the site that will make the order, then test whether the claimed equipment, workers, product history, and capacity fit the quoted product and timeline.',
        'A remote review can find inconsistencies, but important orders may require an onsite visit or factory audit. The depth should follow product risk, order value, novelty, regulatory exposure, tooling dependence, and the cost of discovering the wrong factory after production.',
      ],
      bullets: [
        'Legal seller, invoice issuer, payment beneficiary, exporter, factory operator, and relationship between them',
        'Exact production, finishing, packing, storage, inspection, and pickup addresses',
        'Product-specific equipment, process flow, sample source, line capacity, worker skill, and quality checkpoints',
        'Named sub-suppliers for critical materials or processes and the controls applied when goods return',
        'Whether the buyer, inspector, or nominated representative can access the actual goods and site',
      ],
    },
    {
      id: 'production-controls',
      title: 'Put subcontracting controls into the order before production',
      paragraphs: [
        'A verbal promise not to subcontract is difficult to use when the schedule slips. The purchase order, manufacturing agreement, quality plan, or inspection instruction should identify the approved production site, critical outside processes, notice requirements, change-approval route, inspection access, record retention, and responsibility for nonconforming work.',
        'The control should fit the product. A buyer may accept an approved packaging printer but prohibit transfer of final assembly. Another order may allow alternate molding capacity only after first-article approval and material confirmation. The rule must name what can change, who approves it, and what evidence is required before the changed process supplies bulk goods.',
      ],
      bullets: [
        'Approved factory and processor names, Chinese addresses, and process responsibilities',
        'No-change rule for product-critical materials, tooling, process parameters, assembly site, or test method without written approval',
        'Transfer package containing the current drawing, bill of materials, golden sample ID, tolerances, defect limits, labels, and packing files',
        'Inspection access at the actual site plus a correction and re-inspection plan if the change creates defects',
        'Commercial consequences and qualified legal review appropriate to the contract and governing law',
      ],
    },
    {
      id: 'evidence',
      title: 'Evidence that production is happening at the approved factory',
      paragraphs: [
        'Do not rely on one cropped photo or a sales contact’s location pin. Build a consistent evidence set across time: site exterior and work-area context, product-specific work in progress, material and batch identification, equipment, production counts, packing status, inspection address, and pickup details.',
        'Evidence should answer both where and what. A genuine factory video does not prove that the buyer’s order is there. Product photos do not prove which site made them. Stronger evidence connects the current order, current date, identifiable production stage, and approved location without exposing unrelated buyer information.',
      ],
      bullets: [
        'Dated wide-context photos or live walkthrough covering the work area, order, equipment, and production stage',
        'Material, work-order, batch, line, carton, and quantity records that agree with the purchase order',
        'Inspection booking and report showing the actual site, contact, goods presented, and quantities available',
        'Supplier explanation for any different uniforms, walls, machines, labels, company names, contacts, or addresses',
        'Pickup address and packing evidence consistent with the production and inspection history',
      ],
    },
    {
      id: 'site-change',
      title: 'What to do when the factory or production site changes',
      paragraphs: [
        'Treat a site change as a new risk decision, not only a supplier update. Ask what moved, why, when, how much quantity is affected, which materials and tooling moved, whether production already started, and what controls were repeated at the new location.',
        'Do not authorize an automatic balance payment, inspection waiver, or pickup release merely because the original supplier remains involved. Decide whether to accept, conditionally approve, inspect more deeply, require corrective action, return work to the approved site, or stop based on verified status and the buyer’s contract, quality, schedule, compliance, and commercial exposure.',
      ],
      bullets: [
        'Pause the next irreversible step while facts are collected, where the payment terms and agreement allow',
        'Verify the new operator, address, process capability, product status, materials, tooling, and inspection access',
        'Repeat sample, first-article, process, testing, or inspection controls when the moved step can change product conformity',
        'Document approved deviations, affected batches, added checks, recovery dates, and correction responsibility',
        'Use qualified legal or regulatory advice when rights, certification, product safety, customs, sanctions, or forced-labor obligations may be affected',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Disclosed specialist process',
      whatWasChecked:
        'Processor identity, process scope, approved specification, batch traceability, supplier controls, returned-material checks, records, and inspection impact',
      buyerDecision:
        'Accept the named outside process when the supplier controls it and the evidence supports product and market requirements.',
    },
    {
      riskNode: 'Approved alternate factory',
      whatWasChecked:
        'Site capability, product history, material and tooling transfer, golden sample, first article, quality plan, capacity, access, and schedule',
      buyerDecision:
        'Approve conditionally with written scope, repeated controls, identified batches, and an inspection plan before release.',
    },
    {
      riskNode: 'Undisclosed site discovered',
      whatWasChecked:
        'Actual operator, affected quantity, current stage, reason for transfer, product differences, records, inspection access, payment status, and contract position',
      buyerDecision:
        'Hold the next automatic release decision and require verified facts, corrective controls, and written commercial resolution.',
    },
    {
      riskNode: 'Site cannot be verified',
      whatWasChecked:
        'Conflicting names and addresses, blocked access, missing production evidence, unsupported quantities, changing explanations, and shipment deadline',
      buyerDecision:
        'Escalate verification and avoid relying on the claimed completion until the goods, site, and accountable supplier are established.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Supplier profile, Chinese legal names, business-license details, quotation, proforma invoice, beneficiary, exporter, and written relationship between the seller and factory.',
    'Production addresses, process map, sub-supplier list, equipment and capacity evidence, sample source, material status, work-in-progress photos, batch records, and inspection access.',
    'Purchase-order controls, approved specifications, golden sample identity, change notices, inspection findings, correction records, packing status, and pickup address.',
    'Buyer-side judgment applied to available evidence within the agreed verification, visit, monitoring, or inspection scope; not a guarantee of future conduct.',
  ],
  sourceNotes: [
    {
      href: 'https://www.iso.org/standard/62085.html',
      label: 'ISO 9001:2015 — Quality management systems',
      note: 'Primary standard context for controlled quality-management processes and consistent conformity; access to the full standard may require purchase.',
    },
    {
      href: 'https://commission.europa.eu/business-economy-euro/product-safety-and-requirements/product-safety/general-product-safety-regulation_en',
      label: 'European Commission — General Product Safety Regulation',
      note: 'Official EU product-safety and traceability context for businesses placing consumer products on the EU market.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Import-Safety',
      label: 'U.S. Consumer Product Safety Commission — Import Safety',
      note: 'Official U.S. importer resources for consumer-product safety responsibilities and border processes.',
    },
    {
      href: 'https://mneguidelines.oecd.org/duediligence/',
      label: 'OECD — Responsible business due diligence',
      note: 'Risk-based due-diligence framework for identifying and addressing impacts across business relationships and supply chains.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Supplier profile, website, Chinese and English company names, quotation, proforma invoice, payment instructions, and exporter details',
    'Claimed factory name and address, contact person, visit or audit records, production videos, and map or location information',
    'Purchase order, product specification, bill of materials, drawings, approved sample record, critical process list, and packaging files',
    'Supplier explanation of in-house work, outside processes, sub-suppliers, alternate sites, and change-notification terms',
    'Current production photos, videos, work orders, batch or quantity records, inspection booking, and inspection findings',
    'Deposit and balance status, required completion date, pickup address, forwarder plan, and the decision deadline you face',
  ],
  redFlags: [
    'The supplier refuses to name the actual production site or describes every location as its own factory',
    'The quoted equipment, workforce, floor area, or daily capacity does not fit the product and promised output',
    'The approved sample came from one site but bulk production photos show different machinery, fixtures, materials, or workmanship',
    'Factory access, video calls, or third-party inspection become unavailable only after the deposit is paid',
    'Company names, uniforms, signs, contacts, addresses, or pickup details change without a coherent written relationship',
    'Production is repeatedly almost complete, yet the supplier cannot show wide-context work in progress or traceable quantities',
    'The supplier claims subcontracting is confidential and will not explain controls for critical materials or processes',
  ],
  scopeLimits: [
    'Supplier verification and remote evidence can expose inconsistencies but cannot prove every undisclosed site or future transfer',
    'An onsite visit confirms conditions observed at a time and place; it does not guarantee that all production stays there later',
    'Factory identity and capability evidence do not replace product testing, regulatory review, certification checks, or shipment inspection',
    'A disclosed sub-supplier is not automatically approved; its process, material, records, and market-specific obligations still require review',
    'Contract remedies, payment holds, cancellation, intellectual-property rights, and enforcement require qualified legal advice',
    'Importers remain responsible for understanding the product rules, traceability duties, customs requirements, and due-diligence obligations in their destination markets',
  ],
  relatedLinks: [
    {
      href: supplierVerificationVsFactoryAuditArticleHref,
      label: 'Supplier verification vs factory audit',
      note: 'Choose the evidence depth needed before relying on a supplier’s claimed factory identity and capability.',
    },
    {
      href: goldenSampleChinaManufacturingArticleHref,
      label: 'Golden sample manufacturing quality control',
      note: 'Keep one controlled product reference when production, staff, equipment, or location changes.',
    },
    {
      href: productionVsPreShipmentInspectionArticleHref,
      label: 'During-production vs pre-shipment inspection',
      note: 'Select an inspection stage that can expose a site or process change before final packing.',
    },
    {
      href: chinaFactoryProductionDelaysArticleHref,
      label: 'China factory production delay management',
      note: 'Test whether a capacity problem or production transfer sits behind a moving completion date.',
    },
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC inspection before balance payment',
      note: 'Verify the actual finished goods before payment leverage and supplier access change.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Is factory subcontracting common in China?',
      answer:
        'Outside materials and specialist processes are common in manufacturing everywhere. The buyer risk is not the existence of a sub-supplier by itself; it is an undisclosed or uncontrolled change that breaks the approved product, site, quality, traceability, schedule, inspection, or compliance assumptions.',
    },
    {
      question: 'How can I tell whether a trading company is outsourcing my order?',
      answer:
        'Ask the seller to name the legal factory operator and production address, describe each in-house and outside process, show order-specific production evidence, and permit verification or inspection at the actual site. Compare those facts with the invoice, sample source, capability, capacity, and pickup plan.',
    },
    {
      question: 'Should a purchase order prohibit all subcontracting?',
      answer:
        'A blanket prohibition may be unrealistic when components or specialist processes normally come from outside. A stronger practical control identifies approved sites and processes, prohibits unapproved product-critical changes, requires notice and buyer approval, and preserves inspection, traceability, correction, and remedy rights. Obtain legal advice for enforceable contract language.',
    },
    {
      question: 'What should I do if production moved after sample approval?',
      answer:
        'Identify what moved and which batches are affected, verify the new site and transfer controls, confirm that the current specification and approved sample followed the work, and repeat first-article, testing, or inspection steps when the change can affect conformity. Document the decision before payment or release.',
    },
    {
      question: 'Can a factory visit prove that my order will not be subcontracted?',
      answer:
        'No. A visit can verify the site, people, equipment, current goods, and controls observed, but production can move later. Combine site evidence with written change rules, order-specific monitoring, inspection access, batch traceability, and a pickup address that stays consistent.',
    },
  ] satisfies FaqItem[],
}

export function makeChinaFactorySubcontractingRiskArticleMetadata(): Metadata {
  const article = chinaFactorySubcontractingRiskArticle

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: article.href },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: article.href,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [...getArticleOpenGraphImages(article)],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.image.src],
    },
  }
}

export function makeChinaFactorySubcontractingRiskArticleJsonLd() {
  return [
    makeArticleJsonLd(chinaFactorySubcontractingRiskArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'China factory subcontracting risk checklist',
      itemListElement: chinaFactorySubcontractingRiskArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(chinaFactorySubcontractingRiskArticle.faqs),
  ]
}
