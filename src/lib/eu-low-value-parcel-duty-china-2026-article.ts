import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
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

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  sources?: { href: string; label: string }[]
  title: string
}
type RelatedLink = { href: string; label: string; note: string }

export const parcelSources = {
  commissionGuidance: 'https://taxation-customs.ec.europa.eu/document/download/053e5b4e-f0be-4f20-9a23-3e3b659a6676_en?filename=Customs+Guidance+on+EUR+3+customs+duty.pdf',
  dutyOverview: 'https://taxation-customs.ec.europa.eu/news/guidance-and-legal-text-temporary-flat-fee-low-value-imports-which-will-apply-until-1-july-2028-2026-06-08_en',
  dhl: 'https://www.dhl.com/global-en/microsites-2-0/core/us-tariffs/product-identifiers.html',
  easyPost: 'https://www.easypost.com/blog/what-to-know-about-eu-product-identifiers-for-fedex-ups-and-dhl/',
  easyPostDocs: 'https://docs.easypost.com/guides/eu-regulatory-updates-guide',
  customsReform: 'https://taxation-customs.ec.europa.eu/customs/eu-customs-reform_en',
  publicCase: 'https://taxation-customs.ec.europa.eu/news/large-scale-eu-customs-control-action-shows-most-third-country-e-commerce-goods-do-not-follow-2026-01-07_en',
  handlingFee: 'https://ec.europa.eu/transparency/documents-register/api/files/C(2026)6694_0/090166e533d2f58a',
}

