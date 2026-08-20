import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  pressureWasherChecksChinaArticleHref,
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

const cpscWorkblessRecall =
  'https://www.cpsc.gov/Recalls/2026/Workbless-Pressure-Washers-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Shock-and-Electrocution-Hazards'
const healthCanadaWorkblessRecall =
  'https://recalls-rappels.canada.ca/en/alert-recall/workbless-electric-pressure-washers-recalled-due-electric-shock-hazard'
const cpscSugiftRecall =
  'https://www.cpsc.gov/Recalls/2026/SUGIFT-Recalls-SUGIFT-Pressure-Washers-Due-to-Serious-Risk-of-Injury-or-Death-From-Shock-and-Electrocution-Hazards'
const cpscCommownerRecall =
  'https://www.cpsc.gov/Recalls/2026/COMMOWNER-Pressure-Washers-Recalled-Due-to-Serious-Risk-of-Injury-or-Death-from-Shock-and-Electrocution-Hazards-Imported-by-AZ-Home-Concept'
const cpscBayotakRecall =
  'https://www.cpsc.gov/Recalls/2026/Pressure-Washers-Recalled-Due-to-Serious-Risk-of-Injury-or-Death-from-Shock-and-Electrocution-Hazards-Imported-by-BAYOTAK-USA'
const cpscSenQiiWarning =
  'https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-SEN-QII-Pressure-Washers-Immediately-Due-to-Serious-Shock-and-Electrocution-Hazards-Risk-of-Serious-Injury-or-Death'
const ul1776Scope =
  'https://www.shopulstandards.com/ProductDetail.aspx?productId=UL1776_3_I_20200923'
const cpscGeneralUseGuidance =
  'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/General-Use-Products-Certification-and-Testing'

