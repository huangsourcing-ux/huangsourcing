import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  portableFuelContainerChecksChinaArticleHref,
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

const cpscDeliRecall =
  'https://www.cpsc.gov/Recalls/2026/Deli-Jerry-Fuel-Containers-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Burn-Hazard-and-Child-Poisoning-Violate-Mandatory-Standard-for-Portable-Fuel-Containers-Sold-on-Walmart-com-by-Deli-OfficeSupplies'
const cpscSunnysideRecall =
  'https://www.cpsc.gov/Recalls/2026/Sunnyside-Corporation-Recalls-1-K-Kerosene-Heater-and-Appliance-Fuel-Containers-Due-to-Risk-of-Serious-Injury-or-Death-from-Flash-Fire-and-Burn-Hazard-Violates-Mandatory-Standards-for-Portable-Fuel-Containers'
const cpscFuelGuidance =
  'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Portable-Fuel-Container'
const cpscFuelFaq = 'https://www.cpsc.gov/FAQ/Portable-Fuel-Container'
const cpscGccGuidance =
  'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Lab-Accreditation/Rules-Requiring-a-General-Certificate-of-Conformity'
const calumetPackagingUpdate =
  'https://calumet.com/trufuel-large-package-sizes-updated-with-flame-mitigation-device/'

