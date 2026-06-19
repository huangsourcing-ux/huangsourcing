import type { Metadata } from 'next'

import {
  getArticleOpenGraphImages,
  makeArticleJsonLd,
} from '@/lib/article-seo'
import { aqlInspectionChinaArticleHref } from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

export const aqlInspectionChinaArticle = {
  href: aqlInspectionChinaArticleHref,
  title: 'AQL Inspection in China: Sample Size and Defect Limits',
  metaTitle: 'AQL Inspection China: Sample Size & Defect Limits',
  metaDescription:
    'Plan an AQL inspection in China: choose a sampling plan, classify critical, major, and minor defects, read Ac/Re limits, and make a shipment decision.',
  publishedDate: 'June 19, 2026',
  publishedDateIso: '2026-06-19T09:00:00-04:00',
  h1: 'AQL Inspection in China: Sample Size and Defect Limits',
  eyebrow: 'AQL inspection China · buyer decision guide',
  image: {
    alt: 'Inspector measuring sampled products beside packed cartons during an AQL inspection in China',
    height: 900,
    src: '/images/aql-inspection-china-sample-size-defect-limits.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/aql-inspection-china-sample-size-defect-limits.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/aql-inspection-china-sample-size-defect-limits-4x3.webp',
      width: 1600,
    },
    {
      height: 1200,
      src: '/images/aql-inspection-china-sample-size-defect-limits-1x1.webp',
      width: 1200,
    },
  ],
  intro:
    'An AQL inspection in China uses a defined random sample to make an accept-or-reject decision about a production lot. Before the factory visit, the buyer should approve the sampling standard, lot size, inspection level, defect definitions, AQL values, and action to take when a limit is reached.',
  answerSummary:
    'AQL does not mean that the accepted lot contains only that percentage of defects. It is an index used with a sampling plan. The plan converts the lot size and inspection level into a sample size, then sets acceptance (Ac) and rejection (Re) numbers for each defect class.',
  primaryCta: {
    label: 'Plan My AQL Inspection',
  },
  secondaryCta: {
    href: '#worked-example',
    label: 'See Worked Example',
  },
  whatsappMessage: `Hi Agent Huang,

I need an AQL inspection in China before shipment.

Product / SKU count:
Factory location:
Order quantity:
Target inspection date:
Proposed AQL / defect limits:
Balance payment or pickup deadline:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#how-aql-works', label: 'How AQL works' },
    { href: '#worked-example', label: 'Worked example' },
    { href: '#defect-classes', label: 'Defect classes' },
    { href: '#decision-table', label: 'Buyer decisions' },
    { href: '#what-to-send', label: 'What to send' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#sources', label: 'Standards sources' },
    { href: '#faq', label: 'FAQ' },
  ],
  quickChecks: [
    'Name the sampling standard and edition in the purchase order or inspection instruction',
    'Define the lot by product, model, color, size, production batch, and packed quantity',
    'Choose the inspection level before using the lot-size table to find a code letter',
    'Use the code letter and plan type to determine the random sample size',
    'Approve critical, major, and minor defect definitions with product-specific examples',
    'Assign an AQL or zero-tolerance rule to each defect class before inspection',
    'Record both defective units and individual defects consistently in the report',
    'Decide in advance whether rejection triggers sorting, rework, re-inspection, or a payment hold',
  ],
  workflow: [
    {
      step: '1',
      title: 'Define the lot',
      text: 'Confirm the units available for inspection and keep different SKUs or production batches traceable. A vague or incomplete lot makes the sample decision unreliable.',
    },
    {
      step: '2',
      title: 'Choose the plan',
      text: 'State the standard, normal/tightened/reduced status, single/double/multiple plan, and inspection level. General Level II is common, but it is not automatically correct for every product or risk.',
    },
    {
      step: '3',
      title: 'Find the sample size',
      text: 'Use the lot-size and inspection-level table to find the code letter, then use the applicable sampling-plan table to find the number of randomly selected units.',
    },
    {
      step: '4',
      title: 'Apply Ac/Re limits',
      text: 'Count results by the buyer-approved defect classes. Accept when the count is at or below Ac; reject when it reaches Re. Do not invent a percentage after the inspection.',
    },
  ],
  example: {
    caveat:
      'Illustrative configuration only: confirm the current licensed standard and the buyer-approved inspection instruction before using these numbers.',
    facts: [
      ['Lot', '1,200 finished units of one SKU'],
      ['Plan', 'Normal inspection, single sampling'],
      ['Level', 'General Inspection Level II'],
      ['Code / sample', 'Code letter J / 80 randomly selected units'],
    ],
    limits: [
      {
        classification: 'Critical',
        rule: 'Buyer sets zero tolerance',
        result: '1 critical defect triggers a hold and investigation',
      },
      {
        classification: 'Major',
        rule: 'AQL 2.5: Ac 5 / Re 6',
        result: '0–5 accept; 6 or more reject',
      },
      {
        classification: 'Minor',
        rule: 'AQL 4.0: Ac 7 / Re 8',
        result: '0–7 accept; 8 or more reject',
      },
    ],
  },
  defectClasses: [
    {
      title: 'Critical defect',
      description:
        'A condition that could create an unsafe or unlawful product, or another buyer-defined severe risk. Examples may include an exposed live conductor, a sharp point on a children’s item, or the wrong safety-critical component. Critical criteria require product and market context; do not copy a generic list blindly.',
    },
    {
      title: 'Major defect',
      description:
        'A defect likely to cause product failure, materially reduce normal usability, or make the product unsaleable to the intended customer. Examples may include a non-working function, wrong model, missing essential accessory, open seam, or materially incorrect dimension.',
    },
    {
      title: 'Minor defect',
      description:
        'A departure from the approved requirement that does not materially prevent normal use but still affects finish, consistency, or presentation. Examples may include a small cosmetic mark outside a controlled appearance area or slight print-position variation within an agreed tolerance.',
    },
  ],
  decisionRows: [
    {
      signal: 'Counts are at or below every Ac number',
      meaning: 'The sampled lot meets the stated acceptance plan for the inspected points.',
      action: 'Review all report findings, tests, quantity, packing, and open issues before release; AQL is only one decision input.',
    },
    {
      signal: 'Any count reaches its Re number',
      meaning: 'The sampled lot fails the agreed plan for that defect class.',
      action: 'Hold release, identify the affected pattern, require controlled sorting or rework, and define re-inspection.',
    },
    {
      signal: 'A critical issue appears',
      meaning: 'A severe risk exists even if other AQL counts are low.',
      action: 'Stop the release decision and investigate scope, cause, affected stock, and any testing or compliance escalation needed.',
    },
    {
      signal: 'Sample access or randomness is compromised',
      meaning: 'Factory-selected samples, blocked cartons, or incomplete goods weaken the result.',
      action: 'Record the limitation, restore access or reschedule, and do not present the result as a valid full-lot decision.',
    },
    {
      signal: 'The defect list was not approved',
      meaning: 'Inspector and buyer may classify the same issue differently after the fact.',
      action: 'Pause the decision, document the issue, and establish product-specific classifications before relying on the counts.',
    },
  ],
  evidenceBasis: [
    'Buyer-approved purchase order, product specification, golden sample notes, tolerances, packaging files, label files, and function-test requirements.',
    'A named acceptance-sampling standard and edition, lot definition, inspection level, plan type, sample size, defect classes, and Ac/Re limits.',
    'Randomly selected physical units connected to the packed production lot, with photos, measurements, test results, defect counts, and carton traceability.',
    'Buyer-stage context including balance payment, correction access, pickup timing, shipment deadline, and the agreed response to a rejected lot.',
  ],
  whatToSend: [
    'Purchase order, final product specification, approved sample notes, and SKU breakdown',
    'Total finished lot quantity and packed quantity by SKU, color, size, or batch',
    'Named sampling standard, edition, inspection level, and plan status if contractually specified',
    'Critical, major, and minor defect list with product-specific photos or examples',
    'AQL values or other acceptance rules approved for each defect class',
    'Required function tests, measurement tolerances, packaging checks, and label checks',
    'Balance-payment deadline, pickup date, and required action after a rejection',
  ],
  scopeLimits: [
    'An accepted sample does not prove that every unit in the lot is conforming or defect-free',
    'AQL is an acceptance-sampling index, not a promise that the shipment contains exactly the stated percentage of defects',
    'A visual AQL inspection does not replace product certification, laboratory testing, engineering validation, or legal compliance review',
    'A sampling result is only as reliable as the lot definition, random access, approved checklist, defect classification, and execution evidence',
    'Special, destructive, time-consuming, or safety-critical tests may need separate sample sizes or test plans',
    'ISO 2859-1 is designed around continuing series of lots and switching rules; buyers applying a plan to an isolated lot should evaluate whether the selected plan gives the protection they need',
  ],
  sources: [
    {
      href: 'https://www.iso.org/standard/85464.html',
      label: 'ISO 2859-1:2026',
      note: 'Current ISO standard for AQL-indexed lot-by-lot inspection by attributes; Edition 3 was published in January 2026.',
    },
    {
      href: 'https://asq.org/quality-resources/z14-z19',
      label: 'ASQ: ANSI/ASQ Z1.4 and Z1.9',
      note: 'Overview of the U.S. acceptance-sampling standards, including normal, tightened, and reduced plans.',
    },
    {
      href: 'https://asq.org/quality-resources/sampling/attributes-variables-sampling',
      label: 'ASQ: attribute and variable sampling',
      note: 'Definitions and context for attribute sampling, acceptance criteria, and sampling-plan use.',
    },
  ],
  relatedLinks: [
    {
      href: '/qc-inspection-china',
      label: 'QC Inspection China',
      note: 'Plan product, quantity, function, packaging, and AQL evidence before balance payment.',
    },
    {
      href: '/china-qc-inspection-booking-checklist',
      label: 'China QC Booking Checklist',
      note: 'Prepare the files and decision rules the inspector needs before the factory visit.',
    },
    {
      href: '/qc-inspection-china-before-balance-payment',
      label: 'QC Before Balance Payment',
      note: 'Connect the inspection result to the approve, hold, correct, or re-inspect decision.',
    },
    {
      href: '/sample-inspection-report-china',
      label: 'Sample Inspection Report',
      note: 'See how buyer-side photos, findings, limits, and release notes can be structured.',
    },
  ],
  faqs: [
    {
      question: 'What does AQL mean in a China inspection?',
      answer:
        'AQL means acceptance quality limit. It is an index used with an acceptance-sampling plan to select sample size and acceptance or rejection numbers for a lot. It is not a guarantee that the lot contains a specific defect percentage.',
    },
    {
      question: 'How is the AQL inspection sample size chosen?',
      answer:
        'The selected standard combines lot size and inspection level to produce a code letter. The applicable sampling-plan table then converts that code letter into a sample size. The plan type and normal, tightened, or reduced status also matter.',
    },
    {
      question: 'What AQL should I use for critical, major, and minor defects?',
      answer:
        'There is no universal setting for every product. Many buyers use stricter rules for critical and major defects than for minor defects, but the values and definitions should follow product risk, customer requirements, contract terms, and applicable standards. Safety-critical issues may need zero tolerance or separate testing.',
    },
    {
      question: 'Does passing AQL mean the whole shipment is defect-free?',
      answer:
        'No. Passing means the random sample met the stated acceptance plan for the inspected requirements. Uninspected units can still contain defects, and hidden, future, laboratory, or compliance issues may remain outside scope.',
    },
    {
      question: 'What should I do when an AQL inspection fails?',
      answer:
        'Hold payment or shipment release where contractually possible, review the defect pattern, require controlled sorting or rework, document affected stock, and schedule a new random re-inspection under an agreed plan. Do not rely only on selected correction photos.',
    },
    {
      question: 'What changed in ISO 2859-1:2026?',
      answer:
        'ISO states that Edition 3 replaced the 1999 edition and its amendments, added skip-lot sampling procedures, and updated guidance for applying sampling strategies. Buyers should name the intended edition in contracts and inspection instructions rather than assuming all parties use the same table set.',
    },
  ],
}

export function makeAqlInspectionChinaArticleMetadata(): Metadata {
  return {
    title: aqlInspectionChinaArticle.metaTitle,
    description: aqlInspectionChinaArticle.metaDescription,
    alternates: {
      canonical: aqlInspectionChinaArticle.href,
    },
    openGraph: {
      title: aqlInspectionChinaArticle.metaTitle,
      description: aqlInspectionChinaArticle.metaDescription,
      url: aqlInspectionChinaArticle.href,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: [...getArticleOpenGraphImages(aqlInspectionChinaArticle)],
    },
    twitter: {
      card: 'summary_large_image',
      title: aqlInspectionChinaArticle.metaTitle,
      description: aqlInspectionChinaArticle.metaDescription,
      images: [aqlInspectionChinaArticle.image.src],
    },
  }
}

export function makeAqlInspectionChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(aqlInspectionChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to plan an AQL inspection in China',
      step: aqlInspectionChinaArticle.workflow.map((item) => ({
        '@type': 'HowToStep',
        name: item.title,
        text: item.text,
      })),
    },
    makeFaqPageJsonLd(aqlInspectionChinaArticle.faqs),
  ]
}
