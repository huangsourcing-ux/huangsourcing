import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  childrensSleepwearChecksChinaArticleHref,
  cpscEfilingChinaImportsArticleHref,
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

export const childrensSleepwearChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: childrensSleepwearChecksChinaArticleHref,
  title: "Children's Sleepwear Checks Before Shipping from China",
  metaTitle: "Children's Sleepwear Checks from China",
  metaDescription:
    "Check children's sleepwear before China shipment: classification, FPU/GPU evidence, fit dimensions, labels, CPC data, lots, packaging, and release.",
  publishedDate: 'August 3, 2026',
  publishedDateIso: '2026-08-03T03:27:39+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: "Children's Sleepwear Checks Before Shipping from China",
  eyebrow: 'Classification - finished-lot evidence - payment and shipment release',
  image: {
    alt: "Neutral AI illustration of unbranded children's pajamas, fabric swatches, measuring tools, blank labels, checklist, and carton on an inspection bench",
    height: 900,
    src: '/images/childrens-sleepwear-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/childrens-sleepwear-checks-china.webp', width: 1600 },
    {
      height: 1200,
      src: '/images/childrens-sleepwear-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/childrens-sleepwear-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    "Before releasing balance payment or forwarder pickup for children's sleepwear made in China, freeze the intended use, destination, age and size range, fit route, fabrics, colors, prints, trims, factory, FPU/GPU identity, qualified test evidence, labels, packaging, and production lot. Hold any scope where the shipment and the approved compliance file do not match.",
  answerSummary:
    "Use three separate gates: responsible product classification, qualified testing and certification for the exact production scope, and buyer-side inspection of sampled finished goods. A China-side inspection can document measurements, construction, labels, traceability, packaging, workmanship, and lot mismatches, but it cannot perform flammability testing, issue a CPC, choose the legal route, or guarantee compliance.",
  primaryCta: { label: 'Check Sleepwear Before Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side children's sleepwear evidence and quality check before shipment.

Destination market:
Garment type, intended use, age, size range, and fit route:
Factory, model/SKU, colors, prints, trims, and production lot:
Approved sample, tech pack, measurements, fabric and trim specifications:
FPU/GPU records, test reports, CPC data, and applicable-rule review:
Product labels, hangtags, packaging, barcodes, and carton files:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#classification', label: 'Classify the garment' },
    { href: '#production-units', label: 'FPU and GPU evidence' },
    { href: '#qualified-evidence', label: 'Reports and CPC data' },
    { href: '#physical-checks', label: 'Finished-goods checks' },
    { href: '#labels-traceability', label: 'Labels and traceability' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Document destination, garment type, intended use, marketing, age and size range, loose or tight fit route, fabrics, colors, prints, trims, factory, SKU, production dates, and lot before choosing evidence or labels',
    'Require the importer and qualified compliance parties to identify the applicable sleepwear, infant-garment, tight-fitting, general-apparel, testing, certification, tracking, filing, and marketplace duties',
    'Match FPU and GPU records, full laboratory reports, sample photos, fabric and garment scope, seams and trims, colors and prints, manufacturer, factory, dates, results, limits, and CPC data to the order',
    'Compare sampled mass production with the approved sample, tech pack, measurement chart, fabric, construction, seam and trim details, cuffs, openings, fit dimensions, unit identity, care labels, and tracking marks',
    'Check final marketing and pack-out: garment name, intended use, age/size, snug-fit messaging where applicable, permanent and hangtag information, barcode, SKU, polybag, quantity, carton marks, and packing list',
    'Keep flammability, chemical, color/print grouping, prototype, production, and certificate decisions with qualified parties; do not improvise burn or shrinkage conclusions from appearance',
    'Hold mixed, substituted, unlabeled, untraceable, changed, damaged, out-of-tolerance, generic-report, or unresolved scope until affected units are segregated and disposition is documented',
    'Release only named SKUs, sizes, colors, prints, lots, and cartons after controlled correction and repeat inspection; record every open condition separately',
  ],
  checkGroups: [
    {
      title: 'Classification and exact SKU',
      items: [
        'Destination, intended use, marketing, age, size, loose or tight fit, garment style, fabric, print, color, trim, model, SKU, manufacturer, factory, date, and lot are controlled',
        'Tech pack, purchase order, approved sample, report, CPC data, product labels, hangtags, retail pack, carton, listing, and packing list describe the same finished product route',
      ],
    },
    {
      title: 'Qualified FPU/GPU evidence',
      items: [
        'Applicable rule review, FPU/GPU identity, laboratory and acceptance scope, report number, standard, fabric and garment sample photos, seams, trims, colors, prints, dates, results, and limits align',
        'Certificate and eFiling data map to the exact imported finished product rather than an earlier sample, raw fabric alone, another factory, a generic family, or a differently marketed garment',
      ],
    },
    {
      title: 'Physical product and pack-out',
      items: [
        'Sampled garments match approved measurements, fit construction, cuffs, openings, seams, stitches, trims, decorations, fabric hand, color, print, workmanship, unit identity, and visible care information',
        'Permanent labels, required hangtags, tracking marks, warnings or instructions, age/size, barcode, SKU, lot, retail package, quantity, carton marks, and packing list are complete and consistent',
      ],
    },
    {
      title: 'Hold, correction, and release',
      items: [
        'Affected quantity, hold tags, carton map, supplier change, correction instruction, qualified retest or certificate disposition, revised files, and repeat inspection are traceable',
        'Cleared and unresolved SKUs, sizes, colors, prints, lots, and cartons remain separated; the final release names exact scope and open conditions instead of giving the order a blanket pass',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: "Why children's sleepwear shipment evidence matters now",
      paragraphs: [
        "On June 18, 2026, the U.S. Consumer Product Safety Commission warned consumers to stop using Michley children's pajamas. The notice says the garments violated the mandatory flammability standard, identifies the seller as a China company, states that the product was manufactured in China, and reports no incidents or injuries.",
        'Health Canada published a recall for Michley pajamas on July 21, 2026. That notice separately identifies a flammability hazard, reports 66 affected units sold in Canada and no reported incidents or injuries there as of July 16, and names China as the place of origin.',
        'A separate operational change also reached its effective date: CPSC states that revised certificate requirements and electronic filing of certificate data for general imported regulated products took effect July 8, 2026. These records make exact finished-product identity, testing, traceability, and certificate data more useful before a shipment reaches entry.',
      ],
      bullets: [
        'Repeated public actions do not prove every pajama, supplier, factory, fabric, or lot has the same problem',
        'A garment name or “loungewear” label does not by itself settle which rule applies',
        'A genuine report is relevant only when its samples and production-unit scope align with the shipped goods',
        'Correction leverage is strongest before balance payment and pickup, while retesting, relabeling, rework, segregation, or cancellation remains practical',
      ],
    },
    {
      id: 'classification',
      title: 'Classify the garment before choosing tests, fit, or labels',
      paragraphs: [
        "Start with intended use, design, construction, age and size, marketing, listing, packaging, merchandising, fabric features, and how buyers are likely to use the garment. CPSC's current FAQ says sleepwear can include pajamas, nightgowns, robes, and loungewear, and that classification depends on more than the product name.",
        'CPSC distinguishes in-scope sleepwear from diapers, underwear, defined infant garments, and defined tight-fitting garments. Those excepted garments remain subject to other flammability requirements. The responsible importer and qualified compliance resources should document the route before the supplier freezes the pattern, fabric, tests, tags, and packaging.',
        'Do not solve uncertainty by adding “daywear,” “loungewear,” an age, or a snug-fit tag after production. Marketing and physical construction must tell the same story, and a visual inspector should compare against an approved classification and measurement file rather than make the legal classification onsite.',
      ],
      bullets: [
        'Freeze product names and intended-use claims across purchase order, tech pack, listing, package, hangtag, and instructions',
        'Control every size against the approved measurement route instead of approving one representative size for all',
        'Escalate robes, loungewear, sleeping bags, infant sizes, and borderline daywear for documented qualified review',
        'Treat U.S., Canadian, EU, UK, and other market requirements as separate reviews unless qualified evidence establishes the destination scope',
      ],
    },
    {
      id: 'production-units',
      title: 'Connect FPU and GPU evidence to the production lot',
      paragraphs: [
        "CPSC's current sleepwear FAQ describes Fabric Production Unit testing for pre-production fabric and Garment Production Unit testing for prototypes and production. It states that an FPU can cover up to 5,000 yards of finished fabric and a GPU up to 500 dozen finished garments, subject to the standards and grouping rules.",
        'Build a controlled map from every shipped SKU, size, color, print, fabric lot, seam, trim, decoration, factory, production date, and carton range to the applicable FPU/GPU evidence. Ask qualified parties to document whether colors, prints, trims, or model families can be grouped; do not infer coverage from visual similarity.',
        'When fabric, print, trim, seam, pattern, factory, or treatment changes, identify the first affected production and hold it until the responsible party decides whether the original evidence remains applicable, additional samples are required, or correction and retesting are needed.',
      ],
      bullets: [
        'Preserve fabric-roll, cutting, sewing, finishing, SKU, lot, and carton traceability',
        'Keep approved and unapproved production physically separated through packing and pickup',
        'Map test samples and retained samples to the same production identity used on product labels and certificates',
        'Reject undocumented substitutions even when fabric content, color, or garment appearance seems similar',
      ],
    },
    {
      id: 'qualified-evidence',
      title: 'What should reports and certificate data establish?',
      paragraphs: [
        'Review the complete evidence chain: responsible manufacturer or importer, applicable rules, issuing laboratory, CPSC acceptance where required, report number, test method, garment and fabric sample photos, FPU/GPU identity, factory, SKU, sizes, materials, colors, prints, seams, trims, receipt and test dates, results, limitations, and authorized certificate data.',
        "CPSC states that children's products generally require third-party testing by a CPSC-accepted laboratory for applicable rules and a Children's Product Certificate issued by the domestic manufacturer or importer. The importer remains responsible for accurate product and certificate information; a supplier-created PDF does not transfer that duty.",
        'Compare the tested samples and production units with current goods before relying on a pass. A real report for an earlier fabric lot, another print or trim, different fit route, another factory, or generic garment family does not prove that the shipment matches its scope.',
      ],
      bullets: [
        'Obtain complete reports and production-unit records rather than a certificate cover, screenshot, or supplier summary',
        'Verify the laboratory and report through independently obtained source details where possible',
        'Map every result and limitation to the exact destination, route, SKU, size, fabric, print, trim, factory, and lot',
        'Escalate missing pages, altered sample photos, inconsistent dates, unexplained grouping, and files that cannot be confirmed',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a China-side finished-goods inspection check?',
      paragraphs: [
        'A buyer-side inspection can compare sampled finished garments with approved tech packs, patterns or measurement charts, samples, fabric and trim specifications, report identifiers, labels, packaging files, and carton records while the order is accessible. The useful output is a traceable list of sampled SKUs, sizes, measurements, construction details, defects, mismatches, and affected quantities.',
        'Check identity, fabric and visible finish, print and color, seam and stitch workmanship, trims and decorations, cuffs, neck and leg openings, closures, sharp or detached parts, contamination, odor if buyer-defined, measurements, fit tolerances, permanent labels, hangtags, retail packaging, quantities, and carton alignment.',
        'Do not improvise burn, chemical, wash, conditioning, prototype, production-unit, or legal-fit conclusions. Those decisions require the applicable methods, calibrated equipment, controlled samples, trained personnel, and responsible disposition. Onsite evidence can identify a reason to hold or retest; it cannot issue a compliance verdict.',
      ],
      bullets: [
        'Use buyer-approved sampling, measurement methods, tolerances, defect classes, tools, and stop rules',
        'Photograph each measured size, mismatch, sample number, SKU, lot, label, package, and carton context',
        'Quantify mixed fabrics, construction, trims, labels, or measurements rather than describing them as cosmetic issues',
        'Keep any laboratory sample plan separate from ordinary saleable-stock inspection',
      ],
    },
    {
      id: 'labels-traceability',
      title: 'Check permanent labels, hangtags, claims, and traceability',
      paragraphs: [
        'CPSC guidance identifies unit information connecting in-scope sleepwear to an FPU or GPU, care precautions where applicable, and tracking information for children’s products on the product and packaging. Tight-fitting and infant-garment routes have their own defined measurement, tagging, sizing, labeling, and other requirements.',
        'Compare final sewn-in labels, hangtags, age and size statements, fiber and care information, manufacturer or private-label identity, production location and date, batch or run, retail claims, barcodes, SKU, polybag, carton quantity, carton marks, and packing list with approved artwork and responsible-party instructions.',
        'Inspect legibility, permanence where required, placement, completeness, and consistency across sampled units. A tag cannot cure wrong classification, unsupported fit, failed testing, changed production, or missing lot evidence. Mixed or missing traceability should remain a release issue until controlled correction is verified.',
      ],
      bullets: [
        'Do not let an unsupported “snug fitting,” “daywear,” “loungewear,” or infant-size claim act as a label workaround',
        'Match online and packaging claims to the same intended use and age assumptions used for the compliance route',
        'Check product labels and package tracking separately rather than photographing one convenient carton',
        'Require revised artwork, controlled rework, affected-quantity records, and repeat inspection after corrections',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Classification and market',
      whatToConfirm:
        'Destination, intended use, marketing, age, size, fit route, responsible compliance owner, applicable rules, testing, certification, tracking, and filing duties are documented.',
      buyerDecision:
        'Proceed only with a qualified route; hold garments whose sleepwear, infant, tight-fitting, daywear, or destination status remains unresolved.',
    },
    {
      riskNode: 'FPU/GPU and exact-SKU evidence',
      whatToConfirm:
        'Laboratory, reports, sample photos, FPU/GPU identity, factory, fabric, sizes, colors, prints, seams, trims, dates, results, limits, and CPC data align with production.',
      buyerDecision:
        'Release covered production only; escalate generic, partial, altered, unverifiable, or mismatched scope for qualified review, correction, or retesting.',
    },
    {
      riskNode: 'Measurements and workmanship',
      whatToConfirm:
        'Sampled garments match the approved construction, fit dimensions, cuffs, openings, seams, stitches, trims, fabric, color, print, and buyer-defined tolerances.',
      buyerDecision:
        'Accept only within the approved inspection plan; hold affected lots for segregation, correction, qualified disposition, and repeat inspection when production differs.',
    },
    {
      riskNode: 'Labels and traceability',
      whatToConfirm:
        'Permanent labels, unit identity, required tags, product/package tracking, age/size, claims, barcode, SKU, lot, retail pack, cartons, and packing list are consistent.',
      buyerDecision:
        'Hold missing, mixed, unreadable, unsupported, or conflicting scope until controlled correction and repeat inspection are complete.',
    },
    {
      riskNode: 'Shipment release',
      whatToConfirm:
        'Cleared SKUs, sizes, colors, prints, lots, cartons, quantities, evidence versions, inspection samples, corrections, open conditions, and release owner are named.',
      buyerDecision:
        'Release only documented cleared scope; do not turn a sampled inspection into a blanket guarantee for the order or future production.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    "The June 18, 2026 CPSC Michley children's pajamas warning and July 21, 2026 Health Canada recall",
    "Current CPSC children's sleepwear guidance for classification, FPU/GPU testing, labels, third-party testing, CPC duties, and tracking",
    'The July 8, 2026 effective date for revised CPSC certificate content and import eFiling requirements',
    'Buyer-side exact-SKU, measurement, construction, label, packaging, lot, correction, and release evidence that can be compared before goods leave China',
    'Explicit separation between visible shipment inspection and qualified classification, laboratory, certification, importer, customs, marketplace, and legal responsibilities',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Immediately-Stop-Using-Michley-Pajamas-Due-to-Risk-of-Serious-Injury-or-Death-from-Burn-Hazard-Violate-Mandatory-Standard-for-Childrens-Sleepwear',
      label: "CPSC - Michley children's pajamas warning",
      note: 'Primary June 18, 2026 public case identifying the mandatory-standard violation, China seller and manufacture, sales channel, approximate U.S. unit scope, no reported incidents or injuries, and consumer action.',
    },
    {
      href: 'https://recalls-rappels.canada.ca/en/alert-recall/michley-brand-children-s-pajamas-recalled-due-flammability-hazard',
      label: "Health Canada - Michley children's pajamas recall",
      note: 'Independent primary July 21, 2026 recall identifying the Canadian flammability hazard, affected products, 66 units sold, no reported Canadian incidents or injuries as of July 16, and China origin.',
    },
    {
      href: 'https://www.cpsc.gov/FAQ/Childrens-Sleepwear',
      label: "CPSC - children's sleepwear FAQ",
      note: 'Primary current guidance for classification, infant and tight-fitting exceptions, FPU/GPU testing, grouping, unit identification, care information, tracking, third-party testing, and CPC responsibilities.',
    },
    {
      href: 'https://www.cpsc.gov/s3fs-public/Flammability%20of%20Children%27s%20Sleepwear%20Test%20Manual_1615_1616.pdf',
      label: "CPSC - children's sleepwear flammability laboratory manual",
      note: 'Primary technical guidance for 16 CFR parts 1615 and 1616 laboratory procedures; buyers should use the current incorporated requirements and qualified laboratories for product-specific decisions.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Certificates',
      label: 'CPSC - certificates of compliance and eFiling update',
      note: 'Primary current notice stating the July 8, 2026 effective date for general imported regulated products and electronic filing of certificate data for covered imports.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Lab-Accreditation',
      label: 'CPSC - accepted laboratories and accreditation',
      note: "Primary laboratory resource for checking acceptance and scope where third-party testing of children's products is required.",
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Destination market, intended use, marketing and listing files, age and size range, fit route, exact model/SKU list, measurement chart, fabrics, colors, prints, trims, buyer tolerances, and classification review',
    'Approved sample, tech pack, pattern or measurement method, bill of materials, fabric and trim specifications, care instructions, manufacturer, factory, production dates, lots, carton map, and every change notice',
    'FPU/GPU map, complete laboratory reports, issuer and acceptance details, sample photos, current status, scope and limitations, CPC and eFiling data, and an index mapping each file to the order',
    'Final permanent labels, required hangtags, product and package tracking marks, age/size, claims, retail-pack artwork, barcode, SKU, lot code, carton marks, and packing list',
    'Buyer-approved sampling plan, measurements, tools, tolerances, workmanship criteria, defect classes, stop rules, photo requirements, any laboratory sample plan, and payment or pickup decision',
    'Any known fabric, color, print, trim, seam, fit, measurement, report, label, supplier-change, test, rework, or prior inspection concern and its affected quantity',
  ],
  redFlags: [
    'The supplier relies on a product name, age, size, snug-fit tag, daywear claim, or marketplace category without a documented classification route',
    'The report or production-unit file shows another factory, garment, fabric, fit route, size scope, color/print group, trim, sample, date, standard, or lot',
    'Only a certificate cover, cropped screenshot, supplier summary, raw-fabric report, or unverifiable laboratory file is available',
    'Sampled garments have mixed fabric, color, print, trim, seam, cuff, opening, measurement, decoration, permanent label, hangtag, or tracking identity',
    'Fit-critical measurements fall outside the buyer-approved chart or are checked with an unapproved method',
    'Product labels, package tracking, age/size, intended-use claims, SKU, lot, barcode, carton marks, or packing list conflict',
    'The factory performs improvised burn or compliance tests without the applicable method, calibrated equipment, trained personnel, controlled samples, or traceable disposition',
    'The correction plan lacks affected quantity, segregation, qualified retest or certificate disposition, controlled work instructions, revised files, carton map, or repeat inspection',
  ],
  scopeLimits: [
    "Huang Sourcing can compare visible children's sleepwear, documents, buyer-approved measurements, fabric and trim identity, construction, seams, cuffs, openings, labels, packages, cartons, quantities, and workmanship with an agreed reference set in China",
    'Huang Sourcing does not select legal requirements, classify the garment for the importer, conduct laboratory flammability or chemical testing, approve FPU/GPU grouping, issue a CPC, submit importer eFiling, authorize marketplace listings, or give legal advice',
    'A visual or buyer-defined onsite check cannot prove flame resistance, chemical composition, treatment durability, wash performance, legal tight-fit status, or compliance with every destination-market requirement',
    'Sampling cannot guarantee every unit outside the agreed scope, and sealed cartons, mixed lots, weak traceability, inaccessible goods, or missing approved references reduce confidence',
    'The manufacturer, importer, laboratory, compliance owner, broker, marketplace, retailer, authorities, and end user remain responsible for their product-specific decisions',
    'A passed pre-shipment inspection does not guarantee regulatory compliance, certificate validity, eFiling acceptance, customs release, marketplace approval, recall avoidance, or safe performance after shipment',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'How to verify a China laboratory report',
      note: 'Check issuer, laboratory scope, sample photos, exact-product coverage, dates, results, limitations, source confirmation, and production mismatches.',
    },
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling for China imports',
      note: 'Coordinate exact finished-product certificate data, product identifiers, importer responsibility, broker handoff, and entry records.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control plan for China manufacturing',
      note: 'Build approved references, change control, qualified testing, inspections, corrections, and payment holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Match permanent labels, tracking, hangtags, claims, age/size, SKU and lot identity, retail packs, cartons, and correction evidence.',
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
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, reports, testing, packaging, payment, pickup, and supplier decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
}

export function makeChildrensSleepwearChecksChinaArticleMetadata(): Metadata {
  const article = childrensSleepwearChecksChinaArticle

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

export function makeChildrensSleepwearChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(childrensSleepwearChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: "Children's sleepwear pre-shipment release checklist",
      itemListElement: childrensSleepwearChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
