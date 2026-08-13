import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  smokeCoAlarmChecksChinaArticleHref,
  verifyChinaLabTestReportArticleHref,
  verifyUlCertificationChinaArticleHref,
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

const cpscJnhcdWarning =
  'https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-JNHCD-Combination-Smoke-and-Carbon-Monoxide-Detectors-Immediately-Due-to-Risk-of-Serious-Injury-or-Death-from-Failure-to-Warn-of-Smoke-and-Fire-Hazards'
const cpscTreatlifeRecall =
  'https://www.cpsc.gov/Recalls/2026/Combination-Smoke-and-Carbon-Monoxide-CO-Detectors-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Failure-to-Alert-Consumers-to-Fire-Sold-Exclusively-on-Amazon-com-by-Treatlife-Technology'
const cpscVstarReport =
  'https://www.cpsc.gov/s3fs-public/FY25-Annual-VSTAR_Final.pdf?VersionId=ZfDPyLq.O6rFQPNctAmBNrtGz042FHG9'
const cpscEfilingRelease =
  'https://www.cpsc.gov/Newsroom/News-Releases/2026/CPSC-Implements-Mandatory-eFiling-for-Certificates-of-Compliance-Targeting-Dangerous-Foreign-Imports'
const cpscCoAlarmStandards =
  'https://www.cpsc.gov/Regulations-Laws--Standards/Voluntary-Standards/Carbon-Monoxide-CO-Alarms'

