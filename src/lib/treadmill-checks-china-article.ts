import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qcBeforeBalanceArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  treadmillChecksChinaArticleHref,
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

export const cpscTreadmillSettlement =
  'https://www.cpsc.gov/Newsroom/News-Releases/2026/Johnson-Health-Tech-Trading-Agrees-to-Pay-16875-Million-Civil-Penalty-for-Failure-to-Immediately-Report-Fall-Hazard-with-Horizon-T101-05-Treadmills'
export const federalRegisterTreadmillSettlement =
  'https://www.govinfo.gov/content/pkg/FR-2026-08-06/pdf/2026-16010.pdf'
export const cpscHorizonTreadmillRecall =
  'https://www.cpsc.gov/Recalls/2023/Johnson-Health-Tech-Trading-Recalls-Horizon-Fitness-Treadmills-Due-to-Fall-Hazard'
const cpscSperaxTreadmillWarning =
  'https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-Sperax-Walking-Pads-and-Treadmills-Immediately-Due-to-Risk-of-Serious-Injury-from-Fall-Burn-and-Fire-Hazards'
const cpscMatrixTreadmillRecall =
  'https://www.cpsc.gov/Recalls/2026/Johnson-Health-Tech-Expands-Recall-to-Include-Matrix-Retail-and-Vision-Treadmills-Due-to-Fire-Hazard'
const astmF2115 = 'https://store.astm.org/f2115-25.html'
const sgiNewsCoverage =
  'https://www.sginews.com/EMS_Base/EMS_Excerpt.aspx?tTargetUrl=%2FContent%2Fjohnson-health-tech-settles-with-cpsc-over-treadmills.aspx'

