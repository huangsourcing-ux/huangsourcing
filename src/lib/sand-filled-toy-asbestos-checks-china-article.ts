import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  euToySafetyRegulationChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  sandFilledToyAsbestosChecksChinaArticleHref,
  verifyChinaLabTestReportArticleHref,
} from '@/lib/site-links'

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
}

type CheckGroup = {
  items: string[]
  title: string
}

type DecisionRow = {
  buyerDecision: string
  riskNode: string
  whatToConfirm: string
}

type RelatedLink = {
  href: string
  label: string
  note: string
}

type SourceNote = {
  href: string
  label: string
  note: string
}

export const sandFilledToyAsbestosChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: sandFilledToyAsbestosChecksChinaArticleHref,
  title: 'Sand-Filled Toy Asbestos Checks Before Shipping from China',
  metaTitle: 'Sand-Filled Toy Asbestos Checks from China',
  metaDescription:
    'Check sand-filled toys for exact-lot material traceability, asbestos test evidence, intact shells, labels, cartons, and hold-or-release decisions before China shipment.',
  publishedDate: 'July 30, 2026',
  publishedDateIso: '2026-07-30T03:40:00+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Sand-Filled Toy Asbestos Checks Before Shipping from China',
  eyebrow: 'Exact filling lot - laboratory evidence - payment and shipment release',
  image: {
    alt: 'Neutral illustrative inspection bench with intact generic squeeze-toy samples, sealed mineral samples, scale, caliper, checklist, and unbranded cartons before China shipment',
    height: 900,
    src: '/images/sand-filled-toy-asbestos-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/sand-filled-toy-asbestos-checks-china.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/sand-filled-toy-asbestos-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/sand-filled-toy-asbestos-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before releasing balance payment or pickup for sand-filled squeeze, sensory, stress, craft, or activity toys in China, freeze the exact filling material, supplier, production lot, toy SKU, factory, destination, and test plan. Hold the affected scope when representative asbestos evidence, sample custody, material traceability, shell integrity, labels, or correction records do not align.',
  answerSummary:
    'Use three separate gates: a competent destination-market compliance review, representative laboratory testing of the actual filling, and buyer-side inspection of the finished shipment. A visual inspection can verify identity, intact construction, lot marks, labels, packaging, quantities, and sample custody, but it cannot see asbestos fibres or certify that the filling is asbestos-free.',
  primaryCta: {
    label: 'Check Toys Before Shipment',
  },
  secondaryCta: {
    href: '#release-checklist',
    label: 'See Release Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side sand-filled toy evidence and quality check before shipment.

Toy type / SKU / age grade:
Destination market:
Manufacturer and factory:
Filling material supplier and lot:
Finished production lot and carton map:
Approved sample and specification:
Sampling plan, chain of custody, and laboratory report:
Labels, warnings, packaging, and carton files:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#material-traceability', label: 'Filling traceability' },
    { href: '#testing-evidence', label: 'Testing evidence' },
    { href: '#sample-custody', label: 'Sampling and custody' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#inspection-boundary', label: 'Inspection limits' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze every toy SKU, style, color, size, age grade, outer shell, filling composition, filling supplier, factory, production date, finished lot, packaging version, carton range, and destination market',
    'Require the importer or qualified adviser to define the applicable toy-safety, chemical, asbestos, certification, labeling, traceability, customs, marketplace, and corrective-action duties',
    'Map the bill of materials and purchase records from the named filling producer and batch through incoming material, work-in-process, finished toy lot, retail pack, and master carton',
    'Use a competent laboratory and a written representative sampling plan; confirm sample collection, seals, custody, preparation, method, detection capability, results, limitations, and exact tested lot',
    'Do not rely on supplier declarations, a generic mineral certificate, XRD alone after a negative result, an unrelated report, or a report for another filling source, lot, product, or destination',
    'Inspect sampled finished toys for shell material, seams, closures, plugs, leakage, loose particles, dimensions, weight, workmanship, model and lot identity, labels, warnings, packages, barcodes, and cartons',
    'Segregate any leaking, mixed, changed, untraceable, untested, failed, or corrected scope and document the affected quantities and cartons before balance payment or pickup',
    'Release only after the importer and qualified parties close the technical and regulatory conditions and the cleared laboratory lot matches the physical shipment record',
  ],
  checkGroups: [
    {
      title: 'Product and filling identity',
      items: [
        'Exact toy SKU, style, age grade, intended use, outer-shell material, seam or closure design, filling description, additives, filling producer, supplier, batch, net filling weight, factory, production date, finished lot, destination, and approved changes',
        'Purchase order, bill of materials, incoming receipt, supplier invoice, batch certificate, sample photos, test request, report, product label, retail pack, carton marks, and packing list identify the same controlled scope',
      ],
    },
    {
      title: 'Sampling and laboratory evidence',
      items: [
        'Written sampling rationale, number and location of increments, composite or individual samples, collector, date, photos, seals, unique sample IDs, custody transfers, laboratory receipt, preparation, analytical method, result, detection capability, and limitations',
        'The laboratory is competent for the selected work and the responsible technical party has assessed whether SEM-EDX, TEM, a tiered approach, or another destination-specific method is appropriate for the product and claimed decision',
      ],
    },
    {
      title: 'Finished toy and pack-out',
      items: [
        'Shell material, dimensions, weight, seams, welds, closures, plugs, surface condition, deformation, leakage, loose matter, odors, accessories, visible workmanship, and approved buyer checks match the controlled reference',
        'SKU, style, lot, manufacturer or responsible-party details, age grade, warnings, instructions, traceability marks, retail package, barcode, carton quantity, carton marks, and packing list remain readable and consistent',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Changed filling, failed or inconclusive evidence, damaged shells, mixed lots, missing traceability, correction instructions, retest scope, rework, replacement, destruction, withdrawal, and notification decisions are recorded by affected lot and carton',
        'Cleared and unresolved goods remain physically and administratively separated; the final release names the exact quantities, lots, cartons, evidence versions, open conditions, and responsible decision owner',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why sand-filled toy evidence matters now',
      paragraphs: [
        'On July 20, 2026, the UK Office for Product Safety and Standards published business guidance stating that businesses placing sand-containing toys on the UK market are responsible for ensuring the products are safe and free from asbestos. The guidance says products should not be supplied when that assurance cannot be demonstrated.',
        'The next day, OPSS listed a group of recalls covering multiple sand-filled and squishy toy products, including Wizz Toys Jumbo Mr Splat Stretch Men. Its product notice identifies China as the country of origin and says the sand may be contaminated with a small quantity of asbestos. In May, the U.S. Consumer Product Safety Commission recalled China-made Orb Funkee squeeze toys because the sand may contain fibrous tremolite.',
        'These records do not prove that every sand-filled toy, mineral source, China supplier, or order contains asbestos. They do show why a buyer cannot infer filling composition from an intact shell, a product photo, a supplier assurance, or a report that is not linked to the actual material and finished production lot.',
      ],
      bullets: [
        'A negative or passing report is useful only within its sample, method, detection capability, laboratory scope, custody, filling source, batch, product, and time limits',
        'An intact shell reduces the chance of filling release but does not establish what the filling contains',
        'A bill of materials without batch records does not connect the named material to the goods in the cartons',
        'Correction leverage is strongest before balance payment and pickup, while sampling, testing, segregation, replacement, relabeling, re-inspection, or cancellation remains practical',
      ],
    },
    {
      id: 'material-traceability',
      title: 'Trace the filling from mineral source to finished carton',
      paragraphs: [
        'Build one controlled material map before testing. Name the filling producer, mine or source information when available and relevant, processor, trader, factory, commercial material name, composition, additives, supplier batch, purchase order, delivery date, incoming quantity, storage location, issue-to-production record, finished production date, toy lots, and carton range.',
        'Do not let one marketing name hide multiple sources. “Sand,” “quartz sand,” “play sand,” “magic sand,” or “mineral filling” may describe different suppliers, particle sizes, blends, additives, processing histories, and lots. A material substitution or trader change should trigger a documented review before the affected goods are released.',
        'Reconcile mass balance where practical: incoming quantity, material issued, scrap, retained samples, finished units, filling weight per unit, and remaining stock. The purpose is not accounting precision; it is to detect unexplained mixing, substitution, or a report that covers only one convenient bag while the order used several batches.',
      ],
      bullets: [
        'Require incoming containers to carry supplier, material, batch, date, quantity, and receipt identity that survives repacking',
        'Photograph sealed incoming material and labels before sampling, then retain unique sample IDs and tamper-evident seals',
        'Record the first and last finished lot and carton that used each filling batch',
        'Hold mixed or undocumented material until the responsible parties define a representative sampling and disposition plan',
      ],
    },
    {
      id: 'testing-evidence',
      title: 'What should asbestos testing evidence establish?',
      paragraphs: [
        'OPSS explains that X-ray diffraction can be useful as an initial screen but is generally not reliable at lower asbestos levels, and polarized light microscopy can also miss low concentrations or very fine fibres. Its May 2026 technical note recommends SEM coupled with EDX or TEM for consumer products containing sand because these methods can identify lower concentrations and fine fibres more reliably.',
        'Method selection remains a qualified technical decision. The laboratory or responsible specialist should define sample preparation, subsampling, number of images or grids, identification criteria, controls, reporting language, detection capability, uncertainty, and whether the result supports the importer’s intended market decision. Do not convert a public guidance summary into a do-it-yourself protocol.',
        'Read the complete report. Match the client, sample description, photos, seals, IDs, receipt condition, dates, method, laboratory location, accreditation or competence scope where applicable, result, qualifiers, attachments, authorized signatory, and report-verification source to the exact filling and production lot.',
      ],
      bullets: [
        'Reject cropped certificates, edited screenshots, supplier-written summaries, missing sample photos, unexplained model families, or results that cannot be confirmed with the claimed laboratory',
        'Treat “not detected” as a method- and sample-bounded result, not proof that every unit or future lot is asbestos-free',
        'Do not use a positive XRD or PLM finding as something to average away with other negative samples; escalate immediately to the responsible parties',
        'When a supplier, filling source, batch, formulation, process, or factory changes, obtain a qualified decision on renewed sampling and testing',
      ],
    },
    {
      id: 'sample-custody',
      title: 'Make the tested sample representative and traceable',
      paragraphs: [
        'A sophisticated method cannot repair an unrepresentative or substituted sample. The sampling plan should identify the population, filling batches, finished lots, cartons, number and location of increments, collector, tools, contamination controls, sample mass, compositing rules, retained samples, seals, photos, and chain of custody.',
        'Decide whether material should be collected from sealed incoming bags, finished toys, retained production samples, or a documented combination. Sampling a supplier-prepared jar can be convenient, but it does not independently connect the result to mass production unless custody and lot mapping are controlled.',
        'If finished toys must be opened, use a competent party and a controlled area appropriate to the suspected hazard. Ordinary inspectors should not cut open or shake potentially contaminated toys on a general factory bench. The responsible laboratory or health-and-safety specialist should define handling, packaging, transport, cleanup, and disposal.',
      ],
      bullets: [
        'Use unique sample IDs that connect photographs, tamper seals, forms, courier records, laboratory receipt, report, retained samples, and the corresponding production lot',
        'Prevent the factory from selecting only visibly clean, specially prepared, or unrelated samples',
        'Record damaged seals, short sample mass, unexpected material differences, custody gaps, or receipt-condition concerns as report limitations',
        'Keep a controlled record of who authorized destructive sampling and how the opened goods and residual material were handled',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side inspection check safely?',
      paragraphs: [
        'Buyer-side inspection can compare sampled finished goods with approved references while the cartons remain accessible. Useful evidence includes exact SKU and lot identity, shell material and dimensions, unit weight, seams, welds, closures, plugs, leakage, loose particles, surface condition, workmanship, labels, warnings, retail packs, barcodes, carton marks, quantities, and material-lot documents.',
        'Set inspection methods before the visit. Define safe compression or seam observations, weight tolerance, leakage criteria, defect classes, sample size, stop rules, photo views, carton selection, and what must be escalated. Do not squeeze, pierce, cut, burn, abrade, empty, or shake a suspect product in a way that could release filling.',
        'When inspection finds a leaking toy, loose filling, a different weight, mixed shell construction, missing lot mark, changed package, or a mismatch with the tested sample, isolate the affected scope. Do not brush or blow loose material, continue destructive checks, or treat the issue as an ordinary cosmetic defect.',
      ],
      bullets: [
        'Photograph the unopened toy, model and lot marks, shell seams and closures, retail pack, warnings, barcode, master-carton marks, filling container labels, seals, and packing-list identity',
        'Record sampled carton numbers and unit locations so mixed or changed lots remain visible',
        'Compare only with buyer-approved methods and references; identify every check that was unavailable or unsafe',
        'Escalate leakage or suspected contamination under the responsible health-and-safety and laboratory plan',
      ],
    },
    {
      id: 'inspection-boundary',
      title: 'Where does inspection stop and qualified work begin?',
      paragraphs: [
        'Asbestos identification, representative mineral sampling, destructive product opening, exposure control, contaminated-material handling, laboratory analysis, regulatory classification, legal compliance, recall decisions, and disposal belong with qualified parties selected by the responsible business.',
        'For U.S.-bound children’s products, the importer should separately determine applicable CPSC rules, third-party testing, Children’s Product Certificate, tracking-label, and eFiling duties. For UK- or EU-bound products, the responsible economic operator should establish the applicable toy, chemical, product-safety, conformity, traceability, and notification obligations.',
        'Huang Sourcing can organize buyer-approved records and compare visible goods with controlled references in China. It does not certify that a product is asbestos-free, select the legal requirements or analytical method, collect hazardous samples without an agreed specialist plan, issue a laboratory report, submit importer filings, or guarantee customs, marketplace, or regulator acceptance.',
      ],
      bullets: [
        'Do not improvise microscopy, mineral identification, destructive sample preparation, dust generation, cleanup, or waste disposal during an ordinary inspection',
        'Do not infer laboratory performance from a report logo, accreditation symbol, equipment list, supplier video, or one negative line on a certificate',
        'Do not use a passed visual inspection as a substitute for competent testing and the responsible-party release decision',
        'Record every unresolved technical, health-and-safety, regulatory, importer, laboratory, and marketplace condition and hold the affected scope until it is closed',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Filling source or batch is not traceable',
      whatToConfirm:
        'Supplier, producer, batch, incoming labels, purchase and issue records, finished lots, carton range, quantities, and change history.',
      buyerDecision:
        'Hold the affected scope. Reconstruct traceability or define qualified representative sampling before relying on any report.',
    },
    {
      riskNode: 'Report covers the wrong material or lot',
      whatToConfirm:
        'Client, sample IDs and photos, filling description, seals, custody, laboratory receipt, method, dates, result, and mapped production scope.',
      buyerDecision:
        'Reject the report for release. Collect representative samples under controlled custody and retest as directed.',
    },
    {
      riskNode: 'Method or sampling is inadequate',
      whatToConfirm:
        'Destination requirement, responsible specialist review, method capability, subsampling, image or grid count, sample population, and limitations.',
      buyerDecision:
        'Hold. Obtain a competent written decision on additional sampling or analysis before payment or pickup.',
    },
    {
      riskNode: 'Toy leaks or differs from the tested reference',
      whatToConfirm:
        'Affected SKU, lot, cartons, quantity, shell and closure construction, filling weight, loose material, handling plan, and material source.',
      buyerDecision:
        'Stop the affected inspection activity, segregate safely, notify the responsible parties, and define specialist handling and disposition.',
    },
    {
      riskNode: 'Correction changes filling or construction',
      whatToConfirm:
        'Approved work instruction, replacement material and batch, first affected unit, carton map, rework count, retest decision, labels, and re-inspection.',
      buyerDecision:
        'Keep payment and pickup on hold until correction, renewed evidence, and repeat inspection close the exact scope.',
    },
    {
      riskNode: 'All release gates align',
      whatToConfirm:
        'Competent review, representative report, full traceability, matching production lot, intact sampled goods, correct labels and packs, and closed deviations.',
      buyerDecision:
        'Document the exact cleared lots, cartons, quantities, evidence versions, limits, and responsible release owner before authorization.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'UK OPSS assurance guidance, testing guidance, consumer-product asbestos guidance, and July 2026 product recalls checked July 30, 2026 Beijing time.',
    'U.S. CPSC Orb Funkee recall checked as a separate primary record for China-made sand-filled squeeze toys and lot-specific public case details.',
    'Independent reporting checked as a current-attention cross-check without using it to replace the official recall record.',
    'Buyer-side analysis separates material traceability, representative laboratory evidence, physical shipment inspection, importer duties, correction control, and release ownership.',
    'No cited public case image was copied, no recalled product was recreated, and the hero is a neutral illustration rather than documentary evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://www.gov.uk/guidance/assuring-the-absence-of-asbestos-in-sand-containing-toys',
      label: 'UK OPSS - assuring the absence of asbestos in sand-containing toys',
      note: 'Primary July 20, 2026 business guidance stating that products should not be supplied when safety and absence of asbestos cannot be assured.',
    },
    {
      href: 'https://www.gov.uk/guidance/testing-for-asbestos-in-sand',
      label: 'UK OPSS - testing for asbestos in sand',
      note: 'Primary technical note comparing XRD, PLM, SEM-EDX, and TEM and emphasizing method sensitivity, representative sampling, and sufficient analysis.',
    },
    {
      href: 'https://www.gov.uk/product-safety-alerts-reports-recalls/product-recall-wizz-toys-jumbo-mr-splat-stretch-men-2607-0181',
      label: 'UK OPSS - Wizz Toys Jumbo Mr Splat recall',
      note: 'Primary July 21, 2026 notice identifying a China-origin sand-filled toy, possible asbestos contamination, withdrawal, recall, and safe-handling advice.',
    },
    {
      href: 'https://www.gov.uk/guidance/asbestos-in-consumer-products',
      label: 'UK OPSS - asbestos in consumer products',
      note: 'Primary current guidance on recalled consumer products, exposure context, business action, and why intact products do not remove the need for recall when asbestos is identified.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Orb-Funkee-Squeeze-Toys-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Asbestos-Exposure-Imported-by-The-Orb-Factory',
      label: 'U.S. CPSC - Orb Funkee squeeze toy recall',
      note: 'Primary May 21, 2026 record identifying China manufacture, two models, date code, sales period, retail channels, fibrous tremolite concern, and consumer action.',
    },
    {
      href: 'https://www.independent.co.uk/bulletin/lifestyle/walmart-toys-recall-orb-squeeze-asbestos-b2981539.html',
      label: 'The Independent - Orb Funkee recall coverage',
      note: 'Independent May 21, 2026 coverage cross-checking the scale, named models, date code, retailers, hazard, and recall action.',
    },
    {
      href: 'https://english.nvwa.nl/documents/organisation/buro/publications/advice-from-buro-on-the-health-risks-of-asbestos-in-play-sand',
      label: 'Netherlands NVWA BuRO - advice on asbestos in play sand',
      note: 'Official 2026 risk-assessment context covering China-origin play-sand incidents and distinguishing sand-filled squeeze toys from other sand product types.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Purchase order, destination, intended use, toy category, age grade, exact SKU and style list, shell and closure design, dimensions, unit and filling weight, materials, additives, warnings, packaging, and buyer-approved tolerances',
    'Manufacturer, factory, filling producer and supplier identities, bill of materials, incoming material labels, supplier batch documents, delivery and issue records, storage map, production dates, finished lots, quantities, and carton map',
    'Applicable-rule review, written sampling plan, collector authorization, sample IDs, photographs, seal numbers, custody form, courier record, laboratory receipt, full report, verification contact, and qualified interpretation',
    'Approved sample, drawings, seam and closure specifications, shell and filling change log, retail-pack artwork, barcode file, traceability marks, warning and instruction text, master-carton marks, and packing list',
    'Buyer-approved inspection plan, sampling level, weight and dimension tolerances, safe handling limits, defect definitions, stop rules, leakage response, photo requirements, and payment or pickup decision',
    'Any known filling-source, contamination, leakage, test, traceability, mixed-lot, supplier-change, shell, seam, closure, warning, package, customer, marketplace, or authority concern and the affected scope',
  ],
  redFlags: [
    'The supplier will not identify the actual manufacturer, factory, filling producer, material supplier, composition, batch, production lot, or changes behind the finished toy',
    'The report sample was prepared or selected by the factory without controlled photos, seals, sample IDs, representative rationale, or chain of custody',
    'The report shows another filling, source, batch, SKU, factory, date, destination, method, sample photo, or client without a documented relationship to the order',
    'Only a supplier declaration, safety-data sheet, generic certificate of analysis, edited screenshot, or negative XRD screen is offered as proof for the complete shipment',
    'Sampled toys or cartons show mixed weights, fillings, shells, seams, closures, labels, packages, lot marks, odors, loose matter, leakage, or identity',
    'The factory proposes cutting open suspect toys in an uncontrolled area or brushing, blowing, sweeping, vacuuming, or discarding loose filling without a specialist plan',
    'Warnings, instructions, responsible-party details, traceability marks, barcodes, or carton identities are missing, removable, unreadable, contradictory, or inconsistent with approved files',
    'The correction plan lacks affected quantity, segregation, replacement-material batch, specialist handling, retest decision, approved work instruction, revised carton map, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible products, identifiers, controlled files, buyer-approved dimensions and weights, shell construction, seams, closures, labels, retail packs, cartons, quantities, and observations with the agreed reference set in China',
    'Huang Sourcing does not identify asbestos by sight, select legal requirements or test methods, certify absence of asbestos, issue a laboratory report, provide occupational-hygiene or medical advice, submit importer filings, or make recall decisions',
    'Visual inspection, ordinary measurements, supplier declarations, and an intact shell cannot prove the composition or asbestos status of internal filling',
    'Sampling cannot guarantee every unit outside the agreed population, and mixed lots, sealed stock, weak traceability, unsafe access, supplier-selected samples, or missing approved references reduce confidence',
    'The importer, manufacturer, laboratory, sampling specialist, compliance adviser, marketplace, retailer, customs broker, authorities, and end user remain responsible for their product-specific decisions',
    'A passed pre-shipment inspection does not guarantee test validity, legal compliance, certification, customs or eFiling acceptance, marketplace approval, recall avoidance, or safe performance after shipment',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'How to verify a China laboratory report',
      note: 'Check laboratory identity, scope, sample photos, exact-lot coverage, dates, method, source confirmation, results, and production mismatches.',
    },
    {
      href: euToySafetyRegulationChinaArticleHref,
      label: 'EU Toy Safety Regulation supplier checklist',
      note: 'Map toy identity, materials, risk analysis, testing, declarations, warnings, traceability, and responsible economic-operator records.',
    },
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling for China imports',
      note: 'Coordinate regulated-product certificate data, identifiers, importer responsibility, broker handoff, and shipment records for the U.S.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control plan for China manufacturing',
      note: 'Build approved references, material controls, qualified testing, inspections, corrections, and payment holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Match warnings, responsible-party details, model and lot marks, barcodes, retail packs, carton marks, quantities, and correction evidence.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define photos, tools, measurements, lot traceability, defects, affected quantities, decisions, and scope limits the report should show.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Inspection before balance payment',
      note: 'Keep correction and payment leverage until cleared and unresolved shipment scope is visible.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related testing, inspection, packaging, payment, pickup, and supplier decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
}

export function makeSandFilledToyAsbestosChecksChinaArticleMetadata(): Metadata {
  const article = sandFilledToyAsbestosChecksChinaArticle

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: article.href,
    },
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

export function makeSandFilledToyAsbestosChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(sandFilledToyAsbestosChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Sand-filled toy pre-shipment release checklist',
      itemListElement: sandFilledToyAsbestosChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
