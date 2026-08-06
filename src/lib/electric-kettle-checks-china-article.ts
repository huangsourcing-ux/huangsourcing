import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  electricKettleChecksChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  verifyChinaLabTestReportArticleHref,
} from '@/lib/site-links'

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
}

type CheckGroup = { items: string[]; title: string }
type DecisionRow = { buyerDecision: string; riskNode: string; whatToConfirm: string }
type RelatedLink = { href: string; label: string; note: string }
type SourceNote = { href: string; label: string; note: string }

export const electricKettleChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: electricKettleChecksChinaArticleHref,
  title: 'Electric Kettle Checks Before Shipping from China',
  metaTitle: 'Electric Kettle Checks Before Shipping from China',
  metaDescription:
    'Check electric kettle lids, handles, vents, shutoff evidence, ratings, plugs, warnings, cartons, and release decisions before shipment from China.',
  publishedDate: 'August 7, 2026',
  publishedDateIso: '2026-08-07T03:28:01+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Electric Kettle Checks Before Shipping from China',
  eyebrow: 'Hot-liquid controls - finished-lot checks - payment and pickup release',
  image: {
    alt: 'Neutral AI illustration of a generic electric kettle, caliper, temperature probe, blank checklist, and export carton on a quality inspection bench',
    height: 900,
    src: '/images/electric-kettle-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/electric-kettle-checks-china.webp', width: 1600 },
    {
      height: 900,
      src: '/images/electric-kettle-checks-china-4x3.webp',
      width: 1200,
    },
    {
      height: 1000,
      src: '/images/electric-kettle-checks-china-1x1.webp',
      width: 1000,
    },
  ],
  intro:
    'Before releasing balance payment or forwarder pickup for electric kettles made in China, freeze the destination, exact model, capacity, voltage, plug, lid and latch, handle attachment, steam path, spout, base, controls, automatic shutoff, boil-dry protection, markings, instructions, production lot, and cartons. Hold any shipment whose physical build or evidence differs from the buyer-approved version.',
  answerSummary:
    'Use three separate gates: qualified product-safety and test-scope review, buyer-side comparison of sampled finished goods with the approved model, and importer or marketplace compliance review. A China-side inspection can document identity, lid and handle construction, visible venting, assembly, ratings, plug and cord, markings, instructions, packaging, quantities, and low-risk buyer-approved observations. It cannot safely improvise pressure, steam-release, abnormal-operation, electrical, endurance, food-contact, or burn-hazard testing, certify the product, or guarantee that hot liquid will never escape.',
  primaryCta: { label: 'Check Kettles Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side electric kettle evidence and quality check before shipment.

Destination market, model/SKU, capacity, voltage, frequency, wattage, and plug:
Factory, production dates, lots, quantity, and carton map:
Approved sample, drawings, bill of materials, and tolerances:
Lid, latch, vent, handle, spout, base, controls, and safety-device specifications:
Qualified test reports, certification claims, and exact sample coverage:
Ratings, warnings, instructions, retail packaging, and carton files:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#model-control', label: 'Exact model and change control' },
    { href: '#hot-liquid-evidence', label: 'Hot-liquid risk evidence' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#claims-labels', label: 'Claims, ratings, and warnings' },
    { href: '#test-boundary', label: 'Inspection limits' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze the exact model, SKU, capacity, voltage, frequency, wattage, plug, cord, kettle body, lid and latch, handle fixing, spout, steam vent, filter, base, controls, factory, production date, lot, labels, instructions, and package version',
    'Require qualified product-safety, laboratory, certification, and importer parties to identify the current destination requirements, relevant standards, test methods, certification scope, and any CPSC certificate or eFiling duty',
    'Map complete reports and certification claims to the manufacturer, factory, exact model, ratings, capacity, sample photos, lid, handle, steam path, controls, power base, safety devices, dates, results, limitations, and authorized changes',
    'Compare sampled mass production with the approved sample, drawings, bill of materials, and tolerances for lid closure, latch engagement, handle attachment, vent and spout openings, seals, joints, base fit, controls, cord, plug, fasteners, and workmanship',
    'Verify automatic shutoff, boil-dry, temperature, pressure, leakage, dielectric, grounding, endurance, food-contact, and burn-risk conclusions only through qualified evidence; an ordinary inspection is not a substitute test program',
    'Check model and lot identity, ratings, fill limits, use and opening instructions, hot-surface and steam warnings, cleaning guidance, destination language, barcode, retail pack, carton protection, carton marks, quantity, and packing list',
    'Hold mixed lids, handles, bases, controls, cords, plugs, labels, manuals, materials, factories, models, lots, or cartons until the responsible parties resolve scope and correction evidence',
    'Release only named models, production dates, lots, quantities, and cartons after documented correction, qualified disposition, and repeat inspection where needed',
  ],
  checkGroups: [
    {
      title: 'Exact model, ratings, and intended use',
      items: [
        'Destination, model, capacity, rated voltage, frequency, wattage, plug, cord, intended use, fill range, duty cycle, factory, date, lot, responsible importer, and approved changes are controlled',
        'Purchase order, approved sample, drawings, bill of materials, test samples, reports, labels, instructions, package, carton, and packing list describe the same production version',
      ],
    },
    {
      title: 'Hot-liquid controls and qualified evidence',
      items: [
        'Lid and latch retention, handle attachment, steam and pressure path, spout, seals, automatic shutoff, boil-dry protection, temperature controls, abnormal-operation plan, sample photos, results, and limitations align',
        'Laboratory or certification source, file number, manufacturer, factory, product category, exact model, ratings, current status, and authorization to use any displayed mark are verified independently',
      ],
    },
    {
      title: 'Physical product and pack-out',
      items: [
        'Sampled kettles match approved body, lid, latch, handle, joints, vents, spout, filter, base, contacts, controls, cord, plug, fasteners, markings, finish, assembly, and visible condition',
        'Model, lot, ratings, fill marks, warnings, instructions, retail package, barcode, accessories, carton quantity, carton marks, packing list, and destination file are consistent and readable',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, carton map, supplier change, controlled work instruction, replacement parts, qualified retest or report disposition, revised files, and repeat inspection remain traceable',
        'Cleared and unresolved models, dates, lots, and cartons stay separated; final release names exact scope and open conditions rather than giving the supplier a blanket pass',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why electric kettle release evidence matters now',
      paragraphs: [
        'On August 6, 2026, the U.S. Consumer Product Safety Commission warned consumers to stop using Balbali portable electric kettles, model HP-300E. CPSC said the China-made kettles could pressurize and release hot steam or liquid unexpectedly. The agency reported 52 incidents and 20 injuries, including third-degree burns, and said the importer had not agreed to an acceptable recall.',
        'The current warning is part of a wider documented pattern. In May 2026, CPSC recalled about 113,440 China-made Zwilling electric kettles after 163 reports of handles loosening or separating, including five incidents and one second-degree burn. In November 2025, CPSC warned about BLONGKY portable car kettles after at least 11 steam or hot-liquid incidents and nine burn reports.',
        'These records concern different named models, companies, constructions, and remedies. They do not prove every kettle, supplier, factory, or lot has the same defect. They show why release control should cover the full hot-liquid containment path—lid, latch, handle, vent, spout, body, base, controls, instructions, and exact production identity—before money or goods move.',
      ],
      bullets: [
        'A supplier claim such as “automatic shutoff,” “anti-scald,” “pressure safe,” “food grade,” or “certified” needs exact-model evidence and should not be treated as proof by itself',
        'Lid, latch, handle screw or insert, gasket, vent, spout, thermostat, controller, thermal device, body material, base, cord, plug, factory, and capacity changes can alter the evidence question',
        'A genuine report is useful only when its sample photos, construction, ratings, factory, results, limitations, and current production version align',
        'Correction leverage is strongest before balance payment and pickup, while segregation, replacement, retesting, re-inspection, relabeling, or cancellation remains practical',
      ],
    },
    {
      id: 'model-control',
      title: 'Freeze the exact kettle model before relying on evidence',
      paragraphs: [
        'Build one controlled model record connecting product and SKU names to capacity, voltage, frequency, wattage, plug and cord, body and lining materials, lid and latch, handle fixing, spout, filter, steam vent, gasket, joints, heating plate, power base, contacts, controller, thermostat, thermal devices, fill marks, warnings, instructions, factory, date, and lot.',
        'Do not treat appearance, capacity, or wattage as a unique identifier. Two kettles can share a one-litre shell while using different lid retainers, handle inserts, vents, thermostats, controllers, connectors, bases, cords, plugs, or factories. Those differences can change test and certification coverage.',
        'Put every safety-relevant revision through written change control. If a supplier changes a polymer, seal, screw, insert, adhesive, hinge, latch, handle, vent, spout, thermostat, fuse, controller, base, cord, plug, factory, rating, instruction, or claim after the reviewed sample, hold the affected production until qualified parties decide what review or testing is required.',
      ],
      bullets: [
        'Use a controlled specification, bill of materials, exploded drawing, wiring diagram, approved sample, model-label artwork, manual, retail-pack file, and carton map',
        'Photograph the approved reference from the same angles and detail points required during mass-production inspection',
        'Require every supplier change to identify the first affected unit, production date, lot, and carton range',
        'Reject evidence showing another manufacturer, factory, model alias, capacity, rating, plug, control system, safety device, or sample photo without a documented relationship',
      ],
    },
    {
      id: 'hot-liquid-evidence',
      title: 'What should hot-liquid and control evidence establish?',
      paragraphs: [
        'The evidence plan should address how the exact kettle contains boiling water and manages steam under normal and defined abnormal conditions. That includes lid and latch retention, handle strength and attachment, vent and spout geometry, seals and joints, stability, fill marks, shutoff behavior, boil-dry protection, temperature control, power-base contacts, foreseeable misuse, and the relationship between warnings and the tested design.',
        'Use the public cases as risk prompts, not improvised test instructions. The importer and qualified technical parties should select the applicable requirements, voluntary standards, methods, samples, instrumentation, acceptance criteria, certification route, and destination obligations. The evidence file should identify the tested sample and state what production changes it does and does not cover.',
        'A component datasheet alone does not prove the finished kettle behaves as intended. Review the complete assembly, fastener and insert retention, tolerance stack, control path, component ratings and placement, failure modes, reset behavior, wiring, moisture exposure, production controls, and change history.',
      ],
      bullets: [
        'Record laboratory, accreditation or certification role, report number, issue date, standard and edition, clauses, sample photos, exact model, ratings, capacity, construction, results, deviations, and limitations',
        'Map lid, latch, hinge, handle hardware, inserts, seals, vents, thermostat, controller, thermal devices, connectors, base, cord, and plug to approved manufacturers, parts, specifications, incoming checks, and substitution rules',
        'Ask qualified parties whether pressure, steam, spill, opening, stability, cycling, strength, endurance, abnormal-operation, moisture, electrical, and food-contact evidence covers the shipped configuration',
        'Escalate partial reports, edited screenshots, supplier-written summaries, missing sample photos, unexplained model families, inconsistent dates, or files that cannot be confirmed at the claimed source',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled production with approved references while the goods remain accessible. The useful output is a traceable record of model and lot identity, visible construction, measurements, assembly, ratings, warnings, instructions, packaging, quantities, defects, mismatches, and affected carton scope.',
        'Inspect lid alignment and closure, latch engagement, hinge and fasteners, handle attachment and movement, body joints, gasket placement, vent and spout openings, filter, fill marks, base fit, contacts, switches, display, cord entry, strain relief, cord, plug, feet, fasteners, surfaces, sharp edges, finish, odour, contamination, loose parts, and visible workmanship against buyer-approved criteria.',
        'Use only low-risk buyer-approved observations and methods. Do not block vents, defeat controls, overfill, open a pressurized or boiling kettle, pull a hot handle, splash energized equipment, expose live parts, or improvise abnormal-operation, spill, burn, shock, strength, or endurance testing during an ordinary inspection.',
      ],
      bullets: [
        'Photograph every sampled unit or sample number with model, production or lot code, rating label, lid, latch, hinge, handle fixings, vent, spout, fill marks, base, cord, plug, warnings, manual, retail pack, and carton context',
        'Use buyer-approved drawings, measurement points, tolerances, torque or assembly records, sampling, defect classes, photo rules, and stop conditions',
        'Quantify loose, mixed, substituted, missing, damaged, leaking, deformed, contaminated, unreadable, or out-of-tolerance findings instead of reducing them to cosmetic comments',
        'Keep destructive checks and pressure, strength, boiling-cycle, spill, endurance, abnormal-operation, electrical, and food-contact tests separate from ordinary saleable-stock inspection',
      ],
    },
    {
      id: 'claims-labels',
      title: 'Verify ratings, certification claims, warnings, and instructions',
      paragraphs: [
        'Treat each certification logo, listing claim, test reference, and safety promise as a scoped statement. Verify the claimed body or official directory using the file number, manufacturer, factory, model, product category, ratings, capacity, conditions, and current status. A logo, supplier PDF, marketplace badge, or component mark is not automatically finished-product certification.',
        'Keep the rating label, base label, package, manual, online claim, and shipping documents consistent. Confirm model, voltage, frequency, wattage, capacity, plug, responsible party, production traceability, fill limits, hot-surface and steam warnings, lid-opening sequence, use restrictions, cleaning, damaged-product action, and destination language.',
        'The importer should determine whether the exact kettle is subject to a CPSC rule, ban, or standard requiring a certificate and eFiling. CPSC explains that eFiling applies to imported regulated consumer products that already require certification; a voluntary-standard or certification claim does not by itself answer that question.',
      ],
      bullets: [
        'Do not translate a certified component into a certified finished kettle',
        'Do not rely on a report covering another voltage, capacity, plug, lid, handle, control, factory, or model family without documented scope',
        'Do not present a voluntary-standard claim as government approval or as a guarantee of safe performance',
        'Do not let packaging promise “spill proof,” “anti-scald,” “pressure safe,” automatic shutoff, unattended use, or other behavior the approved evidence does not support',
      ],
    },
    {
      id: 'test-boundary',
      title: 'Where does inspection stop and qualified testing begin?',
      paragraphs: [
        'Pressure, steam, hot-water release, handle and lid strength, drop, stability, boiling cycle, shutoff, boil-dry, temperature, endurance, moisture, leakage-current, dielectric, grounding, fault, fire-risk, and food-contact evaluations can involve energized equipment, boiling liquid, special fixtures, calibrated instruments, controlled methods, and injury risk. They belong with qualified parties.',
        'Huang Sourcing can organize buyer-approved files and compare visible goods with controlled references. It does not design the kettle, select legal requirements, certify a product, issue a laboratory report, authorize a mark, submit importer filings, approve food-contact materials, or make electrical, burn-safety, or compliance guarantees.',
        'A passed visual inspection can support a hold, correction, re-inspection, or shipment decision only within its stated scope. It cannot cure missing qualified evidence or prove that every unit outside the sample will perform safely.',
      ],
      bullets: [
        'Do not improvise blocked-vent, overfill, forced-opening, boiling spill, pull, pressure, thermal, endurance, moisture, electrical, fault, or food-contact tests during an ordinary inspection',
        'Do not infer complete protection from one thermostat, thermal fuse, shutoff demonstration, warning label, supplier video, or certificate cover page',
        'Do not use a passed visual inspection as a substitute for the complete qualified evidence and responsible-party release decision',
        'Record unresolved technical, certification, regulatory, importer, marketplace, or legal decisions as open conditions and hold the affected scope until closed',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Exact model and controlled design',
      whatToConfirm:
        'PO, capacity, ratings, lid, latch, handle, body, vent, spout, seals, base, controls, safety devices, cord, plug, factory, lot, approved sample, files, package, and packing list identify one version.',
      buyerDecision:
        'Continue only with a controlled version; otherwise segregate unknown stock, correct the file, obtain qualified scope review, or hold payment and pickup.',
    },
    {
      riskNode: 'Qualified hot-liquid and electrical evidence',
      whatToConfirm:
        'Responsible parties accept the laboratory or certification source, standard and edition, exact sample, ratings, construction, methods, results, limitations, certification status, and change history.',
      buyerDecision:
        'Approve covered production, verify source files, submit the actual model, redesign, retest, correct claims, or stop the order.',
    },
    {
      riskNode: 'Physical shipment matches',
      whatToConfirm:
        'Sampled kettles match approved lid, latch, hinge, handle, vents, spout, body, seals, base, contacts, controls, cord, plug, markings, warnings, instructions, packaging, cartons, and quantities.',
      buyerDecision:
        'Release cleared scope, isolate affected units, quantify the lot, investigate, rework, replace, or repeat inspection.',
    },
    {
      riskNode: 'Correction and handoff remain traceable',
      whatToConfirm:
        'Affected quantity, carton map, supplier change, controlled correction, replacement parts, qualified retest disposition, revised files, repeat inspection, and pickup approval are recorded.',
      buyerDecision:
        'Release only cleared models and lots; delay balance payment or pickup, or cancel unresolved scope.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'CPSC Balbali warning checked August 7, 2026 Beijing time for the warning date, exact model, China origin, incident and injury counts, hazard description, sales channels, and remedy status.',
    'Separate CPSC Zwilling recall and BLONGKY warning used to distinguish recurring hot-liquid containment risks across different kettle designs, companies, models, dates, and remedies.',
    'Independent South China Morning Post coverage and China Ministry of Commerce WTO/FTA information used as separate current-attention and cross-market checks for the May 2026 Zwilling recall.',
    'Current CPSC general-use certification and eFiling guidance used for scope boundaries; no article statement treats a voluntary mark as government approval or assumes every kettle has the same filing duty.',
    'Buyer-controlled model specification, approved sample, drawings, bill of materials, change log, test and certification file, labels, instructions, packing list, carton map, inspection criteria, and release rules.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-Balbali-Electric-Kettles-Immediately-Due-to-Risk-of-Serious-Injury-or-Death-from-Burn-Hazard',
      label: 'CPSC - Balbali electric kettle warning',
      note: 'Primary August 6, 2026 record identifying model HP-300E, China origin, unexpected steam or hot-liquid release, 52 incident reports, 20 reported injuries including third-degree burns, online sales channels, and the lack of an acceptable recall.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/ZWILLING-JA-Henckels-Aktiengesellschaft-Recalls-Electric-Water-Kettles-Due-to-Risk-of-Serious-Injury-Due-to-Burn-Hazard',
      label: 'CPSC - Zwilling electric water kettle recall',
      note: 'Primary May 14, 2026 recall identifying seven affected model numbers, about 113,440 U.S. units, China manufacture, 163 handle-loosening or separation reports, five incidents, and one reported second-degree burn.',
    },
    {
      href: 'https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Immediately-Stop-Using-Portable-Electric-Car-Kettles-Due-to-Risk-of-Serious-Burn-Injury-Distributed-by-BLONGKY',
      label: 'CPSC - BLONGKY portable car kettle warning',
      note: 'Primary November 20, 2025 warning documenting unexpected steam or hot-water release, lid-mechanism failure, at least 11 incidents, nine burn reports, online sales, China manufacture, and an unresponsive distributor.',
    },
    {
      href: 'https://chinawto.mofcom.gov.cn/article/jsbl/alzs/202605/20260503629127.shtml',
      label: 'China Ministry of Commerce WTO/FTA information - Zwilling recall summary',
      note: 'Official Chinese government summary of the May 2026 U.S. and Canadian recall, affected models, China origin, sales period, quantities, handle hazard, incident counts, and stop-use advice.',
    },
    {
      href: 'https://www.scmp.com/news/hong-kong/society/article/3352741/hong-kong-recalls-zwilling-electric-kettles-over-handle-defect-and-scalding-risk',
      label: 'South China Morning Post - Hong Kong kettle recall coverage',
      note: 'Independent May 7, 2026 reporting on Hong Kong authority action, handle-detachment and scalding risk, model identity, refund advice, and the related global recall.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/General-Use-Products-Certification-and-Testing',
      label: 'CPSC - general-use product certification and testing guidance',
      note: 'Current official guidance on identifying applicable rules, reasonable testing programs, General Certificates of Conformity, and the limits of voluntary-standard assumptions.',
    },
    {
      href: 'https://www.cpsc.gov/FAQ/eFiling-Frequently-Asked-Questions-FAQ',
      label: 'CPSC - eFiling frequently asked questions',
      note: 'Current official guidance that eFiling applies to imported regulated consumer products already subject to CPSC certification requirements and that finished-product scope must be determined first.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Purchase order, destination, intended use, exact model and SKU list, capacity, voltage, frequency, wattage, plug, cord, fill range, duty cycle, dimensions, materials, claims, factory, production dates, lots, quantities, and buyer-approved tolerances',
    'Approved sample record, exploded drawings, bill of materials, wiring diagram, lid and latch design, handle attachment, vent and spout geometry, seals, base and contact details, controller, thermostat, thermal devices, cord and plug files, and every approved change notice',
    'Applicable-rule and standard review, test plan, full reports and source files, sample photos, laboratory details, certification record, file number, current scope and status, responsible-party review, and an index mapping each file to the exact order',
    'Final rating and traceability labels, fill marks, hot-surface and steam warnings, opening and use instructions, cleaning guidance, retail-pack artwork, barcode, claims, carton marks, packing list, and carton map',
    'Buyer-approved inspection method, sampling plan, measurements, assembly and workmanship criteria, low-risk functional-observation limits, defect definitions, stop rules, photo requirements, and balance-payment or pickup decision',
    'Any known lid, latch, handle, vent, pressure, steam, spill, leak, shutoff, boil-dry, temperature, electrical, food-contact, warning, evidence, certification, packaging, or supplier-change concern and affected quantity',
  ],
  redFlags: [
    'The supplier will not identify the manufacturer, factory, exact model, capacity, ratings, lid and handle construction, vent path, controller, safety devices, production lot, intended use, or changes',
    'Report or directory records show another model, voltage, capacity, plug, lid, handle, base, control, manufacturer, factory, sample photo, standard edition, or certification status',
    'Evidence is cropped, incomplete, edited, outside the claimed laboratory or certification scope, or cannot be confirmed through the claimed official source',
    'A component certificate or logo is presented as finished-product certification without a matching manufacturer, model, file number, category, ratings, factory, and current record',
    'Sampled kettles show mixed lids, latches, handles, seals, vents, spouts, bases, controls, thermal devices, cords, plugs, labels, manuals, packages, ratings, model names, or lots',
    'Lids, hinges, latches, handles, body joints, seals, vents, spouts, bases, contacts, cords, plugs, strain reliefs, fasteners, markings, or assembly are loose, damaged, deformed, contaminated, inconsistent, or different from approved references',
    'Warnings or instructions are missing, removable, unreadable, contradictory, mistranslated, or inconsistent with marketing, fill limits, opening sequence, hot surfaces, steam path, cleaning, supervision, or intended use',
    'The correction plan lacks affected quantity, segregation, qualified redesign or retest disposition, controlled work instruction, replacement traceability, revised files, carton map, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible products, identifiers, controlled files, buyer-approved dimensions, lid and handle assembly, vents, spouts, bases, controls, cords, plugs, labels, instructions, retail packs, cartons, quantities, and observations with the agreed reference set in China',
    'Huang Sourcing does not design kettles, select legal requirements, authenticate every document, certify safety or compliance, issue a laboratory or certification record, authorize a mark, submit importer eFiling, approve food-contact materials, or provide legal or product-safety engineering advice',
    'Visual inspection, ordinary measurements, or limited buyer-approved functional observations cannot prove pressure, steam release, spill, lid or handle strength, automatic shutoff, boil-dry, temperature, endurance, moisture, electrical, fault, fire-risk, or food-contact performance',
    'Sampling cannot guarantee every unit outside the agreed scope, and mixed lots, sealed cartons, weak traceability, inaccessible factories, unsafe setups, or missing approved references reduce confidence',
    'The importer, manufacturer, qualified laboratory, certification body, engineer, compliance adviser, broker, marketplace, retailer, authorities, and end user remain responsible for their product-specific decisions',
    'A passed pre-shipment inspection does not guarantee CPSC compliance, certification validity, eFiling acceptance, customs release, marketplace approval, recall avoidance, safe use, or safe performance after shipment',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'How to verify a China laboratory report',
      note: 'Check report identity, laboratory scope, sample photos, exact-model coverage, dates, source confirmation, results, limitations, and production mismatches.',
    },
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling for China imports',
      note: 'Determine whether the exact kettle is regulated and coordinate certificate data, product identifiers, importer responsibility, broker handoff, and shipment records where required.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control plan for China manufacturing',
      note: 'Build approved references, change control, qualified testing, inspections, corrections, and payment holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Match ratings, warnings, instructions, claims, model and lot marks, retail packs, carton marks, quantities, and correction evidence before release.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define the photos, tools, measurements, traceability, mismatches, affected quantity, decisions, and scope limits the report should show.',
    },
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Use buyer-approved product, packaging, quantity, and evidence checks while the actual goods are still accessible at the supplier.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Inspection before balance payment',
      note: 'Keep correction and payment leverage until cleared and unresolved models, lots, quantities, and cartons are visible.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, report, testing, packaging, payment, pickup, and supplier decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
}

export function makeElectricKettleChecksChinaArticleMetadata(): Metadata {
  const article = electricKettleChecksChinaArticle

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

export function makeElectricKettleChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(electricKettleChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Electric kettle pre-shipment release checklist',
      itemListElement: electricKettleChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