export const treadmillChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: treadmillChecksChinaArticleHref,
  title: 'Treadmill Checks Before Shipping from China',
  metaTitle: 'Treadmill Checks Before Shipping from China',
  metaDescription:
    'Check treadmill model, firmware, speed controls, stop system, power connection, evidence, labels, and cartons before China shipment release.',
  publishedDate: 'August 23, 2026',
  publishedDateIso: '2026-08-23T03:27:02+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Treadmill Checks Before Shipping from China',
  eyebrow: 'Model identity - controls - change evidence - shipment release',
  image: {
    alt: 'Neutral AI illustration of an inspector checking an unbranded treadmill with a handheld meter, checklist, caliper, and export cartons',
    height: 900,
    src: '/images/treadmill-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/treadmill-checks-china.webp', width: 1600 },
    {
      height: 1200,
      src: '/images/treadmill-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/treadmill-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before paying the balance or allowing pickup for treadmills made in China, freeze the destination, exact model and serial scheme, intended use, controller and firmware version, motor and drive system, speed and incline controls, emergency stop, power connection, guards, labels, instructions, qualified evidence, production lot, and carton map. Hold the lot when those elements do not describe one approved production version.',
  answerSummary:
    'Use four linked gates: responsible-party requirements mapping, exact-model design and test evidence, buyer-side comparison of sampled production with approved references, and traceable correction or release. Routine inspection can document identity, assembly, accessible guards, belt tracking, controls, emergency-stop operation under a buyer-approved method, workmanship, markings, quantities, and pack-out. It cannot prove software reliability, speed accuracy under all loads, stopping performance, electrical safety, thermal endurance, structural integrity, or legal compliance.',
  primaryCta: { label: 'Check Treadmills Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side treadmill evidence and quality check before shipment.

Destination, importer, sales channel, intended users, and home or commercial use:
Exact models, serial scheme, controller, firmware, motor, drive, speed, and incline versions:
Manufacturer, factory, production dates, batches, quantities, and carton map:
Applicable requirements, standards, complete reports, certificate references, and incident/change records:
Approved samples, drawings, bill of materials, labels, instructions, accessories, and packaging:
Known changes, failures, substitutions, rework, evidence gaps, or mixed production:
Balance-payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#freeze-version', label: 'Freeze the version' },
    { href: '#document-chain', label: 'Evidence chain' },
    { href: '#physical-checks', label: 'Factory checks' },
    { href: '#incident-change-control', label: 'Incident and change control' },
    { href: '#inspection-limits', label: 'Inspection limits' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze destination, responsible party, home or commercial use, intended users, exact model, serial prefix, frame, deck, belt, roller, motor, controller, firmware, console, speed, incline, stop system, cord, accessories, lot, and carton version',
    'Have qualified parties map the exact treadmill and market to applicable safety, electrical, fitness-equipment, labeling, certification, reporting, and filing requirements before selecting evidence or inspection criteria',
    'Map complete reports and certificate or listing references to the manufacturer, factory, exact model, controller, firmware, motor, drive, sample photos, dates, methods, results, deviations, and limitations',
    'Control drawings, bill of materials, controller boards, firmware checksum or release identifier, motor, sensors, wiring, power inlet, belt, rollers, guards, frame, fasteners, labels, instructions, and every approved change',
    'Compare sampled production for identity, assembly, belt tracking and tension references, accessible gaps and guards, controls, emergency stop, incline, power connection, workmanship, noise, labels, accessories, and pack-out',
    'Hold unexplained speed or stop behavior, overheating or odor, unstable incline, missing guards, mixed serial prefixes, changed electronics, unsupported reports, failed units, or cartons that cannot be mapped to a lot',
    'Route speed and stop performance, electrical protection, abnormal operation, thermal endurance, structural loads, stability, durability, entrapment, and software-safety questions to qualified laboratories or engineers',
    'Release only named models, hardware and firmware versions, batches, quantities, accessories, and cartons after documented correction, qualified disposition, and repeat inspection or testing where required',
  ],
  checkGroups: [
    {
      title: 'Controlled product identity',
      items: [
        'Destination, use class, responsible party, manufacturer, factory, model, serial prefix, frame, deck, belt, motor, controller, firmware, console, incline, stop system, lot, and approved changes are controlled',
        'PO, drawings, bill of materials, approved sample, reports, labels, instructions, online listing, accessories, retail pack, and cartons describe one version',
      ],
    },
    {
      title: 'Qualified design evidence',
      items: [
        'Responsible parties select applicable requirements and complete files identify the tested product, hardware, software, factory, methods, results, photos, dates, deviations, and limits',
        'A standard name, report cover, supplier declaration, certification logo, or marketplace badge is never accepted without scope and exact-model verification',
      ],
    },
    {
      title: 'Finished goods and controls',
      items: [
        'Sampled units match approved assembly, belt and rollers, guards, motor and controller identity, console, speed and incline controls, stop system, cord, labels, instructions, accessories, and pack-out',
        'Model, serial prefix, firmware or revision evidence, production lot, retail-pack barcode, carton marks, quantities, destination segregation, and packing list remain aligned',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, component and firmware versions, carton map, supplier changes, controlled rework, qualified disposition, incident data, and repeat checks remain traceable',
        'Cleared and unresolved models, versions, batches, accessories, and cartons stay separated; final release states every open condition',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why treadmill release evidence matters now',
      paragraphs: [
        'On August 4, 2026, the U.S. Consumer Product Safety Commission announced a provisionally accepted $16.875 million settlement with Johnson Health Tech over staff charges tied to Horizon T101-05 treadmills. CPSC said the company had received at least 874 reports of unexpected acceleration, stopping, or speed changes, including at least 71 injury reports, before the October 2022 recall. The Federal Register agreement states that the settlement is not an admission by the company or a Commission determination that the company violated the law.',
        'The official record is unusually relevant to sourcing controls because it identifies production changes made in February and September 2021, continuing incident data, a later software-repair recall, and compliance-system requirements. The lesson is not that one factory inspection would have prevented the case. It is that model, serial, hardware, software, production-change, complaint, incident, test, and release records must stay connected after shipment as well as before it.',
        'A separate April 2026 CPSC warning covered China-made Sperax walking pads and treadmills after reports of uncontrollable speed, abrupt stops, falls, overheating, fires, and burns. A January 2026 recall involving China-made Matrix and Vision treadmills concerned loose power-cord connections and overheating. These actions involve different products and facts; together they keep speed control, software, power connections, heat, model identity, and incident escalation current buyer decision nodes.',
      ],
      bullets: [
        'Treat controller, firmware, motor drive, speed sensor, console, stop system, incline system, power inlet, cord, and serial scheme as controlled product features',
        'Do not infer safe or compliant performance from an unloaded factory video, a familiar housing, a generic report, or one successful start-stop cycle',
        'Keep pre-shipment observations linked to post-sale complaints, returns, service records, software revisions, production changes, and affected serial ranges',
        'Correction leverage is strongest before final payment and pickup, while versions, lots, units, accessories, and cartons can still be isolated and rechecked',
      ],
      citations: [
        { href: cpscTreadmillSettlement, label: 'CPSC Johnson Health Tech settlement announcement' },
        { href: federalRegisterTreadmillSettlement, label: 'Federal Register settlement agreement' },
        { href: cpscHorizonTreadmillRecall, label: 'CPSC Horizon T101-05 recall' },
        { href: cpscSperaxTreadmillWarning, label: 'CPSC Sperax treadmill warning' },
        { href: cpscMatrixTreadmillRecall, label: 'CPSC Matrix and Vision treadmill recall' },
      ],
    },
    {
      id: 'freeze-version',
      title: 'Freeze use, hardware, software, and serial identity first',
      paragraphs: [
        'Start with destination, responsible party, home or commercial setting, intended users, rated user mass, exact model, serial-number structure, frame, deck, belt, front and rear rollers, motor, motor controller, speed sensor, console, firmware or software release, incline motor and mechanism, emergency stop, power inlet and cord, handrails, foot rails, guards, labels, instructions, accessories, factory, and bill-of-material revision.',
        'Do not let one family name hide different controllers, firmware, motors, consoles, power assemblies, frames, or intended uses. The 2022 Horizon recall separated China and Vietnam production through serial prefixes. That does not make serial prefixes proof of safety; it shows why the PO, tested sample, production records, firmware record, product label, service data, retail listing, and cartons should identify the version actually shipped.',
        'ASTM lists F2115-25 as the active treadmill specification and describes controls, accessible stop mechanisms, moving-part guarding, foot rails, handrails, warnings, and other design topics. Its scope page helps buyers frame evidence requests; the importer and qualified advisers must determine which standards, editions, regulations, tests, certifications, and markings apply to the exact product and market.',
      ],
      bullets: [
        'Record the requirements owner, sources checked, date, applicable editions, exact-product rationale, assumptions, and unresolved conditions',
        'Treat a controller, firmware, sensor, motor, wire harness, console, power inlet, cord, belt, roller, guard, frame, fastener, supplier, tool, process, subcontractor, or factory change as controlled',
        'Keep destination, home/commercial use, voltage, plug, model, firmware, serial range, and accessory versions physically and digitally segregated',
        'Reject model or firmware identities that appear only in a sales listing but cannot be found in controlled product, production, test, or release records',
      ],
      citations: [
        { href: astmF2115, label: 'ASTM F2115-25 scope and status' },
        { href: cpscHorizonTreadmillRecall, label: 'CPSC serial-prefix details for the Horizon recall' },
      ],
    },
    {
      id: 'document-chain',
      title: 'What should treadmill design and test evidence connect?',
      paragraphs: [
        'Review complete evidence rather than a report cover, standard name, certification mark, or supplier declaration. Record the issuer, client, manufacturer, factory, exact model, intended use, rated user mass, sample photos, drawings, bill of materials, controller and firmware identity, motor and sensor, power assembly, receipt and test dates, standard edition, methods, results, deviations, limitations, and any model-family rationale.',
        'Compare the tested sample photographs and identifiers with the approved reference, current drawings, firmware or software release record, incoming-component records, mass-production units, labels, instructions, accessories, online listing, retail pack, and cartons. A real report for a similar console, controller, motor, frame, or software version does not answer the shipment question.',
        'Control post-test changes. If the supplier changes electronics, code, calibration values, motor, sensor, belt, roller, incline system, stop mechanism, power inlet, cord, frame, guard, supplier, process, subcontractor, or factory, hold the affected lot until the responsible party documents whether existing evidence still applies or new evaluation is required.',
      ],
      bullets: [
        'Escalate cropped files, edited results, inconsistent dates, unreadable identifiers, missing sample photos, unclear methods, unsupported family claims, or evidence issued to another factory',
        'Link controller, motor, sensor, power, belt, roller, guard, label, and accessory purchase or production records to finished lots and cartons',
        'Separate laboratory conclusions from buyer-side identity, workmanship, assembly, quantity, packaging, and traceability observations',
        'Keep failed or conditional results visible; do not replace them with a supplier video, user demonstration, or improvised test',
      ],
      citations: [
        { href: astmF2115, label: 'ASTM F2115-25 treadmill scope' },
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing lab report verification guide' },
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled finished goods with approved references while the lot remains accessible. The useful output is a traceable record of model and serial identity, assembly, frame, deck, belt and roller appearance, belt alignment, accessible gaps and guards, foot rails, handrails, console, controls, stop key or button, incline, power connection, accessories, labels, instructions, quantities, defects, mismatches, and affected cartons.',
        'Perform powered checks only at a buyer-approved safe station with a written method, suitable electrical protection, trained personnel, clear stop rules, and no person running on the belt. Observe startup, low and selected approved speeds without a rider, displayed versus independently measured values where the method permits, speed transitions, stop response, incline movement, belt tracking, abnormal vibration, noise, odor, heating, sparking, error codes, and restart behavior.',
        'Stop and isolate the sample on unexpected acceleration, abrupt stopping, failure to stop, runaway incline, unstable belt tracking, rubbing, smoke, odor, excessive heat, arcing, damaged insulation, loose power connection, abnormal noise, error loops, or unsafe access to moving parts. Preserve the unit, controller and firmware identity, settings, video, measurements, time sequence, and carton traceability for qualified disposition.',
      ],
      bullets: [
        'Use an approved sampling plan, defect classes, assembly method, measurement list, powered-check method, photo and video list, prohibited actions, and traceability scheme',
        'Record speed, incline, stop, temperature, noise, and error observations as limited inspection evidence, not proof of prescribed performance or compliance',
        'Quantify missing, substituted, loose, cracked, misaligned, rubbing, unstable, overheating, mislabeled, unreadable, incomplete, mixed, or poorly packed units and parts',
        'Do not use a person as a dynamic load, bypass a safety device, open energized enclosures, alter firmware, defeat guards, or improvise electrical, structural, endurance, entrapment, or loaded stopping tests',
      ],
    },
    {
      id: 'incident-change-control',
      title: 'Connect factory release to complaints, incidents, and changes',
      paragraphs: [
        'Pre-shipment release should create a record that remains usable after sale: exact model, serial range, production date, factory, controller, firmware, motor, sensor, power assembly, test and inspection results, deviations, approved changes, accessories, destination, quantities, and cartons. If complaints arrive, the responsible party needs to identify which units share the relevant configuration.',
        'Separate a one-off service issue from a possible pattern only through disciplined data. Preserve complaint wording, date, model and serial, firmware, use conditions, event sequence, injuries or property damage when reported, returned-part findings, service action, production change, retest evidence, and affected population. Do not wait for a factory root-cause theory before preserving and escalating facts.',
        'The 2026 settlement record is useful because it links incident review, production changes, reporting processes, internal controls, and continuing duties. It does not establish a universal reporting rule for every event or buyer. Importers and manufacturers should obtain qualified legal advice and follow the requirements that apply to their market and role.',
      ],
      bullets: [
        'Do not overwrite original complaint, inspection, test, firmware, service, or change records when adding later analysis',
        'Map every corrective action to affected serials, hardware and software versions, production dates, units, warehouses, channels, and customers where required',
        'Reassess old evidence when post-sale data points to a failure mode that the original scope did not cover or a change did not resolve',
        'Keep legal reporting, recall, customer communication, engineering, laboratory, supplier-correction, and shipment-release decisions with their qualified owners',
      ],
      citations: [
        { href: cpscTreadmillSettlement, label: 'CPSC settlement announcement and compliance controls' },
        { href: federalRegisterTreadmillSettlement, label: 'Federal Register agreement and company response' },
      ],
    },
    {
      id: 'inspection-limits',
      title: 'Where does inspection stop and qualified evaluation begin?',
      paragraphs: [
        'Speed accuracy and transition limits, stop deceleration, emergency-stop performance, controller and software safety, abnormal operation, thermal endurance, electrical protection, leakage current, dielectric strength, grounding, structural loads, stability, fatigue, belt and roller durability, accessible gaps, entrapment, and other safety assessments can require defined loads, conditioning, fixtures, calibrated instruments, repeated cycles, protected facilities, competent operators, and formal interpretation.',
        'A no-load factory check can reveal an obvious mismatch or malfunction, but it cannot predict every loaded condition, software state, component aging path, voltage condition, installation, maintenance issue, or user interaction. A single successful cycle cannot validate a controller revision or close a complaint pattern.',
        'A passed sampled inspection supports a buyer decision only within its stated scope. It cannot cure a design hazard, validate an unapproved hardware or software change, prove every unsampled unit, establish compliance, issue certification, decide regulatory reporting, or guarantee marketplace, recall, injury, fire, or consumer-use outcomes.',
      ],
      citations: [{ href: astmF2115, label: 'ASTM F2115-25 treadmill specification scope' }],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Exact model, serial, hardware, and software',
      evidence: 'Destination, use class, manufacturer, factory, model, serial prefix, controller, firmware, motor, sensor, console, incline, stop system, power version, batch, listing, and approved changes align.',
      buyerDecision: 'Hold ambiguous model families, mixed serial schemes, undocumented firmware, changed electronics, conflicting use claims, or unexplained production changes.',
    },
    {
      riskNode: 'Qualified design and test evidence',
      evidence: 'Complete files map the tested treadmill, intended use, hardware, software, factory, methods, results, photos, dates, deviations, limitations, and current production revision.',
      buyerDecision: 'Hold missing, partial, mismatched, changed, failed, or unverifiable evidence; route performance and compliance decisions to qualified parties.',
    },
    {
      riskNode: 'Finished-goods comparison',
      evidence: 'Sampled production matches approved identity, assembly, guards, belt and rollers, controls, stop system, incline, power connection, buyer-approved functions, labels, accessories, and pack-out.',
      buyerDecision: 'Hold affected units, versions, batches, and cartons for quantified correction, qualified disposition, repeat inspection, or laboratory testing.',
    },
    {
      riskNode: 'Incident, change, and release traceability',
      evidence: 'Inspection, test, complaint, service, firmware, component, correction, serial-range, quantity, warehouse, channel, and carton records stay linked to the released population.',
      buyerDecision: 'Release only named models, versions, batches, quantities, accessories, and cartons with documented open conditions and responsible-party approval.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'August 4, 2026 CPSC announcement and August 6 Federal Register agreement covering a provisionally accepted civil-penalty settlement, staff charges, company response, incident data, production changes, reporting controls, and settlement limits',
    'October 2022 CPSC Horizon T101-05 recall used for public model, serial-prefix, origin, quantity, hazard, remedy, sales-period, and injury details',
    'April 2026 CPSC Sperax warning and January 2026 Matrix and Vision recall used as separate current failure-pattern signals without claiming a shared factory, design, root cause, or supplier',
    'ASTM F2115-25 scope page used to identify current treadmill design topics and linked standards, not to claim coverage or compliance for any product',
    'August 2026 SGI News coverage used as independent current industry attention to the treadmill settlement',
    'Buyer-side sourcing analysis connecting exact-model records, component and software change control, limited finished-goods observations, incident traceability, and hold-or-release decisions',
  ],
  whatToSend: [
    'Destination markets, importer or responsible-party details, sales channels, home or commercial use, intended users, exact models, serial scheme, ratings, manufacturer, factory, production dates, batches, quantities, warehouses, and carton map',
    'Purchase order, approved drawings and samples, bill of materials, controller and firmware identifiers, motor, speed sensor, console, incline system, power inlet and cord, belt, roller, guard, frame, fastener, label, instruction, accessory, tolerance, and change-control files',
    'Complete qualified reports, issuer-verification details, certificate or listing references, test-sample photos, exact-model or family-coverage rationale, laboratory or engineering dispositions, and unresolved performance or compliance questions',
    'Model and serial-label artwork, ratings, warnings, instructions, retail-pack artwork, barcodes, online listings, service information, accessory map, carton marks, and packing list',
    'Approved sampling plan, defect classes, assembly instructions, no-load powered-check method, measurement points, stop rules, prohibited actions, photo and video list, correction evidence, and decision owner',
    'Complaint, return, incident, service, firmware-release, production-change, failed-unit, rework, and retest records relevant to the model or shared components',
    'Balance-payment and pickup deadlines, hold authority, factory contacts, qualified retest plan, affected-version traceability, and exact conditions required for release',
  ],
  redFlags: [
    'The report, listing, label, or certificate reference names a different manufacturer, factory, model, use class, controller, firmware, motor, sensor, power assembly, frame, or production version',
    'The supplier provides only a standard name, report cover, certification logo, marketplace badge, generic declaration, or unloaded demonstration video',
    'Production changed electronics, code, calibration, motor, sensor, wiring, power inlet, belt, roller, incline system, stop mechanism, guard, frame, supplier, process, subcontractor, or factory without qualified disposition',
    'Sampled units accelerate, stop, restart, incline, track, heat, smell, sound, display errors, or respond differently from the approved method or reference',
    'Model, serial prefix, firmware, component lot, production date, inspection result, failed unit, correction, retail pack, and carton cannot be linked',
    'The factory proposes a person-on-belt demonstration, bypasses a stop system or guard, opens live parts, changes firmware during inspection, or improvises loaded, electrical, structural, endurance, or entrapment testing',
    'Complaint, return, service, incident, or failed-test data is missing, summarized without originals, or excluded from the release decision without a named qualified owner',
  ],
  scopeLimits: [
    'A routine China-side inspection does not reproduce prescribed speed, stopping, software, abnormal-operation, thermal, electrical, structural, stability, endurance, accessibility, or entrapment testing and is not a compliance certification',
    'Sampling does not prove every unit outside the inspected sample or guarantee future electronics, software, motor, belt, incline, power, durability, shipping, or user performance',
    'Document comparison cannot authenticate every statement without issuer confirmation, official-directory checks where available, and qualified review',
    'No-load visual and functional checks cannot validate hidden wiring, code logic, calibration, component performance, insulation systems, structural life, or every operating state and foreseeable misuse',
    'Huang Sourcing does not select legal requirements, approve engineering, issue certifications, decide incident reporting or recalls, submit importer filings, or guarantee customs, marketplace, injury, fire, or consumer outcomes',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China laboratory report',
      note: 'Check the issuer, scope, sample photos, exact model, factory, versions, dates, methods, results, limitations, and verification route.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'China manufacturing QC plan',
      note: 'Build approved references, hardware and software change control, qualified testing, inspections, corrections, holds, and incident feedback into the order.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report',
      note: 'Define photos, videos, sampling, measurements, functional observations, traceability, defects, affected quantity, decisions, and stated limits.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Match model, serial scheme, ratings, warnings, instructions, accessories, retail packs, barcodes, carton marks, and quantities.',
    },
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC before balance payment',
      note: 'Keep correction, qualified retest, and repeat-inspection leverage before final payment and forwarder pickup.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, testing, packaging, payment, pickup, supplier, and shipment decisions.',
    },
  ] satisfies RelatedLink[],
  sourceNotes: [
    {
      href: cpscTreadmillSettlement,
      label: 'U.S. CPSC - Johnson Health Tech treadmill settlement announcement',
      note: 'Primary August 4, 2026 record describing the provisionally accepted settlement, staff charges, public incident counts, production changes, 2022 recall, and compliance controls.',
    },
    {
      href: federalRegisterTreadmillSettlement,
      label: 'Federal Register - Johnson Health Tech settlement agreement',
      note: 'Primary agreement published August 6, 2026, including staff allegations, the company response and no-admission language, settlement conditions, and continuing-control terms.',
    },
    {
      href: cpscHorizonTreadmillRecall,
      label: 'U.S. CPSC - Horizon T101-05 treadmill recall',
      note: 'Primary October 2022 recall record for model and serial-prefix identity, China and Vietnam manufacture, affected quantity, hazard, software repair, sales period, incidents, and injuries.',
    },
    {
      href: cpscSperaxTreadmillWarning,
      label: 'U.S. CPSC - Sperax walking pad and treadmill warning',
      note: 'Separate April 2026 primary record for China-made products citing abrupt speed and stop events, falls, thermal incidents, burns, model identity, sales channels, and supplier response.',
    },
    {
      href: cpscMatrixTreadmillRecall,
      label: 'U.S. CPSC - Matrix and Vision treadmill recall expansion',
      note: 'Separate January 2026 primary record describing China-made models, serial ranges, loose power-cord connections, overheating reports, and repair scope.',
    },
    {
      href: astmF2115,
      label: 'ASTM International - F2115-25 treadmill specification',
      note: 'Independent standards-organization scope page identifying the active specification and visible design topics; it does not establish compliance for any cited or inspected treadmill.',
    },
    {
      href: sgiNewsCoverage,
      label: 'SGI News - Johnson Health Tech treadmill settlement coverage',
      note: 'Independent sporting-goods industry coverage of the August 2026 CPSC settlement; used as a current attention signal, not as the primary case record.',
    },
  ] satisfies SourceNote[],
}

export function makeTreadmillChecksChinaArticleMetadata(): Metadata {
  const article = treadmillChecksChinaArticle

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

export function makeTreadmillChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(treadmillChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Treadmill pre-shipment release checklist',
      itemListElement: treadmillChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
