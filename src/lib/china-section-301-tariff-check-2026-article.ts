import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  alibabaSupplierVerificationPaymentArticleHref,
  buyerSideInspectionReportArticleHref,
  chinaSamplesUsCustomsArticleHref,
  chinaSection301TariffCheckArticleHref,
  huangSourcingCheckScopeArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  preShipmentBeforePickupArticleHref,
  supplierVerificationChecklistHref,
  supplierVerificationChinaLimitsArticleHref,
  uflpaChinaSupplierCheckArticleHref,
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
  evidence: string
  riskNode: string
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

export const chinaSection301TariffCheckArticle = {
  href: chinaSection301TariffCheckArticleHref,
  title: 'China Section 301 Tariff Check: 2026 Supplier Evidence Guide',
  metaTitle: 'China Section 301 Tariff Check: 2026 Evidence Guide',
  metaDescription:
    'China Section 301 tariff check for 2026: practical product identity, HTS handoff, supplier quote, origin, invoice, packing, and broker evidence before deposit or shipment.',
  publishedDate: 'June 28, 2026',
  publishedDateIso: '2026-06-28T09:00:00-04:00',
  h1: 'China Section 301 Tariff Check Before Supplier Deposit in 2026',
  eyebrow: 'Section 301 - tariff evidence - China sourcing risk',
  image: {
    alt: 'China supplier quote, HTS notes, product photos, cartons, and broker evidence reviewed before Section 301 tariff decisions',
    height: 900,
    src: '/images/china-section-301-tariff-check-2026.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/china-section-301-tariff-check-2026.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/china-section-301-tariff-check-2026-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/china-section-301-tariff-check-2026-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'China Section 301 tariff risk is still a live landed-cost issue in 2026. USTR extended 178 current exclusions into November 2026, the Federal Register notice ties exclusion scope to HTSUS statistical numbers and product descriptions, and CBP continues to administer Section 301 and other trade-remedy guidance at entry. For buyers sourcing from China, the practical problem starts much earlier: the supplier quote, product identity, origin story, and broker handoff need to be clear before deposit, final payment, or pickup.',
  answerSummary:
    'Before paying or shipping, buyers should collect a broker-ready file that ties the exact product to photos, model numbers, materials, dimensions, function, supplier name, Chinese origin, invoice wording, packing list, carton evidence, and any importer-provided HTS or exclusion instructions. Huang Sourcing can organize and verify visible China-side evidence, but tariff classification, duty calculation, exclusion eligibility, customs entry, and legal conclusions remain with the importer, licensed customs broker, or trade counsel.',
  primaryCta: {
    label: 'Check Tariff Evidence Before Payment',
  },
  secondaryCta: {
    href: '#section-301-checklist',
    label: 'See Evidence Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side Section 301 tariff evidence check before payment or shipment.

Product / SKU count:
Supplier name and Chinese name:
Factory / pickup location:
Broker or importer HTS notes:
Quote / PI / invoice concern:
Cartons / shipment deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#section-301-checklist', label: 'Evidence checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#check-scope', label: 'China-side scope' },
    { href: '#product-scope', label: 'Product scope' },
    { href: '#quote-risk', label: 'Quote risk' },
    { href: '#origin-route', label: 'Origin and route' },
    { href: '#document-trail', label: 'Document trail' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Collect product photos, model numbers, materials, dimensions, function, accessories, packaging, and SKU variants before the supplier issues final paperwork',
    'Ask the U.S. importer or licensed customs broker for HTSUS, Section 301 list, exclusion, IEEPA, AD/CVD, and other trade-remedy instructions before deposit',
    'Do not let the China supplier decide U.S. tariff classification, duty rate, exclusion eligibility, or customs treatment',
    'Compare the quotation, proforma invoice, purchase order, commercial invoice, packing list, carton labels, and product photos for the same product description',
    'Treat a Section 301 exclusion as narrow: the current USTR extension depends on the exact HTSUS statistical reporting number and product description',
    'Confirm country-of-origin facts separately from export route, forwarder route, Hong Kong routing, or supplier sales-office location',
    'Re-check the file when the supplier changes material, component source, model, bundle, packaging, shipper, or invoice wording before pickup',
    'Pause payment or shipment when the product identity, origin, invoice description, or broker handoff cannot be reconciled while goods are still in China',
  ],
  checkGroups: [
    {
      title: 'Product identity',
      items: [
        'Capture photos, model labels, dimensions, material notes, function, accessories, packaging, SKU list, and supplier product-page records',
        'Separate similar SKUs, bundles, replacement parts, and accessory kits because classification and exclusion scope may change by item',
      ],
    },
    {
      title: 'Origin and supplier chain',
      items: [
        'Record supplier English name, Chinese name, factory or pickup address, export company, shipper, and any third-country or Hong Kong routing explanation',
        'Flag country-of-origin uncertainty, late supplier switches, unexplained production-site changes, or attempts to describe routing as origin',
      ],
    },
    {
      title: 'Broker handoff',
      items: [
        'Keep importer-provided HTSUS, Section 301 list, exclusion, IEEPA, AD/CVD, and release instructions in the same file as the China-side evidence',
        'Have the responsible importer, broker, or trade counsel decide the regulated treatment before deposit, final payment, or shipment release',
      ],
    },
    {
      title: 'Shipment paperwork',
      items: [
        'Compare quote, PI, PO, commercial invoice, packing list, carton labels, product labels, and photos before goods leave the supplier',
        'Document mismatches and correction evidence instead of relying on chat messages after the forwarder has collected cartons',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why Section 301 tariff evidence is a current 2026 sourcing issue',
      paragraphs: [
        'USTR announced that 178 exclusions in the China Section 301 investigation were extended until November 10, 2026. The Federal Register notice says the exclusions are governed by the relevant ten-digit HTSUS statistical reporting numbers and product descriptions, and CBP is responsible for entry guidance and implementation.',
        'That makes the buyer file more important, not less. If the importer or broker later needs to decide whether an item fits a heading, product description, exclusion, or other trade-remedy rule, vague supplier paperwork becomes expensive. The better time to fix product wording, model evidence, photos, and origin questions is before the deposit or before the cartons leave China.',
      ],
      bullets: [
        'The official extension does not mean every China-sourced product is excluded from Section 301 duties',
        'Product descriptions and ten-digit HTSUS details matter for exclusion analysis',
        'Importer, broker, and trade-counsel instructions should be collected before supplier paperwork is finalized',
        'A China-side check can organize evidence but cannot make customs classification decisions',
      ],
    },
    {
      id: 'check-scope',
      title: 'What can a China-side Section 301 tariff check actually do?',
      paragraphs: [
        'A practical check starts with facts that can be requested, observed, photographed, and compared in China. That includes supplier and factory identity, product photos, labels, model numbers, material claims, dimensions, accessories, product packaging, carton marks, quote wording, invoice wording, packing records, and supplier explanations for any change.',
        'The goal is not to calculate duties. The goal is to give the importer, broker, or trade counsel a cleaner evidence package so they can classify the product, evaluate exclusion instructions, and decide whether shipment should move now.',
      ],
      bullets: [
        'Check the actual goods against the product description the importer plans to use',
        'Preserve supplier files, screenshots, photos, timestamps, quote revisions, and correction records',
        'Flag where supplier claims are unverified or inconsistent',
        'Escalate classification, duty, customs, and legal answers to qualified responsible parties',
      ],
    },
    {
      id: 'product-scope',
      title: 'Why product description and HTS handoff need to match',
      paragraphs: [
        'Section 301 questions often fail at the product-description level. A supplier may use a generic quote name, an importer may use a different marketplace name, and the broker may need technical details that neither side has documented. Small differences in material, function, component type, voltage, capacity, fabric, coating, or packaging set can change the analysis.',
        'Buyers should keep a broker handoff sheet that connects each SKU to the visible product facts. If the U.S. team says an exclusion or heading may depend on a specific description, that description should be checked against the actual goods before final paperwork is approved.',
      ],
      bullets: [
        'Tie each SKU to product photos, dimensions, materials, model markings, and use case',
        'Ask suppliers to correct vague invoice descriptions before shipment release',
        'Keep accessory kits, spare parts, bundled goods, and mixed cartons separate in the file',
        'Record who approved any mismatch between supplier wording and broker instructions',
      ],
    },
    {
      id: 'quote-risk',
      title: 'How supplier quotes create tariff and landed-cost risk',
      paragraphs: [
        'A low supplier quote can hide a bad landed-cost assumption. The supplier may quote FOB or EXW without understanding U.S. trade remedies, may reuse an HS code from another buyer, or may describe the product in a way that is convenient for export but weak for U.S. entry review.',
        'Before deposit, buyers should force the commercial file to line up: quote, proforma invoice, purchase order, product specification, commercial invoice draft, packing list draft, and the broker instruction file. When those documents describe different goods, the buyer should treat it as a release risk.',
      ],
      bullets: [
        'Ask for quote revisions before deposit when product description or SKU separation is too vague',
        'Use broker instructions to review the invoice draft before final payment',
        'Do not rely on supplier-provided U.S. duty rates without importer review',
        'Treat late material, model, or supplier substitutions as a new evidence review',
      ],
    },
    {
      id: 'origin-route',
      title: 'Country of origin is not the same as shipping route',
      paragraphs: [
        'CBP Section 301 FAQs distinguish products of China from products of Hong Kong or Macau, and Section 301 duties are tied to origin rather than a simple shipping route. Buyers still need to document the practical facts: who made the product, where production happened, who exported it, and why any routing or invoice entity differs from the producer.',
        'A China-side review can flag weak origin stories before the forwarder moves goods. If a supplier claims a third-country route, Hong Kong routing, or alternate exporter changes tariff treatment, the importer should require broker or counsel approval before release.',
      ],
      bullets: [
        'Record factory location, pickup location, shipper, exporter, and invoice issuer',
        'Separate production origin from sales-office location, bank beneficiary, or forwarder route',
        'Escalate any transshipment, origin-marking, substantial-transformation, or evasion question',
        'Keep correction records when supplier paperwork changes late',
      ],
    },
    {
      id: 'document-trail',
      title: 'What document trail should be ready before pickup?',
      paragraphs: [
        'The cleanest file is boring: product photos, quote, PO, PI, invoice draft, packing list draft, carton labels, model labels, material notes, supplier identity, factory or pickup location, importer instructions, and a release decision all describe the same goods.',
        'If the supplier refuses photos, will not correct invoice wording, changes the exporter, or ships mixed products under one vague description, the buyer should not rely on the forwarder to sort it out later. Put the gap into a decision: correct, re-check, split shipment, escalate to broker, or hold payment and pickup.',
      ],
      bullets: [
        'Store the broker instruction file with China-side photos and supplier documents',
        'Use SKU-level folders when a shipment includes several products or similar variants',
        'Compare carton labels and packing records against invoice and product photos',
        'Name the person who approved release despite any remaining evidence gap',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product identity is clear',
      evidence:
        'Photos, model markings, product page, dimensions, materials, function, accessories, packaging, SKU list, quote, and invoice wording can be reconciled.',
      buyerDecision:
        'Approve supplier paperwork, request correction, split SKUs, or pause deposit until the product file is broker-ready.',
    },
    {
      riskNode: 'Classification owner is named',
      evidence:
        'Importer, licensed customs broker, or trade counsel has provided HTSUS, Section 301, exclusion, IEEPA, AD/CVD, or other trade-remedy instructions.',
      buyerDecision:
        'Proceed only after the responsible party accepts the file; do not rely on supplier-provided duty assumptions.',
    },
    {
      riskNode: 'Origin and route are documented',
      evidence:
        'Supplier, factory, pickup location, shipper, exporter, invoice issuer, country-of-origin facts, and any routing explanation are recorded.',
      buyerDecision:
        'Escalate before release when origin, routing, exporter, or production-site facts conflict or appear designed to avoid duties.',
    },
    {
      riskNode: 'Shipment paperwork is consistent',
      evidence:
        'Commercial invoice, packing list, carton labels, product labels, PO, PI, photos, and correction records describe the same goods and shipment lot.',
      buyerDecision:
        'Release pickup only when paperwork and physical evidence match the importer or broker instructions for the shipment.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official USTR Section 301 China tariff action pages, USTR exclusion-extension announcement, Federal Register product-exclusion extension notice, CBP Section 301 FAQ, CBP trade-remedy guidance pages, and CBP IEEPA FAQ context current to June 2026.',
    'Buyer-provided importer instructions, broker notes, HTSUS references, product specifications, SKU lists, supplier quotes, purchase orders, proforma invoices, commercial invoice drafts, packing list drafts, and release rules.',
    'Physical product, carton, label, model, packaging, supplier, factory, pickup-location, and shipment evidence observed or collected in China before payment or pickup.',
    'Specialist guidance from the importer of record, licensed customs broker, trade counsel, tariff engineer, compliance adviser, marketplace, freight forwarder, or responsible customs owner when conclusions exceed visible and document evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://ustr.gov/about/policy-offices/press-office/press-releases/2025/november/ustr-extends-exclusions-china-section-301-tariffs-related-forced-technology-transfer-investigation',
      label: 'USTR - 178 China Section 301 exclusions extended',
      note: 'Official USTR announcement that the 178 exclusions previously scheduled to expire in November 2025 were extended until November 10, 2026.',
    },
    {
      href: 'https://www.federalregister.gov/documents/2025/12/01/2025-21671/notice-of-product-exclusion-extensions-chinas-acts-policies-and-practices-related-to-technology',
      label: 'Federal Register - Product Exclusion Extensions',
      note: 'Official notice explaining the extension period and that exclusion scope is governed by HTSUS statistical reporting numbers and product descriptions.',
    },
    {
      href: 'https://ustr.gov/issue-areas/enforcement/section-301-investigations/tariff-actions',
      label: 'USTR - China Section 301 tariff actions',
      note: 'Official USTR entry point for List 1, List 2, List 3, List 4, exclusions, four-year review, and machinery exclusion process materials.',
    },
    {
      href: 'https://www.cbp.gov/trade/programs-administration/entry-summary/section-301-trade-remedies/faqs',
      label: 'CBP - Section 301 Trade Remedies FAQ',
      note: 'Official CBP FAQ source for Section 301 trade-remedy questions, including origin and entry-treatment context for products of China.',
    },
    {
      href: 'https://www.cbp.gov/trade/programs-administration/trade-remedies',
      label: 'CBP - Trade Remedies',
      note: 'Official CBP trade-remedy hub for Section 301, Section 232, Section 201, antidumping and countervailing duty, and related guidance.',
    },
    {
      href: 'https://www.cbp.gov/trade/programs-administration/trade-remedies/IEEPA-FAQ',
      label: 'CBP - IEEPA Frequently Asked Questions',
      note: 'Official CBP FAQ context for IEEPA duties and how separate tariff regimes can interact with Section 301 exclusion questions.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Supplier English name, Chinese name, business license if available, factory or pickup address, exporter, shipper, invoice issuer, and bank beneficiary',
    'Product photos, model numbers, labels, dimensions, material composition, function, accessories, SKU list, bundles, spare parts, and packaging details',
    'Supplier quote, proforma invoice, purchase order, commercial invoice draft, packing list draft, product page screenshots, and revision history',
    'Importer or broker HTSUS notes, Section 301 list or exclusion instructions, IEEPA notes, AD/CVD notes, origin-marking instructions, and shipment release rules',
    'Carton count, unit count, carton labels, shipping marks, product labels, forwarder pickup window, incoterms, and destination country',
    'Written instructions for which product, origin, invoice, or paperwork issue should block deposit, final payment, pickup, or shipment release',
  ],
  redFlags: [
    'Supplier provides only a generic HS code or U.S. duty rate and refuses product details needed by the importer or broker',
    'Quote, PI, invoice draft, packing list, product photos, and carton labels use different product descriptions for the same SKU',
    'Supplier changes material, model, component source, bundle, accessory set, exporter, or invoice issuer after the broker has reviewed the file',
    'The supplier claims tariff savings through Hong Kong, third-country routing, or alternate exporter details without importer or broker approval',
    'Product identity depends on technical details such as voltage, capacity, coating, fabric, material composition, or component function that are missing',
    'Multiple SKUs, kits, or spare parts are packed under one vague invoice line that cannot be reconciled to photos and packing records',
    'Factory location, pickup location, shipper, invoice issuer, and supplier role do not line up cleanly before final payment',
    'No importer, licensed customs broker, or trade counsel has accepted responsibility for classification, duties, exclusions, and customs entry before release',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible supplier, product, carton, label, quote, invoice, packing, factory, pickup, and shipment evidence against buyer-provided references in China',
    'Huang Sourcing does not classify products, calculate duties, decide Section 301 exclusion eligibility, act as importer of record, file entries, or provide legal advice',
    'A China-side evidence check cannot guarantee customs release, tariff savings, exclusion acceptance, origin treatment, AD/CVD avoidance, IEEPA treatment, or marketplace compliance',
    'The importer of record, licensed customs broker, trade counsel, tariff engineer, compliance adviser, or responsible customs owner remains accountable for regulated decisions',
    'Supplier obstruction, missing technical specs, mixed SKUs, translated descriptions, late product changes, sealed cartons, or route changes can limit report confidence',
    'Section 301 rates, exclusions, HTSUS notes, IEEPA duties, CBP guidance, broker requirements, and other trade-remedy rules can change, so time-sensitive instructions should be reconfirmed before shipment release',
  ],
  relatedLinks: [
    {
      href: supplierVerificationChecklistHref,
      label: 'Supplier verification China checklist',
      note: 'Start here when the buyer needs company, quote, and payment-risk signals before deposit.',
    },
    {
      href: supplierVerificationChinaLimitsArticleHref,
      label: 'Supplier verification China limits',
      note: 'Use this to separate visible supplier evidence from customs, legal, and future-performance guarantees.',
    },
    {
      href: alibabaSupplierVerificationPaymentArticleHref,
      label: 'Alibaba supplier verification before payment',
      note: 'Review supplier profile, invoice, payment details, and quote signals before funds move.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Organize tariff evidence, product photos, and release notes into a decision-ready report.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Use when product labels, carton marks, and shipment paperwork must match the release file.',
    },
    {
      href: preShipmentBeforePickupArticleHref,
      label: 'Pre-shipment inspection before pickup',
      note: 'Check product, carton, label, packing, and release evidence before the forwarder collects goods.',
    },
    {
      href: chinaSamplesUsCustomsArticleHref,
      label: 'Shipping China samples to the U.S.',
      note: 'Use this when sample shipments need U.S. customs planning before a production order.',
    },
    {
      href: uflpaChinaSupplierCheckArticleHref,
      label: 'UFLPA China supplier check',
      note: 'Use when supplier-chain, material-origin, forced-labor, or importer due-diligence issues are also present.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare names, photos, labels, order files, and release rules before the China-side check.',
    },
    {
      href: huangSourcingCheckScopeArticleHref,
      label: 'Huang Sourcing check scope',
      note: 'Confirm which questions fit a China-side evidence check and which require specialists.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What is a China Section 301 tariff check?',
      answer:
        'It is a practical evidence review before payment or shipment that ties the actual China-sourced goods to photos, product details, supplier records, origin facts, invoice wording, packing records, and importer or broker instructions. It supports tariff review but does not classify the product or calculate duties.',
    },
    {
      question: 'Did USTR extend all China Section 301 exclusions through 2026?',
      answer:
        'No. USTR extended 178 current exclusions until November 10, 2026. Buyers should not treat that as a blanket exclusion for all China-sourced goods. Exclusion analysis depends on the exact HTSUS statistical reporting number, product description, and official instructions.',
    },
    {
      question: 'Can a China supplier tell me the correct U.S. HTS code?',
      answer:
        'A supplier can provide product details and may suggest an HS code, but the U.S. importer, licensed customs broker, or trade counsel should own U.S. HTS classification, Section 301 treatment, exclusion eligibility, and entry decisions.',
    },
    {
      question: 'When should buyers check Section 301 evidence?',
      answer:
        'Check before deposit when the tariff impact affects landed cost, and again before final payment or pickup if product details, materials, model, exporter, invoice description, or routing change.',
    },
    {
      question: 'Does shipping through Hong Kong avoid Section 301 duties?',
      answer:
        'Do not assume routing changes origin or tariff treatment. Country-of-origin and routing questions should be approved by the importer, licensed customs broker, or trade counsel before goods ship.',
    },
    {
      question: 'What should block shipment release?',
      answer:
        'Block or escalate release when product identity is unclear, supplier paperwork uses vague or conflicting descriptions, origin facts are inconsistent, product changes were made after broker review, or no qualified responsible party has approved the customs treatment.',
    },
  ] satisfies FaqItem[],
}

export function makeChinaSection301TariffCheckArticleMetadata(): Metadata {
  const article = chinaSection301TariffCheckArticle

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

export function makeChinaSection301TariffCheckArticleJsonLd() {
  return [
    makeArticleJsonLd(chinaSection301TariffCheckArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'China Section 301 tariff evidence checklist',
      itemListElement: chinaSection301TariffCheckArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(chinaSection301TariffCheckArticle.faqs),
  ]
}
