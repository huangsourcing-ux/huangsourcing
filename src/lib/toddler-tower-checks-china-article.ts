import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  preShipmentBeforePickupArticleHref,
  qcBeforeBalanceArticleHref,
  resourceGuideHref,
  toddlerTowerChecksChinaArticleHref,
} from '@/lib/site-links'

type ArticleSection = { bullets?: string[]; id: string; paragraphs: string[]; title: string }
type CheckGroup = { items: string[]; title: string }
type DecisionRow = { buyerDecision: string; evidence: string; riskNode: string }
type FaqItem = { answer: string; question: string }
type RelatedLink = { href: string; label: string; note: string }
type SourceNote = { href: string; label: string; note: string }

export const toddlerTowerChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: toddlerTowerChecksChinaArticleHref,
  title: 'Toddler Tower Checks Before Shipping from China',
  metaTitle: 'Toddler Tower Checks Before Shipping from China',
  metaDescription:
    'Check toddler tower stability evidence, platform and guard construction, fasteners, gaps, labels, lots, corrections, and cartons before shipping from China.',
  publishedDate: 'July 23, 2026',
  publishedDateIso: '2026-07-23T03:45:00+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Toddler Tower Checks Before Shipping from China',
  eyebrow: 'Standing tower evidence - production match - shipment release',
  image: {
    alt: 'Neutral illustrative quality-control setup with a generic wooden toddler learning tower, carton, fasteners, measuring tools, and blank checklist',
    height: 900,
    src: '/images/toddler-tower-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/toddler-tower-checks-china.webp', width: 1600 },
    { height: 1200, src: '/images/toddler-tower-checks-china-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/toddler-tower-checks-china-1x1.webp', width: 1200 },
  ],
  intro:
    'Before paying the balance or allowing pickup of a toddler tower order, connect a qualified product-safety plan to the exact factory, model, platform, guard structure, base, joints, fasteners, openings, labels, instructions, production lot, and packed cartons. Repeated 2026 U.S. recalls show that instability, collapse, tip-over, falls, and entrapment can arise from different design and production nodes.',
  answerSummary:
    'Do not release from a supplier photo, generic test cover, marketplace listing, or one assembled sample. Have the importer and qualified laboratory define the product-specific tests and applicable rules, then inspect whether sampled production and cartons match the approved construction and evidence. Hold, segregate, correct, retest, or re-inspect when the platform, guard, stabilizer, joint, opening, fastener, model, lot, warning, instruction, or repair status is unresolved.',
  primaryCta: { label: 'Check Toddler Tower Shipment' },
  secondaryCta: { href: '#release-checklist', label: 'See Release Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side toddler tower evidence and shipment check before final payment or pickup.

Product / model / SKU count:
U.S. importer or marketplace:
Supplier / factory location:
Approved drawings and bill of materials:
Test plan and reports available:
Order and carton quantity:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#product-plan', label: 'Product and test plan' },
    { href: '#construction-match', label: 'Construction match' },
    { href: '#production-check', label: 'Production and pack-out' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Define the exact intended user, age and weight claims, use environment, model, SKU, dimensions, platform settings, materials, folding or fixed configuration, destination, and sales listing',
    'Ask the importer, product-safety specialist, and qualified laboratory to map the applicable rules and a product-specific test plan instead of assuming a toddler-tower category standard already applies',
    'Tie the full reports and any required certificate to the same manufacturer, factory, model, drawings, materials, platform, guard structure, base, joints, fasteners, finishes, labels, and production version',
    'Compare sampled goods with approved drawings, bill of materials, golden sample, assembly method, hardware schedule, warnings, instructions, packaging, and controlled change record',
    'Check platform retention, guard and crossbar attachment, fastener engagement, observable joint security, feet and stabilizers, sharp or accessible edges, openings, workmanship, model and lot markings, and carton completeness',
    'Keep inspection observations separate from controlled tip-over, stability, dynamic, structural, durability, opening, entrapment, material, coating, chemical, and foreseeable-use testing',
    'Map every mismatch or repair to affected models, lots, cartons, quantities, correction instructions, qualified review, retest decision, and re-inspection result',
    'Release only when the responsible importer accepts the technical evidence and the cleared physical shipment matches the approved version',
  ],
  checkGroups: [
    {
      title: 'User, model, and intended use',
      items: [
        'Intended age, weight and height claims, supervision statement, kitchen or counter use, climbing and convertible features, folding state, platform positions, accessories, model, SKU, and destination',
        'Qualified legal and standards map, hazard analysis, laboratory test plan, certificate decision, warning plan, instruction owner, marketplace requirements, and release authority',
      ],
    },
    {
      title: 'Approved construction identity',
      items: [
        'Overall geometry, footprint, feet or stabilizers, frame, platform, steps, guards, rails, crossbars, hinges, locks, stops, slots, openings, hardware, finishes, and bill-of-material references',
        'Manufacturer, factory, model code, controlled drawings, tested sample, golden sample, material and hardware suppliers, change history, production dates, lots, and carton range',
      ],
    },
    {
      title: 'Reports, labels, and instructions',
      items: [
        'Laboratory, report number, sample identity, procedures, loads, setup, results, applicant, manufacturer, factory, dates, photos, limitations, and amendment history',
        'Any applicable CPC data, tracking information, model and date codes, warnings, age and weight claims, assembly sequence, torque or fastening instructions, use limits, maintenance, and repair status',
      ],
    },
    {
      title: 'Bulk order and release control',
      items: [
        'Opened-carton coverage, assembly sample, platform and guard retention, joints, fasteners, feet, stabilizers, observable gaps, labels, manuals, parts, model and lot identity, and destination segregation',
        'Affected quantity, stock isolation, approved correction, qualified or laboratory review, retest need, repeat inspection, documented clearance, payment hold, and pickup status',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why toddler tower evidence is a current China sourcing issue',
      paragraphs: [
        'CPSC announced two toddler-tower recalls on July 16, 2026. The Boon PIVOT action covered 116,908 China-made units after 11 reports of instability, shifting, or leaning. The SDADI action covered 5,952 China-made wooden towers that CPSC said could collapse or tip and had openings that could permit torso entrapment; the firm had eight instability or tip-over reports and four reported injuries. Those actions followed April recalls and a May 14 Guidecraft recall covering 25,235 China-made towers whose platforms could loosen, become unstable, or detach.',
        'The standards picture is still developing. A CPSC meeting log filed May 19, 2026 says the ASTM F15.59 task group discussed recent instability, collapse, and entrapment recalls while continuing a draft standing-tower standard. Consumer Reports likewise reported that no category-specific rule or safety standard applied when it tested the category in 2025. Buyers therefore need a qualified, current, product-specific test and certification map rather than a supplier claim that one generic toddler-tower certificate settles every configuration.',
      ],
      bullets: [
        'The recalled products used different materials and configurations, so one visible feature or one repair type does not explain the whole category',
        'Recent public cases point to platform retention, base stability, folding or locking parts, guards, openings, fasteners, model and lot identity, and correction control as separate evidence nodes',
        'CPSC eFiling began July 8, 2026 for imported regulated products that require certificates; it changes certificate-data transmission, not which products or rules require certification',
        'Correction leverage is strongest before mixed revisions, loose platforms, wrong hardware, missing stabilizers, old labels, or incomplete repairs leave the factory',
      ],
    },
    {
      id: 'product-plan',
      title: 'What product and test plan should be approved before production release?',
      paragraphs: [
        'Start from use, not the supplier category name. Record the intended age and weight range, user access, platform positions, footprint, counter-contact assumptions, fixed or folding state, convertible functions, steps, guards, openings, materials, finish, accessories, warnings, instructions, listing claims, destination, model, and SKU. The responsible importer and qualified adviser should decide which federal and state requirements, children-product rules, material or coating limits, tracking and certificate obligations, and voluntary methods apply.',
        'The laboratory plan should address the actual hazard map and approved construction. That may include stability or tip-over, platform and guard retention, structural or dynamic loading, durability, folding and locking behavior, accessible openings, entrapment, edges and points, fasteners, materials, coatings, chemical limits, labels, and foreseeable use. Huang Sourcing does not select those methods or acceptance criteria; it can use the approved plan and references to verify shipment identity and visible production match.',
      ],
      bullets: [
        'Do not borrow a high-chair, step-stool, furniture, toy, or another supplier model report without a qualified scope and family assessment',
        'Require the full controlled report and sample photos, not only a cover page, certificate title, marketplace badge, or supplier spreadsheet',
        'Name the importer, manufacturer, factory, model, materials, dimensions, platform settings, hardware, intended user, and production version in the evidence map',
        'Reassess after changes to geometry, platform, rails, guards, openings, feet, stabilizers, hinges, locks, fasteners, materials, finish, factory, warnings, instructions, or age and weight claims',
      ],
    },
    {
      id: 'construction-match',
      title: 'How should test evidence match the actual tower?',
      paragraphs: [
        'Compare the tested-sample photos and full report with the purchase order, approved drawings, bill of materials, hardware list, assembly instructions, golden sample, and current production. Check the base footprint, feet or stabilizers, frame section, platform and adjustment system, step, guard and crossbar geometry, hinges or locks, slots and openings, fastener type and length, inserts, washers, nuts, coatings, labels, model codes, and factory identity.',
        'Do not assume a similar-looking tower is covered. A wider base, repair brace, locking pin, platform insert, different screw, wood species, panel thickness, rail attachment, mesh cover, or opening change can alter the evidence needed. When production differs from the tested sample, isolate the affected stock and send the exact difference to the importer, engineer, and laboratory for a documented review before deciding whether correction, amended evidence, or retesting is needed.',
      ],
      bullets: [
        'Trace each platform, rail, guard, brace, stabilizer, hinge, lock, fastener, insert, tool, label, and instruction revision to the approved model and lot',
        'Check whether report photographs, dimensions, materials, hardware, applicant, manufacturer, and factory match the order instead of relying on the report title',
        'Control supplied repair parts and instructions as their own revision, with affected serial, date-code, model, lot, and carton ranges',
        'Treat unexplained report families, missing pages, altered PDFs, inconsistent model codes, mixed factories, partial results, or supplier-written conclusions as release blockers',
      ],
    },
    {
      id: 'production-check',
      title: 'What can be checked on production towers and cartons?',
      paragraphs: [
        'A China-side inspection can compare sampled units and components with approved references. The scope can include model and lot markings, buyer-approved dimensions, footprint, platform positions and retention, observable guard and crossbar attachment, fastener presence and engagement, feet and stabilizers, folding or locking function, workmanship, accessible edges, visible openings, surface finish, labels, warnings, instructions, tools, spare parts, packaging, carton marks, and destination segregation.',
        'The approved sampling and assembly plan should define which cartons to open, which units to assemble, the sequence and tools to use, any torque or simple measurement method, and which mismatches trigger a hold. Inspection is not a substitute for controlled stability, structural, durability, entrapment, chemical, or foreseeable-use testing. When a mismatch appears, define the affected range, segregate stock, approve the correction, obtain a retest decision where necessary, and repeat the agreed checks before release.',
      ],
      bullets: [
        'Open cartons across models, production dates, lots, pallet positions, and destination variants instead of checking only the easiest top cartons',
        'Photograph the assembled configuration, underside of the platform, joints, guards, rails, feet, stabilizers, hinges, locks, hardware, labels, instructions, and carton identity in context',
        'Flag stripped threads, missing or short fasteners, loose inserts, split wood, warped panels, incomplete locks, unstable feet, mixed openings, wrong platform parts, missing stabilizers, old warnings, or mixed repairs',
        'Link every hold, correction, specialist review, retest decision, rework, and re-inspection result to affected quantities and cartons',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product and test plan are defined',
      evidence: 'Qualified parties map intended user, configuration, hazards, rules, tests, certificate needs, labels, instructions, and importer duties for the exact model',
      buyerDecision: 'Proceed to controlled production, or hold the order until scope and test gaps are resolved.',
    },
    {
      riskNode: 'Reports match the approved construction',
      evidence: 'Full reports, sample photos, drawings, materials, platform, guards, openings, stabilizers, hardware, factory, model, and any certificate describe the same version',
      buyerDecision: 'Continue release review, or hold for qualified assessment, correction, evidence amendment, or retesting.',
    },
    {
      riskNode: 'Sampled production matches',
      evidence: 'Opened cartons and assembled samples match approved parts, joints, platform, rails, guards, feet, fasteners, labels, instructions, model, lot, and pack-out',
      buyerDecision: 'Release the cleared lot, or isolate and correct affected models and cartons before payment or pickup.',
    },
    {
      riskNode: 'Corrections are controlled',
      evidence: 'Affected quantities, lots, cartons, repair parts, instructions, qualified review, retest need, rework, and repeat inspection are documented without mixed old stock',
      buyerDecision: 'Release only the cleared range; otherwise rework, retest, re-inspect, delay pickup, or cancel.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'CPSC public recall records for TOMY Boon PIVOT, SDADI, Guidecraft, Little Partners, and other standing or toddler towers, checked July 23, 2026 Beijing time.',
    'CPSC May 2026 ASTM F15.59 task-group meeting log covering recent instability, collapse, and entrapment recalls and continued development of a draft standing-tower standard.',
    'Consumer Reports toddler-tower testing report used as independent category and standards-gap context, not as a substitute for official findings or a buyer-specific laboratory plan.',
    'Current CPSC CPC and eFiling guidance used only for products and rules that qualified parties determine require a certificate; eFiling is not presented as a new category standard.',
    'Buyer-approved hazard analysis, test plan, reports, drawings, bill of materials, hardware list, labels, instructions, reference sample, lot map, packed goods, and correction evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Recalls/2026/TOMY-Recalls-Boon-PIVOT-Collapsible-Toddler-Tower-Kitchen-Step-Stools-Due-to-Risk-of-Serious-Injury-and-Death-from-Tip-Over-and-Fall-Hazards',
      label: 'CPSC - TOMY Boon PIVOT toddler tower recall',
      note: 'Primary July 16, 2026 public case covering 116,908 China-made units, instability reports, model identity, warning-label location, and a stabilizing repair-part remedy.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/SDADI-Kitchen-Step-Stools-Recalled-Due-to-Risk-of-Serious-Injury-and-Death-from-Entrapment-and-Fall-Hazards-Imported-by-Yiwushi-Bihe-Trading',
      label: 'CPSC - SDADI kitchen step stool recall',
      note: 'Independent same-day official case covering collapse, tip-over and entrapment hazards, two models, China manufacture, eight incident reports, and four reported injuries.',
    },
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Guidecraft-Childrens-Standing-Towers-Recalled-Due-to-Risk-of-Serious-Injury-from-Fall-Hazard',
      label: 'CPSC - Guidecraft standing tower recall',
      note: 'Primary May 14, 2026 case covering a platform that could loosen or detach, model and lot labels, 25,235 China-made units, 11 fall reports, and three reported injuries.',
    },
    {
      href: 'https://www.cpsc.gov/s3fs-public/0507026-ASTM-F1559-Childrens-Step-Stools-and-Standing-Towers-Task-Group-Meeting-Log-pdf.pdf?VersionId=r7m9edy1Fi9g2brYBCcUzID6G0MAN5Nd',
      label: 'CPSC - May 2026 ASTM standing tower meeting log',
      note: 'Official meeting record confirming continued draft-standard work and discussion of recent instability, collapse, entrapment, and mesh-opening issues.',
    },
    {
      href: 'https://reprints.theygsgroup.com/cr/reprints/CR_ToddlerTowerTesting.pdf',
      label: 'Consumer Reports - toddler tower testing report',
      note: 'Independent testing and category context describing reported tip-over, collapse, fastener, opening, and entrapment concerns and the standards gap at publication.',
    },
    {
      href: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/CPSC-Implements-Mandatory-eFiling-for-Certificates-of-Compliance-Targeting-Dangerous-Foreign-Imports',
      label: 'CPSC - July 8, 2026 certificate eFiling launch',
      note: 'Official current source clarifying that regulated imported products requiring certificates must submit certificate data electronically and that eFiling creates no new testing or certification obligations.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Product name, intended user, age and weight claims, use environment, model, SKU, configuration, dimensions, materials, platform settings, order quantity, carton count, production dates, lots, and destination',
    'Manufacturer, importer, factory and component suppliers, purchase order, controlled drawings, bill of materials, hardware schedule, assembly instructions, warnings, labels, listing claims, and golden sample',
    'Qualified legal and standards map, hazard analysis, laboratory test plan, full reports, applicable CPC and eFiling preparation, engineering assessments, family rationale, and change approvals',
    'Approved platform, guard, crossbar, feet, stabilizer, hinge, lock, fastener, finish, tool, spare-part, model-code, date-code, tracking, warning, and instruction revisions',
    'Packing list, carton map, lot records, destination segregation, repair or rework records, affected-quantity controls, retest decision, and repeat-inspection rules',
    'Balance-payment deadline, pickup date, factory contact, importer release owner, and written rules for which findings block release',
  ],
  redFlags: [
    'The supplier offers one report for multiple footprints, platform systems, guard designs, openings, folding mechanisms, materials, factories, ages, or weight claims without qualified family rationale',
    'Report photos, model, applicant, manufacturer, factory, dimensions, platform, guards, rails, feet, stabilizers, joints, hardware, warnings, or instructions do not match production',
    'A marketplace listing, generic certificate, supplier declaration, one sample photo, factory push test, or carton label is presented as the complete safety evidence',
    'Sample cartons mix old and new platforms, guards, crossbars, feet, stabilizers, hinges, locks, fasteners, labels, instructions, models, lots, or repair parts',
    'Platforms, guards, rails, fasteners, inserts, feet, stabilizers, locks, or joints are loose, incomplete, damaged, inconsistent, or assembled differently from approved references',
    'The factory changes geometry, materials, openings, hardware, finish, supplier, factory, age or weight claims, labels, or instructions after testing without documented qualified review',
    'The correction plan has no affected quantity, lot and carton isolation, approved instruction, qualified review, retest decision, or repeat inspection evidence',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible construction, buyer-approved dimensions, platforms, guards, joints, feet, stabilizers, fasteners, labels, instructions, cartons, supplier files, and corrections with approved references in China',
    'Huang Sourcing does not decide legal classification or applicable standards, design the safety test plan, perform controlled laboratory testing, issue a CPC, validate eFiling, certify conformity, approve market entry, or provide legal advice',
    'Visual inspection and simple measurements cannot prove tip-over resistance, structural or dynamic performance, durability, entrapment safety, material or coating safety, chemical limits, child behavior, or foreseeable-use safety',
    'Sampling cannot guarantee every unit, and sealed cartons, mixed lots, poor traceability, assembly variation, inaccessible joints, or restricted factory access reduce confidence',
    'The importer, manufacturer, engineer, CPSC-accepted laboratory where required, qualified product-safety specialist, marketplace team, broker, or counsel remains responsible for product-specific decisions',
    'Draft standards, adopted rules, laboratory methods, certificate instructions, marketplace requirements, and enforcement guidance can change; reconfirm current requirements before testing, production, payment, entry, and shipment',
  ],
  relatedLinks: [
    {
      href: qcBeforeBalanceArticleHref,
      label: 'QC inspection before balance payment',
      note: 'Connect construction, workmanship, quantity, packaging, evidence, corrections, and unresolved risks to a documented payment decision.',
    },
    {
      href: preShipmentBeforePickupArticleHref,
      label: 'Pre-shipment inspection before forwarder pickup',
      note: 'Verify cleared models, lots, repairs, components, labels, instructions, and cartons while the supplier still controls the goods.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Control warning, instruction, model, date-code, barcode, retail-pack, spare-part, and carton revisions before release.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define the photos, model and lot traceability, assembly evidence, sampled measurements, mismatches, corrections, and limits the report should show.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related inspection, packaging, payment, pickup, evidence, and supplier-risk decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Can a China-side inspection prove a toddler tower is safe or compliant?',
      answer: 'No. Inspection can compare visible construction, approved dimensions, parts, labels, instructions, lots, and cartons with controlled references. Product classification, testing, certification, and market decisions remain with the importer and qualified parties.',
    },
    {
      question: 'Is there a current U.S. category-specific toddler tower standard?',
      answer: 'The cited May 2026 CPSC meeting log describes ASTM work on a draft standing-tower standard, and Consumer Reports described a category-specific standards gap at publication. The importer should obtain a current qualified rule and test-plan decision rather than rely on this article for legal scope.',
    },
    {
      question: 'Can one test report cover several tower models?',
      answer: 'Do not assume it can. Disclose every difference in dimensions, platform, guards, openings, feet, stabilizers, folding parts, hardware, materials, factory, age and weight claims, labels, and instructions. Qualified parties should decide whether a family rationale is valid or new assessment or testing is needed.',
    },
    {
      question: 'Should a repaired lot be released after supplier photos?',
      answer: 'Supplier photos alone do not establish affected quantity, repair completeness, mixed-stock control, or repeat performance. Map the correction to models, lots and cartons, obtain the qualified retest decision, and re-inspect the agreed sample before release.',
    },
    {
      question: 'Can Huang Sourcing issue a CPC or approve CPSC eFiling?',
      answer: 'No. Huang Sourcing can compare China-side physical and document evidence with buyer-approved references. Certificate scope, testing, issuance, eFiling, customs entry, and legal compliance remain with responsible qualified parties.',
    },
  ] satisfies FaqItem[],
}

export function makeToddlerTowerChecksChinaArticleMetadata(): Metadata {
  const article = toddlerTowerChecksChinaArticle
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

export function makeToddlerTowerChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(toddlerTowerChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Toddler tower pre-shipment release checklist',
      itemListElement: toddlerTowerChecksChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
