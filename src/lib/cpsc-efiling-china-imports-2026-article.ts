import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  chinaSamplesUsCustomsArticleHref,
  cpscEfilingChinaImportsArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  whatToSendBeforeChinaInspectionHref,
} from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

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

export const cpscEfilingChinaImportsArticle = {
  author: 'editorial-team' as const,
  href: cpscEfilingChinaImportsArticleHref,
  title: 'CPSC eFiling for China Imports in 2026',
  metaTitle: 'CPSC eFiling China Imports 2026: Buyer Checklist',
  metaDescription:
    'CPSC eFiling for China imports in 2026: what U.S. buyers should collect before shipment, including product IDs, test data, certificate records, HTS signals, and broker handoff.',
  publishedDate: 'June 22, 2026',
  publishedDateIso: '2026-06-22T09:00:00-04:00',
  modifiedDate: 'July 13, 2026',
  modifiedDateIso: '2026-07-13T09:00:00+08:00',
  h1: 'CPSC eFiling for China Imports in 2026: What Buyers Should Check Before Shipment',
  eyebrow: 'CPSC eFiling - China imports - pre-shipment evidence',
  image: {
    alt: 'China-side document and product evidence review before CPSC-regulated consumer goods ship to the United States',
    height: 900,
    src: '/images/buyer-side-inspection-report.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/buyer-side-inspection-report.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/buyer-side-inspection-report-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/buyer-side-inspection-report-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'CPSC eFiling is now an active import requirement for most covered U.S.-bound regulated consumer products. The main applicability date was July 8, 2026, with a later January 8, 2027 date for products entered from a Foreign Trade Zone. Buyers sourcing from China should organize certificate data before final payment or pickup, not after the shipment reaches the port.',
  answerSummary:
    'Before final payment or pickup, connect the product, SKU, model, manufacturing place and date, test report, CPSC citation, certificate point of contact, and broker handoff plan. Huang Sourcing can help check whether supplier files and visible product evidence match the order context in China, but the importer, broker, testing lab, compliance adviser, or counsel must decide filing, certification, and legal compliance.',
  primaryCta: {
    label: 'Check CPSC Evidence Before Shipment',
  },
  secondaryCta: {
    href: '#efiling-checklist',
    label: 'See eFiling Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side CPSC eFiling evidence check before shipment.

Product / SKU count:
U.S. importer or broker:
CPSC rule or product category:
Supplier / factory location:
Order quantity / cartons:
Test reports and certificate files:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#efiling-checklist', label: 'eFiling checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#data-elements', label: 'Data elements' },
    { href: '#product-identity', label: 'Product identity' },
    { href: '#broker-handoff', label: 'Broker handoff' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Confirm whether the product is a finished consumer product subject to a CPSC rule, ban, standard, or regulation that requires certification',
    'Match the imported SKU, model, version, batch, and carton records to the exact product covered by the test report and certificate file',
    'Collect the Product ID, applicable citation codes, manufacture date, manufacture place, product test date, testing laboratory, and point of contact',
    'Confirm whether the importer will file a Full PGA Message Set or use Product Registry certificate identifiers for a Reference PGA Message Set',
    'Check whether HTS codes are likely to be flagged while remembering that CPSC guidance says the HTS list is not all-encompassing',
    'Keep manufacturer, lab, certificate, and point-of-contact details consistent across supplier files, product labels, packing records, and broker instructions',
    'Do not assume low-value or Section 321 shipments avoid eFiling when the product requires certification',
    'Hold final payment or pickup when product identity, test-report coverage, certificate data, or broker handoff is still unclear',
  ],
  checkGroups: [
    {
      title: 'Product and shipment identity',
      items: [
        'SKU, model, item number, version, color, size, batch, carton count, packing list, and product photos tied to the same order',
        'Manufacture place and manufacture date evidence that matches the supplier, factory, and production run being shipped',
      ],
    },
    {
      title: 'Certificate data readiness',
      items: [
        'Product ID, citation codes, manufacture date, manufacture place, product test date, testing laboratory, and point of contact',
        'Clear owner of the certificate record, plus whether Product Registry identifiers or a full certificate data set will be sent to the broker',
      ],
    },
    {
      title: 'Test report and supplier files',
      items: [
        'Test report applicant, manufacturer, product description, model, materials, age grade, and date against the actual goods',
        'Supplier certificates, labels, manuals, warnings, invoices, and packing records checked for mismatched names or outdated product versions',
      ],
    },
    {
      title: 'Broker and release evidence',
      items: [
        'Broker instructions, HTS code plan, importer of record details, and any Product Registry Certificate Identifiers',
        'Correction records after relabeling, repacking, document updates, SKU splits, or supplier file replacement before pickup',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why CPSC eFiling is a 2026 China sourcing issue',
      paragraphs: [
        'CPSC approved a final rule updating certificate requirements under 16 CFR part 1110 and implementing electronic filing of certificate data for imported, regulated consumer products. The July 8, 2026 applicability date has now passed for most covered imports; January 8, 2027 remains the date for covered products entered from a Foreign Trade Zone.',
        'For buyers sourcing from China, the operational risk is not only the customs filing. The filing depends on product identity, certificate data, test report coverage, manufacturing details, lab details, and broker instructions that are often scattered across supplier chats, PDFs, invoices, labels, and packing records.',
      ],
      bullets: [
        'The importer and broker need usable certificate data at entry, not after cartons have already left China',
        'A generic supplier certificate may not match the exact SKU, model, age grade, material, or production run',
        'HTS flags can help screening, but CPSC says the guidance list does not cover every possible certificate requirement',
        'China-side evidence can reduce mismatch risk before balance payment, pickup, or export release',
      ],
    },
    {
      id: 'data-elements',
      title: 'What certificate data should buyers organize before shipment?',
      paragraphs: [
        'CPSC describes two practical filing paths once participants are ready to transmit message sets into ACE. A Full PGA Message Set sends required product certificate data through the broker. A Reference PGA Message Set points to certificate data already entered in the CPSC Product Registry by using Certificate Identifiers.',
        'Either path depends on clean data. The buyer should know which product identifier is being used, which CPSC citations apply, when and where the product was manufactured, when it was tested, which lab performed testing, and who serves as the certificate point of contact.',
      ],
      bullets: [
        'Product ID used consistently across certificate records, SKU lists, labels, invoices, and packing records',
        'Applicable CPSC citation codes or testing exclusion codes confirmed by qualified compliance resources',
        'Manufacture date and manufacture place tied to the actual factory and production run',
        'Product test date and testing laboratory details taken from the matching test report',
        'Point of contact and certifying party data approved before the broker files entry',
      ],
    },
    {
      id: 'product-identity',
      title: 'Why product identity should be checked while goods are still in China',
      paragraphs: [
        'A certificate data set is only useful when it connects to the product that is actually shipping. Many sourcing problems come from version drift: the buyer has one test report, the supplier ships a modified product, or a factory uses old packaging, a different material, a new component, or a mixed production run.',
        'Before pickup, buyers should compare the compliance file to physical product evidence. That means checking model numbers, labels, manuals, warnings, age grading, product photos, material notes, carton records, and packing-list lines against the certificate and test report package.',
      ],
      bullets: [
        'Open sampled cartons when the scope allows and connect the observed product to SKU and packing-list records',
        'Check whether labels, warnings, manuals, and product identifiers match the certificate file and final U.S. listing context',
        'Flag supplier documents that use different company names, model numbers, applicant names, dates, or product descriptions',
        'Separate compliance review from visual evidence: a sourcing check can document mismatches, but specialists decide certification sufficiency',
      ],
    },
    {
      id: 'broker-handoff',
      title: 'What should be handed to the broker before entry?',
      paragraphs: [
        'The broker handoff should not be a last-minute pile of supplier PDFs. The importer should decide whether the broker receives a full certificate data set or the Product Registry identifiers needed for a Reference PGA Message Set. The broker also needs the entry context, HTS code plan, importer role, and any disclaim or testing exception approach chosen by the importer and compliance advisers.',
        'CPSC guidance makes the importer role important. For eFiling, CPSC describes the importer as the importer of record eligible to make entry, which may be an owner, purchaser, or authorized customs broker. If responsibility sits with the owner, purchaser, or consignee instead of the broker, that should be clear before shipment documents are finalized.',
      ],
      bullets: [
        'Confirm the importer of record, broker, responsible certificate owner, and point of contact before goods leave China',
        'Give the broker either the complete required product certificate data or the Product Registry identifiers they need',
        'Keep HTS, invoice, packing list, certificate, and product identity data aligned before customs entry',
        'Do not rely on the supplier to interpret CPSC filing obligations unless the importer has independently verified the process',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product is covered',
      whatToConfirm:
        'Whether the imported finished consumer product is subject to a CPSC rule, ban, standard, or regulation that requires certification and eFiling',
      buyerDecision:
        'Proceed with certificate preparation, get specialist confirmation, or document why the shipment is outside the filing scope.',
    },
    {
      riskNode: 'Certificate data matches the goods',
      whatToConfirm:
        'Product ID, citation codes, manufacturing date and place, test date, testing lab, point of contact, SKU, model, and packing records line up',
      buyerDecision:
        'Approve the evidence, request corrected documents, split affected SKUs, retest, or pause pickup until the mismatch is resolved.',
    },
    {
      riskNode: 'Broker path is clear',
      whatToConfirm:
        'Full PGA Message Set data or Product Registry Certificate Identifiers are ready for the broker, with importer role and HTS plan confirmed',
      buyerDecision:
        'Release shipment only after the broker handoff is complete enough for entry filing.',
    },
    {
      riskNode: 'Supplier evidence is weak',
      whatToConfirm:
        'Supplier files use outdated models, different factory names, old test reports, missing lab details, or product photos that do not match cartons',
      buyerDecision:
        'Hold payment, require supplier correction, ask a lab or adviser to review, or schedule a focused China-side evidence check.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official CPSC eFiling, certificate, importer, FAQ, recall, document-library, and Federal Register source context checked July 13, 2026 (Beijing time).',
    'Buyer-provided product list, SKU records, invoices, packing list, label files, warnings, manuals, test reports, certificate files, and broker instructions.',
    'Physical product, retail packaging, carton marks, opened-carton photos, sampled SKU records, and supplier correction evidence observed in China.',
    'Specialist guidance from the importer, broker, testing laboratory, CPSC compliance adviser, customs adviser, marketplace team, or legal counsel when filing or certification decisions exceed visual evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://www.cpsc.gov/Recalls/2026/Lifetime-Brands-Recalls-BUILT-LUUM-Light-Up-Tumblers-Due-to-Risk-of-Choking-and-Battery-Ingestion-Hazards',
      label: 'CPSC - BUILT LUUM light-up tumbler recall',
      note: 'Official March 19, 2026 recall describing a China-made product whose LED compartment could separate and release button-cell batteries; used as a bounded product-identity and evidence lesson, not proof that eFiling prevents recalls.',
    },
    {
      href: 'https://www.federalregister.gov/documents/2025/01/08/2024-30826/certificates-of-compliance',
      label: 'Federal Register - Certificates of Compliance final rule',
      note: 'Official final rule for revised certificate requirements under 16 CFR part 1110, including July 8, 2026 applicability for most covered imports and January 8, 2027 for FTZ entries.',
    },
    {
      href: 'https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Certificates',
      label: 'CPSC - Certificates of Compliance and eFiling update',
      note: 'CPSC guidance stating that importers of consumer products subject to certification must eFile certificate data as of the effective dates.',
    },
    {
      href: 'https://www.cpsc.gov/efiling/importers',
      label: 'CPSC - eFiling resources for importers',
      note: 'CPSC importer guidance explaining importer of record context and linking Quick Start, Product Registry, HTS, citation, and CATAIR resources.',
    },
    {
      href: 'https://www.cpsc.gov/FAQ/eFiling-Frequently-Asked-Questions-FAQ',
      label: 'CPSC - eFiling FAQ',
      note: 'CPSC FAQ covering Full PGA Message Sets, Reference PGA Message Sets, Product Registry identifiers, implementation dates, and Section 321 treatment.',
    },
    {
      href: 'https://www.cpsc.gov/eFiling-Document-Library',
      label: 'CPSC - eFiling document library',
      note: 'Official library for Product Registry, CSV upload, API, CATAIR, HTS list, citation, testing-exception, exclusion, and disclaim guidance.',
    },
    {
      href: 'https://www.cpsc.gov/s3fs-public/CPSC-Guidance-and-HTS-List-for-Filing-of-Electronic-Certificates-6B-Cleared.pdf',
      label: 'CPSC - HTS list and eFiling guidance',
      note: 'Official January 2026 PDF noting that the HTS list is guidance, not an all-encompassing list of every code where electronic certificates may be required.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Product list by SKU, model, version, color, size, age grade, material, order quantity, carton count, and destination entry plan',
    'Commercial invoice, packing list, HTS code plan, broker contact, importer of record details, and any Product Registry Certificate Identifiers',
    'Test reports, certificates, citation codes, testing-exclusion decisions, lab details, product test date, manufacture date, and manufacture place',
    'Supplier business name, factory location, applicant name, manufacturer name, point of contact, and any differences between quote, invoice, certificate, and label files',
    'Product photos, label files, warnings, manuals, inserts, retail packaging files, carton marks, and final U.S. listing or marketplace context',
    'Payment deadline, pickup deadline, split-shipment plan, and which issues should hold release versus be documented for specialist review',
  ],
  redFlags: [
    'The supplier sends a test report for a similar product but the model, material, age grade, or factory does not match the shipment',
    'The invoice company, certificate applicant, manufacturer, test report holder, and product label name point to different entities with no explanation',
    'The buyer cannot identify the Product ID, citation codes, manufacture place, manufacture date, product test date, lab, or point of contact',
    'Packed cartons contain mixed versions, old labels, missing warnings, or product identifiers that do not match the compliance file',
    'The broker receives supplier PDFs but no clear Full PGA data set or Product Registry identifiers',
    'The team assumes Section 321, low value, marketplace fulfillment, or a freight forwarder removes the need to check CPSC certificate data',
    'The supplier claims a certificate is valid but refuses carton access, current production photos, product labels, or corrected document evidence',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible product, label, carton, packing, supplier, and document evidence against buyer-provided references in China',
    'Huang Sourcing does not file CPSC eFiling data, act as importer of record, choose HTS codes, certify products, authenticate lab reports, or provide legal advice',
    'A China-side evidence check cannot prove CPSC compliance, testing sufficiency, certificate validity, customs acceptance, marketplace approval, or product safety',
    'The importer remains responsible for certification, testing, citation selection, broker instructions, eFiling method, HTS classification, and entry compliance',
    'Factory access, sealed cartons, missing test reports, vague product IDs, supplier obstruction, or late product changes can limit report confidence',
    'CPSC, CBP, marketplace, product-safety, and customs rules can change, so time-sensitive instructions should be reconfirmed before filing and before shipment',
  ],
  relatedLinks: [
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Use this when payment or pickup depends on clear photo-backed evidence and decision notes.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Use this when label, warning, manual, or carton evidence must be checked before final payment.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare references, SKU lists, carton data, broker notes, and decision rules before an onsite check.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control China manufacturing plan',
      note: 'Build compliance-document, label, and shipment-readiness checks into the production plan earlier.',
    },
    {
      href: chinaSamplesUsCustomsArticleHref,
      label: 'Shipping China samples to the U.S. customs guide',
      note: 'For early samples, separate customs handling from later production compliance and certificate planning.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'When does CPSC eFiling become mandatory for China imports?',
      answer:
        'For most imported consumer products subject to the CPSC certificate final rule, mandatory eFiling has applied since July 8, 2026. For covered products entered from a Foreign Trade Zone for consumption or warehousing, the applicability date is January 8, 2027.',
    },
    {
      question: 'Does CPSC eFiling apply to every product sourced from China?',
      answer:
        'No. It applies when the imported finished consumer product is subject to a CPSC rule, ban, standard, or regulation that requires certification. Buyers should confirm product scope with qualified compliance resources, CPSC guidance, their broker, or counsel.',
    },
    {
      question: 'What data does the broker need for a Full PGA Message Set?',
      answer:
        'CPSC FAQ guidance identifies seven required product certificate data elements for the Full PGA path: Product ID, Citation Codes, Manufacture Date, Manufacture Place, Product Test Date, Testing Laboratory, and Point of Contact.',
    },
    {
      question: 'What are the Product Registry identifiers for a Reference PGA Message Set?',
      answer:
        'CPSC describes three Certificate Identifiers for the Reference PGA path: Certifier ID, Product ID, and Version ID. The importer should give those identifiers to the broker when using Product Registry records.',
    },
    {
      question: 'Does Section 321 or low shipment value avoid eFiling?',
      answer:
        'CPSC states that any product requiring certification must have an eFiled certificate regardless of shipment value, with no Section 321 de minimis exemption for eFiling.',
    },
    {
      question: 'Can Huang Sourcing file CPSC eFiling records for me?',
      answer:
        'No. Huang Sourcing can help check China-side product, label, carton, supplier, and document evidence against buyer-provided references. Filing, certification, HTS classification, and legal compliance stay with the importer, broker, lab, adviser, or counsel.',
    },
  ] satisfies FaqItem[],
}

export function makeCpscEfilingChinaImportsArticleMetadata(): Metadata {
  const article = cpscEfilingChinaImportsArticle

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
      modifiedTime: article.modifiedDateIso,
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

export function makeCpscEfilingChinaImportsArticleJsonLd() {
  return [
    makeArticleJsonLd(cpscEfilingChinaImportsArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'CPSC eFiling pre-shipment checklist for China imports',
      itemListElement: cpscEfilingChinaImportsArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(cpscEfilingChinaImportsArticle.faqs),
  ]
}
