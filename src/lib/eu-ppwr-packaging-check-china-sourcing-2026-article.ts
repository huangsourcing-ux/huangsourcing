import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import {
  buyerSideInspectionReportArticleHref,
  euGpsrLabelCheckChinaArticleHref,
  euPpwrPackagingCheckChinaArticleHref,
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

export const euPpwrPackagingCheckChinaArticle = {
  href: euPpwrPackagingCheckChinaArticleHref,
  title: 'EU PPWR Packaging Check for China Sourcing in 2026',
  metaTitle: 'EU PPWR Packaging Check China Sourcing: 2026 Guide',
  metaDescription:
    'EU PPWR packaging check for China sourcing in 2026: what buyers should review before shipment, including packaging materials, labels, PFAS risk, documents, and importer handoff.',
  publishedDate: 'June 24, 2026',
  publishedDateIso: '2026-06-24T09:00:00-04:00',
  h1: 'EU PPWR Packaging Check for China-Sourced Products in 2026',
  eyebrow: 'EU PPWR - packaging evidence - pre-shipment check',
  image: {
    alt: 'China-side retail packaging, label, and carton evidence check before EU-bound goods ship',
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
    'The EU Packaging and Packaging Waste Regulation, Regulation (EU) 2025/40, generally applies from August 12, 2026. For buyers sourcing finished products from China, the practical issue is not only EU legal interpretation. It is whether the actual retail packaging, inserts, polybags, labels, cartons, and supplier files match the buyer-approved packaging plan before goods leave the factory.',
  answerSummary:
    'Before final payment or forwarder pickup, compare packaging materials, dimensions, empty space, recycling or material marks, food-contact packaging claims, supplier declarations, and importer handoff files against the physical shipment. Huang Sourcing can document China-side packaging evidence, but PPWR applicability, conformity, EPR registration, recycled-content claims, and legal compliance remain with the EU importer, producer, marketplace, laboratory, or adviser.',
  primaryCta: {
    label: 'Check EU Packaging Before Shipment',
  },
  secondaryCta: {
    href: '#ppwr-checklist',
    label: 'See PPWR Checklist',
  },
  whatsappMessage: `Hi Agent Huang,

I need a China-side EU PPWR packaging evidence check before shipment.

Product / SKU count:
EU destination country or marketplace:
Supplier / factory location:
Order quantity / cartons:
Approved packaging files:
Material, label, or declaration files:
Payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#ppwr-checklist', label: 'PPWR checklist' },
    { href: '#why-current', label: 'Why current' },
    { href: '#packaging-scope', label: 'Packaging scope' },
    { href: '#materials-labels', label: 'Materials and labels' },
    { href: '#substances', label: 'PFAS and substances' },
    { href: '#documents', label: 'What to send' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#scope-limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'List every packaging layer: unit pack, retail box, hangtag, insert, manual bag, polybag, inner carton, master carton, pallet wrap, straps, and e-commerce packaging',
    'Match the final packaging material list to the physical order, including paper, cardboard, plastic films, foams, coatings, adhesives, labels, and composite packaging',
    'Compare dimensions, weight, empty-space risk, and packaging design to the buyer-approved file before mass shipment release',
    'Check recycling, material-identification, sorting, disposal, and sustainability claims for consistency with the approved label plan',
    'For food-contact packaging, separate visible evidence from lab or compliance decisions around PFAS and other substances of concern',
    'Confirm supplier declarations, technical documentation, EU declaration of conformity, test files, and material data are tied to the same packaging version',
    'Check whether the EU importer or producer has a plan for EPR registration, reporting, and marketplace handoff before stock is shipped',
    'Hold payment or pickup when cartons contain mixed packaging versions, unapproved labels, missing inserts, unsupported green claims, or vague material records',
  ],
  checkGroups: [
    {
      title: 'Packaging inventory',
      items: [
        'Map every sales, grouped, transport, and e-commerce packaging layer used for the EU order',
        'Tie each packaging layer to SKU, model, color, carton number, packing-list line, and packaging revision',
      ],
    },
    {
      title: 'Materials and markings',
      items: [
        'Check material codes, recycling or sorting marks, disposal text, green claims, and destination-language versions',
        'Compare printed marks and supplier files with buyer-approved artwork instead of relying on loose label samples',
      ],
    },
    {
      title: 'Substance and contact risk',
      items: [
        'Flag food-contact packaging, cosmetics packaging, coated paper, waterproof finishes, inks, adhesives, and plastic films for specialist review',
        'Keep PFAS, heavy-metal, recycled-content, and compostability claims separate from visible China-side evidence',
      ],
    },
    {
      title: 'Document handoff',
      items: [
        'Collect packaging BOMs, drawings, material specs, supplier declarations, test reports, technical files, and EU declaration drafts',
        'Confirm who owns PPWR conformity, EPR registration, marketplace uploads, and correction decisions before shipment release',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why PPWR is a current China sourcing issue',
      paragraphs: [
        'PPWR entered into force on February 11, 2025 and generally applies from August 12, 2026. The European Commission also published practical guidance in 2026, which makes this a current packaging-readiness issue for EU-bound orders that are being produced, packed, or reworked in China now.',
        'The rule covers packaging and packaging waste regardless of material or origin. That matters for overseas buyers because a China supplier may treat packaging as a shipping detail, while the EU importer or producer may need proof about packaging design, material composition, recyclability, substances, labels, and producer-responsibility data.',
      ],
      bullets: [
        'EU-bound product packaging should be reviewed before cartons leave China, not only after warehouse arrival',
        'Packaging evidence should connect physical stock to approved artwork, material files, declarations, and shipment records',
        'Supplier promises about recyclable, recycled, compostable, or PFAS-free packaging should be backed by buyer-approved evidence',
        'A China-side check can document visible mismatches while specialist partners decide legal sufficiency',
      ],
    },
    {
      id: 'packaging-scope',
      title: 'What packaging should buyers include in the check?',
      paragraphs: [
        'Start broader than the retail box. PPWR is about packaging placed on the EU market, so the buyer should map the sales packaging that reaches the consumer, grouped packaging used for multi-packs, transport packaging used to protect or move goods, and e-commerce packaging used for delivery.',
        'For China-sourced products, practical problems often come from unapproved changes: a supplier swaps a polybag, changes a blister card, adds foam, uses a different coated paper, prints old recycling marks, or ships mixed packaging versions from earlier production. These are visible issues that can be checked before payment leverage is gone.',
      ],
      bullets: [
        'Photograph each packaging layer in context, including how the product sits inside the pack',
        'Compare packaging dimensions, dead space, protection function, and carton loading to the final buyer file',
        'Check whether inserts, bags, wraps, cushioning, tapes, labels, and carton marks are part of the approved packaging plan',
        'Separate export shipping protection from EU market packaging when the importer needs different decisions for each layer',
      ],
    },
    {
      id: 'materials-labels',
      title: 'How should materials and labels be checked before shipment?',
      paragraphs: [
        'A practical PPWR packaging check should connect the material bill of materials to the physical packaging. The buyer should know whether the package uses paperboard, corrugated board, PET, PE, PP, PVC, foam, coated paper, metalized film, glass, metal, textile, wood, adhesive labels, inks, or composite structures.',
        'Label checks should focus on consistency and version control. Material-identification codes, sorting marks, recycling statements, green claims, destination-language text, and marketplace packaging attributes should match the buyer-approved file and should not conflict between the product, retail package, carton, listing, and supplier declaration.',
      ],
      bullets: [
        'Capture close-ups of every recycling, material, sorting, disposal, or sustainability mark',
        'Flag unsupported phrases such as recyclable, recycled, compostable, biodegradable, plastic-free, or PFAS-free when the buyer has not provided evidence',
        'Check artwork version, print legibility, placement, barcode conflicts, and whether labels are hidden by seals or folded edges',
        'Keep the final inspected packaging photos with the declaration and test files used by the importer',
      ],
    },
    {
      id: 'substances',
      title: 'What about PFAS, heavy metals, recycled content, and food-contact packaging?',
      paragraphs: [
        'PPWR includes requirements on substances of concern, and the Commission highlights PFAS restrictions for food-contact packaging above certain thresholds. Buyers should not treat this as something an inspector can prove visually. The China-side role is to identify which packaging is food-contact or otherwise sensitive, collect supplier files, and confirm whether the tested or declared material is the same packaging actually used.',
        'The same logic applies to heavy metals, recycled content, compostability, and plastic packaging claims. A sourcing check can compare names, dates, material grades, packaging versions, and physical stock. The importer, lab, compliance provider, or legal adviser decides whether the evidence is sufficient under PPWR and related EU rules.',
      ],
      bullets: [
        'Mark food-contact packaging, coated paper, grease-resistant packs, cosmetics packs, films, adhesives, and inks for specialist review',
        'Match every test report or supplier declaration to packaging material, supplier name, date, grade, and revision',
        'Do not accept a generic material certificate when the actual packaging uses a different coating, supplier, color, or laminate',
        'Record corrections after repacking, relabeling, material substitutions, or artwork changes before shipment release',
      ],
    },
    {
      id: 'importer-handoff',
      title: 'What should the EU importer receive before goods leave China?',
      paragraphs: [
        'The importer should receive a clean package of files, not scattered chat attachments. At minimum, connect packaging artwork, material BOMs, drawings, dimensions, material declarations, test reports, supplier declarations, technical documentation, EU declaration of conformity drafts, EPR or producer-responsibility notes, and marketplace packaging fields to the same shipment.',
        'This handoff prevents a common sourcing failure: the factory ships the goods while the EU team still does not know which packaging version, material grade, or sustainability claim is actually inside the cartons. Once goods are in transit, correction options become slower, more expensive, and weaker.',
      ],
      bullets: [
        'Create one final packaging evidence folder by SKU and packaging version',
        'Confirm who can approve packaging corrections while goods are still in China',
        'Keep importer, producer, marketplace, lab, and broker responsibilities separate from China-side visual evidence',
        'Hold release when the files and physical packaging cannot be tied to the same order',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Packaging scope is complete',
      evidence:
        'Every retail, grouped, transport, and e-commerce packaging layer is listed and photographed against the SKU and carton records.',
      buyerDecision:
        'Proceed with review, request missing package-layer evidence, or split the check by SKU before approving shipment.',
    },
    {
      riskNode: 'Materials match the approved file',
      evidence:
        'Packaging BOM, drawings, supplier declarations, material marks, and physical packaging use the same material names, grades, and revisions.',
      buyerDecision:
        'Approve, require supplier correction, remove unsupported claims, or ask a lab or adviser to review the material evidence.',
    },
    {
      riskNode: 'Labels and claims are controlled',
      evidence:
        'Recycling marks, material codes, disposal text, language versions, and green claims match buyer-approved artwork and marketplace data.',
      buyerDecision:
        'Release only after old artwork, mixed packaging versions, hidden labels, or unsupported sustainability claims are corrected.',
    },
    {
      riskNode: 'Importer handoff is ready',
      evidence:
        'Technical documentation, EU declaration materials, test reports, supplier declarations, EPR notes, and correction records are tied to the final shipment.',
      buyerDecision:
        'Approve pickup when the EU responsible team has enough files to make its compliance and registration decisions.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Official European Commission PPWR overview, Regulation (EU) 2025/40, EUR-Lex summary, and 2026 Commission guidance current to June 2026.',
    'Buyer-provided packaging artwork, SKU list, material BOM, product files, supplier declarations, test reports, technical documentation, EPR notes, marketplace screenshots, and final shipment records.',
    'Physical product packaging, retail boxes, inserts, polybags, labels, carton marks, opened-carton photos, palletization evidence, and supplier correction evidence observed in China.',
    'Specialist guidance from the importer, producer, marketplace, laboratory, packaging consultant, customs adviser, or legal counsel when PPWR conformity decisions exceed visual evidence.',
  ],
  sourceNotes: [
    {
      href: 'https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en',
      label: 'European Commission - Packaging waste overview',
      note: 'Official Commission page summarizing PPWR application timing, scope across packaging regardless of material or origin, and core packaging lifecycle requirements.',
    },
    {
      href: 'https://eur-lex.europa.eu/eli/reg/2025/40/oj/eng',
      label: 'EUR-Lex - Regulation (EU) 2025/40',
      note: 'Official regulation text for PPWR, including packaging requirements, conformity documentation, importer obligations, EPR provisions, and annexes.',
    },
    {
      href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ:C_202603084',
      label: 'Commission Notice - PPWR guidance document',
      note: 'June 2026 Commission guidance interpreting selected PPWR provisions, including recyclability timing, labelling transition, and transport packaging reuse context.',
    },
    {
      href: 'https://eur-lex.europa.eu/EN/legal-content/summary/packaging-and-packaging-waste-from-2026.html',
      label: 'EUR-Lex - PPWR summary',
      note: 'Plain-language EU law summary confirming entry into force and August 12, 2026 application timing.',
    },
    {
      href: 'https://environment.ec.europa.eu/publications/faq-packaging-and-packaging-waste-regulation-ppwr_en',
      label: 'European Commission - PPWR FAQ',
      note: 'Commission FAQ page published in 2026 for practical stakeholder questions about the Packaging and Packaging Waste Regulation.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Final packaging artwork for each SKU, model, color, size, language version, and packaging format',
    'Packaging bill of materials, material specs, supplier declarations, test reports, technical documentation, and EU declaration of conformity drafts',
    'Product list, order quantity, carton count, packing list, carton marks, pallet plan, and destination country or marketplace',
    'Recycling, sorting, disposal, material-identification, sustainability-claim, and EPR or producer-responsibility instructions already approved by the EU team',
    'Food-contact, cosmetics, coated paper, plastic film, foam, adhesive, ink, recycled-content, or compostability evidence that needs specialist review',
    'Payment deadline, pickup deadline, and clear rules for which packaging issues should block release versus be documented for later importer action',
  ],
  redFlags: [
    'The supplier changed a polybag, coating, foam, box, insert, or label after the buyer approved the packaging file',
    'Cartons contain mixed old and new packaging versions, different recycling marks, or different destination-language text',
    'Green claims appear on packaging but the buyer has no matching test report, declaration, or specialist approval',
    'Food-contact packaging uses coated paper, grease-resistant material, adhesive, ink, or film with vague PFAS or substance evidence',
    'Supplier documents use a different factory, packaging material supplier, material grade, model, date, or artwork version than the packed goods',
    'The EU importer has not assigned responsibility for EPR registration, marketplace fields, technical documentation, or correction approval',
    'The supplier refuses opened-carton photos, packaging close-ups, material files, or correction evidence before pickup',
  ],
  scopeLimits: [
    'Huang Sourcing can compare visible packaging, label, carton, supplier, and document evidence against buyer-provided references in China',
    'Huang Sourcing does not certify PPWR compliance, register producers for EPR, prepare EU declarations, file marketplace data, classify packaging, authenticate lab reports, or provide legal advice',
    'A China-side evidence check cannot prove recyclability, recycled content, PFAS status, heavy-metal compliance, compostability, packaging minimisation compliance, customs acceptance, or marketplace approval',
    'The EU importer, producer, marketplace seller, lab, packaging consultant, compliance adviser, or counsel remains responsible for PPWR decisions',
    'Factory access, sealed cartons, missing files, late artwork changes, unapproved material substitutions, or supplier obstruction can limit report confidence',
    'PPWR implementing measures, guidance, national practices, and marketplace requirements can change, so time-sensitive instructions should be reconfirmed before shipment release',
  ],
  relatedLinks: [
    {
      href: euGpsrLabelCheckChinaArticleHref,
      label: 'EU GPSR label check guide',
      note: 'Use this when product safety labels, responsible-person details, warnings, and listing evidence also need checking.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks before payment',
      note: 'Use this when packaging, labels, inserts, and carton marks affect a final payment decision.',
    },
    {
      href: whatToSendBeforeChinaInspectionHref,
      label: 'What to send before China inspection',
      note: 'Prepare SKU lists, artwork, packaging references, carton records, and decision rules before inspection.',
    },
    {
      href: buyerSideInspectionReportArticleHref,
      label: 'Buyer-side inspection report guide',
      note: 'Use this when the buyer needs photo-backed evidence for a payment, pickup, or correction decision.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'Quality control China manufacturing plan',
      note: 'Build packaging evidence checks into the manufacturing plan instead of waiting until pickup.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'When does the EU PPWR apply?',
      answer:
        'Regulation (EU) 2025/40 entered into force on February 11, 2025 and generally applies from August 12, 2026. Some requirements have separate phase-in dates, so importers should confirm the exact timing for their packaging category.',
    },
    {
      question: 'Does PPWR apply to packaging from China?',
      answer:
        'Yes. The European Commission says PPWR covers packaging and packaging waste regardless of material or origin. The practical question for China sourcing is whether the packaging placed on the EU market matches the importer-approved material, label, documentation, and responsibility plan.',
    },
    {
      question: 'Can Huang Sourcing confirm PPWR compliance?',
      answer:
        'No. Huang Sourcing can check visible packaging, labels, cartons, supplier documents, and correction evidence in China. PPWR applicability, conformity, EPR registration, declarations, lab evidence, and legal compliance remain with the buyer and qualified EU-side partners.',
    },
    {
      question: 'Should buyers check PPWR evidence before final payment?',
      answer:
        'Yes, especially when packaging materials, labels, recycling marks, food-contact packaging, sustainability claims, or importer documentation are part of the release decision. Once goods leave China, repacking or relabeling is usually slower and more expensive.',
    },
    {
      question: 'What packaging layers should be photographed?',
      answer:
        'Photograph the unit pack, retail package, hangtags, inserts, manuals, polybags, inner cartons, master cartons, pallet wrap, straps, and any e-commerce packaging that belongs to the EU shipment. The evidence should connect to SKU and carton records.',
    },
    {
      question: 'What are the most common PPWR-related sourcing red flags?',
      answer:
        'Common red flags include mixed packaging versions, unsupported recyclable or compostable claims, unapproved material substitutions, unclear food-contact packaging evidence, missing supplier declarations, and no named owner for EU importer or EPR responsibilities.',
    },
  ] satisfies FaqItem[],
}

export function makeEuPpwrPackagingCheckChinaArticleMetadata(): Metadata {
  const article = euPpwrPackagingCheckChinaArticle

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

export function makeEuPpwrPackagingCheckChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(euPpwrPackagingCheckChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'EU PPWR packaging evidence checklist for China sourcing',
      itemListElement: euPpwrPackagingCheckChinaArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(euPpwrPackagingCheckChinaArticle.faqs),
  ]
}
