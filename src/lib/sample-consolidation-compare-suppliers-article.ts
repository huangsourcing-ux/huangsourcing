import type { Metadata } from 'next'

import {
  articleContentUpdateDate,
  articleContentUpdateDateIso,
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { sampleConsolidationCompareSuppliersArticleHref } from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
}

type DecisionRow = {
  buyerDecision: string
  riskNode: string
  whatWasChecked: string
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

export const sampleConsolidationCompareSuppliersArticle = {
  href: sampleConsolidationCompareSuppliersArticleHref,
  title: 'Sample Consolidation China: Compare Suppliers Before Choosing a Factory',
  metaTitle: 'Sample Consolidation China Guide',
  metaDescription:
    'Use sample consolidation China support to receive, photograph, label, compare, and forward supplier samples before choosing a factory or paying deposit.',
  publishedDate: 'May 24, 2026',
  publishedDateIso: '2026-05-24T23:08:00-04:00',
  modifiedDate: articleContentUpdateDate,
  modifiedDateIso: articleContentUpdateDateIso,
  h1: 'Sample Consolidation China: Compare Suppliers Before Choosing a Factory',
  eyebrow: 'sample consolidation China',
  image: {
    alt: 'Agent Huang comparing labeled supplier samples in a China warehouse before factory selection',
    height: 900,
    src: '/images/sample-consolidation-china-compare-suppliers-before-choosing-factory.webp',
    width: 1600,
  },
  imageVariants: [
    { height: 900, src: '/images/sample-consolidation-china-compare-suppliers-before-choosing-factory.webp', width: 1600 },
    { height: 1200, src: '/images/sample-consolidation-china-compare-suppliers-before-choosing-factory-4x3.webp', width: 1600 },
    { height: 1200, src: '/images/sample-consolidation-china-compare-suppliers-before-choosing-factory-1x1.webp', width: 1200 },
  ],
  intro:
    'Choosing a factory from scattered supplier photos is risky. Samples arrive at different times, some suppliers show their best angle, and international freight can become expensive before the buyer has even compared what matters. Sample consolidation in China gives buyers one place to receive, label, photograph, compare, and forward samples before supplier selection becomes a deposit decision.',
  answerSummary:
    'The buyer decision is simple: shortlist the strongest supplier sample, reject weak samples before paying more freight, ask clearer supplier questions, request supplier verification, or pause before choosing a factory.',
  primaryCta: {
    href: '/sample-consolidation-china',
    label: 'Start Sample Consolidation',
  },
  secondaryCta: {
    href: '#what-to-check',
    label: 'See comparison checks',
  },
  whatsappMessage: `Hi Agent Huang,

I need sample consolidation in China before choosing a factory.

Product:
Number of suppliers:
Supplier names / codes:
Tracking numbers:
What should be compared:
Destination country:
Decision needed:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#what-to-check', label: 'What to check' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#field-notes', label: 'Field notes' },
    { href: '#documents', label: 'What to send' },
    { href: '#red-flags', label: 'Red flags' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Inbound sample tracking by supplier, product version, arrival date, and parcel condition',
    'Unboxing evidence so the buyer can see what each supplier actually sent',
    'Supplier codes, sample labels, packaging marks, and photos that prevent sample mix-ups',
    'Side-by-side comparison of visible finish, size, material, color, workmanship, and accessories when scoped',
    'Basic measurement or weight checks when the buyer provides comparison points',
    'Packaging, insert, label, carton, and presentation differences before supplier selection',
    'Notes on which samples should be forwarded, held, rejected, or used for deeper verification',
    'Outbound consolidation plan so the buyer does not pay separate international freight for every supplier',
  ],
  sections: [
    {
      id: 'why-before-selection',
      title: 'Why sample consolidation should happen before choosing a factory',
      paragraphs: [
        'A supplier sample is not just a small product. It is evidence of communication, handling, packaging discipline, and whether the supplier understands the buyer requirement. When samples are reviewed separately, it is easy to forget small differences that matter later in production.',
        'Sample consolidation China support works best before the buyer commits to one factory. Agent Huang can receive samples from several suppliers, organize them by supplier code, photograph the same angles, and help the buyer decide which samples deserve forwarding, verification, negotiation, or rejection.',
      ],
      bullets: [
        'Approve a stronger sample only after comparing it against other supplier samples',
        'Hold supplier selection when labels, packaging, or sample origin are unclear',
        'Reject weak samples before paying repeated international freight',
        'Move the shortlisted supplier to verification before deposit if company or payment risk remains',
      ],
    },
    {
      id: 'what-to-check',
      title: 'What to check when comparing supplier samples in China',
      paragraphs: [
        'A useful sample comparison does not need to pretend it is a full lab test. It should focus on visible evidence that helps the buyer choose a next action: approve, hold, reject, verify, or request another sample.',
        'The check starts with chain of identity. Each parcel should connect to a supplier, a tracking number, a product version, and a sample label. Then the comparison can move to visible product condition, finish, measurement points, packaging, accessories, and whether the sample matches the requirement the buyer gave.',
      ],
      bullets: [
        'Receipt evidence: parcel label, supplier code, arrival date, and whether the outer package arrived damaged',
        'Identity control: sample tag, supplier name or code, product version, quote reference, and photo file naming',
        'Visible product comparison: finish, color, surface defects, fit, structure, accessories, and workmanship consistency',
        'Simple measured points: size, weight, material feel, part count, or other buyer-defined checkpoints',
        'Packaging comparison: inner bag, retail box, insert, label position, carton marks, and presentation quality',
        'Decision notes: forward, hold, reject, request replacement sample, verify supplier, or ask for corrected evidence',
      ],
    },
    {
      id: 'field-notes',
      title: 'Agent Huang field notes from sample consolidation work',
      paragraphs: [
        'The most common problem is not one bad sample. It is messy sample identity. A buyer may receive five parcels, but the supplier names, versions, colors, and tracking numbers are not clearly connected. Later, the buyer remembers which sample looked best but cannot confidently tie it back to the right supplier and quote.',
        'Another practical issue is supplier presentation. Two samples may look similar, but one supplier sends clean labeling, correct accessories, and clear packaging while another sends loose parts with no version control. That does not prove future production quality, but it gives the buyer a stronger question to ask before selecting a factory.',
      ],
      bullets: [
        'Keep supplier codes simple and consistent from inbound receipt through outbound shipment',
        'Photograph comparable angles so sample differences are visible, not hidden by supplier-selected photos',
        'Separate sample comparison from supplier verification; product evidence and company risk are different checks',
        'Use the sample result to decide the next step instead of treating consolidation as automatic approval',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      riskNode: 'Sample identity',
      whatWasChecked:
        'Supplier code, tracking number, product version, parcel label, sample tag, and photo file naming',
      buyerDecision: 'Proceed with comparison, hold unclear samples, or ask the supplier to confirm identity',
    },
    {
      riskNode: 'Visible product difference',
      whatWasChecked:
        'Finish, color, surface condition, workmanship, fit, accessories, part count, and buyer-defined checkpoints',
      buyerDecision: 'Shortlist, reject, request revised sample, or ask for production clarification',
    },
    {
      riskNode: 'Packaging and labeling',
      whatWasChecked:
        'Inner packaging, retail box, insert, sample label, carton marks, and whether supplier origin stayed clear',
      buyerDecision: 'Forward sample, hold for relabeling, request packaging correction, or compare another supplier',
    },
    {
      riskNode: 'Supplier-selection confidence',
      whatWasChecked:
        'Side-by-side evidence, quote alignment, supplier communication, and whether the sample matches the requirement',
      buyerDecision: 'Choose a supplier, narrow the shortlist, verify the supplier, or delay factory selection',
    },
    {
      riskNode: 'Outbound freight waste',
      whatWasChecked:
        'Which samples are worth forwarding, which should be held, and whether samples can ship together after review',
      buyerDecision: 'Consolidate outbound shipment, reject weak samples in China, or ship only the shortlisted set',
    },
  ] satisfies DecisionRow[],
  evidenceBasis: [
    'Supplier sample labels, tracking numbers, arrival photos, supplier codes, product specs, and buyer comparison priorities provided before consolidation.',
    'China-side warehouse evidence showing received samples, visible condition, packaging, labels, finish differences, and side-by-side comparison context.',
    'Sample handling workflow judgment from receiving, labeling, photographing, grouping, holding, rejecting, or forwarding samples before supplier selection.',
    'Buyer-stage decision context: shortlist a supplier, request clearer evidence, reject weak samples, verify the supplier, or pause before deposit.',
  ],
  whatToSend: [
    'Supplier names, supplier codes, contact details, and product links or quote references',
    'Tracking numbers, courier names, expected arrival dates, and the city each supplier ships from',
    'Photos or descriptions of the exact product version each supplier should send',
    'Comparison points that matter to you: size, color, finish, material, accessories, packaging, label, or function',
    'Which samples must be forwarded overseas and which can be held until comparison is complete',
    'Destination country, preferred shipping method, deadline, and any special handling requirements',
    'Your decision goal: choose one factory, reject weak suppliers, request revised samples, or verify shortlisted suppliers',
  ],
  redFlags: [
    'Supplier sends a sample with no tag, no version note, and no clear link to the quote',
    'Tracking number, supplier name, parcel label, and sample contents do not match the buyer list',
    'Sample packaging hides origin or mixes accessories from different suppliers',
    'The supplier refuses to confirm whether the sample came from the same source planned for bulk production',
    'The sample looks acceptable but the supplier cannot explain materials, dimensions, or changes from the buyer request',
    'Several suppliers send similar samples but one quote, payment entity, or company identity looks inconsistent',
    'The buyer is about to choose the cheapest supplier before comparing physical samples side by side',
  ],
  scopeLimits: [
    'Sample consolidation reduces comparison and freight waste, but it does not guarantee bulk production quality',
    'It does not replace supplier verification, factory audit, legal due diligence, compliance testing, or product certification',
    'It does not prove that future mass production will match the approved sample unless later QC is scoped',
    'It is not a lab test, destructive test, safety test, or engineering validation unless separately arranged',
    'Basic comparison depends on the buyer providing clear comparison points and supplier identity information',
    'Storage time, special handling, fragile goods, batteries, liquids, branded goods, or regulated products may require separate scope',
  ],
  relatedLinks: [
    {
      href: '/sample-consolidation-china',
      label: 'Sample Consolidation China',
      note: 'Use when suppliers need one China address for receiving, organizing, comparing, and forwarding samples.',
    },
    {
      href: '/compare-china-supplier-samples',
      label: 'Compare China supplier samples',
      note: 'Use the buyer-stage guide when you need a compact overview before supplier selection.',
    },
    {
      href: '/supplier-verification-china',
      label: 'Supplier Verification China',
      note: 'Use after sample comparison when the shortlisted supplier still needs identity and payment-risk checks.',
    },
    {
      href: '/how-to-verify-chinese-supplier-before-deposit',
      label: 'Verify Chinese supplier before deposit',
      note: 'Use before paying the first production deposit to the selected supplier.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What is sample consolidation in China?',
      answer:
        'Sample consolidation in China means suppliers send samples to one China-side address for receipt, labeling, photos, basic comparison when scoped, and consolidated outbound shipment after the buyer decides what should be forwarded.',
    },
    {
      question: 'Can Huang Sourcing compare samples before forwarding them?',
      answer:
        'Yes. Agent Huang can compare visible points such as finish, size, packaging, labels, accessories, and other buyer-defined checkpoints. Lab testing, compliance testing, and technical validation are separate scopes.',
    },
    {
      question: 'Does sample consolidation replace supplier verification?',
      answer:
        'No. Sample consolidation compares product samples and shipment evidence. Supplier verification checks company identity, factory role, documents, payment details, and deposit risk before the buyer chooses or pays a supplier.',
    },
    {
      question: 'When should buyers use sample consolidation China support?',
      answer:
        'Use it before choosing a factory when several suppliers are sending samples, freight costs are increasing, supplier photos are not enough, or you need side-by-side evidence before shortlisting one supplier.',
    },
    {
      question: 'Can weak samples be rejected before international shipping?',
      answer:
        'Yes. If the buyer agrees, weak or irrelevant samples can be held or rejected in China so only useful samples are forwarded overseas, reducing unnecessary freight cost.',
    },
  ] satisfies FaqItem[],
}

export function makeSampleConsolidationCompareSuppliersArticleMetadata(): Metadata {
  const canonicalPath = sampleConsolidationCompareSuppliersArticle.href

  return {
    title: sampleConsolidationCompareSuppliersArticle.metaTitle,
    description: sampleConsolidationCompareSuppliersArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: sampleConsolidationCompareSuppliersArticle.metaTitle,
      description: sampleConsolidationCompareSuppliersArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [
        ...getArticleOpenGraphImages(sampleConsolidationCompareSuppliersArticle),
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: sampleConsolidationCompareSuppliersArticle.metaTitle,
      description: sampleConsolidationCompareSuppliersArticle.metaDescription,
      images: [sampleConsolidationCompareSuppliersArticle.image.src],
    },
  }
}

export function makeSampleConsolidationCompareSuppliersArticleJsonLd() {
  return [
    makeArticleJsonLd(sampleConsolidationCompareSuppliersArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Sample consolidation China supplier sample comparison checklist',
      itemListElement: sampleConsolidationCompareSuppliersArticle.quickChecks.map(
        (item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item,
        }),
      ),
    },
    makeFaqPageJsonLd(sampleConsolidationCompareSuppliersArticle.faqs),
  ]
}
