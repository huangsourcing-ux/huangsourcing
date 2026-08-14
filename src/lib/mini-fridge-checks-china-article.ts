import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  electricKettleChecksChinaArticleHref,
  miniFridgeChecksChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
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

const cpscCooluliRecall =
  'https://www.cpsc.gov/Recalls/2026/Cooluli-Recalls-10-Liter-and-15-Liter-Minifridges-Due-to-Fire-and-Burn-Hazards'
const cpscRefrigeratorRecords =
  'https://www.cpsc.gov/Recall-Products/Refrigerators'
const apCooluliCoverage =
  'https://apnews.com/article/c98c76d9c0ece08e8233b971c10310eb'

export const miniFridgeChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: miniFridgeChecksChinaArticleHref,
  title: 'Mini Fridge Checks Before Shipping from China',
  metaTitle: 'Mini Fridge Checks Before China Shipment',
  metaDescription:
    'Check mini fridge power design, switch, adapter, wiring, fan, temperature, model, batch, labels, cartons, and release evidence before China shipment.',
  publishedDate: 'August 15, 2026',
  publishedDateIso: '2026-08-15T03:32:04+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Mini Fridge Checks Before Shipping from China',
  eyebrow: 'Power architecture - lot identity - shipment release',
  image: {
    alt: 'Neutral AI illustration of an unbranded portable mini fridge, power adapter, thermometer, caliper, multimeter, blank checklist, and export cartons on an anonymous quality-control bench',
    height: 900,
    src: '/images/mini-fridge-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/mini-fridge-checks-china.webp', width: 1600 },
    { height: 1200, src: '/images/mini-fridge-checks-china-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/mini-fridge-checks-china-1x1.webp', width: 1200 },
  ],
  intro:
    'Before releasing balance payment or forwarder pickup for portable mini fridges made in China, freeze the exact cooling or warming architecture, input-power design, model, batch, controlled components, qualified evidence, labels, accessories, package, and carton map. Hold the shipment when the approved records and physical goods do not describe the same saleable version.',
  answerSummary:
    'Use three separate gates: buyer-approved product and market scope, qualified evidence for the exact electrical and thermal design, and sampled comparison of mass production with controlled references. A routine inspection can document identity, visible construction, adapter and input matching, safe specified functions, temperature trend, noise, workmanship, labels, packaging, quantities, and traceability. It cannot certify electrical or fire safety, reproduce abnormal-operation testing, or guarantee long-term temperature control.',
  primaryCta: { label: 'Check Mini Fridges Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side mini fridge evidence and quality check before shipment.

Destination, importer, sales channels, exact models/SKUs, capacity, cooling or warming functions, and intended use:
Manufacturer, factory, production dates, batches, quantities, and carton map:
AC/DC input design, internal or external power supply, plug, adapter, cord, switch, PCB, fan, thermoelectric or compressor system, and controlled bill of materials:
Applicable requirements, qualified reports, certification or listing claims, labels, manuals, packaging, and change log:
Approved inspection functions, temperature method, tools, limits, samples, stop rules, and safety instructions:
Known substitutions, failures, corrections, or evidence concerns:
Balance-payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#product-scope', label: 'Product and power scope' },
    { href: '#qualified-evidence', label: 'Qualified evidence' },
    { href: '#change-control', label: 'Component and lot control' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#labels-packaging', label: 'Labels and packaging' },
    { href: '#inspection-limits', label: 'Inspection limits' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze the destination, importer, intended use, capacity, cooling or warming functions, exact model and SKU, manufacturer, factory, production date, batch, quantity, accessories, package, and carton identity',
    'Document whether each model uses a compressor or thermoelectric system, AC or DC input, an internal or external power supply, which plug and adapter apply, and which functions and claims are approved',
    'Map complete reports and source-verifiable certification or listing claims to the exact finished model, power architecture, controlled components, factory, samples, dates, methods, results, and limitations',
    'Compare the approved switch, power inlet, cord, plug, adapter, PCB, wiring, connectors, fuse or protective parts, fan, heat sink, thermoelectric module or compressor system, enclosure, insulation, door, and gasket with current production',
    'Check sampled units with buyer-approved safe methods for identity, input and adapter match, assembly, switch operation, fan and vent condition, door fit, temperature trend, noise, stability, accessories, workmanship, and visible damage',
    'Check ratings, model and batch marks, destination labels, warnings, instructions, intended-use limits, package claims, barcodes, accessory list, carton marks, quantities, and packing-list alignment',
    'Hold mixed power designs, changed critical parts, mismatched adapters, missing evidence, abnormal heat or odor, stalled fans, damaged wiring or housings, uncontrolled rework, failed functions, or untraceable cartons',
    'Release only named models, batches, quantities, packages, and cartons after affected scope, correction evidence, qualified disposition, and repeat inspection or testing are documented',
  ],
  checkGroups: [
    {
      title: 'Identity and power architecture',
      items: [
        'Destination, intended use, model, capacity, cooling or warming functions, AC/DC inputs, internal or external power supply, plug, adapter, manufacturer, factory, date, batch, and changes are controlled',
        'Purchase order, approved sample, specification, bill of materials, reports, labels, manual, package, accessories, listing, packing list, and cartons describe one saleable version',
      ],
    },
    {
      title: 'Qualified safety and performance evidence',
      items: [
        'Complete records identify the exact model, power and thermal design, evaluated samples, laboratory or certification body, methods, dates, results, photographs, conditions, and limitations',
        'The importer has documented the destination requirements and claims for electrical safety, fire risk, EMC, energy, materials, markings, plug, temperature use, and marketplace acceptance as applicable',
      ],
    },
    {
      title: 'Production and pack-out',
      items: [
        'Sampled units match approved power inputs, switch, adapter, cord, PCB, wiring, fan, heat path, cooling system, enclosure, door, gasket, shelves, controls, labels, instructions, package, and accessories',
        'Approved functional checks, readings, quantities, barcode, carton marks, package protection, packing list, production dates, batches, and correction status remain traceable',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, batch and carton map, supplier changes, controlled rework, qualified retest decision, revised records, and repeat inspection remain linked',
        'Cleared and unresolved models, power designs, dates, batches, packages, and cartons stay separated; final release names exact scope and open conditions',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why mini fridge power and batch evidence matters now',
      paragraphs: [
        'On August 13, 2026, the U.S. Consumer Product Safety Commission recalled about 250,000 Cooluli 10-Liter and 15-Liter minifridges manufactured in China. CPSC said the electrical switch can short circuit. The record reports at least 19 events involving smoking, sparking, burning, melting, overheating, or fire, more than $80,000 in property damage, and one smoke-inhalation injury.',
        'The recall distinguishes a specific architecture: affected units have an internal power supply and separate AC and DC inputs instead of relying only on an external brick-style supply. It identifies model and batch locations and a remedy that uses a replacement DC cord plus a permanent cover for the AC port. That makes architecture, input identity, and batch traceability concrete shipment-release questions.',
        'This is not an isolated current category signal. CPSC records show a January 15, 2026 expansion covering about 330,000 China-made Frigidaire-brand minifridges after fire reports, following 634,000 units recalled in 2024. Associated Press independently covered the August Cooluli case, adding current public attention beyond the regulator record.',
      ],
      bullets: [
        'A similar shell, supplier declaration, model-family report, or functional demo does not prove the current electrical architecture matches approved evidence',
        'An internal power supply, external adapter, switch, PCB, connector, wiring, fan, heat sink, or protective part change can alter the evidence and inspection question',
        'A short cooling demonstration does not prove electrical safety, abnormal-operation behavior, fire containment, durability, or stable storage temperature',
        'Correction leverage is strongest before final payment and pickup, while affected models, batches, and cartons can still be held, reviewed, reworked, tested, or rejected',
      ],
      citations: [
        { href: cpscCooluliRecall, label: 'CPSC Cooluli minifridge recall' },
        { href: cpscRefrigeratorRecords, label: 'CPSC refrigerator recall records' },
        { href: apCooluliCoverage, label: 'Associated Press Cooluli recall coverage' },
      ],
    },
    {
      id: 'product-scope',
      title: 'Freeze the exact use, cooling system, and power design',
      paragraphs: [
        'Do not treat every small cooler as the same product. Record whether the unit uses a thermoelectric module or compressor, cools only or also warms, accepts AC or DC power, uses an internal supply or external adapter, includes a vehicle cord, and makes any food, beverage, cosmetics, medicine, portability, continuous-use, or temperature claim.',
        'Build one controlled model record connecting the sales SKU to capacity, cabinet dimensions, input ratings, plug, cord, adapter, inlet, selector switch, PCB, wiring, connectors, protective parts, fan, heat sink, thermoelectric module or compressor circuit, thermostat or control, enclosure, insulation, door, gasket, shelves, labels, manual, accessories, package, date, batch, and cartons.',
        'The importer and qualified advisers should identify the current destination requirements and accepted evidence for the exact product and claims. Keep legal classification, electrical and fire-safety evaluation, EMC, energy or labeling duties, plug requirements, material restrictions, marketplace rules, and buyer inspection as separate scopes.',
      ],
      bullets: [
        'Control every model suffix, capacity, color only when it changes materials, AC/DC version, plug, adapter, cord, control board, cooling system, package, and listing identity',
        'Record the first affected date, production line, batch, quantity, package, and carton range for every approved or suspected change',
        'Match intended-use statements across product, manual, package, listing, purchase order, and importer files',
        'Reject broad “same series” coverage unless the responsible evidence owner documents why all relevant variants are covered',
      ],
    },
    {
      id: 'qualified-evidence',
      title: 'What should qualified mini fridge evidence connect?',
      paragraphs: [
        'Review complete source records rather than a logo image, report cover, or supplier summary. Capture the issuer, laboratory or certification body, authorization status, applicant, manufacturer, factory, exact model, power and thermal design, samples, photographs, dates, methods, conditions, individual results, failures, corrections, limitations, and current status.',
        'Connect the evaluated sample to the approved bill of materials and current production. A genuine report for a different adapter, plug, switch, PCB, wire set, protective device, fan, enclosure material, cooling module, factory, or model is not proof for the shipment without a documented qualified coverage decision.',
        'Keep qualified testing, source verification, factory process control, and buyer inspection distinct. Source checks establish what a record actually covers. Qualified evaluation addresses prescribed safety or performance. Factory controls maintain the approved build. Buyer inspection compares sampled goods with approved references and reports deviations for disposition.',
      ],
      bullets: [
        'Confirm claimed records through the issuer or official directory where an appropriate verification route exists',
        'Match identifiers and evaluated-sample photographs to the approved sample, current goods, internal build record, ratings, package, and sales listing',
        'Escalate incomplete, altered, expired, suspended, withdrawn, inaccessible, or contradictory records and evidence issued to another model, factory, applicant, or power design',
        'Require qualified review when the report does not clearly cover every input configuration, accessory, function, and market claim sold',
      ],
      citations: [
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing laboratory report verification guide' },
        { href: verifyUlCertificationChinaArticleHref, label: 'Huang Sourcing claimed UL certification guide' },
      ],
    },
    {
      id: 'change-control',
      title: 'Control switches, power parts, cooling parts, and lots',
      paragraphs: [
        'An approved sample is useful only when production stays tied to it. Compare the controlled bill of materials, drawings, approved supplier list, incoming records, line issue records, assembly instructions, in-process checks, finished-lot results, retained samples, labels, and correction history.',
        'Power and heat-path changes deserve explicit review. Track the input inlet, selector switch, cord, plug, adapter, fuse or protective device, PCB, wiring gauge and insulation, connectors, fan, vent pattern, heat sink, thermoelectric module or compressor components, thermostat, enclosure resin, insulation, feet, door, and gasket.',
        'When a substitution appears, identify old and new parts, supplier, ratings, specification, first production date, affected quantity, model and batch scope, test status, and carton range. Segregate affected goods until responsible parties document whether approved evidence remains applicable or new evaluation is needed.',
      ],
      bullets: [
        'Tie incoming labels and internal part codes to approved manufacturer part numbers and controlled specifications',
        'Keep approved and changed production separated at unit, inner-pack, carton, pallet, and packing-list levels',
        'Record rework instructions, affected quantity, operator or line, completion evidence, and repeat checks',
        'Treat short-circuit behavior, abnormal operation, overheating, fire containment, insulation, endurance, EMC, and long-term cooling as qualified evaluation questions',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled finished goods with approved references while the order is accessible. The useful output is a traceable record of model and batch identity, power inputs and accessories, visible assembly, switch and controls, fan and vents, door and gasket, shelves, feet, labels, instructions, packages, quantities, cartons, defects, mismatches, and affected scope.',
        'Use only buyer-approved, safe, non-destructive checks and tools. These may include visual comparison, dimensions and mass, stability, door movement and seal contact, shelf fit, cord and adapter match, power-up, switch operation, fan airflow direction, unusual noise or vibration, and a defined temperature-trend check. Record ambient, start and end temperatures, duration, setup, tool, sample, raw readings, result, and limits.',
        'Stop and isolate the sample if there is smoke, sparking, melting, abnormal odor, unexpected heat, damaged insulation, exposed conductors, loose power parts, stalled fan, severe noise, liquid near live parts, or another unsafe condition. Do not continue a functional check to obtain a better photo or a complete reading.',
      ],
      bullets: [
        'Use buyer-approved sampling, defect classes, tolerances, tools, operating duration, environmental conditions, stop rules, and safety instructions',
        'Match the unit rating, input type, cord, plug, adapter output, connector polarity where specified, accessories, and destination package before energizing',
        'Photograph identity labels, input ports, adapter and cord ratings, switch, vents, door and gasket, control response, readings, defects, batch, and carton context',
        'Quantify failed, changed, mixed, damaged, reworked, or inaccessible units instead of describing them as isolated cosmetic findings',
      ],
    },
    {
      id: 'labels-packaging',
      title: 'Check ratings, intended-use limits, package, and traceability',
      paragraphs: [
        'Compare the approved unit label, model and batch identifiers, input ratings, manufacturer or responsible-party identity, destination markings, warnings, instructions, temperature and use claims, package panels, barcodes, accessories, carton marks, carton quantity, and packing list.',
        'The product, adapter, cord, plug, vehicle lead, manual, package, listing file, and carton should describe compatible configurations. A correct outer carton does not cure a wrong adapter inside, and a replacement sticker does not resolve an unapproved electrical build unless responsible parties have documented the disposition.',
        'Inspect legibility, permanence where required, placement, language, completeness, and consistency across sampled units. Treat mixed or missing batch identity as a release issue because correction, future field action, and customer communication depend on knowing which units are affected.',
      ],
      bullets: [
        'Do not add unsupported food, medicine, infant-feeding, cosmetics, continuous-use, vehicle, or precise-temperature claims at final artwork approval',
        'Check product and power-accessory ratings separately rather than photographing one convenient package panel',
        'Verify retail-pack protection for door, hinges, shelf, controls, vents, cord, adapter, vehicle lead, and finish',
        'Require revised artwork, controlled relabeling or repacking, affected-quantity records, and repeat inspection after correction',
      ],
    },
    {
      id: 'inspection-limits',
      title: 'Where does inspection stop and qualified testing begin?',
      paragraphs: [
        'Qualified electrical and thermal evaluation can involve abnormal operation, overload, short-circuit and protective-device behavior, insulation, dielectric strength, leakage current, grounding, temperature rise, flammability, stability, mechanical strength, moisture, endurance, EMC, energy, environmental conditioning, defined samples, calibrated equipment, controlled facilities, and competent interpretation.',
        'Do not improvise blocked-vent, unattended endurance, high-voltage, overload, fault, heating, flame, liquid, connector modification, or destructive enclosure tests during routine inspection. A supplier video, surface thermometer, short cooling run, or plug-in demonstration is not a substitute for prescribed evaluation.',
        'A passed sampled inspection supports a buyer decision only within its stated scope. It cannot cure missing evidence, validate an unapproved design change, prove every unsampled unit, certify compliance, or promise customs, marketplace, regulator, storage, fire, or field-performance outcomes.',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product and power identity',
      evidence: 'Destination, intended use, exact model, capacity, cooling system, AC/DC inputs, internal or external power supply, plug, adapter, manufacturer, factory, dates, batches, packages, and approved changes align.',
      buyerDecision: 'Hold aliases, mixed power designs, unclear use claims, wrong accessories, or unexplained revisions until qualified review and traceable correction.',
    },
    {
      riskNode: 'Qualified safety and performance evidence',
      evidence: 'Complete source-verifiable records map the evaluated electrical and thermal design to current production, samples, methods, results, conditions, status, and limitations.',
      buyerDecision: 'Hold missing, partial, expired, mismatched, changed, failed, or unverifiable evidence; route testing and certification decisions to responsible parties.',
    },
    {
      riskNode: 'Finished-goods comparison',
      evidence: 'Sampled production matches approved inputs, switch, cord, adapter, PCB, wiring, protection, fan, heat path, cooling system, enclosure, door, labels, package, functions, quantities, and cartons.',
      buyerDecision: 'Hold affected models and cartons for quantified correction, engineering or compliance disposition, repeat inspection, or qualified testing.',
    },
    {
      riskNode: 'Traceability and release',
      evidence: 'Evidence, production records, unit and adapter labels, packages, packing list, batches, cartons, rework, and correction records stay linked.',
      buyerDecision: 'Release only named models, power versions, dates, batches, quantities, packages, and cartons with documented open conditions and importer approval.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'August 13, 2026 CPSC recall for Cooluli 10-Liter and 15-Liter minifridges, including the stated switch short-circuit hazard, affected architecture, model and batch identifiers, China manufacture, incident reports, injury, damage, and remedy',
    'CPSC refrigerator records for the separate January 15, 2026 Frigidaire-brand minifridge recall expansion and the earlier affected models, showing a current recurring short-circuit and fire-risk category signal',
    'Independent Associated Press coverage dated August 13, 2026 confirming current public attention to the Cooluli recall and preserving the regulator record as the source of case facts',
    'Buyer-side sourcing analysis that keeps importer decisions, qualified testing, factory controls, inspection observations, corrections, and shipment release in separate scopes',
  ],
  whatToSend: [
    'Destination markets, importer details, sales channels, intended uses and claims, exact models and SKUs, capacity, functions, manufacturer and factory names, production dates, batches, quantities, and carton map',
    'Purchase order, approved specification and sample, drawings, full bill of materials, power architecture, electrical diagram, controlled components, dimensions, tolerances, labels, packages, accessories, and change log',
    'Complete reports, certification or listing records if claimed, issuer verification details, evaluated-sample photographs, test conditions and results, status, limitations, and unresolved technical questions',
    'Approved unit, adapter, cord, plug, vehicle lead, warning, manual, intended-use, temperature-claim, package, barcode, listing, and carton artwork for every destination and model',
    'Approved sampling plan, safe functional checks, temperature method and limits, operating duration, tools, environment, defect classes, stop rules, photo list, and correction evidence',
    'Balance-payment and pickup deadlines, hold authority, factory contacts, affected-batch isolation plan, rework or retest route, and exact conditions required for release',
  ],
  redFlags: [
    'Reports or public records name a different model, applicant, manufacturer, factory, input design, plug, adapter, switch, PCB, cooling system, enclosure, or intended use',
    'The supplier provides only a logo, marketplace badge, report cover, short cooling video, or generic certification statement',
    'Production changed an inlet, switch, cord, plug, adapter, protective part, PCB, wiring, fan, heat sink, cooling module, thermostat, enclosure resin, supplier, or factory without disposition',
    'Goods mix power architectures, input ratings, adapters, plugs, accessories, cooling systems, manufacture dates, batches, labels, packages, or internal builds inside one shipment',
    'Sampled units show damaged insulation, loose power parts, abnormal heat or odor, smoke, sparks, melting, stalled fans, unstable feet, poor door fit, severe noise, or failed functions',
    'The factory proposes blocked vents, fault injection, unattended operation, high voltage, overload, flame, liquid, or another improvised test as proof of safety',
    'Failed, corrected, relabeled, repacked, or substituted units cannot be mapped to affected quantities, batches, packages, and cartons',
  ],
  scopeLimits: [
    'A routine China-side inspection does not reproduce qualified electrical, fire, abnormal-operation, EMC, energy, or long-term temperature tests and is not a compliance certification',
    'Sampling does not prove every unit outside the inspected sample or guarantee safe future use, stable storage temperature, durability, or field performance',
    'Document comparison cannot authenticate every statement without source confirmation and qualified review',
    'Visual and short functional checks cannot validate insulation, fault protection, temperature rise, fire containment, material flammability, endurance, or every destination requirement',
    'Huang Sourcing does not decide legal classification, approve a laboratory or certification body, issue certificates, validate medical or food storage, or guarantee customs or marketplace acceptance',
  ],
  relatedLinks: [
    {
      href: electricKettleChecksChinaArticleHref,
      label: 'Electric kettle shipment checks',
      note: 'Compare another mains-powered appliance workflow for model evidence, power parts, safe functions, labels, cartons, and release limits.',
    },
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
      note: 'Build product evidence, component change control, testing, inspections, corrections, and holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Match ratings, model, batch, intended-use claims, warnings, accessories, package, barcode, carton marks, and approved files.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report',
      note: 'Define photos, sampling, checks, readings, batch traceability, defects, affected quantity, decisions, and scope limits.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Before balance-payment check',
      note: 'Hold, correct, re-inspect, test, or release a named batch before money and goods move.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, testing, packaging, payment, pickup, supplier, and shipment decisions.',
    },
  ] satisfies RelatedLink[],
  sourceNotes: [
    {
      href: cpscCooluliRecall,
      label: 'U.S. CPSC - Cooluli minifridge recall',
      note: 'Primary public record dated August 13, 2026 describing the switch short-circuit hazard, internal AC/DC architecture, affected models and batches, China manufacturer, incidents, injury, damage, and remedy.',
    },
    {
      href: cpscRefrigeratorRecords,
      label: 'U.S. CPSC - Refrigerator recall records',
      note: 'Official category record including the January 15, 2026 Frigidaire-brand minifridge expansion, China manufacture, short-circuit and ignition hazard, affected model and serial range, incident reports, and remedy.',
    },
    {
      href: apCooluliCoverage,
      label: 'Associated Press - Cooluli recall coverage',
      note: 'Independent reporting published August 13, 2026 on the 250,000-unit recall, affected product architecture, incident reports, property damage, injury, sales period, and remedy.',
    },
  ] satisfies SourceNote[],
}

export function makeMiniFridgeChecksChinaArticleMetadata(): Metadata {
  const article = miniFridgeChecksChinaArticle

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

export function makeMiniFridgeChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(miniFridgeChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Mini fridge pre-shipment release checklist',
      itemListElement: miniFridgeChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