export const pressureWasherChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: pressureWasherChecksChinaArticleHref,
  title: 'Pressure Washer Checks Before Shipping from China',
  metaTitle: 'Pressure Washer Checks Before China Shipment',
  metaDescription:
    'Verify GFCI, cord, model, electrical evidence, accessories, labels, and cartons before releasing electric pressure washers from China.',
  publishedDate: 'August 21, 2026',
  publishedDateIso: '2026-08-21T03:32:03+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Pressure Washer Checks Before Shipping from China',
  eyebrow: 'GFCI - cord - electrical evidence - shipment release',
  image: {
    alt: 'Neutral AI illustration of an unbranded electric pressure washer, integral GFCI-style plug, hose, nozzles, inspection tools, checklist, and shipping cartons',
    height: 900,
    src: '/images/pressure-washer-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/pressure-washer-checks-china.webp', width: 1600 },
    {
      height: 1200,
      src: '/images/pressure-washer-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/pressure-washer-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before paying the balance or allowing pickup for electric pressure washers made in China, freeze the destination, exact model, electrical rating, integral ground-fault circuit-interrupter configuration, power-cord length, plug and strain relief, pump and motor version, hose, spray gun, nozzles, labels, instructions, qualified evidence, production lot, and carton map. Hold the lot when those elements do not describe one controlled production version.',
  answerSummary:
    'Use four linked gates: importer-led requirements mapping, qualified evidence for the exact electrical construction, buyer-side comparison of sampled production with approved references, and traceable correction or release. Routine inspection can document identity, the presence and configuration of an integral GFCI, cord and strain-relief construction, accessories, workmanship, markings, quantities, and pack-out. It cannot prove GFCI trip performance, dielectric strength, insulation integrity, ingress protection, pressure endurance, or legal compliance.',
  primaryCta: { label: 'Check Pressure Washers Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side electric pressure washer evidence and quality check before shipment.

Destination, importer, sales channel, and use environment:
Exact models, electrical ratings, plug, integral GFCI, cord length, pump and motor versions:
Manufacturer, factory, production dates, batches, quantities, and carton map:
Applicable requirements, standards, complete reports, listing or certificate references, and filing data:
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
    { href: '#labels-traceability', label: 'Labels and traceability' },
    { href: '#inspection-limits', label: 'Inspection limits' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze destination, importer, exact model, electrical input, plug, integral GFCI, cord length, strain relief, motor, pump, hose, spray gun, nozzle set, instructions, labels, production lot, and carton version',
    'Have the importer and qualified compliance parties map the exact product to applicable electrical, wet-use, pressure-equipment, labeling, certification, and filing requirements before selecting evidence or inspection criteria',
    'Map complete reports and listing or certificate references to the manufacturer, factory, exact model, electrical construction, plug, GFCI, cord, sample photos, dates, methods, results, deviations, and limitations',
    'Control drawings, bill of materials, wire and cord specifications, GFCI part and supplier, plug mold, strain relief, switches, connectors, enclosure, motor, pump, hose, gun, nozzles, labels, instructions, and every approved change',
    'Compare sampled production for model and rating identity, integral GFCI presence and configuration, cord length, plug and strain relief, dry workmanship, accessory set, approved functional checks, labels, and pack-out',
    'Hold missing, bypassed, loose, substituted, damaged, mixed, or untraceable electrical parts; unsupported reports; improvised wet tests; incorrect labels; or cartons that cannot be mapped to a production lot',
    'Route GFCI trip values, leakage current, dielectric strength, insulation, water ingress, pressure endurance, hose burst, and other prescribed performance questions to qualified laboratories or engineers',
    'Release only named models, electrical versions, batches, quantities, accessories, and cartons after documented correction, qualified disposition, and repeat inspection or testing where required',
  ],
  checkGroups: [
    {
      title: 'Controlled product identity',
      items: [
        'Destination, importer, manufacturer, factory, model, electrical rating, plug, integral GFCI, cord length, motor, pump, hose, gun, nozzles, production lot, and approved changes are controlled',
        'PO, drawings, bill of materials, test samples, reports, listing or certificate references, labels, instructions, retail pack, and cartons describe one version',
      ],
    },
    {
      title: 'Qualified evidence',
      items: [
        'Responsible parties select applicable requirements and complete files identify the tested product, electrical construction, safety components, factory, methods, results, photos, dates, deviations, and limits',
        'A standard name, test-report cover, supplier declaration, or certification logo is never accepted without scope and exact-model verification',
      ],
    },
    {
      title: 'Finished goods and pack-out',
      items: [
        'Sampled units match the approved GFCI and cord configuration, plug, strain relief, switches, enclosure, hose, gun, nozzles, dry workmanship, ratings, warnings, instructions, and accessories',
        'Model, serial or lot code, electrical rating, production identity, retail-pack barcode, carton marks, quantities, destination segregation, and packing list remain aligned',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, component lots, carton map, supplier changes, controlled rework, qualified disposition, revised files, and repeat checks remain traceable',
        'Cleared and unresolved models, electrical versions, batches, accessories, and cartons stay separated; final release states every open condition',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why pressure washer release evidence matters now',
      paragraphs: [
        'On August 20, 2026, the U.S. Consumer Product Safety Commission announced the recall of about 2,200 Workbless electric pressure washers sold in the United States. CPSC said models WB0301 and WB0302 lacked an integral ground-fault circuit-interrupter and an adequate-length power cord, creating shock and electrocution hazards. The notice identified a China private labeler and China manufacture and reported no incidents or injuries.',
        'Health Canada published the coordinated recall for another 657 units and identified the China distributor and manufacturer. Its notice states that the cord was too short and could encourage extension-cord use. The two records describe the same recalled models; they are useful for cross-checking product identity and public facts, not two independent defect events.',
        'A broader current pattern supports the buyer decision. CPSC recalled SUGIFT and COMMOWNER pressure washers on August 13, 2026 for the same cited missing-GFCI and short-cord problem. Earlier April actions covered BAYOTAK pressure washers and a SEN-QII warning involving missing integral protection. These records do not prove every China-made pressure washer has the same defect, but they make GFCI, cord, exact-model, and evidence control a current pre-shipment release node.',
      ],
      bullets: [
        'Treat the integral GFCI, supply cord, plug, strain relief, electrical rating, instructions, and exact model as controlled product features rather than loose accessories',
        'Do not infer performance from a similar housing, a test/reset button appearance, a marketplace listing, or a generic report',
        'A visually present GFCI can still require qualified verification of part identity, construction, trip behavior, and product-level coverage',
        'Correction leverage is strongest before final payment and pickup, while component lots, finished batches, and cartons can still be isolated and rechecked',
      ],
      citations: [
        { href: cpscWorkblessRecall, label: 'CPSC Workbless pressure washer recall' },
        { href: healthCanadaWorkblessRecall, label: 'Health Canada coordinated recall' },
        { href: cpscSugiftRecall, label: 'CPSC SUGIFT pressure washer recall' },
        { href: cpscCommownerRecall, label: 'CPSC COMMOWNER pressure washer recall' },
        { href: cpscBayotakRecall, label: 'CPSC BAYOTAK pressure washer recall' },
        { href: cpscSenQiiWarning, label: 'CPSC SEN-QII pressure washer warning' },
      ],
    },
    {
      id: 'freeze-version',
      title: 'Freeze the market, electrical construction, and accessory set first',
      paragraphs: [
        'Start with destination and exact model. Freeze the rated voltage, frequency, current or power, protection class where applicable, plug geometry, integral GFCI part and supplier, power-cord type and total length, conductor specification, strain relief, switch and connectors, motor, pump, enclosure, hose rating, spray gun, lance, nozzle set, detergent attachment, labels, instructions, production factory, and bill-of-material revision.',
        'Do not let a family name hide multiple electrical versions. A supplier may use the same housing for different markets, plugs, cord assemblies, motors, pumps, manuals, or accessories. The PO, controlled drawings, approved sample, qualified evidence, production records, product label, retail listing, and cartons should identify the version actually being shipped.',
        'Have the importer and qualified legal, regulatory, testing, and engineering parties decide which requirements, standards, certifications, markings, instructions, and filing obligations apply. UL Standards & Engagement lists UL 1776 as an active standard covering portable, stationary, and fixed high-pressure cleaning machines, but a scope page or standard name alone does not show that a particular product was evaluated or meets a destination requirement.',
      ],
      bullets: [
        'Record the requirements owner, sources checked, date, applicable editions, model-family rationale, assumptions, and unresolved conditions',
        'Treat a new plug, cord, GFCI, motor, pump, enclosure, hose, gun, nozzle, supplier, tool, process, subcontractor, or factory as a controlled change',
        'Keep U.S., Canada, EU, UK, and other destination versions physically and digitally segregated',
        'Reject model numbers that exist only in a sales listing but cannot be found on the product, retail pack, production record, or controlled cross-reference',
      ],
      citations: [{ href: ul1776Scope, label: 'UL 1776 scope and status' }],
    },
    {
      id: 'document-chain',
      title: 'What should the electrical evidence connect?',
      paragraphs: [
        'Review complete evidence rather than a report cover, standard name, certification mark, or supplier declaration. Record the issuer, client, manufacturer, factory, exact model, sample photos, electrical diagram, critical-components list, plug and cord construction, GFCI identity, motor, pump, enclosure, receipt and test dates, standard edition, methods, results, deviations, limitations, and any model-family coverage.',
        'Confirm report numbers, listings, or certificate references with the claimed issuer or official directory when a verification route exists. Compare the tested sample photographs and identifiers with the approved reference, current bill of materials, incoming-component records, mass-production units, labels, instructions, retail pack, and marketplace data. A real report for a different cord assembly or model does not answer the shipment question.',
        'Control post-test changes. If the supplier changes the GFCI, cord length or type, plug mold, conductor, strain relief, switch, connector, insulation system, motor, pump, hose, enclosure material, tooling, supplier, firmware, or assembly process, hold the affected lot until the responsible party documents whether existing evidence still applies or new evaluation is required.',
      ],
      bullets: [
        'Escalate cropped files, edited results, inconsistent dates, unreadable identifiers, missing sample photos, unclear test methods, unsupported family claims, or evidence issued to another factory',
        'Link critical-component purchase records and incoming checks to the production lots and cartons under review',
        'Separate laboratory conclusions from buyer-side identity, workmanship, quantity, packaging, and traceability observations',
        'Keep failed or conditional results visible; do not replace them with a factory video or an improvised onsite demonstration',
      ],
      citations: [
        { href: ul1776Scope, label: 'UL 1776 product scope' },
        { href: verifyChinaLabTestReportArticleHref, label: 'Huang Sourcing lab report verification guide' },
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled finished goods with approved references while the lot remains accessible. The useful output is a traceable record of model, electrical rating, plug, integral GFCI configuration, cord length, strain relief, switches, connectors, enclosure, hose, gun, lance, nozzles, accessories, labels, instructions, quantities, defects, mismatches, and affected cartons.',
        'Inspect dry, accessible construction without defeating safety devices. Check the molded plug and GFCI housing, button presence and movement, cord marking and measured overall length using the buyer-approved definition, cable entry and strain relief, fasteners, enclosure gaps, sharp edges, cracked or distorted parts, connector fit, hose and gun identity, nozzle count and color map, wheels and handle, rating label, warnings, manual, retail pack, and carton protection.',
        'Any energized or water-flow check needs a buyer-approved written method, a safe controlled station, suitable upstream protection, trained operators, calibrated equipment where required, acceptance criteria, stop rules, and isolation from ordinary packing activity. Stop on leakage, damaged insulation, abnormal sound, odor, heating, sparking, nuisance tripping, failure to stop, unstable pressure, hose or fitting distress, or any unsafe condition; preserve the affected sample for qualified disposition.',
      ],
      bullets: [
        'Use an approved sampling plan, defect classes, measurement list, functional-check method, photo list, prohibited actions, and traceability scheme',
        'Record GFCI and cord observations as configuration evidence, not proof of prescribed trip current, trip time, dielectric performance, or compliance',
        'Quantify missing, substituted, loose, cracked, pinched, miswired-looking, leaking, mislabeled, unreadable, incomplete, or poorly packed units and parts',
        'Do not open sealed electrical assemblies, bypass protection, touch wet energized parts, spray toward power connections, or improvise dielectric, leakage-current, ingress, pressure, or hose-burst testing',
      ],
    },
    {
      id: 'labels-traceability',
      title: 'Connect ratings, instructions, evidence, and cartons',
      paragraphs: [
        'Match the model, electrical rating, manufacturer or responsible-party identity, serial or lot code, warnings, instructions, retail pack, online listing, qualified evidence, packing list, and cartons. Responsible parties should approve the exact content and placement; an inspection should compare the controlled artwork and physical result rather than create missing compliance language at the factory.',
        'For products subject to CPSC-enforced rules, CPSC explains that domestic manufacturers and importers of general-use products certify applicable requirements through a General Certificate of Conformity based on testing or a reasonable testing program. The importer and qualified adviser should decide whether and how that framework applies to the exact pressure washer; an inspector does not issue the certificate or turn a voluntary-standard reference into a legal conclusion.',
        'CPSC also states that beginning July 8, 2026, importers of most regulated consumer products must electronically file certificate data through U.S. Customs and Border Protection. When applicable, keep product identifiers, manufacturer, production date and place, rule citations, test basis, shipment data, and physical labels aligned. A successful filing cannot cure a changed, mismatched, or failed product.',
      ],
      bullets: [
        'Do not let product ratings, report identifiers, certificate or filing data, retail pack, carton labels, and packing list describe different models or parties',
        'Hold unreadable, removable, missing, mixed, or contradictory model, rating, warning, instruction, and lot information until corrected and rechecked',
        'Photograph the plug, GFCI, cord marking and length method, product rating label, serial or lot code, accessories, retail pack, and carton together with sample identity',
        'Keep the importer as decision owner for requirements, certificate content, filing, destination acceptance, and shipment release',
      ],
      citations: [
        { href: cpscGeneralUseGuidance, label: 'CPSC general-use certification guidance' },
        { href: cpscEfilingChinaImportsArticleHref, label: 'Huang Sourcing CPSC eFiling guide' },
      ],
    },
    {
      id: 'inspection-limits',
      title: 'Where does inspection stop and qualified testing begin?',
      paragraphs: [
        'GFCI trip current and time, leakage current, dielectric strength, grounding continuity, insulation systems, water ingress, abnormal operation, temperature rise, pressure endurance, hose burst, spray-gun strength, durability, and other safety or compliance assessments can require defined conditioning, fixtures, calibrated instruments, repetitions, protective facilities, competent operators, and formal interpretation. Those tasks belong with qualified laboratories, engineers, and responsible compliance parties.',
        'An inspector should not bypass the GFCI, alter the cord, open sealed live parts, defeat interlocks, spray an energized electrical connection, ground through a person, raise pressure beyond an approved method, or improvise shock, leakage-current, dielectric, ingress, endurance, or burst tests. A factory demonstration is not evidence merely because the product runs and water exits the nozzle.',
        'A passed sampled inspection supports a buyer decision only within its stated scope. It cannot cure missing evidence, validate an unapproved change, prove every unsampled unit, issue a certification or GCC, complete importer filing, or guarantee customs, marketplace, shock, electrocution, recall, or consumer-use outcomes.',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Exact model and electrical version',
      evidence: 'Destination, importer, manufacturer, factory, model, rating, plug, integral GFCI, cord, strain relief, motor, pump, hose, gun, nozzles, batch, listing, and approved changes align.',
      buyerDecision: 'Hold ambiguous model families, missing integral protection, mixed market versions, unclear cord definitions, or unexplained component and process changes.',
    },
    {
      riskNode: 'Qualified electrical evidence',
      evidence: 'Complete files map the tested product, critical components, GFCI, cord, factory, method, results, photos, dates, deviations, limitations, and current production revision.',
      buyerDecision: 'Hold missing, partial, mismatched, changed, or unverifiable evidence; route performance and certification decisions to qualified parties.',
    },
    {
      riskNode: 'Finished-goods comparison',
      evidence: 'Sampled production matches approved identity, GFCI and cord configuration, plug, strain relief, enclosure, hose, gun, nozzles, dry workmanship, buyer-approved functions, labels, and pack-out.',
      buyerDecision: 'Hold affected components, models, batches, and cartons for quantified correction, qualified disposition, repeat inspection, or laboratory testing.',
    },
    {
      riskNode: 'Traceability and release',
      evidence: 'Ratings, serial or lot codes, reports, certificate or filing support when applicable, retail packs, accessories, quantities, cartons, and correction records stay linked to one importer-controlled lot.',
      buyerDecision: 'Release only named models, electrical versions, batches, quantities, accessories, and cartons with documented open conditions and importer approval.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'August 20, 2026 CPSC Workbless recall record covering China manufacture, two models, missing integral GFCI, inadequate cord length, sales channels and period, quantities, remedy, and incident status',
    'Coordinated August 20, 2026 Health Canada record used to cross-check model identity, the short-cord explanation, Canada quantity, manufacturer, distributor, origin, and incident status',
    'August 13 CPSC SUGIFT and COMMOWNER recalls plus April BAYOTAK recall and SEN-QII warning used as a current pattern signal without claiming a shared factory, product, defect cause, or buyer outcome',
    'UL Standards & Engagement scope page used only to establish the active UL 1776 product category, not to claim coverage or compliance for any model',
    'Current CPSC general-use certification guidance and July 2026 eFiling notice used to explain importer-controlled evidence decisions when applicable',
    'Buyer-side sourcing analysis connecting exact-model documents, critical-component and change control, sampled finished-goods observations, carton traceability, and hold-or-release decisions',
  ],
  whatToSend: [
    'Destination markets, importer details, sales channels, intended household or commercial use, environment, exact models, electrical ratings, plug versions, manufacturer and factory names, production dates, batches, quantities, and carton map',
    'Purchase order, approved drawings and samples, electrical diagram, bill of materials, critical-components list, GFCI part and supplier, cord and conductor specification, measured-length definition, plug, strain relief, switches, connectors, motor, pump, enclosure, hose, gun, lance, nozzles, tolerances, and change log',
    'Complete qualified reports, issuer-verification details, listings or certificate references, test-sample photos, exact-model or family-coverage rationale, laboratory or engineering dispositions, certificate and eFiling support when applicable, and unresolved compliance questions',
    'Product rating and lot-code artwork, warnings, instructions, retail-pack artwork, barcodes, online listings, accessory map, carton marks, and packing list',
    'Approved sampling plan, defect classes, dry comparison method, safe functional-check method if required, measurement instructions, prohibited actions, stop rules, photo list, correction evidence, and decision owner',
    'Balance-payment and pickup deadlines, hold authority, factory contacts, qualified retest plan, affected-component traceability, and exact conditions required for release',
  ],
  redFlags: [
    'The report, listing, or certificate reference names a different manufacturer, factory, model, electrical rating, plug, GFCI, cord, motor, pump, enclosure, hose, or production version',
    'The supplier provides only a standard name, report cover, certification logo, marketplace badge, or generic declaration',
    'Production changed the GFCI, cord length or type, plug, conductor, strain relief, switch, connector, insulation, motor, pump, hose, enclosure, tooling, supplier, process, subcontractor, or factory without qualified disposition',
    'The GFCI is absent, separate when the approved construction requires an integral unit, bypassed, damaged, loosely assembled, unreadable, or different from the controlled part',
    'Sampled units show pinched or exposed conductors, cracked insulation, poor strain relief, loose connections or fasteners, damaged housings, leaks, abnormal operation, incorrect accessories, or mismatched ratings and instructions',
    'The factory proposes an unprotected wet energized test, bypasses a safety device, opens live parts, or improvises shock, dielectric, ingress, pressure, endurance, or hose-burst testing',
    'Failed or corrected units cannot be mapped to affected components, models, electrical versions, batches, quantities, accessories, and cartons',
  ],
  scopeLimits: [
    'A routine China-side inspection does not reproduce GFCI trip, leakage-current, dielectric, grounding, insulation, ingress, abnormal-operation, temperature, pressure-endurance, hose-burst, or other qualified testing and is not a compliance certification',
    'Sampling does not prove every unit outside the inspected sample or guarantee future electrical, sealing, pressure, durability, shipping, or safe-use performance',
    'Document comparison cannot authenticate every statement without issuer confirmation, official-directory checks where available, and qualified review',
    'Visual and buyer-approved functional checks cannot validate hidden wiring, materials, software, component performance, insulation systems, water protection, or every foreseeable misuse',
    'Huang Sourcing does not select legal requirements, approve engineering, issue certifications or a GCC, submit importer eFiling, or guarantee customs, marketplace, recall, or consumer outcomes',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China laboratory report',
      note: 'Check the issuer, scope, sample photos, exact model, factory, dates, methods, results, limitations, and verification route.',
    },
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'Prepare CPSC certificate eFiling',
      note: 'When applicable, align certificate data, product identifiers, importer records, rule citations, test basis, and the physical shipment.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'China manufacturing QC plan',
      note: 'Build approved references, critical-component and change control, qualified testing, inspections, corrections, and holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Match ratings, model and lot identity, warnings, instructions, retail packs, accessory counts, carton marks, and quantities.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report',
      note: 'Define photos, sampling, measurements, functional observations, traceability, defects, affected quantity, decisions, and stated limits.',
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
      href: cpscWorkblessRecall,
      label: 'U.S. CPSC - Workbless pressure washer recall',
      note: 'Primary public record dated August 20, 2026 describing two China-made models, missing integral GFCI, inadequate cord length, sales period, U.S. quantity, remedy, and incident status.',
    },
    {
      href: healthCanadaWorkblessRecall,
      label: 'Health Canada - Workbless pressure washer recall',
      note: 'Coordinated government record identifying the same models, short-cord concern, Canada quantity, distributor, manufacturer, origin, and incident status.',
    },
    {
      href: cpscSugiftRecall,
      label: 'U.S. CPSC - SUGIFT pressure washer recall',
      note: 'Separate August 13, 2026 primary record for a China-made pressure washer lacking an integral GFCI with a short power cord.',
    },
    {
      href: cpscCommownerRecall,
      label: 'U.S. CPSC - COMMOWNER pressure washer recall',
      note: 'Separate August 13, 2026 primary record documenting the same cited hazard pattern for different China-made models and importer.',
    },
    {
      href: cpscBayotakRecall,
      label: 'U.S. CPSC - BAYOTAK pressure washer recall',
      note: 'April 16, 2026 primary record covering a China-made pressure washer recalled because it lacked an integral GFCI.',
    },
    {
      href: cpscSenQiiWarning,
      label: 'U.S. CPSC - SEN-QII pressure washer warning',
      note: 'April 2, 2026 public warning describing a China-made product without integrated immersion protection and the supplier response status.',
    },
    {
      href: ul1776Scope,
      label: 'UL Standards & Engagement - UL 1776 scope',
      note: 'Independent standards-organization page identifying UL 1776 as an active standard for high-pressure cleaning machines; it does not prove any cited model is certified.',
    },
    {
      href: cpscGeneralUseGuidance,
      label: 'U.S. CPSC - General-use product certification guidance',
      note: 'Current official page explaining importer or manufacturer certification duties for general-use products subject to CPSC-enforced requirements and noting July 2026 eFiling.',
    },
  ] satisfies SourceNote[],
}

export function makePressureWasherChecksChinaArticleMetadata(): Metadata {
  const article = pressureWasherChecksChinaArticle

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

export function makePressureWasherChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(pressureWasherChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Electric pressure washer pre-shipment release checklist',
      itemListElement: pressureWasherChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
