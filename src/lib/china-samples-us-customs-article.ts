import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  chinaSamplesUsCustomsArticleHref,
  sampleConsolidationCompareSuppliersArticleHref,
  supplierDepositGuideHref,
  supplierVerificationChecklistHref,
} from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

type ArticleSection = {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
}

type DecisionRow = {
  shipmentNode: string
  whatToConfirm: string
  buyerDecision: string
}

type FaqItem = {
  question: string
  answer: string
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

export const chinaSamplesUsCustomsArticle = {
  href: chinaSamplesUsCustomsArticleHref,
  title: 'Shipping Samples from China to the U.S. in 2026',
  metaTitle: 'Shipping Samples From China to USA: 2026 Customs Guide',
  metaDescription:
    'Shipping samples from China to the USA in 2026: plan customs value, invoice data, duties, courier entry, regulated goods, and consolidation.',
  publishedDate: 'June 20, 2026',
  publishedDateIso: '2026-06-20T23:45:00-04:00',
  h1: 'Shipping Samples from China to the U.S. in 2026: Customs and Consolidation',
  eyebrow: 'U.S. customs · declared value · sample consolidation',
  image: {
    alt: 'China-side product samples organized for customs documentation and consolidated courier shipping to the United States',
    height: 900,
    src: '/images/china-samples-us-customs-2026.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/china-samples-us-customs-2026.webp', width: 1600 },
    { height: 1200, src: '/images/china-samples-us-customs-2026-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/china-samples-us-customs-2026-1x1.webp', width: 1200 },
  ],
  intro:
    'A low-value product sample is still an import. Since May 2, 2025, products of China have not qualified for the U.S. duty-free de minimis administrative exemption merely because the shipment is valued at $800 or less. In 2026, buyers should price and document the customs step before asking a supplier or China-side consolidation hub to dispatch samples.',
  answerSummary:
    'Before shipping, identify each item, material, quantity, supportable customs value, country of origin, shipper, consignee, and intended use. Give the complete list to the courier or licensed customs broker, ask which entry method and charges apply on the planned ship date, and obtain written shipping approval before consolidation. Never assume that writing “sample,” “gift,” or “no commercial value” removes duties or import requirements.',
  primaryCta: {
    label: 'Plan My Sample Consolidation',
  },
  secondaryCta: {
    href: '#decision-table',
    label: 'See Shipping Decisions',
  },
  whatsappMessage: `Hi Agent Huang,

I need help receiving and consolidating China supplier samples for U.S. shipment.

Product samples:
Number of suppliers / parcels:
Materials or product details:
Estimated value by item:
Batteries, liquids, powders, magnets, food, cosmetics, or branded goods:
U.S. destination:
Preferred courier / broker:
Required arrival date:
`,
  tableOfContents: [
    { href: '#quick-checks', label: 'Quick checks' },
    { href: '#what-changed', label: 'What changed' },
    { href: '#sample-status', label: 'Are samples exempt?' },
    { href: '#declared-value', label: 'Declared value' },
    { href: '#invoice-data', label: 'Invoice data' },
    { href: '#consolidation', label: 'Consolidation decision' },
    { href: '#regulated-goods', label: 'Regulated goods' },
    { href: '#documents', label: 'What to send' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'List every sample by supplier, item, quantity, material, model or version, and country of origin',
    'Use a supportable value for each item; do not default to zero, $1, “gift,” or “no commercial value”',
    'Ask the courier or licensed customs broker which entry method, duty, tax, fee, and brokerage charges apply',
    'Confirm the importer or consignee name, U.S. address, tax or identity data, and contact details the carrier needs',
    'Check batteries, liquids, powders, magnets, food, cosmetics, medical items, chemicals, plant or animal materials, and branded goods before packing',
    'Keep supplier identity and origin visible when samples from several factories are placed in one carton',
    'Approve the final item list, weight, dimensions, value, invoice, carrier quote, and delivery terms before dispatch',
    'Retain the invoice, waybill, tracking, payment evidence, entry documents, and receipt photos for later sourcing decisions',
  ],
  sections: [
    {
      id: 'what-changed',
      title: 'What changed for China-origin low-value shipments',
      paragraphs: [
        'U.S. Customs and Border Protection states that, effective May 2, 2025, products of China no longer qualify for duty-free treatment under the de minimis administrative exemption. For non-postal shipments, an appropriate customs entry and applicable duties, taxes, and fees are required. That rule remains an active planning issue for sample parcels in 2026.',
        'The rule follows the product’s country of origin, not only the departure address. A consolidation carton sent from China may contain items with different origins, classifications, values, and agency requirements. The courier or broker needs line-level facts to determine the entry treatment; Huang Sourcing should not guess it from parcel value alone.',
      ],
      bullets: [
        'Under $800 is not, by itself, a duty-free answer for products of China',
        'Courier, postal, and freight channels can use different entry and fee processes',
        'Tariff classification, origin, value, trade remedies, and other-agency rules can all affect charges or release',
        'Current treatment should be reconfirmed close to shipment because U.S. trade measures can change',
      ],
    },
    {
      id: 'sample-status',
      title: 'Does calling the parcel a sample make it duty-free?',
      paragraphs: [
        'No. “Sample” describes why the buyer wants the item; it does not automatically create a customs exemption. Usable products, sales samples, prototypes, color swatches, packaging mockups, and supplier comparison pieces can still be merchandise for value, entry, marking, safety, and admissibility purposes.',
        'U.S. law has narrow provisions for certain samples, including specific conditions under Harmonized Tariff Schedule provisions and customs regulations. Eligibility can depend on how the item is marked, mutilated, used, valued, or documented. A normal functional sample should not be forced into a special provision without a broker or binding-ruling basis.',
      ],
      bullets: [
        'Write an accurate product description instead of only “sample”',
        'State the actual intended use, such as supplier evaluation, fit review, photography, or pre-production approval',
        'Do not mark a commercial purchase as a gift to seek different treatment',
        'Ask a broker when a special sample provision is material to the shipment decision',
      ],
    },
    {
      id: 'declared-value',
      title: 'Choose a supportable customs value for each sample',
      paragraphs: [
        'A free supplier sample can still have customs value. The invoice should show how the value was determined and remain consistent with quotes, sample charges, tooling or development invoices, supplier correspondence, and payment records. “No commercial value” is not a substitute for valuation.',
        'The correct method is fact-specific. It may involve the price paid, a value for identical or similar merchandise, production cost, or another permitted valuation method. Give the facts to the courier or licensed customs broker rather than inventing a nominal number to reduce charges.',
      ],
      bullets: [
        'Use one currency and show quantity, unit value, and total value by line',
        'Separate the merchandise value from freight or service charges when the invoice and entry process require it',
        'Keep evidence supporting free-of-charge, discounted, prototype, or development-sample values',
        'Resolve unexplained differences between supplier invoice, courier booking, payment record, and customs entry before dispatch',
      ],
    },
    {
      id: 'invoice-data',
      title: 'Build a courier-ready sample invoice and item list',
      paragraphs: [
        'The practical goal is not a decorative document. It is a line-level item list that lets the carrier or broker understand what is inside, who is involved, how the value was supported, where each item originated, and whether another U.S. agency may regulate it.',
        'Ask the carrier for its current invoice template and data requirements. The supplier or consolidation hub can assemble factual product and parcel information, while the importer and broker remain responsible for customs decisions that require destination-market expertise.',
      ],
      bullets: [
        'Shipper, consignee, importer when different, complete addresses, phone numbers, and contact emails',
        'Plain-language product name, intended use, model or version, quantity, unit, material or composition, and country of origin',
        'Unit value, total line value, currency, total invoice value, freight terms, reason for export, and payment status',
        'Candidate HS code only when supported; final classification and entry instructions should come from the importer or broker',
        'Parcel count, net and gross weight, dimensions, dangerous-goods details, and supporting permits or agency documents when applicable',
      ],
    },
    {
      id: 'consolidation',
      title: 'When sample consolidation saves money—and when to split shipments',
      paragraphs: [
        'Consolidation can replace several international courier charges with one outbound carton and can create a cleaner side-by-side review before the buyer pays to forward weak samples. It also combines values, product lines, origins, and regulated contents into one entry. That can change brokerage work, carrier acceptance, timing, or the consequences of one held item.',
        'Compare both plans before packing: separate direct shipments from suppliers versus China-side receipt, checking, and consolidated export. The lowest freight quote is not always the lowest landed or risk-adjusted cost.',
      ],
      bullets: [
        'Consolidate when identity is controlled, contents are compatible, documents are complete, and the carrier approves the combined shipment',
        'Split when one regulated, hazardous, high-value, urgent, or poorly documented item could delay the entire carton',
        'Keep each supplier’s sample code and origin attached through unboxing, comparison, repacking, invoice, and final receipt',
        'Compare freight, entry, brokerage, duty, handling, storage, correction, and delay costs—not freight alone',
      ],
    },
    {
      id: 'regulated-goods',
      title: 'Screen regulated and carrier-restricted samples before pickup',
      paragraphs: [
        'Customs release is only one boundary. Product samples may also fall under U.S. rules administered by agencies such as the Consumer Product Safety Commission, Food and Drug Administration, Department of Agriculture, Environmental Protection Agency, or Fish and Wildlife Service. Air carriers separately control dangerous goods and restricted contents.',
        'Describe materials and functions early. A small battery, liquid, powder, magnet, cosmetic, food ingredient, plant fiber, medical claim, wireless function, or branded item can change documents and carrier acceptance. Removing or concealing the description is not a shipping solution.',
      ],
      bullets: [
        'Ask the U.S. importer or specialist whether permits, registrations, test records, labeling, or agency notices are required',
        'Give the carrier battery chemistry, watt-hours, packing configuration, safety-data sheets, or dangerous-goods data when relevant',
        'Confirm intellectual-property authorization for branded, logo-bearing, or look-alike samples',
        'Do not dispatch until the carrier has accepted the actual contents and packing method in writing',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      shipmentNode: 'Single low-value China-origin sample',
      whatToConfirm:
        'Product description, origin, classification, supportable value, courier entry method, duties, taxes, fees, and importer data',
      buyerDecision:
        'Ship only after the carrier or broker confirms the current entry path and landed-charge estimate.',
    },
    {
      shipmentNode: 'Several supplier samples for comparison',
      whatToConfirm:
        'Inbound identity, combined line-item value, origins, weight, dimensions, compatible contents, invoice detail, and consolidated quote',
      buyerDecision:
        'Consolidate when total cost and document control improve without one item creating disproportionate delay risk.',
    },
    {
      shipmentNode: 'Free, prototype, or no-sale sample',
      whatToConfirm:
        'Why no price was paid, permitted valuation method, supporting cost or comparable-value evidence, intended use, and any special provision',
      buyerDecision:
        'Use a broker-supported value and treatment; do not declare zero or an arbitrary nominal amount.',
    },
    {
      shipmentNode: 'Battery, liquid, food, cosmetic, medical, plant, animal, or branded item',
      whatToConfirm:
        'Carrier acceptance, dangerous-goods rules, other-agency requirements, permits, product claims, composition, and IP authorization',
      buyerDecision:
        'Separate, re-pack, document, route through a specialist, or hold until all responsible parties approve shipment.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'The final supplier-by-supplier sample list, product descriptions, materials, quantities, versions, values, origins, and intended uses supplied by the buyer and factories.',
    'Inbound parcel labels, tracking, receipt photos, sample codes, comparison notes, repacking evidence, outbound weights, dimensions, and carton contents produced in China.',
    'Written entry, classification, valuation, duty, fee, and admissibility instructions supplied by the U.S. importer, courier, licensed customs broker, or relevant agency.',
    'Buyer-side shipping judgment based on current facts and quoted services; not a guarantee of customs release, carrier acceptance, delivery timing, or destination compliance.',
  ],
  sourceNotes: [
    {
      href: 'https://www.help.cbp.gov/s/article/Article-1915?language=en_US',
      label: 'CBP — Tariff on de minimis shipments from China',
      note: 'Official current summary of the May 2, 2025 removal of duty-free de minimis treatment for products of China and the entry requirement for non-postal shipments.',
    },
    {
      href: 'https://www.cbp.gov/trade/basic-import-export/internet-purchases',
      label: 'CBP — Internet Purchases',
      note: 'Official importer overview covering customs declarations, duties, restricted merchandise, carrier roles, and the buyer’s responsibility for imported goods.',
    },
    {
      href: 'https://www.cbp.gov/trade/basic-import-export/importer-exporter-tips',
      label: 'CBP — Tips for New Importers and Exporters',
      note: 'Official guidance on importer responsibility, reasonable care, customs brokers, classification, valuation, and advance planning.',
    },
    {
      href: 'https://hts.usitc.gov/',
      label: 'U.S. International Trade Commission — Harmonized Tariff Schedule',
      note: 'Official current U.S. tariff schedule used to research classification, general rates, special provisions, and additional trade measures.',
    },
    {
      href: 'https://www.ecfr.gov/current/title-19/chapter-I/part-10/subpart-A/section-10.49',
      label: 'eCFR — 19 CFR § 10.49, Samples',
      note: 'Official regulation for specific sample provisions; normal usable product samples should not be assumed eligible without fact-specific confirmation.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Supplier names, Chinese ship-from addresses, contact details, tracking numbers, and a unique code for every sample',
    'Plain-language product descriptions, photos, model or version, materials, functions, quantities, and intended evaluation use',
    'Country of origin for each line and an explanation when the supplier, manufacturer, and origin differ',
    'Sample prices, payment records, quotes, development charges, free-sample explanations, and other value-support evidence',
    'Battery, liquid, powder, magnet, chemical, food, cosmetic, medical, plant, animal, wireless, or branded-content details',
    'U.S. consignee and importer details plus written courier or broker instructions for invoice, entry, and delivery',
    'Required arrival date, samples to hold or reject in China, and approval for the final outbound item list and quote',
  ],
  redFlags: [
    'The supplier writes only “sample,” “parts,” or “gift” with no product, material, origin, quantity, or value detail',
    'Invoice value is zero or nominal but supplier quotes, payments, production costs, or comparable products show otherwise',
    'The courier quote excludes duties, taxes, fees, brokerage, storage, or return costs and no party accepts responsibility',
    'Different suppliers’ items lose their identity or country-of-origin data during consolidation',
    'Batteries, liquids, powders, magnets, food, cosmetics, medical claims, plant or animal materials, or brands appear only after booking',
    'The shipper proposes changing the description, origin, value, recipient, or parcel split solely to avoid normal import treatment',
    'No one has confirmed who will answer customs or carrier questions during U.S. business hours',
  ],
  scopeLimits: [
    'Huang Sourcing can receive, identify, photograph, compare, repack, and coordinate samples in China within an agreed scope',
    'Huang Sourcing is not a U.S. customs broker, law firm, tax adviser, product-certification body, or government agency',
    'Customs classification, valuation, origin, duty, entry type, and admissibility decisions belong with the importer and qualified specialists',
    'A courier quote or document review cannot guarantee customs release, agency clearance, final charges, transit time, or delivery',
    'Sample inspection does not prove that later bulk production will match; preserve an approved reference and scope production QC separately',
    'Trade measures and carrier rules can change, so time-sensitive instructions should be reconfirmed before dispatch',
  ],
  relatedLinks: [
    {
      href: '/sample-consolidation-china',
      label: 'Sample Consolidation China',
      note: 'Receive, organize, compare, and forward supplier samples through one China-side hub.',
    },
    {
      href: sampleConsolidationCompareSuppliersArticleHref,
      label: 'Compare China supplier samples',
      note: 'Control sample identity and make the supplier shortlist before paying international freight.',
    },
    {
      href: supplierVerificationChecklistHref,
      label: 'Supplier verification checklist',
      note: 'Check the company and payment path behind the sample before moving to a production deposit.',
    },
    {
      href: supplierDepositGuideHref,
      label: 'Verify a Chinese supplier before deposit',
      note: 'Convert sample approval into a controlled supplier and payment decision.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Are China samples under $800 duty-free in the U.S. in 2026?',
      answer:
        'Do not assume so. CBP states that products of China stopped qualifying for duty-free de minimis treatment on May 2, 2025. The courier or licensed customs broker should confirm the current entry method and all duties, taxes, fees, and brokerage charges for the actual items and ship date.',
    },
    {
      question: 'Can a supplier declare a free sample as zero value?',
      answer:
        'A free sample can still have customs value. Provide the facts and supporting records to the courier or broker so an allowed valuation method can be used. Zero, $1, “gift,” and “no commercial value” should not be automatic placeholders.',
    },
    {
      question: 'Does writing “sample” on the invoice remove U.S. duties?',
      answer:
        'No. It explains intended use but does not automatically create an exemption. Certain sample provisions have specific conditions. Use an accurate product description and ask a broker whether any special treatment genuinely applies.',
    },
    {
      question: 'Should samples from several China suppliers ship together?',
      answer:
        'Often, but only after comparing total landed cost and delay risk. Consolidation can reduce freight and improve sample control, while combining values, origins, regulated items, and documentation into one entry. Split an item when it could hold the whole carton or needs specialist handling.',
    },
    {
      question: 'What can Huang Sourcing do for a U.S.-bound sample shipment?',
      answer:
        'Huang Sourcing can receive parcels in China, preserve supplier identity, photograph and compare samples, assemble factual item data, repack approved samples, and coordinate with the buyer’s chosen courier or broker. U.S. customs and compliance decisions remain with the importer and qualified specialists.',
    },
    {
      question: 'Who should choose the HS code and customs value?',
      answer:
        'The supplier and China-side team can provide product facts and supporting records. The U.S. importer remains responsible and should use a licensed customs broker or other qualified adviser for classification, valuation, origin, entry, and admissibility decisions.',
    },
  ] satisfies FaqItem[],
}

export function makeChinaSamplesUsCustomsArticleMetadata(): Metadata {
  const article = chinaSamplesUsCustomsArticle

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

export function makeChinaSamplesUsCustomsArticleJsonLd() {
  return [
    makeArticleJsonLd(chinaSamplesUsCustomsArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Shipping samples from China to the United States checklist',
      itemListElement: chinaSamplesUsCustomsArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
    makeFaqPageJsonLd(chinaSamplesUsCustomsArticle.faqs),
  ]
}
