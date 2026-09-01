import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  preShipmentBeforePickupArticleHref,
  pullStringTeethingToyChecksChinaArticleHref,
  qcBeforeBalanceArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  rattleTeetherChecksChinaArticleHref,
  resourceGuideHref,
  verifyChinaLabTestReportArticleHref,
} from '@/lib/site-links'

type SourceLink = { href: string; label: string }
type ArticleSection = {
  bullets?: string[]
  citations?: SourceLink[]
  id: string
  paragraphs: string[]
  title: string
}
type CheckGroup = { items: string[]; title: string }
type DecisionRow = { buyerDecision: string; evidence: string; riskNode: string }
type RelatedLink = { href: string; label: string; note: string }
type SourceNote = SourceLink & { note: string }

export const cpscHabaRattleRecall =
  'https://www.cpsc.gov/Recalls/2026/HABA-USA-Recalls-Rainbow-Rattle-Grasping-and-Teething-Toys-Due-to-Risk-of-Serious-Injury-or-Death-from-Choking-and-Ingestion-Hazards'
const habaRattleRecall =
  'https://www.habausa.com/pages/rainbow-rattle-grasping-and-teething-toy-recall'
const cpscToySafetyGuidance =
  'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Toy-Safety'
const cpscSmallPartsGuidance =
  'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Small-Parts-for-Toys-and-Childrens-Products'
const cpscTestingCertification =
  'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification'
const targetRecallList =
  'https://www.target.com/help/articles/news-safety/product-recalls'