export const euLowValueParcelDutyChinaArticle = {
  href: euLowValueParcelDutyChinaArticleHref,
  title: 'EU Parcel Duty and Product IDs: China Shipment Checks',
  metaTitle: 'EU Parcel Duty & Product ID Checks',
  metaDescription:
    'Prepare China-to-EU parcels for November product IDs: match seller and manufacturer codes, verify carrier handoff, and separate customs duty from handling fees.',
  publishedDate: 'July 1, 2026',
  publishedDateIso: '2026-07-01T09:00:00-04:00',
  modifiedDate: 'October 5, 2026',
  modifiedDateIso: '2026-10-05T03:27:00+08:00',
  h1: 'EU Parcel Duty and Product IDs: China Shipment Checks',
  eyebrow: 'EU parcels - November product IDs - China dispatch decisions',
  image: {
    alt: 'Illustrative packaging and barcode check at a China inspection bench, not evidence from the cited EU customs operation',
    height: 900,
    src: '/images/packaging-label-check-before-payment.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/packaging-label-check-before-payment.webp', width: 1600 },
    { height: 1200, src: '/images/packaging-label-check-before-payment-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/packaging-label-check-before-payment-1x1.webp', width: 1200 },
  ],
  intro:
    'Before releasing EU-bound parcels from China, match the product being packed to the identifiers that the customs declarant will receive. The November 1, 2026 product identifier requirement covers qualifying B2C distance sales regardless of value. It is a separate check from the EUR 3 customs duty on qualifying low-value consignments.',
  answerSummary:
    'Release only after the seller reference, manufacturer reference, available standard identifier, physical variant and electronic shipment data can be reconciled. Hold unexplained code substitutions, mixed versions and untested data transfers. Huang Sourcing can compare buyer-approved product and packing evidence in China; the seller, carrier and customs specialists own legal scope, declarations, charges and customs acceptance.',
  primaryCta: { label: 'Check EU Parcel Evidence Before Shipment' },
  secondaryCta: { href: '#pid-handoff', label: 'See Product ID Handoff' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side EU parcel identity and packaging check before dispatch.

EU destination, sales channel and shipment date:
Supplier or fulfillment warehouse:
SKU and variant list, merchant IDs and manufacturer IDs:
Standard identifiers where available:
Approved product, label and packing references:
Carrier, declarant and electronic data sample:
Held lots or corrections to verify:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#parcel-duty-checklist', label: 'Release checklist' },
    { href: '#pid-handoff', label: 'Product ID evidence table' },
    { href: '#why-current', label: 'Why update now' },
    { href: '#item-classification', label: 'Duty and fee distinction' },
    { href: '#product-identifiers', label: 'Missing and mixed IDs' },
    { href: '#seller-handoff', label: 'Test the data handoff' },
    { href: '#safety-labels', label: 'Safety evidence' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#decision-table', label: 'Release or hold' },
    { href: '#documents', label: 'What to send' },
    { href: '#source-notes', label: 'Sources' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Have the declarant confirm whether the transaction is a distance sale of imported goods; do not use the EUR 150 duty threshold as the PID scope test',
    'Record the merchant product identifier used by the seller or marketplace for the exact offer and variant',
    'Obtain the manufacturer, producer or product supplier reference and map it to the goods being packed',
    'Collect the standardized identifier where it exists; document a genuine absence for the declarant instead of inventing a barcode',
    'Compare product, size, colour, model, pack quantity and label revision across the approved file and sampled stock',
    'Test the actual carrier or platform data path and retain the values received by the party submitting the declaration',
    'Keep tariff classification, customs duty, handling fee, VAT and carrier administration charges separately approved',
    'Name the cleared SKUs, lots and cartons in the release record; keep unresolved stock on hold',
  ],
  checkGroups: [
    { title: 'Before stock is packed', items: [
      'Freeze the SKU-to-manufacturer reference map and record supplier aliases, product variants and approved changes',
      'Ask for original product and package photos, label files and the source of each identifier',
    ] },
    { title: 'Before the carrier handoff', items: [
      'Compare the warehouse export and carrier input with the controlled product file; check truncation, blank fields and lost leading zeroes',
      'Obtain the declarant response for missing codes, bundles and special product circumstances before dispatch',
    ] },
    { title: 'Before payment or pickup', items: [
      'Inspect buyer-approved sample scope and document mixed models, stale labels, carton identity and correction evidence',
      'Keep product safety evidence and customs data review separate; a matched code does not clear a safety defect',
    ] },
    { title: 'Release record', items: [
      'Name the exact order, version, checked quantity, cleared lots, held cartons, responsible owner and outstanding conditions',
      'Reopen the review if the supplier changes the product, pack, identifier or dispatch data after approval',
    ] },
  ],
  pidRows: [
    { identifier: 'Merchant ID (M-PID)', evidence: 'Seller or marketplace reference for the offer; map it to the ordered size, colour and pack configuration. Retain the listing and order reference.', hold: 'A warehouse-only code has replaced the selling reference without an approved mapping, or one code points to different products.' },
    { identifier: 'Manufacturer ID (NS-PID)', evidence: 'Manufacturer, producer or product supplier code, supported by its specification, catalogue, product marking or controlled confirmation. Trace aliases back to the original record.', hold: 'The supplier sends a shipping number, unexplained reseller SKU or code for another product version.' },
    { identifier: 'Standard ID (S-PID), where it exists', evidence: 'Recognized identifier such as GTIN, EAN, UPC or ISBN. Compare the recorded value with the appropriate product or pack reference and retain leading zeroes.', hold: 'The code identifies another size or pack, or a random number has been added merely to fill a required software field.' },
    { identifier: 'Physical stock and data transfer', evidence: 'Sample photos and packing records link the three references to actual goods; a test export shows the intended values reach the declarant.', hold: 'The spreadsheet is complete but the carrier feed drops a field, merges variants or sends an older revision.' },
  ],
  sections: [
    {
      id: 'why-current',
      title: 'Why review the parcel file before November?',
      paragraphs: [
        'The Commission guidance sets November 1, 2026 as the mandatory PID date after the voluntary period that began in July. DHL confirms the operational scope includes qualifying online B2C imports of any value, while B2B transactions that are not distance sales are outside that requirement.',
        'This is also an active implementation task: EasyPost published carrier-integration guidance on October 2. Its documentation exposes separate merchant, manufacturer and standardized identifier fields. A shipping platform accepting an order today does not show that the November data handoff is ready.',
        'Use the remaining preparation window to resolve supplier identity gaps while stock is accessible. Build the identifier map before packing, then test the same records through the actual fulfillment channel. Do not wait for a customs query to discover that a factory code was omitted from the export file.',
      ],
      sources: [
        { href: parcelSources.commissionGuidance, label: 'Commission guidance, section 3.5: PID timing and scope' },
        { href: parcelSources.dhl, label: 'DHL: B2C scope and line-item identifiers' },
        { href: parcelSources.easyPost, label: 'EasyPost, October 2: carrier implementation update' },
        { href: parcelSources.easyPostDocs, label: 'EasyPost: electronic identifier fields' },
      ],
    },
    {
      id: 'item-classification',
      title: 'Separate the EUR 3 duty, the handling fee and product IDs',
      paragraphs: [
        'The EUR 3 temporary duty has applied since July 1, 2026 to qualifying consignments up to EUR 150. The Commission explains its item grouping by tariff classification rather than unit count: five identical T-shirts can attract one EUR 3 charge, while a T-shirt and a watch can attract two. Have the declarant confirm the grouping for the actual goods.',
        'The Union handling fee is a different measure. The Commission adopted C(2026) 6694 on September 21 with EUR 2 per item; its text provides for application on the tenth day after entry into force following Official Journal publication. EU communications point to November implementation. Confirm the operative publication and collection date with the declarant before activating customer charges; the adopted amount does not mean it is already being collected.',
        'Keep separate fields for duty, handling fee, VAT and carrier or broker charges in the commercial handoff. Identify the payer, calculation basis and applicable date for each. Do not describe every low-value parcel as costing a universal EUR 5: item groupings, tax treatment, service charges and the transaction itself still need review.',
      ],
      sources: [
        { href: parcelSources.dutyOverview, label: 'Commission Q&A: EUR 3 duty and item examples' },
        { href: parcelSources.handlingFee, label: 'Commission adopted act C(2026) 6694, Articles 1–2' },
        { href: parcelSources.customsReform, label: 'Commission customs reform: implementation timetable' },
      ],
    },
    {
      id: 'product-identifiers',
      title: 'What if the factory code or barcode is missing?',
      paragraphs: [
        'Treat a missing manufacturer reference as a supplier-data issue to resolve before dispatch. The Commission guidance expects the manufacturer, producer or product supplier to assign a non-standardized identifier if one does not exist. A standardized identifier is reported where it exists; its absence is handled through the applicable declaration process, not by buying or inventing a barcode solely to fill the field.',
        'The references do not need to be identical strings. A retailer SKU and a factory model can legitimately differ, but the evidence must show they identify the same product version. Ask the supplier to explain aliases in writing and retain the original reference. Do not silently replace a factory code with a warehouse code.',
        'For a mixed carton, separate the physical stock by the approved variant and record which references belong to each line. If the pack quantity, size, colour, manufacturer or product changes, review the mapping before the corrected order file is reused. A parcel tracking number identifies a movement, not the product sold.',
      ],
      sources: [
        { href: parcelSources.commissionGuidance, label: 'Commission guidance, section 3.5.4: missing manufacturer IDs and standard IDs' },
      ],
    },
    {
      id: 'seller-handoff',
      title: 'Test what reaches the declarant, not just the spreadsheet',
      paragraphs: [
        'Choose representative order lines from the actual fulfillment flow: a normal SKU, a variant, a bundle if sold, and a product without a standardized identifier if applicable. Ask the carrier or broker how each must be transmitted for the booked service. Keep the outbound record and the values received at the next step; a screenshot showing three empty field names is insufficient.',
        'Compare seller export, warehouse record, shipping-system input and declarant receipt. Look for truncation, reordered columns, lost leading zeroes, merged variants and old cached product data. Ask how the service represents an absent standard identifier and which document or exception codes the declarant will use. Do not insert a guessed code into live declarations.',
        'Fix the source record first, then repeat the transfer and inspect affected stock if labels or product versions were wrong. Record the test date, route, service, system version and responsible owner. Obtain the carrier operational cutoff for parcels arriving near November 1; a booking date in October does not by itself settle the import requirement.',
      ],
      bullets: [
        'Require the seller to approve the product map, the supplier to confirm its references and the declarant to approve the customs data path',
        'Keep tariff codes in their classification fields; product identifiers are additional identity data',
        'Archive the accepted version with order, batch and carton evidence so corrections can be traced',
      ],
      sources: [
        { href: parcelSources.dhl, label: 'DHL: provide product IDs electronically during shipment creation' },
        { href: parcelSources.easyPostDocs, label: 'EasyPost implementation reference: separate customs-item fields' },
      ],
    },
    {
      id: 'safety-labels',
      title: 'A matching product ID does not establish product safety',
      paragraphs: [
        'Use the identity map to connect the goods with the buyer-approved safety file, warnings, instructions, responsible-party details and relevant test records. It is useful for finding mismatches; it cannot turn an unrelated report or incorrect label into evidence for the shipped model.',
        'A China-side check can document what was accessible: sampled product identity, visible labels, package configuration, carton scope and correction photos. Technical testing, legal applicability and EU market access require the responsible specialists. Keep a safety hold in place even if the electronic shipment record passes validation.',
      ],
      sources: [
        { href: parcelSources.publicCase, label: 'Commission public control operation: product compliance findings' },
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    { riskNode: 'Product map and handoff both match', evidence: 'Approved seller and manufacturer references, available standard ID, sample photos and declarant receipt identify the same goods.', buyerDecision: 'Release the named order scope only after the separate safety, customs and charge approvals are complete.' },
    { riskNode: 'Missing or inconsistent manufacturer reference', evidence: 'Supplier code is absent, reused for unrelated models or cannot be linked to the actual stock.', buyerDecision: 'Hold the affected lines. Obtain the responsible supplier assignment or mapping, correct the file and repeat the handoff check.' },
    { riskNode: 'No standardized identifier exists', evidence: 'Supplier confirmation distinguishes genuine absence from a missing data field; the declarant confirms its accepted reporting treatment.', buyerDecision: 'Use the confirmed reporting path. Do not invent a code or treat genuine absence as automatic permission to omit all identifiers.' },
    { riskNode: 'Mixed stock or old labels', evidence: 'Physical variants differ from the order file, barcode reference or approved pack configuration.', buyerDecision: 'Segregate affected cartons, correct product or data errors and recheck before payment or pickup.' },
    { riskNode: 'Data transfer or charge responsibility unresolved', evidence: 'Fields disappear in the carrier feed, or no one owns the declaration, fee commencement or payment instructions.', buyerDecision: 'Hold that dispatch flow until the responsible party accepts the corrected data and commercial handoff.' },
  ],
  evidenceBasis: [
    'This substantive update was researched from public Commission records and carrier documentation checked on October 5, 2026 Beijing time. The first publication date is retained.',
    'The public control case is an official EU enforcement record. The proposed supplier-to-warehouse-to-declarant workflow is Huang Sourcing editorial analysis, not a claim of participation in that case.',
    'For an actual order, the check uses buyer-provided references, accessible sampled goods, packing records and documented carrier or declarant responses. No client inspection or outcome is asserted here.',
    'Carrier documentation explains implementation for the named provider; it is not a substitute for current legislation or a destination-specific customs decision.',
  ],
  sourceNotes: [
    { href: parcelSources.commissionGuidance, label: 'European Commission — customs guidance, section 3.5', note: 'Primary explanatory guidance for PID timing, identifier roles, missing codes and supplier-to-declarant responsibilities.' },
    { href: parcelSources.dutyOverview, label: 'European Commission — temporary EUR 3 duty Q&A', note: 'Duty scope and tariff-based item examples. Its older handling-fee proposal wording is superseded by the later adopted act linked below.' },
    { href: parcelSources.handlingFee, label: 'Commission — adopted EUR 2 handling-fee act', note: 'C(2026) 6694, September 21, 2026: amount and commencement mechanism. Check Official Journal status before using a collection date.' },
    { href: parcelSources.customsReform, label: 'European Commission — current customs reform overview', note: 'September reform context, legal-document links and phased implementation timetable.' },
    { href: parcelSources.dhl, label: 'DHL — product identifier instructions', note: 'Carrier guidance on B2C scope, M-PID, NS-PID, standard identifiers where available and electronic shipment data.' },
    { href: parcelSources.easyPost, label: 'EasyPost — October 2 carrier implementation update', note: 'Independent current implementation signal. Legal scope and fee commencement in this guide rely on the primary Commission records.' },
    { href: parcelSources.easyPostDocs, label: 'EasyPost — EU regulatory integration documentation', note: 'Provider field mapping for merchant, manufacturer and standardized IDs; verify requirements for the booked carrier and service.' },
    { href: parcelSources.publicCase, label: 'European Commission — January 7 public control case', note: 'Checks of 20,000 toys and small electronics; the dangerous-product percentage concerns a selected laboratory-tested subset.' },
  ],
  whatToSend: [
    'Destination, transaction type, carrier/service, expected import timing, seller, warehouse and customs declarant contacts',
    'Variant-level product list with merchant ID, manufacturer or supplier ID, standardized ID where it exists, and the source of each value',
    'Approved specification, purchase order, product and package photos, label artwork, pack quantity and supplier alias/change records',
    'Warehouse export, carrier input and a documented test receipt from the next party in the declaration chain',
    'Invoice draft, packing list, classification notes approved by the responsible party, safety file references and affected lot/carton map',
    'Correction history, separate charge instructions, payment/pickup deadline and conditions that must block release',
  ],
  redFlags: [
    'The supplier provides one model code for materially different products with no controlled variant explanation',
    'The warehouse replaces manufacturer references with internal fulfillment codes and cannot show the mapping',
    'A barcode scans successfully but resolves to a different size, quantity or product',
    'The system converts identifiers to numbers and removes leading zeroes',
    'The carrier file lacks a manufacturer field even though the spreadsheet contains it',
    'A passed data check is treated as safety approval, or a future handling fee is presented as an already collected charge',
  ],
  scopeLimits: [
    'Huang Sourcing can compare accessible product, packaging, label and supplier records with buyer-approved references in China; inspection findings concern the agreed sample and scope',
    'The service does not assign legal tariff classifications, issue customs declarations, decide VAT or IOSS treatment, certify product safety or guarantee customs release',
    'Sellers, platforms, manufacturers, carriers, declarants and qualified advisers retain their respective data and regulatory responsibilities',
    'Missing supplier records, sealed stock, undisclosed substitutions and changes after inspection can limit the conclusions',
    'Confirm current legislation, Official Journal commencement, national implementation and booked-service instructions before dispatch',
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
    { question: 'Does an order above EUR 150 avoid the November PID requirement?', answer: 'No. Do not use the low-value duty threshold as a PID exemption. DHL and the Commission guidance describe the requirement for qualifying distance sales of imported goods; have the declarant confirm the transaction scope.' },
    { question: 'Must every code be printed on the product?', answer: 'Do not assume every electronic reference must be a physical label. Merchant IDs can originate in the selling system. Check the applicable product marking obligations and carrier document instructions separately, and retain a reliable mapping to the physical goods.' },
    { question: 'Can a supplier just send a different code after packing?', answer: 'Treat a changed code as a controlled correction. Establish whether only the record changed or the product, variant, manufacturer or pack changed too. Update the approved map and repeat the affected stock and data checks before release.' },
  ],
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
      modifiedTime: article.modifiedDateIso,
      images: getArticleOpenGraphImages(article),
    },
    twitter: { card: 'summary_large_image', title: article.metaTitle, description: article.metaDescription, images: [article.image.src] },
  }
}

export function makeEuLowValueParcelDutyChinaArticleJsonLd() {
  return [
    {
      ...makeArticleJsonLd(euLowValueParcelDutyChinaArticle),
      contributor: { '@type': 'Organization', name: 'Huang Sourcing Editorial Team', url: 'https://www.huangsourcing.com/about' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'EU parcel product identity and shipment release checklist',
      itemListElement: euLowValueParcelDutyChinaArticle.quickChecks.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item })),
    },
  ]
}
