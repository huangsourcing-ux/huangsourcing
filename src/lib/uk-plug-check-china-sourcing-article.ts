import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  preShipmentBeforePickupArticleHref,
  qcBeforeBalanceArticleHref,
  resourceGuideHref,
  ukPlugCheckChinaSourcingArticleHref,
} from '@/lib/site-links'

type ArticleSection = { bullets?: string[]; id: string; paragraphs: string[]; title: string }
type CheckGroup = { items: string[]; title: string }
type DecisionRow = { buyerDecision: string; riskNode: string; whatToConfirm: string }
type FaqItem = { answer: string; question: string }
type RelatedLink = { href: string; label: string; note: string }
type SourceNote = { href: string; label: string; note: string }

export const ukPlugCheckChinaSourcingArticle = {
  author: 'editorial-team' as const,
  href: ukPlugCheckChinaSourcingArticleHref,
  title: 'UK Plug Checks Before Shipping Electrical Goods from China',
  metaTitle: 'UK Plug Checks Before Shipping from China',
  metaDescription:
    'Use current UK recall evidence to match plugs, fuses, test files and carton lots before payment. Includes a shipment coverage record and rework hold points.',
  publishedDate: 'July 20, 2026',
  publishedDateIso: '2026-07-20T03:30:00+08:00',
  modifiedDate: 'September 14, 2026',
  modifiedDateIso: '2026-09-14T03:25:52+08:00',
  h1: 'UK Plug Checks Before Shipping Electrical Goods from China',
  eyebrow: 'UK plug evidence - physical checks - shipment release',
  image: {
    alt: 'Neutral illustrative inspection setup with a generic UK three-pin plug, AC adapter, fuse, calipers, forms, and carton',
    height: 900,
    src: '/images/uk-plug-check-china-sourcing.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/uk-plug-check-china-sourcing.webp', width: 1600 },
    { height: 1200, src: '/images/uk-plug-check-china-sourcing-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/uk-plug-check-china-sourcing-1x1.webp', width: 1200 },
  ],
  intro:
    'For UK-bound electrical goods, final payment and forwarder pickup should wait until a qualified compliance plan, laboratory evidence, approved UK plug and fuse specification, product markings, and the physical packed order all identify the same model and production version.',
  answerSummary:
    'Use two connected gates. A qualified UK product-safety specialist and competent laboratory should decide the applicable regulations, standards, tests, plug construction, fuse, markings, and documentation. A China-side inspection can then compare those approved references with sampled plugs, adapters, labels, manuals, retail packs, cartons, and correction records. Hold release when the technical approval or shipment match is unclear.',
  primaryCta: { label: 'Check UK-Bound Electrical Goods' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side UK plug and electrical-product evidence check before shipment.

Product / model / SKU count:
UK importer or marketplace:
Supplier / factory location:
Approved plug, fuse, label, and manual files:
Test reports and declarations:
Order and carton quantity:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#product-scope', label: 'Product and model scope' },
    { href: '#test-files', label: 'Test and document match' },
    { href: '#physical-checks', label: 'Physical checks and pack-out' },
    { href: '#release-record', label: 'Shipment coverage record' },
    { href: '#after-rework', label: 'Release after rework' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Define the exact electrical product, adapter, detachable lead, plug, rated input and output, model, SKU, intended UK use, and sales configuration',
    'Obtain a qualified decision on the applicable UK legislation, standards, conformity route, laboratory tests, markings, instructions, and responsible economic operator',
    'Tie every report, declaration, certificate, component approval, and risk assessment to the same manufacturer, model, plug, adapter, fuse, cable, and production version',
    'Compare the buyer-approved UK plug face, pins, insulation sleeves, fuse, cable entry, housing, ratings, markings, and label layout with physical samples',
    'Open cartons across the agreed sample to detect substituted adapters, mixed plug revisions, loose travel converters, old labels, wrong manuals, or model drift',
    'Separate visual and simple measurement evidence from controlled electrical, material, mechanical, and standard-conformity tests',
    'Control the affected quantity, segregation, rework instruction, carton map, and re-inspection evidence when any mismatch appears',
    'Hold balance payment and pickup until qualified approval and China-side evidence support the same release decision',
  ],
  checkGroups: [
    {
      title: 'Product and destination scope',
      items: [
        'Product function, model, SKU, rated voltage and frequency, power, adapter or lead type, class, intended user, and Great Britain or Northern Ireland destination',
        'Qualified rule and standard map, importer responsibilities, conformity route, marking plan, test scope, and marketplace requirements',
      ],
    },
    {
      title: 'Plug, adapter, and fuse identity',
      items: [
        'Approved plug body, pin geometry, sleeving, fuse type and rating, cable and strain relief, adapter housing, connector, and bill-of-material references',
        'Supplier, component maker, model code, drawings, golden sample, change-control status, production date, lot, and factory location',
      ],
    },
    {
      title: 'Technical file and markings',
      items: [
        'Laboratory, report number, sample identity, tested configuration, standards, result, applicant, manufacturer, dates, photos, and amendment history',
        'Product and packaging ratings, model, batch or serial traceability, manufacturer and importer details, UKCA or CE decision, warnings, and instructions',
      ],
    },
    {
      title: 'Bulk order and release control',
      items: [
        'Opened-carton coverage, plug and adapter revision checks, SKU and lot traceability, packing-list match, label and manual versions, and sampled measurements',
        'Affected quantity, segregation, approved correction, destructive-test needs, re-check result, payment hold, and forwarder pickup status',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why UK plug evidence is a current China sourcing issue',
      paragraphs: [
        'The September 4, 2026 OPSS recall of a China-origin candle warmer lamp adds a recent example of plug dimensions preventing a secure socket connection. The identified risk was overheating and fire. This update turns that finding into a shipment coverage record and a clearer component-replacement hold point.',
        'A separate evidence stream comes from Which?’s June 11, 2026 laboratory investigation of 15 marketplace USB chargers. It reported nine with electric-shock risks, eight with fire and explosion risks, and missing required information across all 15. These are results for the tested samples, not a defect rate for all imports or a measure of market demand.',
        'The practical decision is whether the approved plug, fuse, lead or adapter is actually the version packed for this order. Keep an unresolved mismatch open even when the appliance switches on. This guide uses public records and buyer-side sourcing analysis; it does not report a Huang Sourcing inspection of the cited products.',
      ],
      bullets: [
        'A supplier photo of one correct UK plug does not prove that every carton contains that plug, fuse, adapter, cable, label, and manual revision',
        'A test report for a visually similar adapter may not cover a changed housing, transformer, PCB, insulation system, plug face, fuse, component supplier, or factory',
        'Visible markings or a UKCA or CE logo do not by themselves prove that the product passed applicable testing or has a complete technical file',
        'Correction leverage is strongest while replacement, segregation, retesting, relabeling, rework, cancellation, or delayed pickup remains practical in China',
      ],
    },
    {
      id: 'product-scope',
      title: 'Which product, plug, and market configuration are being released?',
      paragraphs: [
        'Start with the complete sales configuration. A mains-powered product may use an integrated UK plug, an external power supply, a detachable lead, a bundled converter, or several destination variants under one listing. Record the end product and every mains-connected component, not only the outer appliance.',
        'Great Britain and Northern Ireland can involve different market-access details. The importer, qualified UK product-safety adviser, approved body where applicable, and competent laboratory should decide the rules and conformity route. The China-side task is to document the exact configuration the supplier made and packed, then compare it with the buyer-approved technical and artwork references.',
      ],
      bullets: [
        'Record model, SKU, destination, rated voltage and frequency, wattage, plug or lead arrangement, adapter input and output, connector, cable, fuse, and sales bundle',
        'Identify the manufacturer, importer or other responsible economic operator, factory, plug and adapter suppliers, production date, batch, and carton range',
        'Separate Great Britain, Northern Ireland, EU, U.S., and other destination variants in files, assembly areas, retail packs, and export cartons',
        'Reconfirm scope after a component, plug, fuse, PCB, transformer, housing, cable, supplier, factory, rating, label, manual, packaging, or sales-claim change',
      ],
    },
    {
      id: 'test-files',
      title: 'How should test reports and technical files match the order?',
      paragraphs: [
        'Use the specialist-approved test plan as the reference. Compare the report applicant, manufacturer, factory, product model, adapter model, plug and fuse details, ratings, internal construction references, photographs, tested sample, standards, dates, results, and amendments with the purchase order and current production.',
        'Do not treat a certificate title or report cover as enough. A controlled match requires the pages that identify the tested configuration and the evidence owner. If the order changed after testing, disclose the change and let qualified parties decide whether an engineering assessment, component evidence, amended file, or new testing is required.',
      ],
      bullets: [
        'Keep the approved report, declaration, risk assessment, component schedule, drawings, label and manual files, and reference sample under revision control',
        'Check whether photographs and model identifiers in the report match the plug, adapter, cable, housing, ratings, and product now being produced',
        'Escalate missing pages, altered PDFs, unexplained model families, inconsistent applicants, mismatched factories, or reports outside the relevant scope',
        'Do not use supplier self-tests, continuity checks, plug photos, weight, or basic dimensions as substitutes for controlled electrical and conformity testing',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can be checked on the physical plug and packed order?',
      paragraphs: [
        'A China-side inspection can compare visible construction and buyer-approved dimensions without claiming full BS 1363 conformity. The scope may include plug type, pin count and orientation, insulated sleeves, fuse presence and accessible marking, housing fit, cable entry, strain relief, connector, adapter model and ratings, label durability, manual, retail pack, and carton segregation.',
        'Open cartons across the agreed sample and trace findings by SKU, lot, and carton. When a mismatch appears, stop assuming it is isolated. Define the affected range, segregate stock, obtain an approved correction instruction, and repeat the agreed checks after rework. Electrical or destructive tests stay with a competent laboratory.',
      ],
      bullets: [
        'Compare physical samples with the buyer-approved golden sample, drawings, component list, label files, report photographs, and destination pack-out',
        'Record simple measurements only where the buyer or specialist has supplied the feature, tool, method, tolerance, and decision rule',
        'Check retail packs and cartons for loose travel converters, EU or U.S. leads, old adapters, mixed ratings, missing importer details, and incorrect manuals',
        'Photograph each sampled configuration in context and link every hold, correction, and re-check result to the affected quantity and carton range',
      ],
    },
    {
      id: 'release-record',
      title: 'Build one shipment coverage record per configuration',
      paragraphs: [
        'Use one row for each product SKU, destination, plug or adapter revision, and production lot. A single photograph of a UK plug should not close a multi-SKU order. The following is our recommended buyer worksheet, not a prescribed regulatory form.',
        'For each row, record the approved component maker and model; drawing and sample revision; report pages identifying the tested configuration; fuse and cable references; production date and lot; retail-pack and manual revision; carton range and quantity; sampled carton numbers; findings; and the person authorized to close each finding.',
        'Agree coverage before the inspection. If different lots use different component suppliers, make those differences visible in the sample plan. Record unopened or inaccessible stock explicitly. A sample can document the units checked; it cannot prove that every unobserved carton contains the same components.',
      ],
      bullets: [
        'Missing report-to-model mapping: keep technical coverage open for the importer or laboratory to resolve.',
        'Wrong plug, fuse, lead or adapter in a sampled carton: identify the affected range and segregate it before authorizing replacement.',
        'Mixed old and new component revisions: retain separate lot and carton identities; do not merge them under one cleared SKU.',
        'Complete records and acceptable agreed observations: submit the identified scope to the buyer for a documented release decision.',
      ],
    },
    {
      id: 'after-rework',
      title: 'What evidence closes a plug replacement or rework hold?',
      paragraphs: [
        'A supplier message saying “all plugs replaced” is not a release record. Obtain the approved replacement specification, component source, affected quantity, first and last carton numbers, rework instruction, completion record, and the qualified decision on whether the change affects existing safety evidence.',
        'Keep removed parts and uncleared stock segregated. Re-inspect the corrected carton range against the approved replacement, then check ratings, labels, manuals and the packing list again. Record any cartons that were sealed, moved or unavailable; those limitations must remain visible in the buyer’s decision.',
        'Do not bend, file or otherwise improvise changes to plug pins, substitute a different fuse rating, or accept a loose converter as an automatic fix. A fit trial in one socket is not a conformity test. Controlled electrical, dimensional and other safety testing belongs in the qualified test plan, not an improvised factory demonstration.',
        'If goods have already been supplied, pass the issue promptly to the responsible importer and product-safety team. A shipment checklist does not replace their assessment of reporting, corrective action or recall responsibilities.',
      ],
      bullets: [],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Rule and configuration scope are confirmed',
      whatToConfirm: 'Qualified parties map the destination, product, plug, adapter, cable, fuse, standards, tests, markings, documents, and importer responsibilities',
      buyerDecision: 'Continue production, clarify scope, change the configuration, obtain specialist review, or hold the order.',
    },
    {
      riskNode: 'Technical evidence matches production',
      whatToConfirm: 'Manufacturer, factory, model, adapter, plug, fuse, cable, ratings, tested sample, reports, declarations, and revisions align',
      buyerDecision: 'Release after qualified approval, amend the file, assess the change, retest, replace components, or stop.',
    },
    {
      riskNode: 'Physical samples and cartons match',
      whatToConfirm: 'Sampled units use the approved plug, adapter, fuse, cable, ratings, labels, instructions, retail pack, and destination segregation',
      buyerDecision: 'Approve, expand inspection, segregate stock, rework, replace, or hold payment and pickup.',
    },
    {
      riskNode: 'Corrections are controlled',
      whatToConfirm: 'Affected quantities and cartons are identified, corrected to approved instructions, documented, and re-checked without mixed old stock',
      buyerDecision: 'Release the cleared range, hold affected cartons, re-inspect, retest, or delay the shipment.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Public-source update: September 2026 candle warmer lamp recall, earlier OPSS adapter reports, and original Which? charger testing checked during this update. The new coverage and rework controls are Huang Sourcing editorial recommendations, not findings from inspecting those products.',
    'Independent Which? June 2026 marketplace charger testing and Electrical Safety First marketplace research used as public-attention and recurring-risk context.',
    'Current OPSS electrical-equipment guidance distinguishes Great Britain and Northern Ireland; product-specific classification, conformity and corrective-action decisions remain with qualified parties.',
    'Buyer-approved specifications, market decision, test plan, technical files, drawings, labels, manuals, golden sample, change records, packed goods, carton map, and correction evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://www.gov.uk/product-safety-alerts-reports-recalls/product-recall-candle-warmer-lamp-sold-via-tiktok-2606-0188',
      label: 'UK OPSS — September 2026 candle warmer lamp recall',
      note: 'Primary notice 2606-0188: plug dimensional findings, fire risk, end-user recall and marketplace listing removal.',
    },
    {
      href: 'https://www.gov.uk/product-safety-alerts-reports-recalls/product-safety-report-ac-adaptor-pd-65w-2605-0030',
      label: 'UK OPSS - AC Adaptor PD-65W safety report',
      note: 'Primary May 2026 public case documenting the China-origin adapter, plug-face and fuse findings, high fire risk, border rejection, destruction, and marketplace removal.',
    },
    {
      href: 'https://www.gov.uk/product-safety-alerts-reports-recalls/product-safety-report-ac-adaptor-plug-sold-via-amazon-2601-0303',
      label: 'UK OPSS - AC Adaptor Plug safety report',
      note: 'Independent January 2026 official case documenting plug-face and pin-sleeve dimensional findings, electric-shock risk, marking issues, border rejection, and destruction.',
    },
    {
      href: 'https://www.gov.uk/product-safety-alerts-reports-recalls?product_risk_level=high',
      label: 'UK OPSS - current high-risk product actions',
      note: 'Official database view showing repeated 2026 electrical-product actions, including import rejection, destruction, listing removal, and recalls.',
    },
    {
      href: 'https://www.which.co.uk/policy-and-insight/article/phone-chargers-sold-on-amazon-haul-bq-and-ebay-can-electrocute-and-explode-which-warns-aa7Rq0y8duOB',
      label: 'Which? - June 2026 phone charger investigation',
      note: 'Independent testing context covering 15 marketplace chargers and reported electric-shock, fire, explosion, insulation, internal-spacing, and plug-pin failures.',
    },
    {
      href: 'https://www.gov.uk/government/publications/electrical-equipment-safety-regulations-2016',
      label: 'UK OPSS - electrical equipment guidance for GB and NI',
      note: 'Official guidance collection with separate Great Britain and Northern Ireland documents on electrical equipment and economic-operator obligations.',
    },
    {
      href: 'https://www.electricalsafetyfirst.org.uk/policy-and-research/reports/online-marketplace-research/',
      label: 'Electrical Safety First - online marketplace research',
      note: 'Independent institutional research on likely non-compliant electrical products and the limits of voluntary marketplace safeguards.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Product name, model, SKU, destination, intended user, rated voltage and frequency, wattage, adapter or lead type, connector, cable, fuse, order quantity, carton count, and production dates',
    'Manufacturer, importer or other responsible economic-operator details, factory and component suppliers, purchase order, bill of materials, approved drawings, and golden sample',
    'Qualified rule and standard map, test plan, laboratory details, full reports, declarations, risk assessment, component approvals, and change assessments',
    'Approved product and packaging labels, rating plates, model and batch coding, UKCA or CE decision, warnings, manuals, retail pack, barcode, and carton artwork',
    'Packing list, carton map, lot records, destination segregation, affected-quantity controls, approved correction instructions, and re-check decision rules',
    'Balance-payment deadline, forwarder pickup date, factory contact, importer release authority, and clear rules for which mismatches block release',
  ],
  redFlags: [
    'The supplier offers one adapter report for several plugs, housings, wattages, factories, component sets, or destination variants without a qualified family assessment',
    'Report photos, model numbers, applicant, manufacturer, factory, ratings, plug, fuse, cable, or adapter details do not match the production order',
    'The shipment includes loose travel converters or a non-UK lead even though the approved sales configuration requires a compliant UK plug or converter system',
    'Sample cartons mix old and new plug faces, adapter models, ratings, labels, manuals, component suppliers, or destination packs',
    'A UKCA or CE logo, generic certificate, supplier declaration, plug photo, weight, or simple continuity check is presented as the main safety evidence',
    'The factory changes the plug, fuse, cable, PCB, transformer, insulation, housing, supplier, factory, rating, label, manual, or packaging after testing',
    'The correction plan has no affected quantity, segregation record, carton range, approved instruction, specialist review, or repeat check',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible plugs, adapters, fuses, cables, ratings, markings, labels, manuals, packs, cartons, supplier files, and correction records with buyer-approved references in China',
    'Huang Sourcing does not decide legal scope, certify BS 1363 or other standard conformity, perform electrical or destructive safety tests, approve UKCA or CE use, authenticate reports, or provide legal advice',
    'Visual inspection and simple measurements cannot prove electrical safety, internal clearances, insulation, material properties, flammability, fuse performance, electromagnetic compatibility, product durability, or market compliance',
    'Sampling cannot guarantee every unit outside the agreed scope, and sealed cartons, mixed lots, poor traceability, inaccessible construction, or restricted factory access reduce confidence',
    'The UK importer, manufacturer, competent laboratory, approved body where applicable, product-safety specialist, marketplace team, customs broker, or counsel remains responsible for product-specific decisions',
    'UK legislation, standards, conformity-marking rules, platform requirements, and enforcement guidance can change; reconfirm time-sensitive instructions before testing, production, payment, listing, and shipment',
  ],
  relatedLinks: [
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Control model, rating, importer, manual, barcode, retail-pack, carton, and artwork revisions before final payment.',
    },
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC inspection before balance payment',
      note: 'Connect product, workmanship, quantity, packaging, and evidence findings to a documented payment hold point.',
    },
    {
      href: preShipmentBeforePickupArticleHref,
      label: 'Pre-shipment inspection before forwarder pickup',
      note: 'Verify corrected stock and destination pack-out while the supplier still controls the goods.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define the photos, model traceability, sampled measurements, mismatches, correction evidence, and scope limits the report should show.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related supplier, inspection, packaging, payment, and pickup decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Can a visual inspection prove a UK plug complies with BS 1363?',
      answer: 'No. Inspection can compare visible features and buyer-specified measurements with approved references, but full conformity needs the applicable controlled tests, competent laboratory work, technical evidence, and qualified product-specific decision.',
    },
    {
      question: 'Is a UKCA or CE mark enough to release the order?',
      answer: 'No. A visible mark is one part of the physical evidence. The applicable conformity route, reports, declarations, risk assessment, responsible parties, labels, instructions, and actual production configuration still need to align.',
    },
    {
      question: 'What if the supplier changes the adapter after testing?',
      answer: 'Pause release and disclose the exact change to the importer, laboratory, and product-safety adviser. They should decide whether the existing evidence still applies or an assessment, file amendment, or new testing is needed.',
    },
    {
      question: 'Should buyers accept a loose EU-to-UK travel converter?',
      answer: 'Do not assume it is acceptable. The qualified UK compliance plan should define the permitted sales configuration. Compare the physical order only with that approved configuration and hold any substituted or mixed pack-out.',
    },
    {
      question: 'Can Huang Sourcing certify UK electrical-product compliance?',
      answer: 'No. Huang Sourcing can compare China-side physical and document evidence with buyer-approved references. Legal classification, standard selection, testing, conformity assessment, declarations, and market approval remain with qualified parties.',
    },
  ] satisfies FaqItem[],
}

export function makeUkPlugCheckChinaSourcingArticleMetadata(): Metadata {
  const article = ukPlugCheckChinaSourcingArticle
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
      publishedTime: article.publishedDateIso,
      modifiedTime: article.modifiedDateIso,
      images: getArticleOpenGraphImages(article),
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.image.src],
    },
  }
}

export function makeUkPlugCheckChinaSourcingArticleJsonLd() {
  return [
    makeArticleJsonLd(ukPlugCheckChinaSourcingArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'UK plug and electrical-goods pre-shipment release checklist',
      itemListElement: ukPlugCheckChinaSourcingArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
