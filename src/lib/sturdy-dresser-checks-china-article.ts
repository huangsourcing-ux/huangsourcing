import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  preShipmentBeforePickupArticleHref,
  qcBeforeBalanceArticleHref,
  resourceGuideHref,
  sturdyDresserChecksChinaArticleHref,
} from '@/lib/site-links'

type ArticleSection = { bullets?: string[]; id: string; paragraphs: string[]; title: string }
type CheckGroup = { items: string[]; title: string }
type DecisionRow = { buyerDecision: string; riskNode: string; whatToConfirm: string }
type FaqItem = { answer: string; question: string }
type RelatedLink = { href: string; label: string; note: string }
type SourceNote = { href: string; label: string; note: string }

export const sturdyDresserChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: sturdyDresserChecksChinaArticleHref,
  title: 'STURDY Dresser Checks Before Shipping from China',
  metaTitle: 'STURDY Dresser Checks Before Shipping from China',
  metaDescription:
    'Check STURDY scope, stability-test evidence, dresser identity, warnings, anti-tip hardware, cartons, and changes before paying or shipping from China.',
  publishedDate: 'July 21, 2026',
  publishedDateIso: '2026-07-21T03:28:21+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'STURDY Dresser Checks Before Shipping from China',
  eyebrow: 'U.S. dresser evidence - STURDY scope - shipment release',
  image: {
    alt: 'Neutral illustrative inspection setup with a generic fabric dresser, flat-pack components, anti-tip hardware, level, checklist, and carton',
    height: 900,
    src: '/images/sturdy-dresser-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/sturdy-dresser-checks-china.webp', width: 1600 },
    { height: 1200, src: '/images/sturdy-dresser-checks-china-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/sturdy-dresser-checks-china-1x1.webp', width: 1200 },
  ],
  intro:
    'For U.S.-bound dressers, final payment and forwarder pickup should wait until qualified parties confirm whether the exact product is a clothing storage unit, a competent laboratory tests the approved model to the applicable mandatory requirements, and the packed production order matches that tested construction and evidence.',
  answerSummary:
    'Use two connected gates. The importer, product-safety specialist, and competent laboratory should decide scope, rules, tests, certification, warnings, and anti-tip requirements. A China-side inspection can then compare the approved model, dimensions, construction, interlock or drawer behavior, hardware, labels, instructions, SKU, packaging, and correction records with sampled production. Hold release when either gate is incomplete or the two versions do not match.',
  primaryCta: { label: 'Check Dresser Shipment Evidence' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side dresser evidence and shipment check before final payment or pickup.

Product / model / SKU count:
U.S. importer or marketplace:
Supplier / factory location:
Approved drawings and bill of materials:
STURDY scope, test reports, and certificate:
Order and carton quantity:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#product-scope', label: 'Product and model scope' },
    { href: '#test-files', label: 'Test and certificate match' },
    { href: '#physical-checks', label: 'Physical checks and pack-out' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Define the exact dresser, intended use, dimensions, mass, enclosed storage volume, drawer or door arrangement, model, SKU, destination, and sales configuration',
    'Obtain a qualified decision on clothing-storage-unit scope, the applicable mandatory standard, laboratory test plan, certification, warnings, anti-tip kit, and importer duties',
    'Tie the full report and CPC or GCC to the same manufacturer, factory, model, drawings, dimensions, materials, structure, hardware, interlock status, and production version',
    'Compare sampled units and components with the tested sample, approved drawings, bill of materials, golden sample, warning artwork, instructions, and hardware list',
    'Open cartons across the agreed sample to detect mixed frames, panels, drawer systems, feet, fasteners, interlocks, anti-tip kits, warning labels, manuals, or model revisions',
    'Keep visual and dimensional inspection separate from controlled stability, structural, abuse, and other product-safety testing',
    'Control the affected quantity, segregation, rework instruction, carton map, engineering review, retest decision, and re-inspection evidence after a mismatch',
    'Hold balance payment and pickup until qualified approval and China-side evidence support the same exact-model release decision',
  ],
  checkGroups: [
    {
      title: 'Scope and destination',
      items: [
        'Intended bedroom or clothing-storage use, free-standing configuration, height, mass, enclosed storage volume, extendible elements, model, SKU, and U.S. destination',
        'Qualified standard map, importer responsibilities, test plan, certificate route, warning plan, anti-tip requirements, and marketplace requirements',
      ],
    },
    {
      title: 'Tested construction identity',
      items: [
        'Approved overall geometry, drawer and door layout, frame or panel construction, top, feet, glides, stops, interlock, counterweight, fasteners, anti-tip kit, and bill-of-material references',
        'Manufacturer, factory, model code, drawings, tested sample, golden sample, change-control status, production date, lot, and component suppliers',
      ],
    },
    {
      title: 'Reports, certificate, and warnings',
      items: [
        'Laboratory, report number, sample identity, applicable standard, procedures, result, applicant, manufacturer, dates, photos, and amendment history',
        'CPC or GCC identity, tracking information where applicable, permanent product markings, prescribed warning label, assembly instructions, and anti-tip instructions',
      ],
    },
    {
      title: 'Bulk order and release control',
      items: [
        'Opened-carton coverage, structure and hardware revision checks, SKU and lot traceability, packing-list match, labels, manuals, anti-tip kits, carton marks, and sampled dimensions',
        'Affected quantity, segregation, approved correction, specialist or laboratory review, retest need, re-check result, payment hold, and pickup status',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why STURDY dresser evidence is a current China sourcing issue',
      paragraphs: [
        'The U.S. Consumer Product Safety Commission continues to publish actions against China-made wood and fabric dressers under the mandatory clothing-storage-unit standard. On July 16, 2026, CPSC announced the Wade Logan Annyka nine-drawer fabric dresser recall. Earlier 2026 actions covered Hasuit, EnHomee, UHOMEPRO, SOOWERY, Shintenchi, Furnulem, Rattan, YaFiti, and other China-linked models. This is a repeated product pattern, not one isolated listing.',
        'The evidence handoff is also more visible. CPSC mandatory certificate eFiling for most imported regulated consumer products took effect July 8, 2026, while CPSC guidance says clothing storage units require a CPC or GCC. A May 2026 testing-industry update also described Amazon Direct Validation for clothing storage units. Buyers therefore need the legal and laboratory plan, certificate data, marketplace evidence, production identity, and packed goods to stay aligned.',
      ],
      bullets: [
        'An anti-tip kit does not exempt a clothing storage unit from the applicable stability requirements',
        'A report for a similar dresser may not cover changed dimensions, mass, drawer geometry, frame, panels, top, feet, glides, interlock, counterweight, fasteners, or factory',
        'A warning label, marketplace approval, supplier declaration, or certificate title does not by itself prove the physical shipment matches the tested configuration',
        'Correction leverage is strongest while redesign, replacement, segregation, retesting, relabeling, rework, cancellation, or delayed pickup remains practical in China',
      ],
    },
    {
      id: 'product-scope',
      title: 'Is the exact dresser within clothing-storage-unit scope?',
      paragraphs: [
        'Start with intended use and the complete finished configuration. CPSC business guidance describes clothing storage units as free-standing furniture with drawers or hinged doors intended for clothing storage that also meets specified height, mass, and enclosed-volume thresholds. It expressly notes that qualifying fabric dressers can be in scope. Product names such as nightstand, organizer, accent cabinet, or fabric storage do not decide the question.',
        'The importer and qualified product-safety adviser should document the scope decision before testing or production release. The China-side task is to capture the actual intended use, dimensions, mass, storage geometry, drawer or door arrangement, construction, model, warnings, instructions, listing claims, and packaging so those facts can be compared with the approved scope and test file.',
      ],
      bullets: [
        'Record intended room and use, model, SKU, finished height, width, depth, mass, enclosed volume, extendible elements, doors, drawers, base or feet, and wall-attachment configuration',
        'Identify the manufacturer, importer, factory, frame or panel suppliers, hardware sources, production date, batch, and carton range',
        'Keep in-scope U.S. dressers separate from excluded products or destination variants in drawings, quotations, test files, assembly lines, labels, instructions, and cartons',
        'Reconfirm scope and testing after changes to intended use, dimensions, mass, storage volume, drawer or door layout, structure, materials, hardware, interlock, counterweight, anti-tip parts, supplier, factory, labels, or instructions',
      ],
    },
    {
      id: 'test-files',
      title: 'How should STURDY test reports and certificates match the order?',
      paragraphs: [
        'Use the qualified test plan and full controlled report as the reference. Compare the applicant, manufacturer, factory, model, finished dimensions, mass, storage volume, tested sample photos, construction, loading, extendible elements, doors, interlock status, counterweights, feet, hardware, warning label, anti-tip kit, applicable procedure, dates, results, and amendments with the purchase order and current production.',
        'Do not treat a certificate number or report cover as enough. CPSC guidance says manufacturers or importers of clothing storage units must issue a CPC for children\'s products or GCC for general-use products. The responsible importer should ensure the certificate identifies the actual product and applicable rule and that required eFiling data are ready for the entry. If production changed after testing, qualified parties should decide whether an engineering review, amended evidence, or new testing is required.',
      ],
      bullets: [
        'Keep the approved report, certificate, drawings, bill of materials, component schedule, warning artwork, instructions, anti-tip details, change assessments, and reference sample under revision control',
        'Check whether report photographs and identifiers match the dresser, drawers, frame or panels, top, feet, glides, stops, interlock, hardware, warnings, and kit now being produced',
        'Escalate missing pages, altered PDFs, unexplained model families, inconsistent applicants, mismatched factories, partial results, or reports outside the exact product scope',
        'Do not use factory push tests, supplier photos, weight, simple level checks, or wall anchoring as substitutes for applicable controlled stability testing',
      ],
    },
    {
      id: 'physical-checks',
      title: 'What can be checked on the physical dresser and packed order?',
      paragraphs: [
        'A China-side inspection can compare visible construction, buyer-approved dimensions, parts, labels, instructions, and pack-out without claiming the dresser passes the mandatory standard. The scope may include model and carton identity, overall geometry, drawer count and travel, doors, frame or panels, top, feet, glides, stops, interlock presence and observable operation, fasteners, brackets, anti-tip kit, warning location, assembly instructions, and carton segregation.',
        'Open cartons across the agreed sample and assemble units only under an approved sampling and assembly plan. When a mismatch appears, stop assuming it is isolated. Define the affected range, segregate stock, obtain approved correction instructions, and repeat the agreed checks after rework. Stability, abuse, and destructive tests stay with a competent laboratory operating the applicable method.',
      ],
      bullets: [
        'Compare physical samples with the tested-sample photos, golden sample, controlled drawings, bill of materials, hardware list, warning files, instructions, and approved destination pack-out',
        'Record measurements only where the buyer or specialist has supplied the feature, assembly condition, tool, method, tolerance, and decision rule',
        'Check cartons for mixed frames, panels, drawers, glides, feet, fasteners, interlocks, counterweights, brackets, anti-tip kits, warning labels, instructions, SKUs, or old revisions',
        'Photograph each sampled configuration and part set in context, and link every hold, correction, retest decision, and re-check result to the affected quantity and carton range',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Scope and exact configuration are confirmed',
      whatToConfirm: 'Qualified parties map intended use, dimensions, mass, volume, model, applicable rule, tests, certification, warnings, anti-tip requirements, and importer duties',
      buyerDecision: 'Continue, clarify scope, redesign, change the listing or configuration, obtain specialist review, or hold the order.',
    },
    {
      riskNode: 'Test evidence and certificate match production',
      whatToConfirm: 'Manufacturer, factory, model, geometry, materials, structure, hardware, interlock, tested sample, report, CPC or GCC, warnings, and revisions align',
      buyerDecision: 'Release after qualified approval, amend evidence, assess the change, retest, replace parts, or stop.',
    },
    {
      riskNode: 'Physical samples and cartons match',
      whatToConfirm: 'Sampled units use the approved structure, drawers or doors, frame or panels, feet, glides, stops, fasteners, interlock, labels, instructions, kit, and SKU pack-out',
      buyerDecision: 'Approve, expand inspection, segregate stock, rework, replace, or hold payment and pickup.',
    },
    {
      riskNode: 'Corrections are controlled',
      whatToConfirm: 'Affected quantities and cartons are identified, corrected to approved instructions, reviewed for retesting, documented, and re-checked without mixed old stock',
      buyerDecision: 'Release the cleared range, hold affected cartons, re-inspect, retest, or delay shipment.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'CPSC 2026 public recall records for Wade Logan Annyka, Hasuit, EnHomee, UHOMEPRO, SOOWERY, Shintenchi, Furnulem, Rattan, YaFiti, and other clothing storage units checked July 21, 2026 Beijing time.',
    'Current CPSC clothing-storage-unit business guidance covering scope, qualifying fabric dressers, stability tests, certificates, warning labels, anti-tip kits, imported-product dates, and scope limits.',
    'CPSC certificate and eFiling guidance used for the July 8, 2026 import-data change; STC reporting used only as secondary marketplace Direct Validation context.',
    'Buyer-approved scope decision, test plan, full report, certificate, drawings, bill of materials, warnings, instructions, golden sample, change records, packed goods, carton map, and correction evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Wade-Logan-Annyka-9-Drawer-Fabric-Dressers-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Tip-Over-and-Entrapment-Hazards-Violate-Mandatory-Standard-for-Clothing-Storage-Units-Imported-by-Ningbo-Jiangdong-Peter-International-Trading',
      label: 'CPSC - Wade Logan Annyka fabric dresser recall',
      note: 'Primary July 16, 2026 public case covering the China-made nine-drawer fabric dresser, mandatory-standard violation, instability hazard, model identification, sales period, and refund remedy.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/7-Drawer-Dressers-Recalled-Du-to-Risk-of-Serious-Injury-or-Death-from-Tip-Over-and-Entrapment-Hazards-Violate-Mandatory-Standard-for-Clothing-Storage-Units-Sold-on-Amazon-com-by-Hasuit-Direct',
      label: 'CPSC - Hasuit seven-drawer dresser recall',
      note: 'Independent June 11, 2026 official case showing the same mandatory-standard issue in a China-made wood dresser sold through Amazon.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/FAQ?p=3019&tid%5B3022%5D=3022&tid%5B3023%5D=3023&tid%5B3026%5D=3026&tid%5B3029%5D=3029&tid%5B3031%5D=3031&tid%5B3032%5D=3032&tid%5B3033%5D=3033&tid%5B3034%5D=3034&tid%5B3035%5D=3035&tid%5B3037%5D=3037',
      label: 'CPSC - clothing storage unit business guidance',
      note: 'Official current guidance on scope, fabric dressers, stability tests, CPC or GCC certification, warnings, anti-tip kits, standards, and imported products.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Certificates',
      label: 'CPSC - certificates of compliance and eFiling',
      note: 'Official current guidance on certificate content and the July 8, 2026 eFiling date for most imported regulated consumer products.',
    },
    {
      href: 'https://stc.group/en/media/detail/2357',
      label: 'STC - Amazon Direct Validation for clothing storage units',
      note: 'Secondary May 2026 testing-industry context describing phased Amazon Direct Validation requirements for clothing storage units.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/5-Drawer-Dressers-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Tip-Over-and-Entrapment-Hazards-Violates-Mandatory-Standard-for-Clothing-Storage-Units-Imported-by-UHOMEPRO',
      label: 'CPSC - UHOMEPRO five-drawer dresser recall',
      note: 'Additional April 30, 2026 official case showing repeated enforcement involving a China-made particle-board dresser sold through Walmart.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Product name, intended use, model, SKU, destination, finished dimensions, mass, enclosed storage volume, drawer or door count, order quantity, carton count, and production dates',
    'Manufacturer and importer details, factory and component suppliers, purchase order, controlled drawings, bill of materials, hardware list, assembly instructions, and golden sample',
    'Qualified scope and standard map, test plan, laboratory details, full report, CPC or GCC, eFiling preparation, engineering assessments, and change approvals',
    'Approved permanent markings, warning label, tracking information where applicable, anti-tip kit and instructions, model and batch coding, barcode, retail listing, and carton artwork',
    'Packing list, carton map, lot records, destination segregation, affected-quantity controls, correction instructions, retest decision, and re-check rules',
    'Balance-payment deadline, forwarder pickup date, factory contact, importer release authority, and clear rules for which mismatches block release',
  ],
  redFlags: [
    'The supplier offers one report for several dimensions, masses, drawer layouts, frame or panel systems, factories, models, or intended uses without a qualified family assessment',
    'Report photos, model, applicant, manufacturer, factory, dimensions, mass, structure, hardware, interlock, warnings, or kit do not match the production order',
    'The factory treats an anti-tip kit, wall anchor, warning label, marketplace approval, supplier declaration, or factory push test as a substitute for applicable controlled stability testing',
    'Sample cartons mix old and new frames, panels, drawer systems, feet, glides, stops, interlocks, counterweights, fasteners, brackets, labels, instructions, or anti-tip kits',
    'A generic CPC or GCC, partial report, test certificate, product photo, carton weight, or simple level check is presented as the main safety evidence',
    'The factory changes dimensions, mass, storage volume, drawers, doors, structure, material, hardware, interlock, factory, warning, instructions, or intended use after testing',
    'The correction plan has no affected quantity, segregation record, carton range, approved instruction, qualified review, retest decision, or repeat inspection',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible dresser construction, dimensions, parts, drawers, doors, hardware, labels, instructions, anti-tip kits, cartons, supplier files, and correction records with buyer-approved references in China',
    'Huang Sourcing does not decide legal scope, certify 16 CFR part 1261 or ASTM F2057 conformity, perform controlled stability or destructive tests, issue a CPC or GCC, validate eFiling, authenticate reports, or provide legal advice',
    'Visual inspection and simple measurements cannot prove stability, structural performance, interlock performance under the standard, material strength, durability, foreseeable-use safety, or market compliance',
    'Sampling cannot guarantee every unit outside the agreed scope, and sealed cartons, mixed lots, poor traceability, assembly variation, inaccessible construction, or restricted factory access reduce confidence',
    'The U.S. importer, manufacturer, CPSC-accepted laboratory where required, competent laboratory, product-safety specialist, marketplace team, customs broker, or counsel remains responsible for product-specific decisions',
    'Rules, accepted standard versions, certificate and eFiling instructions, platform requirements, and enforcement guidance can change; reconfirm time-sensitive instructions before testing, production, payment, listing, entry, and shipment',
  ],
  relatedLinks: [
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC inspection before balance payment',
      note: 'Connect construction, workmanship, quantity, packaging, evidence, and correction findings to a documented payment hold point.',
    },
    {
      href: preShipmentBeforePickupArticleHref,
      label: 'Pre-shipment inspection before forwarder pickup',
      note: 'Verify corrected stock, model identity, components, labels, instructions, kits, and cartons while the supplier still controls the goods.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Control model, warning, instruction, barcode, retail-pack, carton, and artwork revisions before final payment.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define the photos, model traceability, sampled measurements, mismatches, corrections, and scope limits the report should show.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related supplier, inspection, packaging, payment, and pickup decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Can a China-side inspection prove a dresser complies with STURDY?',
      answer: 'No. Inspection can compare visible construction, buyer-approved dimensions, parts, labels, instructions, and packed goods with approved references. Applicable controlled testing, certification, and the compliance decision remain with the importer and qualified parties.',
    },
    {
      question: 'Does including an anti-tip kit remove the stability-test requirement?',
      answer: 'No. Current CPSC guidance says a qualifying clothing storage unit must meet the applicable stability requirements without the anti-tip kit installed, even though the applicable anti-tip kit must also be packaged with the unit.',
    },
    {
      question: 'Can one dresser report cover a different size or drawer count?',
      answer: 'Do not assume it can. Disclose every difference to the importer, laboratory, and product-safety adviser. They should decide whether the tested evidence covers a model family or whether assessment, amendment, or new testing is required.',
    },
    {
      question: 'Does a fabric dresser fall outside the clothing-storage-unit rule?',
      answer: 'Not automatically. CPSC guidance says fabric dressers with drawers can be clothing storage units when they meet the defined intended-use, height, mass, and enclosed-volume criteria. A qualified product-specific scope decision is still needed.',
    },
    {
      question: 'Can Huang Sourcing issue a CPC, GCC, or STURDY approval?',
      answer: 'No. Huang Sourcing can compare China-side physical and document evidence with buyer-approved references. Legal classification, standard selection, testing, certification, eFiling, and market approval remain with responsible qualified parties.',
    },
  ] satisfies FaqItem[],
}

export function makeSturdyDresserChecksChinaArticleMetadata(): Metadata {
  const article = sturdyDresserChecksChinaArticle
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

export function makeSturdyDresserChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(sturdyDresserChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'STURDY dresser pre-shipment release checklist',
      itemListElement: sturdyDresserChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
