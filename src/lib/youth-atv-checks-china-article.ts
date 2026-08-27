import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  preShipmentBeforePickupArticleHref,
  qcBeforeBalanceArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  verifyChinaLabTestReportArticleHref,
  youthAtvChecksChinaArticleHref,
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

export const cpscYamazukiXwA19Recall =
  'https://www.cpsc.gov/Recalls/2026/Yamazuki-Recalls-Youth-All-Terrain-Vehicles-ATVs-Due-to-Risk-of-Serious-Injury-or-Death-from-Crash-Hazard-Violates-Mandatory-Standard-for-ATVs'
const cpscAtvBusinessFaq =
  'https://www.cpsc.gov/Business--Manufacturing/Business-Education/FAQ?p=3053&tid%5B3054%5D=3054'
const cpscAtvActionPlans =
  'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/ATV/ATV-Action-Plan-List'
const cpscYouthAtvGuidance =
  'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/ATV/Guidance-for-Youth-ATVs'
const cpscLuyuanYouthAtvRecall =
  'https://www.cpsc.gov/Recalls/2026/Luyuan-Recalls-Youth-ATVs-Due-to-Risk-of-Serious-Injury-or-Death-from-Crash-Hazard-Violate-Mandatory-Standard-for-All-Terrain-Vehicles'
const cpscYamazukiXwA17Recall =
  'https://www.cpsc.gov/Recalls/2026/Yamazuki-Recalls-Youth-All-Terrain-Vehicles-ATVs-Due-to-Risk-of-Serious-Injury-or-Death-from-Crash-Violate-Mandatory-Standard-for-ATVs'
const walmartProductRecalls = 'https://corporate.walmart.com/recalls'
const yamazukiRecallPage = 'https://yamazukipowersports.com/pages/recall'

