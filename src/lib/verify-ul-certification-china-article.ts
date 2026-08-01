import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import {
  packagingLabelCheckBeforePaymentArticleHref,
  qualityControlChinaManufacturingPlanArticleHref,
  resourceGuideHref,
  supplierDepositGuideHref,
  supplierVerificationChinaLimitsArticleHref,
  verifyChinaLabTestReportArticleHref,
  verifyUlCertificationChinaArticleHref,
} from '@/lib/site-links'

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
}

type CheckGroup = { items: string[]; title: string }
type DecisionRow = { buyerDecision: string; evidence: string; riskNode: string }
type RelatedLink = { href: string; label: string; note: string }
type SourceNote = { href: string; label: string; note: string }

export const verifyUlCertificationChinaArticle = {
  author: 'editorial-team' as const,
  href: verifyUlCertificationChinaArticleHref,
  title: 'How to Verify UL Certification from a China Supplier',
  metaTitle: 'Verify UL Certification from a China Supplier',
  metaDescription:
    'Verify a China supplier\'s claimed UL certification before deposit: match the mark, file number, holder, product category, model, factory, and production evidence.',
  publishedDate: 'August 2, 2026',
  publishedDateIso: '2026-08-02T03:26:08+08:00',
  modifiedDate: undefined,
  modifiedDateIso: undefined,
  h1: 'How to Verify UL Certification from a China Supplier',
  eyebrow: 'Official record - exact product - supplier payment decision',
  image: {
    alt: 'Original illustration of a buyer matching a generic safety mark identifier, supplier file, product model, factory, and official database record',
    height: 900,
    src: '/images/verify-ul-certification-china.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/verify-ul-certification-china.webp', width: 1600 },
    {
      height: 1200,
      src: '/images/verify-ul-certification-china-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/verify-ul-certification-china-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'Before paying a deposit or approving production, do not rely on a UL logo, supplier certificate, test-report cover, online listing, or package artwork alone. Capture the exact mark and identifier, search the official UL Product iQ record, then match the certification holder, product category, model, construction, manufacturing location, destination, and current production evidence.',
  answerSummary:
    'Approve the claim only when the official record and the order describe the same certified product and authorized mark. Hold payment when the identifier is missing, the record cannot be found, the holder or category differs, the model is outside the listing, the factory relationship is unexplained, or production changed. A China-side verification can document mismatches, but it cannot grant UL certification, interpret every standard, or guarantee compliance.',
  primaryCta: { label: 'Check Supplier Evidence Before Deposit' },
  secondaryCta: { href: '#verification-checklist', label: 'See Verification Checklist' },
  whatsappMessage: `Hi Agent Huang,

I need a China-side supplier and UL certification evidence check before deposit or production approval.

Product and intended U.S./Canadian market:
Supplier legal name and factory:
Brand, model, SKU, and product category:
Claimed UL mark, file number, or unique identifier:
Product iQ record or certification letter:
Quote, invoice, drawings, bill of materials, and sample photos:
Deposit or approval deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#verification-checklist', label: 'Verification checklist' },
    { href: '#why-current', label: 'Why this matters now' },
    { href: '#capture-mark', label: 'Capture the exact mark' },
    { href: '#official-record', label: 'Search the official record' },
    { href: '#holder-product-match', label: 'Match holder and product' },
    { href: '#factory-production', label: 'Match factory and production' },
    { href: '#reports-changes', label: 'Reports and changes' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#public-case', label: 'Public case example' },
    { href: '#documents', label: 'What to send' },
    { href: '#scope-limits', label: 'Scope limits' },
  ],
  quickChecks: [
    'Ask for clear photos of the mark on the product and package, including the wording, country code, product identity, file number, issue or serial number, unique identifier, model, ratings, and surrounding labels',
    'Search UL Product iQ using the exact identifier, file number, model, company name, product type, or category control number; preserve a dated copy of the result used for the payment decision',
    'Match the legal certification holder and address to the supplier, manufacturer, factory, brand owner, or documented authorization chain instead of assuming similar company names are interchangeable',
    'Confirm the record covers the exact product category, certification service, destination country, model or series, ratings, conditions, and current status claimed in the quote or listing',
    'Compare the certified construction and named models with the approved sample, drawings, bill of materials, critical components, ratings, labels, manuals, factory, and current production version',
    'Separate UL Listed, Classified, Recognized Component, Verified, certified-to-a-standard, and merely tested claims; each says something different and a component mark does not automatically certify the finished product',
    'Verify supporting reports or certification letters through an official UL channel and investigate changed models, factories, components, ratings, artwork, or identifiers before production approval',
    'Hold the deposit or affected production scope until the certification owner or qualified compliance party documents the match, correction, retest, transfer, alternate route, or rejection decision',
  ],
  checkGroups: [
    {
      title: 'Mark and identifier',
      items: [
        'Mark type, country code, product identity, file number or unique identifier, issue or serial number, model, electrical ratings, standard claim, label location, and package claim are legible and consistent',
        'Photos show the actual sample or product rather than a detached label file, supplier screenshot, promotional badge, edited artwork, or unrelated certificate cover',
      ],
    },
    {
      title: 'Official certification record',
      items: [
        'Product iQ result, certification holder, address, product category, category control number, service, country coverage, model family, ratings, conditions, and current record align with the claim',
        'Any certification letter or validity question is confirmed through UL Product iQ or independently obtained UL contact details rather than supplier-provided links and contact channels alone',
      ],
    },
    {
      title: 'Supplier and product match',
      items: [
        'Supplier, manufacturer, factory, brand owner, certification holder, authorization chain, product model, drawings, bill of materials, critical components, labels, manual, sample, and quote identify the same route',
        'OEM, private-label, alternate-model, multiple-listing, or component claims have written coverage that a qualified party can trace to the exact finished product and destination',
      ],
    },
    {
      title: 'Payment and change control',
      items: [
        'Deposit release names the cleared model, factory, evidence version, open conditions, responsible owner, and deadline; unsupported models remain excluded',
        'Later changes in factory, construction, component, rating, model, brand, label, or packaging trigger documented review before balance payment or shipment pickup',
      ],
    },
  ] satisfies CheckGroup[],
  sections: [
    {
      id: 'why-current',
      title: 'Why UL certification verification is a current China-sourcing issue',
      paragraphs: [
        'In July 2026, a U.S. federal court entered a consent judgment and permanent injunction in a case brought by Amazon and UL involving e-bikes marketed with UL marks. The signed order states that the plaintiffs alleged unauthorized use of UL marks and that the consent judgment resolved specified trademark, false-designation, and contract claims. It also states that the defendants did not admit liability or wrongdoing by consenting.',
        'The court record followed a May 2026 CPSC announcement of a national crackdown on fake safety labels and counterfeit certification marks. CPSC said the inquiry included methods used to detect counterfeit marks and broader schemes involving falsified testing and deceptive import practices, including products originating from China.',
        'These records do not prove that every China supplier, certification claim, e-bike, or marketplace listing is false. They do show why a mark image is not the decision record. The useful buyer control is a traceable match between the official certification source and the exact commercial order before funds commit the buyer to production.',
      ],
      bullets: [
        'Treat the official directory record as a starting point, then match it to the exact physical and commercial product',
        'Preserve the legal status of each public record: allegation, consent judgment, injunction, recall, warning, or final finding',
        'Keep certification ownership, product compliance, supplier identity, factory capability, and order quality as related but separate checks',
        'Use the deposit stage to resolve unclear ownership, model coverage, factory authorization, or construction changes while supplier replacement remains practical',
      ],
    },
    {
      id: 'capture-mark',
      title: 'Capture the exact UL mark before searching',
      paragraphs: [
        'Ask the supplier for unedited, high-resolution photos of the mark as it appears on the product and package. Record every word and identifier around it: Listed, Classified, Recognized Component, Verified, country code, product identity, file number, issue or serial number, unique ID, model, ratings, and any standard reference. Ask which legal entity is the certification holder and which factory applies the mark.',
        'UL explains that enhanced marks can include certification attributes, country codes, and a unique identifier, while legacy configurations may use a company name or file number. The visible elements vary by certification scheme. Do not conclude that a circle logo by itself proves the scope, market, product, or current authorization.',
        'Separate the certification mark applied to the product from an optional promotional badge, a component mark inside the product, a laboratory logo on a report, or marketing language such as tested to a standard. Photographing each claim in context makes later mismatches easier to isolate.',
      ],
      bullets: [
        'Request product, nameplate, package, manual, listing, and certification-letter views for every model',
        'Do not accept a clean artwork file as evidence that the shipped product is authorized to carry the mark',
        'Record the market claimed by the mark; U.S. and Canadian coverage should not be inferred from each other',
        'Flag missing, blurred, altered, inconsistent, or reused identifiers before searching broader company names',
      ],
    },
    {
      id: 'official-record',
      title: 'Search UL Product iQ and preserve the result',
      paragraphs: [
        'UL describes Product iQ as its database for verifying product or component certification. Search the exact file number or unique identifier first, then refine by model, company, product type, category control number, rating, or other record fields. A keyword hit is not enough; open the relevant record and compare its complete scope.',
        'Record the certification holder, address, product category, category control number, certification service, country coverage, model or series, ratings, limitations, and status shown for the product. If the record is unclear or a supplier presents a separate certification letter, use contact details obtained independently from UL to ask about validity.',
        'Save the date, search terms, result, and person responsible for the decision. Public records can change, and a reproducible evidence trail is more useful than a chat message saying that someone saw the model online.',
      ],
      bullets: [
        'No exact record: hold the claim rather than substituting a similar model or company',
        'Holder mismatch: require a documented OEM, private-label, or authorization path reviewed by a qualified party',
        'Category mismatch: determine whether the record covers a component, a finished product, or another certification service',
        'Market or rating mismatch: keep the unsupported destination, voltage, configuration, or model outside the release scope',
      ],
    },
    {
      id: 'holder-product-match',
      title: 'Match the certification holder to the exact supplier product',
      paragraphs: [
        'Map the commercial chain: seller, contracting supplier, manufacturer, factory, brand owner, certification holder, applicant, and importer. Similar English names, Chinese names, group companies, trading companies, and shared addresses do not establish that one entity can use another entity\'s certification mark.',
        'Then match the product. Compare product category, model and series logic, ratings, construction, critical components, intended use, brand, labels, manual, destination, and any conditions of acceptability with the quote and approved sample. Ask a qualified compliance party or the certification owner to document how private-label or alternate-model coverage applies.',
        'Supplier verification and certification verification answer different questions. A valid company registration does not prove product certification, and an official product record does not prove that the quoting supplier controls the named factory, will build the certified construction, or can meet the order terms.',
      ],
      bullets: [
        'Use legal names and registered addresses, not chat display names or marketplace storefront names',
        'Trace who owns the certification and who is authorized to apply or reproduce the mark',
        'Require exact model-family logic instead of treating a shared housing or brand as coverage',
        'Resolve unexplained manufacturer, factory, or brand differences before paying a nonrecoverable deposit',
      ],
    },
    {
      id: 'factory-production',
      title: 'Verify that the factory will build the certified construction',
      paragraphs: [
        'Connect the directory record to controlled production references: approved sample, drawings, bill of materials, critical-component list, ratings, specifications, label artwork, manual, packaging, change log, factory identity, and production location. A genuine certification for one construction does not automatically cover a visually similar substitute.',
        'Before deposit, document which factory will make the order and what evidence supports that factory relationship. During production and before shipment, compare sampled goods and labels with the approved references. Escalate substitutions in safety-relevant components, materials, wiring, batteries, chargers, enclosures, ratings, factories, models, or marks for qualified review.',
        'A factory visit or inspection can document identity, visible construction, markings, packaging, and production mismatches. It cannot see every internal difference, reproduce certification testing, or decide whether a change remains within a certification file. Keep those decisions with the certification owner, laboratory, or other qualified compliance resources.',
      ],
      bullets: [
        'Freeze the exact factory, product version, critical components, ratings, and label file before production starts',
        'Assign change approval instead of allowing silent supplier substitutions after sample acceptance',
        'Map affected lots and cartons when a change or mismatch is discovered',
        'Release corrected production only after documentary disposition and repeat inspection are traceable',
      ],
    },
    {
      id: 'reports-changes',
      title: 'Keep reports, certification, and change control separate',
      paragraphs: [
        'A test report records work performed on a stated sample. A certification record identifies a certification service and scope. A mark shows a product claim that must be authorized and correctly applied. None of those items alone proves that current mass production matches the evaluated construction.',
        'Verify full laboratory reports through the issuing source and match the report sample to the product, factory, materials, components, models, dates, methods, results, and limitations. Use Huang Sourcing\'s separate laboratory-report guide for a detailed report-integrity and sample-match workflow.',
        'Create a written change process for model, factory, component, material, rating, construction, firmware where relevant, label, manual, brand, or packaging changes. The responsible certification owner and qualified compliance parties should decide whether the record remains applicable or whether an update, alternate listing, additional evaluation, retest, or new certification is needed.',
      ],
      bullets: [
        'Do not call a product “UL certified” merely because a component has a Recognized Component mark',
        'Do not treat a passed report from any laboratory as authorization to apply UL trademarks',
        'Do not assume an official certification record covers later changes or production at an unexplained factory',
        'Keep supplier approval, deposit release, production release, balance payment, and shipment pickup as separate gates',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Mark and identifier',
      evidence:
        'Actual product and package photos show the complete mark, country code, product identity, file number or unique ID, model, ratings, and surrounding labels.',
      buyerDecision:
        'Search the exact claim, or hold when the mark is missing, cropped, altered, inconsistent, or shown only in artwork and supplier documents.',
    },
    {
      riskNode: 'Official record',
      evidence:
        'Product iQ or direct UL confirmation matches holder, address, category, service, country coverage, model, ratings, conditions, and current status.',
      buyerDecision:
        'Continue product matching, or require corrected evidence, owner confirmation, another compliance route, or supplier rejection.',
    },
    {
      riskNode: 'Supplier and holder chain',
      evidence:
        'Seller, contracting entity, manufacturer, factory, brand owner, certification holder, and any OEM or private-label authorization are traceable.',
      buyerDecision:
        'Release the deposit only for the documented route; exclude unexplained entities, factories, brands, and models.',
    },
    {
      riskNode: 'Product and production match',
      evidence:
        'Category, model, construction, critical components, ratings, sample, drawings, bill of materials, labels, manual, factory, and destination align.',
      buyerDecision:
        'Approve controlled production, or hold for correction, qualified review, additional evaluation, retesting, or new certification.',
    },
    {
      riskNode: 'Change and release control',
      evidence:
        'Every later change, affected lot, open condition, certification disposition, correction, inspection, and responsible release owner is recorded.',
      buyerDecision:
        'Release only named, cleared scope; keep changed or unresolved models, lots, payments, and pickup on hold.',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'July 2026 federal consent judgment and permanent injunction in Amazon.com Inc. et al. v. Jiangmen Meijiasheng Bicycle Co. Ltd. et al., including the allegations, claims resolved by consent, injunction, and no-admission limitation.',
    'CPSC May 6, 2026 announcement of a national crackdown and public inquiry on fake safety labels, counterfeit certification marks, detection methods, falsified testing, and deceptive import practices.',
    'Current UL Product iQ database guidance, enhanced-mark guidance, and mark FAQ checked August 2, 2026 Beijing time.',
    'Buyer-side supplier, factory, quote, approved sample, model, drawing, bill of materials, critical-component, label, manual, report, production, and change records.',
  ],
  sourceNotes: [
    {
      href: 'https://cases.justia.com/federal/district-courts/washington/wawdce/2%3A2026cv00271/357898/22/0.pdf',
      label: 'Federal consent judgment and permanent injunction',
      note: 'Primary signed July 2026 public court filing in Amazon.com Inc. et al. v. Jiangmen Meijiasheng Bicycle Co. Ltd. et al.; read with its consent and no-admission limits.',
    },
    {
      href: 'https://www.cpsc.gov/Newsroom/News-Releases/2026/US-Consumer-Product-Safety-Commission-Launches-Crackdown-on-Fake-Safety-Labels-Used-to-Push-Dangerous-Foreign-Products-into-US-Homes',
      label: 'CPSC - counterfeit certification mark crackdown',
      note: 'Primary May 6, 2026 regulator announcement covering fake marks, products from China, detection methods, falsified testing, deceptive imports, and enforcement review.',
    },
    {
      href: 'https://www.ul.com/software/product-sourcing-and-certifications-database',
      label: 'UL Solutions - Product iQ certification database',
      note: 'Official UL guidance for searching certification data by file number, category control number, model, company, product, and other identifiers and confirming validity questions.',
    },
    {
      href: 'https://www.ul.com/resources/enhanced-marks-and-badges-and-smart-ul-certification',
      label: 'UL Solutions - enhanced and smart certification marks',
      note: 'Official explanation of mark attributes, country codes, unique identifiers, promotional badges, and certification pages.',
    },
    {
      href: 'https://www.ul.com/thecodeauthority/knowledge/faq-enhanced-and-smart-ul-certification-mark',
      label: 'UL Solutions - certification mark FAQ',
      note: 'Official FAQ explaining file numbers or unique identifiers and how those identifiers can be checked in Product iQ.',
    },
    {
      href: 'https://www.bicycleretailer.com/industry-news/2026/07/07/amazon-and-ul-win-suit-over-false-ul-certifications-e-bike-and-e-scooter',
      label: 'Bicycle Retailer - independent case coverage',
      note: 'Independent July 2026 reporting on the court order, named parties, covered claims, e-bike models, and injunction context.',
    },
  ] satisfies SourceNote[],
  whatToSend: [
    'Supplier legal name in Chinese and English, business registration, storefront and quote identity, manufacturer, factory, address, brand owner, certification holder, and named contacts',
    'Clear photos of the mark on product and package, full nameplate and surrounding labels, file number or unique ID, country code, product identity, model, ratings, manual, listing, and artwork',
    'Product iQ result, certification letter, certification owner confirmation, product category and category control number, model-family explanation, country coverage, conditions, and status',
    'Product name, intended use, destination, model and SKU list, approved sample, drawings, bill of materials, critical components, ratings, specifications, labels, manuals, and package files',
    'Factory relationship, OEM or private-label authorization, full laboratory reports, report-to-model index, change log, production plan, affected lots, and qualified compliance decisions',
    'Quote, pro forma invoice, deposit amount, payment deadline, inspection and approval gates, correction rights, cancellation conditions, and person authorized to release each stage',
  ],
  redFlags: [
    'The supplier provides only a logo, promotional badge, marketplace listing, certificate cover, edited artwork, or test-report screenshot',
    'The file number or unique identifier is unreadable, missing, cannot be found, or leads to another holder, category, model, service, rating, or market',
    'The supplier, manufacturer, factory, brand owner, and certification holder differ without a documented authorization or coverage chain',
    'A component mark, generic report, similar model, shared housing, or other company\'s record is presented as finished-product certification',
    'The Product iQ record, certification letter, report, sample, invoice, drawing, label, and production files use conflicting model numbers or ratings',
    'The factory or a critical component changed after evaluation and no qualified certification disposition is available',
    'The supplier refuses independent confirmation, full reports, production-location evidence, or a written hold-and-correction gate before payment',
    'Payment terms make the deposit nonrecoverable before the certification owner, product scope, and factory-production route are resolved',
  ],
  scopeLimits: [
    'Huang Sourcing can compare public certification records, supplier and factory identities, buyer-provided files, visible marks, labels, samples, production evidence, cartons, and order documents in China against an agreed checklist',
    'Huang Sourcing does not issue or authorize UL certification marks, grant private-label coverage, interpret every certification file or standard, perform certification testing, or give legal advice',
    'A directory match does not by itself prove that current production uses the evaluated construction, that every destination requirement is met, or that a supplier can legally apply the mark',
    'A supplier or factory check cannot see all internal components, destructive-test performance, follow-up-service status, proprietary file details, or changes not disclosed by the parties',
    'UL, the certification owner, laboratories, qualified compliance parties, manufacturer, importer, marketplace, retailer, customs authorities, and buyer retain their respective responsibilities',
    'A passed evidence check cannot guarantee regulatory compliance, customs release, marketplace approval, product safety, recall avoidance, certification continuity, supplier performance, or recovery of funds',
  ],
  relatedLinks: [
    {
      href: verifyChinaLabTestReportArticleHref,
      label: 'Verify a China laboratory report',
      note: 'Check laboratory status, report integrity, exact sample, model, factory, dates, results, amendments, limitations, and production match.',
    },
    {
      href: supplierVerificationChinaLimitsArticleHref,
      label: 'Supplier verification limits',
      note: 'Separate visible company, registration, payment, factory, and document signals from what supplier verification cannot prove.',
    },
    {
      href: supplierDepositGuideHref,
      label: 'Verify a supplier before deposit',
      note: 'Connect company identity, quote, bank account, factory role, product evidence, contract terms, and the first payment decision.',
    },
    {
      href: qualityControlChinaManufacturingPlanArticleHref,
      label: 'China manufacturing quality plan',
      note: 'Carry approved evidence into sample control, production changes, inspection, correction, balance payment, and shipment release.',
    },
    {
      href: packagingLabelCheckBeforePaymentArticleHref,
      label: 'Packaging and label checks',
      note: 'Match final marks, model, ratings, warnings, instructions, barcodes, packages, lots, and cartons before final payment.',
    },
    {
      href: '/supplier-verification-china',
      label: 'Supplier Verification China',
      note: 'Scope a focused China-side check when the contracting party, factory, evidence owner, or payment route remains unclear.',
    },
    {
      href: '/before-deposit-china-supplier-check',
      label: 'Before-deposit supplier check',
      note: 'Keep the first transfer conditional on traceable company, factory, product, certification, and payment evidence.',
    },
    {
      href: resourceGuideHref,
      label: 'China sourcing risk guides',
      note: 'Compare related supplier, deposit, testing, production, inspection, payment, packaging, and pickup decisions.',
    },
  ] satisfies RelatedLink[],
}

export function makeVerifyUlCertificationChinaArticleMetadata(): Metadata {
  const article = verifyUlCertificationChinaArticle

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

export function makeVerifyUlCertificationChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(verifyUlCertificationChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'UL certification verification checklist for China suppliers',
      itemListElement: verifyUlCertificationChinaArticle.quickChecks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item,
      })),
    },
  ]
}
