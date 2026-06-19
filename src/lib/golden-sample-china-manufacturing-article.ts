import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import { goldenSampleChinaManufacturingArticleHref } from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

export const goldenSampleChinaManufacturingArticle = {
  href: goldenSampleChinaManufacturingArticleHref,
  title: 'Golden Sample for China Manufacturing: From Approval to Quality Control',
  metaTitle: 'Golden Sample China Manufacturing QC Guide',
  metaDescription:
    'Learn how to approve, seal, document, and use a golden sample for China manufacturing quality control before bulk production and balance payment.',
  publishedDate: 'June 19, 2026',
  publishedDateIso: '2026-06-19T14:00:00-04:00',
  h1: 'Golden Sample for China Manufacturing: From Approval to Quality Control',
  eyebrow: 'Approved sample · bulk production · QC decision',
  image: {
    alt: 'Quality inspector comparing an approved reference sample with a bulk-production unit at a factory worktable in China',
    height: 900,
    src: '/images/golden-sample-china-manufacturing-quality-control.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/golden-sample-china-manufacturing-quality-control.webp', width: 1600 },
    { height: 1200, src: '/images/golden-sample-china-manufacturing-quality-control-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/golden-sample-china-manufacturing-quality-control-1x1.webp', width: 1200 },
  ],
  intro:
    'A golden sample is the buyer-approved physical reference for bulk production. It can help align color, finish, construction, dimensions, accessories, packaging, and workmanship—but only when the exact sample is identified, sealed, documented, and connected to written specifications.',
  answerSummary:
    'Do not approve a sample with a casual chat message and expect it to control production. Record the sample version and approval date, photograph it, mark every accepted exception, retain matching buyer and factory copies when practical, and convert important attributes into measurable inspection criteria before the production deposit or bulk-production release.',
  primaryCta: { label: 'Plan Sample-Based QC' },
  secondaryCta: { href: '#approval-checklist', label: 'See Approval Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need to plan China-side QC against an approved sample.

Product:
Factory location:
Order quantity:
Sample status / location:
Production stage:
Balance payment or pickup deadline:
Main quality concern:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#what-it-controls', label: 'What it controls' },
    { href: '#approval-checklist', label: 'Approval checklist' },
    { href: '#comparison-table', label: 'QC comparison' },
    { href: '#change-control', label: 'Change control' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#what-to-send', label: 'What to send' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Give the approved sample a unique version, approval date, product/SKU, and buyer name',
    'Photograph all sides, details, accessories, packaging, markings, and any accepted imperfections',
    'Seal or tamper-mark the retained sample so it cannot be quietly replaced after approval',
    'Keep one approved reference with the factory and one with the buyer or China-side agent when practical',
    'Attach the specification, bill of materials, color reference, dimensions, tolerances, and test requirements',
    'Write down every difference that is accepted for bulk production rather than relying on chat history',
    'State whether the sample controls appearance only or also construction, function, packaging, and accessories',
    'Define what happens when production differs: hold, sort, rework, replace, discount, or re-inspect',
  ],
  controlAreas: [
    {
      title: 'Appearance and finish',
      text: 'Color direction, gloss, texture, print position, logo appearance, surface finish, stitching, visible workmanship, and overall presentation can be compared side by side.',
    },
    {
      title: 'Construction and dimensions',
      text: 'Materials, components, assembly method, dimensions, weight, fit, moving parts, and internal construction need written specifications and tolerances as well as a physical reference.',
    },
    {
      title: 'Function and performance',
      text: 'The sample can demonstrate expected operation, but repeatable test methods, equipment, duration, environment, and pass/fail rules must be documented separately.',
    },
    {
      title: 'Packaging and pack-out',
      text: 'Retail box, inserts, accessories, protective materials, unit pack, carton arrangement, labels, and carton marks should be frozen with approved artwork and packing instructions.',
    },
  ],
  approvalSteps: [
    {
      step: '1',
      title: 'Confirm the final version',
      text: 'Compare the candidate against the latest specification and sample-change history. Do not approve when another revision is still in transit or open points remain unresolved.',
    },
    {
      step: '2',
      title: 'Record and photograph',
      text: 'Assign an ID and date. Photograph the complete product, critical details, measurements, accessories, packaging, labels, and any approved deviations under neutral lighting.',
    },
    {
      step: '3',
      title: 'Seal matching references',
      text: 'Where practical, sign across tamper tape or use numbered seals on matching buyer and factory samples. Record who holds each reference and its seal number.',
    },
    {
      step: '4',
      title: 'Release written criteria',
      text: 'Issue the approved specification, tolerances, defect examples, test methods, artwork, packing instruction, and change-control rule with the production order.',
    },
    {
      step: '5',
      title: 'Connect it to inspection',
      text: 'Tell the inspector where the reference will be, what must be compared, which points are measurable, and which differences require a buyer decision before payment or pickup.',
    },
  ],
  comparisonRows: [
    {
      area: 'Color and finish',
      sampleUse: 'Side-by-side visual reference under controlled, consistent lighting',
      writtenControl: 'Color code or master, gloss/texture requirement, approved range, and viewing conditions',
    },
    {
      area: 'Dimensions and weight',
      sampleUse: 'Shows the intended size, proportion, fit, and assembled form',
      writtenControl: 'Measurement points, units, tolerances, calibrated tool, and sample size',
    },
    {
      area: 'Materials and components',
      sampleUse: 'Provides a retained construction reference where visible or safely accessible',
      writtenControl: 'Bill of materials, grade, supplier/component code, certificates, and approved substitutions',
    },
    {
      area: 'Function',
      sampleUse: 'Demonstrates expected operation and user experience',
      writtenControl: 'Test method, duration, load, environment, equipment, and pass/fail limit',
    },
    {
      area: 'Packaging and labels',
      sampleUse: 'Shows pack-out sequence, presentation, accessory placement, and protection concept',
      writtenControl: 'Dielines, artwork files, barcode/FNSKU data, carton marks, quantities, and label placement',
    },
  ],
  changeControl: [
    'Require written buyer approval before changing material, component, color, finish, dimensions, packaging, label, accessory, or production method',
    'Give every revised sample a new version; never reuse the old approval ID for a changed product',
    'State exactly what changed and whether all other approved attributes remain unchanged',
    'Update specifications, photos, artwork, defect examples, and inspection instructions at the same time',
    'Quarantine or clearly invalidate superseded samples so they cannot be used during production or inspection',
    'Assess whether the change requires a new sample, pilot run, compliance review, laboratory test, or revised quotation',
  ],
  decisionRows: [
    {
      signal: 'Bulk unit matches the sample and written limits',
      meaning: 'The checked attributes conform within the approved comparison and measurement rules.',
      action: 'Review the full inspection result, quantity, packing, labels, tests, and open issues before release.',
    },
    {
      signal: 'Visible difference, but no written tolerance',
      meaning: 'The physical comparison identifies variation but does not define the acceptable boundary.',
      action: 'Hold the affected decision, document both references under the same conditions, and obtain buyer disposition.',
    },
    {
      signal: 'Factory reference is missing or unsealed',
      meaning: 'The inspector cannot prove that the available item is the sample originally approved by the buyer.',
      action: 'Record the limitation and rely on controlled specifications and buyer evidence; consider sending a verified reference before release.',
    },
    {
      signal: 'Material or component was substituted',
      meaning: 'The product may differ in performance, compliance, durability, cost, or customer expectation even if appearance is similar.',
      action: 'Stop automatic approval, trace affected stock, review authorization and evidence, and escalate testing where needed.',
    },
    {
      signal: 'Approved sample itself contains a defect',
      meaning: 'Silence may turn an accidental flaw into an argued production standard.',
      action: 'Mark the flaw as explicitly unacceptable or issue a corrected reference before bulk production.',
    },
  ],
  evidenceBasis: [
    'A uniquely identified and dated approved reference sample, with clear custody and tamper evidence where practical.',
    'Buyer-approved product specifications, drawings, tolerances, bill of materials, artwork, packing instructions, defect examples, and test methods.',
    'Documented revision history showing open points, accepted deviations, later changes, and which sample version controls the current purchase order.',
    'Inspection evidence captured under consistent comparison conditions, including reference identity, bulk-unit traceability, photos, measurements, tests, and stated limitations.',
  ],
  whatToSend: [
    'Purchase order, product/SKU list, order quantity, production status, and balance-payment or pickup deadline',
    'Golden-sample version, approval date, current holder, seal or tamper-mark details, and approval photos',
    'Final product specification, drawings, dimensions, tolerances, bill of materials, and approved substitutions',
    'Color or finish master, artwork, packaging files, labels, inserts, accessories, and pack-out instruction',
    'Function tests, measurement methods, defect classifications, and buyer-approved acceptance rules',
    'Complete change history and a list of any points that remain open, provisional, or outside inspection scope',
  ],
  scopeLimits: [
    'Golden sample is a practical industry term, not a substitute for a complete contract, specification, or applicable product standard',
    'A physical sample can change with age, light, heat, humidity, handling, contamination, or material degradation',
    'Visual matching is subjective unless lighting, viewing conditions, reference tools, and acceptable variation are defined',
    'Matching a sample does not prove regulatory compliance, chemical composition, durability, safety, or unseen internal construction',
    'One approved unit does not establish statistical control across a production lot; sampling and acceptance rules are still needed',
    'A factory-held sample with no identity or tamper evidence may have been replaced, altered, repaired, or confused with another version',
  ],
  relatedLinks: [
    {
      href: '/sample-consolidation-china-compare-suppliers-before-choosing-factory',
      label: 'Compare Supplier Samples',
      note: 'Organize and compare samples before choosing the product and supplier to approve.',
    },
    {
      href: '/china-qc-inspection-booking-checklist',
      label: 'China QC Booking Checklist',
      note: 'Prepare the approved files, factory details, timing, and buyer decision before inspection.',
    },
    {
      href: '/aql-inspection-china-sample-size-defect-limits',
      label: 'AQL Inspection in China',
      note: 'Turn product requirements into a defined random sample and acceptance decision.',
    },
    {
      href: '/qc-inspection-china-before-balance-payment',
      label: 'QC Before Balance Payment',
      note: 'Use sample comparison with the wider product, packing, quantity, and release review.',
    },
  ],
  faqs: [
    {
      question: 'What is a golden sample in China manufacturing?',
      answer:
        'It is the final physical sample accepted by the buyer as a reference for bulk production and quality control. Its authority should be tied to an ID, date, purchase order, written specification, approved exceptions, and controlled custody.',
    },
    {
      question: 'Is a golden sample the same as a pre-production sample?',
      answer:
        'Not automatically. A pre-production sample is produced before the bulk run, but it becomes the controlling approved reference only after the buyer explicitly approves and documents that exact version. Earlier development samples should be marked obsolete.',
    },
    {
      question: 'Should the factory and buyer both keep a golden sample?',
      answer:
        'Matching retained samples are useful when practical because the factory can control production and the buyer or inspector can verify the reference independently. Both should carry the same identity, approval evidence, and tamper control.',
    },
    {
      question: 'Can a QC inspector reject goods only because they look different from the sample?',
      answer:
        'The inspector should document the difference against the approved instruction, not invent a commercial decision. Clear tolerances and defect classifications let the report apply a rule; an undefined variation usually needs buyer disposition.',
    },
    {
      question: 'Does matching the golden sample mean the shipment passes inspection?',
      answer:
        'No. Sample match is one part of QC. The inspection may also need quantity, workmanship, function, dimensions, packaging, labels, carton condition, sampling results, and scope limitations before the buyer releases payment or pickup.',
    },
    {
      question: 'What if the supplier changes a material after sample approval?',
      answer:
        'Require written disclosure and buyer approval before using the change. Identify affected production, revise the sample and specifications, and determine whether new performance, compliance, laboratory, pilot-run, or inspection evidence is needed.',
    },
  ],
}