export const portableFuelContainerChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: portableFuelContainerChecksChinaArticleHref,
  title: 'Portable Fuel Container Checks Before Shipping from China',
  metaTitle: 'Portable Fuel Container Checks Before Shipping from China',
  metaDescription:
    'Classify portable fuel containers, verify closure and flame-mitigation evidence, inspect production, and hold or release China shipments.',
  publishedDate: 'August 20, 2026',
  publishedDateIso: '2026-08-20T03:27:04+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Portable Fuel Container Checks Before Shipping from China',
  eyebrow: 'Product scope - closure evidence - flame mitigation - release',
  image: {
    alt: 'Neutral AI illustration of unbranded portable fuel containers, closure parts, a flame-mitigation insert, measuring tools, and a shipment checklist',
    height: 900,
    src: '/images/portable-fuel-container-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/portable-fuel-container-checks-china.webp', width: 1600 },
    {
      height: 1200,
      src: '/images/portable-fuel-container-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/portable-fuel-container-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before paying the balance or allowing pickup for portable fuel containers made in China, freeze the destination, intended fuel, whether the product ships empty or pre-filled, rated capacity, consumer or safety-can route, exact closure and spout, flame-mitigation device, manufacturer, factory, model, production lot, applicable requirements, qualified evidence, labels, GCC data, retail pack, and carton map. Hold the lot when those elements do not describe one production version.',
  answerSummary:
    'Use four linked gates: importer-led product classification, qualified test and certification evidence for the exact configuration, buyer-side comparison of sampled production with approved references, and traceable correction or release. Routine inspection can document identity, capacity markings, closure and spout configuration, visible flame-mitigation components, workmanship, labels, quantities, and pack-out. It cannot prove child resistance, flame-mitigation performance, chemical compatibility, pressure behavior, or legal compliance.',
  primaryCta: { label: 'Check Fuel Containers Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side portable fuel container evidence and quality check before shipment.

Destination, importer, sales channel, intended fuel, and whether shipped empty or pre-filled:
Exact models, capacities, materials, closure and spout versions, and safety-can claim if any:
Manufacturer, factory, production dates, batches, quantities, and carton map:
Applicable requirements, standards, qualified reports, GCC support, and eFiling data:
Approved samples, drawings, bill of materials, flame-mitigation device details, labels, and packaging:
Known changes, failures, substitutions, rework, evidence gaps, or mixed production:
Balance-payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#classify-product', label: 'Classify the product' },
    { href: '#document-chain', label: 'Evidence chain' },
    { href: '#physical-checks', label: 'Factory checks' },
    { href: '#labels-gcc-efile', label: 'Labels, GCC, and eFiling' },
    { href: '#inspection-limits', label: 'Inspection limits' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze destination, importer, intended liquid, flash point information, filled-versus-empty condition, capacity, consumer-container or safety-can route, model, factory, production lot, closure, spout, flame-mitigation device, labels, packaging, and carton version',
    'Have the importer and qualified compliance parties map the exact product to child-resistant packaging, flame-mitigation, labeling, chemical-packaging, transport, certification, and filing requirements before selecting evidence or inspection criteria',
    'Map complete test and certification files to the manufacturer, factory, exact model, capacity, material, closure, spout, flame-mitigation device, sample photos, dates, methods, results, limitations, and current production revision',
    'Control drawings, materials, dimensions, tolerances, closure mechanism, thread or bayonet geometry, gasket, vent, spout, flame-mitigation component, retention method, warnings, instructions, and every approved change',
    'Compare sampled production for model and capacity identity, closure and spout configuration, tamper evidence, visible flame-mitigation parts, approved dimensions, workmanship, leakage-test records supplied by qualified parties, labels, and pack-out',
    'Check GCC support and eFiling data against the exact importer, manufacturer, model, production date, applicable rule citations, test basis, product identity, retail pack, and carton map',
    'Hold missing or substituted closures, removable or absent components, unapproved materials, distorted sealing surfaces, damaged threads, unsupported reports, improvised tests, mixed labels, or cartons without lot traceability',
    'Release only named models, capacities, closure and flame-mitigation versions, batches, quantities, and cartons after documented correction, qualified disposition, and repeat inspection or testing where required',
  ],
  checkGroups: [
    {
      title: 'Classification and controlled identity',
      items: [
        'Destination, importer, intended fuel, fill condition, capacity, consumer or safety-can route, manufacturer, factory, model, production lot, closure, spout, flame-mitigation device, labels, and approved changes are controlled',
        'PO, specifications, drawings, test samples, reports, GCC support, listing, retail pack, and cartons describe one production version',
      ],
    },
    {
      title: 'Qualified evidence',
      items: [
        'Responsible parties select applicable requirements and complete files identify the tested container, material, capacity, closure, spout, device, factory, methods, results, photos, dates, deviations, and limitations',
        'Child-resistant packaging and flame-mitigation evidence are treated as separate questions with different scope thresholds and test routes',
      ],
    },
    {
      title: 'Finished goods and pack-out',
      items: [
        'Sampled units match approved closures, spouts, seals, vents, visible flame-mitigation components, markings, instructions, workmanship, and buyer-approved dimensions',
        'Model, capacity, production code, warnings, GCC identifiers, retail-pack identity, carton marks, quantities, destination segregation, and packing list stay aligned',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, component lots, carton map, supplier changes, controlled rework, qualified disposition, revised files, and repeat checks remain traceable',
        'Cleared and unresolved models, capacities, closures, devices, batches, and cartons stay separated; final release states every open condition',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why portable fuel container release evidence matters now',
      paragraphs: [
        'On August 13, 2026, the U.S. Consumer Product Safety Commission announced the recall of about 1,750 Deli Jerry fuel containers sold on Walmart.com. The China retailer and manufacturer offered 20-, 25-, and 30-liter metal containers. CPSC said the closures were not child-resistant, creating burn and poisoning risks; the notice reported no incidents or injuries.',
        'The category also has a separate flame-mitigation decision node. On the same date, CPSC recalled about 960 pre-filled Sunnyside kerosene containers because they lacked required flame-mitigation devices. These are different products, parties, and cited violations, so they do not establish one shared root cause. Together with other 2026 fuel-container recalls, they show why buyers must classify the exact container before asking a factory for a generic certificate.',
        'The timing is also current. CPSC guidance records that limited enforcement discretion for certain 2.5- and 5-gallon pre-filled metal pails and fuel-additive containers lasted until January 12, 2026. Calumet separately announced that engineered fuel products packaged on or after that date use updated closures with flame-mitigation devices. A buyer should verify the applicable rule and current construction rather than treating an old package, report, or supplier assurance as enough.',
      ],
      bullets: [
        'Child-resistant closure scope and flame-mitigation scope use different capacity and product definitions; do not collapse them into one checkbox',
        'A visual match, brand family, marketplace listing, or generic report does not prove the same closure, spout, seal, device, capacity, material, or tested construction',
        'A component that is visible during inspection can still require qualified performance testing and responsible-party interpretation',
        'Correction leverage is strongest before final payment and pickup, while affected component lots, batches, and cartons can still be isolated and rechecked',
      ],
      citations: [
        { href: cpscDeliRecall, label: 'CPSC Deli Jerry fuel container recall' },
        { href: cpscSunnysideRecall, label: 'CPSC Sunnyside kerosene container recall' },
        { href: cpscFuelGuidance, label: 'CPSC portable fuel container business guidance' },
        { href: calumetPackagingUpdate, label: 'Calumet 2026 packaging update' },
      ],
    },
    {
      id: 'classify-product',
      title: 'Classify the fuel, fill condition, capacity, and container route first',
      paragraphs: [
        'The importer should classify the product before selecting documents or inspection criteria. CPSC says the child-resistant and adult-friendly packaging requirements apply to portable gasoline, kerosene, and diesel containers with a maximum capacity of 8.45 gallons, or 32 liters. The cited flame-mitigation definition instead covers containers of five gallons or less that are intended for liquid fuels with a flash point below 140 degrees Fahrenheit and are known or reasonably expected to transport, store, and dispense those fuels.',
        'Filled and empty products follow different cited standards. CPSC guidance lists ASTM F3429/F3429M-24 for pre-filled portable fuel containers and ASTM F3326-21 for empty containers. A qualifying safety can may use UL 30:2022 instead of ASTM F3326-21. A detachable camping-stove tank can fall outside the definition when it only functions as an integral part of the stove, but the analysis can change when it is also expected to dispense fuel independently.',
        'Do not use this article to self-classify a borderline product. Freeze the intended fuel and use, capacity in both metric and U.S. units, whether fuel is present at retail, refill and dispensing claims, safety-can claims, material, closure, spout, vent, packaging, and destination. Give that file to the importer and qualified legal, regulatory, testing, or engineering parties for a written scope decision.',
      ],
      bullets: [
        'Do not assume a 20-liter container and a five-gallon container follow identical flame-mitigation scope merely because their sizes look similar',
        'Do not assume propane or other pressurized-gas storage follows the liquid-fuel container route described in the CPSC guidance',
        'Treat replacement spouts, caps, vents, adapters, and multi-use containers as possible configuration changes requiring their own review',
        'Record the classification owner, sources checked, date, assumptions, applicable citations, and unresolved conditions before production release',
      ],
      citations: [
        { href: cpscFuelGuidance, label: 'CPSC product scope and standard routes' },
        { href: cpscFuelFaq, label: 'CPSC portable fuel container FAQ' },
      ],
    },
    {
      id: 'document-chain',
      title: 'What should the test and certification evidence connect?',
      paragraphs: [
        'Review complete evidence rather than a report cover, ASTM name, UL logo, or supplier declaration. Record the issuer, client, manufacturer, factory, exact model, capacity, intended fuel, filled or empty condition, material, closure, spout, seal, vent, flame-mitigation device, test-sample photos, receipt and test dates, cited edition, methods, results, deviations, and limitations. The production bill of materials and drawings should identify the same configuration.',
        'Child-resistant packaging testing and flame-mitigation testing answer different performance questions. CPSC describes one route around ASTM F2517 and another around ASTM F3429/F3429M-24, ASTM F3326-21, or UL 30:2022 depending on product classification. The importer and qualified laboratory should determine the current edition, sample route, test basis, and family coverage; an inspector should not infer coverage from similar-looking cans.',
        'Control post-test changes. A new resin or metal thickness, neck geometry, thread or bayonet profile, cap liner, gasket, spring, ratchet, vent, spout, device mesh, device retention method, adhesive, supplier, tool, mold, factory, or assembly setting can change the evidence question. Hold affected production until the responsible party documents whether the change remains covered or needs new samples and testing.',
      ],
      bullets: [
        'Confirm reports with the claimed issuer and official listing or certificate source when a verification route exists',
        'Match test-sample photographs and identifiers to the approved reference, bill of materials, production units, labels, and packaging',
        'Escalate cropped files, edited results, inconsistent dates, unclear methods, missing photos, unsupported model families, or evidence issued to another factory or configuration',
        'Keep laboratory performance conclusions separate from buyer-side identity, workmanship, quantity, packaging, and traceability observations',
      ],
      citations: [
        { href: cpscFuelGuidance, label: 'CPSC standards, labeling, and GCC guidance' },
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing lab report verification guide' },
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled production with approved references while the goods remain accessible. The useful output is a traceable record of model, capacity, material, closure, spout, seal, vent, visible flame-mitigation component, production code, approved dimensions, workmanship, labels, packaging, quantities, defects, mismatches, and affected carton scope.',
        'Inspect accessible parts without altering the safety design. Check the approved closure sequence and adult-use instructions, cap and neck geometry, thread or bayonet engagement, ratchets or locking features, gasket presence and seating, vent and spout identity, device presence and retention appearance, molding or forming quality, welds or seams, corrosion, dents, cracks, flash, sharp edges, contamination, markings, and component counts. Use only buyer-approved gauges, fixtures, methods, and acceptance limits.',
        'Stop and isolate any unit with a missing or substituted component, damaged thread, deformed sealing surface, split material, loose device, unapproved vent or spout, leak evidence, unreadable identity, contamination, or mismatch with the controlled file. Preserve affected samples and quantities for qualified disposition instead of adding fuel, exposing the product to flame, forcing the closure, pressurizing the container, or improvising a leakage or performance test.',
      ],
      bullets: [
        'Use an approved sampling plan, defect classes, measurement list, safe handling method, stop rules, photo list, and traceability scheme',
        'Check identity before and after any approved dry assembly so observations remain tied to a model, capacity, component lot, production batch, and carton',
        'Quantify missing, mixed, loose, cracked, deformed, contaminated, corroded, mislabeled, unreadable, leaking, or poorly packed units and parts',
        'Keep prescribed child-panel, flame, flashback, endurance, chemical-compatibility, pressure, drop, leakage, or transport testing outside routine inspection',
      ],
    },
    {
      id: 'labels-gcc-efile',
      title: 'Connect product labels, GCC support, eFiling data, and cartons',
      paragraphs: [
        'Match the product, production or lot code, capacity and fuel markings, instructions, warnings, retail pack, online listing, test evidence, GCC support, packing list, and cartons. CPSC guidance points importers to labeling provisions for containers intended to be filled by retail vendors with gasoline, kerosene, or other petroleum distillates. Responsible parties should decide the exact content and placement; an inspection can compare only the approved artwork and physical result.',
        'CPSC states that domestic manufacturers or importers of regulated portable fuel containers must issue a General Certificate of Compliance. Its guidance gives 16 CFR part 1460 for portable fuel container special packaging and 16 CFR part 1461 for flame-mitigation devices. The certificate should be supported by the importer-controlled compliance record, not created by the factory or inspector as a substitute for the responsible party.',
        'CPSC also states that beginning July 8, 2026, importers of most regulated consumer products must electronically file certificate data through U.S. Customs and Border Protection. Keep the eFiling product identifier, manufacturer, production date and place, applicable rule citations, testing record, and shipment data aligned with the physical lot. A successful data submission does not cure a mismatched, changed, or failed product.',
      ],
      bullets: [
        'Do not let product markings, GCC data, eFiling data, report identifiers, retail pack, carton labels, and packing list describe different products or parties',
        'Hold unreadable, removable, missing, mixed, or contradictory capacity, model, batch, warning, instruction, and traceability information until corrected and rechecked',
        'Photograph identity and closure evidence in product, component, retail-pack, inner-pack, and carton context',
        'Keep the importer as decision owner for certificate content, filing, destination requirements, and shipment release',
      ],
      citations: [
        { href: cpscFuelGuidance, label: 'CPSC labeling and certification guidance' },
        { href: cpscGccGuidance, label: 'CPSC GCC rules and July 2026 eFiling notice' },
        { href: cpscEfilingChinaImportsArticleHref, label: 'Huang Sourcing CPSC eFiling guide' },
      ],
    },
    {
      id: 'inspection-limits',
      title: 'Where does inspection stop and qualified testing begin?',
      paragraphs: [
        'Child-resistant packaging, flame-mitigation, flashback, endurance, chemical-compatibility, pressure, leakage, drop, transport, and other safety or compliance assessments can require controlled substances, trained panels, defined flames, fixtures, conditioning, instruments, sample preparation, repetitions, acceptance criteria, and competent interpretation. Those tasks belong with qualified laboratories, engineers, dangerous-goods specialists, and responsible compliance parties.',
        'An inspector should not fill a container with fuel, introduce flame or sparks, pressurize it, cut open a device, alter a closure, guess a torque, apply an uncontrolled load, or improvise a leak, drop, child-resistance, or flashback test. Any special check needs an approved written method, controlled facility, selected samples, safety plan, acceptance criteria, stop rules, competent operator, and documented disposition.',
        'A passed sampled inspection supports a buyer decision only within its stated scope. It cannot cure missing evidence, validate an unapproved change, prove every unsampled unit, issue a GCC, complete importer eFiling, certify compliance, or promise customs, marketplace, fire-safety, recall, or consumer-use outcomes.',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Classification and exact product route',
      evidence: 'Destination, importer, fuel, flash point basis, fill condition, capacity, consumer or safety-can route, model, manufacturer, factory, closure, spout, device, batch, listing, and approved changes align.',
      buyerDecision: 'Hold ambiguous scope, unsupported safety-can claims, mixed capacities, unclear fill condition, or unexplained configuration changes until qualified classification and correction.',
    },
    {
      riskNode: 'Qualified performance evidence',
      evidence: 'Complete files map the tested container, closure, spout, flame-mitigation component, material, capacity, factory, method, results, photos, dates, deviations, limitations, and current production.',
      buyerDecision: 'Hold missing, partial, mismatched, changed, or unverifiable evidence; route testing and certification decisions to qualified parties.',
    },
    {
      riskNode: 'Finished-goods comparison',
      evidence: 'Sampled production matches approved identity, capacity, closure sequence, spout, seal, vent, visible device, buyer-approved dimensions, workmanship, labels, instructions, and pack-out.',
      buyerDecision: 'Hold affected components, models, batches, and cartons for quantified correction, qualified disposition, repeat inspection, or laboratory testing.',
    },
    {
      riskNode: 'GCC, filing, traceability, and release',
      evidence: 'Product markings, production codes, reports, GCC support, eFiling data, retail packs, quantities, cartons, and correction records stay linked to the importer-controlled lot.',
      buyerDecision: 'Release only named models, capacities, closure and device versions, batches, quantities, and cartons with documented open conditions and importer approval.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'August 13, 2026 CPSC Deli Jerry recall record, including China manufacture, three capacities, non-child-resistant closures, sales period, quantity, remedy, and no reported incidents or injuries',
    'Separate August 13, 2026 CPSC Sunnyside recall used to establish a distinct flame-mitigation decision node without claiming a common product, supplier, factory, defect, or root cause',
    'Current CPSC portable fuel container business guidance and FAQ covering capacity and product definitions, filled-versus-empty routes, applicable cited standards, labeling, limited enforcement discretion through January 12, 2026, and GCC citations',
    'Current CPSC general-use GCC page noting July 8, 2026 electronic certificate filing for most regulated consumer products and listing 16 CFR parts 1460 and 1461',
    'Calumet 2026 company notice used as an independent implementation signal for updated flame-mitigation closures, not as proof about another manufacturer or product',
    'Buyer-side sourcing analysis connecting exact-product documents, component and change control, sampled finished-goods observations, carton traceability, and hold-or-release decisions',
  ],
  whatToSend: [
    'Destination markets, importer details, sales channels, intended fuels and uses, filled or empty condition, flash point information, capacities, consumer-container or safety-can route, model list, manufacturer and factory names, production dates, batches, quantities, and carton map',
    'Purchase order, approved drawings and samples, bill of materials, material and wall specifications, neck and closure geometry, cap, gasket, vent, spout, flame-mitigation component and retention details, tolerances, packaging, and change log',
    'Complete qualified reports, issuer verification details, test-sample photos, exact-model or family-coverage rationale, laboratory or engineering dispositions, GCC support, eFiling data map, and unresolved compliance questions',
    'Product and capacity markings, production-code artwork, warnings, instructions, retail-pack artwork, barcode files, online listing, carton marks, and packing list',
    'Approved sampling plan, defect classes, safe dry-handling and assembly method, measurement instructions, prohibited actions, stop rules, photo list, correction evidence, and decision owner',
    'Balance-payment and pickup deadlines, hold authority, factory contacts, qualified retest plan, dangerous-goods or transport owner where relevant, and exact conditions required for release',
  ],
  redFlags: [
    'The report or GCC support names a different manufacturer, factory, model, capacity, intended fuel, material, closure, spout, seal, vent, flame-mitigation component, or production version',
    'The supplier provides only an ASTM name, UL logo, report cover, marketplace badge, or generic compliance statement',
    'Production changed resin, metal thickness, neck geometry, thread or bayonet profile, gasket, vent, spout, device material, retention method, supplier, tooling, mold, process, subcontractor, or factory without qualified disposition',
    'Components are missing, removable when the approved reference is not, mixed across models, unlabeled, damaged, contaminated, or mapped to the wrong capacity or lot',
    'Sampled units show cracked material, distorted sealing surfaces, damaged threads, loose devices, corrosion, leaks, incorrect warnings, or unreadable production identity',
    'The factory proposes adding fuel, using a flame, pressurizing the can, forcing the closure, or improvising a drop, leak, child-resistance, or flashback test',
    'Failed or corrected units cannot be mapped to affected component lots, models, capacities, quantities, batches, and cartons',
  ],
  scopeLimits: [
    'A routine China-side inspection does not reproduce child-resistant packaging, flame-mitigation, flashback, endurance, chemical, pressure, leakage, drop, transport, or other qualified testing and is not a compliance certification',
    'Sampling does not prove every unit outside the inspected sample or guarantee future sealing, device retention, durability, safe transport, or safe use',
    'Document comparison cannot authenticate every statement without issuer confirmation and qualified review',
    'Visual and buyer-approved dimensional checks cannot validate hidden material properties, chemical compatibility, internal pressure behavior, performance under fire, or every foreseeable misuse',
    'Huang Sourcing does not select legal requirements, approve engineering, issue a GCC, submit importer eFiling, handle dangerous goods, or guarantee customs, marketplace, recall, or consumer outcomes',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China laboratory report',
      note: 'Check the issuer, scope, sample photos, exact model, factory, dates, methods, results, limitations, and source.',
    },
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'Prepare CPSC certificate eFiling',
      note: 'Align certificate data, product identifiers, importer records, applicable citations, testing basis, and the physical shipment.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'China manufacturing QC plan',
      note: 'Build approved references, component and change control, qualified testing, inspections, corrections, and holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Match product identity, capacity, production codes, instructions, warnings, retail packs, carton marks, and quantities.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report',
      note: 'Define photos, sampling, measurements, traceability, defects, affected quantity, decisions, and stated scope limits.',
    },
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC before balance payment',
      note: 'Keep correction and retest leverage before final payment and forwarder pickup.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, testing, packaging, payment, pickup, supplier, and shipment decisions.',
    },
  ] satisfies RelatedLink[],
  sourceNotes: [
    {
      href: cpscDeliRecall,
      label: 'U.S. CPSC - Deli Jerry fuel container recall',
      note: 'Primary public record dated August 13, 2026 describing China-made 20-, 25-, and 30-liter containers, non-child-resistant closures, sales period, quantity, remedy, and incident status.',
    },
    {
      href: cpscSunnysideRecall,
      label: 'U.S. CPSC - Sunnyside kerosene container recall',
      note: 'Separate primary record dated August 13, 2026 covering pre-filled containers without required flame-mitigation devices; used to show a distinct category decision node.',
    },
    {
      href: cpscFuelGuidance,
      label: 'U.S. CPSC - Portable Fuel Container Business Guidance',
      note: 'Current official page covering scope, standards for filled and empty containers, safety cans, limited enforcement discretion through January 12, 2026, labeling, packaging, and GCC citations.',
    },
    {
      href: cpscFuelFaq,
      label: 'U.S. CPSC - Portable Fuel Container FAQ',
      note: 'Official question-and-answer page separating child-resistant packaging, flame-mitigation, labeling, camping-stove-tank scope, and certification responsibilities.',
    },
    {
      href: cpscGccGuidance,
      label: 'U.S. CPSC - Rules Requiring a GCC',
      note: 'Official general-use-product page noting the July 8, 2026 eFiling requirement for most regulated consumer products and listing parts 1460 and 1461.',
    },
    {
      href: calumetPackagingUpdate,
      label: 'Calumet - 2026 flame-mitigation closure update',
      note: 'Independent company implementation notice stating that two- to five-gallon engineered fuel products packaged on or after January 12, 2026 use updated flame-mitigation closures.',
    },
  ] satisfies SourceNote[],
}

export function makePortableFuelContainerChecksChinaArticleMetadata(): Metadata {
  const article = portableFuelContainerChecksChinaArticle

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

export function makePortableFuelContainerChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(portableFuelContainerChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Portable fuel container pre-shipment release checklist',
      itemListElement: portableFuelContainerChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
