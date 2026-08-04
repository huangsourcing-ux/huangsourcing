import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  tabletopFirePitChecksChinaArticleHref,
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

export const tabletopFirePitChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: tabletopFirePitChecksChinaArticleHref,
  title: 'Tabletop Fire Pit Checks Before Shipping from China',
  metaTitle: 'Tabletop Fire Pit Checks Before China Shipment',
  metaDescription:
    'Check tabletop fire pits before China shipment: fuel design, exact-model reports, warnings, instructions, construction, lots, cartons, and release.',
  publishedDate: 'August 5, 2026',
  publishedDateIso: '2026-08-05T03:31:36+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Tabletop Fire Pit Checks Before Shipping from China',
  eyebrow: 'Fuel-system evidence - finished-lot checks - payment and pickup release',
  image: {
    alt: 'Neutral AI illustration of a generic unlit tabletop fire pit, empty reservoir, caliper, blank checklist, gloves, label sheet, and export cartons on an inspection bench',
    height: 900,
    src: '/images/tabletop-fire-pit-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/tabletop-fire-pit-checks-china.webp', width: 1600 },
    {
      height: 1200,
      src: '/images/tabletop-fire-pit-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/tabletop-fire-pit-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before releasing balance payment or forwarder pickup for tabletop fire pits made in China, freeze the destination, intended use, fuel system, refill method, exact model, factory, materials, qualified test scope, warnings, instructions, production lot, and cartons. Hold any shipment scope whose physical design or identity does not match the approved evidence file.',
  answerSummary:
    'Use three separate gates: qualified product-scope and destination review, qualified testing for the exact fuel-burning device, and buyer-side comparison of sampled finished goods with approved construction and pack-out. A China-side inspection can document identity, dimensions, assembly, reservoir condition, visible leakage or damage, stability against a buyer-approved reference, warnings, instructions, quantities, and lot mismatches. It cannot safely improvise a live-fire test, certify ASTM conformity, decide legal applicability, or guarantee that flame jetting cannot occur.',
  primaryCta: { label: 'Check Fire Pits Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side tabletop fire pit evidence and quality check before shipment.

Destination market and intended indoor/outdoor use:
Exact model/SKU, factory, production lot, and quantity:
Fuel type, reservoir, refill method, snuffer, and accessories:
Approved sample, drawings, bill of materials, and dimensions:
Applicable-standard review, complete laboratory reports, and qualified disposition:
Warnings, instructions, labels, retail packaging, and carton files:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#product-scope', label: 'Product and fuel scope' },
    { href: '#qualified-evidence', label: 'Reports and test scope' },
    { href: '#physical-checks', label: 'Finished-goods checks' },
    { href: '#change-control', label: 'Changes and traceability' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Document destination, intended indoor or outdoor use, product category, exact model/SKU, fuel type, open or closed reservoir design, refill method, accessories, factory, production dates, lot, listing, instructions, and package claims',
    'Require the importer and qualified compliance parties to identify the current applicable rules and standards for the exact product and market before approving test scope or production',
    'Match complete laboratory reports, sample photos, methods, results, limitations, model, reservoir, fuel system, snuffer, materials, factory, dates, and authorized changes to the order',
    'Compare sampled mass production with the approved sample, drawings, bill of materials, and tolerances for geometry, reservoir, seams or joints, feet, stability reference, shields, accessories, workmanship, and product identity',
    'Check permanent product markings, fuel and refill warnings, cooling and extinguishing instructions, intended-use limits, responsible-party details, model, lot, retail pack, quantities, and carton marks',
    'Keep flame-jetting, pool-fire, thermal, spill, stability, combustion, emissions, and regulatory conclusions with qualified laboratories and responsible parties; ordinary onsite observations are not substitute test results',
    'Hold open-reservoir mismatches, supplier substitutions, missing report pages, unapproved fuel claims, damaged reservoirs, mixed warning sets, unsupported indoor-use claims, untraceable lots, or unresolved scope questions',
    'Release only named models, fuel-system versions, production dates, lots, quantities, and cartons after documented correction, qualified disposition, and repeat inspection where needed',
  ],
  checkGroups: [
    {
      title: 'Scope, destination, and exact model',
      items: [
        'Destination, intended use, product category, fuel, reservoir and refill design, accessories, model, factory, production date, lot, and responsible compliance owner are controlled',
        'Purchase order, drawings, approved sample, test samples, reports, warnings, instructions, listing, retail pack, carton, and packing list describe the same finished device',
      ],
    },
    {
      title: 'Qualified safety evidence',
      items: [
        'Current applicable standard, laboratory, report number, methods, sample photos, exact construction, fuel scope, results, limits, dates, and destination review align',
        'Qualified evidence covers the shipped product rather than another reservoir, burner insert, body material, snuffer, accessory set, factory, prototype, or generic product family',
      ],
    },
    {
      title: 'Physical product and pack-out',
      items: [
        'Sampled units match approved dimensions, reservoir and burner geometry, joints, feet, shields, snuffer, accessories, visible condition, workmanship, warning placement, and identity',
        'Fuel claims, instructions, model, lot, barcode, SKU, retail package, quantity, carton marks, carton protection, and packing list are complete and consistent',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, carton map, supplier change, correction instruction, qualified retest or report disposition, revised files, and repeat inspection remain traceable',
        'Cleared and unresolved models, fuel-system versions, dates, lots, and cartons stay separated; the final release names exact scope and open conditions',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why tabletop fire pit shipment evidence matters now',
      paragraphs: [
        'On July 16, 2026, the U.S. Consumer Product Safety Commission warned consumers to stop using at least 53,500 Houswise tabletop fire pits made in China. CPSC reported more than two dozen incidents involving flame jetting, fuel leaking outside the product, or unexpectedly high flames, with seven injuries including third-degree burns. The agency also stated that the manufacturer had not agreed to a recall or remedy.',
        'The Houswise warning followed an April 2, 2026 CPSC warning for China-made Rozato tabletop fire pits associated with one death and multiple burn injuries. CPSC had already issued a broader December 2024 alert covering alcohol or other liquid-burning fire pits designed around an open pool of fuel, citing two deaths and at least 60 injuries since 2019.',
        'These public records do not prove that every tabletop fire pit, supplier, factory, fuel system, or production lot has the same hazard. They show a recurring decision point: buyers should resolve the exact device scope and qualified evidence before approving production, then confirm that the finished shipment has not drifted from that reviewed version.',
      ],
      bullets: [
        'A marketing name such as “tabletop fireplace,” “fire bowl,” or “s’mores maker” does not settle the product or standard scope',
        'The refill method, open reservoir, fuel container, burner insert, accessories, and use claims can change the risk and evidence questions',
        'A genuine report is useful only when its sample and scope match the current production model',
        'Correction leverage is strongest before balance payment and pickup, while redesign, testing, relabeling, segregation, or cancellation remains practical',
      ],
    },
    {
      id: 'product-scope',
      title: 'Define the product, fuel, and destination scope first',
      paragraphs: [
        'Freeze how the device sustains a flame, whether fuel sits in an open reservoir or separate cartridge, what fuel the instructions permit, how the consumer lights, extinguishes, cools, moves, and refills it, and whether the product is marketed for indoor use, outdoor use, cooking, warming, decoration, or multiple uses. Include every accessory and replacement component sold with or for the device.',
        'ASTM currently lists F3363-25 as the active specification for unvented liquid or gel fuel-burning portable devices and explains its scope on the official standard page. CPSC’s December 2024 public alert referenced F3363-19 when describing open-pool devices that violated the then-cited voluntary standard. The buyer should not assume that an old report, supplier statement, or standard edition automatically covers a 2026 order; ask qualified parties to identify the edition and destination requirements that apply to the exact model.',
        'Do not try to cure an unresolved physical design by changing listing words after production. Drawings, fuel claims, warnings, instructions, packaging, online content, approved evidence, and shipped units need to describe one controlled product.',
      ],
      bullets: [
        'Freeze reservoir geometry, capacity, burner or absorbent media, fill and refill opening, fuel container interface, snuffer, guards, feet, base, materials, and accessories',
        'Separate indoor, outdoor, food-warming, cooking, decorative, camping, cartridge, wick, gel, and pourable-liquid claims for qualified scope review',
        'Document the intended destination and importer before approving the laboratory plan, warnings, or production labels',
        'Escalate redesigned inserts, new fuels, new accessories, changed use claims, or product bundles before they reach mass production',
      ],
    },
    {
      id: 'qualified-evidence',
      title: 'What should the report and test-scope file establish?',
      paragraphs: [
        'Review the complete evidence chain: responsible manufacturer or importer, destination, applicable standard and edition, issuing laboratory, report number, methods, sample photos, drawings, dimensions, reservoir and burner construction, fuel, snuffer, accessories, instructions, warnings, test conditions, results, limitations, dates, factory, and authorized changes.',
        'The ASTM public scope page explains that F3363-25 covers certain portable, ventless devices that sustain a flame over fuel in an open reservoir and also covers separately sold components, while listing exclusions. Scope still depends on the actual product. A buyer-side sourcing team should use that page to frame questions, not to self-certify a device from photographs.',
        'Health Canada’s published 2021–2022 compliance project reviewed 12 portable firepot products against selected ASTM F3363-19 criteria or equivalent and Canadian chemical-container requirements. It resulted in recalls, a public advisory, and removals from sale, while expressly cautioning that the targeted sample was not representative of the overall market. That record reinforces the need to keep report scope, labels, and product identity together without turning one enforcement sample into a market-wide failure claim.',
      ],
      bullets: [
        'Obtain complete reports and sample records instead of a report cover, screenshot, supplier summary, or cropped pass page',
        'Confirm the laboratory, report status, exact sample, model, construction, fuel, accessories, dates, and limitations through independently obtained details',
        'Ask qualified parties whether material, geometry, factory, component, fuel, warning, instruction, or intended-use changes require additional review or testing',
        'Escalate missing pages, altered sample photos, inconsistent dates, unexplained model families, obsolete editions, or files that cannot be confirmed',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled finished fire pits with approved drawings, sample, bill of materials, report identifiers, warnings, instructions, packaging files, and carton records while the order remains accessible. The useful output is a traceable list of sampled models, construction versions, measurements, visible defects, mismatches, and affected quantities.',
        'Check model identity, overall and reservoir dimensions, burner insert, joints, seams, fasteners, feet, level contact, shields, snuffer fit, accessories, surface finish, cracks, sharp edges, contamination, visible leakage or residue, warning placement, instruction set, retail pack, quantity, and carton alignment against the buyer-approved inspection plan.',
        'Do not casually add fuel and light the product during an ordinary factory inspection. Flame-jetting, pool-fire, spill, thermal, stability, combustion, and emissions evaluations require the applicable controlled method, facilities, samples, safety precautions, trained personnel, and qualified interpretation. Onsite evidence can show a mismatch or reason to hold and retest; it cannot reproduce a laboratory program or prove safety.',
      ],
      bullets: [
        'Use buyer-approved sampling, measurement points, tolerances, defect classes, tools, photo requirements, and stop rules',
        'Photograph each sample number, model, date or lot code, measurement, reservoir detail, accessory, warning, package, and carton context',
        'Quantify mixed reservoirs, inserts, feet, snuffers, accessories, labels, instructions, or fuel claims rather than calling them cosmetic differences',
        'Keep qualified test samples and any destructive or live-fire work separate from ordinary saleable-stock inspection',
      ],
    },
    {
      id: 'change-control',
      title: 'Control reservoir, material, fuel, accessory, and factory changes',
      paragraphs: [
        'A change that looks minor to a purchasing team can change the reviewed device. New reservoir depth, opening, absorbent media, burner insert, cement or stone mix, coating, adhesive, shield, foot, snuffer, fuel recommendation, accessory, factory, model name, package claim, or instruction should enter written change control before mass production.',
        'Ask the responsible technical and compliance parties whether the approved evidence still covers the change. Identify the first affected unit and carton, keep cleared and unresolved production physically separated, and map any new samples, reports, warnings, instructions, or inspection criteria to the revised scope.',
        'If correction follows a failed inspection, retain the original finding. A defensible release shows affected quantity, segregation, controlled rework instructions, qualified disposition, revised evidence, repeat inspection samples, cleared carton range, and remaining open conditions.',
      ],
      bullets: [
        'Do not accept undocumented substitutions because the finished product looks similar to the approved sample',
        'Trace components, assembly, warnings, instructions, finished units, production dates, lots, and cartons through one version record',
        'Hold mixed old and new configurations until affected scope and qualified evidence are reconciled',
        'Release a named lot and carton range, not a supplier promise that “all goods are now fixed”',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product and fuel scope',
      whatToConfirm:
        'Destination, intended use, fuel, reservoir and refill method, accessories, instructions, model, responsible party, current standard edition, and destination duties are documented.',
      buyerDecision:
        'Proceed only with a qualified scope; hold devices whose open-reservoir, cartridge, cooking, warming, indoor, outdoor, or fuel classification remains unresolved.',
    },
    {
      riskNode: 'Exact-model evidence',
      whatToConfirm:
        'Laboratory, report, sample photos, methods, model, reservoir, burner, fuel, materials, accessories, factory, dates, results, and limitations align with production.',
      buyerDecision:
        'Release covered production only; escalate generic, partial, obsolete, unverifiable, or mismatched scope for qualified review, redesign, correction, or retesting.',
    },
    {
      riskNode: 'Construction and workmanship',
      whatToConfirm:
        'Sampled devices match approved dimensions, reservoir, insert, joints, feet, shields, snuffer, accessories, visible condition, and buyer tolerances.',
      buyerDecision:
        'Accept only within the approved inspection plan; hold affected lots for segregation, correction, qualified disposition, and repeat inspection when production differs.',
    },
    {
      riskNode: 'Warnings and pack-out',
      whatToConfirm:
        'Fuel, refill, extinguishing and cooling warnings, use limits, instructions, model and lot identity, retail pack, quantities, and cartons match approved files.',
      buyerDecision:
        'Hold missing, conflicting, removable, mixed, or model-inaccurate information; controlled relabeling cannot cure an unsafe or unsupported physical design.',
    },
    {
      riskNode: 'Lot release',
      whatToConfirm:
        'Affected quantity, hold status, correction, qualified disposition, repeat inspection, open conditions, and cleared carton range are recorded.',
      buyerDecision:
        'Release named models, versions, lots, quantities, and cartons only; keep unresolved scope on hold before payment and pickup.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'CPSC Houswise warning 26-615, published July 16, 2026, for China-made tabletop fire pits and documented incident, injury, distribution, and manufacturer-response information',
    'CPSC Rozato warning 26-364 and the broader December 2024 liquid-burning fire pit alert for the recurring flame-jetting and pool-fire pattern',
    'ASTM International’s current public F3363-25 scope page, which identifies the active edition and explains included device features and exclusions without supplying a buyer-side compliance verdict',
    'Health Canada’s published portable-firepot compliance project, including its targeted-sampling limitation and documented corrective actions',
    'CPSC’s 2024 Colsen recall and independent Associated Press coverage as an older public case showing why the hazard remains relevant to a current release decision',
    'Buyer-side sourcing analysis connecting those public records to exact-model evidence, change control, finished-goods inspection, pack-out, hold, correction, and lot release',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-Houswise-Tabletop-Fire-Pits-Immediately-Due-to-Risk-of-Serious-Burn-Injury-or-Death-from-Flame-Jetting-and-Fire-Hazards',
      label: 'CPSC Houswise tabletop fire pit warning',
      note: 'Primary July 16, 2026 record for the China-made products, reported incidents and injuries, sales channels, affected quantity, and manufacturer response.',
    },
    {
      href: 'https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-Rozato-Tabletop-Fire-Pits-Immediately-Due-to-Flame-Jetting-and-Fire-Hazards-One-Death-and-Serious-Burn-Injuries-Reported',
      label: 'CPSC Rozato tabletop fire pit warning',
      note: 'Primary April 2, 2026 record for a separate China-made product and documented death and injury context.',
    },
    {
      href: 'https://www.cpsc.gov/Warnings/2025/Consumer-Alert-Stop-Using-Alcohol-or-Other-Liquid-Burning-Fire-Pits-That-Violate-Voluntary-Standards-and-Present-Flame-Jetting-and-Fire-Hazards-Two-Deaths-and-Dozens-of-Serious-Burn-Injuries-Reported',
      label: 'CPSC liquid-burning fire pit consumer alert',
      note: 'Primary category-level record for the open-pool design concern, flame-jetting explanation, cited ASTM F3363-19 context, and incident limits.',
    },
    {
      href: 'https://store.astm.org/f3363-25.html',
      label: 'ASTM F3363-25 official scope page',
      note: 'Official current standard listing and public scope summary for unvented liquid or gel fuel-burning portable devices; full applicability remains product- and market-specific.',
    },
    {
      href: 'https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/industry-professionals/enforcement-summary-report/compliance-verification-project-2021-2022-flame-jetting-portable-firepots.html',
      label: 'Health Canada portable firepot compliance project',
      note: 'Primary enforcement-summary record for selected performance, documentation, labeling findings, corrective actions, and the project’s sampling limitation.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2025/Colsen-Recalls-Fire-Pits-Due-to-Risk-of-Serious-Burn-Injury-from-Flame-Jetting-and-Fire-Spreading-Hazards',
      label: 'CPSC Colsen fire pit recall',
      note: 'Primary October 17, 2024 case record for the recalled open-reservoir products, distribution, incident and injury reports, remedy, and limits.',
    },
    {
      href: 'https://apnews.com/article/colsen-fire-pit-recall-burn-injuries-8b54a11aae3f71d21e9daab3eefffeab',
      label: 'Associated Press report on the Colsen recall',
      note: 'Independent reporting on the 2024 public case and the flame-jetting mechanism described by the regulator.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Destination market, intended indoor or outdoor use, listing and claim files, exact model/SKU and configuration list, drawings, dimensions, fuel system, accessories, and documented product-scope review',
    'Approved sample, specification, bill of materials, reservoir and burner details, material and coating files, snuffer, shields, feet, factory, production dates, lots, carton map, and every change notice',
    'Complete laboratory reports, issuer details, sample photos, methods, standard edition, current status, scope, results, limitations, and an index mapping each file to the order',
    'Final warnings, fuel and refill instructions, cooling and extinguishing steps, use limits, responsible-party details, model and lot marks, retail-pack artwork, barcode, SKU, carton marks, and packing list',
    'Buyer-approved sampling plan, measurement points, tools, tolerances, workmanship criteria, defect classes, stop rules, photo requirements, any qualified test-sample plan, and payment or pickup decision',
    'Any known reservoir, refill, leakage, stability, accessory, fuel, report, warning, supplier-change, test, rework, or prior inspection concern and its affected quantity',
  ],
  redFlags: [
    'The supplier relies on “ASTM tested,” a marketplace badge, a report logo, a listing claim, or a seller assurance without complete exact-model evidence',
    'The report shows another reservoir, burner insert, fuel, material, accessory set, factory, sample, date, standard edition, or model family',
    'Only a report cover, cropped screenshot, supplier summary, prototype file, or unverifiable laboratory document is available',
    'Sampled units have mixed reservoir depth, fill openings, inserts, joints, feet, snuffers, shields, accessories, warnings, instructions, model, or lot identity',
    'The factory treats a brief visual check or improvised ignition as proof of flame-jetting, spill, thermal, stability, combustion, emissions, or legal compliance',
    'Indoor-use, cooking, warming, fuel, refill, cooling, or extinguishing claims conflict across listing, instructions, labels, and packaging',
    'The supplier changed a component, material, factory, fuel recommendation, accessory, or claim after testing without documented qualified review',
    'The correction plan lacks affected quantity, segregation, qualified disposition, controlled work instructions, revised files, carton map, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible tabletop fire pits, documents, buyer-approved dimensions, construction, reservoir and burner details, accessories, warnings, instructions, packages, cartons, quantities, and workmanship with an agreed reference set in China',
    'Huang Sourcing does not select legal requirements, classify the product for the importer, conduct prescribed flame-jetting, spill, thermal, stability, combustion or emissions testing, certify ASTM conformity, authorize marketplace listings, or give legal advice',
    'An ordinary visual or buyer-defined onsite check cannot prove safe refilling, fuel compatibility, flame behavior, fire containment, surface temperature, emissions, or compliance with every destination requirement',
    'Sampling cannot guarantee every unit outside the agreed scope, and sealed cartons, mixed lots, weak traceability, inaccessible goods, or missing approved references reduce confidence',
    'The manufacturer, importer, laboratory, compliance owner, broker, marketplace, retailer, authorities, and end users remain responsible for their product-specific decisions',
    'A passed pre-shipment inspection does not guarantee regulatory compliance, report validity, customs release, marketplace approval, recall avoidance, or safe performance after shipment',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'How to verify a China laboratory report',
      note: 'Check issuer, scope, sample photos, exact-product coverage, dates, results, limitations, source confirmation, and production mismatches.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control plan for China manufacturing',
      note: 'Build approved references, change control, qualified testing, inspections, corrections, and payment holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Match fuel warnings, instructions, use claims, model and lot identity, retail packs, cartons, and correction evidence.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define the photos, tools, measurements, traceability, mismatches, affected quantities, decisions, and limits the report should show.',
    },
    {
      href: '/qc-inspection-china',
      label: 'QC inspection in China',
      note: 'Compare buyer-approved product, packaging, quantity, measurements, and evidence while the actual goods are still accessible.',
    },
    {
      href: '/before-balance-payment-qc-china',
      label: 'Inspection before balance payment',
      note: 'Keep correction and payment leverage until cleared and unresolved shipment scope is visible.',
    },
    {
      href: '/pre-shipment-inspection-china-before-pickup',
      label: 'Pre-shipment inspection before pickup',
      note: 'Keep the goods accessible until model, lot, packaging, correction, and release evidence is complete.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, reports, testing, packaging, payment, pickup, and supplier decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
}

export function makeTabletopFirePitChecksChinaArticleMetadata(): Metadata {
  const article = tabletopFirePitChecksChinaArticle

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

export function makeTabletopFirePitChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(tabletopFirePitChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Tabletop fire pit pre-shipment release checklist',
      itemListElement: tabletopFirePitChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
