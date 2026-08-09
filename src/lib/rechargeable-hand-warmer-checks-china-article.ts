import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  lithiumBatteryAirShippingChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  powerBankChecksChinaArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  rechargeableHandWarmerChecksChinaArticleHref,
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

export const rechargeableHandWarmerChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: rechargeableHandWarmerChecksChinaArticleHref,
  title: 'Rechargeable Hand Warmer Checks Before China Shipment',
  metaTitle: 'Rechargeable Hand Warmer Checks Before Shipment',
  metaDescription:
    'Check hand warmer models, batteries, heater controls, labels, cartons, test evidence, and release decisions before shipping rechargeable units from China.',
  publishedDate: 'August 9, 2026',
  publishedDateIso: '2026-08-09T15:26:43-04:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Rechargeable Hand Warmer Checks Before China Shipment',
  eyebrow: 'Battery and heater evidence - finished-lot checks - payment and pickup release',
  image: {
    alt: 'Neutral AI illustration of two generic rechargeable hand warmers, an infrared thermometer, caliper, blank checklist, cable, packaging insert, and export carton on an inspection bench',
    height: 900,
    src: '/images/rechargeable-hand-warmer-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/rechargeable-hand-warmer-checks-china.webp', width: 1600 },
    { height: 900, src: '/images/rechargeable-hand-warmer-checks-china-4x3.webp', width: 1200 },
    { height: 1000, src: '/images/rechargeable-hand-warmer-checks-china-1x1.webp', width: 1000 },
  ],
  intro:
    'Before releasing balance payment or forwarder pickup for rechargeable hand warmers made in China, freeze the exact model, cell and pack identity, heater and protection controls, charging input, housing, claimed temperatures, labels, instructions, production lot, retail packs, and cartons. Hold shipment whenever the finished goods or evidence differ from the buyer-approved version.',
  answerSummary:
    'Use four separate gates: qualified product-safety and battery review, buyer-side comparison of sampled finished goods with approved references, importer or marketplace compliance review, and dangerous-goods transport approval. A China-side inspection can document identity, visible construction, controls, basic buyer-approved observations, labels, quantities, and pack-out. It cannot safely improvise abuse, short-circuit, overcharge, thermal-runaway, endurance, fire, or transport testing, certify the product, or guarantee future battery performance.',
  primaryCta: { label: 'Check Hand Warmers Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side rechargeable hand warmer evidence and quality check before shipment.

Destination, model/SKU, ratings, capacity, and claimed temperatures:
Factory, production dates, lots, quantity, and carton map:
Approved sample, drawings, bill of materials, and tolerances:
Cell, pack, heater, control board, sensors, protection, and change records:
Qualified reports, UN 38.3 test summary, and exact sample coverage:
Labels, warnings, instructions, retail packs, and carton files:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#model-control', label: 'Exact model and change control' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#evidence-boundary', label: 'Technical evidence' },
    { href: '#transport-boundary', label: 'Transport boundary' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze the exact model, SKU, cell and pack identity, capacity and watt-hour rating, heater, control board, temperature sensor, protection, input, housing, magnet or connector arrangement, factory, production date, lot, labels, instructions, and package version',
    'Require qualified product-safety, laboratory, importer, marketplace, and dangerous-goods parties to identify current destination requirements, test methods, report scope, certification or filing duties, and carrier conditions',
    'Map complete reports and the UN 38.3 test summary to the manufacturer, factory, exact model, cell or battery description, ratings, sample photos, test report ID, dates, results, limitations, and authorized changes',
    'Compare sampled production with the approved sample, drawings, bill of materials, tolerances, and change log for housing, seams, buttons, ports, magnets, indicators, internal configuration evidence, labels, accessories, and workmanship',
    'Use only buyer-approved, low-risk observations for charging, controls, indicators, paired-unit behavior, and accessible temperature; stop and isolate any abnormal heat, odour, noise, swelling, leakage, smoke, sparking, or unstable operation',
    'Check model, batch or serial identity, ratings, temperature claims, warnings, instructions, destination language, traceability, barcode, retail-pack protection, carton marks, quantity, and packing list',
    'Hold mixed cells, packs, heater controls, enclosures, ratings, temperature claims, labels, manuals, factories, models, lots, or cartons until scope and correction evidence are resolved',
    'Release only named models, production dates, lots, quantities, and cartons after documented correction, qualified disposition, transport review, and repeat inspection where needed',
  ],
  checkGroups: [
    {
      title: 'Exact model, ratings, and destination',
      items: [
        'Destination, model, capacity, watt-hour rating, charging input, claimed temperature range, intended use, factory, date, lot, importer, sales channel, and approved changes are controlled',
        'PO, approved sample, drawings, bill of materials, test samples, reports, labels, instructions, retail pack, carton, and packing list describe one production version',
      ],
    },
    {
      title: 'Battery, heater, and qualified evidence',
      items: [
        'Cell and pack identity, protection board, heater, temperature sensor, control logic, charging parts, wiring, insulation, housing materials, sample photos, results, and limitations align',
        'Laboratory or certification source, report number, manufacturer, factory, exact model, ratings, current status, UN 38.3 test summary, and destination scope are independently checked',
      ],
    },
    {
      title: 'Physical product and pack-out',
      items: [
        'Sampled units match the approved enclosure, seams, buttons, ports, magnets or connectors, indicators, dimensions, weight, markings, finish, assembly, accessories, and buyer-approved observation limits',
        'Model, lot, ratings, warnings, instructions, retail package, barcode, terminal protection, carton quantity, carton marks, packing list, and destination file are consistent and readable',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, carton map, supplier change, controlled work instruction, replacement parts, qualified retest disposition, revised files, and repeat inspection remain traceable',
        'Cleared and unresolved models, dates, lots, and cartons stay separated; final release names exact scope, open conditions, and the separate transport decision',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why rechargeable hand warmer release evidence matters now',
      paragraphs: [
        'On July 30, 2026, the U.S. Consumer Product Safety Commission announced a recall of about 1.5 million OCOOPA rechargeable lithium-ion hand warmers imported by Shenzhen Street Cat Technology. CPSC said the batteries could overheat and ignite. The company had received 1,480 overheating reports associated with 15 fires, 350 burn injuries, and one death.',
        'The official notice names seven models, explains that the products were sold in paired packs, and says the model and three-digit batch number appear on the underside. Independent same-day coverage focused on the recall scale and repeated those model and batch boundaries. That makes identity and traceability central to a buyer-side release decision, not a paperwork afterthought.',
        'A separate UK Office for Product Safety and Standards report for another rechargeable hand warmer documented poor electrical connections, wires without secondary mechanical restraint, no thermal protection on the cells, and missing documents or markings. The records involve different products, countries, rules, sellers, and evidence. They do not prove every hand warmer, supplier, or China-made lot has the same defect.',
      ],
      bullets: [
        'A supplier claim such as “UL,” “CE,” “UKCA,” “UN 38.3,” “overheat protection,” or a temperature range needs exact-model evidence and is not proof by itself',
        'Cell, pack, protection board, heater, temperature sensor, control logic, port, magnet, housing, factory, firmware, and rating changes can alter the evidence question',
        'A genuine report is useful only when sample photos, construction, ratings, factory, results, limitations, and the shipped version align',
        'Correction leverage is strongest before balance payment and pickup, while segregation, replacement, retesting, re-inspection, relabeling, rerouting, or cancellation remains practical',
      ],
    },
    {
      id: 'model-control',
      title: 'Freeze the exact hand warmer model before relying on evidence',
      paragraphs: [
        'Build one controlled model record connecting the SKU and marketplace name to the cell and pack, nominal capacity and watt-hours, charging input, heater, temperature sensor, protection board, control logic, housing, seams, buttons, indicators, ports, magnets or connectors, claimed heat settings, warnings, instructions, factory, production date, and lot.',
        'Do not treat color or a shared shell as a unique identity. Two hand warmers can look alike while using different cells, protection boards, heaters, sensors, wiring, insulation, plastics, charging parts, firmware, or factories. A paired product also needs rules for matching units, accessories, package identity, and batch information.',
        'Put every safety-relevant substitution through written change control. Hold affected production until qualified parties determine whether document review, testing, certification updates, importer filings, transport documents, or new carrier acceptance are required.',
      ],
      bullets: [
        'Use a controlled specification, bill of materials, exploded drawing, wiring information, approved sample, label artwork, manual, retail-pack file, carton map, and change log',
        'Photograph the approved reference from the same angles and detail points required during mass-production inspection',
        'Require each supplier change to identify the first affected unit, production date, lot, serial or batch range, and carton range',
        'Reject unexplained evidence for another manufacturer, factory, model alias, capacity, cell, pack, heater, control board, rating, or sample photo',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled production with approved references while the goods remain accessible. The useful output is a traceable record of model and lot identity, visible construction, dimensions, weight, assembly, ratings, warnings, instructions, packaging, quantities, defects, mismatches, and affected carton scope.',
        'Inspect enclosure flatness, seams, buttons, switches, ports, magnets or connectors, indicator windows, fasteners, surfaces, sharp edges, loose parts, contamination, odour, finish, labels, accessories, retail-pack protection, and cartons against buyer-approved criteria. Record swelling, enclosure lift, distortion, cracking, impact marks, leakage, discolouration, heat marks, corrosion, loose ports, or rattling as stop-and-escalate findings.',
        'Use only low-risk buyer-approved observations with suitable equipment and written limits. Do not open cells, short terminals, overcharge, crush, puncture, drop, block heat dissipation, bypass protection, run unattended, or improvise abnormal-operation, thermal-runaway, endurance, fire, or abuse tests during an ordinary inspection.',
      ],
      bullets: [
        'Photograph each sampled unit or sample number with model and batch or serial code, rating label, seams, buttons, ports, indicators, accessories, warnings, manual, retail pack, and carton context',
        'Use buyer-approved dimensions, weight tolerances, sampling, defect classes, photo rules, functional-observation limits, accessible-temperature limits, and stop conditions',
        'Open cartons across the agreed sampling plan to detect mixed models, lots, label revisions, paired units, cables, pouches, packaging, or correction status',
        'Keep destructive, battery-safety, heater-safety, capacity, endurance, and transport testing separate from ordinary saleable-stock inspection',
      ],
    },
    {
      id: 'evidence-boundary',
      title: 'What should qualified battery and heater evidence establish?',
      paragraphs: [
        'CPSC lists voluntary standards used in work on high-energy-density battery fire risks, including standards for lithium batteries, portable power packs, secondary cells and batteries, and portable rechargeable cells. The responsible importer and qualified technical parties must decide which product, battery, electrical, chemical, labeling, certification, and marketplace requirements apply to the exact hand warmer and destination.',
        'A cell datasheet, safety data sheet, certificate cover, supplier declaration, or brief factory video does not prove the finished product behaves as intended. The evidence file should connect the complete cell, pack, protection board, charging circuit, heater, sensor, control logic, wiring, insulation, housing, tolerances, abnormal-operation behavior, production controls, and change history to the evaluated sample.',
        'Huang Sourcing can organize buyer-approved files and compare visible goods with controlled references. It does not design the product, select legal requirements, certify safety, authenticate every record, issue a laboratory report, authorize a mark, submit importer filings, or make battery or product-safety guarantees.',
      ],
      bullets: [
        'Record laboratory role, report number, issue date, standard and edition, clauses, sample photos, exact model, ratings, construction, results, deviations, and limitations',
        'Map the cell, pack, protection board, charging parts, heater, sensor, control board, wiring, insulation, housing materials, and substitution rules to the tested version',
        'Ask qualified parties whether charging, overcharge, short-circuit, temperature, abnormal operation, mechanical strength, vibration, shock, fire, endurance, capacity, and claim evidence covers the shipped configuration',
        'Escalate cropped reports, edited screenshots, missing sample photos, unexplained model families, inconsistent dates, or files that cannot be verified at the claimed source',
      ],
    },
    {
      id: 'transport-boundary',
      title: 'Keep product release separate from lithium-battery transport approval',
      paragraphs: [
        'The official text of 49 CFR 173.185 requires lithium cells and batteries to meet the applicable UN Manual of Tests and Criteria subsection 38.3 design tests. For covered cells and batteries, the rule also requires manufacturers and subsequent distributors to make a test summary available with identity, contact, model, physical-description, watt-hour, report, test-result, edition, and responsible-person information.',
        'A matching UN 38.3 test summary addresses a transport evidence requirement; it is not a product-safety certificate, marketplace approval, capacity guarantee, or proof that the mass-produced hand warmer matches the tested battery. The shipper, forwarder, carrier, dangerous-goods specialist, and destination authorities decide classification, state of charge, packing, marks, labels, documents, quantity limits, acceptance, and routing.',
        'Keep product release, importer compliance, marketplace review, customs, and dangerous-goods decisions separately approved and version controlled. Reconfirm current carrier instructions before production, labeling, booking, pickup, and shipment because acceptance rules can change.',
      ],
      bullets: [
        'Match the UN 38.3 test summary to the actual cell or battery model, product model where relevant, manufacturer, physical description, watt-hours, report ID, laboratory, test date, and applicable test edition',
        'Do not use a safety data sheet, supplier declaration, brief charge test, or report for another cell or battery as a substitute for a matching test summary or carrier decision',
        'Do not assume a test summary for a bare cell automatically covers every assembled battery or changed hand-warmer configuration',
        'Hold pickup when product evidence, transport evidence, packaging, labels, documents, or carrier instructions do not reconcile with the finished lot',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Exact model and controlled design',
      whatToConfirm: 'PO, cell, pack, heater, sensor, protection and control board, input, housing, ratings, factory, lot, approved sample, files, package, and packing list identify one version.',
      buyerDecision: 'Continue only with a controlled version; otherwise segregate unknown stock, correct the file, obtain qualified scope review, or hold payment and pickup.',
    },
    {
      riskNode: 'Qualified evidence covers production',
      whatToConfirm: 'Laboratory source, manufacturer, factory, sample photos, exact model, cell and pack, ratings, report scope, dates, results, limitations, changes, and destination use align.',
      buyerDecision: 'Approve, obtain source files, verify with the laboratory or certification body, submit changed samples, retest, redesign, or stop the order.',
    },
    {
      riskNode: 'Physical lot and pack-out match',
      whatToConfirm: 'Sampled units match approved identity, dimensions, weight, housing, controls, ports, indicators, labels, accessories, packs, cartons, and show no visible abnormality.',
      buyerDecision: 'Release the cleared scope, isolate affected units, quantify the lot, investigate, rework, replace, relabel, or re-inspect.',
    },
    {
      riskNode: 'Correction and transport handoff are controlled',
      whatToConfirm: 'Affected quantities, carton map, controlled correction, qualified retest decision, revised files, repeat inspection, UN 38.3 match, packaging, and pickup approval are recorded.',
      buyerDecision: 'Release only the cleared range, hold affected cartons, change routing, delay balance payment, or delay pickup.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'The July 30, 2026 CPSC OCOOPA recall, independent same-day coverage, and the separate UK OPSS rechargeable hand warmer report were checked on August 10, 2026 Beijing time.',
    'Current CPSC high-energy-density battery standards information and the official 49 CFR 173.185 UN 38.3 test-summary requirements are used only for scope boundaries; no record is treated as blanket approval or a guarantee.',
    'Buyer-controlled specification, approved sample, drawings, bill of materials, change log, test and certification file, labels, instructions, packing list, carton map, inspection criteria, transport files, and release rules.',
    'Physical model and lot identifiers, housing, controls, ports, indicators, unit labels, accessories, retail packs, cartons, quantities, visible condition, and safe buyer-approved observations.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Recalls/2026/OCOOPA-Direct-Recalls-1-5-Million-Rechargeable-Hand-Warmers-Due-to-Risk-of-Serious-Injury-or-Death-from-Fire-and-Burn-Hazards-One-Death-Reported-Imported-by-Shenzhen-Street-Cat-Technology',
      label: 'CPSC - OCOOPA rechargeable hand warmer recall 26-659',
      note: 'Primary July 30, 2026 record identifying China manufacture, seven models, three-digit batch identifiers, about 1.5 million units, overheating reports, fires, burn injuries, one death, sales channels, and the remedy.',
    },
    {
      href: 'https://www.gov.uk/product-safety-alerts-reports-recalls/product-safety-report-electric-rechargeable-hand-warmer-sold-via-amazon-and-ebay-2412-0114',
      label: 'UK OPSS - rechargeable hand warmer report 2412-0114',
      note: 'Independent primary record for another rechargeable hand warmer, documenting poor electrical connections, absent secondary restraint, no cell thermal protection, missing documents or markings, and marketplace removal.',
    },
    {
      href: 'https://www.whio.com/news/trending/recall-alert-15m-rechargeable-hand-warmers-recalled-due-burn-fire-injuries/XSGMU44KK5A53CWKBFM5U52HLI/',
      label: 'WHIO - independent OCOOPA recall coverage',
      note: 'Independent July 30, 2026 coverage highlighting the recall scale, reported outcomes, affected models, paired-pack format, model and batch placement, sales channels, and stop-use action.',
    },
    {
      href: 'https://www.cpsc.gov/Regulations-Laws--Standards/Voluntary-Standards/Batteries-Fire-High-Energy-Density',
      label: 'CPSC - high-energy-density battery fire standards work',
      note: 'Current official page identifying the purpose and voluntary standards associated with overheating, thermal burns, fire, and explosion hazards; used to define qualified-review boundaries, not to select a standard for a specific product.',
    },
    {
      href: 'https://www.govinfo.gov/app/details/CFR-2024-title49-vol2/CFR-2024-title49-vol2-sec173-185',
      label: 'GovInfo - 49 CFR 173.185 lithium cells and batteries',
      note: 'Official U.S. Government Publishing Office text covering UN 38.3 design testing and test-summary availability, identity fields, report references, completed tests, applicable edition, and responsible-person validation.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Purchase order, destination, intended use, exact model and SKU list, capacity, watt-hours, charging input, claimed temperature settings, dimensions, weight, materials, colours, paired-unit rules, factory, production dates, lots, quantities, and buyer-approved tolerances',
    'Approved sample record, exploded drawings, bill of materials, wiring information, cell and pack references, protection board, heater, temperature sensor, control logic, housing, ports, magnets or connectors, accessories, and every approved change notice',
    'Applicable-rule and standard review, test plan, full reports and source files, sample photos, laboratory details, certification record, current scope and status, UN 38.3 test summary, transport review, and an index mapping files to the order',
    'Final rating and traceability labels, heat-setting claims, warnings, instructions, retail-pack artwork, barcode, responsible-party information, accessories, carton marks, packing list, and carton map',
    'Buyer-approved inspection method, sampling plan, dimensions and weight tolerances, assembly and workmanship criteria, low-risk functional and temperature-observation limits, defect definitions, stop rules, photo requirements, and release decision',
    'Any known swelling, heat, odour, leakage, charging, control, temperature, port, magnet, label, evidence, certification, packaging, transport, or supplier-change concern and affected quantity',
  ],
  redFlags: [
    'The supplier will not identify the manufacturer, factory, exact model, cell, pack, heater, sensor, protection board, control logic, production lot, batch or serial system, claimed temperatures, or changes',
    'Report or directory records show another model, capacity, cell, pack, heater, control board, manufacturer, factory, sample photo, rating, standard edition, or certification status',
    'Evidence is cropped, edited, incomplete, outside the claimed laboratory or certification scope, or cannot be confirmed through the claimed source',
    'A safety data sheet, component certificate, report cover, logo, factory aging sheet, supplier video, or UN 38.3 summary is presented as complete finished-product approval',
    'Sampled units show swelling, raised seams, distortion, cracks, heat or impact marks, leakage, odour, corrosion, loose ports, rattling, unstable indicators, or inconsistent dimensions or weight',
    'Sampled units or cartons mix cells, packs, heater controls, housings, ratings, temperature claims, accessories, labels, manuals, models, factories, lots, or correction status',
    'Warnings or instructions are missing, removable, unreadable, contradictory, mistranslated, or inconsistent with charging, heat settings, damaged-product action, storage, cleaning, disposal, destination, or intended use',
    'The correction plan lacks affected quantity, segregation, qualified redesign or retest disposition, controlled work instruction, replacement traceability, revised files, carton map, transport review, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible products, identifiers, controlled files, buyer-approved dimensions and weight, housings, controls, ports, indicators, labels, instructions, retail packs, cartons, quantities, and low-risk observations with the agreed reference set in China',
    'Huang Sourcing does not design battery or heater systems, select legal requirements, open or destructively test cells, authenticate every document, certify safety or compliance, issue a laboratory or transport report, authorize a mark, or provide legal or product-safety engineering advice',
    'Visual inspection, ordinary measurements, or limited buyer-approved functional and temperature observations cannot prove internal cell quality, protection performance, capacity, cycle life, abuse tolerance, abnormal-operation behavior, fire safety, or absence of latent defects',
    'Sampling cannot guarantee every unit outside the agreed scope, and mixed lots, sealed products, weak traceability, unsafe setups, missing approved references, or inaccessible stock reduce confidence',
    'The importer, manufacturer, qualified laboratory, certification body, engineer, compliance adviser, broker, marketplace, forwarder, dangerous-goods specialist, carrier, authorities, and end user remain responsible for product-specific decisions',
    'A passed pre-shipment inspection does not guarantee certification validity, importer filing acceptance, customs release, marketplace approval, carrier acceptance, recall avoidance, or safe use after shipment',
  ],
  relatedLinks: [
    {
      href: powerBankChecksChinaArticleHref,
      label: 'Power bank quality checks in China',
      note: 'Compare broader lithium-battery identity, cell and pack evidence, visible abnormality, ratings, serial or lot control, and release boundaries.',
    },
    {
      href: lithiumBatteryAirShippingChinaArticleHref,
      label: 'Lithium battery air shipping from China',
      note: 'Use the separate transport checklist for UN 38.3 evidence, dangerous-goods declarations, state-of-charge instructions, packing, labels, and carrier handoff.',
    },
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China laboratory report',
      note: 'Check report identity, laboratory scope, sample photos, exact-model coverage, dates, source confirmation, and production mismatches.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control plan for China manufacturing',
      note: 'Build approved references, change control, qualified testing, inspections, corrections, and payment holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Match ratings, warnings, instructions, claims, model and lot marks, retail packs, cartons, quantities, and correction evidence.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define photos, tools, measurements, traceability, mismatches, affected quantity, decisions, and scope limits.',
    },
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Use buyer-approved product, packaging, quantity, and evidence checks while the actual goods remain accessible.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related testing, inspection, packaging, payment, pickup, transport, and supplier decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
}

export function makeRechargeableHandWarmerChecksChinaArticleMetadata(): Metadata {
  const article = rechargeableHandWarmerChecksChinaArticle
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

export function makeRechargeableHandWarmerChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(rechargeableHandWarmerChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Rechargeable hand warmer pre-shipment release checklist',
      itemListElement: rechargeableHandWarmerChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
