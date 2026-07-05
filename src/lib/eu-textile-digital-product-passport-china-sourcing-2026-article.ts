import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  euGpsrLabelCheckChinaArticleHref,
  euPpwrPackagingCheckChinaArticleHref,
  euTextileDigitalProductPassportChinaArticleHref,
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  supplierVerificationChecklistHref,
  supplierVerificationChinaLimitsArticleHref,
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

export const euTextileDigitalProductPassportChinaArticle = {
  href: euTextileDigitalProductPassportChinaArticleHref,
  title: 'EU Textile Digital Product Passport: China Supplier Data Checklist',
  metaTitle: 'EU Textile Digital Product Passport China Checklist',
  metaDescription:
    'EU textile Digital Product Passport China sourcing checklist for 2026: supplier, batch, material, label, certificate, and evidence files before shipment.',
  publishedDate: 'July 5, 2026',
  publishedDateIso: '2026-07-05T09:00:00-04:00',
  h1: 'EU Textile Digital Product Passport: What China Apparel Buyers Should Check in 2026',
  eyebrow: 'EU ESPR - textile DPP - China supplier data',
  image: {
    alt: 'China textile order data, labels, material files, and shipment evidence reviewed for EU Digital Product Passport readiness',
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
    'The EU Ecodesign for Sustainable Products Regulation is now in force, and the Commission working plan prioritizes textiles, especially garments and footwear, with an indicative 2027 adoption timeline. A May 2026 JRC study on textile apparel Digital Product Passport content is not final law, but it is detailed enough that brands sourcing apparel, bags, footwear, home textiles, and textile accessories from China should begin organizing supplier and batch evidence now.',
  answerSummary:
    'Before deposit, production approval, final payment, or shipment release, buyers should connect each textile SKU to supplier identity, production site, material composition, fiber and component records, dyeing or finishing notes, certification files, label artwork, batch or lot IDs, packaging records, and EU importer responsibility. Huang Sourcing can collect and compare China-side evidence, but ESPR applicability, DPP system design, legal sufficiency, sustainability claims, market surveillance response, and EU compliance decisions remain with the responsible economic operator and qualified advisers.',
  primaryCta: {
    label: 'Check Textile Supplier Data',
  },
  secondaryCta: {
    href: '#textile-dpp-checklist',
    label: 'See DPP Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side textile DPP supplier data check before payment or shipment.

Product / SKU count:
EU destination or marketplace:
Supplier / factory location:
Fabric, trim, and packaging files available:
Certificates or test reports:
Order quantity / cartons:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#textile-dpp-checklist', label: 'DPP checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#proposal-status', label: 'What is not final' },
    { href: '#supplier-data', label: 'Supplier data' },
    { href: '#material-composition', label: 'Materials and labels' },
    { href: '#batch-label-control', label: 'Batch control' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Identify whether the product is an EU-bound garment, footwear item, bag, home textile, textile accessory, or mixed-material product where textile data may matter',
    'Tie each SKU, model, color, size run, fabric, trim, label, carton, and purchase-order lot to the same supplier and production batch',
    'Record supplier English name, Chinese legal name, exporter, invoice issuer, bank beneficiary, factory, subcontractor, and processing site',
    'Collect fiber composition, fabric construction, lining, filling, coating, print, dyeing, finishing, zipper, button, trim, and packaging details by SKU',
    'Compare care labels, fiber labels, size labels, hangtags, QR codes, barcodes, carton marks, and marketplace product data against buyer-approved files',
    'Match certificates, declarations, test reports, recycled-content claims, organic claims, restricted-substance files, and traceability records to the exact material and lot',
    'Separate China-side evidence collection from EU legal conclusions, DPP platform selection, consumer-facing claims, customs, and market surveillance response',
    'Hold release when supplier identity, material versions, certificates, label artwork, batch records, or EU owner instructions cannot be reconciled before shipment',
  ],
  checkGroups: [
    {
      title: 'Product and batch map',
      items: [
        'Create one line per SKU, color, size range, production batch, carton group, and supplier lot',
        'Connect product photos, label photos, packing list, invoice wording, carton records, and order references',
      ],
    },
    {
      title: 'Supplier and facility chain',
      items: [
        'Compare trading company, factory, subcontractor, dyeing, printing, washing, embroidery, and packing roles',
        'Record Chinese names, addresses, invoices, bank details, licenses, and supplier answers with dates',
      ],
    },
    {
      title: 'Material and label data',
      items: [
        'Check fiber composition, fabric or leather substitute claims, lining, filling, coating, trim, care label, and hangtag data',
        'Match test reports, certificates, declarations, and sustainability claims to the same material version and supplier lot',
      ],
    },
    {
      title: 'EU handoff file',
      items: [
        'Name who owns ESPR, DPP, Textile Labelling Regulation, GPSR, REACH, EPR, marketplace, and customs decisions',
        'Package unresolved gaps, supplier refusals, late substitutions, mixed lots, and correction evidence before pickup',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why textile DPP readiness is a current China sourcing issue',
      paragraphs: [
        'Regulation (EU) 2024/1781 establishes the ESPR framework for sustainable products, including product information that will mainly be made available through the Digital Product Passport. The Commission working plan for 2025-2030 identifies textiles, especially garments and footwear, as a priority product group and gives an indicative 2027 adoption timeline for textile measures.',
        'The May 2026 JRC textile apparel DPP study adds current operational detail. It discusses proposed content, identifiers, granularity, access rights, verification, and data governance for textile apparel products under ESPR. For a China sourcing team, the practical lesson is simple: product data problems are easier to fix before production release, payment, and forwarder pickup.',
      ],
      bullets: [
        'Textile DPP requirements are not final across every product today, so buyers should avoid telling customers that a finished passport is already required for every SKU',
        'The current official direction is strong enough to start supplier and batch data discipline now',
        'China-side checks can identify whether supplier records, labels, certificates, and physical goods describe the same product',
        'The EU importer or brand still owns final DPP obligations, platform choices, declarations, and consumer-facing claims',
      ],
    },
    {
      id: 'proposal-status',
      title: 'Treat 2026 as evidence preparation, not a final textile DPP answer',
      paragraphs: [
        'The ESPR is a framework regulation. Product-specific ecodesign and DPP requirements arrive through delegated acts and supporting technical work. The JRC textile study is a policy-support study, not a final delegated act. That distinction matters because suppliers should not be allowed to invent a passport template and call the order compliant.',
        'Buyers can still take useful action now. They can require structured product data, consistent supplier names, traceable batch references, controlled label artwork, material records, and certificate matching. Those basics support DPP preparation and also reduce ordinary quality, labeling, customs, and marketplace risk.',
      ],
      bullets: [
        'Ask the EU responsible party which product scope, data fields, access rules, and claims they want collected now',
        'Keep textile DPP notes separate from GPSR, REACH, Textile Labelling Regulation, EPR, customs, and marketplace upload decisions',
        'Do not accept vague recycled, organic, durable, repairable, recyclable, or traceable claims without lot-specific evidence',
        'Refresh the file when the EU publishes final textile delegated acts or technical standards',
      ],
    },
    {
      id: 'supplier-data',
      title: 'Supplier identity must connect to the actual textile production chain',
      paragraphs: [
        'A finished garment can pass through a trader, fabric mill, dye house, printer, embroidery shop, washing facility, sewing factory, packing site, and exporter. The supplier who sends the invoice may not control every facility that creates DPP-relevant data. Buyers should document the chain early enough to correct gaps.',
        'At a practical level, supplier data starts with names and roles. The English trading name, Chinese legal name, invoice issuer, exporter, bank beneficiary, factory, subcontractor, and processing sites should not conflict with the certificates, test reports, production photos, labels, packing list, and pickup address.',
      ],
      bullets: [
        'Record Chinese legal names and addresses for factories and processors whenever available',
        'Preserve supplier answers, screenshots, certificates, declarations, invoices, and correction records by SKU and lot',
        'Flag late changes to fabric mill, dye house, sewing factory, exporter, beneficiary, or pickup location',
        'Document which names were screened, which records were unavailable, and which claims depend on another supplier',
      ],
    },
    {
      id: 'material-composition',
      title: 'Material composition, claims, and labels should describe the same product',
      paragraphs: [
        'Textile buyers already manage fiber labels, care labels, size labels, product listings, marketplace attributes, and hangtags. DPP preparation raises the cost of sloppy version control. If the fabric content, coating, lining, filling, trim, certification file, product photo, and label artwork do not match, the EU team may not know which data belongs in the product file.',
        'The same issue applies to sustainability claims. Recycled polyester, organic cotton, responsible wool, leather alternatives, low-impact dyeing, traceable cotton, PFAS-free finish, or restricted-substance claims need evidence tied to the actual supplier, material grade, purchase lot, and production batch. A generic certificate from a different product or old shipment is weak.',
      ],
      bullets: [
        'Compare fabric composition, lining, filling, interlining, coating, trims, labels, packaging, and care instructions',
        'Match certificates and test reports to supplier name, facility, material code, color, date, batch, and product scope',
        'Photograph labels, hangtags, QR or barcode carriers, care symbols, country-of-origin marks, and carton labels before release',
        'List unsupported or conflicting claims for importer, compliance adviser, marketplace, or brand review',
      ],
    },
    {
      id: 'batch-label-control',
      title: 'Batch and label control prevents data from drifting after approval',
      paragraphs: [
        'The JRC study points to a balanced approach where model-level data may work for many product characteristics while batch-level data matters where variability affects verification. In real China production, variability is common: fabric lots change, labels are reprinted, cartons are mixed, subcontractors help with overflow, and replacement trims arrive late.',
        'Buyers should freeze the evidence file as close to shipment release as possible. The final record should show which physical goods were inspected, which labels were applied, which cartons were packed, which certificate set was used, and which corrections were completed before the forwarder collected the goods.',
      ],
      bullets: [
        'Use batch, lot, carton, and label-version IDs that a buyer can reconcile after arrival',
        'Check mixed-size, mixed-color, split-production, and reworked cartons for old labels or old material versions',
        'Capture correction evidence after relabeling, repacking, certificate replacement, or material substitution',
        'Hold pickup when the supplier cannot prove which data set belongs to the packed goods',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Product and batch map is complete',
      evidence:
        'SKU, model, color, size, batch, carton, invoice, packing list, labels, and product photos reconcile to one shipment file.',
      buyerDecision:
        'Proceed with data collection, request missing lot evidence, or split the order before approving final payment.',
    },
    {
      riskNode: 'Supplier chain is visible',
      evidence:
        'Trader, factory, processor, exporter, invoice issuer, beneficiary, production site, and pickup address roles are documented.',
      buyerDecision:
        'Approve ordinary handling, ask for missing facility details, or escalate when supplier roles conflict.',
    },
    {
      riskNode: 'Materials and labels match',
      evidence:
        'Fiber composition, lining, filling, coating, trim, care label, hangtag, certificate, and test report data describe the same material version.',
      buyerDecision:
        'Release only after label errors, unsupported claims, mixed materials, or outdated certificates are corrected.',
    },
    {
      riskNode: 'EU owner can make the DPP call',
      evidence:
        'Open gaps, supplier refusals, claim limits, DPP assumptions, GPSR, REACH, textile labeling, and marketplace handoff notes are packaged for the responsible party.',
      buyerDecision:
        'Approve pickup when the EU importer, brand, marketplace, or adviser has enough evidence to decide next steps.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official ESPR Regulation (EU) 2024/1781 and European Commission implementation pages for the legal framework, product information, transition context, and Digital Product Passport direction.',
    'European Commission 2025-2030 ESPR and Energy Labelling Working Plan for textile priority status, indicative textile timeline, and product information context.',
    'May 2026 JRC textile apparel Digital Product Passport study for current policy-support detail on proposed data points, identifiers, granularity, access rights, verification, and data governance.',
    'Buyer-provided supplier names, Chinese legal names, product files, material files, label artwork, certificates, test reports, packing records, and importer compliance instructions.',
  ],
  sourceNotes: [
    {
      href: 'https://eur-lex.europa.eu/eli/reg/2024/1781/oj/eng',
      label: 'EUR-Lex - Regulation (EU) 2024/1781',
      note: 'Official ESPR text establishing the framework for sustainable product requirements and product information through delegated acts.',
    },
    {
      href: 'https://green-forum.ec.europa.eu/implementing-ecodesign-sustainable-products-regulation_en',
      label: 'European Commission - Implementing ESPR',
      note: 'Official Commission implementation page covering ESPR transition context and Digital Product Passport development.',
    },
    {
      href: 'https://environment.ec.europa.eu/document/download/5f7ff5e2-ebe9-4bd4-a139-db881bd6398f_en?filename=FAQ-UPDATE-4th-Iteration_clean.pdf',
      label: 'European Commission - ESPR Working Plan 2025-2030',
      note: 'Official working plan identifying textiles, garments, and footwear as priority products with an indicative 2027 timeline.',
    },
    {
      href: 'https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2026-05/Textiles_DPP_20260513.pdf',
      label: 'JRC - Textile apparel DPP study, May 2026',
      note: 'Policy-support study with current recommendations on textile apparel DPP content under ESPR.',
    },
    {
      href: 'https://environment.ec.europa.eu/strategy/textiles-strategy_en',
      label: 'European Commission - Sustainable and Circular Textiles Strategy',
      note: 'Official strategy context for a greener and more competitive EU textile sector.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'SKU list with product type, model, color, size range, fabric, lining, filling, trim, packaging, quantity, carton count, and shipment timeline',
    'Supplier English name, Chinese legal name, business license, factory, subcontractor, processor, dyeing, printing, washing, packing, exporter, invoice issuer, and bank beneficiary details',
    'Fabric specs, composition sheets, bills of materials, material codes, color cards, trim records, coating or finish notes, packaging specs, and approved label artwork',
    'Certificates, test reports, restricted-substance files, recycled or organic claim evidence, supplier declarations, transaction certificates, and traceability records',
    'Care label, fiber label, size label, hangtag, QR or barcode, country-of-origin, carton mark, and marketplace attribute files',
    'Importer, brand, marketplace, lab, customs broker, compliance adviser, or legal instructions for ESPR, DPP, Textile Labelling Regulation, GPSR, REACH, EPR, customs, and release blockers',
  ],
  redFlags: [
    'Supplier refuses to identify the Chinese legal entity, factory, processor, exporter, or pickup address behind the order',
    'Certificates or test reports use a different supplier, facility, material code, color, date, product scope, or transaction lot',
    'Fiber labels, care labels, hangtags, product listings, certificates, and physical goods show conflicting composition or claims',
    'Recycled, organic, traceable, PFAS-free, low-impact, durable, repairable, recyclable, or other sustainability claims are unsupported by order-specific evidence',
    'Factory changes fabric lots, labels, trims, subcontractors, dyeing, washing, printing, exporter, or packaging after approval without updated records',
    'Mixed cartons include old labels, old packaging, old material versions, reworked goods, or unapproved replacement parts',
    'No EU-side owner has accepted responsibility for final ESPR scope, DPP fields, access rights, claims, technical files, or market surveillance response',
    'The supplier treats DPP as a QR code design task instead of a structured, verifiable product-data problem',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible supplier, factory, product, material, label, carton, certificate, and shipment evidence against buyer-provided references in China',
    'Huang Sourcing does not determine ESPR applicability, final textile DPP obligations, sustainability claim legality, conformity, customs treatment, or marketplace approval',
    'A China-side evidence check cannot prove full traceability, chain-of-custody integrity, absence of restricted substances, environmental performance, social compliance, or future EU market surveillance acceptance',
    'The EU economic operator, importer, brand, marketplace, lab, customs broker, compliance adviser, legal adviser, or responsible company officer remains accountable for regulated decisions',
    'Supplier obstruction, missing upstream records, subcontracting, mixed lots, translated names, old certificates, sealed cartons, or late substitutions can limit report confidence',
    'EU delegated acts, technical standards, DPP registry rules, access rights, data-carrier requirements, and textile-specific enforcement details can change after publication',
  ],
  relatedLinks: [
    {
      href: euGpsrLabelCheckChinaArticleHref,
      label: 'EU GPSR label check for China sourcing',
      note: 'Use this when EU responsible person, product safety, label, and marketplace evidence also need review before shipment.',
    },
    {
      href: euPpwrPackagingCheckChinaArticleHref,
      label: 'EU PPWR packaging check for China sourcing',
      note: 'Use this when packaging materials, claims, and EU handoff files need a separate packaging evidence check.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Check whether labels, artwork, barcodes, cartons, and physical stock match the buyer-approved file.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control in China manufacturing plan',
      note: 'Add product-data and label checkpoints to the broader production and inspection plan.',
    },
    {
      href: supplierVerificationChecklistHref,
      label: 'Supplier verification China checklist',
      note: 'Start here when supplier identity, Chinese legal names, factory role, or payment risk is still unclear.',
    },
    {
      href: supplierVerificationChinaLimitsArticleHref,
      label: 'Supplier verification China limits',
      note: 'Separate visible supplier evidence from legal, compliance, customs, and future-performance guarantees.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Turn supplier, material, label, carton, and correction evidence into a report for buyer decisions.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare names, files, references, release rules, and evidence requirements before the check begins.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Are EU textile Digital Product Passport rules final in 2026?',
      answer:
        'No. ESPR is in force as a framework regulation, and textiles are prioritized in the Commission working plan, but textile-specific DPP requirements still depend on delegated acts and supporting technical rules. Buyers should prepare supplier and batch evidence without pretending final details are already settled.',
    },
    {
      question: 'Why should China apparel buyers prepare now?',
      answer:
        'Because supplier names, material composition, labels, certificates, lot records, and correction evidence are easier to collect before deposit, production completion, final payment, or pickup. Waiting until final EU rules or arrival can leave the importer with weak records and little supplier leverage.',
    },
    {
      question: 'What products should be reviewed first?',
      answer:
        'Start with EU-bound garments, footwear, bags, home textiles, textile accessories, textile-heavy bundles, and products with recycled, organic, traceability, durability, repairability, restricted-substance, or other sustainability claims.',
    },
    {
      question: 'Is this only a QR code or label problem?',
      answer:
        'No. A QR code or data carrier is only the access point. The harder work is proving that product data, supplier identities, material records, certificates, labels, and physical goods all describe the same product and lot.',
    },
    {
      question: 'Can a China-side check prove ESPR or DPP compliance?',
      answer:
        'No. A China-side check can document visible evidence and mismatches before shipment. ESPR applicability, DPP content, data access rules, legal sufficiency, consumer-facing claims, and EU market surveillance response belong with the responsible EU parties and qualified advisers.',
    },
    {
      question: 'What is the biggest practical risk before shipment?',
      answer:
        'The biggest practical risk is version drift: the approved material file, certificate, label, QR code, product listing, and physical packed goods no longer match. That should be caught before goods leave China.',
    },
  ] satisfies FaqItem[],
}

export function makeEuTextileDigitalProductPassportChinaArticleMetadata(): Metadata {
  const article = euTextileDigitalProductPassportChinaArticle

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

export function makeEuTextileDigitalProductPassportChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(euTextileDigitalProductPassportChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'EU textile Digital Product Passport China supplier data checklist',
      itemListElement: euTextileDigitalProductPassportChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(euTextileDigitalProductPassportChinaArticle.faqs),
  ]
}