export const rattleTeetherChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: rattleTeetherChecksChinaArticleHref,
  title: 'Rattle and Teether Checks Before Shipping from China',
  metaTitle: 'Rattle and Teether Checks Before China Shipment',
  metaDescription:
    'Check rattle and teether connections, small components, exact models, qualified evidence, production lots, labels, and cartons before shipment from China.',
  publishedDate: 'September 2, 2026',
  publishedDateIso: '2026-09-02T03:27:47+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Rattle and Teether Checks Before Shipping from China',
  eyebrow: 'Connection design - qualified evidence - production lot - release',
  image: {
    alt: 'Neutral AI illustration of an unbranded infant rattle and teether at a buyer-side inspection table with caliper, magnifier, sample bag, and blank batch tag',
    height: 900,
    src: '/images/rattle-teether-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/rattle-teether-checks-china.webp', width: 1600 },
    { height: 900, src: '/images/rattle-teether-checks-china-4x3.webp', width: 1200 },
    { height: 900, src: '/images/rattle-teether-checks-china-1x1.webp', width: 900 },
  ],
  intro:
    'Before paying the balance or releasing a rattle or teether order from China, freeze the exact product category, intended age, components, cord or elastic path, knots, crimps, fasteners, approved sample, qualified use-and-abuse evidence, production changes, tracking labels, lots, retail packs, and cartons. Hold any lot when the evidence and finished goods do not describe one controlled construction.',
  answerSummary:
    'A visual pass cannot prove that a connection will retain every component through foreseeable use and abuse. Use four connected gates: define the exact product and destination requirements, map qualified evidence to that construction, compare sampled production with approved references, and trace destructive samples, corrections, and release authority to the shipped lots. Routine inspection can document identity, visible assembly, dimensions, workmanship, labels, quantity, and pack-out; it cannot certify compliance or eliminate choking and ingestion risk.',
  primaryCta: { label: 'Check Rattles Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side rattle and teether evidence and quality check before shipment.

Destination, importer, sales channel, intended age, and product classification:
Exact models, components, connection design, factory, and subcontractors:
Approved samples, drawings, bill of materials, specifications, and change history:
Applicable requirements, qualified test plan, CPC, reports, and lot-level records:
Production dates, lots, quantities, retail packs, sets, and carton map:
Tracking labels, warnings, instructions, barcodes, and online-listing references:
Known loose parts, knot, elastic, fastener, surface, packaging, or complaint issues:
Balance-payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#define-product', label: 'Define the product' },
    { href: '#evidence-chain', label: 'Evidence chain' },
    { href: '#physical-checks', label: 'Factory checks' },
    { href: '#test-boundary', label: 'Test boundary' },
    { href: '#change-control', label: 'Change control' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze destination, responsible party, intended age, product category, exact model, dimensions, materials, component list, cord or elastic path, connection method, factory, lot, retail pack, and carton map',
    'Have qualified parties identify the current rules and test scope for the exact rattle, teether, toy, or combination product; do not apply a generic toy checklist as a legal determination',
    'Map complete test and certification records to the exact tested construction, sample, factory, intended age, method, conditioning, results, photographs, date, and applicable production version',
    'Compare sampled production with approved drawings, bill of materials, sample, component count, knots, crimps, fasteners, molded joints, surface condition, dimensions, labels, instructions, barcodes, and packaging',
    'Keep visual and dimensional inspection separate from qualified tension, torque, use-and-abuse, impact, compression, soaking, bite, chemical, and other destructive or product-altering work',
    'Select any destructive samples from named production lots, preserve raw results and failure photos, and prevent tested units from returning to saleable stock',
    'Hold loose or accessible components, irregular knots, stretched or damaged elastic, changed materials, sharp or rough areas, mixed builds, missing evidence, mismatched labels, and untraceable cartons',
    'Release only named models, lots, retail packs, and carton ranges after controlled correction and repeat inspection or qualified re-testing where the change or failure requires it',
  ],
  checkGroups: [
    {
      title: 'Controlled product identity',
      items: [
        'Purchase order, drawing, bill of materials, approved sample, test report, certificate, tracking label, barcode, online listing, packing list, and carton identify the same model and intended age',
        'Factory, subcontractor, materials, component count, cord or elastic, knot, crimp, fastener, molded joint, production date, lot, retail pack, and approved changes are traceable',
      ],
    },
    {
      title: 'Qualified evidence',
      items: [
        'The buyer-approved requirements and test plan distinguish product classification, intended age, small components, rattle or teether geometry, use-and-abuse work, substances, labeling, and certification',
        'Complete records identify issuer, applicant, manufacturer, factory, exact model, tested sample, methods, conditioning, results, photos, dates, deviations, and limits; a cover page or similar-model report is not enough',
      ],
    },
    {
      title: 'Finished goods and pack-out',
      items: [
        'Sampled components, knots, crimps, fasteners, elastic path, molded parts, wood surfaces, dimensions, labels, instructions, retail packs, sets, and cartons match approved references',
        'Visible looseness, gaps, fraying, damaged elastic, rough edges, cracks, splinters, coating defects, contamination, mixed builds, damage, and packaging contact are recorded by model and lot',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Hold tags, affected quantity, defects, sacrificed samples, test results, supplier changes, rework method, repeat checks, cleared lots, and unresolved lots remain separate and traceable',
        'The release record names exact models, intended age, production dates, lots, retail packs, destination labels, carton ranges, open conditions, and the buyer-authorized decision maker',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why rattle and teether release evidence matters now',
      paragraphs: [
        'On August 27, 2026, the U.S. Consumer Product Safety Commission announced a recall of about 2,000 China-made HABA Rainbow Rattle Grasping and Teething Toys. CPSC said a glued knot on the elastic cord could become untied and allow access to small wooden and plastic pieces, creating choking and ingestion hazards. The public notice identifies item number 2012261001 and batch code 0925, reports two knot failures, and states that no injuries had been reported.',
        'The official company notice independently describes the same connection failure and tells consumers to cut the elastic cord before disposal. Target also added the product to its current recall list. These records show active regulator, company, and retail attention around one exact construction; they do not establish a universal defect in rattles, teethers, Chinese factories, or similar-looking products.',
        'The sourcing lesson is narrower and practical: a product can look complete at final inspection while the safety-critical connection, qualified use-and-abuse evidence, production version, or lot traceability remains unresolved. Buyers need the document-to-product chain before release, not a conclusion inferred from a clean appearance.',
      ],
      bullets: [
        'Treat component retention, cord or elastic construction, knot or fastener method, change control, evidence scope, lot traceability, and intended-age labeling as release-critical inputs',
        'Do not infer long-term retention from appearance, one hand-pull demonstration, a supplier video, a marketplace listing, or another model’s report',
        'Link qualified destructive samples to production lots without presenting the surviving saleable sample as the tested unit',
        'Use balance-payment and pickup leverage while affected lots, test samples, retail packs, labels, and cartons can still be isolated and corrected',
      ],
      citations: [
        { href: cpscHabaRattleRecall, label: 'CPSC HABA rattle and teether recall 26-719' },
        { href: habaRattleRecall, label: 'HABA USA company recall notice' },
        { href: targetRecallList, label: 'Target current product recall list' },
      ],
    },
    {
      id: 'define-product',
      title: 'Define the exact rattle or teether before choosing checks',
      paragraphs: [
        'Start with destination, responsible party, intended age, use, exact model, whether the item is a rattle, teether, toy, feeding accessory, or combination product, and every material and component. Freeze the outer dimensions, shapes, openings, wood species or polymer grade, coatings, colorants, cord or elastic material, knot, crimp, staple, adhesive, molded capture, fastener, component sequence, surface finish, instructions, labels, factory, and bill-of-material revision.',
        'A rigid rattle, ring rattle, beaded elastic rattle, wood-and-polymer grasping toy, liquid-filled teether, molded teething ring, plush combination, and detachable accessory are not one controlled construction. Product classification and applicable requirements can change with age grading, shape, materials, moving parts, intended use, and marketing claims.',
        'CPSC’s current toy guidance distinguishes rattles, teethers, small objects, cords and elastics, accessible edges and points, and other product-specific topics. A qualified party should determine which requirements apply. The factory-side inspector’s role is to compare the actual lot with controlled references, not to invent classification or acceptance criteria during the visit.',
      ],
      bullets: [
        'Separate rattle, teether, toy, combination product, removable accessory, packaging component, and spare part before setting evidence and sampling',
        'Freeze every element that can affect component release, geometry, cutting or splinter risk, chemical exposure, cleanability, labeling, or traceability',
        'Match physical product, retail packaging, age grade, warnings, instructions, barcode, tracking label, online listing, and intended-use claims',
        'Reject “same family” evidence when the tested materials, connection path, component geometry, factory, intended age, conditioning, or model cannot be mapped to shipment',
      ],
      citations: [
        { href: cpscToySafetyGuidance, label: 'CPSC Toy Safety Business Guidance' },
        { href: cpscSmallPartsGuidance, label: 'CPSC small-parts business guidance' },
      ],
    },
    {
      id: 'evidence-chain',
      title: 'What should the test and production evidence connect?',
      paragraphs: [
        'Build an evidence chain from the buyer-approved specification to the exact production version. Qualified records should identify the tested sample, intended age, drawing and bill-of-material revision, materials, component count, connection method, conditioning, use-and-abuse sequence, measurements, equipment, sample size, acceptance criteria, actual results, failures, photographs, deviations, and report date.',
        'For children’s products subject to applicable CPSC rules, the domestic manufacturer or importer is responsible for the required certificate, and third-party testing must use a CPSC-accepted laboratory for the applicable requirements. A supplier’s declaration, cropped cover page, laboratory logo, or certificate number does not by itself show that the shipped model, factory, sample, and current construction were covered.',
        'Connect incoming-material and line records to the same evidence. Cord or elastic lot, elongation or diameter where controlled, component dimensions, knot or crimp setup, adhesive lot and cure where relevant, molded-part settings, assembly fixtures, operator checks, rework, production date, and final lot tests should remain traceable when the control plan requires them.',
      ],
      bullets: [
        'Verify issuer, laboratory acceptance scope, applicant, manufacturer, factory, exact model, sample identity, intended age, methods, criteria, results, photographs, dates, and report integrity',
        'Escalate cropped reports, edited results, unsupported model families, missing sample photos, inconsistent names or dates, undisclosed failures, or evidence issued to another factory',
        'Keep legal and marketplace classification, qualified product validation, routine inspection, lot testing, certification, and the buyer’s commercial release as separate decisions',
        'Route any material, component, connection, factory, age-grade, label, or process change through documented review before relying on earlier evidence',
      ],
      citations: [
        { href: cpscTestingCertification, label: 'CPSC testing and certification guidance' },
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing lab report verification guide' },
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A routine inspection can compare sampled saleable goods with approved drawings, samples, specifications, labels, and packing instructions while the lot remains accessible. Useful records include exact model, intended age, component count and sequence, visible knot or closure position, cord or elastic routing, molded joints, accessible dimensions, weight, workmanship, surface condition, markings, labels, quantities, retail packs, damage, and carton identity.',
        'Under appropriate lighting and magnification, document visible gaps, irregular knots, incomplete crimps, exposed fastener parts, frayed or damaged cord, stretched elastic, loose components, cracks, splinters, burrs, sharp unintended edges, coating damage, residue, contamination, color or material mismatch, and packaging contact. Preserve reference-scale photographs and identify every finding by sample, model, lot, and carton.',
        'Use calibrated tools only for buyer-defined accessible measurements and record the method, tolerance, reading, and limitation. Do not pull, twist, bite, soak, impact, compress, or otherwise alter saleable samples unless the approved plan designates them as destructive samples and defines safe equipment, acceptance, and disposition.',
      ],
      bullets: [
        'Check identity first: model, intended age, materials, component count, factory, production date or lot, retail pack, label, barcode, packing list, and carton marks',
        'Compare dimensions, component sequence, connection route, knot or crimp position, molded captures, surfaces, finish, and approved workmanship references',
        'Photograph close views of connection areas, components, openings, edges, wood grain, coatings, labels, instructions, retail contents, and carton identity',
        'Quantify every mismatch by affected model, sample, defect classification, lot, quantity, retail pack, and carton range',
      ],
    },
    {
      id: 'test-boundary',
      title: 'Separate routine inspection from qualified use-and-abuse testing',
      paragraphs: [
        'Connection retention and component release usually require destructive or product-altering work. A qualified plan may include tension, torque, impact, drop, compression, flexure, soaking, bite simulation, foreseeable-use conditioning, and post-test small-component or geometry evaluations. Relevant methods, sequences, equipment, sample sizes, safety controls, acceptance criteria, and retest rules depend on the exact product and market.',
        'If the buyer wants factory-side destructive checks, identify sacrificed units in advance, select them from the target lot under traceable sampling, use a controlled area and calibrated equipment, preserve raw readings and failure photographs, and prevent tested units from returning to saleable stock. A supplier-selected demonstration sample is not equivalent to lot-linked sampling.',
        'Stop when the approved method, fixture, conditioning, operator competence, measurement range, reference sample, acceptance criterion, or disposal path is missing. Route regulatory and engineering validation to qualified parties; do not improvise a compliance or safety claim from an informal pull or twist test.',
      ],
      bullets: [
        'Define saleable inspection samples, destructive lot samples, laboratory samples, retains, and rework samples as separate populations',
        'Record conditioning, sequence, equipment ID, calibration status, force or torque range, observations, raw results, failures, photos, and disposition',
        'Treat a detached or accessible component, connection failure, or invalid method as a traceable hold condition, not a result to average away',
        'Require qualified review before changing a method, acceptance criterion, sample size, or retest rule after a failure',
      ],
    },
    {
      id: 'change-control',
      title: 'How should buyers control changes, rework, and release?',
      paragraphs: [
        'Require written notification before any change to material, component supplier, cord or elastic, knot, crimp, adhesive, fastener, mold, component sequence, dimensions, coating, assembly fixture, factory, subcontractor, age grade, label, or packaging. Compare the proposed version with approved evidence before mixing it into production.',
        'When inspection or qualified testing finds a failure, quarantine affected lots and carton ranges. Record the issue, suspected scope, disposition, rework instruction, removed stock, replacement components, line clearance, repeat-test plan, re-inspection sampling, result, and buyer authorization. Do not conceal an unresolved connection failure by swapping only the visibly loose samples.',
        'Release is a named-lot decision. The closing record should identify exact models, production dates, quantities, destructive sample IDs, completed corrections, passing evidence, retail packs, labels, carton ranges, remaining exceptions, and the buyer-authorized person who accepted the documented limits.',
      ],
      bullets: [
        'Do not mix pre-change and post-change stock under one model, lot, report, certificate, or carton range without traceable review',
        'Segregate failed, reworked, re-tested, re-inspected, cleared, and unresolved quantities physically and in records',
        'Verify that corrected labels, instructions, tracking marks, retail packs, barcodes, and cartons still map to the corrected product',
        'Release only after required evidence and physical checks close; a shipping deadline does not resolve an open product-risk condition',
      ],
      citations: [
        { href: qualityControlChinaManufacturingPlanArticleHref, label: 'Huang Sourcing manufacturing QC plan' },
        { href: cpscHabaRattleRecall, label: 'CPSC exact item and batch record' },
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product classification or intended age is unresolved',
      evidence: 'The listing, packaging, specification, reports, and factory use different product categories, age grades, or model descriptions.',
      buyerDecision: 'Hold specification and production release. Obtain qualified classification and requirements review before using inspection as a release gate.',
    },
    {
      riskNode: 'Exact-model connection or use-and-abuse evidence is missing',
      evidence: 'Only a supplier declaration, cover page, similar model, informal pull video, or untraceable report is available.',
      buyerDecision: 'Hold the affected model and lot. Obtain qualified exact-product evidence and resolve applicability before payment or pickup.',
    },
    {
      riskNode: 'Finished goods differ from approved construction',
      evidence: 'Materials, component count, cord, elastic, knot, crimp, fastener, molded capture, factory, label, age grade, or retail pack differs from the controlled reference.',
      buyerDecision: 'Quarantine affected lots and cartons. Document the change, assess evidence impact, correct, and re-inspect or re-test as required.',
    },
    {
      riskNode: 'Loose components or visible assembly damage is found',
      evidence: 'Lot-linked inspection or qualified tests show accessible parts, irregular connections, fraying, cracks, rough areas, coating damage, or failed retention.',
      buyerDecision: 'Do not release by averaging findings away. Define scope, root cause, rework or rejection, qualified retest, and repeat inspection against a written disposition.',
    },
    {
      riskNode: 'Evidence and physical lot align',
      evidence: 'Exact models, intended age, construction, reports, changes, inspection results, destructive samples, labels, quantities, lots, packs, and cartons are traceable with no unresolved release condition.',
      buyerDecision: 'Buyer may release only the named models, lots, retail packs, and carton ranges; retain the evidence package and stated limits.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Primary case record: CPSC recall 26-719, announced August 27, 2026, for an exact China-made rattle and teether item and batch',
    'Company record: HABA USA’s public recall page describing the glued-knot failure and consumer disposal process',
    'Current official guidance: CPSC toy-safety, small-parts, and testing-and-certification pages, with classification left to qualified parties',
    'Retail attention: Target’s current product recall list showing the item among current general-merchandise actions',
    'Buyer-side analysis: product definition, evidence mapping, visible inspection, destructive-test boundaries, change control, lot segregation, and payment or shipment release',
  ],
  whatToSend: [
    'Destination markets, responsible party, importer, sales channels, intended age, product category, intended use, claims, and deadlines',
    'Exact model list, retail packs, drawings, dimensions, component sequence, material specifications, bill of materials, approved samples, and revision history',
    'Connection details: cord or elastic material, path, knot, crimp, staple, adhesive, fastener, molded capture, component geometry, wood or polymer parts, coatings, and surface finish',
    'Applicable-requirements assessment, qualified risk assessment, test plan, complete reports, Children’s Product Certificate where applicable, raw lot-test records, deviations, failures, and retest rules',
    'Factory and subcontractor identities, assembly lines, incoming-material records, connection-process controls, production dates, lots, quantities, and change notices',
    'Tracking labels, age grade, warnings, instructions, barcodes, online-listing copy, retail artwork, set contents, packing list, carton marks, and destination segregation plan',
    'Inspection sampling plan, approved defect classifications and limits, accessible measurements, destructive sample selection, methods, equipment, criteria, and disposition',
    'Known loose components, knot or elastic failures, cracks, splinters, coating issues, rework, mixed versions, prior shipments, balance-payment terms, and pickup booking',
  ],
  scopeLimits: [
    'A routine sampled inspection does not prove that every connection or component will remain intact through transport, storage, mouthing, cleaning, foreseeable use and abuse, aging, or the full product life.',
    'Visual appearance, dimensions, a label, one pull demonstration, or a passing saleable sample do not establish compliance, safe age grading, chemical safety, or applicability of another model’s report.',
    'Huang Sourcing does not determine legal classification, select regulatory requirements, create engineering acceptance criteria, certify a product, issue laboratory results, approve recall duties, or replace qualified legal, compliance, engineering, or medical advice.',
    'Qualified tension, torque, impact, compression, use-and-abuse, substance, migration, durability, and lifecycle work requires approved methods, suitable equipment, trained personnel, controlled samples, and explicit acceptance criteria.',
    'The cited recall concerns one named item and batch. It does not prove every rattle, teether, Chinese supplier, factory, material, connection design, model, or lot has the same defect or cause.',
    'A buyer remains responsible for product design, age grading, destination-market obligations, supplier instructions, reporting and corrective-action duties, acceptance criteria, payment release, shipment release, and downstream monitoring.',
  ],
  relatedLinks: [
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Scope a buyer-side exact-model, lot, workmanship, label, quantity, and pack-out comparison before shipment.',
    },
    {
      href: pullStringTeethingToyChecksChinaArticleHref,
      label: 'Pull-string teething toy checks',
      note: 'Review the separate string-dimension and throat-reach risk node for pull-string designs.',
    },
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC before balance payment',
      note: 'Connect findings, missing evidence, corrective action, and rechecks to the payment-release decision.',
    },
    {
      href: preShipmentBeforePickupArticleHref,
      label: 'Pre-shipment inspection before pickup',
      note: 'Keep unresolved lots, packs, and cartons from moving before closure.',
    },
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China lab report',
      note: 'Check issuer, applicant, model, factory, sample, method, result, and scope.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Align model identity, age grade, tracking label, warnings, barcode, retail pack, and carton.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Turn observations, defects, photos, quantities, affected lots, and limits into a release record.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, packaging, payment, pickup, and shipment decisions.',
    },
  ] satisfies RelatedLink[],
  sourceNotes: [
    {
      href: cpscHabaRattleRecall,
      label: 'U.S. CPSC - HABA rattle and teether recall 26-719',
      note: 'Primary August 27, 2026 case record for the exact item and batch, connection failure, hazard, affected quantity, incident count, sale period, channels, importer, China origin, and remedy.',
    },
    {
      href: habaRattleRecall,
      label: 'HABA USA - company recall notice',
      note: 'Official company record describing the voluntary recall, glued-knot failure, affected item, and consumer disposal steps.',
    },
    {
      href: cpscToySafetyGuidance,
      label: 'U.S. CPSC - Toy Safety Business Guidance',
      note: 'Current official overview of the mandatory toy standard and product-specific topics including small objects, cords and elastics, teethers, and rattles.',
    },
    {
      href: cpscSmallPartsGuidance,
      label: 'U.S. CPSC - small-parts guidance',
      note: 'Official explanation of the small-parts ban, cylinder concept, use-and-abuse break-off context, labeling, and certification boundaries.',
    },
    {
      href: cpscTestingCertification,
      label: 'U.S. CPSC - testing and certification',
      note: 'Official source for third-party testing, CPSC-accepted laboratories, certificates, and the responsible manufacturer or importer.',
    },
    {
      href: targetRecallList,
      label: 'Target - current product recall list',
      note: 'Current retailer record showing the HABA item added to the general-merchandise recall list on August 27, 2026.',
    },
  ] satisfies SourceNote[],
}

export function makeRattleTeetherChecksChinaArticleMetadata(): Metadata {
  const article = rattleTeetherChecksChinaArticle

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

export function makeRattleTeetherChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(rattleTeetherChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Rattle and teether pre-shipment release checklist',
      itemListElement: rattleTeetherChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
