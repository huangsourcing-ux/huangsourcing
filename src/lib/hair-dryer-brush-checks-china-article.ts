import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  hairDryerBrushChecksChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  ukPlugCheckChinaSourcingArticleHref,
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

export const hairDryerBrushChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: hairDryerBrushChecksChinaArticleHref,
  title: 'Hair Dryer Brush Checks Before Shipping from China',
  metaTitle: 'Hair Dryer Brush Checks Before Shipping from China',
  metaDescription:
    'Check hair dryer brush models, immersion-protection evidence, plugs, cords, airflow, heat settings, labels, cartons, and release decisions before China shipment.',
  publishedDate: 'August 8, 2026',
  publishedDateIso: '2026-08-08T15:35:00-04:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Hair Dryer Brush Checks Before Shipping from China',
  eyebrow: 'Electrical evidence - finished-lot checks - payment and pickup release',
  image: {
    alt: 'Neutral AI illustration of a generic hot-air hair dryer brush, disconnected test probes, caliper, blank checklist, and export carton on an inspection bench',
    height: 900,
    src: '/images/hair-dryer-brush-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/hair-dryer-brush-checks-china.webp', width: 1600 },
    { height: 900, src: '/images/hair-dryer-brush-checks-china-4x3.webp', width: 1200 },
    { height: 1000, src: '/images/hair-dryer-brush-checks-china-1x1.webp', width: 1000 },
  ],
  intro:
    'Before releasing balance payment or forwarder pickup for hair dryer brushes made in China, freeze the destination, exact model, voltage, wattage, plug, cord, protective device, heater and fan build, attachments, controls, markings, instructions, production lot, and cartons. Hold shipment whenever the physical product or evidence differs from the buyer-approved version.',
  answerSummary:
    'Use three separate gates: qualified electrical-safety and destination-rule review, buyer-side comparison of sampled finished goods with the approved model, and importer or marketplace compliance review. A China-side inspection can document identity, visible construction, plug and cord, controls, attachments, labels, packaging, quantities, and low-risk buyer-approved observations. It cannot safely improvise immersion, leakage-current, dielectric, abnormal-operation, temperature, endurance, fire, or shock testing, certify the appliance, or guarantee safe performance.',
  primaryCta: { label: 'Check Hair Dryer Brushes' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side hair dryer brush evidence and quality check before shipment.

Destination market, model/SKU, voltage, frequency, wattage, and plug:
Factory, production dates, lots, quantity, and carton map:
Approved sample, drawings, bill of materials, and tolerances:
Protective device, cord, heater, fan, controls, attachments, and change records:
Qualified reports, certification claims, and exact sample coverage:
Ratings, warnings, instructions, retail packaging, and carton files:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#model-control', label: 'Exact model and change control' },
    { href: '#electrical-evidence', label: 'Electrical evidence' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#claims-labels', label: 'Claims, ratings, and warnings' },
    { href: '#test-boundary', label: 'Inspection limits' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze the exact model, SKU, voltage, frequency, wattage, plug, cord, protective-device configuration, heater, motor, fan, air path, barrel, bristles, attachments, switches, factory, date, lot, labels, instructions, and package version',
    'Require qualified product-safety, laboratory, importer, and marketplace parties to identify current destination requirements, test methods, certification scope, and any certificate or eFiling duty',
    'Map complete reports and certification claims to the manufacturer, factory, exact model, ratings, plug, sample photos, construction, dates, results, limitations, and authorized changes',
    'Compare sampled production with the approved sample, drawings, bill of materials, tolerances, and change log for housing, guards, air openings, barrel, bristles, attachments, switches, cord entry, strain relief, plug, fasteners, and workmanship',
    'Verify immersion protection, leakage current, dielectric strength, grounding where applicable, abnormal operation, accessible temperatures, fire resistance, endurance, and other safety conclusions only through qualified evidence',
    'Check model and lot identity, ratings, warning and instruction content, destination language, traceability, barcode, retail pack, carton protection, carton marks, quantity, and packing list',
    'Hold mixed plugs, cords, protective devices, heaters, motors, housings, attachments, labels, manuals, factories, models, lots, or cartons until scope and correction evidence are resolved',
    'Release only named models, production dates, lots, quantities, and cartons after documented correction, qualified disposition, and repeat inspection where needed',
  ],
  checkGroups: [
    {
      title: 'Exact model, ratings, and destination',
      items: [
        'Destination, model, rated voltage, frequency, wattage, plug, cord, intended use, factory, date, lot, importer, and approved changes are controlled',
        'PO, approved sample, drawings, bill of materials, test samples, reports, labels, instructions, package, carton, and packing list describe one production version',
      ],
    },
    {
      title: 'Protective device and qualified evidence',
      items: [
        'Protective-device type, plug and cord configuration, heater, motor, fan, switch, air path, abnormal-operation plan, sample photos, results, and limitations align',
        'Laboratory or certification source, file number, manufacturer, factory, product category, exact model, ratings, current status, and mark authorization are independently checked',
      ],
    },
    {
      title: 'Physical product and pack-out',
      items: [
        'Sampled units match the approved housing, air openings, barrel, bristles, attachments, controls, cord entry, strain relief, cord, plug, fasteners, markings, finish, and assembly',
        'Model, lot, ratings, warnings, instructions, retail package, barcode, accessories, carton quantity, carton marks, packing list, and destination file are consistent and readable',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, carton map, supplier change, controlled work instruction, replacement parts, qualified retest disposition, revised files, and repeat inspection remain traceable',
        'Cleared and unresolved models, dates, lots, and cartons stay separated; final release names exact scope and open conditions rather than giving a blanket pass',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why hair dryer brush release evidence matters now',
      paragraphs: [
        'On August 6, 2026, the U.S. Consumer Product Safety Commission warned consumers to stop using multiple DEISNGB and TikTok Shop hair dryer brushes. CPSC said the China-made products lacked integrated immersion protection, violated federal hair-dryer regulations, and presented electrocution and shock hazards. The agency said the Chinese seller was unresponsive and TikTok Shop had not agreed to a recall or remedy.',
        'Two days earlier, the UK Office for Product Safety and Standards published a separate serious-risk report for a China-made Small Caring hairdryer. UK authorities said live parts were accessible by hand, the plug, fuse, and cable were counterfeit, and required markings and documentation were missing; the import was rejected at the border.',
        'The records involve different products, countries, rules, sellers, and failure modes. They do not prove every hair dryer brush, factory, or lot has the same defect. Together they show why release control must connect destination-specific qualified evidence with the exact mass-produced plug, cord, protective device, housing, air path, labels, instructions, and lot before money or goods move.',
      ],
      bullets: [
        'A supplier claim such as “UL,” “CE,” “UKCA,” “double insulated,” “anti-scald,” or “overheat protection” needs exact-model evidence and is not proof by itself',
        'Plug, circuit interrupter, cord, strain relief, switch, heater, thermostat, thermal device, motor, fan, housing, air inlet, barrel, attachment, factory, and voltage changes can alter the evidence question',
        'A genuine report is useful only when sample photos, construction, ratings, factory, results, limitations, and the shipped version align',
        'Correction leverage is strongest before balance payment and pickup, while segregation, replacement, retesting, re-inspection, relabeling, or cancellation remains practical',
      ],
    },
    {
      id: 'model-control',
      title: 'Freeze the exact hair dryer brush model before relying on evidence',
      paragraphs: [
        'Build one controlled model record connecting SKU and marketplace names to voltage, frequency, wattage, plug, cord, protective device, housing, heater, motor, fan, air inlet and outlet, barrel, bristles, attachments, switches, thermal controls, warnings, instructions, factory, date, and lot.',
        'Do not treat color or styling as a unique identifier. Two brushes can share the same shell while using different plugs, circuit interrupters, cords, heaters, motors, thermal devices, switch assemblies, plastics, or factories. Those changes can invalidate the relationship between a test sample and production.',
        'Put every safety-relevant substitution through written change control. Hold affected production until qualified parties determine whether document review, testing, certification updates, or new importer filings are required.',
      ],
      bullets: [
        'Use a controlled specification, bill of materials, exploded drawing, wiring diagram, approved sample, label artwork, manual, retail-pack file, and carton map',
        'Photograph the approved reference from the same angles and detail points required during mass-production inspection',
        'Require each supplier change to identify the first affected unit, production date, lot, and carton range',
        'Reject unexplained evidence for another manufacturer, factory, model alias, voltage, plug, protective device, construction, or sample photo',
      ],
    },
    {
      id: 'electrical-evidence',
      title: 'What should qualified electrical evidence establish?',
      paragraphs: [
        'For the U.S. market, CPSC identifies hand-supported hair dryers without required integral immersion protection as a substantial product hazard under 16 CFR Part 1120. CPSC describes the protection as a block-shaped plug incorporating a circuit interrupter. The responsible importer and qualified technical parties must determine whether the exact hot-air brush falls within the rule and what testing, certification, and eFiling are required.',
        'For other destinations, do not transplant the U.S. rule or accept a U.S. plug as global evidence. Qualified parties should identify applicable electrical-equipment, plug, EMC, chemical, marking, documentation, and product-category requirements for the actual market and version.',
        'A component datasheet or plug photo does not prove the finished appliance behaves as intended. The evidence file should connect the complete assembly, protective device, wiring, heater, motor, thermal controls, air path, materials, tolerances, abnormal-operation behavior, production controls, and change history to the tested sample.',
      ],
      bullets: [
        'Record laboratory role, report number, issue date, standard and edition, clauses, sample photos, exact model, ratings, construction, results, deviations, and limitations',
        'Map plug, protective device, cord, strain relief, switches, heater, thermostat, thermal cutoff, motor, fan, connectors, wiring, and housing materials to approved parts and substitution rules',
        'Ask qualified parties whether immersion protection, leakage, dielectric, grounding, accessibility, heating, abnormal operation, mechanical strength, fire resistance, and endurance evidence covers the shipped configuration',
        'Escalate cropped reports, edited screenshots, missing sample photos, unexplained model families, inconsistent dates, or files that cannot be verified at the claimed source',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled production with approved references while the goods remain accessible. The useful output is a traceable record of model and lot identity, visible construction, dimensions, assembly, ratings, warnings, instructions, packaging, quantities, defects, mismatches, and affected carton scope.',
        'Inspect housing fit, inlet and outlet openings, guards, barrel, bristles, attachment retention, switches, selector markings, cord entry, strain relief, cord, plug body, protective-device identity, fasteners, seams, surfaces, sharp edges, loose parts, contamination, odour, finish, labels, and accessories against buyer-approved criteria.',
        'Use only low-risk buyer-approved observations. Do not immerse, wet, open, bypass, short, stall, block airflow, expose live parts, overload, run unattended, or improvise leakage, dielectric, temperature, abnormal-operation, endurance, fire, or shock tests during an ordinary inspection.',
      ],
      bullets: [
        'Photograph each sampled unit or sample number with model and lot code, rating label, inlet, outlet, barrel, bristles, attachments, controls, cord entry, plug, protective device, warnings, manual, retail pack, and carton context',
        'Use buyer-approved measurements, tolerances, sampling, defect classes, photo rules, functional-observation limits, and stop conditions',
        'Quantify mixed, substituted, missing, loose, damaged, deformed, contaminated, unreadable, or out-of-tolerance findings rather than reducing them to cosmetic comments',
        'Keep destructive and electrical-safety testing separate from ordinary saleable-stock inspection',
      ],
    },
    {
      id: 'claims-labels',
      title: 'Verify ratings, certification claims, warnings, and instructions',
      paragraphs: [
        'Treat each certification logo, listing claim, report reference, and safety promise as a scoped statement. Verify the claimed source using its file number, manufacturer, factory, product category, model, ratings, conditions, and current status. A logo, marketplace badge, supplier PDF, or certified component is not automatically finished-product certification.',
        'Keep the product label, plug label, package, manual, online claim, and shipping documents consistent. Confirm model, voltage, frequency, wattage, responsible party, production traceability, use restrictions, water and damaged-cord warnings, cleaning instructions, attachments, destination language, and disposal information.',
        'CPSC states that U.S. imported products subject to a certification requirement generally require electronic certificate filing from July 8, 2026. The importer should determine the exact rules and certificate content; eFiling does not turn an unregulated product into a regulated one and does not replace testing or a matching finished-product record.',
      ],
      bullets: [
        'Do not translate a certified plug, motor, switch, or thermal device into a certified finished appliance',
        'Do not rely on a report covering another voltage, plug, heater, motor, protective device, factory, or model family without documented scope',
        'Do not present a voluntary-standard claim as government approval or a guarantee of safe performance',
        'Do not let packaging promise waterproof, anti-scald, salon grade, child safe, overheat proof, or other behavior the approved evidence does not support',
      ],
    },
    {
      id: 'test-boundary',
      title: 'Where does inspection stop and qualified testing begin?',
      paragraphs: [
        'Immersion protection, leakage current, dielectric strength, grounding, accessible temperature, abnormal operation, stalled motor, blocked airflow, mechanical strength, endurance, material flammability, and fire-risk evaluations can involve energized equipment, water, controlled faults, calibrated instruments, special fixtures, and injury risk. They belong with qualified parties.',
        'Huang Sourcing can organize buyer-approved files and compare visible goods with controlled references. It does not design the appliance, select legal requirements, certify a product, issue a laboratory report, authorize a mark, submit importer filings, or make electrical or product-safety guarantees.',
        'A passed visual inspection supports a shipment decision only within its stated scope. It cannot cure missing qualified evidence or prove every unit outside the sample will perform safely.',
      ],
      bullets: [
        'Do not improvise immersion, wet, leakage, dielectric, grounding, heating, blocked-airflow, overload, endurance, drop, fire, or fault tests during an ordinary inspection',
        'Do not infer complete protection from one plug photo, brief function demonstration, warning label, supplier video, or certificate cover page',
        'Do not use a passed visual inspection as a substitute for the complete qualified evidence and responsible-party release decision',
        'Record unresolved technical, certification, importer, marketplace, or legal decisions as open conditions and hold the affected scope until closed',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Exact model and controlled design',
      whatToConfirm: 'PO, ratings, plug, cord, protective device, heater, motor, fan, housing, controls, attachments, factory, lot, approved sample, files, package, and packing list identify one version.',
      buyerDecision: 'Continue only with a controlled version; otherwise segregate unknown stock, correct the file, obtain qualified scope review, or hold payment and pickup.',
    },
    {
      riskNode: 'Qualified electrical and market evidence',
      whatToConfirm: 'Responsible parties accept the laboratory or certification source, standard and edition, exact sample, construction, methods, results, limitations, status, and change history.',
      buyerDecision: 'Approve covered production, verify source files, submit the actual model, redesign, retest, correct claims, or stop the order.',
    },
    {
      riskNode: 'Physical shipment matches',
      whatToConfirm: 'Sampled units match approved housing, air openings, barrel, bristles, attachments, controls, cord entry, cord, plug, protective device, markings, warnings, instructions, packaging, cartons, and quantities.',
      buyerDecision: 'Release cleared scope, isolate affected units, quantify the lot, investigate, rework, replace, or repeat inspection.',
    },
    {
      riskNode: 'Correction and handoff remain traceable',
      whatToConfirm: 'Affected quantity, carton map, supplier change, controlled correction, replacement parts, qualified retest disposition, revised files, repeat inspection, and pickup approval are recorded.',
      buyerDecision: 'Release only cleared models and lots; delay balance payment or pickup, or cancel unresolved scope.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'CPSC warning 26-680 checked August 9, 2026 Beijing time for the warning date, China origin, named sales channels, hazard, regulatory statement, model identifiers, and remedy status.',
    'Separate UK OPSS report 2607-0188 checked for the August 4, 2026 alert date, China origin, serious-risk classification, accessible live parts, counterfeit plug components, missing documentation, and border rejection.',
    'Current CPSC hand-supported hair dryer, general-use certification, and eFiling guidance used for U.S. scope boundaries; no claim treats a mark as government approval or assumes another market follows the same rule.',
    'Buyer-controlled specification, approved sample, drawings, bill of materials, change log, test and certification file, labels, instructions, packing list, carton map, inspection criteria, and release rules.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-Hair-Dryer-Brushes-Immediately-Due-to-Risk-of-Serious-Injury-or-Death-from-Electrocution-and-Shock-Hazards-Violate-Federal-Regulations-Sold-by-DEISNGB-and-TikTok-Shop',
      label: 'CPSC - DEISNGB and TikTok Shop hair dryer brush warning',
      note: 'Primary August 6, 2026 record identifying China manufacture, missing integrated immersion protection, federal-regulation violations, sales channels, product identifiers, and lack of an agreed recall or remedy.',
    },
    {
      href: 'https://www.gov.uk/product-safety-alerts-reports-recalls/product-safety-report-small-caring-hairdryer-2607-0188',
      label: 'UK OPSS - Small Caring Hairdryer report 2607-0188',
      note: 'Independent primary August 4, 2026 record identifying China origin, accessible live parts, counterfeit plug, fuse and cable, missing markings and documents, and border rejection.',
    },
    {
      href: 'https://www.cpsc.gov/FAQ/Hand-Supported-Hair-Dryers',
      label: 'CPSC - hand-supported hair dryer business guidance',
      note: 'Current official explanation of 16 CFR Part 1120, integral immersion protection, the product definition, import consequences, and the distinction between a substantial-product-hazard rule and a general guarantee.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/General-Use-Products-Certification-and-Testing',
      label: 'CPSC - general-use product certification and testing',
      note: 'Current official guidance on applicable rules, reasonable testing programs, General Certificates of Conformity, and products listed as substantial product hazards.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Certificates',
      label: 'CPSC - certificates of compliance and eFiling update',
      note: 'Current official guidance on the July 8, 2026 effective date for most imported regulated consumer products, revised certificate content, and electronic filing scope.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Purchase order, destination, intended use, exact model and SKU list, voltage, frequency, wattage, plug, cord, dimensions, materials, claims, factory, production dates, lots, quantities, and buyer-approved tolerances',
    'Approved sample record, exploded drawings, bill of materials, wiring diagram, protective-device details, heater, motor, fan, air path, housing, switches, thermal devices, cord and plug files, and every approved change notice',
    'Applicable-rule and standard review, test plan, full reports and source files, sample photos, laboratory details, certification record, file number, current scope and status, importer review, and an index mapping files to the order',
    'Final rating and traceability labels, warnings, instructions, retail-pack artwork, barcode, claims, accessories, carton marks, packing list, and carton map',
    'Buyer-approved inspection method, sampling plan, measurements, assembly and workmanship criteria, low-risk functional-observation limits, defect definitions, stop rules, photo requirements, and release decision',
    'Any known electrical, heating, airflow, cord, plug, protective-device, attachment, label, evidence, certification, packaging, or supplier-change concern and affected quantity',
  ],
  redFlags: [
    'The supplier will not identify the manufacturer, factory, exact model, ratings, plug, cord, protective device, heater, motor, thermal controls, production lot, intended use, or changes',
    'Report or directory records show another model, voltage, plug, heater, motor, protective device, manufacturer, factory, sample photo, standard edition, or certification status',
    'Evidence is cropped, edited, incomplete, outside the claimed laboratory or certification scope, or cannot be confirmed through the claimed source',
    'A component certificate or logo is presented as finished-product certification without a matching manufacturer, model, file number, category, ratings, factory, and current record',
    'Sampled units show mixed protective devices, plugs, cords, heaters, motors, thermal parts, housings, attachments, labels, manuals, packages, ratings, model names, or lots',
    'Air openings, guards, barrels, bristles, attachments, switches, cord entries, strain reliefs, cords, plugs, fasteners, markings, or assembly are loose, damaged, deformed, contaminated, inconsistent, or different from approved references',
    'Warnings or instructions are missing, removable, unreadable, contradictory, mistranslated, or inconsistent with the product, destination, attachments, cleaning, water exposure, damaged-cord action, or intended use',
    'The correction plan lacks affected quantity, segregation, qualified redesign or retest disposition, controlled work instruction, replacement traceability, revised files, carton map, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible products, identifiers, controlled files, buyer-approved dimensions, housing, air openings, barrel, bristles, attachments, controls, cords, plugs, labels, instructions, retail packs, cartons, quantities, and observations with the agreed reference set in China',
    'Huang Sourcing does not design appliances, select legal requirements, authenticate every document, certify safety or compliance, issue a laboratory or certification record, authorize a mark, submit importer eFiling, or provide legal or product-safety engineering advice',
    'Visual inspection, ordinary measurements, or limited buyer-approved functional observations cannot prove immersion protection, leakage, dielectric, grounding, temperature, abnormal-operation, endurance, fire, or shock performance',
    'Sampling cannot guarantee every unit outside the agreed scope, and mixed lots, sealed cartons, weak traceability, unsafe setups, or missing approved references reduce confidence',
    'The importer, manufacturer, qualified laboratory, certification body, engineer, compliance adviser, broker, marketplace, retailer, authorities, and end user remain responsible for product-specific decisions',
    'A passed pre-shipment inspection does not guarantee CPSC compliance, certification validity, eFiling acceptance, customs release, marketplace approval, recall avoidance, or safe use after shipment',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China laboratory report',
      note: 'Check report identity, source, sample photos, exact-model coverage, results, limitations, dates, and production mismatches.',
    },
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling for China imports',
      note: 'Coordinate rules, certificate data, product identifiers, importer responsibility, broker handoff, and shipment records where required.',
    },
    {
      href: ukPlugCheckChinaSourcingArticleHref,
      label: 'UK plug checks before shipment',
      note: 'Review plug identity, fuse, cord, ratings, markings, documents, product match, and buyer release boundaries for UK goods.',
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
      note: 'Compare related testing, inspection, packaging, payment, pickup, and supplier decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
}

export function makeHairDryerBrushChecksChinaArticleMetadata(): Metadata {
  const article = hairDryerBrushChecksChinaArticle
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

export function makeHairDryerBrushChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(hairDryerBrushChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Hair dryer brush pre-shipment release checklist',
      itemListElement: hairDryerBrushChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