export function makeGoldenSampleChinaManufacturingArticleMetadata(): Metadata {
  return {
    title: goldenSampleChinaManufacturingArticle.metaTitle,
    description: goldenSampleChinaManufacturingArticle.metaDescription,
    alternates: { canonical: goldenSampleChinaManufacturingArticle.href },
    openGraph: {
      title: goldenSampleChinaManufacturingArticle.metaTitle,
      description: goldenSampleChinaManufacturingArticle.metaDescription,
      url: goldenSampleChinaManufacturingArticle.href,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [...getArticleOpenGraphImages(goldenSampleChinaManufacturingArticle)],
    },
    twitter: {
      card: 'summary_large_image',
      title: goldenSampleChinaManufacturingArticle.metaTitle,
      description: goldenSampleChinaManufacturingArticle.metaDescription,
      images: [goldenSampleChinaManufacturingArticle.image.src],
    },
  }
}

export function makeGoldenSampleChinaManufacturingArticleJsonLd() {
  return [
    makeArticleJsonLd(goldenSampleChinaManufacturingArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to approve a golden sample for China manufacturing',
      step: goldenSampleChinaManufacturingArticle.approvalSteps.map((item) => ({
        '@type': 'HowToStep',
        name: item.title,
        text: item.text,
      })),
    },
    makeFaqPageJsonLd(goldenSampleChinaManufacturingArticle.faqs),
  ]
}
