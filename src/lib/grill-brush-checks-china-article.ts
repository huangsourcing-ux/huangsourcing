import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  grillBrushChecksChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  preShipmentBeforePickupArticleHref,
  qcBeforeBalanceArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
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

export const cpscCuisinartGrillBrushRecall =
  'https://www.cpsc.gov/Recalls/2026/Conair-Expands-Recall-of-Cuisinart-Grill-Brushes-Due-to-Ingestion-Hazard-Over-3-6-Million-Brushes-Now-Recalled'
const cpscNexgrillBrushRecall =
  'https://www.cpsc.gov/Recalls/2026/Nexgrill-Recalls-Over-10-2-Million-Metal-Wire-Bristle-Grill-Brushes-Due-to-Ingestion-Hazard-Sold-at-Home-Depot'
const cpscWeberBrushRecall =
  'https://www.cpsc.gov/Recalls/2026/Weber-Recalls-Over-3-2-Million-Metal-Wire-Bristle-Grill-Brushes-Due-to-Ingestion-Hazard'
const cpscBrushEnforcementStatement =
  'https://www.cpsc.gov/About-CPSC/Chairman/Peter-A-Feldman/Statement/CPSC-Expands-Enforcement-Targeting-Hazardous-Wire-Grill-Brushes-Manufactured-Overseas'
const healthCanadaBarbecueSafety =
  'https://www.canada.ca/en/health-canada/services/home-garden-safety/barbecue-safety.html'
const cdcWireBrushCaseSeries =
  'https://www.cdc.gov/mmwr/preview/mmwrhtml/mm61e0703a2.htm'
const ntdCuisinartRecallCoverage =
  'https://www.ntd.com/3-6-million-grill-brushes-recalled-after-users-swallow-bristles_1169298.html'

