import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  adultBedRailChecksChinaArticleHref,
  buyerSideInspectionReportArticleHref,
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

export const adultBedRailChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: adultBedRailChecksChinaArticleHref,
  title: 'Adult Bed Rail Checks Before Shipping from China',
  metaTitle: 'Adult Bed Rail Checks Before China Shipment',
  metaDescription:
    'Check adult portable bed rail models, mattress ranges, GCC and test evidence, retention systems, warnings, cartons, and release decisions before China shipment.',
  publishedDate: 'July 28, 2026',
  publishedDateIso: '2026-07-28T03:28:00+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Adult Bed Rail Checks Before Shipping from China',
  eyebrow: '16 CFR part 1270 - exact-model evidence - payment and shipment release',
  image: {
    alt: 'Neutral illustrative inspection of a generic adult portable bed rail, mattress setup, retention strap, caliper, checklist, and cartons before China shipment',
    height: 900,
    src: '/images/adult-bed-rail-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/adult-bed-rail-checks-china.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/adult-bed-rail-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/adult-bed-rail-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before releasing balance payment or pickup for adult portable bed rails in China, match the exact production model and intended mattress range to qualified 16 CFR part 1270 evidence, a General Certificate of Conformity, permanent warnings, instructions, and the physical shipment. Hold the order when scope, model identity, retention hardware, dimensions, labels, or correction records do not align.',
  answerSummary:
    'Use three separate gates: qualified standard and laboratory review, buyer-side production inspection, and importer certification and filing. An on-site check can compare visible construction, identifiers, warnings, packaging, and approved measurements, but it cannot perform the full entrapment, retention, structural, or misassembly test program or certify that the product is safe.',
  primaryCta: {
    label: 'Check Bed Rails Before Shipment',
  },
  secondaryCta: {
    href: '#release-checklist',
    label: 'See Release Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side adult portable bed rail quality and evidence check before shipment.

Product / model / SKU:
Intended use and mattress range:
Factory and production lot:
Approved sample and specifications:
16 CFR part 1270 test evidence and GCC:
Warnings, instructions, packaging, and carton files:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#scope-model', label: 'Scope and model identity' },
    { href: '#evidence-gate', label: 'GCC and test evidence' },
    { href: '#physical-checks', label: 'Physical shipment checks' },
    { href: '#test-boundary', label: 'Inspection limits' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Confirm that the product is an adult portable bed rail within the intended-use scope; do not confuse it with a children’s portable rail or an FDA-regulated hospital-bed side rail',
    'Freeze the exact model, SKU, dimensions, materials, openings, joints, push pins, retention system, intended bed type, recommended mattress thickness range, factory, production date, lot, and packaging version',
    'Map the qualified test report, sample photos, applicant, manufacturer, factory, model, construction, mattress range, issue date, results, and changes to the physical order',
    'Require an importer-issued GCC that cites 16 CFR part 1270 and matches the exact product and supporting evidence; confirm current eFiling responsibilities before entry',
    'Compare sampled rails with approved drawings and samples for height, width, openings, frame geometry, fasteners, permanently attached retention parts, strap and buckle construction, push pins, sharp points, finish, and assembly behavior',
    'Verify permanent product labels, required warning statements, model and lot identity, instructions, package identity, carton marks, quantities, and the destination-language file approved by the buyer',
    'Treat full entrapment-zone, retention, structural-integrity, opening, and misassembly evaluations as qualified test work; a tape-measure check or trial installation is not a compliance test',
    'Release only when mismatches are quantified, affected stock is segregated, technical retest decisions are documented, corrections remain traceable by lot and carton, and re-inspection evidence is complete',
  ],
  checkGroups: [
    {
      title: 'Scope, model, and mattress range',
      items: [
        'Intended use, user group, model, SKU, frame geometry, materials, dimensions, product weight, recommended mattress thickness, compatible bed construction, assembly configuration, factory, date, lot, and change record',
        'Purchase order, approved sample, drawing, instruction manual, product label, retail package, master carton, packing list, and unit identifiers all describe the same adult portable bed rail',
      ],
    },
    {
      title: 'Qualified evidence and certification',
      items: [
        '16 CFR part 1270 scope, applicable ASTM F3186-17 evidence as modified by CPSC, report number, laboratory, applicant, manufacturer, factory, exact model, sample photos, mattress setup, results, issue date, and approved changes',
        'GCC issuer, product identification, cited rule, manufacturing date and place, testing record, responsible contact, and current importer eFiling data are controlled by the qualified and legally responsible parties',
      ],
    },
    {
      title: 'Physical product and assembly',
      items: [
        'Frame, top rail, supports, openings, joints, fasteners, push pins, sharp points and edges, permanently attached retention system, strap, buckle, anchors, finish, fabric parts, model mark, and visible assembly cues',
        'Buyer-approved dimensional and functional observations are recorded against approved tolerances without being described as full retention, structural, entrapment, opening, or misassembly compliance tests',
      ],
    },
    {
      title: 'Warnings, pack-out, and release',
      items: [
        'Permanent warnings and labels, instructions, mattress and installation information, model and lot traceability, retail-pack identity, carton quantity, carton marks, packing list, and packaging protection match approved files',
        'Affected quantity, hold tag, carton map, correction instruction, replacement or rework record, retest decision, re-inspection result, balance-payment status, and pickup authorization are documented',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why adult bed rail release evidence deserves attention now',
      paragraphs: [
        'The July 2026 record is a recurring product pattern, not one isolated listing. On July 16, CPSC announced recalls for MNIENT and Noerishia adult portable bed rails made in China and sold on Amazon. The MNIENT record identified entrapment, structural-stability, retention-strap, and push-pin sizing problems; the Noerishia record identified entrapment risk and missing required hazard warnings.',
        'Independent care-provider coverage on July 23 highlighted the same two recalls and their exact models, batches, identifiers, and hazards. At the same time, CPSC’s mandatory certificate eFiling program had taken effect on July 8 for regulated imported consumer products, moving certificate data earlier in the import process without creating a substitute for testing or product conformity.',
        'These records do not prove that every China-made bed rail, supplier, or order has the same defects. They show why the release file must identify the exact model and production version, and why a clean visual sample cannot replace qualified evaluation of entrapment, retention, structural integrity, openings, warnings, and foreseeable assembly.',
      ],
      bullets: [
        'A supplier statement that a rail is “ASTM tested” is incomplete when the model, sample photo, factory, dimensions, mattress range, retention hardware, or report scope differs from production',
        'Packaging and instruction identity matter because public recalls have used model, batch, package, product-label, and manual details to define affected products',
        'Missing permanent warnings are a shipment problem even when the frame appears visually consistent',
        'Correction leverage is strongest before balance payment and pickup, while segregation, rework, qualified retesting, re-inspection, replacement, or cancellation remains practical',
      ],
    },
    {
      id: 'scope-model',
      title: 'Is this exact product within the adult portable bed rail rule?',
      paragraphs: [
        'Start with intended use. CPSC describes an adult portable bed rail broadly as an adjacent rail, assistive bar, transfer aid, cane, or similar product intended to be installed on or beside an adult bed to help the occupant move, enter, exit, or reduce fall risk. A different product name does not remove an item that is likely to be used that way from the possible scope.',
        'Do not merge adult rails with other categories. CPSC states that children’s portable bed rails and rails intended for FDA-regulated hospital beds follow different frameworks. The importer and qualified adviser should decide scope before ordering tests, drafting certificates, approving labels, or releasing production.',
        'For the exact adult model, freeze the intended bed and mattress range, frame shape, rail height and width, supports, openings, permanently attached retention system, straps, buckles, push pins, materials, instructions, warnings, and assembly states. Undisclosed changes can break the link between tested evidence and the physical shipment.',
      ],
      bullets: [
        'Record the exact model and SKU on the purchase order, product, manual, package, carton, packing list, test file, and GCC',
        'Keep an approved change log for factory, steel tube, wall thickness, weld, fastener, joint, pin, hole, strap, buckle, anchor, fabric, coating, dimensions, mattress range, warning, and instruction revisions',
        'Photograph and measure the approved reference in the same configurations the production inspection will compare',
        'Escalate generic reports, model-family claims, missing sample photos, unexplained report aliases, or an evidence file that does not show the production construction',
      ],
    },
    {
      id: 'evidence-gate',
      title: 'What should the GCC and qualified test evidence establish?',
      paragraphs: [
        'CPSC’s business guidance says 16 CFR part 1270 incorporates ASTM F3186-17 with Commission modifications and covers retention systems, structural integrity, four entrapment zones, openings, misassembly, sharp points and edges, permanent labels, and warning statements. The requirements apply to adult portable bed rails manufactured after August 21, 2023.',
        'The same guidance says manufacturers and importers of covered general-use products must issue a General Certificate of Conformity, using “16 CFR part 1270 – Adult portable bed rails” as the rule citation. A GCC is the responsible party’s certificate based on the required supporting basis; it is not a supplier badge and does not make a mismatched or incomplete report apply to another model.',
        'CPSC announced that mandatory eFiling for imported regulated consumer products took effect July 8, 2026. Buyers should coordinate the certificate data with their importer, broker, laboratory, and compliance adviser before entry, while keeping the shipment release decision separate from customs filing mechanics.',
      ],
      bullets: [
        'Check the laboratory and report through an independently obtained official channel when authenticity or scope matters',
        'Match report model names, drawings, photos, dimensions, components, mattress setup, factory, dates, and results to the approved production version',
        'Ask qualified parties whether every change is covered or requires engineering review, a revised sample, new testing, or a new certificate',
        'Keep the GCC, report set, change record, final labels, instructions, packing list, and entry data under one controlled product version',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can a buyer-side inspection check on the shipment?',
      paragraphs: [
        'A useful inspection compares sampled production with approved references and records every result by model and lot. It can inspect visible frame geometry, dimensions under the buyer’s method, openings, supports, joints, fasteners, push pins, sharp points and edges, retention straps and buckles, fabric parts, finish, labels, warnings, instructions, packages, cartons, quantities, and assembly consistency.',
        'The inspection should also confirm whether the retention components are present and appear permanently attached as approved, whether the product can be assembled only in the documented configurations, and whether model and lot identifiers remain readable through pack-out. Any trial installation needs a buyer-approved setup and must not be represented as the standard’s full test procedure.',
      ],
      bullets: [
        'Photograph the full rail, model and lot marks, every support and opening, joints, push pins, fasteners, strap attachment, buckle, anchor, warning panel, manual, retail package, and carton mark in context',
        'Measure buyer-specified critical dimensions against approved drawings and tolerances; record the tool, setup, sample, result, and affected quantity',
        'Open cartons across the agreed sampling plan to detect mixed models, lots, hardware, warning revisions, instruction versions, or corrected and uncorrected units',
        'Stop and hold when a rail is unstable, damaged, sharply finished, incomplete, misassembled, missing retention hardware, missing required warnings, outside tolerance, or inconsistent with the qualified evidence',
      ],
    },
    {
      id: 'test-boundary',
      title: 'What must remain with qualified laboratories and responsible parties?',
      paragraphs: [
        'Full retention, structural-integrity, entrapment-zone, opening, and misassembly evaluations use defined fixtures, probes, mattresses, configurations, forces, procedures, and acceptance criteria. A factory walk-through, tape measure, visual check, tug, trial assembly, supplier video, or short functional sample cannot replace that program.',
        'The importer, manufacturer, qualified laboratory, engineer, compliance adviser, and broker must determine scope, standards, sample selection, report validity, certificate basis, eFiling data, and whether product changes require new testing. Huang Sourcing can compare visible goods and files with buyer-approved references, but it does not issue the GCC, certify compliance, or authorize U.S. market entry.',
      ],
      bullets: [
        'Do not improvise entrapment or load testing during an ordinary inspection or create an unsafe setup for workers or observers',
        'Do not use a supplier declaration, old test video, dimensional sheet, sample photo, or GCC draft as a substitute for the complete applicable evidence',
        'Do not assume one mattress thickness, one configuration, or one passing sample covers every marketed bed and mattress claim',
        'Record unresolved specialist decisions as open conditions and hold the affected scope until the responsible party closes them',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Scope and model identity align',
      whatToConfirm:
        'Intended use, rule category, PO, model, dimensions, mattress range, construction, factory, lot, approved sample, drawings, labels, manual, package, carton, and packing list identify the same version',
      buyerDecision:
        'Continue, correct the controlled file, segregate unknown stock, obtain a scope decision, or hold payment and pickup.',
    },
    {
      riskNode: 'Qualified evidence covers production',
      whatToConfirm:
        'Responsible parties accept the laboratory, applicant, manufacturer, factory, exact model, sample, mattress setup, report scope, results, issue date, changes, GCC basis, and eFiling data',
      buyerDecision:
        'Approve, verify source files, submit the actual model, retest, revise the certificate, redesign, or stop the order.',
    },
    {
      riskNode: 'Physical shipment matches',
      whatToConfirm:
        'Sampled rails match approved geometry, dimensions, openings, joints, fasteners, push pins, permanently attached retention parts, straps, warnings, instructions, packaging, cartons, and visible condition',
      buyerDecision:
        'Release the cleared scope, isolate affected units, quantify the lot, investigate, rework, replace, or re-inspect.',
    },
    {
      riskNode: 'Correction and handoff are controlled',
      whatToConfirm:
        'Affected quantities, carton map, approved correction, replacement, specialist retest decision, final labels and instructions, repeat inspection, certificate revision, and pickup approval are recorded',
      buyerDecision:
        'Release only cleared lots, hold affected cartons, delay balance payment, delay pickup, or cancel unresolved scope.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official CPSC adult portable bed rail business guidance, FAQ, July 16 MNIENT and Noerishia recall records, and July 8 eFiling implementation notice checked July 28, 2026 Beijing time.',
    'Independent July 23, 2026 care-provider coverage used as a separate current-attention signal and cross-check of the two recall records.',
    'Buyer-approved purchase order, intended use, product specification, drawings, approved sample, mattress range, change log, test plan, report set, GCC, warning and instruction files, packing list, and release rules.',
    'Physical model and lot identifiers, frame geometry, openings, fasteners, pins, retention parts, labels, instructions, retail packs, cartons, quantities, visible condition, and buyer-approved measurements.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Adult-Portable-Bed-Rails',
      label: 'CPSC - Adult portable bed rails business guidance',
      note: 'Primary rule guidance for scope, 16 CFR part 1270, the modified ASTM F3186-17 requirements, retention, structure, entrapment, openings, misassembly, warnings, and GCC citation.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/MNIENT-Adult-Portable-Bed-Rails-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Entrapment-and-Asphyxiation-Violate-Mandatory-Standard-for-Adult-Portable-Bed-Rails',
      label: 'CPSC - MNIENT adult portable bed rail recall',
      note: 'Primary July 16, 2026 public case for a China-made exact model and documented entrapment, structural-stability, retention-strap, and push-pin sizing failures.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Noerishia-Adult-Portable-Bed-Rails-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Entrapment-and-Asphyxiation-Violates-Mandatory-Standard-for-Adult-Portable-Bed-Rails-Sold-on-Amazon-by-Hurzein',
      label: 'CPSC - Noerishia adult portable bed rail recall',
      note: 'Primary July 16, 2026 record for a China-made model and batch, entrapment risk, and missing required hazard warning labels.',
    },
    {
      href: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/CPSC-Implements-Mandatory-eFiling-for-Certificates-of-Compliance-Targeting-Dangerous-Foreign-Imports',
      label: 'CPSC - Mandatory certificate eFiling implementation',
      note: 'Primary July 8, 2026 notice confirming that eFiling is in effect for regulated imported consumer products and does not create a substitute for existing testing and certification duties.',
    },
    {
      href: 'https://www.careproviders.org/CPM/ResourceCenter/ACTION/Vol41/Ed28/ZP03.aspx',
      label: 'Care Providers of Minnesota - July 2026 bed rail safety alert',
      note: 'Independent July 23 coverage cross-checking the MNIENT and Noerishia models, affected quantities, identifiers, hazards, and current provider attention.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Purchase order, intended use, destination, exact model and SKU list, product description, user group, recommended bed and mattress range, dimensions, weight, materials, frame and retention specifications, and buyer-approved tolerances',
    'Approved sample record, drawings, assembly configurations, bill of materials, fastener and push-pin details, strap and buckle specification, warning and instruction files, factory, production dates, lots, and every approved change notice',
    '16 CFR part 1270 test reports and source files, sample photos, laboratory details, report scope and results, responsible-party review, GCC, eFiling data plan, and an index mapping each file to the exact order',
    'Final permanent product label, hazard warnings, model and lot marks, instruction manual, retail-pack artwork, barcode, carton marks, packing list, and carton map',
    'Buyer-approved inspection method, sampling plan, measurement tools and setups, critical dimensions, defect definitions, stop rules, photo requirements, and balance-payment or pickup decision',
    'Any known model, mattress, fit, stability, retention, assembly, opening, sharp-edge, push-pin, warning, instruction, evidence, packaging, or supplier-change concern and the affected quantity',
  ],
  redFlags: [
    'The supplier will not state the exact intended use, model, mattress range, factory, production lot, construction, retention design, or changes behind the finished rail',
    'Report photos, drawings, model names, dimensions, mattress setup, applicant, manufacturer, factory, dates, or sample descriptions do not match production',
    'A test report is cropped, incomplete, edited, outside the laboratory’s relevant scope, or cannot be confirmed through a qualified verification process',
    'The GCC cites a generic standard, identifies another model, omits required product or responsible-party information, or is treated as a certificate supplied by the factory without importer review',
    'Rails show mixed geometry, out-of-tolerance dimensions, loose joints, incomplete fasteners, incorrect push pins, sharp edges, damaged coating, unstable supports, missing straps, or altered attachment points',
    'Required permanent warnings, model and lot marks, instructions, or mattress and installation information are missing, removable, unreadable, inconsistent, or applied only to some cartons',
    'Cartons mix models, lots, hardware, warning revisions, instruction versions, packaging, or corrected and uncorrected units',
    'The correction plan lacks affected quantity, segregation, qualified retest decision, approved work instruction, replacement or rework traceability, carton map, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible products, identifiers, files, dimensions under buyer-approved methods, retention components, labels, instructions, retail packs, cartons, quantities, and observations with the agreed reference set in China',
    'Huang Sourcing does not design bed rails, determine legal scope, authenticate every document, certify safety or compliance, issue a GCC or laboratory report, submit importer eFiling, or provide legal or medical advice',
    'Visual inspection, ordinary measurements, assembly observation, or sampling cannot prove compliance with full retention, structural-integrity, entrapment-zone, opening, misassembly, sharp-edge, warning, or foreseeable-use requirements',
    'Sampling cannot guarantee every unit outside the agreed scope, and mixed lots, sealed cartons, weak traceability, inaccessible factories, unsafe setups, or missing approved references reduce confidence',
    'The importer, manufacturer, qualified laboratory, engineer, compliance adviser, broker, marketplace, retailer, healthcare provider, and authorities remain responsible for their product-specific decisions',
    'A passed pre-shipment inspection does not guarantee CPSC compliance, eFiling acceptance, customs release, marketplace approval, recall avoidance, correct installation, user suitability, or safe performance after shipment',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'How to verify a China laboratory report',
      note: 'Check report identity, laboratory scope, sample photos, exact-model coverage, dates, source confirmation, and production mismatches.',
    },
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling for China imports',
      note: 'Coordinate certificate data, product identifiers, importer responsibility, broker handoff, and shipment records before U.S. entry.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control plan for China manufacturing',
      note: 'Build approved references, change control, qualified testing, inspections, corrections, and payment holds into the order.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Match warnings, instructions, model and lot marks, retail packs, carton marks, quantities, and correction evidence before release.',
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

export function makeAdultBedRailChecksChinaArticleMetadata(): Metadata {
  const article = adultBedRailChecksChinaArticle

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

export function makeAdultBedRailChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(adultBedRailChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Adult portable bed rail pre-shipment release checklist',
      itemListElement: adultBedRailChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
