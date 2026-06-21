import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  aqlInspectionChinaArticleHref,
  chinaQcInspectionFailsArticleHref,
  goldenSampleChinaManufacturingArticleHref,
  productionVsPreShipmentInspectionArticleHref,
  qcBeforeBalanceArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
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

export const qualityControlChinaManufacturingPlanArticle = {
  href: qualityControlChinaManufacturingPlanArticleHref,
  title: 'Quality Control in China Manufacturing: A Buyer\'s 5-Stage Plan',
  metaTitle: 'Quality Control in China Manufacturing Plan',
  metaDescription:
    'Build a China manufacturing quality-control plan across supplier selection, specifications, production, inspection, and shipment release.',
  publishedDate: 'June 20, 2026',
  publishedDateIso: '2026-06-20T23:55:00-04:00',
  h1: 'Quality Control in China Manufacturing: A Practical 5-Stage Plan for Importers',
  eyebrow: 'Supplier control · production evidence · shipment release',
  image: {
    alt: 'Quality inspector measuring a finished product during China manufacturing quality control',
    height: 900,
    src: '/images/quality-control-china-manufacturing-plan.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/quality-control-china-manufacturing-plan.webp', width: 1600 },
    { height: 1200, src: '/images/quality-control-china-manufacturing-plan-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/quality-control-china-manufacturing-plan-1x1.webp', width: 1200 },
  ],
  intro:
    'Quality control in China manufacturing should begin before the factory starts bulk production, not when sealed cartons are waiting for pickup. A workable plan connects the approved supplier, product specification, reference sample, production checkpoints, inspection method, defect rules, and buyer release decision. Each stage should create evidence for the next one.',
  answerSummary:
    'Use five connected stages: qualify the supplier and production site; freeze the product specification and approved sample; confirm materials and production readiness; inspect at the stage where defects can still be corrected; and release payment or shipment only against defined finished-goods evidence. Match the depth to product risk, order value, supplier history, and the cost of a late failure.',
  primaryCta: {
    label: 'Plan Your China Quality Check',
  },
  secondaryCta: {
    href: '#decision-table',
    label: 'See Stage Decisions',
  },
  whatsappMessage: `Hi Agent Huang,

I need help planning quality control for a China order.

Supplier and factory:
Product and quantity:
Order stage:
Approved sample / specification status:
Main quality risks:
Deposit / balance status:
Required inspection or ship date:
`,
  tableOfContents: [
    { href: '#quick-checks', label: 'Quick plan' },
    { href: '#stage-one', label: '1. Supplier and factory' },
    { href: '#stage-two', label: '2. Product standard' },
    { href: '#stage-three', label: '3. Production readiness' },
    { href: '#stage-four', label: '4. Inspection timing' },
    { href: '#stage-five', label: '5. Release decision' },
    { href: '#records', label: 'Records and ownership' },
    { href: '#documents', label: 'What to send' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Verify the legal supplier, actual production site, product capability, critical outside processes, and inspection access',
    'Turn the approved product into controlled files: drawings, materials, dimensions, tolerances, function, finish, labels, and packing',
    'Identify one final approved sample or equivalent reference and mark earlier versions obsolete',
    'Define product-specific critical, major, and minor defects before an inspector must classify findings',
    'Choose pre-production, during-production, or pre-shipment checks based on when the main failure can still be corrected',
    'State the lot, random-sampling method, sample size, tests, acceptance rules, and handling of unavailable or destructive tests',
    'Connect inspection outcomes to written actions: approve, hold, sort, rework, replace, test, re-inspect, or escalate',
    'Keep balance payment, pickup, and shipment timing compatible with correction and verification',
  ],
  sections: [
    {
      id: 'stage-one',
      title: 'Stage 1: qualify the supplier and the factory behind the order',
      paragraphs: [
        'Start by separating the commercial seller from the location and team that will make the goods. The company issuing the invoice may be a manufacturer, trading company, exporter, affiliate, or service company. Quality planning depends on the actual production capability, process ownership, sub-suppliers, equipment, workers, and access—not the supplier profile alone.',
        'The depth of verification should follow the product and exposure. A simple remote review may fit a repeat low-risk order. New tooling, tight tolerances, regulated materials, safety claims, unfamiliar processes, or a large deposit may justify a factory visit, audit, sample testing, or stronger production evidence before bulk work begins.',
      ],
      bullets: [
        'Chinese legal names, seller role, payment beneficiary, exporter, factory operator, and relationship between them',
        'Product-specific machinery, process flow, line capacity, worker skill, quality staff, and similar production history',
        'Critical material and process suppliers plus controls for incoming parts and outsourced work',
        'Actual production, assembly, finishing, packing, storage, inspection, and pickup addresses',
        'Access for buyer representatives, testing, production checks, final inspection, correction, and re-inspection',
      ],
    },
    {
      id: 'stage-two',
      title: 'Stage 2: freeze the product standard before bulk production',
      paragraphs: [
        'A factory cannot consistently build an undefined product, and an inspector cannot objectively reject against a vague expectation. Convert the final commercial agreement into one controlled specification package. Resolve conflicts between drawings, sample notes, purchase orders, packaging files, messages, and older revisions before production.',
        'A golden sample can make color, finish, feel, assembly, and packaging expectations more concrete, but it does not replace written requirements. Identify the exact approved sample, who approved it, where matching references are held, which deviations were accepted, and which measurements, materials, tests, or legal requirements cannot be proven by visual comparison.',
      ],
      bullets: [
        'Product drawings, bill of materials, approved components, dimensions, tolerances, finish, color, workmanship, and function',
        'SKU, size, color, quantity, accessories, manuals, retail packaging, barcode, shipping mark, and carton requirements',
        'Critical, major, and minor defect definitions with photos or examples where interpretation is likely',
        'Reference sample ID, approval date, revision, custody, storage conditions, and approved exceptions',
        'Applicable testing, certification, labeling, traceability, and destination-market obligations confirmed by qualified specialists',
      ],
    },
    {
      id: 'stage-three',
      title: 'Stage 3: confirm materials and production readiness',
      paragraphs: [
        'Before the full run, confirm that the factory is ready to make the approved version at the agreed quantity and schedule. Review critical material status, tooling, fixtures, current files, first-article or pilot output, line setup, outside processes, testing equipment, packaging inputs, and the production plan. A deposit and an approved sample do not prove that bulk inputs match.',
        'Define change control now. The supplier should disclose and obtain approval before changing product-critical materials, components, formulas, tooling, production sites, outside processors, test methods, packaging, or approved files. For an accepted change, identify affected batches and repeat the sample, test, or production evidence needed to establish the new baseline.',
      ],
      bullets: [
        'Material and component identity, grade, source, color, lot, quantity, storage, and incoming-check status',
        'Tooling, gauges, fixtures, test equipment, calibration status, work instructions, and operator readiness',
        'First-article or pilot-run comparison against the current specification and approved sample',
        'Production milestones, batch traceability, in-process checkpoints, defect records, correction ownership, and recovery time',
        'Written approval path for substitutions, deviations, rework methods, site transfers, and schedule-driven changes',
      ],
    },
    {
      id: 'stage-four',
      title: 'Stage 4: inspect when the main risk can still be corrected',
      paragraphs: [
        'Inspection timing should follow the failure mode. Pre-production checks focus on materials and readiness. During-production inspection can expose repeated workmanship, dimensions, assembly, or process drift while the line can still change. Pre-shipment inspection checks the finished lot, quantity, product, packaging, labels, and carton readiness before payment or pickup.',
        'The inspection instruction should name the presented lot, required completion status, random access, sampling plan, sample size, tests, tolerances, defect classes, acceptance limits, photos, and escalation route. AQL-based acceptance sampling can support a lot decision, but it is not a guarantee that every unit is conforming and it does not replace product-specific testing.',
      ],
      bullets: [
        'Pre-production: critical materials, approved files, sample, tooling, line readiness, and change status',
        'During production: work in progress, repeated defects, dimensions, function, assembly, output, and corrective action',
        'Pre-shipment: finished quantity, random product sample, workmanship, function, packaging, labels, cartons, and pickup readiness',
        'Laboratory or engineering tests where visual inspection cannot establish composition, durability, safety, performance, or compliance',
        'Re-inspection after sorting or rework when the first result does not support release',
      ],
    },
    {
      id: 'stage-five',
      title: 'Stage 5: make payment and shipment release a defined decision',
      paragraphs: [
        'An inspection report is evidence, not the commercial decision itself. The buyer should compare the result with the purchase order, acceptance rules, product risk, payment terms, correction access, shipment deadline, and consequences of accepting a deviation. The factory should not decide that a failed or incomplete result is close enough on the buyer’s behalf.',
        'Write the response before the inspection: who can approve, what triggers a hold, whether defects require sorting or rework, what evidence closes a finding, and when a re-inspection is needed. Keep enough time between inspection, balance payment, and pickup to complete the chosen action while the goods remain accessible.',
      ],
      bullets: [
        'Approve when the defined evidence and acceptance rules support release',
        'Conditionally approve only with the accepted deviation, affected quantity, risk owner, and commercial resolution documented',
        'Hold for missing evidence, incomplete quantity, blocked access, material mismatch, failed tests, or defects outside the agreed limits',
        'Sort, rework, replace, or test with a traceable plan and proof tied to affected batches',
        'Re-inspect corrected goods before balance payment or pickup when the first result cannot support release',
      ],
    },
    {
      id: 'records',
      title: 'Keep one quality record from sample approval through shipment',
      paragraphs: [
        'Quality control breaks when every stage uses a different version of the product. Maintain one order record that connects supplier and factory identity, current specifications, approved sample, material changes, production evidence, inspection instructions, findings, corrective actions, re-inspection, and final buyer disposition.',
        'Assign owners and deadlines. The supplier owns production control and correction; the inspector reports observed evidence within scope; laboratories or engineers address specialized tests; and the buyer makes commercial release decisions. Clear ownership prevents a report from being mistaken for a guarantee or an automatic shipment authorization.',
      ],
      bullets: [
        'Current controlled files and a revision log showing what changed, why, when, and who approved it',
        'Order, SKU, batch, carton, sample, test, defect, correction, and inspection identifiers that can be reconciled',
        'Named owners for supplier action, buyer decisions, inspection questions, testing, and deadline escalation',
        'Final written disposition covering payment, pickup, shipment, accepted deviations, open risks, and retained evidence',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'New supplier or new product',
      whatWasChecked:
        'Supplier identity, production site, capability, approved sample, specification, materials, first article, process controls, testing needs, and inspection access',
      buyerDecision:
        'Use deeper verification and an early checkpoint before relying only on a final packed-goods inspection.',
    },
    {
      riskNode: 'Repeat order with controlled history',
      whatWasChecked:
        'Specification revision, sample status, material and site changes, prior defects, corrective-action performance, lot details, and final readiness',
      buyerDecision:
        'Keep the proven controls, target known failure modes, and verify that the repeat order has not silently changed.',
    },
    {
      riskNode: 'Process drift or substitution suspected',
      whatWasChecked:
        'Affected batches, material identity, current site and processor, production records, product differences, test results, defect trend, and correction access',
      buyerDecision:
        'Pause automatic release, isolate affected goods, verify the change, and repeat the controls needed to establish conformity.',
    },
    {
      riskNode: 'Final inspection fails or is incomplete',
      whatWasChecked:
        'Lot availability, sampling validity, defect counts, failed tests, missing evidence, root cause, affected quantity, rework method, payment, and pickup timing',
      buyerDecision:
        'Hold the next release step until the buyer accepts a documented deviation or correction and re-inspection support release.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Supplier, legal seller, payment beneficiary, factory, process map, sub-supplier, capability, access, and order-specific production evidence.',
    'Purchase order, controlled specification, drawing, bill of materials, approved sample, defect definitions, packaging files, labels, and test requirements.',
    'Material and production readiness, change approvals, first-article results, batch records, in-process evidence, finished quantities, and inspection access.',
    'Sampling and inspection records, photos, measurements, test results, defect counts, corrective action, re-inspection, and final buyer disposition.',
  ],
  sourceNotes: [
    {
      href: 'https://www.iso.org/standard/62085.html',
      label: 'ISO 9001:2015 — Quality management systems',
      note: 'Primary standard context for controlled processes, documented information, supplier control, performance evaluation, and improvement.',
    },
    {
      href: 'https://www.iso.org/standard/85464.html',
      label: 'ISO 2859-1:2026 — Sampling procedures for inspection by attributes',
      note: 'Current ISO standard for AQL-indexed lot-by-lot acceptance sampling; a sampling plan still requires a defined lot and execution method.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Import-Safety',
      label: 'U.S. Consumer Product Safety Commission — Import Safety',
      note: 'Official U.S. importer resources showing why buyer-side quality checks do not replace product-safety responsibilities.',
    },
    {
      href: 'https://commission.europa.eu/business-economy-euro/product-safety-and-requirements/product-safety/general-product-safety-regulation_en',
      label: 'European Commission — General Product Safety Regulation',
      note: 'Official EU product-safety and traceability context for businesses placing consumer products on the EU market.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Supplier profile, Chinese legal company and factory names, quotation, proforma invoice, payment details, and production addresses',
    'Purchase order, SKU and quantity breakdown, drawings, bill of materials, tolerances, approved sample record, and revision history',
    'Function, workmanship, measurement, color, finish, packaging, label, barcode, carton, and shipping-mark requirements',
    'Critical, major, and minor defect definitions plus named sampling plan, sample size, tests, and acceptance rules',
    'Material status, first-article or pilot evidence, production percentage, finished quantity, packing status, and known changes or defects',
    'Deposit and balance status, inspection window, correction time, pickup date, shipment deadline, and the decision the report must support',
  ],
  redFlags: [
    'The supplier begins bulk production while sample, specification, material, packaging, or label decisions are still changing',
    'The factory says it will follow the sample but cannot identify which sample, revision, or written exceptions control the order',
    'Critical materials, components, processors, production sites, or test methods change without written buyer approval',
    'Production is repeatedly almost complete but quantities, batch records, work-in-progress evidence, or packing status cannot be reconciled',
    'The supplier blocks random access, selects only perfect units, delays inspection until payment is due, or limits the presented quantity',
    'Defect definitions and acceptance rules are first discussed after the inspector reports findings',
    'Balance payment or pickup is scheduled with no practical time for sorting, rework, testing, or re-inspection',
  ],
  scopeLimits: [
    'Inspection observes a defined sample, place, time, and scope; it cannot prove that every unit is conforming or guarantee future supplier conduct',
    'Visual and functional checks do not replace laboratory testing, engineering validation, certification, product-safety review, or legal compliance work',
    'A golden sample is a reference, not proof of material composition, durability, hidden construction, or statistical control across a lot',
    'AQL is an acceptance-sampling framework, not a promise that the shipment contains exactly the stated percentage of defects',
    'Supplier verification and factory visits reduce uncertainty but cannot expose every undisclosed sub-supplier, future substitution, or process change',
    'Contract remedies, payment rights, customs, certification, and destination-market obligations require qualified legal, technical, or regulatory advice',
  ],
  relatedLinks: [
    {
      href: goldenSampleChinaManufacturingArticleHref,
      label: 'Golden sample manufacturing quality control',
      note: 'Control the physical reference, written requirements, revisions, custody, and approved exceptions.',
    },
    {
      href: productionVsPreShipmentInspectionArticleHref,
      label: 'During-production vs pre-shipment inspection',
      note: 'Choose the stage that can expose the main failure while correction and release leverage remain.',
    },
    {
      href: aqlInspectionChinaArticleHref,
      label: 'AQL inspection sample size and defect limits',
      note: 'Define the finished lot, sampling method, defect classes, sample size, and acceptance decision.',
    },
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC inspection before balance payment',
      note: 'Connect finished-goods evidence with the buyer\'s approve, hold, correct, or re-inspect decision.',
    },
    {
      href: chinaQcInspectionFailsArticleHref,
      label: 'What to do when China QC fails',
      note: 'Move from failed findings to containment, correction, proof, re-inspection, and release.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'How do I control product quality when manufacturing in China?',
      answer:
        'Qualify the supplier and actual factory, freeze a complete product standard and approved reference, verify materials and production readiness, inspect at the stage where the main risk can still be corrected, and connect the finished result to a written payment and shipment-release decision.',
    },
    {
      question: 'Is a pre-shipment inspection enough for quality control?',
      answer:
        'It may be enough for a stable, lower-risk repeat order, but it is late for material, process, or repeated workmanship problems. New suppliers, custom products, tight tolerances, or expensive late rework may justify sample approval, pre-production checks, or during-production inspection as well.',
    },
    {
      question: 'Who is responsible for quality control: the factory or the inspector?',
      answer:
        'The supplier and factory remain responsible for making conforming goods and controlling production. An independent inspector observes and reports evidence within an agreed scope. The buyer defines requirements and makes commercial approval, payment, and shipment-release decisions.',
    },
    {
      question: 'What should be in a China product inspection checklist?',
      answer:
        'Include the correct product and quantity, random-sampling instructions, approved reference, workmanship and defect classes, dimensions and tolerances, function tests, accessories, packaging, labels, barcodes, cartons, photos, acceptance rules, scope limits, and escalation contacts.',
    },
    {
      question: 'What if the supplier changes materials after sample approval?',
      answer:
        'Require written disclosure, identify affected batches, and do not treat the old approval as proof for the changed product. Decide whether the change needs a revised sample, updated files, performance or compliance testing, first-article approval, added production checks, or re-inspection.',
    },
  ] satisfies FaqItem[],
}

export function makeQualityControlChinaManufacturingPlanArticleMetadata(): Metadata {
  const article = qualityControlChinaManufacturingPlanArticle

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

export function makeQualityControlChinaManufacturingPlanArticleJsonLd() {
  return [
    makeArticleJsonLd(qualityControlChinaManufacturingPlanArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Quality control plan for China manufacturing',
      itemListElement: qualityControlChinaManufacturingPlanArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(qualityControlChinaManufacturingPlanArticle.faqs),
  ]
}