export const smokeCoAlarmChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: smokeCoAlarmChecksChinaArticleHref,
  title: 'Smoke and CO Alarm Checks Before Shipping from China',
  metaTitle: 'Smoke and CO Alarm Checks Before China Shipment',
  metaDescription:
    'Check smoke and CO alarm models, test evidence, sensors, firmware, labels, sampled functions, lots, cartons, and release decisions before China shipment.',
  publishedDate: 'August 14, 2026',
  publishedDateIso: '2026-08-14T03:30:36+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Smoke and CO Alarm Checks Before Shipping from China',
  eyebrow: 'Model evidence - lot controls - shipment release',
  image: {
    alt: 'Neutral AI illustration of unbranded smoke and carbon monoxide alarms, an abstract inspection matrix, measuring tools, test equipment, labels, and export cartons on an anonymous quality-control workbench',
    height: 900,
    src: '/images/smoke-co-alarm-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/smoke-co-alarm-checks-china.webp', width: 1600 },
    { height: 900, src: '/images/smoke-co-alarm-checks-china-4x3.webp', width: 1200 },
    { height: 1000, src: '/images/smoke-co-alarm-checks-china-1x1.webp', width: 1000 },
  ],
  intro:
    'Before releasing balance payment or pickup for smoke alarms, carbon monoxide alarms, or combination units made in China, connect each finished model and production lot to the destination-market requirements, controlled design, qualified test evidence, current sensors and firmware, labels, instructions, package, and carton map. Hold the shipment when those records and the physical goods do not describe the same saleable version.',
  answerSummary:
    'Use three separate gates: importer-led product and market classification, qualified evidence for the exact alarm design, and buyer-side comparison of sampled production with approved references. A routine inspection can document identity, assembly, specified non-destructive functions, sound output under an agreed method, labels, packaging, quantities, and traceability. It cannot reproduce prescribed smoke or carbon monoxide response testing, certify compliance, or guarantee that an alarm will warn in a real emergency.',
  primaryCta: { label: 'Check Alarm Lots Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side smoke or CO alarm evidence and quality check before shipment.

Destination, importer, sales channels, exact models/SKUs, alarm type, power source, and intended installation:
Manufacturer, factory, production dates, lots, quantities, and carton map:
Applicable requirements, qualified reports, listings or certifications, certificate data, and model coverage:
Approved sensors, PCB, power components, sounder, enclosure, firmware, labels, manuals, package, and change log:
Approved inspection functions, tools, limits, samples, stop rules, and safety instructions:
Known substitutions, test failures, corrections, or evidence concerns:
Balance-payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#product-scope', label: 'Product and market scope' },
    { href: '#qualified-evidence', label: 'Qualified evidence' },
    { href: '#change-control', label: 'Sensors and change control' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#labels-records', label: 'Labels and records' },
    { href: '#inspection-limits', label: 'Inspection limits' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze the destination, importer, alarm type, model, sensing architecture, power source, interconnection or wireless features, manufacturer, factory, production date, lot, package, and carton identity',
    'Have the importer and qualified advisers identify the current rules, standards, certification, listing, installation, language, eFiling, marketplace, and retailer requirements for the exact product and market',
    'Map complete reports and source-verifiable certification or listing records to the exact model, sensors, PCB, sounder, enclosure, power components, firmware, laboratory, dates, samples, methods, results, and limitations',
    'Compare approved sensor part numbers, chamber or inlet design, PCB revision, power and backup parts, sounder, buttons, indicators, enclosure, firmware, labels, manual, package, and bill of materials with current production',
    'Check sampled units for model identity, assembly, openings, battery compartment, terminals, controls, indicators, specified self-test behavior, sound output under the approved method, workmanship, and visible damage',
    'Check manufacturer and importer identity, model, date or lot code, power information, required markings, warnings, instructions, package claims, barcodes, carton marks, quantities, packing list, and certificate data',
    'Hold mixed models, changed critical parts or firmware, missing or mismatched evidence, unreliable self-test behavior, weak or inconsistent sound readings, damaged units, uncontrolled rework, or untraceable cartons',
    'Release only named models, production lots, quantities, packages, and cartons after documented correction, qualified disposition, and repeat inspection or testing where required',
  ],
  checkGroups: [
    {
      title: 'Identity and market scope',
      items: [
        'Destination, importer, alarm function, model, sensing method, power source, communication features, manufacturer, factory, firmware, production date, lot, quantity, and approved changes are controlled',
        'PO, approved sample, specification, bill of materials, reports, listing or certification records, certificate data, labels, manual, package, listing, packing list, and cartons describe one version',
      ],
    },
    {
      title: 'Qualified performance evidence',
      items: [
        'Complete source records identify the exact model, tested samples, sensor and design revisions, laboratory or certification body, methods, dates, results, photographs, conditions, and limitations',
        'The importer has documented which smoke, CO, electrical, battery, radio, accessibility, marking, installation, certificate, and destination requirements apply',
      ],
    },
    {
      title: 'Production and pack-out',
      items: [
        'Sampled units match approved sensors, PCB, power parts, sounder, enclosure, controls, indicators, firmware identity, assembly, workmanship, labels, instructions, package, and accessories',
        'Approved non-destructive checks, quantities, carton marks, barcodes, package protection, packing list, production dates, lots, and correction status remain traceable',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, lot and carton map, supplier changes, controlled rework, qualified retest decision, revised records, and repeat inspection remain linked',
        'Cleared and unresolved models, firmware revisions, dates, lots, packages, and cartons stay separated; final release names the exact scope and open conditions',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why alarm evidence and lot control matter now',
      paragraphs: [
        'On July 9, 2026, the U.S. Consumer Product Safety Commission warned consumers to stop using JNHCD combination smoke and carbon monoxide detectors. CPSC said the China-made devices could fail to alert consumers to hazardous smoke and fire. The agency identified 14 Amazon, eBay, and Sears ASINs and said the Chinese seller had been unresponsive to its request for a recall.',
        'The risk node appeared in another current record. On June 25, 2026, CPSC announced a recall of about 20 Treatlife combination detectors manufactured in China and sold on Amazon because the units could fail to alert consumers to a fire. That recall identifies a model-specific manufacture date and FCC ID, showing why a buyer needs exact identity and lot evidence rather than a generic product-family claim.',
        'CPSC also announced on July 8, 2026 that mandatory eFiling was in effect for certificates covering regulated imported consumer products. The agency said eFiling changes how existing certificate data reaches CPSC, not the underlying testing, certification, or compliance duties. Importers should determine whether and how those duties apply to the exact alarm before shipment.',
      ],
      bullets: [
        'A product listing, test button, supplier declaration, logo image, report cover, or old model certificate is not a complete evidence chain for the current lot',
        'A change to a sensor, smoke chamber, PCB, power circuit, sounder, enclosure opening, firmware, manufacturer, factory, or model can change the evidence question',
        'A self-test or sampled sound reading checks only its defined function and does not prove smoke or CO sensitivity, response time, immunity, durability, or real-emergency performance',
        'Correction leverage is strongest before final payment and pickup, while affected models and cartons can still be held, reviewed, tested, reworked, relabeled, repacked, or rejected',
      ],
      citations: [
        { href: cpscJnhcdWarning, label: 'CPSC JNHCD combination detector warning' },
        { href: cpscTreatlifeRecall, label: 'CPSC Treatlife combination detector recall' },
        { href: cpscEfilingRelease, label: 'CPSC July 2026 eFiling implementation release' },
      ],
    },
    {
      id: 'product-scope',
      title: 'Freeze the exact alarm function, destination, model, and factory',
      paragraphs: [
        'Do not treat every round alarm as the same product. Record whether the unit detects smoke, carbon monoxide, or both; the sensing method; primary and backup power; battery type and access; standalone, interconnected, radio, app, hub, display, voice, accessibility, or other functions; intended location; destination market; and installation configuration.',
        'Build one controlled model record connecting the sales SKU and listing to the manufacturer, factory, model, hardware and firmware revisions, sensor and chamber identity, PCB, power circuit, sounder, enclosure, labels, manual, accessories, package, production date, lot, and cartons. If one shell or listing covers several internal builds, split the versions before approval.',
        'The importer and qualified product-safety advisers should identify the current rules, recognized standards, editions, deviations, certification or listing route, certificate duties, eFiling fields, installation code, local requirements, and market claims. CPSC currently directs consumers in its JNHCD warning to buy smoke and CO alarms meeting UL 217 and UL 2034; exact product obligations and evidence still require responsible review.',
      ],
      bullets: [
        'Control model suffixes, alternate names, hardware and firmware revisions, sensor part numbers, PCB markings, power options, labels, packages, listings, and carton identities',
        'Identify the first affected date, production line, lot, quantity, package, and carton range for every approved or suspected change',
        'Keep smoke-alarm evidence, CO-alarm evidence, radio evidence, electrical or battery evidence, and installation claims mapped to the relevant function',
        'Reject broad “same series” or “same housing” coverage without a documented rationale that matches the tested or listed design',
      ],
      citations: [
        { href: cpscJnhcdWarning, label: 'CPSC JNHCD warning and consumer standard references' },
        { href: cpscVstarReport, label: 'CPSC FY2025 standards activity report' },
        { href: cpscCoAlarmStandards, label: 'CPSC carbon monoxide alarm standards page' },
      ],
    },
    {
      id: 'qualified-evidence',
      title: 'What should qualified alarm evidence connect?',
      paragraphs: [
        'Review complete source records rather than a cropped certificate or report cover. Capture the issuer, laboratory or certification body, authorization status, applicant and manufacturer, factory, exact model, hardware and firmware, samples, photographs, receipt and test dates, methods, clauses, conditions, individual results, failures, corrections, limitations, surveillance status, and current public listing where one exists.',
        'Connect that evidence to the bill of materials and current production. At minimum, control the smoke or CO sensor, chamber or gas inlet, PCB, microcontroller and firmware identity, power supply, backup source, battery contacts, charging parts if any, sounder, buttons, indicators, display, radio module, enclosure openings, fasteners, labels, and manual. Similar appearance does not establish equivalent performance.',
        'Keep certification, independent testing, factory controls, and buyer inspection in separate scopes. Source verification can show whether a record exists and what model and factory it covers. Qualified testing evaluates defined performance. Factory controls maintain the approved design. Buyer inspection checks sampled production against approved references and reports deviations for a release decision.',
      ],
      bullets: [
        'Confirm records through the claimed issuer or official public directory where an appropriate route exists',
        'Match tested or listed identifiers and photographs to the approved sample, current goods, internal controlled records, package, and listing',
        'Escalate expired, suspended, withdrawn, edited, incomplete, inaccessible, or contradictory records and evidence issued to another model, factory, applicant, sensor, or revision',
        'Require qualified review when a report does not clearly cover every alarm function and sale configuration claimed on the product or package',
      ],
      citations: [
        { href: cpscVstarReport, label: 'CPSC FY2025 smoke-alarm standards activity' },
        { href: verifyUlCertificationChinaArticleHref, label: 'Huang Sourcing UL verification guide' },
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing laboratory report verification guide' },
      ],
    },
    {
      id: 'change-control',
      title: 'Control sensors, electronics, firmware, and substitutions by lot',
      paragraphs: [
        'An approved sample is useful only when production remains tied to it. Compare the controlled bill of materials, drawings, PCB revision, firmware release, approved supplier list, incoming records, line issue records, programming logs, in-process tests, finished-lot results, retained samples, labels, and correction history.',
        'Critical-looking changes are not limited to the sensor. A different chamber geometry, vent opening, PCB layout, component value, power circuit, battery contact, sounder, enclosure material, molding condition, coating, firmware threshold, debounce logic, silence behavior, display logic, radio module, assembly pressure, or contamination control can require engineering, compliance, or qualified test review.',
        'When a substitution appears, identify the exact old and new parts, supplier, specification, first production date, affected quantity, hardware and firmware revisions, open records, and carton scope. Segregate affected goods until responsible parties document whether the existing evidence remains applicable or new evaluation is required.',
      ],
      bullets: [
        'Tie incoming labels and internal part codes to approved manufacturer part numbers and controlled specifications',
        'Use programming records and an approved readout method to identify firmware; do not rely on a handwritten carton note',
        'Keep approved and changed production physically separated with hold status visible at unit, inner-pack, carton, pallet, and packing-list levels',
        'Treat sensitivity, gas concentration response, false-alarm immunity, long-term drift, battery life, radio performance, and environmental durability as qualified evaluation questions',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled mass production with approved references while the goods remain accessible. The useful output is a traceable record of model and lot identity, external and approved internal comparison, assembly, controls, indicators, battery compartment, terminals, sound openings, labels, instructions, packages, quantities, cartons, defects, mismatches, and affected scope.',
        'Use only buyer-approved, safe, non-destructive checks and tools. These may include visual comparison, dimensions and mass, fit and fastening, battery insertion and retention, power-up, indicator sequence, self-test initiation, specified display or voice behavior, low-power simulation under a defined method, and sound pressure at an agreed distance and environment. Record tools, settings, sample, raw readings, results, and limitations.',
        'Do not inject smoke, aerosol, canned gas, exhaust, calibration gas, flame, heat, or improvised contaminants during routine inspection unless a qualified procedure, safe facility, competent operator, selected sample plan, calibrated equipment, ventilation, and responsible disposition have been formally approved. A test button usually exercises only the designed self-test path.',
      ],
      bullets: [
        'Use buyer-approved sampling, defect classes, tolerances, fixtures, batteries, environment, tools, functional steps, stop rules, and photo requirements',
        'Check identity before and after unpacking so every finding remains tied to a model, hardware and firmware revision, production date, lot, package, and carton',
        'Quantify cracked housings, blocked openings, loose parts, poor contacts, missing fasteners, inconsistent indicators, failed self-tests, abnormal sound readings, cosmetic defects, and pack damage',
        'Keep smoke sensitivity, CO concentration response, nuisance resistance, endurance, EMC, radio, environmental, life, and real-emergency conclusions outside routine inspection',
      ],
    },
    {
      id: 'labels-records',
      title: 'Connect alarm labels, instructions, certificate data, and cartons',
      paragraphs: [
        'Match approved product and package artwork to the destination, alarm function, model, manufacturer and importer, date or lot code, hardware or firmware identifier where controlled, power and battery information, required warnings, installation and replacement instructions, test and maintenance directions, language, certification or listing references, barcode, and sales channel.',
        'A correct-looking label cannot repair failed evidence, an unsupported component change, or a production build that differs from the tested or listed design. Conversely, qualified evidence does not excuse an incorrect model, date code, warning, manual, package claim, or carton identity.',
        'For U.S. regulated imports, the importer should determine the applicable certificate and eFiling requirements for the exact product. CPSC says mandatory eFiling for most regulated imported consumer products took effect July 8, 2026 and does not create new underlying testing or certification obligations. Keep filed data aligned with the finished product and its supporting records.',
      ],
      bullets: [
        'Do not let the alarm, label, manual, reports, listing or certification record, certificate data, package, marketplace listing, packing list, and carton describe different models or parties',
        'Photograph identity and warning details in context and retain a carton map for mixed models, languages, power options, production dates, or lots',
        'Hold unreadable, removable, missing, mixed, contradictory, or unauthorized claims until approved correction and recheck',
        'Use the importer and legal or compliance team’s approved content; an inspection compares implementation and does not author regulatory instructions',
      ],
      citations: [
        { href: cpscEfilingRelease, label: 'CPSC mandatory eFiling implementation announcement' },
        { href: cpscEfilingChinaImportsArticleHref, label: 'Huang Sourcing CPSC eFiling buyer checklist' },
      ],
    },
    {
      id: 'inspection-limits',
      title: 'Where does inspection stop and qualified alarm testing begin?',
      paragraphs: [
        'Qualified smoke and CO alarm evaluation can involve controlled fuels or gas concentrations, chambers, airflow, temperature and humidity, sound measurements, power conditions, response timing, nuisance sources, environmental conditioning, durability, software behavior, calibration, safety controls, defined samples, and competent interpretation. Those tasks belong with appropriate laboratories, certification bodies, manufacturers, importers, and product-safety specialists.',
        'A test button, smartphone sound-meter app, burning paper, cigarette, aerosol spray, vehicle exhaust, or unapproved gas source must not be presented as proof that the product meets a standard. Such shortcuts can be unsafe, contaminate products, damage sensors, create false confidence, and still fail to reproduce a prescribed method.',
        'A passed sampled inspection supports a buyer decision only within its stated scope. It cannot cure missing evidence, validate an unapproved design change, prove every unsampled unit, certify compliance, or promise customs, marketplace, installer, regulator, recall, or real-emergency outcomes.',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product and market identity',
      evidence: 'Destination, importer, alarm functions, exact model, hardware and firmware, sensing design, power source, manufacturer, factory, production dates, lots, packages, and approved changes align.',
      buyerDecision: 'Hold aliases, mixed builds, unclear market scope, or unexplained revisions until qualified review and traceable correction.',
    },
    {
      riskNode: 'Qualified performance evidence',
      evidence: 'Complete source-verifiable records map the evaluated alarm design and every claimed function to current production, samples, methods, results, conditions, surveillance, and limitations.',
      buyerDecision: 'Hold missing, partial, expired, mismatched, changed, failed, or unverifiable evidence; route test and certification decisions to responsible parties.',
    },
    {
      riskNode: 'Finished-goods comparison',
      evidence: 'Sampled production matches approved sensors, electronics, firmware identity, power parts, sounder, enclosure, assembly, labels, instructions, package, specified functions, quantities, and cartons.',
      buyerDecision: 'Hold affected models and cartons for quantified correction, engineering or compliance disposition, repeat inspection, or qualified testing.',
    },
    {
      riskNode: 'Traceability and release',
      evidence: 'Reports, listings or certifications, certificate data, production records, unit labels, packages, packing list, cartons, and correction evidence stay linked.',
      buyerDecision: 'Release only named models, revisions, dates, lots, quantities, packages, and cartons with documented open conditions and importer approval.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'July 9, 2026 CPSC product safety warning for JNHCD combination smoke and CO detectors, including the stated failure-to-alert risk, China manufacture, seller response, channels, and ASIN scope',
    'Separate June 25, 2026 CPSC recall for Treatlife combination detectors, including the specific manufacture date, FCC ID, China manufacture, quantity, channel, risk, and remedy',
    'CPSC FY2025 Voluntary Standards Tracking and Access report published May 2026, including current smoke-alarm standards activity and the listed UL 217 and NFPA 72 versions',
    'Current CPSC carbon monoxide alarm standards page and July 8, 2026 mandatory eFiling implementation announcement',
    'Buyer-side sourcing analysis that keeps laboratory, certification, manufacturer, importer, inspection, correction, and shipment-release responsibilities separate',
  ],
  whatToSend: [
    'Destination markets, importer details, sales channels, alarm functions, exact models and SKUs, sensing methods, power and battery types, installation configurations, manufacturer and factory names, production dates, lots, quantities, and carton map',
    'Purchase order, approved specification and sample, hardware and firmware revisions, drawings, full bill of materials, sensor and chamber details, controlled components, dimensions, tolerances, labels, packages, and change log',
    'Complete reports, listing or certification records, issuer verification details, evaluated-sample photographs, test conditions and results, surveillance status, certificate and eFiling data, and unresolved technical questions',
    'Approved label, warning, manual, installation, maintenance, replacement, package, barcode, listing, and carton artwork for every destination, language, model, power option, and sales channel',
    'Approved sampling plan, safe functional checks, test-button expectations, sound method and limits, batteries or fixtures, calibrated tools, environment, defect classes, stop rules, photo list, and correction evidence',
    'Balance-payment and pickup deadlines, hold authority, factory contacts, affected-lot isolation plan, rework or retest route, and exact conditions required for release',
  ],
  redFlags: [
    'Reports or public records name a different model, applicant, manufacturer, factory, sensor, PCB, power source, sounder, enclosure, hardware, firmware, or alarm function',
    'The supplier provides only a logo, marketplace badge, certificate image, report cover, test-button video, or generic “UL” or “CPSC” statement',
    'Production changed a sensor, chamber, PCB, component, firmware, enclosure opening, supplier, factory, or assembly method without qualified disposition',
    'Goods mix models, hardware or firmware revisions, power options, manufacture dates, lots, labels, languages, packages, or internal builds inside one shipment',
    'Sampled units have cracked or loose parts, blocked openings, poor battery contacts, missing fasteners, inconsistent indicators, failed self-tests, abnormal sound readings, or label mismatches',
    'The factory proposes smoke, flame, aerosol, exhaust, unapproved gas, or a phone app as proof of prescribed performance',
    'Failed, corrected, relabeled, reprogrammed, or substituted units cannot be mapped to affected quantities, lots, packages, and cartons',
  ],
  scopeLimits: [
    'A routine China-side inspection does not reproduce qualified smoke or CO alarm tests and is not a compliance certification',
    'Sampling does not prove every unit outside the inspected sample or guarantee detection, warning, battery life, connectivity, or safe future use',
    'Document comparison cannot authenticate every statement without source confirmation and qualified review',
    'Visual and simple functional checks cannot validate sensitivity, response time, nuisance immunity, drift, software thresholds, radio performance, endurance, or environmental durability',
    'Huang Sourcing does not decide legal classification, approve a laboratory or certification body, issue certificates, approve installation, or guarantee customs or marketplace acceptance',
  ],
  relatedLinks: [
    {
      href: verifyUlCertificationChinaArticleHref,
      label: 'Verify claimed UL certification',
      note: 'Check the public record, company, factory, model, standard, status, scope, dates, identifiers, and production match.',
    },
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China laboratory report',
      note: 'Check the issuer, authorization, sample identity, photographs, factory, methods, results, dates, and limitations.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'China manufacturing QC plan',
      note: 'Build design evidence, component and firmware change control, testing, inspections, corrections, and holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Match alarm identity, warnings, instructions, package claims, barcodes, carton marks, quantities, and approved files.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report',
      note: 'Define photos, sampling, checks, readings, lot traceability, defects, affected quantity, decisions, and scope limits.',
    },
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Compare buyer-approved construction, functions, labels, packages, quantities, and evidence while goods remain accessible.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Before balance-payment check',
      note: 'Hold, correct, re-inspect, test, or release a named lot before money and goods move.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, testing, packaging, payment, pickup, supplier, and shipment decisions.',
    },
  ] satisfies RelatedLink[],
  sourceNotes: [
    {
      href: cpscJnhcdWarning,
      label: 'U.S. CPSC - JNHCD combination detector warning',
      note: 'Primary public record dated July 9, 2026 describing the failure-to-alert hazard, China manufacture, seller response, marketplaces, product appearance, and ASINs.',
    },
    {
      href: cpscTreatlifeRecall,
      label: 'U.S. CPSC - Treatlife combination detector recall',
      note: 'Separate primary record dated June 25, 2026 describing the failure-to-alert hazard, exact manufacture date and FCC ID, China manufacture, Amazon sales, and remedy.',
    },
    {
      href: cpscVstarReport,
      label: 'U.S. CPSC - FY2025 Annual VSTAR report',
      note: 'Official report published May 2026 describing current smoke-alarm voluntary-standards activity and listing UL 217 10th Edition and NFPA 72 2025 Edition.',
    },
    {
      href: cpscCoAlarmStandards,
      label: 'U.S. CPSC - Carbon Monoxide Alarm standards activity',
      note: 'Current official page identifying CPSC staff work with UL and NFPA and the listed voluntary-standard references for CO alarms.',
    },
    {
      href: cpscEfilingRelease,
      label: 'U.S. CPSC - Mandatory eFiling implementation',
      note: 'Official July 8, 2026 announcement that eFiling was in effect for certificates covering regulated imported consumer products and did not create new underlying obligations.',
    },
  ] satisfies SourceNote[],
}

export function makeSmokeCoAlarmChecksChinaArticleMetadata(): Metadata {
  const article = smokeCoAlarmChecksChinaArticle

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

export function makeSmokeCoAlarmChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(smokeCoAlarmChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Smoke and carbon monoxide alarm pre-shipment release checklist',
      itemListElement: smokeCoAlarmChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
