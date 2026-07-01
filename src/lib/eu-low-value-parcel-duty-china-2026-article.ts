import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  amazonSellersFbaPrepChinaArticleHref,
  buyerSideInspectionReportArticleHref,
  chinaSamplesUsCustomsArticleHref,
  euGpsrLabelCheckChinaArticleHref,
  euLowValueParcelDutyChinaArticleHref,
  euPpwrPackagingCheckChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  preShipmentBeforePickupArticleHref,
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

export const euLowValueParcelDutyChinaArticle = {
  href: euLowValueParcelDutyChinaArticleHref,
  title: 'EU EUR 3 Customs Duty on China Parcels: 2026 Seller Checklist',
  metaTitle: 'EU EUR 3 Customs Duty China Parcels 2026 Checklist',
  metaDescription:
    'EU EUR 3 customs duty China parcels guide for 2026: low-value e-commerce item checks, product identifiers, IOSS/declarant handoff, labels, and shipment evidence.',
  publishedDate: 'July 1, 2026',
  publishedDateIso: '2026-07-01T09:00:00-04:00',
  h1: 'EU EUR 3 Customs Duty on China Parcels: What Sellers Should Check in 2026',
  eyebrow: 'EU low-value parcels - China e-commerce - customs evidence',
  image: {
    alt: 'China-side package label, barcode, carton, and product evidence check before EU low-value e-commerce parcels ship',
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
    'From July 1, 2026, the EU applies a temporary EUR 3 customs duty per item on low-value consignments up to EUR 150 imported from outside the EU. The Commission says the duty replaces the duty exemption that applied until June 30, 2026 and will run until July 1, 2028, when normal customs duties are expected to apply through the e-commerce customs data model.',
  answerSummary:
    'For China sourcing and e-commerce shipments, the practical work starts before parcels leave the supplier, fulfillment warehouse, or forwarder. Sellers should confirm item groupings by tariff classification, product identifiers, IOSS or declarant responsibility, VAT and duty handoff, invoice data, labels, product safety files, and packaging evidence. Huang Sourcing can help check China-side product, label, carton, and document evidence, but customs declarations, tariff classification, IOSS, VAT, duty payment, and EU legal compliance remain with the seller, importer, platform, customs broker, tax adviser, or counsel.',
  primaryCta: {
    label: 'Check EU Parcel Evidence Before Shipment',
  },
  secondaryCta: {
    href: '#parcel-duty-checklist',
    label: 'See Parcel Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side EU low-value parcel duty evidence check before shipment.

Product / SKU count:
EU destination country:
Parcel value range:
Seller / IOSS / declarant owner:
Supplier or warehouse location:
Product identifiers available:
Labels, manuals, and safety files available:
Dispatch deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#parcel-duty-checklist', label: 'Parcel checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#item-classification', label: 'Item grouping' },
    { href: '#product-identifiers', label: 'Product IDs' },
    { href: '#safety-labels', label: 'Safety and labels' },
    { href: '#seller-handoff', label: 'Seller handoff' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Confirm whether each EU-bound parcel is a distance sale of imported goods with intrinsic value up to EUR 150',
    'Group products by tariff classification because the EUR 3 duty applies per item type, not simply once per parcel',
    'Check whether the seller, IOSS holder, special-arrangements user, indirect representative, or importer owns the declaration and payment workflow',
    'Prepare product identifiers before November 1, 2026, when the Commission says PIDs become mandatory for traceability',
    'Match SKU, product title, material, model, barcode, label, invoice description, packing record, and customs description before dispatch',
    'Flag products with higher EU safety exposure, especially toys, cosmetics, PPE, food supplements, electronics, batteries, and labelled consumer goods',
    'Separate VAT, customs duty, handling-fee, marketplace, broker, and consumer-collection assumptions before setting landed-cost or return rules',
    'Pause dispatch when product identity, classification, safety labels, supplier documents, or seller/declarant responsibility cannot be reconciled',
  ],
  checkGroups: [
    {
      title: 'Parcel and item scope',
      items: [
        'Parcel value, EU destination, distance-sale context, IOSS or non-IOSS path, seller identity, and declarant role documented before dispatch',
        'Each product type grouped by tariff heading, SKU, material, model, function, quantity, and declared value instead of relying on vague parcel totals',
      ],
    },
    {
      title: 'Product identifiers and labels',
      items: [
        'Barcode, SKU, GTIN/EAN/UPC where used, platform listing ID, model, product title, and package label checked against the actual goods',
        'PID readiness notes collected before the November 1, 2026 mandatory product identifier date described by the Commission',
      ],
    },
    {
      title: 'Safety and compliance evidence',
      items: [
        'Warnings, manuals, responsible-person details, CE or other marks, age grading, battery labels, textile labels, and packaging claims compared with buyer references',
        'Supplier declarations, test reports, product photos, listing screenshots, and correction records tied to the exact SKU and shipment batch',
      ],
    },
    {
      title: 'Seller and customs handoff',
      items: [
        'Seller, platform, IOSS holder, importer, indirect representative, customs broker, tax adviser, and return-policy owner named before release',
        'Invoice, packing, CN or HS notes, product identifiers, duty owner, VAT owner, and consumer-charge communication aligned before parcels move',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why the EU parcel duty is a current China sourcing issue',
      paragraphs: [
        'The rule starts on July 1, 2026. EU guidance says low-value consignments up to EUR 150 imported from outside the EU now face a temporary EUR 3 customs duty per item, replacing the customs duty exemption that applied until June 30, 2026. It is designed as an interim measure until July 1, 2028.',
        'The same official guidance connects the change to e-commerce growth, safety concerns, and customs traceability. The Commission says almost 5.9 billion low-value items were shipped directly from third countries to EU consumers in 2025, and targeted inspections in 2025 found over 60% of checked products failed EU standards because of missing labels, forbidden ingredients, or absent safety documentation.',
      ],
      bullets: [
        'This is active from July 1, 2026, not a future planning topic',
        'The duty is calculated by item type within the consignment, based on tariff classification',
        'Product identifiers can be declared voluntarily from July 1, 2026 and become mandatory from November 1, 2026',
        'China-side checks matter because supplier correction gets harder after parcels are packed, labelled, and handed to the forwarder',
      ],
    },
    {
      id: 'item-classification',
      title: 'Start with item grouping, not only parcel value',
      paragraphs: [
        'The common mistake is treating the new duty as one extra charge per parcel. EU guidance describes the duty as per item in a consignment, based on tariff classification. Five identical T-shirts may be one item type, while a T-shirt and a watch can create two item types and two duty charges.',
        'For sellers sourcing from China, that means mixed-SKU parcels need clean product and classification records before dispatch. Product title, model, material, function, tariff notes, quantity, and value should match across the platform listing, supplier file, commercial invoice, packing list, parcel label, and customs data sent to the logistics provider.',
      ],
      bullets: [
        'Create a parcel-level table with SKU, product title, material, model, tariff heading notes, quantity, item value, and EU destination',
        'Separate bundles, kits, variants, accessories, samples, replacements, and free gifts before the seller or broker calculates duties',
        'Use corrected invoice descriptions before dispatch when supplier wording is vague or misleading',
        'Record who approved release when classification or item grouping still needs specialist confirmation',
      ],
    },
    {
      id: 'product-identifiers',
      title: 'Product identifiers are becoming part of parcel traceability',
      paragraphs: [
        'The Commission says product identifiers become mandatory from November 1, 2026 to improve traceability and safety checks, with voluntary declaration already possible from July 1, 2026. Sellers should treat July through October as the cleanup window for SKU and identifier quality.',
        'China-side evidence should connect the identifier to the real item. If the barcode, SKU, platform listing ID, model number, or package label points to a different version than the product in the parcel, customs and market-surveillance risk increases even when the price is low.',
      ],
      bullets: [
        'Compare product identifiers on the item, retail package, master carton, platform listing, invoice, and packing record',
        'Flag reused barcodes, old SKU labels, supplier-created model numbers, and mixed-version stock before fulfillment starts',
        'Ask the supplier or warehouse to photograph corrected labels before parcels are sealed',
        'Keep one evidence folder per SKU or item type when many low-value parcels use the same product file',
      ],
    },
    {
      id: 'safety-labels',
      title: 'Low value does not mean low compliance risk',
      paragraphs: [
        'EU source material links the parcel change to product safety and compliance enforcement. The Commission highlights risk categories such as cosmetics, PPE, food supplements, toys, and electronics, and it separately points to missing labels, forbidden ingredients, and absent safety documentation as common failures in checked products.',
        'A China-side inspection cannot approve EU compliance, but it can document visible mismatches before dispatch. That includes warnings, language, responsible-person information, CE or other marks where relevant, battery labels, textile labels, packaging claims, age grading, product photos, manuals, and supplier declarations compared with the buyer-approved file.',
      ],
      bullets: [
        'Check the physical product and retail packaging against the EU listing and approved artwork',
        'Keep compliance-sensitive categories separate from ordinary accessory shipments',
        'Do not let the supplier substitute labels, manuals, batteries, materials, or packaging after the seller file is prepared',
        'Escalate claims about safety, testing, ingredients, or market access to qualified EU-side advisers before shipment release',
      ],
    },
    {
      id: 'seller-handoff',
      title: 'Name the seller, declarant, and payment owner before dispatch',
      paragraphs: [
        'The duty is imposed on business operators in the import chain, but operational responsibility can vary by seller model, platform, IOSS setup, special arrangements, indirect representative, and local customs process. Sellers should not wait for consumers to discover unexpected charges after delivery.',
        'Before the China shipment leaves, the team should know who owns VAT collection, EUR 3 duty payment, customs data, product identifiers, handling-fee assumptions, consumer messaging, returns, and post-entry evidence. That handoff is commercial as much as customs-related: it affects landed cost, margin, customer complaints, and whether the supplier needs to relabel or split stock before dispatch.',
      ],
      bullets: [
        'Confirm seller, platform, IOSS holder, special-arrangements user, indirect representative, importer, broker, and logistics provider roles',
        'Preserve written instructions for whether duties are prepaid, charged at checkout, or handled through another declared process',
        'Align return rules because customs charges and local admin fees may not be refundable in the same way as product price',
        'Use a hold-release rule when duty owner, product data owner, or consumer-charge owner is unclear',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Parcel scope is controlled',
      evidence:
        'Destination, value, distance-sale context, seller, declarant path, IOSS or non-IOSS workflow, and parcel owner are documented.',
      buyerDecision:
        'Proceed with data preparation, get customs/tax confirmation, or hold dispatch until the seller workflow is clear.',
    },
    {
      riskNode: 'Item grouping is usable',
      evidence:
        'SKU, model, product title, tariff heading notes, material, quantity, value, bundle status, invoice wording, and packing records match.',
      buyerDecision:
        'Approve the dispatch file, split mixed SKUs, correct invoice descriptions, or ask a broker/classification adviser before release.',
    },
    {
      riskNode: 'Product identifiers match',
      evidence:
        'Barcode, SKU, GTIN/EAN/UPC where used, model, listing ID, label, product photo, and parcel data identify the same product version.',
      buyerDecision:
        'Release only after identifier mismatches, old labels, reused barcodes, and mixed-version stock are corrected or documented.',
    },
    {
      riskNode: 'Compliance evidence is not misleading',
      evidence:
        'Labels, warnings, manuals, product safety files, responsible-person details, packaging claims, and supplier declarations match the SKU and market plan.',
      buyerDecision:
        'Hold payment or dispatch when supplier files are generic, outdated, unverifiable, or inconsistent with the product in cartons.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official European Commission and Council source context on low-value consignments, the EUR 3 temporary customs duty, the 150 EUR threshold, e-commerce imports, product identifiers, and product compliance enforcement current to July 1, 2026.',
    'Buyer-provided SKU list, product titles, tariff notes, platform listing records, invoice drafts, parcel data, IOSS or seller workflow notes, label files, product identifiers, and EU destination plan.',
    'Physical product, retail package, barcode, label, carton, parcel, packing, correction, and supplier document evidence observed or collected in China before dispatch.',
    'Specialist guidance from the seller, platform, importer, IOSS owner, customs broker, indirect representative, tax adviser, market-surveillance adviser, testing lab, or legal counsel when regulated decisions exceed visual evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://taxation-customs.ec.europa.eu/news/guidance-and-legal-text-temporary-flat-fee-low-value-imports-which-will-apply-until-1-july-2028-2026-06-08_en',
      label: 'European Commission - temporary flat fee on low-value imports',
      note: 'Official June 2026 guidance explaining the EUR 3 customs duty from July 1, 2026, the former exemption ending June 30, 2026, the July 1, 2028 end point, product identifier timing, and FAQ examples.',
    },
    {
      href: 'https://www.consilium.europa.eu/en/press/press-releases/2025/12/12/customs-council-agrees-to-levy-customs-duty-on-small-parcels-as-of-1-july-2026/',
      label: 'Council of the EU - customs duty on small parcels',
      note: 'Council announcement of the fixed EUR 3 duty on small parcels under EUR 150 from July 1, 2026, including the per-item-by-tariff-heading explanation and IOSS context.',
    },
    {
      href: 'https://taxation-customs.ec.europa.eu/news/e-commerce-150-eur-customs-duty-exemption-threshold-be-removed-2026-2025-11-13_en',
      label: 'European Commission - EUR 150 exemption threshold removal',
      note: 'Official background on why the EU moved to remove the customs duty exemption for parcels valued below EUR 150 and link the interim rule to the Customs Reform.',
    },
    {
      href: 'https://taxation-customs.ec.europa.eu/customs/eu-customs-union-facts-and-figures/goods-bought-online_en',
      label: 'European Commission - goods bought online facts and figures',
      note: 'Official statistics on low-value consignments, including 2025 import volumes, average item value, and the share of e-commerce low-value consignments by origin.',
    },
    {
      href: 'https://taxation-customs.ec.europa.eu/news/large-scale-eu-customs-control-action-shows-most-third-country-e-commerce-goods-do-not-follow-2026-01-07_en',
      label: 'European Commission - e-commerce product compliance controls',
      note: 'Official January 2026 update connecting e-commerce parcels, product compliance, customs controls, and the July 2026 EUR 3 duty.',
    },
    {
      href: 'https://taxation-customs.ec.europa.eu/news/protein-powder-sunglasses-moisturiser-what-do-these-products-have-common-if-you-buy-them-online-they-2026-03-03_en',
      label: 'European Commission - product compliance and safety context',
      note: 'Official enforcement context for third-country e-commerce goods, market-surveillance cooperation, seller/platform responsibility, and safer online shopping goals.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'SKU list with product title, model, material, function, quantity, value, bundle status, tariff heading notes, EU destination, and seller or platform listing URL',
    'Seller, IOSS holder, declarant, importer, indirect representative, broker, logistics provider, VAT owner, duty owner, and return-policy owner notes',
    'Product identifiers such as SKU, barcode, GTIN/EAN/UPC where used, platform listing ID, model number, and package-label files',
    'Commercial invoice draft, packing list, parcel label format, customs description, product photos, label photos, carton photos, and corrected supplier files',
    'EU product safety files, warnings, manuals, responsible-person details, CE or other market labels where relevant, test reports, declarations, and listing screenshots',
    'Dispatch deadline, fulfillment method, mixed-SKU parcel rules, prepaid-duty or collection instructions, and written conditions that should block release',
  ],
  redFlags: [
    'The supplier uses one vague customs description for many different product types in the same parcel flow',
    'The SKU, barcode, platform listing, invoice, product label, and physical product do not identify the same version',
    'The seller does not know whether the shipment uses IOSS, special arrangements, an indirect representative, or another declarant path',
    'Product identifiers are missing, reused, printed on old labels, or not connected to the exact item being packed',
    'Safety-sensitive goods ship with missing warnings, wrong language, generic certificates, missing responsible-person details, or unverified claims',
    'The supplier changes material, packaging, label artwork, included accessories, batteries, instructions, or bundle composition after the customs file is prepared',
    'Low-value parcels are dispatched before VAT, duty, handling-fee, consumer-charge, and return-policy assumptions are written down',
    'The logistics provider asks for corrected customs data only after parcels are sealed or already handed over',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible product, label, barcode, package, carton, parcel, invoice, packing, and supplier-file evidence against buyer-provided references in China',
    'Huang Sourcing does not decide EU tariff classification, customs valuation, IOSS status, VAT treatment, customs duty liability, product identifier legal sufficiency, market access, or consumer-charge rules',
    'A China-side evidence check cannot prove EU customs compliance, product safety compliance, customs acceptance, market-surveillance acceptance, VAT treatment, or platform approval',
    'The seller, platform, importer, IOSS holder, indirect representative, customs broker, tax adviser, testing lab, marketplace compliance team, or counsel remains responsible for regulated decisions',
    'Supplier opacity, hidden substitutions, generic labels, mixed-version inventory, sealed parcels, unclear listing data, or late fulfillment changes can limit report confidence',
    'EU customs reform, product identifier rules, handling-fee proposals, VAT processes, platform policies, and member-state collection practice can change, so time-sensitive instructions should be reconfirmed before release',
  ],
  relatedLinks: [
    {
      href: euGpsrLabelCheckChinaArticleHref,
      label: 'EU GPSR label check guide',
      note: 'Use this when product safety labels, responsible-person details, warnings, and listing evidence affect EU shipment readiness.',
    },
    {
      href: euPpwrPackagingCheckChinaArticleHref,
      label: 'EU PPWR packaging readiness guide',
      note: 'Use this when packaging material, packaging claims, and importer handoff need review alongside parcel customs data.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Use this when labels, manuals, inserts, carton marks, and packaging evidence should block or release payment.',
    },
    {
      href: preShipmentBeforePickupArticleHref,
      label: 'Pre-shipment inspection before pickup',
      note: 'Use this when packed goods need a final pickup-readiness check before the forwarder collects.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Use this when release decisions need photo-backed evidence, red flags, and clear decision notes.',
    },
    {
      href: amazonSellersFbaPrepChinaArticleHref,
      label: 'Amazon sellers FBA prep in China',
      note: 'Use this when e-commerce sellers also need China-side FBA prep checks before Amazon-bound goods ship.',
    },
    {
      href: chinaSamplesUsCustomsArticleHref,
      label: 'Shipping China samples to the U.S.',
      note: 'Use this when low-value samples also need customs, value, description, and documentation planning.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control China manufacturing plan',
      note: 'Build product identifiers, labels, and document checks into production instead of waiting until dispatch.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare SKU, product, label, packaging, customs, and decision-rule files before the China-side check.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What changed for EU low-value parcels on July 1, 2026?',
      answer:
        'The EU began applying a temporary EUR 3 customs duty per item on low-value consignments up to EUR 150 imported from outside the EU. The duty replaces the previous customs duty exemption and is expected to apply until July 1, 2028.',
    },
    {
      question: 'Does the EUR 3 duty apply per parcel or per item?',
      answer:
        'EU guidance describes it as per item in a consignment, based on tariff classification. Multiple identical products may be one item type, while different product types in the same parcel can create multiple EUR 3 duty charges.',
    },
    {
      question: 'Is this rule only for China parcels?',
      answer:
        'No. Official EU guidance says the measure is non-discriminatory and applies regardless of origin. It matters heavily for China sourcing because official EU data shows China is the dominant origin for low-value e-commerce consignments.',
    },
    {
      question: 'What are product identifiers in this context?',
      answer:
        'The Commission says product identifiers become mandatory from November 1, 2026 to improve traceability and safety checks. Sellers should connect SKU, barcode, model, listing ID, and package-label evidence to the product actually being shipped.',
    },
    {
      question: 'What should sellers check before parcels leave China?',
      answer:
        'Check SKU identity, tariff grouping notes, product identifiers, label and packaging evidence, invoice wording, safety files, IOSS or declarant workflow, VAT and duty owner, and whether the product in the parcel matches the seller file.',
    },
    {
      question: 'Can Huang Sourcing handle EU customs compliance for this duty?',
      answer:
        'No. Huang Sourcing can check China-side product, label, parcel, carton, invoice, packing, and supplier-document evidence. EU customs declarations, tariff classification, VAT, IOSS, duty payment, product compliance, and legal decisions remain with qualified EU-side owners.',
    },
  ] satisfies FaqItem[],
}

export function makeEuLowValueParcelDutyChinaArticleMetadata(): Metadata {
  const article = euLowValueParcelDutyChinaArticle

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

export function makeEuLowValueParcelDutyChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(euLowValueParcelDutyChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'EU low-value parcel duty checklist for China sourcing',
      itemListElement: euLowValueParcelDutyChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(euLowValueParcelDutyChinaArticle.faqs),
  ]
}