export const youthAtvChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: youthAtvChecksChinaArticleHref,
  title: 'Youth ATV Checks Before Shipping from China',
  metaTitle: 'Youth ATV Checks Before Shipping from China',
  metaDescription:
    'Check youth ATV model identity, age category, action-plan evidence, brakes, speed limiter, reflectors, labels, assembly, and cartons before shipment.',
  publishedDate: 'August 27, 2026',
  publishedDateIso: '2026-08-27T08:18:00+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Youth ATV Checks Before Shipping from China',
  eyebrow: 'Age category - controlled model - brake and limiter evidence - release',
  image: {
    alt: 'Neutral AI illustration of an unbranded youth ATV in a buyer-side inspection area with a checklist, wheel chock, caliper, flashlight, and barcode scanner',
    height: 900,
    src: '/images/youth-atv-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/youth-atv-checks-china.webp', width: 1600 },
    { height: 1200, src: '/images/youth-atv-checks-china-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/youth-atv-checks-china-1x1.webp', width: 1200 },
  ],
  intro:
    'Before paying the balance or releasing a youth ATV order from China, freeze the destination, exact model, rider age category, powertrain, maximum and restricted-speed configuration, approved manufacturer or distributor identity, action-plan scope, test evidence, labels, manuals, brake and reflector construction, production lot, assembly state, and carton map. Hold the lot when those records and the physical units do not describe one controlled version.',
  answerSummary:
    'Use four connected gates: current market requirements, exact-model and age-category evidence, safe buyer-side comparison of sampled production, and traceable correction or release. Routine inspection can document identity, construction, visible workmanship, labels, accessories, limited static checks, quantities, and pack-out. It cannot certify an ATV, approve an action plan, prove prescribed braking or speed performance, validate rider suitability, or guarantee safe use.',
  primaryCta: { label: 'Check Youth ATVs Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side youth ATV evidence and quality check before shipment.

Destination, importer, sales channel, intended rider age, and use:
Exact models, powertrain, age category, restricted and maximum speeds, and action-plan party:
Manufacturer, factory, production dates, lots, quantities, assembly state, and carton map:
Applicable requirements, complete reports, certificates, action-plan evidence, and model labels:
Approved samples, drawings, bill of materials, manuals, warnings, hangtags, tools, and cartons:
Known changes, failures, rework, mixed versions, or missing evidence:
Balance-payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#define-product', label: 'Define the ATV' },
    { href: '#evidence-chain', label: 'Evidence chain' },
    { href: '#physical-checks', label: 'Factory checks' },
    { href: '#safe-test-boundary', label: 'Safe test boundary' },
    { href: '#lot-control', label: 'Lot and pack-out' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze destination, importer or responsible party, exact model, manufacturer, factory, gasoline or electric powertrain, rider age category, rated and restricted speeds, production lot, assembly state, and carton map',
    'Have qualified parties map the exact product to current ATV, children’s-product, certificate, labeling, fuel or battery, transport, state, marketplace, and destination requirements',
    'Verify the active action-plan party and scope directly with CPSC; do not accept a supplier screenshot, company name, or label alone as proof that the shipped model is covered',
    'Map complete reports, certificates, drawings, manuals, labels, hangtags, model plate, speed-limiter design, brakes, reflectors, controls, suspension, tires, guards, and approved changes to one production version',
    'Compare sampled units for exact identity, visible construction, assembly, controls, cables and hoses, fasteners, guards, reflectors, labels, warnings, manuals, tools, quantities, and pack-out',
    'Use only buyer-approved static or low-risk checks with trained personnel, a secured test area, suitable equipment, stop rules, and no child rider; route prescribed dynamic performance to qualified facilities',
    'Hold missing or mismatched age category, action-plan identity, compliance label, model plate, manuals, speed-limiter parts, brake parts, reflectors, guards, fasteners, reports, or lot traceability',
    'Release only named models, configurations, lots, serial or VIN ranges, assembly states, accessories, and cartons after documented correction and repeat inspection or qualified testing where required',
  ],
  checkGroups: [
    {
      title: 'Controlled product identity',
      items: [
        'Destination, responsible party, manufacturer, factory, exact model, VIN or serial scheme, powertrain, youth category, restricted and maximum speed configuration, lot, and approved changes are controlled',
        'Purchase order, drawings, bill of materials, approved sample, reports, certificates, action-plan reference, labels, manual, online listing, packing list, and cartons describe the same version',
      ],
    },
    {
      title: 'Qualified regulatory evidence',
      items: [
        'Qualified parties identify current requirements and complete files identify the applicant, manufacturer, factory, exact model, category, tested sample, methods, results, photos, dates, deviations, and limits',
        'CPSC action-plan status is checked at the official source; a logo, report cover, supplier declaration, marketplace badge, or another model’s certificate is not treated as exact-model evidence',
      ],
    },
    {
      title: 'Finished goods and limited checks',
      items: [
        'Sampled units match the approved model plate, controls, limiter hardware or settings, brake components, reflectors, suspension, wheels, tires, guards, foot environment, shutdown devices, labels, manuals, tools, and assembly instructions',
        'VIN or serial, production lot, retail pack, accessory pack, carton marks, destination segregation, quantities, and packing list remain aligned without mixed builds',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, model and component versions, serial or VIN range, carton map, supplier changes, controlled rework, qualified disposition, and repeat checks remain traceable',
        'Cleared and unresolved models, categories, lots, assembly states, accessories, and cartons stay separated; final release states every open condition',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why youth ATV release evidence matters now',
      paragraphs: [
        'On August 13, 2026, the U.S. Consumer Product Safety Commission recalled about 1,050 China-made Yamazuki XW-A19 youth ATVs sold under the QEASET and HOVERHEART brands. CPSC said the parking brakes failed to hold, the speed-limiting device was not set to the restricted speed required for children ages six and older, and required rear safety reflectors were missing. No incidents or injuries were reported in that notice.',
        'The same CPSC record says an XW-A17 model had already been recalled in June 2026. A separate 2026 Luyuan recall concerned suspension and handlebar requirements on other China-made 40 cc youth ATVs. Those records are different cases with different products and facts, but together they show why a buyer should control age category, brake and speed configuration, visibility hardware, mechanical construction, and model identity before release.',
        'Walmart’s current product-recall page separately lists Yamazuki youth ATVs as an August 13 action for goods sold through Walmart.com, and Yamazuki’s own recall page identifies both XW-A17 and XW-A19 notices. These retailer and company records are current channel signals, not proof of search volume or proof that every youth ATV has the same risk.',
      ],
      bullets: [
        'Treat rider age category, maximum and restricted speed, brake system, suspension, controls, reflectors, guards, labels, manuals, action-plan identity, and serial or VIN records as controlled release features',
        'Do not infer compliant performance from a new appearance, marketplace listing, one supplier video, an action-plan party name, or a static factory sample',
        'Keep inspection observations linked to test evidence, production changes, complaints, incidents, corrective actions, lots, warehouses, channels, and cartons',
        'Use final-payment and pickup leverage while affected units, parts, documents, and cartons can still be isolated and rechecked',
      ],
      citations: [
        { href: cpscYamazukiXwA19Recall, label: 'CPSC XW-A19 youth ATV recall' },
        { href: cpscLuyuanYouthAtvRecall, label: 'CPSC Luyuan youth ATV recall' },
        { href: cpscYamazukiXwA17Recall, label: 'CPSC XW-A17 youth ATV recall' },
        { href: walmartProductRecalls, label: 'Walmart product recall channel' },
        { href: yamazukiRecallPage, label: 'Yamazuki recall page' },
      ],
    },
    {
      id: 'define-product',
      title: 'Define the exact ATV and rider category before checking it',
      paragraphs: [
        'Start with the destination, responsible party, intended rider age, off-highway use, wheel count, straddle seat, handlebar steering, gasoline or electric motor, exact model, VIN or serial structure, displacement or motor rating, battery system where applicable, youth category, restricted and maximum speed configuration, dimensions, weight, suspension, tires, brakes, controls, guards, labels, manuals, accessories, factory, and bill-of-material revision.',
        'CPSC guidance says products meeting the statutory ATV definition must follow federal ATV requirements even when electric. It also warns firms not to misclassify faster, off-road-capable four-wheeled products as children’s ride-on toys. The current CPSC FAQ identifies Category Y-6+, Y-10+, and Y-12+ groups and says each has distinct design, configuration, and performance requirements.',
        'Record who made the classification and requirements decision, the sources and editions checked, assumptions, and unresolved questions. A buyer-side inspection company should not decide the legal category or intended rider suitability at the factory gate.',
      ],
      bullets: [
        'Separate an ATV from a ride-on toy, go-kart, recreational off-highway vehicle, utility vehicle, motorcycle, and road vehicle before selecting evidence or checks',
        'Freeze model name and number, youth category, powertrain, limiter design and setting, brake configuration, suspension, tire specification, controls, guards, reflectors, labels, manual, and action-plan party',
        'Keep marketing age, package age, model label, manual, online listing, speed claims, sales training, and intended use aligned',
        'Reject family-level evidence when the tested construction, category, speed configuration, factory, or responsible party cannot be mapped to the shipped model',
      ],
      citations: [
        { href: cpscYouthAtvGuidance, label: 'CPSC guidance for categorizing youth ATVs' },
        { href: cpscAtvBusinessFaq, label: 'CPSC ATV business FAQ' },
      ],
    },
    {
      id: 'evidence-chain',
      title: 'What should the action-plan, test, and production evidence connect?',
      paragraphs: [
        'CPSC’s current ATV business information says a new ATV must comply with applicable provisions of the referenced ANSI/SVIA standard, be subject to an active CPSC-approved action plan, bear required identifying and compliance labeling, and be distributed by parties complying with that plan. The action-plan page also asks applicants for model names, specifications, manuals, technical drawings, test reports, and age-category analysis.',
        'Review complete records rather than a cover page or label alone. Connect the applicant or responsible party, manufacturer, factory, exact model, category, tested sample photographs, drawings, bill of materials, braking and limiter construction, suspension, controls, lighting or reflectors, guards, tires, labels, manual, hangtags, receipt and test dates, standard edition, methods, results, deviations, and model-family rationale.',
        'Control post-test and post-approval changes. If the supplier changes the frame, welds, suspension, brake parts, cables, speed-control hardware or software, engine or motor, battery, throttle, kill switch, tires, reflectors, guards, labels, factory, subcontractor, or assembly process, hold the affected lot until a qualified party documents whether existing evidence still applies.',
      ],
      bullets: [
        'Verify action-plan status and exact responsible-party identity directly at CPSC; preserve the checked date and source',
        'Escalate cropped reports, edited results, inconsistent names or dates, missing sample photos, unsupported model-family claims, unreadable labels, or evidence issued to another factory',
        'Keep regulatory evidence, qualified performance testing, buyer-side inspection observations, freight acceptance, and shipment release as separate decisions',
        'Do not replace failed, conditional, or missing records with a supplier demonstration, marketplace badge, or similar-model document',
      ],
      citations: [
        { href: cpscAtvActionPlans, label: 'CPSC ATV action plans and active-party list' },
        { href: cpscAtvBusinessFaq, label: 'CPSC ATV requirements FAQ' },
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing lab report verification guide' },
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled finished goods with approved references while the lot remains accessible. The useful output is a traceable record of model plate, VIN or serial, age-category markings, visible frame and weld condition, suspension and steering assembly, service and parking-brake parts, cable and hose routing, throttle and limiter hardware, engine or motor cutoff devices, reflectors, tires, foot environment, guards, fasteners, fuel or battery-area condition, labels, manuals, tools, quantities, defects, mismatches, and affected cartons.',
        'For partly assembled or crated ATVs, verify the approved assembly state, loose-part list, fastener and torque instructions, tools, protective packing, fluid and battery condition where applicable, carton orientation, handling marks, serial-to-carton map, and evidence that assembly will not conceal damage or omit safety-critical parts. Do not improvise assembly or powered checks without an approved method and suitable facilities.',
        'Measure only buyer-defined accessible dimensions and settings with calibrated tools and record the method, sample, tolerance, reading, and limitation. A visible reflector, parked wheel, limiter screw, warning label, or complete manual is useful evidence but does not establish prescribed performance or compliance.',
      ],
      bullets: [
        'Check identity first: model plate, manufacturer and responsible-party names, VIN or serial, production date or lot, category, ratings, labels, manuals, reports, packing list, and carton marks',
        'Inspect for missing, substituted, loose, cracked, bent, leaking, abraded, pinched, corroded, misrouted, mislabeled, poorly welded, incompletely guarded, or badly packed parts',
        'Photograph limiter controls or settings, parking mechanism, service-brake components, reflectors, shutdown devices, throttle, suspension, tires, footrests, guards, model plate, warnings, manual, tool pack, and carton identity',
        'Quantify every mismatch by model, serial or VIN range, lot, sample, defect class, affected quantity, assembly state, and carton range',
      ],
    },
    {
      id: 'safe-test-boundary',
      title: 'Keep routine inspection inside a safe test boundary',
      paragraphs: [
        'A routine pre-shipment inspection should not attempt prescribed maximum-speed, restricted-speed, stopping-distance, brake-hold, pitch-stability, endurance, impact, fuel-system, electrical, battery-abuse, or other compliance tests unless a qualified facility, approved procedure, calibrated equipment, controlled course, competent operator, and safety plan are in place. Do not use a child rider for factory acceptance.',
        'Limited static or low-risk checks may be useful when the buyer supplies a written method. Examples can include control movement with power isolated, visible limiter position, parking mechanism engagement, fastener presence, cable routing, wheel rotation while safely supported, tire pressure or dimensions, steering free play, label and manual checks, and other non-destructive observations. The exact scope depends on the product and facility.',
        'Stop on fuel leakage, battery damage, smoke, unusual odor, heat, arcing, brake or steering binding, unexpected movement, throttle return failure, damaged guards, unstable support, sharp edges, loose wheels, structural cracks, or any departure from the approved method. Isolate the sample and preserve its identifiers and time sequence for qualified disposition.',
      ],
      bullets: [
        'Define trained personnel, secured area, restraints or supports, ventilation, fire controls, personal protective equipment, instruments, preconditions, stop rules, prohibited actions, and emergency response before any powered check',
        'Record observations as limited inspection evidence, never as certification, a standard test result, or proof of safe rider use',
        'Route dynamic speed, braking, stability, suspension, electrical, battery, fuel, durability, and injury-protection questions to qualified laboratories or engineers',
        'Require correction evidence and repeat the appropriate inspection or qualified test before releasing an affected lot',
      ],
    },
    {
      id: 'lot-control',
      title: 'Connect correction, serials, and cartons to the released lot',
      paragraphs: [
        'A correction is not closed by a supplier message or one repaired sample. Identify affected models, serial or VIN ranges, production dates, lots, parts, settings, assembly states, quantities, warehouse locations, retail packs, and cartons. Record who authorized the disposition, the controlled work instruction, old and new part or setting, completion evidence, and the repeat-check result.',
        'Use quarantine labels and physical segregation so unverified, failed, corrected, and cleared units cannot mix. Sample from the corrected lot under the approved plan and target the original failure node without hiding unrelated open defects.',
        'The release record should name exactly what can move and what remains on hold. If documentary or qualified performance evidence remains unresolved, a good visible inspection does not close that gap.',
      ],
      bullets: [
        'Map serial or VIN, lot, age category, model plate, components, limiter configuration, brake parts, reflectors, manuals, accessory pack, retail pack, and master carton',
        'Preserve before-and-after photos, removed-part controls, rework counts, scrap or quarantine records, retest evidence, inspector notes, and approval authority',
        'State open conditions, excluded tests, sample limits, mixed-build risk, unresolved documentation, and any downstream assembly required',
        'Delay pickup when cleared and uncleared units cannot be reliably separated or traced',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Model, category, or action-plan mismatch',
      evidence: 'The physical model, youth category, responsible party, active action-plan record, label, manual, report, or listing does not map to one version.',
      buyerDecision: 'Hold the affected model and cartons. Require qualified classification and exact-scope evidence before any release decision.',
    },
    {
      riskNode: 'Brake, limiter, reflector, or guard gap',
      evidence: 'Required parts, approved settings, construction, labels, or traceability are missing, changed, loose, damaged, or inconsistent across samples.',
      buyerDecision: 'Quarantine the affected lot, document the mismatch, obtain qualified disposition, correct under control, and repeat the appropriate checks.',
    },
    {
      riskNode: 'Report or certificate does not map',
      evidence: 'Issuer, applicant, factory, model, category, sample photographs, construction, method, result, or current scope is incomplete or inconsistent.',
      buyerDecision: 'Do not release on the document cover. Verify with the issuer and route technical or regulatory questions to qualified parties.',
    },
    {
      riskNode: 'Unsafe or failed inspection observation',
      evidence: 'Leakage, structural damage, unexpected movement, binding, abnormal heat, smoke, loose wheel, damaged guard, or another stop condition appears.',
      buyerDecision: 'Stop, isolate, trace the sample and related lot, preserve evidence, and obtain a written qualified disposition before rework or retest.',
    },
    {
      riskNode: 'Aligned sampled lot with closed actions',
      evidence: 'Exact model evidence is current, sampled construction and pack-out match approved references, defects are within the buyer’s approved limits, and corrections are traceable.',
      buyerDecision: 'Release only the named models, categories, serial or VIN ranges, lots, assembly states, accessories, and cartons; record every scope limit.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'August 13, 2026 CPSC recall 26-693 for Yamazuki XW-A19 youth ATVs, including the stated parking-brake, restricted-speed, rear-reflector, model, quantity, sales-channel, China-origin, and remedy details',
    'Separate 2026 CPSC youth ATV actions used only to identify recurring category-level evidence nodes, without treating different products or failures as one case',
    'Current CPSC ATV FAQ, youth-ATV classification guidance, and ATV action-plan page checked August 27, 2026 Beijing time',
    'Current Walmart retailer and Yamazuki company recall pages used as separate channel signals, not as proof of search volume or product-wide failure',
    'Buyer-side sourcing analysis that keeps classification, regulatory responsibility, action-plan approval, qualified testing, inspection observations, correction, and shipment release in separate scopes',
  ],
  whatToSend: [
    'Destination, importer or responsible party, sales channels, intended rider ages and uses, exact models, powertrain, youth categories, restricted and maximum speed configurations, manufacturer, factory, production dates, lots, quantities, assembly states, and carton map',
    'Purchase order, approved specification and sample, drawings, full bill of materials, change log, frame and weld details, brakes, limiter, controls, suspension, tires, reflectors, guards, model plate, serial or VIN scheme, labels, manuals, hangtags, tools, and packaging',
    'Current action-plan evidence, complete reports and certificates, issuer verification details, evaluated-sample photographs, standard editions, methods and results, age-category analysis, unresolved technical questions, and importer decisions',
    'Approved sampling plan, defect classes, accessible measurements, safe static or limited function method, tools and fixtures, stop rules, prohibited actions, photo list, and correction evidence',
    'Known substitutions, factory or subcontractor changes, failed tests, complaints, incidents, rework, mixed versions, quarantined stock, shipping mode, pickup deadline, and balance-payment deadline',
  ],
  scopeLimits: [
    'A routine inspection cannot approve or verify a CPSC ATV action plan, classify a product for legal purposes, issue a CPC or GCC, certify ANSI/SVIA or destination compliance, or replace the importer’s and qualified specialists’ decisions',
    'Visual and limited static checks cannot prove prescribed braking, parking, speed, stability, suspension, throttle, cutoff, lighting, fuel, electrical, battery, endurance, impact, or other safety performance',
    'A sample result describes only the inspected sample, time, method, accessible features, and documents; it does not guarantee every unit, future production, transport event, assembly, maintenance condition, or rider behavior',
    'An active action-plan party, authentic report, valid certificate, familiar factory, approved sample, supplier demonstration, or marketplace listing does not by itself prove the shipped model and lot are compliant or safe',
    'Huang Sourcing did not manufacture, import, test, inspect, certify, recall, repair, or otherwise participate in the cited Yamazuki or Luyuan cases',
  ],
  relatedLinks: [
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Scope a buyer-side sampled inspection before final payment or pickup.',
    },
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC before balance payment',
      note: 'Connect findings and correction evidence to the payment-release decision.',
    },
    {
      href: preShipmentBeforePickupArticleHref,
      label: 'Pre-shipment inspection before pickup',
      note: 'Keep unresolved lots and cartons from moving before closure.',
    },
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China lab report',
      note: 'Check issuer, applicant, model, factory, sample, method, result, and scope.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Align product, age, warning, manual, barcode, carton, and destination identity.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Turn observations, defects, photos, quantities, and limits into a release record.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'China manufacturing quality-control plan',
      note: 'Connect approved design, incoming parts, production controls, inspection, and corrective action.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related supplier, inspection, packaging, payment, pickup, and shipment decisions.',
    },
  ] satisfies RelatedLink[],
  sourceNotes: [
    {
      href: cpscYamazukiXwA19Recall,
      label: 'U.S. CPSC - Yamazuki XW-A19 youth ATV recall',
      note: 'Primary August 13, 2026 record for the China-made model, parking-brake, restricted-speed and rear-reflector failures, affected quantity, sales period, channels, and repair remedy.',
    },
    {
      href: cpscAtvBusinessFaq,
      label: 'U.S. CPSC - All-terrain vehicle business FAQ',
      note: 'Primary current overview of ATV requirements, certificates, labels, action plans, age categories, and covered design and performance areas.',
    },
    {
      href: cpscAtvActionPlans,
      label: 'U.S. CPSC - ATV action plans and active-party list',
      note: 'Primary current source for action-plan requirements, supporting model and test documentation, age-category analysis, and active or terminated plan status.',
    },
    {
      href: cpscYouthAtvGuidance,
      label: 'U.S. CPSC - Guidance for categorizing youth ATVs',
      note: 'Primary guidance on ATV classification factors and the distinction between youth ATVs and children’s electric ride-on toys.',
    },
    {
      href: cpscLuyuanYouthAtvRecall,
      label: 'U.S. CPSC - Luyuan youth ATV recall',
      note: 'Separate 2026 primary record involving suspension and handlebar requirements; used only to show a recurring category pattern and not a shared root cause.',
    },
    {
      href: cpscYamazukiXwA17Recall,
      label: 'U.S. CPSC - Yamazuki XW-A17 youth ATV recall',
      note: 'Separate June 25, 2026 primary record for a different Yamazuki youth ATV missing brake lights; used to establish recurrence without implying a shared root cause.',
    },
    {
      href: walmartProductRecalls,
      label: 'Walmart - Product recalls',
      note: 'Retailer channel record listing Yamazuki youth ATVs as an August 13, 2026 recall for goods sold through Walmart.com.',
    },
    {
      href: yamazukiRecallPage,
      label: 'Yamazuki - Youth ATV recall page',
      note: 'Primary company recall page identifying separate XW-A17 and XW-A19 notices and linking buyers to the official details.',
    },
  ] satisfies SourceNote[],
}

export function makeYouthAtvChecksChinaArticleMetadata(): Metadata {
  const article = youthAtvChecksChinaArticle

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

export function makeYouthAtvChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(youthAtvChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Youth ATV pre-shipment release checklist',
      itemListElement: youthAtvChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
