import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  lithiumBatteryAirShippingChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  portablePowerStationChecksChinaArticleHref,
  powerBankChecksChinaArticleHref,
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

export const cpscGoalZeroPowerStationRecall =
  'https://www.cpsc.gov/Recalls/2026/Goal-Zero-Recalls-YETI-3000X-Power-Stations-Due-to-Serious-Risk-of-Injury-from-Fire-and-Burn-Hazards'
export const goalZeroPowerStationRecallNotice =
  'https://goalzero.com/pages/yeti-3000x-firmware-update-voluntary-recall'
export const ulPortablePowerPackTesting =
  'https://www.ul.com/services/portable-power-pack-testing'
const ulPortablePowerPackScope =
  'https://www.ul.com/thecodeauthority/knowledgecenter/qa-portable-power-packs'
const gizmodoGoalZeroRecallCoverage =
  'https://gizmodo.com/thousands-of-goal-zero-power-stations-recalled-for-catching-fire-but-theres-a-fix-2000801587'
const walmartRecallList =
  'https://corporate.walmart.com/content/corporate/en_us/recalls.html'

export const portablePowerStationChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: portablePowerStationChecksChinaArticleHref,
  title: 'Portable Power Station Checks Before Shipping from China',
  metaTitle: 'Portable Power Station Checks Before China Shipment',
  metaDescription:
    'Check portable power station model, cells, BMS, inverter, firmware, ports, evidence, labels, accessories, and cartons before China shipment release.',
  publishedDate: 'August 24, 2026',
  publishedDateIso: '2026-08-24T08:31:29+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Portable Power Station Checks Before Shipping from China',
  eyebrow: 'Exact version - battery system - firmware - shipment release',
  image: {
    alt: 'Neutral AI illustration of an unbranded portable power station beside a checklist, multimeter, caliper, scanner, and export cartons',
    height: 900,
    src: '/images/portable-power-station-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/portable-power-station-checks-china.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/portable-power-station-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/portable-power-station-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before paying the balance or allowing pickup for portable power stations made in China, freeze the destination, exact model, rated energy, cell and battery-pack version, battery-management system, inverter and control board, firmware, charger, ports, accessories, labels, instructions, transport evidence, production lot, and carton map. Hold the lot when those elements do not describe one approved production version.',
  answerSummary:
    'Use four linked gates: market and use requirements, exact-model design and test evidence, buyer-side comparison of sampled production with approved references, and traceable correction or release. Routine inspection can document identity, assembly, visible workmanship, labels, limited buyer-approved functions, accessories, quantities, and pack-out. It cannot prove cell quality, BMS protection, inverter safety, firmware reliability, thermal-runaway resistance, transport compliance, or legal compliance.',
  primaryCta: { label: 'Check Power Stations Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side portable power station evidence and quality check before shipment.

Destination, importer, sales channel, intended use, and installation limits:
Exact models, rated Wh, cell chemistry, pack, BMS, inverter, control board, firmware, ports, charger, and accessories:
Manufacturer, factory, production dates, batches, quantities, and carton map:
Applicable requirements, complete reports, listing or certificate references, and transport records:
Approved samples, drawings, bill of materials, labels, instructions, retail packs, and cartons:
Known changes, failures, substitutions, rework, evidence gaps, or mixed production:
Balance-payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#define-product', label: 'Define the product' },
    { href: '#document-chain', label: 'Evidence chain' },
    { href: '#physical-checks', label: 'Factory checks' },
    { href: '#firmware-change-control', label: 'Firmware and changes' },
    { href: '#inspection-limits', label: 'Inspection limits' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze destination, responsible party, intended portable use, exact model, rated energy and outputs, cell chemistry and supplier, pack, BMS, inverter, control board, firmware, charger, ports, accessories, lot, and carton version',
    'Have qualified parties map the exact product and market to applicable product-safety, electrical, battery, transport, labeling, certification, installation, reporting, and marketplace requirements',
    'Map complete reports and listing or certificate references to the manufacturer, factory, exact model, cell, pack, BMS, inverter, board, firmware, charger, sample photos, dates, methods, results, deviations, and limitations',
    'Control drawings, bill of materials, cells, busbars, pack insulation, sensors, BMS, inverter, control board, firmware release, wiring, fuses, connectors, enclosure, charger, labels, instructions, and every approved change',
    'Compare sampled production for identity, assembly, exterior condition, ports, display, charging and output under a buyer-approved limited method, fan behavior, accessories, markings, serials, quantities, and pack-out',
    'Hold swelling, leakage, impact damage, corrosion, smoke, unusual odor, excessive heat, arcing, error loops, unstable output, changed electronics, mixed firmware, unsupported reports, or cartons that cannot be mapped to a lot',
    'Route protection behavior, abnormal operation, electrical strength, temperature, overload, drop, vibration, water ingress, endurance, battery abuse, thermal propagation, and transport questions to qualified laboratories or engineers',
    'Release only named hardware and firmware versions, batches, quantities, chargers, accessories, and cartons after documented correction, qualified disposition, and repeat inspection or testing where required',
  ],
  checkGroups: [
    {
      title: 'Controlled product identity',
      items: [
        'Destination, intended use, responsible party, manufacturer, factory, model, rated Wh, cell, pack, BMS, inverter, board, firmware, charger, ports, accessories, serial scheme, lot, and approved changes are controlled',
        'PO, drawings, bill of materials, approved sample, reports, labels, instructions, online listing, retail pack, transport records, and cartons describe one version',
      ],
    },
    {
      title: 'Qualified product and transport evidence',
      items: [
        'Responsible parties select applicable requirements and complete files identify the tested product, components, software, factory, sample, methods, results, photos, dates, deviations, and limits',
        'A standard name, report cover, supplier declaration, listing mark, marketplace badge, SDS, or UN 38.3 summary is never accepted without exact-model scope and issuer verification',
      ],
    },
    {
      title: 'Finished goods and limited functions',
      items: [
        'Sampled units match approved assembly, ports, display, controls, charger, cable, fan and vent arrangement, labels, instructions, accessories, and buyer-approved limited function method',
        'Model, serial, hardware revision, firmware release, production lot, retail-pack barcode, carton marks, quantities, destination segregation, and packing list remain aligned',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, component and firmware versions, carton map, supplier changes, controlled rework, qualified disposition, incident data, and repeat checks remain traceable',
        'Cleared and unresolved models, versions, batches, chargers, accessories, and cartons stay separated; final release states every open condition',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why portable power station release evidence matters now',
      paragraphs: [
        'On August 20, 2026, the U.S. Consumer Product Safety Commission recalled about 46,200 Goal Zero YETI 3000X portable power stations made in China. CPSC said the circuit board could overheat and reported four incidents involving fire, overheating, or smoke, with no reported injuries. The remedy was a firmware update rather than a physical return or component replacement.',
        'Goal Zero\'s own recall notice says all 120V YETI 3000X units were affected and identifies SKU 36400, UPC 847974007563, and firmware version 1.9.5 as the remedy state. That combination makes the case useful for sourcing: model, market voltage, control-board behavior, firmware, label identity, serial records, post-sale action, and affected quantity must stay connected.',
        'Independent coverage published the next day and Walmart listed the recall for units sold through its marketplace. Earlier Goal Zero power-supply, cable, and expansion-module recalls involved different products and facts, so they do not establish a shared root cause. They do show why buyers should not reduce portable power station release to a generic battery certificate or one charging video.',
      ],
      bullets: [
        'Treat the cell, pack, BMS, inverter, control board, firmware, charger, connectors, wiring, sensors, fuses, enclosure, cooling path, labels, and serial scheme as controlled product features',
        'Do not infer safe or compliant performance from a familiar housing, supplier video, report cover, listing logo, one successful charge, or one AC-output demonstration',
        'Keep pre-shipment observations linked to complaints, returns, service records, firmware releases, production changes, affected serials, warehouses, channels, and cartons',
        'Correction leverage is strongest before final payment and pickup, while versions, lots, units, chargers, accessories, and cartons can still be isolated and rechecked',
      ],
      citations: [
        { href: cpscGoalZeroPowerStationRecall, label: 'CPSC YETI 3000X recall' },
        { href: goalZeroPowerStationRecallNotice, label: 'Goal Zero firmware recall notice' },
        { href: gizmodoGoalZeroRecallCoverage, label: 'Gizmodo recall coverage' },
        { href: walmartRecallList, label: 'Walmart product recall list' },
      ],
    },
    {
      id: 'define-product',
      title: 'Define the product, use, and evidence boundary first',
      paragraphs: [
        'Start with destination, responsible party, portable versus installed use, indoor or outdoor claims, rated energy, battery chemistry, rated AC and DC inputs and outputs, exact model, serial structure, cell and pack version, BMS, inverter, control board, firmware, charger, ports, expansion interfaces, cables, enclosure, cooling method, labels, instructions, accessories, factory, and bill-of-material revision.',
        'Do not treat a phone-size power bank, a portable AC power station, and a stationary residential energy storage system as interchangeable. UL Solutions describes UL 2743 as covering portable power packs used when normal grid power is unavailable and says phone-charging power banks sit outside that standard\'s scope. Its current code-authority guidance also distinguishes portable power packs from stationary systems evaluated to UL 9540.',
        'The standard or certification path depends on the exact product, destination, use, ratings, installation claims, and commercial responsibilities. Record who made that requirements decision, the sources and editions checked, the assumptions, and every unresolved condition. An inspection company should not invent the legal or engineering scope at the factory gate.',
      ],
      bullets: [
        'Separate portable operation from transfer-switch, home-backup, permanently connected, daisy-chain, expansion-battery, or stationary installation claims',
        'Freeze cell and pack supplier, chemistry, series and parallel configuration, BMS and inverter versions, firmware checksum or release ID, charger, cable, connector, fuse, sensor, enclosure, fan, and label revisions',
        'Keep destination voltage and frequency, plug, rated input and output, user environment, warnings, instructions, online claims, and carton identity aligned',
        'Reject family-level evidence when the tested construction, rating, firmware, factory, or intended use cannot be mapped to the exact shipped model',
      ],
      citations: [
        { href: ulPortablePowerPackTesting, label: 'UL Solutions portable power pack testing scope' },
        { href: ulPortablePowerPackScope, label: 'UL Solutions portable versus stationary power guidance' },
        { href: powerBankChecksChinaArticleHref, label: 'Huang Sourcing power bank checks guide' },
      ],
    },
    {
      id: 'document-chain',
      title: 'What should design, test, and transport evidence connect?',
      paragraphs: [
        'Review complete evidence rather than a report cover, certification mark, supplier declaration, SDS, or transport-test summary alone. Record the issuer, client, manufacturer, factory, exact model, ratings, sample photos, drawings, bill of materials, cell and pack identity, BMS, inverter, control board, firmware, charger, receipt and test dates, standard edition, methods, results, deviations, limitations, and model-family rationale.',
        'Compare the tested sample photographs and identifiers with the approved reference, controlled drawings, purchase records, firmware release record, incoming-component records, mass-production units, rating label, instructions, online listing, accessories, retail pack, shipping papers, and cartons. A genuine file for a similar enclosure, capacity, battery pack, BMS, inverter, board, firmware, or charger does not answer the release question.',
        'Control post-test changes. If the supplier changes cells, pack construction, insulation, busbars, BMS, protection settings, inverter, board, code, sensor, fuse, wiring, connector, charger, enclosure, venting, fan, supplier, process, subcontractor, or factory, hold the affected lot until a qualified party documents whether existing evidence still applies or new evaluation is required.',
      ],
      bullets: [
        'Escalate cropped files, edited results, inconsistent dates, unreadable identifiers, missing sample photos, unclear methods, unsupported family claims, expired directory entries, or evidence issued to another factory',
        'Link cells, packs, boards, firmware, inverters, chargers, connectors, fuses, labels, and accessories to incoming lots, finished units, serials, retail packs, and cartons',
        'Keep product-safety evidence, transport evidence, buyer-side inspection observations, and shipment-provider acceptance as separate decisions',
        'Keep failed or conditional results visible; do not replace them with a supplier video, sample demonstration, or improvised test',
      ],
      citations: [
        { href: ulPortablePowerPackTesting, label: 'UL 2743 portable power pack testing overview' },
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing lab report verification guide' },
        { href: lithiumBatteryAirShippingChinaArticleHref, label: 'Huang Sourcing lithium battery air-shipment guide' },
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled finished goods with approved references while the lot remains accessible. The useful output is a traceable record of model and serial identity, rated label, assembly, enclosure, handles and wheels, visible vents and fans, ports, controls, display, charger and cables, accessories, warnings, instructions, quantities, defects, mismatches, and affected cartons.',
        'Perform powered checks only with a buyer-approved written method, suitable loads and instruments, safe electrical protection, trained personnel, clear stop rules, specified state of charge, approved ambient conditions, and a safe quarantine route. Observe startup, charging indication, selected approved DC and AC outputs, controls, display, fan behavior, error codes, abnormal noise, odor, heating, sparking, cable fit, shutdown, and restart without opening or bypassing the product.',
        'Stop and isolate the sample on swelling, leakage, impact damage, corrosion, smoke, sharp odor, rapid or excessive heating, arcing, unstable output, repeated errors, failed shutdown, damaged insulation, loose high-current connectors, unusual fan behavior, or a mismatch from the approved method. Preserve model, serial, hardware, firmware, settings, readings, time sequence, video, production lot, and carton traceability for qualified disposition.',
      ],
      bullets: [
        'Use an approved sampling plan, defect classes, measurement list, function method, load limits, charge limits, thermal stop rules, photo and video list, prohibited actions, and traceability scheme',
        'Record readings and functional observations as limited inspection evidence, not proof of prescribed performance, protection thresholds, thermal behavior, endurance, transport safety, or compliance',
        'Quantify missing, substituted, loose, cracked, dented, corroded, overheated, mislabeled, unreadable, incomplete, mixed, or poorly packed units and parts',
        'Do not short, crush, puncture, drop, overcharge, overdischarge, immerse, block vents, bypass protections, open energized enclosures, alter firmware, or improvise abnormal-operation or battery-abuse tests',
      ],
    },
    {
      id: 'firmware-change-control',
      title: 'Connect firmware and component changes to the released lot',
      paragraphs: [
        'The public case shows why firmware can be part of a safety remedy. A buyer should therefore control the firmware release identifier, approval record, compatible hardware versions, installation status, update method, rollback or recovery instructions where applicable, production flashing record, sampled-unit verification method, and serial or lot coverage.',
        'A factory screenshot or app display is not enough when units cannot be linked to production records. Record which units were checked, how the version was read, whether the method changes the unit, who owns the software decision, what happens on an interrupted update, and how corrected units and cartons are separated from unresolved stock.',
        'Post-sale complaints, returns, overheating reports, error logs, service actions, firmware releases, component substitutions, and supplier changes should feed back into hold criteria. A pre-shipment pass is not a permanent clearance when new evidence identifies a version-specific issue.',
      ],
      bullets: [
        'Freeze the approved hardware-firmware compatibility matrix and every released checksum or version identifier',
        'Map flashing or update records to serials, production dates, work orders, rework records, sampled units, warehouse locations, and cartons',
        'Keep failed updates, error loops, unexplained version differences, undocumented hot fixes, and recovery limitations visible',
        'Require qualified disposition before releasing stock affected by a new complaint pattern, component change, protection-setting change, or firmware remedy',
      ],
      citations: [
        { href: goalZeroPowerStationRecallNotice, label: 'Goal Zero model and firmware remedy details' },
        { href: cpscGoalZeroPowerStationRecall, label: 'CPSC recall facts and incident scope' },
      ],
    },
    {
      id: 'inspection-limits',
      title: 'Keep inspection, laboratory testing, and compliance decisions separate',
      paragraphs: [
        'Routine inspection is strongest at identity, visible assembly, workmanship, limited buyer-approved functions, markings, instructions, accessories, quantity, packaging, and traceability. It is not a substitute for qualified evaluation of battery cells and packs, BMS protection, inverter and charger safety, electrical strength, abnormal operation, thermal propagation, enclosure integrity, transport testing, or installation requirements.',
        'Sampling has two limits: not every unit is examined, and the inspected characteristics are narrower than prescribed laboratory methods and real-life operating states. Record sample selection, preconditioning, state of charge, instruments, loads, duration, ambient conditions, readings, stop rules, failures, untested characteristics, and affected quantity.',
        'The importer or responsible party should own the requirements map and final market decision. Qualified laboratories, engineers, certification bodies, battery and transport specialists, carriers, and authorities answer different questions. Keep those conclusions attributed and do not convert a visual comparison into a certification or shipping guarantee.',
      ],
      bullets: [
        'State exactly what was observed, measured, compared, not tested, and not provided',
        'Do not call a limited charge or output check a capacity, runtime, protection, endurance, safety, or compliance test',
        'Do not infer hidden cell, weld, insulation, creepage, clearance, code, sensor, calibration, or protection quality from appearance',
        'Keep final payment, pickup, carrier acceptance, regulatory compliance, and marketplace approval as separate named decisions',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Exact model, battery system, hardware, and firmware',
      evidence: 'Destination, intended use, manufacturer, factory, model, ratings, cells, pack, BMS, inverter, board, firmware, charger, ports, serials, batch, listing, and approved changes align.',
      buyerDecision: 'Hold ambiguous families, mixed cells or firmware, undocumented boards or protection settings, conflicting use claims, or unexplained production changes.',
    },
    {
      riskNode: 'Qualified product and transport evidence',
      evidence: 'Complete files map the tested product, ratings, construction, software, factory, methods, results, sample photos, dates, deviations, limitations, and current production revision.',
      buyerDecision: 'Hold missing, partial, mismatched, changed, failed, or unverifiable evidence; route safety, transport, and compliance decisions to qualified parties.',
    },
    {
      riskNode: 'Finished-goods comparison',
      evidence: 'Sampled production matches approved identity, assembly, ports, controls, display, charger, buyer-approved functions, labels, instructions, accessories, and pack-out.',
      buyerDecision: 'Hold affected units, versions, batches, chargers, accessories, and cartons for quantified correction, qualified disposition, repeat inspection, or laboratory testing.',
    },
    {
      riskNode: 'Incident, change, and release traceability',
      evidence: 'Inspection, test, complaint, service, firmware, component, correction, serial-range, quantity, warehouse, channel, and carton records stay linked to the released population.',
      buyerDecision: 'Release only named models, hardware and firmware versions, batches, quantities, chargers, accessories, and cartons with documented open conditions and responsible-party approval.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'August 20, 2026 CPSC recall used for the public product, origin, quantity, hazard, incident, sales-period, and remedy facts',
    'Goal Zero recall notice used for the affected 120V model, SKU, UPC, firmware remedy, version identifier, installation steps, and no-injury statement',
    'UL Solutions portable power pack pages used to distinguish portable power packs, phone-charging power banks, and stationary energy storage systems and to identify UL 2743 scope without claiming coverage for any product',
    'August 21 Gizmodo coverage and Walmart recall listing used as independent current-attention signals, not as substitutes for the primary recall record',
    'Buyer-side sourcing analysis connecting exact-model records, component and firmware change control, limited finished-goods observations, transport evidence, and hold-or-release decisions',
  ],
  whatToSend: [
    'Destination markets, importer or responsible-party details, sales channels, portable or installed use, indoor or outdoor claims, rated Wh and outputs, exact models, serial scheme, manufacturer, factory, production dates, batches, quantities, warehouses, and carton map',
    'Purchase order, approved drawings and samples, bill of materials, cell and pack specifications, BMS, protection settings, inverter, control board, firmware identifiers, charger, wiring, fuses, connectors, enclosure, cooling, label, instruction, accessory, tolerance, and change-control files',
    'Complete qualified reports, issuer-verification details, listing or certificate references, test-sample photos, exact-model or family-coverage rationale, transport-test records, engineering dispositions, and unresolved performance or compliance questions',
    'Rating and serial-label artwork, warnings, instructions, retail-pack artwork, barcodes, online listings, service and firmware information, accessory map, shipping marks, carton marks, and packing list',
    'Approved sampling plan, defect classes, state-of-charge limits, charge and output method, instruments, loads, measurement points, stop rules, prohibited actions, photo and video list, correction evidence, and decision owner',
    'Complaint, return, incident, service, firmware-release, component-change, failed-unit, rework, retest, quarantine, and recall records relevant to the model or shared construction',
    'Balance-payment and pickup deadlines, hold authority, factory contacts, qualified retest plan, affected-version traceability, carrier or forwarder requirements, and exact conditions required for release',
  ],
  redFlags: [
    'The report, listing, label, transport record, or certificate reference names a different manufacturer, factory, model, rating, cell, pack, BMS, inverter, board, firmware, charger, or intended use',
    'The supplier provides only a standard name, report cover, certification logo, marketplace badge, generic declaration, SDS, UN 38.3 summary, or charging video',
    'Production changed cells, pack construction, insulation, BMS, protection settings, inverter, code, board, sensor, fuse, wiring, connector, charger, enclosure, cooling, supplier, process, subcontractor, or factory without qualified disposition',
    'Sampled units swell, leak, smoke, smell, heat, spark, display errors, lose output, fail shutdown, charge inconsistently, or respond differently from the approved method or reference',
    'Model, serial, hardware, firmware, component lot, production date, inspection result, failed unit, correction, retail pack, shipping paper, and carton cannot be linked',
    'The factory proposes shorting, overcharging, dropping, crushing, puncturing, immersing, blocking vents, bypassing protection, opening live parts, changing firmware during inspection, or improvising abuse tests',
    'Complaint, return, service, incident, firmware, or failed-test data is missing, summarized without originals, or excluded from the release decision without a named qualified owner',
  ],
  scopeLimits: [
    'A routine China-side inspection does not reproduce prescribed cell, pack, BMS, inverter, charger, abnormal-operation, thermal, electrical, drop, vibration, endurance, ingress, abuse, propagation, or transport testing and is not a compliance certification',
    'Sampling does not prove every unit outside the inspected sample or guarantee future battery, software, inverter, charger, connection, shipping, installation, or user performance',
    'Document comparison cannot authenticate every statement without issuer confirmation, official-directory checks where available, and qualified review',
    'Limited functional checks cannot validate hidden cells, welds, busbars, insulation, wiring, code logic, protection thresholds, calibration, component performance, thermal pathways, or every operating state and foreseeable misuse',
    'Huang Sourcing does not select legal requirements, approve engineering, issue certifications, decide incident reporting or recalls, classify dangerous goods, submit filings, guarantee carrier acceptance, or promise customs, marketplace, fire, injury, or consumer outcomes',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China laboratory report',
      note: 'Check the issuer, scope, sample photos, exact model, factory, components, software, dates, methods, results, limitations, and verification route.',
    },
    {
      href: lithiumBatteryAirShippingChinaArticleHref,
      label: 'Lithium battery air-shipment checklist',
      note: 'Keep product identity, cell and pack evidence, transport-test records, state of charge, packaging, marks, documents, and carrier acceptance aligned.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'China manufacturing QC plan',
      note: 'Build approved references, component and firmware change control, qualified testing, inspections, corrections, holds, and incident feedback into the order.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report',
      note: 'Define photos, videos, sampling, measurements, limited functions, traceability, defects, affected quantity, decisions, and stated limits.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Match model, serial scheme, ratings, warnings, instructions, chargers, accessories, retail packs, barcodes, carton marks, and quantities.',
    },
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC before balance payment',
      note: 'Keep correction, qualified retest, and repeat-inspection leverage before final payment and forwarder pickup.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, testing, batteries, packaging, payment, pickup, supplier, and shipment decisions.',
    },
  ] satisfies RelatedLink[],
  sourceNotes: [
    {
      href: cpscGoalZeroPowerStationRecall,
      label: 'U.S. CPSC - Goal Zero YETI 3000X power station recall',
      note: 'Primary August 20, 2026 record for the China-made product, affected quantity, circuit-board hazard, four reported incidents, no reported injuries, sales period, and firmware repair.',
    },
    {
      href: goalZeroPowerStationRecallNotice,
      label: 'Goal Zero - YETI 3000X safety recall and firmware update',
      note: 'Primary company notice identifying all affected 120V units, SKU, UPC, version 1.9.5 remedy, installation process, reported incidents, and stop-use instruction.',
    },
    {
      href: ulPortablePowerPackTesting,
      label: 'UL Solutions - Portable power pack testing',
      note: 'Independent standards-organization overview of UL 2743 scope and its distinction from phone-charging power banks; it does not establish certification or compliance for any cited or inspected product.',
    },
    {
      href: ulPortablePowerPackScope,
      label: 'UL Solutions - Portable power packs and stationary storage',
      note: 'Current code-authority guidance distinguishing portable power packs from stationary energy storage systems and emphasizing certification for intended use.',
    },
    {
      href: gizmodoGoalZeroRecallCoverage,
      label: 'Gizmodo - Goal Zero YETI 3000X recall coverage',
      note: 'Independent August 21, 2026 coverage used as a current attention signal and for links to earlier, separate Goal Zero fire-hazard recalls.',
    },
    {
      href: walmartRecallList,
      label: 'Walmart - Product recalls',
      note: 'Retailer recall list showing the August 20, 2026 YETI 3000X notice for units sold through Walmart.com; used as a separate channel signal.',
    },
  ] satisfies SourceNote[],
}

export function makePortablePowerStationChecksChinaArticleMetadata(): Metadata {
  const article = portablePowerStationChecksChinaArticle

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

export function makePortablePowerStationChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(portablePowerStationChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Portable power station pre-shipment release checklist',
      itemListElement: portablePowerStationChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
