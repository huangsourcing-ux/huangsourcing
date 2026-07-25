import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  cpscEfilingChinaImportsArticleHref,
  infantNeckFloatChecksChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
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

type FaqItem = {
  answer: string
  question: string
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

export const infantNeckFloatChecksChinaArticle = {
  author: 'editorial-team' as const,
  href: infantNeckFloatChecksChinaArticleHref,
  title: 'Infant Neck Float Checks Before Shipping from China',
  metaTitle: 'Infant Neck Float Checks Before China Shipment',
  metaDescription:
    'Check infant neck float scope, laboratory evidence, buoyancy, restraint, neck opening, warnings, CPC data, packaging, and cartons before China shipment.',
  publishedDate: 'July 26, 2026',
  publishedDateIso: '2026-07-26T03:30:00+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'Infant Neck Float Checks Before Shipping from China',
  eyebrow: '16 CFR 1250.5 - performance evidence - shipment release',
  image: {
    alt: 'Neutral illustrative China-side infant neck float inspection with a generic float, caliper, test checklist, packaging, and export carton',
    height: 900,
    src: '/images/infant-neck-float-checks-china.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/infant-neck-float-checks-china.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/infant-neck-float-checks-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/infant-neck-float-checks-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'For U.S.-bound infant neck floats manufactured after June 15, 2026, final payment and pickup should wait until qualified rule scope, CPSC-accepted laboratory evidence, Children’s Product Certificate data, approved warnings, and the physical production order all identify the same product and version.',
  answerSummary:
    'Use two connected release gates. A qualified compliance adviser and CPSC-accepted laboratory should decide scope, test methods, sample coverage, certification, and warnings. A China-side check can then compare those approved references with the actual float, valves, restraint system, labels, instructions, retail packs, lots, and cartons. Hold release when either gate is incomplete.',
  primaryCta: {
    label: 'Check Neck Float Orders Before Shipment',
  },
  secondaryCta: {
    href: '#release-checklist',
    label: 'See Release Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side infant neck float evidence check before shipment.

Product / SKU count:
Recommended age and weight range:
U.S. importer or marketplace:
Supplier / factory location:
Approved warnings and instructions:
Test reports and CPC draft:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#release-checklist', label: 'Release checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#rule-scope', label: 'Scope and identity' },
    { href: '#performance-evidence', label: 'Performance evidence' },
    { href: '#warnings-packout', label: 'Warnings and pack-out' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Confirm that the exact product is a neck float within 16 CFR 1250.5 and not a different aquatic toy or a U.S. Coast Guard-regulated lifesaving device',
    'Record the product construction, inflatable or inherently buoyant components, valves, restraint system, neck opening, recommended age and weight, model, SKU, lot, and factory',
    'Obtain a qualified test plan and current CPSC-accepted third-party laboratory evidence for every applicable performance and children’s-product requirement',
    'Tie the laboratory sample, report, CPC citation, manufacturer, materials, construction, age and weight range, production version, and lot together',
    'Compare the approved product warning, packaging warning, instructions, fit guidance, leak-test directions, age and weight information, and final artwork with physical stock',
    'Open sampled cartons when scoped to detect substituted valves, changed buckles, mixed revisions, missing instructions, old packaging, or unapproved models',
    'Separate visible product and document matching from controlled testing; an inspector cannot reproduce or certify buoyancy, conditioning, restraint, or neck-opening performance',
    'Hold payment or pickup until affected stock is segregated, corrections follow qualified instructions, and re-test or re-check evidence is complete',
  ],
  checkGroups: [
    {
      title: 'Product and rule scope',
      items: [
        'Intended use, aquatic setting, age and weight range, inflatable or non-inflatable design, neck-support function, model, SKU, lot, and U.S. sales presentation',
        'Qualified decision on 16 CFR 1250.5, other toy requirements, third-party testing, CPC certification, eFiling, and any excluded product category',
      ],
    },
    {
      title: 'Performance evidence',
      items: [
        'CPSC-accepted laboratory, finished sample identity, conditioning, buoyancy, restraint-system, neck-opening, result, report date, and test-scope details',
        'Change control for film, foam, valve, seam, chamber, buckle, strap, attachment point, neck geometry, construction, supplier, and production location',
      ],
    },
    {
      title: 'Warnings and instructions',
      items: [
        'Approved warning content and format on the product and packaging, plus instructions covering fit, age and weight, assembly, use, maintenance, and leak checking',
        'Physical product print, label, package, manual, barcode, model, batch or date code, importer information, and artwork revision match',
      ],
    },
    {
      title: 'Bulk and release evidence',
      items: [
        'Opened-carton coverage, sampled SKU and lot traceability, valve and restraint revision checks, mixed-version detection, packing-list match, and correction records',
        'Affected quantity, segregation, qualified correction instruction, re-test or re-check result, importer approval, payment hold, and pickup status',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why infant neck float evidence is a current China sourcing issue',
      paragraphs: [
        'CPSC’s first mandatory federal safety standard for neck floats took effect on June 15, 2026 and applies to products manufactured after that date. The rule adds product-specific conditioning, buoyancy, restraint-system, neck-opening, warning, and instruction requirements to the existing toy framework.',
        'A narrow testing-and-certification extension does not postpone product compliance. CPSC’s May 2026 notice says eligible manufacturers or importers that submit a finished-product sample to the Commission may receive until August 16, 2026 for testing and certification to the new neck-float rule. All other requirements remain applicable from June 15, and other children’s-product testing and certification duties still apply.',
        'Current attention is not limited to one U.S. rule. In June 2026, UK OPSS recalled China-origin baby neck floats sold through TikTok over drowning and other serious-harm concerns. UK law does not determine U.S. compliance, but the record is a separate current signal that product identity, design, warnings, and destination-specific evidence need to be controlled before shipment.',
      ],
      bullets: [
        'A supplier statement that the float is tested or safe does not establish compliance with 16 CFR 1250.5',
        'A report for one valve, buckle, seam, material, neck opening, factory, or age range may not cover a changed production version',
        'Approved warning artwork in a PDF does not show that the required product, package, and instructions use the same final version',
        'Correction leverage is strongest while retesting, segregation, redesign, relabeling, cancellation, or delayed pickup remains practical in China',
      ],
    },
    {
      id: 'rule-scope',
      title: 'Which neck float and production version are being released?',
      paragraphs: [
        'Start with the legal product definition and the actual sales configuration. The published final rule describes a neck float as an article, inflatable or not, that encircles the neck, supports the child by being secured around the neck, is used for play in water, and is intended for children up to and including four years old. CPSC separately excludes lifesaving flotation devices regulated by the U.S. Coast Guard.',
        'The importer, qualified compliance adviser, laboratory, or counsel should decide classification and every applicable rule. The China-side evidence task is narrower: document what the factory made and packed, then compare it with the exact design, test sample, CPC, warning, instruction file, and lot the qualified parties approved.',
      ],
      bullets: [
        'Record exact product name, model, SKU, intended aquatic use, recommended user age and weight, sales listing, package claims, and destination',
        'Record inflatable chambers or buoyant material, film or foam, seams, valves, restraint system, neck-opening geometry, attachment points, supplier, factory, production date, and lot',
        'Identify every size, color, material, buckle, valve, package, and model variation included in the order and how each is covered by testing',
        'Reconfirm scope after any design, material, component, supplier, factory, age or weight range, warning, instruction, or marketing change',
      ],
    },
    {
      id: 'performance-evidence',
      title: 'What performance evidence should buyers connect to the order?',
      paragraphs: [
        'The current rule covers more than a visual leak check. It includes thermal, chlorinated-saltwater, and ultraviolet conditioning before performance testing; minimum buoyancy; restraint release and integrity requirements; and a dynamic neck-opening test using specified probes and age-based conditions. These are controlled laboratory determinations.',
        'Ask the qualified laboratory or adviser to confirm the applicable finished-product sample plan, test scope, results, and family or variation logic. Then compare report identifiers with the order: applicant, manufacturer, factory, model, recommended age and weight, construction, valves, restraint system, neck opening, materials, dates, sample photos, and production version should not drift across files.',
      ],
      bullets: [
        'Verify that the laboratory is CPSC-accepted for 16 CFR 1250.5 when third-party testing to the new rule is required',
        'Keep the tested finished sample or controlled reference tied to the final bill of materials, approved drawings, SKU, lot, warning, instructions, and CPC data',
        'Escalate a changed film, foam, chamber, valve, seam, buckle, strap, attachment, neck geometry, supplier, factory, or recommended-user range before release',
        'Do not use a factory leak demonstration, inflation photo, caliper check, pull test, generic toy report, or supplier certificate as a substitute for the specified laboratory work',
      ],
    },
    {
      id: 'warnings-packout',
      title: 'How should warnings, instructions, and physical pack-out be checked?',
      paragraphs: [
        'Use importer-approved files as the reference, then inspect the complete physical sales configuration. The rule requires warnings on the neck float and packaging and requires instructional literature with the applicable warning, fit guidance, and assembly, installation, maintenance, cleaning, and use information. Inflatable products also need clear directions for checking for leaks.',
        'Photograph each required surface in context. Open cartons across the agreed sample to look for old warnings, missing instructions, changed age or weight ranges, mixed valves or buckles, substituted models, unreadable print, inconsistent identifiers, and rework that did not reach all affected units.',
      ],
      bullets: [
        'Compare warning wording, hierarchy, contrast, permanence, placement, and product or package coverage with the approved reference',
        'Compare the instructions, age and weight range, fit guidance, leak-check directions, model, barcode, importer details, and lot or date code with the physical float',
        'Trace every inspected unit and retail pack to its SKU, lot, carton, packing-list line, test report, CPC record, and artwork revision',
        'Repeat the agreed inspection after correction; one photo of one corrected float does not establish that the affected bulk order was corrected',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Scope and product identity are confirmed',
      whatToConfirm:
        'Qualified parties map the intended use, age and weight range, product category, performance tests, warnings, CPC, eFiling, and other applicable duties',
      buyerDecision:
        'Continue the check, seek specialist clarification, change the product plan, or hold release.',
    },
    {
      riskNode: 'Performance evidence matches production',
      whatToConfirm:
        'Lab, sample, manufacturer, factory, construction, valves, restraint, neck opening, age and weight range, result, SKU, lot, and CPC data align',
      buyerDecision:
        'Release after qualified approval, obtain corrected evidence, test the changed version, redesign, or stop the order.',
    },
    {
      riskNode: 'Warnings and instructions match stock',
      whatToConfirm:
        'The physical float, packaging, instructions, fit guidance, leak directions, identifiers, and recommended-user information use the approved version',
      buyerDecision:
        'Approve, relabel, replace instructions, segregate old stock, expand inspection, or hold pickup.',
    },
    {
      riskNode: 'Corrections are controlled',
      whatToConfirm:
        'Affected quantities are identified, corrected to qualified instructions, documented by lot and carton, retested when required, and re-checked',
      buyerDecision:
        'Release the cleared range, hold affected cartons, re-inspect, retest, or delay final payment and pickup.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official CPSC neck-float business guidance, June 2026 effective-date announcement, published 16 CFR 1250.5 final rule, testing-extension notice, and Otteroo warning checked July 26, 2026 Beijing time.',
    'The UK OPSS June 2026 baby neck-float recall and American Academy of Pediatrics consumer guidance used as independent current product-risk context, not as U.S. conformity approval.',
    'Buyer-approved product classification, recommended age and weight, specifications, test plan, finished-sample reports, CPC draft, warning and instruction artwork, change records, and release rules.',
    'Physical floats, chambers, valves, seams, restraint components, labels, instructions, retail packs, cartons, lots, and correction evidence observed in China.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Neck-Floats-Business-Guidance',
      label: 'CPSC - Neck Floats Business Guidance',
      note: 'Primary business guidance for 16 CFR 1250.5 scope, conditioning, buoyancy, restraint, neck-opening, labeling, CPC citation, and the limited testing extension.',
    },
    {
      href: 'https://www.federalregister.gov/documents/full_text/html/2025/12/15/2025-22827.html',
      label: 'Federal Register - 16 CFR 1250.5 final rule',
      note: 'Published final rule text for product definition, performance methods, product and packaging warnings, instructions, and prohibited stockpiling.',
    },
    {
      href: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/As-CPSCs-First-Federal-Neck-Floats-Safety-Standard-Takes-Effect-Agency-Renews-Do-Not-Use-Warnings-for-Otteroo-LUMI-and-MINI-nfant-Neck-Floats',
      label: 'CPSC - 2026 neck-float standard announcement',
      note: 'Official June 15, 2026 announcement confirming applicability to later-manufactured products, the hazard patterns addressed, incident context, and renewed Otteroo warning.',
    },
    {
      href: 'https://www.govinfo.gov/content/pkg/FR-2026-05-19/pdf/2026-09977.pdf',
      label: 'Federal Register - limited testing and certification extension',
      note: 'Official notice allowing eligible applicants that submit a finished sample until August 16, 2026 for testing and certification to the new rule while leaving all other rule requirements effective June 15.',
    },
    {
      href: 'https://www.cpsc.gov/Warnings/2023/CPSC-Warning-Stop-Using-Otteroo-LUMI-and-MINI-Infant-Flotation-Rings-Due-to-Drowning-Hazard-One-Infant-Death-Reported',
      label: 'CPSC - Otteroo LUMI and MINI infant flotation-ring warning',
      note: 'Primary public case documenting CPSC findings, reported incidents, the firm response, the absence of an agreed recall, and the stop-use warning renewed in June 2026.',
    },
    {
      href: 'https://www.gov.uk/product-safety-alerts-reports-recalls/product-recall-baby-neck-floats-sold-via-tiktok-2606-0175',
      label: 'UK OPSS - 2026 baby neck-float recall',
      note: 'Independent official incident record for China-origin baby neck floats recalled from end users; UK requirements do not define U.S. compliance.',
    },
    {
      href: 'https://www.healthychildren.org/English/tips-tools/ask-the-pediatrician/Pages/are-baby-neck-floats-safe-to-use-in-the-tub-or-pool.aspx',
      label: 'HealthyChildren.org - American Academy of Pediatrics guidance',
      note: 'Independent May 2026 consumer-risk context on slip-through, deflation, airway positioning, supervision, and the limits of the new product standard.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Product name, model, SKU, intended aquatic use, recommended age and weight range, sales listing, order quantity, carton count, production date, lots, and U.S. sales configuration',
    'Construction drawings, bill of materials, inflatable-chamber or buoyant-material details, film or foam, seams, valves, restraint components, attachment points, neck geometry, and component suppliers',
    'Importer or adviser scope decision, applicable-rule map, CPSC-accepted laboratory details, finished-sample test request, complete reports, CPC draft, and variation or change assessment',
    'Approved product warning, packaging warning, instructions, fit and leak-check guidance, labels, model and lot coding, barcode, importer information, and artwork revisions',
    'Packing list, carton map, production and lot records, controlled reference sample, affected-quantity controls, correction instructions, retest decisions, and re-check rules',
    'Payment deadline, pickup date, factory contact, importer release authority, and clear rules for which evidence gaps or mismatches block release',
  ],
  redFlags: [
    'The supplier calls the product a swim trainer, therapy aid, baby spa ring, toy, or lifesaving device without a qualified U.S. scope decision',
    'The laboratory report cannot be tied to the exact finished design, factory, construction, valve, restraint, neck opening, age and weight range, SKU, and lot',
    'The supplier uses an inflation photo, leak check, caliper reading, simple buckle pull, generic toy report, or declaration as the main performance evidence',
    'Warnings or instructions are missing, unreadable, inconsistent, contradicted by marketing, or absent from the physical product, package, or manual where required',
    'Cartons mix old and new chambers, valves, buckles, straps, age ranges, warnings, instructions, models, packages, or untraceable lots',
    'The factory changes the film, foam, seam, valve, chamber, restraint, neck geometry, component supplier, factory, warning, instruction, or recommended user after testing',
    'The correction plan has no affected quantity, segregation record, carton map, qualified instruction, retest decision, or repeat check',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible floats, valves, seams, restraint components, labels, instructions, packs, cartons, lots, supplier files, and correction evidence with buyer-approved references in China',
    'Huang Sourcing does not classify neck floats, perform the mandatory conditioning, buoyancy, restraint, or neck-opening tests, issue a CPC, authenticate reports, or provide legal advice',
    'Visual inspection and simple measurements cannot prove performance under 16 CFR 1250.5, product safety, warning compliance, certification validity, or customs acceptance',
    'Sampling cannot guarantee every unit outside the agreed scope, and sealed cartons, mixed lots, weak traceability, inaccessible components, or restricted factory access reduce confidence',
    'The importer, manufacturer, CPSC-accepted laboratory, compliance adviser, broker, marketplace team, or counsel remains responsible for product-specific decisions',
    'The new testing extension has eligibility conditions and a short time window; CPSC rules, laboratory scopes, certificate filing, and marketplace requirements can change, so reconfirm instructions before testing, production, payment, filing, and shipment',
  ],
  relatedLinks: [
    {
      href: cpscEfilingChinaImportsArticleHref,
      label: 'CPSC eFiling for China imports',
      note: 'Connect the product-specific CPC data to the July 2026 import filing and broker handoff.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Control warning, instruction, barcode, carton, correction, and final-payment evidence across the order.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control plan for China manufacturing',
      note: 'Build approved references, laboratory gates, inspections, change control, and shipment hold points into production.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Define the photos, lot traceability, visible checks, mismatches, and scope limits the release report should show.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related supplier, inspection, packaging, payment, and pickup decisions in the resource hub.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Which neck floats fall under the 2026 CPSC rule?',
      answer:
        'The rule covers neck floats as defined by 16 CFR 1250.5: products that encircle and support a child around the neck for water play and are intended for children up to and including age four. Qualified parties should decide borderline or excluded product scope.',
    },
    {
      question: 'Did CPSC delay the entire rule until August 16, 2026?',
      answer:
        'No. The extension is limited to testing and certification to the new neck-float rule for eligible manufacturers or importers that submit a finished-product sample. CPSC states that all other requirements remain effective from June 15, 2026.',
    },
    {
      question: 'Can a factory leak and buckle test prove compliance?',
      answer:
        'No. Factory demonstrations and visual checks can support product-identity and bulk-match evidence, but they do not replace the specified conditioning, buoyancy, restraint, neck-opening, and other controlled laboratory requirements.',
    },
    {
      question: 'What if the factory changes a valve or restraint after testing?',
      answer:
        'Pause release and disclose the change to the importer, laboratory, and compliance adviser. They should decide whether the existing evidence still applies or whether engineering review, new testing, certification, or artwork changes are required.',
    },
    {
      question: 'Can Huang Sourcing certify a neck float as CPSC compliant?',
      answer:
        'No. Huang Sourcing can compare China-side physical and document evidence with buyer-approved references. Classification, testing, certification, filing, and legal approval remain with qualified parties.',
    },
  ] satisfies FaqItem[],
}

export function makeInfantNeckFloatChecksChinaArticleMetadata(): Metadata {
  const article = infantNeckFloatChecksChinaArticle

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

export function makeInfantNeckFloatChecksChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(infantNeckFloatChecksChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Infant neck float pre-shipment release checklist',
      itemListElement: infantNeckFloatChecksChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
  ]
}
