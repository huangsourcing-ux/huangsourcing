import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  amazonFbaPrepArticleHref,
  euGpsrLabelCheckChinaArticleHref,
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

export const euGpsrLabelCheckChinaArticle = {
  href: euGpsrLabelCheckChinaArticleHref,
  title: 'EU GPSR Label Check for China Sourcing in 2026',
  metaTitle: 'EU GPSR Label Check China Sourcing: 2026 Buyer Guide',
  metaDescription:
    'EU GPSR label check for China-sourced products in 2026: responsible person, manufacturer details, product ID, warnings, language, and shipment evidence.',
  publishedDate: 'June 21, 2026',
  publishedDateIso: '2026-06-21T09:00:00-04:00',
  h1: 'EU GPSR Label Check for China-Sourced Products in 2026',
  eyebrow: 'EU GPSR labels - responsible person - pre-shipment evidence',
  image: {
    alt: 'China-side packaging and label check before EU-bound consumer products leave the factory',
    height: 900,
    src: '/images/packaging-label-check-before-payment.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/packaging-label-check-before-payment.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/packaging-label-check-before-payment-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/packaging-label-check-before-payment-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'The EU General Product Safety Regulation has applied since December 13, 2024. In 2026, buyers sourcing consumer products from China should treat EU product-safety labels, responsible-person details, warnings, language, and traceability as pre-shipment evidence, not as paperwork to fix after goods arrive.',
  answerSummary:
    'Before paying the balance or releasing pickup, compare the approved GPSR label plan with physical units, retail packaging, instructions, online-listing information, carton evidence, and supplier documents. Huang Sourcing can check visible China-side evidence, but the buyer, importer, EU responsible person, marketplace, laboratory, or legal adviser must decide the actual EU compliance path.',
  primaryCta: {
    label: 'Check EU Labels Before Shipment',
  },
  secondaryCta: {
    href: '#gpsr-checklist',
    label: 'See GPSR Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side EU GPSR label and packaging evidence check before shipment.

Product / SKU count:
EU destination country or marketplace:
Supplier / factory location:
Order quantity / cartons:
Approved label files and manuals:
Responsible person details already approved:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#gpsr-checklist', label: 'GPSR checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#physical-labels', label: 'Physical labels' },
    { href: '#online-listings', label: 'Online listings' },
    { href: '#responsible-person', label: 'Responsible person' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Confirm whether the product is an EU consumer product and whether sector-specific EU rules also apply',
    'Match the product type, batch, serial, model, or other identifier to the physical unit and packaging',
    'Check manufacturer name, registered trade name or trademark, postal address, and electronic address where required',
    'Confirm EU responsible-person name, postal address, and electronic address when the manufacturer is outside the Union',
    'Compare warnings, safety information, manuals, and inserts with buyer-approved files and destination-language needs',
    'Check that online-listing data uses the same manufacturer, responsible person, product identifier, image, and warnings',
    'Open sampled cartons to connect labels and instructions to actual SKU, color, model, batch, and carton identity',
    'Hold final payment or pickup when label evidence, responsible-party details, or safety information is missing or inconsistent',
  ],
  checkGroups: [
    {
      title: 'Product identity',
      items: [
        'Product name, model, type, batch, serial number, version, SKU, color, size, and packaging revision',
        'A visible link between the sampled unit, retail pack, carton number, and packing-list line',
      ],
    },
    {
      title: 'Economic-operator details',
      items: [
        'Manufacturer name, registered trade name or trademark, postal address, and electronic contact where required',
        'EU responsible-person details approved by the buyer or compliance provider when the manufacturer is outside the Union',
      ],
    },
    {
      title: 'Warnings and language',
      items: [
        'Warnings, instructions, age marks, safety notices, manuals, and inserts against the final buyer-approved files',
        'Destination-market language version, print size, legibility, placement, and whether key warnings are blocked or folded',
      ],
    },
    {
      title: 'Shipment evidence',
      items: [
        'Unit close-ups, retail-pack photos, opened-carton views, carton marks, and sampled SKU coverage',
        'Correction records after relabeling, repacking, manual insertion, or supplier document updates',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why EU GPSR label checks are a 2026 sourcing issue',
      paragraphs: [
        'GPSR is no longer a future rule. It replaced the previous general product safety framework for products placed on the EU market from December 13, 2024, and the European Commission continues to connect it with Safety Gate, online-marketplace obligations, traceability, recalls, and market-surveillance tools.',
        'The 2025 Safety Gate report keeps the issue practical for China sourcing teams. The Commission reported 4,671 validated dangerous-product alerts in 2025, with cosmetics, toys, and electrical appliances among the most frequently notified categories. For buyers, the lesson is simple: label and safety information should be checked while products are still accessible in China.',
      ],
      bullets: [
        'EU-bound consumer goods need an evidence plan before balance payment, not only before marketplace upload',
        'Product-safety labels should match the physical stock, not only a PDF in the supplier chat',
        'Incorrect labels, warnings, manuals, or responsible-party details can become shipment, marketplace, recall, or relabeling problems',
        'Huang Sourcing can document visible evidence in China, but cannot certify EU compliance or replace specialist review',
      ],
    },
    {
      id: 'physical-labels',
      title: 'What should be checked on the physical product and packaging?',
      paragraphs: [
        'A practical GPSR label check starts with the exact product that will ship. Compare the buyer-approved label plan with the sampled unit, retail box, hangtag, manual, insert, inner pack, master carton, and packing list. The check should prove that the right information is attached to the right SKU and batch.',
        'For China-sourced products, common failure points are version control and placement. One approved label file may exist, while packed cartons still contain older warning text, missing electronic contact details, wrong language versions, or mixed SKUs from a previous production run.',
      ],
      bullets: [
        'Check product identifiers on the unit or packaging, including type, batch, serial, model, or other traceability code',
        'Confirm manufacturer identity and contact details against the buyer-approved compliance file',
        'Verify EU responsible-person details only after the buyer has approved the exact wording and entity',
        'Compare warnings, safety instructions, manuals, and inserts with the destination-market version',
        'Photograph labels in place on the product or packaging, not only loose label samples',
      ],
    },
    {
      id: 'online-listings',
      title: 'Do online listings need to match the labels?',
      paragraphs: [
        'Yes. GPSR contains distance-sales obligations that affect what online interfaces must allow traders to provide and display. For the buyer, the practical check is consistency: manufacturer details, EU responsible-person details, product identifier, product image, and warnings should not conflict between the product, packaging, manual, carton evidence, and marketplace listing.',
        'Huang Sourcing cannot manage the marketplace compliance portal, but it can photograph the physical evidence that the listing relies on. This is especially useful when a seller must upload manufacturer or responsible-person information and wants to avoid discovering a mismatch after stock is already in transit.',
      ],
      bullets: [
        'Compare listing screenshots with physical labels, packaging, and manuals before final shipment approval',
        'Flag mismatched product images, versions, batch codes, warning text, language, or responsible-party data',
        'Keep final listing evidence with the inspection report so later disputes have a dated reference',
        'Treat marketplace acceptance as separate from a China-side visual check',
      ],
    },
    {
      id: 'responsible-person',
      title: 'Who decides the EU responsible person details?',
      paragraphs: [
        'The EU responsible person is not a decorative label line. The buyer should confirm the responsible economic operator or service provider before the factory prints packaging, labels, or manuals. If the manufacturer is outside the Union, the buyer should get destination-market advice on the correct entity and exact contact details before China-side production finishes.',
        'A sourcing agent should not invent this information. The China-side role is to compare the buyer-approved details with what the supplier actually printed or inserted, then show whether the physical goods match the approved file before payment leverage is gone.',
      ],
      bullets: [
        'Confirm the responsible-person entity before mass printing labels or manuals',
        'Keep the approved wording, postal address, electronic address, and placement requirements in one file',
        'Check whether every SKU, language version, and packaging format received the same approved data',
        'Escalate to the buyer or compliance provider when any responsible-person detail is missing or changed',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product identity is clear',
      whatToConfirm:
        'Product type, model, version, batch or serial identifier, SKU, color, size, carton number, and packing-list line match the actual goods',
      buyerDecision:
        'Approve the identity point or require sorting, relabeling, or corrected carton records before pickup.',
    },
    {
      riskNode: 'Manufacturer details are present',
      whatToConfirm:
        'Name, registered trade name or trademark, postal address, and electronic contact follow the buyer-approved file and appear on the correct label location',
      buyerDecision:
        'Approve, correct the label, or pause payment until the supplier uses the final approved data.',
    },
    {
      riskNode: 'EU responsible person is shown',
      whatToConfirm:
        'Responsible-person name, postal address, and electronic address are exactly the buyer-approved details for the relevant EU market or sales channel',
      buyerDecision:
        'Ship only after the buyer or compliance provider confirms the entity and wording; do not let the factory improvise.',
    },
    {
      riskNode: 'Warnings and language match',
      whatToConfirm:
        'Warnings, safety information, manuals, age marks, instructions, and destination-language versions match physical units, packages, and listing evidence',
      buyerDecision:
        'Insert, relabel, reprint, or split stock by market before shipment when warnings or language versions are wrong.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Buyer-approved label artwork, warning text, manual files, responsible-person details, destination-market language requirements, and marketplace listing screenshots.',
    'Physical product, retail packaging, inserts, manuals, labels, carton marks, opened-carton photos, sampled SKU records, and packing-list evidence observed in China.',
    'Supplier production records, batch or version references, correction photos, relabeling notes, and the final release decision supplied by the buyer.',
    'Specialist guidance from the buyer, importer, EU responsible person, laboratory, marketplace, customs broker, or legal adviser when compliance decisions exceed visual evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://trade.ec.europa.eu/access-to-markets/en/news/eus-general-product-safety-regulation-gpsr-new-era-consumer-protection',
      label: 'European Commission Access2Markets - GPSR overview',
      note: 'Official overview confirming GPSR applies from December 13, 2024, and replaces the previous General Product Safety Directive framework.',
    },
    {
      href: 'https://eur-lex.europa.eu/eli/reg/2023/988/oj/eng',
      label: 'EUR-Lex - Regulation (EU) 2023/988',
      note: 'Official legal text covering product identification, manufacturer details, importer and distributor checks, responsible-person rules, and distance-sales information obligations.',
    },
    {
      href: 'https://op.europa.eu/webpub/just/safety-gate-2025-report/en/',
      label: 'European Commission - Safety Gate 2025 report',
      note: 'Official 2025 report on dangerous-product alerts, online traceability, Safety Gate tools, and GPSR roles for businesses and marketplaces.',
    },
    {
      href: 'https://commission.europa.eu/topics/business-and-industry/doing-business-eu/eu-product-safety-and-labelling/product-safety_en',
      label: 'European Commission - Product safety',
      note: 'Official product-safety hub linking GPSR, Safety Gate, business obligations, online marketplace registration, and product-safety resources.',
    },
    {
      href: 'https://commission.europa.eu/topics/business-and-industry/doing-business-eu/eu-product-safety-and-labelling/eu-product-requirements_en',
      label: 'European Commission - EU product requirements',
      note: 'Official resource page for EU product standards, CE marking, chemicals, safety, labelling, packaging, marketing rules, and customs controls.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Final label artwork, packaging dielines, manual files, warning text, insert files, and each destination-language version',
    'Approved manufacturer details, EU responsible-person details, electronic contact details, and the source of approval',
    'Product list by SKU, model, color, size, batch or version, order quantity, carton count, and destination market',
    'Marketplace or website listing screenshots showing product images, identifiers, warnings, manufacturer details, and responsible-person details',
    'Supplier production photos, print proofs, carton marks, packing list, correction records, and any relabeling or manual-insertion instructions',
    'Compliance files supplied by the buyer or specialist, including test reports, certificates, declarations, or risk assessments when they are part of the visual check scope',
    'Payment deadline, pickup deadline, split-shipment plan, and which issues should hold release versus be noted only',
  ],
  redFlags: [
    'The supplier says GPSR is only an online upload issue and refuses to show physical labels, manuals, or packaging',
    'Responsible-person details are missing, invented by the factory, or different across labels, manuals, cartons, and listings',
    'The product has no batch, serial, model, type, SKU, or other practical traceability identifier',
    'Warnings or instructions are in the wrong language, missing from one SKU, folded inside packaging, or too small to read',
    'Only one perfect sample label is shown while packed cartons remain sealed or unconnected to SKU and batch records',
    'Different cartons contain mixed packaging revisions, old warning files, or labels from a previous production run',
    'The buyer has no EU specialist, responsible person, or marketplace guidance but expects the China-side agent to decide legal compliance',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible labels, packaging, warnings, manuals, inserts, carton evidence, and supplier files against buyer-approved references in China',
    'Huang Sourcing does not act as an EU responsible person, importer, customs broker, law firm, laboratory, certification body, marketplace compliance team, or market-surveillance authority',
    'A visual label check cannot prove product safety, chemical compliance, CE conformity, technical-file sufficiency, recall readiness, or marketplace approval',
    'The buyer remains responsible for choosing the correct EU economic operator, destination-language requirements, sector-specific rules, and compliance evidence',
    'Factory access, sealed cartons, missing references, supplier obstruction, or late label changes can limit the confidence of the report',
    'Trade, product-safety, marketplace, and customs rules can change, so time-sensitive instructions should be reconfirmed before printing and before shipment',
  ],
  relatedLinks: [
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Use this when the immediate decision is payment release, relabeling, repacking, or re-inspection.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare the files, references, SKU list, carton data, and decision rules before an onsite check.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control China manufacturing plan',
      note: 'Build label, packaging, and shipment-readiness checks into the production plan earlier.',
    },
    {
      href: amazonFbaPrepArticleHref,
      label: 'Amazon FBA prep China checklist',
      note: 'For Amazon-bound goods, separate GPSR or market compliance from FNSKU and carton-label readiness.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Does GPSR apply to products sourced from China?',
      answer:
        'GPSR can apply when consumer products are placed or made available on the EU market, even if they were manufactured in China. Sector-specific EU rules may also apply. The buyer should confirm scope with a qualified EU compliance specialist.',
    },
    {
      question: 'Can Huang Sourcing choose my EU responsible person?',
      answer:
        'No. Huang Sourcing can check whether buyer-approved responsible-person details appear correctly on visible labels, packaging, manuals, or listing evidence. Choosing the responsible person and legal wording belongs with the buyer and qualified EU advisers.',
    },
    {
      question: 'What GPSR label details should be checked before shipment?',
      answer:
        'Common physical checks include product identifier, manufacturer details, EU responsible-person details when required, warnings, safety information, instructions, language version, label placement, legibility, and whether the information matches each SKU and carton sample.',
    },
    {
      question: 'Is a factory photo of one label enough?',
      answer:
        'Usually not. One close-up can prove one label exists. It does not prove all cartons, SKUs, batches, manuals, inserts, and packaging versions match. Ask for sampled evidence tied to actual cartons and packing-list lines.',
    },
    {
      question: 'Does a China-side GPSR label check prove EU compliance?',
      answer:
        'No. It is visual evidence against buyer-approved references. Product safety, testing, technical documentation, responsible-person duties, marketplace acceptance, customs, and legal compliance remain outside a normal China-side inspection scope.',
    },
    {
      question: 'When should GPSR labels be checked?',
      answer:
        'Check before mass printing when possible, again before balance payment, and finally before pickup when cartons are packed. The later the issue is found, the more likely the buyer will need relabeling, repacking, shipment delay, or market-specific stock separation.',
    },
  ] satisfies FaqItem[],
}

export function makeEuGpsrLabelCheckChinaArticleMetadata(): Metadata {
  const article = euGpsrLabelCheckChinaArticle

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

export function makeEuGpsrLabelCheckChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(euGpsrLabelCheckChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'EU GPSR label check for China-sourced products',
      itemListElement: euGpsrLabelCheckChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(euGpsrLabelCheckChinaArticle.faqs),
  ]
}