export const grillBrushChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: grillBrushChecksChinaArticleHref,
  title: 'Grill Brush Checks Before Shipping from China',
  metaTitle: 'Grill Brush Checks Before Shipping from China',
  metaDescription:
    'Check grill brush design, bristle retention evidence, exact models, production changes, labels, lots, and cartons before balance payment or shipment.',
  publishedDate: 'September 1, 2026',
  publishedDateIso: '2026-09-01T03:25:32+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Grill Brush Checks Before Shipping from China',
  eyebrow: 'Design choice - bristle evidence - production lot - release',
  image: {
    alt: 'Neutral AI illustration of an unbranded wire grill brush at a buyer-side inspection table with caliper, magnifier, checklist, and evidence bag',
    height: 900,
    src: '/images/grill-brush-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/grill-brush-checks-china.webp', width: 1600 },
    { height: 1200, src: '/images/grill-brush-checks-china-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/grill-brush-checks-china-1x1.webp', width: 1200 },
  ],
  intro:
    'Before paying the balance or releasing a grill brush order from China, freeze the destination, cleaning design, exact model, bristle or coil construction, material and attachment specifications, approved sample, qualified retention and durability evidence, production changes, labels, lot map, and cartons. Hold the affected lot when documents and finished goods do not describe one controlled product.',
  answerSummary:
    'For a metal wire-bristle brush, a visual pass is not enough. Use four connected gates: approve the product architecture and requirements, verify exact-model evidence, compare sampled production without damaging saleable goods, and trace any destructive testing or correction back to the shipped lots. A routine inspection can document identity, workmanship, dimensions, visible bristle condition, labels, quantities, and pack-out; it cannot prove long-term bristle retention or eliminate ingestion risk.',
  primaryCta: { label: 'Check Grill Brushes Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side grill brush evidence and quality check before shipment.

Destination, importer, sales channel, and intended use:
Exact models, cleaning design, materials, construction, and factory:
Approved samples, drawings, bill of materials, specifications, and change history:
Applicable requirements, qualified test plan, reports, and lot-level test records:
Production dates, lots, quantities, retail packs, sets, and carton map:
Labels, instructions, warnings, barcodes, and online-listing references:
Known bristle, coil, handle, scraper, corrosion, packaging, or complaint issues:
Balance-payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#define-product', label: 'Define the brush' },
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
    'Freeze destination, responsible party, exact model, cleaning architecture, materials, dimensions, bristle or coil geometry, handle and head attachment, scraper, production factory, lot, retail set, and carton map',
    'Have qualified parties identify current product-safety, chemical, food-contact adjacency, labeling, reporting, marketplace, and destination requirements; a generic supplier checklist is not a legal determination',
    'Prefer a bristle-free design when the buyer’s risk assessment supports it; changing from wire bristles to a coil, scraper, pad, stone, nylon, or another architecture requires its own hazard review and validation',
    'Map complete test records to the exact tested construction, material, factory, method, conditioning, sample size, acceptance criteria, results, deviations, photographs, and date',
    'Compare sampled production with the approved sample, drawings, bill of materials, head geometry, wire bundles, twist, anchor points, handle, scraper, finish, labels, instructions, quantities, and packaging',
    'Keep non-destructive finished-goods inspection separate from qualified destructive retention, fatigue, corrosion, wear, misuse, and lifecycle testing; define sacrificed samples and lot linkage before the visit',
    'Hold mixed or undocumented models, substituted wire or attachment methods, missing evidence, loose or irregular bristles, damaged heads, sharp unintended edges, corrosion, weak handles, mismatched labels, and untraceable cartons',
    'Release only named models, lots, sets, and carton ranges after controlled correction and repeat inspection or qualified re-testing where the change or failure requires it',
  ],
  checkGroups: [
    {
      title: 'Controlled product identity',
      items: [
        'Purchase order, drawing, bill of materials, approved sample, test report, label, instruction sheet, barcode, online listing, packing list, and carton identify the same model and cleaning design',
        'Factory, subcontractor, production dates, material grades, wire diameter or alternative cleaning element, head assembly, handle attachment, scraper, finish, lot, retail set, and approved changes are traceable',
      ],
    },
    {
      title: 'Qualified evidence',
      items: [
        'The buyer-approved test plan defines the product-specific hazards, conditioning, sample selection, destructive methods, acceptance criteria, records, failures, and retest rules',
        'Complete reports identify issuer, applicant, manufacturer, factory, exact model, tested sample, construction, methods, results, photos, dates, deviations, and limits; a cover page or similar-model report is not enough',
      ],
    },
    {
      title: 'Finished goods and pack-out',
      items: [
        'Sampled heads, bristle or coil arrays, anchors, twists, joints, handles, hanging loops, scrapers, finishes, labels, instructions, retail packs, sets, and cartons match approved references',
        'Visible loose strands, gaps, distorted bundles, burrs, cracks, weak joints, sharp unintended edges, corrosion, contamination, mixed builds, damage, and packaging contact are recorded by affected model and lot',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Hold tags, affected quantity, defects, sacrificed test samples, test results, supplier changes, rework method, repeat checks, cleared lots, and unresolved lots remain separate and traceable',
        'The release record names exact models, production dates, lots, retail sets, destination labels, carton ranges, open conditions, and the person authorized by the buyer to decide',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why grill brush release evidence matters now',
      paragraphs: [
        'On August 27, 2026, the U.S. Consumer Product Safety Commission expanded Conair’s recall of China-made Cuisinart metal wire-bristle grill brushes by about 1,905,805 units, bringing the stated total to 3,625,800. CPSC said small metal bristles could detach, remain on a grill or food, and be swallowed. The notice reports at least 54 detachment reports or reviews, including three people who sought medical treatment to remove bristles from the digestive tract or throat.',
        'That action was not an isolated model notice. CPSC had separately announced 2026 recalls covering more than 10.2 million Nexgrill wire-bristle brushes and more than 3.2 million Weber brushes. A CPSC chairman’s March statement described expanded enforcement attention to hazardous wire grill brushes made overseas. These are separate records with different firms and facts; they show a recurring risk node, not proof that every brush, supplier, factory, or design will fail.',
        'Health Canada’s current barbecue safety page also advises consumers to inspect a brush and grill before every use, replace a brush when bristles loosen, and consider non-metal alternatives. That end-user advice cannot substitute for a buyer’s design review or production validation, but it reinforces why the release decision must address both initial construction and wear over time.',
      ],
      bullets: [
        'Treat cleaning architecture, wire and anchor construction, production change control, evidence scope, lot traceability, and instructions as release-critical inputs',
        'Do not infer retention from appearance, one pull demonstration, a supplier video, a marketplace listing, or another brand’s test method',
        'Link qualified destructive samples to the production lot without presenting the surviving saleable sample as the tested unit',
        'Use balance-payment and pickup leverage while affected lots, retail sets, test samples, packaging, and records can still be isolated and corrected',
      ],
      citations: [
        { href: cpscCuisinartGrillBrushRecall, label: 'CPSC Cuisinart recall expansion' },
        { href: cpscNexgrillBrushRecall, label: 'CPSC Nexgrill grill brush recall' },
        { href: cpscWeberBrushRecall, label: 'CPSC Weber grill brush recall' },
        { href: cpscBrushEnforcementStatement, label: 'CPSC chairman enforcement statement' },
        { href: healthCanadaBarbecueSafety, label: 'Health Canada barbecue safety guidance' },
      ],
    },
    {
      id: 'define-product',
      title: 'Define the exact brush before choosing checks',
      paragraphs: [
        'Start with destination, responsible party, intended grill and cleaning use, exact model, retail set, head width and shape, wire-bristle, coil, scraper, pad, stone, nylon, or mixed architecture, material grades, wire or cleaning-element dimensions, bundle pattern, twist, staple, weld, adhesive or mechanical anchor, head-to-handle joint, handle material and length, hanging feature, finish, instructions, labels, factory, and bill-of-material revision.',
        '“Grill brush” is not one controlled construction. A tri-wire brush, flat wire panel, twisted-wire head, replaceable cleaning head, steam brush, coil scraper, and bristle-free pad can fail in different ways. A supplier’s family name or visual similarity does not make one model’s evidence applicable to the others.',
        'Record who made the product architecture and requirements decision, the official and specialist sources checked, assumptions, and unresolved questions. A buyer-side inspector should compare production with approved references, not invent the product specification at the factory gate.',
      ],
      bullets: [
        'Separate wire-bristle, wire-coil, scraper, nylon, pad, stone, steam, replaceable-head, and combination products before setting a sampling or test plan',
        'Freeze every part that can change detachment, fracture, sharp-edge, heat, corrosion, chemical, handling, or labeling risk',
        'Match product, instruction sheet, warning, packaging, barcode, online listing, replacement-head claim, and intended-use claim',
        'Reject “same series” evidence when the tested head, wire, anchor, material, handle joint, factory, conditioning, or model cannot be mapped to shipment',
      ],
    },
    {
      id: 'evidence-chain',
      title: 'What should the test and production evidence connect?',
      paragraphs: [
        'Build an evidence chain from the buyer-approved product specification to the exact production version. Qualified records should identify the tested sample, drawing and bill-of-material revision, wire or cleaning element, anchor method, handle and head construction, conditioning, use simulation, retention or durability method, measurement equipment, sample size, acceptance criteria, actual results, failures, photographs, deviations, and report date.',
        'Do not turn a generic pull number into a universal safety claim. Product-specific methods and acceptance criteria require qualified engineering and compliance judgment. A single new brush can look uniform and survive a simple pull yet still have an unexamined wear, heat, corrosion, fatigue, food-transfer, or misuse pathway.',
        'Connect incoming-material records and line controls to the same evidence. Wire grade and diameter, bundle count, crimp or twist geometry, staple or weld settings, adhesive lot and cure where relevant, molded-head material, handle fastener, process setup, in-process checks, tool maintenance, operator records, and final lot tests should remain traceable when required by the control plan.',
      ],
      bullets: [
        'Verify issuer, applicant, manufacturer, factory, exact model, sample identity, method, equipment, criteria, result, photographs, date, and report integrity',
        'Escalate cropped reports, edited results, unsupported model families, missing sample photos, inconsistent names or dates, undisclosed failures, or evidence issued to another factory',
        'Keep legal or marketplace compliance, qualified design validation, routine inspection, lot testing, and the buyer’s commercial release as separate decisions',
        'Route any change affecting risk through documented review before relying on earlier evidence',
      ],
      citations: [
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing lab report verification guide' },
        { href: cdcWireBrushCaseSeries, label: 'CDC wire-bristle injury case series' },
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A routine inspection can compare sampled saleable goods with approved drawings, samples, specifications, labels, and packing instructions while the lot remains accessible. The useful output is a traceable record of exact model, head geometry, visible bundle or coil pattern, spacing, alignment, anchor area, twists, joints, handle, scraper, finish, dimensions, weight, workmanship, labels, instructions, quantities, retail sets, damage, and carton identity.',
        'Under magnification, document visible loose or projecting strands, broken or bent wire, sparse or uneven zones, incomplete twists, exposed staple or anchor parts, cracks, burrs, sharp unintended edges, corrosion, residue, weak head-to-handle joints, deformation, and packaging contact that could damage the cleaning head. Preserve reference-scale photographs and identify every finding by sample, model, lot, and carton.',
        'Use calibrated tools only for buyer-defined accessible measurements and record method, tolerance, reading, and limitation. Do not bend, pull, scrape, heat, cycle, or otherwise alter saleable samples unless the approved inspection plan explicitly treats them as destructive samples and defines safe equipment, containment, acceptance, and disposition.',
      ],
      bullets: [
        'Check identity first: model, construction, factory, production date or lot, retail set, label, instruction, barcode, packing list, and carton marks',
        'Compare head width, overall length, handle and joint, scraper, cleaning-element layout, visible anchor pattern, finish, and approved workmanship references',
        'Photograph close views of head edges, wire or coil ends, attachment areas, joints, surface condition, packaging interfaces, labels, instructions, retail set contents, and carton identity',
        'Quantify each mismatch by affected model, sample, defect classification, lot, quantity, retail set, and carton range',
      ],
    },
    {
      id: 'test-boundary',
      title: 'Separate routine inspection from destructive retention and durability testing',
      paragraphs: [
        'Bristle retention and lifecycle behavior usually require destructive or product-altering work. A qualified plan may address initial retention, conditioned retention, repeated cleaning cycles, head and handle durability, corrosion, temperature exposure, cleaning chemicals, edge conditions, wear, misuse, and alternate designs. The relevant methods, sample sizes, equipment, safety controls, acceptance criteria, and retest rules are product- and market-specific.',
        'If the buyer wants factory-side destructive checks, identify sacrificed units in advance, select them from the target lot under traceable sampling, use a suitable controlled area and calibrated equipment, preserve raw readings and failure photographs, and prevent tested units from returning to saleable stock. A supplier-selected demonstration unit is not equivalent to lot-linked sampling.',
        'Stop when the approved method, fixture, containment, operator competence, reference sample, measurement range, acceptance criterion, or safe disposal path is missing. Route engineering validation and specialist laboratory work to qualified parties; do not improvise a safety claim from an informal pull test.',
      ],
      bullets: [
        'Define non-destructive inspection samples, destructive lot samples, laboratory samples, retains, and saleable stock as separate populations',
        'Record preconditioning, cycles, loads or measurements, equipment ID, calibration status, raw results, failures, photos, sample destruction, and lot linkage when the approved plan requires them',
        'Treat a failure as a hold and investigation trigger; do not average it away or replace the failed unit silently',
        'Repeat only under a documented disposition and retest rule that addresses why the first result failed',
      ],
    },
    {
      id: 'change-control',
      title: 'Control model expansion, substitutions, and mixed cartons',
      paragraphs: [
        'The Cuisinart public record matters partly because the recall scope expanded from identified models to additional models and all Cuisinart wire-bristle grill brushes. A buyer should therefore maintain a model-and-lot map that is wider than one convenient inspection sample and narrow enough to prevent unrelated constructions from inheriting a pass.',
        'Hold a lot when the factory changes wire, coil, head material, bundle count, anchor method, weld or staple settings, adhesive, handle joint, scraper, coating, subcontractor, tooling, production line, label, instruction, retail set, or packaging contact without documented review. Determine with qualified parties whether earlier evidence remains applicable and what comparison or revalidation is needed.',
        'After correction, segregate affected stock, record the authorized rework, verify the changed construction, repeat inspection on a defined sample, repeat qualified testing where the cause or change requires it, and map cleared units to exact cartons. Do not release merely because a supplier says all stock was checked.',
      ],
      bullets: [
        'Maintain a controlled model list with construction revision, test-report scope, production dates, lots, retail sets, and carton ranges',
        'Record the first and last affected lot or date, quarantined quantity, shipped quantity, samples, rework, scrap, retest, and residual uncertainty',
        'Keep failed, untested, corrected, retested, and released populations physically and digitally separate',
        'Authorize release at the buyer level only after every open evidence condition is visible in the final report',
      ],
      citations: [
        { href: cpscCuisinartGrillBrushRecall, label: 'CPSC expanded model-scope record' },
        { href: qualityControlChinaManufacturingPlanArticleHref, label: 'Huang Sourcing QC planning guide' },
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Bristle or cleaning architecture is still undecided',
      evidence: 'Risk assessment, intended-use definition, approved design, drawings, bill of materials, and specialist review are incomplete or conflict.',
      buyerDecision: 'Hold specification and production approval. Choose and validate the product architecture before treating factory inspection as a release gate.',
    },
    {
      riskNode: 'Exact-model retention or durability evidence is missing',
      evidence: 'Only a cover page, supplier declaration, similar model, informal pull video, or untraceable report is available.',
      buyerDecision: 'Hold the affected model and lot. Obtain qualified exact-product evidence and resolve applicability before payment or pickup.',
    },
    {
      riskNode: 'Finished goods differ from approved construction',
      evidence: 'Wire, bundle, anchor, head, joint, scraper, material, factory, label, instruction, or retail set differs from the controlled reference.',
      buyerDecision: 'Quarantine affected lots and cartons. Document the change, assess evidence impact, correct, and re-inspect or re-test as required.',
    },
    {
      riskNode: 'Visible loose strands, damage, corrosion, or weak assembly',
      evidence: 'Lot-linked inspection photographs and defect counts show saleable samples outside the approved workmanship or safety-related limits.',
      buyerDecision: 'Do not release by averaging findings away. Define scope, root cause, rework or rejection, and repeat checks against a written disposition.',
    },
    {
      riskNode: 'Evidence and physical lot align',
      evidence: 'Exact models, construction, reports, changes, inspection results, destructive samples, labels, quantities, lots, sets, and cartons are traceable with no unresolved release condition.',
      buyerDecision: 'Buyer may release only the named models, lots, retail sets, and carton ranges; retain the evidence package and stated limits.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Primary case record: CPSC recall 26-717, announced August 27, 2026, for the expanded Cuisinart metal wire-bristle grill brush population made in China',
    'Pattern check: separate 2026 CPSC Nexgrill and Weber recall records, kept distinct and not treated as proof of one shared root cause',
    'Current public guidance: Health Canada’s barbecue safety page on inspecting brushes, loose bristles, replacement, and non-metal alternatives',
    'Documented injury context: CDC’s public case series describing ingestion and removal of detached wire grill-cleaning bristles',
    'Independent recent coverage: an August 2026 report on the expanded Cuisinart recall and medical treatment described in the regulator record',
    'Buyer-side analysis: product definition, evidence mapping, finished-goods observation, destructive-test boundaries, change control, lot segregation, and payment or shipment release',
  ],
  whatToSend: [
    'Destination markets, responsible party, importer, sales channels, intended grills and cleaning use, target user, claims, and deadlines',
    'Exact model list, retail sets, drawings, dimensions, material specifications, bill of materials, approved samples, and revision history',
    'Cleaning architecture and construction details: wire, coil, scraper, pad, stone, nylon or combination; head, anchor, twist, staple, weld, adhesive, handle, joint, finish, and replacement parts',
    'Applicable-requirements assessment, qualified risk assessment, test plan, complete reports, raw lot-test records, deviations, failures, and retest rules',
    'Factory and subcontractor identities, production lines, process controls, incoming-material records, production dates, lots, quantities, and change notices',
    'Labels, instructions, warnings, barcodes, online-listing copy, retail-pack artwork, set contents, packing list, carton marks, and destination segregation plan',
    'Inspection sampling plan, approved defect classifications and limits, accessible measurements, destructive sample selection, safe methods, equipment, criteria, and disposition',
    'Known complaints, detachment findings, weak joints, corrosion, damage, rework, mixed versions, prior shipments, balance-payment terms, and pickup booking',
  ],
  scopeLimits: [
    'A routine sampled inspection does not prove that every wire bristle will remain attached through transport, storage, cleaning cycles, heat, corrosion, wear, misuse, or the full product life.',
    'Visual appearance, dimensions, a label, one pull demonstration, or a passing saleable sample do not establish compliance, durability, absence of ingestion risk, or applicability of another model’s report.',
    'Huang Sourcing does not determine legal classification, select regulatory requirements, create engineering acceptance criteria, certify a product, issue laboratory results, approve recall duties, or replace qualified legal, compliance, engineering, or medical advice.',
    'Destructive retention, fatigue, corrosion, temperature, chemical, wear, food-transfer, and lifecycle work requires a qualified approved method, suitable equipment, trained personnel, controlled samples, and explicit acceptance criteria.',
    'The cited recalls concern named products and firms. They do not prove every Chinese supplier, factory, wire brush, alternative design, model, or lot has the same defect or cause.',
    'A buyer remains responsible for design approval, destination-market obligations, supplier instructions, reporting and corrective-action duties, acceptance criteria, payment release, shipment release, and downstream monitoring.',
  ],
  relatedLinks: [
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Scope a buyer-side exact-model, lot, workmanship, label, quantity, and pack-out comparison before shipment.',
    },
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC before balance payment',
      note: 'Connect findings, failed evidence, corrective action, and rechecks to the payment-release decision.',
    },
    {
      href: preShipmentBeforePickupArticleHref,
      label: 'Pre-shipment inspection before pickup',
      note: 'Keep unresolved lots, sets, and cartons from moving before closure.',
    },
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China lab report',
      note: 'Check issuer, applicant, model, factory, sample, method, result, and scope.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Align product identity, instructions, retail set, barcode, carton, and destination.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Turn observations, defects, photos, quantities, affected lots, and limits into a release record.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'China manufacturing quality-control plan',
      note: 'Connect approved design, incoming materials, production controls, inspection, and corrective action.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, packaging, payment, pickup, and shipment decisions.',
    },
  ] satisfies RelatedLink[],
  sourceNotes: [
    {
      href: cpscCuisinartGrillBrushRecall,
      label: 'U.S. CPSC - Cuisinart grill brush recall expansion',
      note: 'Primary August 27, 2026 case record for the expanded China-made product population, hazard, model scope, affected quantity, reported detachments, medical treatment, sale period, channels, and remedy.',
    },
    {
      href: cpscNexgrillBrushRecall,
      label: 'U.S. CPSC - Nexgrill wire-bristle grill brush recall',
      note: 'Separate primary 2026 record used to establish a recurring category risk without implying the same root cause or supplier.',
    },
    {
      href: cpscWeberBrushRecall,
      label: 'U.S. CPSC - Weber wire-bristle grill brush recall',
      note: 'Separate primary 2026 record for another large wire-bristle grill brush action; facts remain limited to that notice.',
    },
    {
      href: cpscBrushEnforcementStatement,
      label: 'U.S. CPSC chairman - overseas wire grill brush enforcement statement',
      note: 'March 2026 public statement describing enforcement attention and the Nexgrill hazard; identified as a chairman statement, not presented as a new universal test standard.',
    },
    {
      href: healthCanadaBarbecueSafety,
      label: 'Health Canada - barbecue and brush safety guidance',
      note: 'Current official end-user guidance on inspecting brushes and grills, replacing brushes when bristles loosen, and considering non-metal alternatives.',
    },
    {
      href: cdcWireBrushCaseSeries,
      label: 'U.S. CDC - wire grill-cleaning brush injury case series',
      note: 'Independent public-health record explaining documented ingestion pathways and the limits of relying on visible food or grill condition alone.',
    },
    {
      href: ntdCuisinartRecallCoverage,
      label: 'NTD - independent report on the Cuisinart recall expansion',
      note: 'Recent secondary coverage checked against the official CPSC record for date, affected total, hazard, and medical-treatment statements.',
    },
  ] satisfies SourceNote[],
}

export function makeGrillBrushChecksChinaArticleMetadata(): Metadata {
  const article = grillBrushChecksChinaArticle

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

export function makeGrillBrushChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(grillBrushChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Grill brush pre-shipment release checklist',
      itemListElement: grillBrushChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
