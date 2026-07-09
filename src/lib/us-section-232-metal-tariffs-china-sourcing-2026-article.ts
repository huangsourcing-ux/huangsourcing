import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  chinaSection301TariffCheckArticleHref,
  forwarderPickupChinaRisksArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  supplierVerificationChecklistHref,
  usCustomsEnforcementChinaImportsArticleHref,
  usSection232MetalTariffsChinaSourcingArticleHref,
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

export const usSection232MetalTariffsChinaSourcingArticle = {
  href: usSection232MetalTariffsChinaSourcingArticleHref,
  title:
    'U.S. Section 232 Metal Tariffs for China Sourcing: 2026 Evidence Checklist',
  metaTitle: 'U.S. Section 232 Metal Tariffs China Sourcing Checklist',
  metaDescription:
    'U.S. Section 232 metal tariffs China sourcing checklist for 2026: steel, aluminum, copper, derivative products, metal content, HTS, invoice, and broker evidence.',
  publishedDate: 'July 9, 2026',
  publishedDateIso: '2026-07-09T09:00:00-04:00',
  h1: 'U.S. Section 232 Metal Tariffs: What China Buyers Should Check Before Shipment',
  eyebrow: 'Section 232 metals - China sourcing - tariff evidence',
  image: {
    alt: 'China supplier metal components, product labels, tariff notes, invoice drafts, and shipment evidence checked before U.S. import',
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
    'On June 4, 2026, the Federal Register published Proclamation 11032, further adjusting the U.S. Section 232 tariff regimes for aluminum, steel, and copper. The changes apply to goods entered for consumption, or withdrawn from warehouse for consumption, on or after June 8, 2026, and they affect metal articles, derivative products, reduced-rate categories, U.S. content claims, and future HTS updates.',
  answerSummary:
    'For buyers sourcing from China, the operational problem is not only the tariff rate. Before deposit, final payment, pickup, or export handoff, connect the exact SKU, HTS discussion, metal content, material specification, supplier role, invoice value, origin facts, packing evidence, and broker instructions to the same shipment lot. Huang Sourcing can check whether China-side product and document evidence is coherent, but tariff classification, duty calculation, Section 232 applicability, U.S. content claims, entry filing, protests, and legal conclusions remain with the importer, broker, customs adviser, or counsel.',
  primaryCta: {
    label: 'Check Metal Tariff Evidence',
  },
  secondaryCta: {
    href: '#section-232-checklist',
    label: 'See Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side Section 232 metal tariff evidence check before payment or shipment.

Product / SKU count:
Steel / aluminum / copper content:
Supplier / factory location:
Importer / broker:
HTS or tariff concern:
Invoice / packing list status:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#section-232-checklist', label: 'Evidence checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#product-scope', label: 'Product scope' },
    { href: '#metal-content', label: 'Metal content' },
    { href: '#invoice-origin-value', label: 'Invoice and origin' },
    { href: '#broker-handoff', label: 'Broker handoff' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Ask the broker whether the product, parts, or derivative category may fall under a Section 232 aluminum, steel, or copper tariff line',
    'Tie each SKU to model number, product description, material specification, metal content, component list, carton count, and invoice line',
    'Separate ordinary country-of-origin facts from metal-origin, U.S. content, smelt-and-cast, melt-and-pour, and component-source claims',
    'Check whether the supplier can support steel, aluminum, or copper content with BOM, material certificate, drawing, quote, or production evidence',
    'Compare product photos, labels, carton marks, packing list, proforma invoice, commercial invoice, and broker-approved wording',
    'Treat mixed-material products, machinery, racks, plates, appliances, equipment, and metal parts as broker-review items before pickup',
    'Keep correction evidence when the supplier changes material, component source, invoice wording, quantity, route, or product description',
    'Pause final payment or pickup when metal content, HTS description, origin facts, value support, or broker instructions do not line up',
  ],
  checkGroups: [
    {
      title: 'Product and HTS scope',
      items: [
        'SKU, model, function, product description, HTS discussion, derivative-product concern, and broker questions organized by line item',
        'Photos and specification sheets connected to the exact goods in production, packed cartons, or pickup-ready shipment lots',
      ],
    },
    {
      title: 'Metal content evidence',
      items: [
        'Steel, aluminum, copper, alloy, component, fastener, frame, housing, rack, plate, machinery, and accessory content identified before shipment',
        'BOM, material certificate, supplier declaration, drawing, purchase record, or production note retained when metal content affects tariff review',
      ],
    },
    {
      title: 'Supplier, origin, and value',
      items: [
        'Manufacturer, trading company, payment beneficiary, shipper, exporter, factory location, pickup address, and invoice issuer reconciled',
        'Quote, proforma invoice, final invoice, assists, tooling, discounts, freight terms, component-source notes, and route changes checked for conflicts',
      ],
    },
    {
      title: 'Broker release file',
      items: [
        'Importer, broker, HTS notes, Section 232 concern, entry path, bond or account notes, and stop-release instructions gathered before pickup',
        'Written hold rule used when classification, metal content, U.S. content, origin, valuation, or supplier evidence is missing or inconsistent',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why Section 232 metal tariffs are a current 2026 sourcing issue',
      paragraphs: [
        'Proclamation 11032 is current because it was published in the Federal Register on June 4, 2026 and applies to covered entries from June 8, 2026. It modifies earlier aluminum, steel, and copper tariff regimes and directs agencies to implement additional HTS changes, guidance, and enforcement administration where needed.',
        'The proclamation is not China-specific. That makes the China sourcing workflow more important, not less. Buyers still need to know what the product is, what metal it contains, whether it is a covered article or derivative product, how the invoice describes it, and what the broker needs before the goods leave the supplier.',
      ],
      bullets: [
        'The rules can affect products made mostly of metal and products with metal components',
        'Derivative coverage can change through inclusion processes and Federal Register updates',
        'Supplier documents often use broad descriptions that are not enough for broker review',
        'A China-side check can preserve evidence before cartons move to a forwarder or port',
      ],
    },
    {
      id: 'product-scope',
      title: 'Start with the product, not the supplier sales name',
      paragraphs: [
        'A supplier quote may call a product a shelf, bracket, machine part, fixture, rack, appliance, component, accessory, tool, or hardware set. That sales name is not enough. The broker needs the actual function, material, dimensions, parts, composition, and proposed HTS treatment.',
        'Before shipment, connect the buyer-approved product record to what is in cartons. The check should compare product photos, labels, model numbers, component lists, drawings, packing list lines, and invoice wording so the broker is reviewing the real goods, not a generic quotation.',
      ],
      bullets: [
        'Identify whether the product is a metal article, derivative article, machinery, equipment, appliance, part, component, or mixed-material good',
        'Separate the main product from spare parts, replacement parts, fasteners, stands, frames, brackets, and accessories',
        'Keep SKU-level evidence when only some variants contain steel, aluminum, or copper',
        'Flag any supplier attempt to simplify the product description after tariff questions begin',
      ],
    },
    {
      id: 'metal-content',
      title: 'Metal content needs evidence before the goods leave China',
      paragraphs: [
        'Section 232 review can turn on metal type, content, component value, and the exact tariff line. A buyer should not rely on a chat message saying the item is iron, stainless steel, aluminum alloy, copper, brass, or mixed metal without supporting production evidence.',
        'Useful China-side evidence may include a bill of materials, material certificate, supplier declaration, drawing, invoice line, component quote, factory photo, product weight note, or inspection photo showing the actual metal part. The goal is not to make a legal duty decision, but to avoid sending the broker unsupported claims.',
      ],
      bullets: [
        'Ask for metal type and grade where the supplier can support it',
        'Tie metal-content evidence to the same SKU, model, batch, and carton count',
        'Keep separate evidence for frames, housings, racks, plates, tubes, wires, motors, handles, brackets, and fasteners',
        'Treat missing BOM or material support as a release risk when the broker asks for it',
      ],
    },
    {
      id: 'invoice-origin-value',
      title: 'Invoice, origin, and valuation gaps can create tariff risk',
      paragraphs: [
        'Tariff review depends on more than material. The invoice description, price support, production facts, origin story, component source, shipper, route, and importer instructions need to tell one coherent story. That is especially important when a Chinese trading company, factory, exporter, and payment beneficiary are not the same party.',
        'Before final payment, compare the quote, proforma invoice, commercial invoice draft, packing list, product photos, supplier names, carton marks, and broker-approved description. If the supplier changes invoice value, product wording, shipper name, component source, route, or carton count, keep correction evidence and send it to the broker.',
      ],
      bullets: [
        'Do not let the supplier lower value or change descriptions to avoid tariff review',
        'Record manufacturer and exporter names when they differ from the sales company',
        'Keep tooling, assist, discount, rebate, sample, and freight-term notes with the order file',
        'Escalate origin, valuation, U.S. content, and metal-origin claims to the broker or customs adviser',
      ],
    },
    {
      id: 'broker-handoff',
      title: 'Make the broker handoff happen before pickup',
      paragraphs: [
        'A Section 232 question should not wait until the vessel has sailed. If the product is potentially covered, the importer and broker should review the evidence before pickup, while the supplier can still photograph goods, correct documents, explain components, or hold shipment.',
        'The practical handoff is a clean file: product list, photos, specifications, metal-content support, supplier identity, invoice drafts, packing list, origin notes, valuation support, and written decision rules for what should block release.',
      ],
      bullets: [
        'Ask the broker what metal-content or component evidence is needed before pickup',
        'Use broker-approved invoice and packing-list wording across supplier documents',
        'Hold release when supplier documents contradict the broker file',
        'Update the broker if the supplier changes materials, parts, cartons, route, or invoice value',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'HTS or derivative scope is unclear',
      evidence:
        'Product function, SKU, model, material, component list, photos, drawing, invoice description, and broker question are organized by line item.',
      buyerDecision:
        'Hold tariff conclusions until the importer and broker review the covered-product or derivative-product question.',
    },
    {
      riskNode: 'Metal content is unsupported',
      evidence:
        'BOM, material certificate, supplier declaration, component quote, drawing, product photos, and packed-goods evidence support the claimed steel, aluminum, or copper content.',
      buyerDecision:
        'Request supplier evidence, split uncertain SKUs, or delay pickup until the broker has enough support.',
    },
    {
      riskNode: 'Invoice and product evidence conflict',
      evidence:
        'Quote, proforma invoice, commercial invoice, packing list, labels, carton marks, product photos, quantities, and descriptions match the goods.',
      buyerDecision:
        'Correct documents before payment or pickup, and retain correction records for the broker file.',
    },
    {
      riskNode: 'Origin, value, or supplier path changed',
      evidence:
        'Factory, exporter, shipper, payment beneficiary, route, component source, price support, and valuation notes are explained before shipment.',
      buyerDecision:
        'Escalate to the broker or customs adviser before export instead of fixing the file after arrival.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official Federal Register, BIS, and CBP source context current to July 9, 2026.',
    'Buyer-provided product list, HTS discussion, supplier records, quote, proforma invoice, commercial invoice, packing list, broker notes, and importer instructions.',
    'China-side product photos, metal-content evidence, material notes, labels, carton marks, packing evidence, pickup records, and supplier correction evidence.',
    'Specialist guidance from the importer, licensed customs broker, customs adviser, product compliance adviser, or legal counsel when legal determinations exceed visible evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://www.federalregister.gov/documents/2026/06/04/2026-11314/further-adjusting-the-tariff-regimes-for-imports-of-aluminum-steel-and-copper-into-the-united-states',
      label: 'Federal Register - Proclamation 11032',
      note: 'Official June 2026 proclamation further adjusting aluminum, steel, and copper tariff regimes, effective for covered entries from June 8, 2026.',
    },
    {
      href: 'https://www.cbp.gov/trade/programs-administration/trade-remedies',
      label: 'CBP - Trade Remedies',
      note: 'CBP trade remedies hub for Section 232 metals, related implementation pages, CSMS messages, and tariff administration context.',
    },
    {
      href: 'https://www.cbp.gov/trade/programs-administration/entry-summary/232-tariffs-aluminum-and-steel-faqs',
      label: 'CBP - Section 232 Steel and Aluminum FAQs',
      note: 'CBP operational FAQ page for Section 232 steel and aluminum entry questions and implementation details.',
    },
    {
      href: 'https://www.bis.gov/about-bis/bis-leadership-and-offices/SIES/section-232-investigations/section-232-steel-aluminum',
      label: 'BIS - Section 232 Steel and Aluminum',
      note: 'BIS background page for Section 232 steel and aluminum tariffs, proclamations, HTS references, inclusions, and exclusions status.',
    },
    {
      href: 'https://www.bis.gov/about-bis/bis-leadership-and-offices/SIES/section-232-investigations/section-232-steel-aluminum/232-inclusions-processes',
      label: 'BIS - Section 232 Inclusions Processes',
      note: 'BIS page explaining public requests for new derivative steel and aluminum article inclusions and related Regulations.gov dockets.',
    },
    {
      href: 'https://www.federalregister.gov/documents/2025/08/19/2025-15819/adoption-and-procedures-of-the-section-232-steel-and-aluminum-tariff-inclusions-process',
      label: 'Federal Register - Section 232 inclusions notice',
      note: 'Federal Register notice adding derivative steel and aluminum HTS categories and explaining the inclusion process context.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Importer name, broker contact, entry plan, HTS notes, Section 232 concern, bond or account notes, and stop-release instructions',
    'Product list by SKU, model, function, material, dimensions, component list, metal content, accessories, carton count, and product photos',
    'Supplier English and Chinese names, factory address, trading-company role, payment beneficiary, shipper, exporter, pickup address, and contact records',
    'BOM, material certificate, supplier declaration, drawing, metal grade notes, product weight notes, component quotes, and production photos if available',
    'Purchase order, quote, proforma invoice, commercial invoice draft, packing list draft, payment terms, freight terms, tooling or assist records, and discount notes',
    'Origin notes, manufacturing location, component-source questions, route plan, forwarder details, U.S. content or metal-origin claims, and broker red lines',
  ],
  redFlags: [
    'The supplier says the product is not subject to tariffs without broker review',
    'The quote, invoice, product page, carton label, and packed goods use different descriptions',
    'The supplier cannot support steel, aluminum, copper, alloy, or mixed-metal claims with any record',
    'The buyer cannot connect metal content to SKU, model, batch, component, and carton count',
    'The supplier wants to lower invoice value, change product wording, swap shipper names, or split documents after tariff questions begin',
    'A trading company, factory, exporter, and payment beneficiary appear in the file with no clear relationship',
    'The forwarder pickup date arrives before the importer and broker have reviewed the Section 232 evidence question',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible product, metal, label, carton, supplier, packing, invoice, and broker-reference evidence against buyer-provided requirements in China',
    'Huang Sourcing does not act as importer of record, customs broker, customs adviser, freight forwarder, testing lab, or legal counsel',
    'A China-side evidence check cannot decide tariff classification, Section 232 coverage, country of origin, U.S. content, valuation, admissibility, bond sufficiency, or duty calculation',
    'The importer remains responsible for customs declarations, broker instructions, compliance determinations, payment of duties, protests, and legal review',
    'Factory access, sealed cartons, missing supplier files, vague product references, late material changes, or route changes can limit report confidence',
    'Section 232 metals rules can change quickly, so time-sensitive entry instructions should be reconfirmed with the broker before shipment and before entry',
  ],
  relatedLinks: [
    {
      href: usCustomsEnforcementChinaImportsArticleHref,
      label: 'U.S. customs enforcement China imports guide',
      note: 'Use this for broader IOR, broker, origin, valuation, and supplier-evidence readiness before U.S. shipment.',
    },
    {
      href: chinaSection301TariffCheckArticleHref,
      label: 'China Section 301 tariff evidence guide',
      note: 'Use this when the main question is China-origin Section 301 duty exposure and HTS handoff.',
    },
    {
      href: supplierVerificationChecklistHref,
      label: 'Supplier verification China checklist',
      note: 'Use this before deposit when the supplier identity, factory role, invoice issuer, or payment beneficiary is unclear.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control in China manufacturing plan',
      note: 'Use this when material, component, label, and production checks need to be built into the order plan.',
    },
    {
      href: forwarderPickupChinaRisksArticleHref,
      label: 'Forwarder pickup China risks',
      note: 'Use this when the decision is whether goods are ready for pickup or should be held for correction.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Use this when payment or pickup depends on photo-backed evidence and practical decision notes.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare the product files, broker notes, supplier documents, carton data, and decision rules before the onsite check.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'Are Section 232 metal tariffs only about China?',
      answer:
        'No. Section 232 metal tariffs are not China-specific. China buyers still need to prepare evidence because China-sourced goods may contain steel, aluminum, copper, or covered derivative products that the importer and broker must review.',
    },
    {
      question: 'What changed in June 2026?',
      answer:
        'Proclamation 11032, published June 4, 2026, further adjusted aluminum, steel, and copper tariff regimes for covered entries from June 8, 2026. It modified categories, rates, U.S. content thresholds, and directed implementation through HTS and agency guidance.',
    },
    {
      question: 'Can a supplier tell me whether Section 232 applies?',
      answer:
        'A supplier can provide product and material evidence, but the importer and broker should decide tariff classification, Section 232 applicability, duty treatment, and entry instructions.',
    },
    {
      question: 'What evidence should I collect before goods leave China?',
      answer:
        'Collect SKU-level product descriptions, photos, drawings, BOM, material certificates or supplier declarations, component lists, invoice drafts, packing records, origin notes, valuation support, and broker instructions.',
    },
    {
      question: 'Should I hold pickup if metal content is unclear?',
      answer:
        'If the broker needs metal-content support and the supplier cannot connect the claim to the actual goods, holding pickup is usually safer than trying to rebuild evidence after export.',
    },
    {
      question: 'Can Huang Sourcing calculate my Section 232 duty?',
      answer:
        'No. Huang Sourcing can check China-side evidence and supplier documents, but duty calculation, HTS classification, Section 232 applicability, entry filing, and legal conclusions belong with the importer, broker, customs adviser, or counsel.',
    },
  ] satisfies FaqItem[],
}

export function makeUsSection232MetalTariffsChinaSourcingArticleMetadata(): Metadata {
  const article = usSection232MetalTariffsChinaSourcingArticle

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

export function makeUsSection232MetalTariffsChinaSourcingArticleJsonLd() {
  return [
    makeArticleJsonLd(usSection232MetalTariffsChinaSourcingArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'U.S. Section 232 metal tariff China sourcing evidence checklist',
      itemListElement:
        usSection232MetalTariffsChinaSourcingArticle.quickChecks.map(
          (item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item,
          }),
        ),
    },
    makeFaqPageJsonLd(usSection232MetalTariffsChinaSourcingArticle.faqs),
  ]
}
