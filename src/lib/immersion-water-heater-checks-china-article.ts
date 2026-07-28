import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  immersionWaterHeaterChecksChinaArticleHref,
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

export const immersionWaterHeaterChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: immersionWaterHeaterChecksChinaArticleHref,
  title: 'Immersion Water Heater Checks Before Shipping from China',
  metaTitle: 'Immersion Water Heater Checks from China',
  metaDescription:
    'Check exact models, dry-burn protection evidence, UL claims, plugs, cords, ratings, warnings, cartons, and release decisions before immersion heaters ship from China.',
  publishedDate: 'July 29, 2026',
  publishedDateIso: '2026-07-29T03:30:00+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Immersion Water Heater Checks Before Shipping from China',
  eyebrow: 'Exact model - dry-burn evidence - payment and shipment release',
  image: {
    alt: 'Neutral illustrative inspection of an unplugged generic immersion water heater, cord, plug, caliper, multimeter, checklist, and cartons before China shipment',
    height: 900,
    src: '/images/immersion-water-heater-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/immersion-water-heater-checks-china.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/immersion-water-heater-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/immersion-water-heater-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before releasing balance payment or pickup for portable immersion water heaters in China, freeze the exact production model and match it to qualified electrical and fire-risk evidence, any genuine certification record, approved safety controls, ratings, plug and cord construction, warnings, instructions, and the physical shipment. Hold the affected lot when dry-burn protection, model identity, claims, or correction records do not align.',
  answerSummary:
    'Use three separate gates: qualified design and test review, buyer-side production inspection, and importer or marketplace compliance review. An on-site check can compare visible construction, identifiers, labels, packaging, and buyer-approved functional observations, but it cannot safely reproduce the full abnormal-operation and fire-risk test program or certify that a heater is safe.',
  primaryCta: {
    label: 'Check Heaters Before Shipment',
  },
  secondaryCta: {
    href: '#release-checklist',
    label: 'See Release Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side immersion water heater quality and evidence check before shipment.

Product / model / SKU:
Rated voltage, frequency, and wattage:
Intended container and use:
Factory and production lot:
Approved sample and specifications:
Dry-burn protection and qualified test evidence:
Certification or listing claim and file number:
Plug, cord, labels, instructions, packaging, and carton files:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#model-control', label: 'Exact model and change control' },
    { href: '#dry-burn-evidence', label: 'Dry-burn protection evidence' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#claims-labels', label: 'Certification claims and warnings' },
    { href: '#test-boundary', label: 'Inspection limits' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Freeze the exact model, SKU, wattage, voltage, frequency, heating-element assembly, enclosure, cord, plug, controls, intended container, minimum and maximum immersion marks, factory, date, lot, labels, instructions, and package version',
    'Require a qualified reviewer to define the applicable destination-market rules, voluntary standards, abnormal-operation tests, certification scope, importer duties, and whether any CPSC certificate or eFiling obligation applies',
    'Map every report and certification claim to the manufacturer, factory, exact model, sample photos, ratings, construction, control system, components, issue date, results, limitations, and authorized mark',
    'Confirm the approved dry-burn or over-temperature protection design, component identity, trip logic, reset behavior, change control, production checks, and qualified verification without improvising a fire test during ordinary inspection',
    'Compare sampled goods with approved references for the metal sheath, perforated guard, end caps, joints, seals, insulation, strain relief, cord, plug, control parts, markings, assembly, finish, and visible workmanship',
    'Verify model and lot identity, electrical ratings, immersion limits, supervision and unplug-before-removal instructions, hazard warnings, destination language, package claims, barcode, carton marks, and packing list',
    'Treat dry, partial-immersion, leakage-current, dielectric, grounding, temperature, moisture, endurance, and fire-risk evaluations as qualified laboratory or engineering work; a brief plug-in check is not proof',
    'Release only when mismatches are quantified, affected stock is segregated, redesign or retest decisions are documented, corrections remain traceable by lot and carton, and re-inspection evidence is complete',
  ],
  checkGroups: [
    {
      title: 'Model, ratings, and intended use',
      items: [
        'Exact model and SKU, rated voltage, frequency, input power, plug type, cord specification, dimensions, heating-element and guard construction, intended container, water-level range, duty cycle, supervision conditions, factory, date, lot, and approved changes',
        'Purchase order, approved sample, drawing, bill of materials, test file, certification record, product label, manual, package, master carton, and packing list all identify the same production version',
      ],
    },
    {
      title: 'Protection and qualified evidence',
      items: [
        'Dry-burn or over-temperature protection architecture, sensors, thermal limiting devices, control circuitry, safety-critical components, trip and reset behavior, abnormal-operation test plan, report sample photos, results, and limitations',
        'Certification body, file or control number, manufacturer, factory, product category, standard and edition, exact covered model, ratings, conditions of acceptability, current status, and authorization to use the displayed mark',
      ],
    },
    {
      title: 'Physical product and pack-out',
      items: [
        'Sheath, guard holes, end caps, joints, seals, insulation, cord entry, strain relief, cord, plug, pins, grounding path where designed, controls, fasteners, markings, finish, assembly, and visible condition match approved references',
        'Model and lot marks, ratings, immersion range, warnings, instructions, retail package, barcode, accessories, carton quantity, carton marks, packing list, and destination file are consistent and readable',
      ],
    },
    {
      title: 'Correction and release control',
      items: [
        'Affected quantity, hold tags, carton map, supplier-change record, approved work instruction, replacement components, qualified retest decision, revised labels and instructions, and repeat inspection remain traceable',
        'Cleared and unresolved models and lots are separated; balance-payment and pickup authorization names the exact scope rather than giving a blanket pass to the whole order',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why immersion water heater release evidence matters now',
      paragraphs: [
        'On July 22, 2026, the U.S. Consumer Product Safety Commission announced its first use of Consumer Product Safety Act Section 12 imminent-hazard authority in nearly four decades. Through the Department of Justice, the United States filed a complaint concerning certain China-made Lakkzoom portable immersion water heaters and sought court-ordered relief.',
        'CPSC separately warned consumers to stop using the products. Its public warning identifies about 98,000 units, models including 1500W, 2000W, HT1500W or MJ-R13, and HT2000W, and 235 reports of fires. CBS News independently reported on the filing, the alleged absence of adequate overheating protection, and the federal testing described in the court record.',
        'The complaint contains allegations that would need to be proved if the case proceeds. It does not establish that every China-made immersion heater, supplier, or order has the same design or risk. It does show why a buyer should not infer protection from a listing image, a warning label, a low price, or a certification logo without matching the exact production model to qualified evidence.',
      ],
      bullets: [
        'A generic “dry-burn protection” claim is incomplete without the actual control architecture, safety-critical component identity, qualified test scope, production configuration, and change record',
        'A mark or “listed” claim should resolve to the exact manufacturer, factory, model, ratings, product category, file number, and current certification status',
        'Warnings and instructions do not repair a protection design that fails the qualified abnormal-operation or fire-risk evaluation selected by the responsible parties',
        'Correction leverage is strongest before balance payment and pickup, while segregation, redesign, retesting, re-inspection, replacement, or cancellation remains practical',
      ],
    },
    {
      id: 'model-control',
      title: 'Freeze the exact model before relying on any evidence',
      paragraphs: [
        'Start with one controlled model record. It should connect the product name and SKU to ratings, heating-element construction, perforated guard, end caps, seals, insulation, cord entry, strain relief, cord, plug, controls, thermal devices, intended water container, immersion range, duty cycle, warnings, instructions, factory, date, and lot.',
        'Do not treat wattage as a unique model identifier. Two heaters can share a 1500 W marketing name while using different cords, plugs, control boards, thermal cutoffs, guards, end caps, or factories. Those differences can change report and certification coverage and require a qualified review.',
        'Create an approved change log for every safety-relevant revision. If the supplier changes a thermal limiter, sensor, polymer, seal, cord, plug, control board, element, enclosure, factory, or rating after the tested sample, hold the affected scope until the responsible laboratory, certification body, engineer, and importer decide what verification is required.',
      ],
      bullets: [
        'Use a controlled specification, bill of materials, exploded drawing, wiring diagram, approved sample, model-label artwork, manual, packaging file, and carton map',
        'Photograph safety-critical construction and markings on the approved reference before mass production',
        'Require supplier changes to name the first affected lot and cartons, not just the change date',
        'Reject evidence that shows another manufacturer, factory, model alias, voltage, wattage, plug, cord, protection design, or product photo without a documented relationship',
      ],
    },
    {
      id: 'dry-burn-evidence',
      title: 'What should dry-burn and fire-risk evidence establish?',
      paragraphs: [
        'The federal complaint says CPSC tested 1500W and 2000W samples using a protocol modeled on UL 499, a voluntary standard for electric heating appliances, and observed flames and ignition of nearby combustible material. It also describes additional dry and partial-immersion testing and alternative heaters that used water-detection circuitry or thermal limiting devices to de-energize the element.',
        'Use that record as a risk lesson, not a do-it-yourself test script. The importer and qualified technical parties should define the applicable standard, test edition, abnormal conditions, sample plan, instrumentation, acceptance criteria, certification route, and destination-market obligations. The evidence file should identify the tested sample and show whether the exact production protection system was evaluated.',
        'A component datasheet alone does not prove the finished heater behaves as intended. Review the complete control path, component ratings and placement, tolerance stack, failure modes, reset behavior, wiring, enclosure, moisture exposure, production controls, and the relationship between the certified or tested configuration and mass production.',
      ],
      bullets: [
        'Record the laboratory, accreditation or certification role, report number, issue date, standard and edition, clauses, sample photos, model, ratings, construction, test results, deviations, and limitations',
        'Confirm whether the protection is automatic, independent, self-resetting, manually reset, single-use, software-controlled, or dependent on a sensor position or water level',
        'Map every safety-critical component to approved manufacturer, part number, rating, certification status where relevant, incoming check, and substitution rule',
        'Escalate partial reports, edited screenshots, supplier-written summaries, unexplained model families, missing abnormal-operation results, or evidence that cannot be verified at its claimed source',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side inspection check safely?',
      paragraphs: [
        'A buyer-side inspection can compare sampled production with approved references while the goods are still accessible. The useful output is a traceable record of exact models and lots, visible construction, ratings, plug and cord details, labels, instructions, packages, cartons, quantities, defects, mismatches, and affected scope.',
        'Inspect the metal sheath and guard for dimensions, hole pattern, burrs, deformation, corrosion, loose parts, and finish. Compare end caps, joints, seals, cord entry, strain relief, cord print, plug construction, pins, grounding path where designed, control housing, fasteners, switches, displays, markings, and assembly with the approved sample and drawings.',
        'Use only buyer-approved, low-risk observations and measuring methods. Do not energize a heater outside water, deliberately lower the water level, defeat a safety control, open live equipment, touch the water during operation, or stage a fire-risk condition in an ordinary factory inspection.',
      ],
      bullets: [
        'Photograph model, lot, rating label, plug face, cord print, strain relief, protection markings, warning label, instruction pages, retail package, barcode, carton marks, and packing-list identity',
        'Record the sampled quantity and carton locations so mixed or changed lots are visible',
        'Compare critical dimensions and visible components only against buyer-approved methods and tolerances',
        'If any functional check is authorized, require a written safe method, suitable equipment, qualified personnel, defined stop conditions, and clear separation from laboratory compliance claims',
      ],
    },
    {
      id: 'claims-labels',
      title: 'Verify certification claims, ratings, warnings, and instructions',
      paragraphs: [
        'The complaint alleges that the subject products were advertised as UL listed or certified even though CPSC testing described in the filing found they did not meet the relevant UL 499 fire-risk requirements. Because that statement is an allegation in pending litigation, buyers should verify rather than assume.',
        'For a UL claim, search UL Solutions Product iQ using the file number, manufacturer, model, category, and ratings, then confirm that the production nameplate and construction fall within the current record. For another certification body, use its official directory and confirm the body is recognized for the claimed standard and product category. A logo, supplier certificate PDF, or component mark is not automatically an end-product certification.',
        'Make warnings and instructions product-specific and clear in the destination language. They should identify the intended use, ratings, immersion conditions, supervision, safe connection and disconnection sequence, prohibited uses, cleaning, storage, damaged-product action, and responsible contact without contradicting the design or marketing claims.',
      ],
      bullets: [
        'Do not translate “UL Recognized component” into “UL Listed finished product”',
        'Do not use a certificate covering another voltage, wattage, plug, control system, factory, or model family without documented scope',
        'Do not present a voluntary-standard claim as a government approval or a guarantee of safe performance',
        'Do not let retail packaging promise “safe,” “anti-scalding,” automatic shutoff, continuous unattended use, or other behavior that the approved evidence does not support',
      ],
    },
    {
      id: 'test-boundary',
      title: 'Where does inspection stop and qualified testing begin?',
      paragraphs: [
        'Fire-risk and abnormal-operation evaluations can involve energized equipment, high temperatures, water, moisture, electrical shock risk, ignition indicators, combustible materials, defined test setups, and emergency controls. They belong with the qualified laboratory or engineering team selected by the responsible parties.',
        'The importer should also decide whether the exact product is subject to any CPSC rule, ban, or standard that requires a certificate and eFiling. CPSC explains that eFiling applies to imported regulated consumer products that already require certification; a voluntary UL claim by itself does not create a CPSC certificate.',
        'Huang Sourcing can organize buyer-approved files and compare visible goods with controlled references. It does not design the protection system, select legal requirements, certify a product, issue a laboratory report, authorize a certification mark, submit importer filings, or make a fire-safety guarantee.',
      ],
      bullets: [
        'Do not improvise dry-operation, partial-immersion, fault, leakage-current, dielectric, grounding, temperature, endurance, moisture, or fire tests during an ordinary inspection',
        'Do not infer finished-product protection from one thermal fuse, one sensor, one label, a supplier video, or a brief heating demonstration',
        'Do not use a passed visual inspection as a substitute for the complete qualified evidence and responsible-party release decision',
        'Record unresolved technical, certification, regulatory, or importer decisions as open conditions and hold the affected scope until they are closed',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Exact model and controlled design align',
      whatToConfirm:
        'PO, model, ratings, intended use, element, guard, end caps, seals, cord, plug, controls, thermal devices, factory, lot, approved sample, drawings, labels, manual, package, carton, and packing list identify one version',
      buyerDecision:
        'Continue, correct the controlled file, segregate unknown stock, obtain a technical scope decision, or hold payment and pickup.',
    },
    {
      riskNode: 'Qualified protection evidence covers production',
      whatToConfirm:
        'Responsible parties accept the laboratory or certification body, standard and edition, sample, model, ratings, construction, dry-burn and abnormal-operation scope, results, limitations, component map, current certification record, and changes',
      buyerDecision:
        'Approve, verify source files, submit the actual model, redesign, retest, correct claims, or stop the order.',
    },
    {
      riskNode: 'Physical shipment matches',
      whatToConfirm:
        'Sampled heaters match approved sheath, guard, joints, end caps, seals, cord entry, strain relief, cord, plug, controls, markings, warnings, instructions, packaging, cartons, quantities, and visible workmanship',
      buyerDecision:
        'Release the cleared scope, isolate affected units, quantify the lot, investigate, rework, replace, or re-inspect.',
    },
    {
      riskNode: 'Correction and handoff are controlled',
      whatToConfirm:
        'Affected quantities, carton map, supplier change, approved correction, replacement parts, qualified retest decision, revised files, repeat inspection, certification or filing review, and pickup approval are recorded',
      buyerDecision:
        'Release only cleared lots, hold affected cartons, delay balance payment, delay pickup, or cancel unresolved scope.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official CPSC warning, Section 12 announcement, DOJ press release, and filed complaint checked July 29, 2026 Beijing time; allegations, agency statements, testing descriptions, and procedural status are kept distinct.',
    'Independent CBS News coverage checked as a separate current-attention signal and cross-check of the federal filing.',
    'Current UL Solutions Product iQ guidance used for the certification-record verification step, without treating a directory result as a blanket safety guarantee.',
    'Buyer-approved purchase order, intended use, model specification, bill of materials, drawings, wiring, approved sample, change log, test plan, report set, certification record, labels, instructions, packing list, and release rules.',
    'Physical model and lot identifiers, heater assembly, cord, plug, visible controls, markings, retail packs, cartons, quantities, workmanship, and buyer-approved measurements.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Warnings/2026/CPSC-Urges-Consumers-to-Stop-Using-Lakkzoom-Immersion-Water-Heaters-Immediately-Due-to-Risk-of-Serious-Injury-and-Death-from-Fire-Hazard',
      label: 'CPSC - Lakkzoom immersion water heater warning',
      note: 'Primary July 22, 2026 record identifying the warning, named models, approximate affected units, 235 fire reports, sellers, manufacturer, importer, and China origin.',
    },
    {
      href: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/CPSC-Exercises-Section-12-Imminent-Hazard-Authority-for-First-Time-in-Nearly-40-Years-Warns-Consumers-to-Stop-Using-Lakkzoom-Immersion-Water-Heaters',
      label: 'CPSC - Section 12 imminent-hazard action announcement',
      note: 'Primary notice confirming the July 22 filing, first Commission use of Section 12 authority in nearly four decades, requested court relief, and allegation status.',
    },
    {
      href: 'https://www.justice.gov/opa/media/1453576/dl',
      label: 'U.S. District Court complaint - immersion water heaters',
      note: 'Primary filed complaint, case 1:26-cv-02572, describing the government allegations, models, incident reports, CPSC test protocols and observations, UL 499 context, claimed protection gaps, marketing statements, and requested relief.',
    },
    {
      href: 'https://www.justice.gov/opa/pr/justice-department-files-complaint-against-manufacturer-and-retailer-allegedly-imminently',
      label: 'U.S. Department of Justice - complaint announcement',
      note: 'Primary DOJ summary naming the defendants, describing the requested mandatory recall relief, and stating that the complaint allegations would need to be proved.',
    },
    {
      href: 'https://www.cbsnews.com/news/doj-chinese-companies-immersion-water-heaters/',
      label: 'CBS News - July 2026 immersion heater lawsuit coverage',
      note: 'Independent July 22 reporting cross-checking the filing, company names, product use, alleged protection gap, unit count, incident pattern, and public court record.',
    },
    {
      href: 'https://www.ul.com/software/product-sourcing-and-certifications-database',
      label: 'UL Solutions - Product iQ certification database',
      note: 'Official UL Solutions guidance for searching certification information by file number, product, manufacturer, category, ratings, and other identifiers.',
    },
    {
      href: 'https://www.cpsc.gov/FAQ/eFiling-Frequently-Asked-Questions-FAQ',
      label: 'CPSC - eFiling frequently asked questions',
      note: 'Primary current guidance that eFiling applies to regulated finished consumer products subject to a CPSC rule, ban, or standard and does not make every voluntary-standard claim certifiable.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Purchase order, destination market, intended use, exact model and SKU list, voltage, frequency, wattage, plug type, duty cycle, intended container, immersion range, dimensions, materials, and buyer-approved tolerances',
    'Approved sample record, drawings, bill of materials, wiring diagram, heater and guard construction, end-cap and seal specification, control architecture, thermal-device details, cord and plug files, factory, production dates, lots, and every approved change notice',
    'Applicable-rule and standard review, test plan, full reports and source files, sample photos, laboratory details, certification-body record, file or control number, scope and status, responsible-party review, and an index mapping each file to the exact order',
    'Final product label, ratings, model and lot marks, immersion limits, hazard warnings, instruction manual, retail-pack artwork, barcode, claims, carton marks, packing list, and carton map',
    'Buyer-approved inspection method, sampling plan, measurement tools, critical dimensions, workmanship criteria, safe functional-check limits, defect definitions, stop rules, photo requirements, and balance-payment or pickup decision',
    'Any known heat, fire, shock, dry-burn, partial-immersion, control, cord, plug, seal, insulation, warning, instruction, evidence, certification, packaging, or supplier-change concern and the affected quantity',
  ],
  redFlags: [
    'The supplier will not identify the actual manufacturer, factory, exact model, ratings, protection architecture, safety-critical components, production lot, intended use, or changes behind the finished heater',
    'Report or directory records show another model, voltage, wattage, plug, control, manufacturer, factory, product category, standard edition, sample photo, or certification status',
    'The evidence is cropped, incomplete, edited, outside the claimed laboratory or certification scope, or cannot be confirmed through the claimed official source',
    'A component certificate or mark is presented as finished-product certification, or a logo is used without a matching manufacturer, model, file number, category, rating, and current record',
    'Sampled heaters show mixed controls, thermal devices, cords, plugs, end caps, seals, guards, labels, instructions, packaging, ratings, model names, or lot identity',
    'Cords, plugs, strain reliefs, joints, end caps, guards, fasteners, insulation, markings, or visible assembly are damaged, loose, inconsistent, poorly finished, or different from approved references',
    'Warnings and instructions are missing, removable, unreadable, contradictory, mistranslated, or inconsistent with marketing, intended use, immersion limits, supervision, or connection sequence',
    'The correction plan lacks affected quantity, segregation, qualified redesign or retest decision, approved work instruction, component traceability, revised files, carton map, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible products, identifiers, controlled files, buyer-approved dimensions, cords, plugs, visible control parts, labels, instructions, retail packs, cartons, quantities, and observations with the agreed reference set in China',
    'Huang Sourcing does not design heaters, select legal requirements, authenticate every document, certify safety or compliance, issue a laboratory or certification record, authorize a mark, submit importer eFiling, or provide legal or fire-engineering advice',
    'Visual inspection, ordinary measurements, or a limited buyer-approved functional observation cannot prove dry-burn, partial-immersion, leakage-current, dielectric, grounding, temperature, moisture, endurance, fault, or fire-risk performance',
    'Sampling cannot guarantee every unit outside the agreed scope, and mixed lots, sealed cartons, weak traceability, inaccessible factories, unsafe setups, or missing approved references reduce confidence',
    'The importer, manufacturer, qualified laboratory, certification body, engineer, compliance adviser, broker, marketplace, retailer, authorities, and end user remain responsible for their product-specific decisions',
    'A passed pre-shipment inspection does not guarantee CPSC compliance, certification validity, eFiling acceptance, customs release, marketplace approval, recall avoidance, safe installation, correct supervision, or safe performance after shipment',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'How to verify a China laboratory report',
      note: 'Check report identity, laboratory scope, sample photos, exact-model coverage, dates, source confirmation, results, and production mismatches.',
    },
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling for China imports',
      note: 'Decide whether the exact product is regulated and coordinate any certificate data, product identifiers, importer responsibility, broker handoff, and shipment records.',
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
      note: 'Keep correction and payment leverage until the cleared and unresolved shipment scope is visible.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, report, testing, packaging, payment, pickup, and supplier decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
}

export function makeImmersionWaterHeaterChecksChinaArticleMetadata(): Metadata {
  const article = immersionWaterHeaterChecksChinaArticle

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

export function makeImmersionWaterHeaterChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(immersionWaterHeaterChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Immersion water heater pre-shipment release checklist',
      itemListElement: immersionWaterHeaterChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
