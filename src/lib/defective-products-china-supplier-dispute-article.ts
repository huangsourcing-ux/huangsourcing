import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import { defectiveProductsChinaSupplierDisputeArticleHref } from '@/lib/site-links'
import { makeFaqPageJsonLd } from '@/lib/structured-data'

type ArticleSection = {
  bullets?: string[]
  id: string
  paragraphs: string[]
  title: string
}

type ArticleModuleSection = {
  summary: string
  title: string
}

type DecisionRow = {
  buyerAction: string
  evidenceNeeded: string
  situation: string
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

export const defectiveProductsChinaSupplierDisputeArticle = {
  href: defectiveProductsChinaSupplierDisputeArticleHref,
  title: 'Defective Products from a China Supplier: What to Do',
  metaTitle: 'Defective Products from China Supplier: What to Do',
  metaDescription:
    'Received defective products from a China supplier? Learn how to preserve evidence, stop losses, negotiate remedies, and prevent repeat quality failures.',
  publishedDate: 'June 19, 2026',
  publishedDateIso: '2026-06-19T00:00:00-04:00',
  h1: 'Defective Products from a China Supplier: What to Do',
  eyebrow: 'China supplier dispute guide',
  image: {
    alt: 'China quality inspector documenting defective products, comparison samples, cartons, measurements, and photo evidence for a supplier dispute',
    height: 900,
    src: '/images/defective-products-china-supplier-dispute.webp',
    width: 1600,
  },
  imageVariants: [
    {
      height: 900,
      src: '/images/defective-products-china-supplier-dispute.webp',
      width: 1600,
    },
    {
      height: 900,
      src: '/images/defective-products-china-supplier-dispute-4x3.webp',
      width: 1200,
    },
    {
      height: 1200,
      src: '/images/defective-products-china-supplier-dispute-1x1.webp',
      width: 1200,
    },
  ],
  introduction:
    'When products from a China supplier arrive defective, the first objective is not to win an argument. It is to stop the loss from growing, preserve evidence the supplier cannot easily dismiss, calculate a defensible claim, and choose a remedy that can actually be verified. Act before goods are reworked, mixed, sold, returned, or discarded.',
  answerSummary:
    'Quarantine the affected stock, photograph unopened cartons and defects, preserve labels and shipping records, test a traceable sample, compare findings with the purchase order and approved sample, calculate the loss, notify the supplier in writing, and propose a specific remedy with a deadline. Do not destroy evidence or accept a replacement promise without written terms and verification.',
  primaryCta: {
    href: '/qc-inspection-china',
    label: 'Plan the next inspection',
  },
  secondaryCta: {
    href: '#response-plan',
    label: 'Follow the response plan',
  },
  whatWillYouLearn: [
    'What should you do in the first 48 hours after finding defective goods?',
    'Which photos, records, samples, and calculations make a supplier claim credible?',
    'How should you choose between rework, replacement, credit, refund, or another remedy?',
    'When should you escalate beyond normal supplier negotiation?',
    'How can the next China order prevent the same failure before shipment?',
  ],
  articleStructure: {
    title: 'Five-part defective shipment response plan',
    sections: [
      {
        title: '1. Contain',
        summary:
          'Stop sales, fulfillment, rework, and disposal until the affected stock is identified.',
      },
      {
        title: '2. Prove',
        summary: 'Build a traceable evidence pack that connects defects to the order and shipment.',
      },
      {
        title: '3. Quantify',
        summary:
          'Calculate affected quantity, direct costs, and the practical value of each remedy.',
      },
      {
        title: '4. Negotiate',
        summary: 'Send a written claim with evidence, a requested remedy, and response deadlines.',
      },
      {
        title: '5. Verify',
        summary:
          'Confirm rework, replacement, or credit terms before releasing new money or goods.',
      },
    ],
  } satisfies { sections: ArticleModuleSection[]; title: string },
  whatsappMessage: `Hi Agent Huang,

I received defective products from a China supplier and want to prevent the same issue on the next order.

Product / SKU:
Supplier and factory location:
Order quantity:
Defect found:
Affected quantity known so far:
Next production or shipment date:
Files I can send:
`,
  tableOfContents: [
    { href: '#quick-answer', label: 'Quick answer' },
    { href: '#response-plan', label: 'Response plan' },
    { href: '#evidence-package', label: 'Evidence package' },
    { href: '#claim-value', label: 'Calculate the claim' },
    { href: '#remedy-table', label: 'Choose a remedy' },
    { href: '#escalation', label: 'Escalation' },
    { href: '#prevention', label: 'Prevent a repeat' },
    { href: '#limits', label: 'Scope limits' },
    { href: '#faq', label: 'FAQ' },
  ],
  sections: [
    {
      id: 'containment',
      title: 'Contain the loss before debating responsibility',
      paragraphs: [
        'Pause fulfillment, customer shipments, relabeling, repair, disposal, and mixing with good stock until you know which units and cartons may be affected. Assign an internal hold location and record the date, SKU, lot or date code, carton numbers, and quantity moved there. If safety may be involved, stop use and seek qualified product-safety advice immediately.',
        'Containment protects customers and keeps the evidence intact. It also prevents a weak claim based on a changing inventory count. If only some cartons are open, record the condition of unopened cartons before sampling. If a warehouse or prep center discovered the problem, give it written instructions not to discard packaging or alter the goods without approval.',
      ],
      bullets: [
        'Create a quarantine count by SKU, carton, lot, and warehouse location',
        'Preserve master cartons, retail packaging, labels, inserts, and damaged units',
        'Record who found the problem, when it was found, and what happened next',
        'Stop automatic disposal, refurbishment, or customer shipment until evidence is secured',
      ],
    },
    {
      id: 'evidence-package',
      title: 'Build one evidence package the supplier can follow',
      paragraphs: [
        'A useful claim connects four things: the goods received, the purchase requirement, the observed defect, and the affected quantity. Random phone photos rarely do that. Use a numbered evidence folder with an order summary, inbound records, carton and label photos, defect photos, sample-selection notes, test results, and the buyer-approved specification or sample comparison.',
        'Start with wide photos that show the carton or batch, then medium views that identify the SKU, and close-ups that show the defect. Keep original files with timestamps when possible. For functional failures, record the test method, equipment, conditions, and result. A short continuous video can show a failure sequence, but it should support rather than replace clear still photos and counts.',
      ],
      bullets: [
        'PO, pro forma invoice, specification, drawings, approved sample notes, and written quality requirements',
        'Bill of lading, packing list, receiving record, warehouse intake photos, carton marks, and SKU labels',
        'Numbered defect photos showing overview, product identity, close-up, and comparison with an acceptable unit',
        'A traceable inspection sheet listing units checked, defect categories, results, and sample-selection method',
        'Representative physical samples retained in their received condition when practical',
      ],
    },
    {
      id: 'contract-review',
      title: 'Check what was actually agreed before making the claim',
      paragraphs: [
        'Compare the received goods with the signed purchase order, specification, drawings, approved sample, packaging files, inspection criteria, and written supplier commitments. Separate clear nonconformity from preferences that were never documented. The stronger the original requirement, the less room there is for the dispute to become a disagreement about expectations.',
        'Also review notice deadlines, acceptance language, inspection clauses, warranty terms, governing law, dispute procedure, marketplace protections, and payment-channel deadlines. These terms can be time-sensitive. Preserve your rights while the evidence is being developed, and obtain qualified legal advice when the value, safety risk, or contractual complexity justifies it.',
      ],
      bullets: [
        'Identify the exact requirement each defect fails',
        'Locate any supplier message that confirmed the material, dimension, function, finish, label, or packing point',
        'Check whether an approved sample controls and whether production changes required written approval',
        'Calendar contract, platform, payment, insurance, carrier, and customer-notice deadlines',
      ],
    },
    {
      id: 'claim-value',
      title: 'Calculate a claim that can be explained and negotiated',
      paragraphs: [
        'Do not begin with an unsupported percentage refund. Separate confirmed defective quantity from untested or potentially affected stock. Then calculate direct, documented costs such as sorting, inspection, return handling, local rework, replacement parts, repacking, storage, disposal, or reshipping. Keep assumptions visible and update the calculation as the sample expands.',
        'The commercial remedy may not equal the total business impact. A supplier may credibly dispute lost-profit estimates while accepting documented rework or replacement costs. Build a minimum acceptable remedy, a preferred remedy, and a fallback. Evaluate cash timing, freight, customs, new quality risk, and the chance that a promised replacement will consume another production cycle.',
      ],
      bullets: [
        'Confirmed defective units multiplied by supported unit loss or correction cost',
        'Inspection, sorting, testing, rework, repacking, storage, disposal, and reshipping invoices',
        'Customer refunds or chargebacks tied to the affected lot where records are available',
        'Credit, refund, replacement, and rework options compared on net cost and execution risk',
      ],
    },
    {
      id: 'supplier-notice',
      title: 'Send a written notice with a specific proposed remedy',
      paragraphs: [
        'Send a concise claim to the supplier contact and the legal or commercial entity named in the order. State the order, shipment, defect, quantity checked, affected quantity known so far, requirement not met, attached evidence, immediate containment action, and the remedy requested. Ask the supplier to preserve production, QC, material, subcontractor, and shipment records for the affected lot.',
        'Use dates rather than words such as urgent or soon. Set a short deadline to acknowledge the claim, another deadline for a root-cause and containment response, and a deadline to agree the commercial remedy. Keep the discussion in a channel that can be exported. After calls, send a written summary and ask the supplier to correct any misunderstanding.',
      ],
      bullets: [
        'Request acknowledgement of the claim and a named decision-maker',
        'Ask for immediate containment of matching stock, work in progress, and future shipments',
        'Request root-cause evidence and corrective actions, not only an apology',
        'Define who pays freight, duties, inspection, sorting, rework, and disposal',
        'State that any settlement is subject to written terms and verification',
      ],
    },
    {
      id: 'escalation',
      title: 'Escalate in proportion to value, evidence, and deadline risk',
      paragraphs: [
        'Escalation is useful when normal commercial negotiation stalls, but each route has cost, deadline, jurisdiction, and collectability limits. Depending on the transaction, options may include a marketplace or payment dispute, cargo or product insurance notice, formal demand, mediation, arbitration, litigation, or a negotiated setoff against future business. Confirm the current rules and deadlines for the route that applies to your order.',
        'Before spending heavily, test the economics. A strong judgment or award still has to be enforced against the correct entity and assets. For a smaller claim, a documented credit plus independently verified correction on the next order may recover more value than a long dispute. For a high-value, safety-related, fraudulent, or repeated failure, qualified counsel may be necessary early.',
      ],
      bullets: [
        'Escalate before platform, payment, insurance, contractual, or statutory deadlines expire',
        'Confirm the supplier entity, contract party, payment recipient, and available dispute forum',
        'Preserve originals and avoid editing evidence files in a way that obscures provenance',
        'Compare likely recovery with legal, expert, travel, translation, and enforcement costs',
      ],
    },
    {
      id: 'prevention',
      title: 'Convert the dispute into controls for the next order',
      paragraphs: [
        'A settlement does not prevent recurrence. Turn every confirmed defect into a clearer specification, approved limit sample, test method, defect classification, packaging instruction, and inspection checkpoint. Require the supplier to explain root cause, containment, corrective action, owner, and completion evidence before new production begins.',
        'For the next order, use the dispute evidence to write an inspection checklist and sampling plan. Inspect while the supplier still controls the goods and before the balance or pickup decision removes leverage. If the failure depends on materials or an early process, add incoming-material or during-production checks rather than waiting only for final inspection.',
      ],
      bullets: [
        'Add defect photos and objective acceptance criteria to the specification',
        'Approve a physical golden sample or controlled digital reference where appropriate',
        'Define critical, major, and minor defects for the actual product',
        'Match inspection timing to the process stage where the failure becomes visible',
        'Require verification of corrective action before balance payment or pickup',
      ],
    },
  ] satisfies ArticleSection[],
  decisionRows: [
    {
      situation: 'Defects are isolated and locally repairable',
      evidenceNeeded:
        'Verified defect count, local rework method, unit cost, timing, and proof that repair will not create another compliance or quality issue',
      buyerAction:
        'Negotiate supplier-funded sorting and rework, then inspect the corrected stock before release',
    },
    {
      situation: 'A material share of the lot is unusable',
      evidenceNeeded:
        'Traceable sampling results, representative failed units, requirement comparison, and replacement or disposal cost',
      buyerAction:
        'Seek replacement, refund, credit, or a combined remedy with responsibility for freight and verification defined',
    },
    {
      situation: 'Safety or regulated compliance may be affected',
      evidenceNeeded:
        'Lot identity, incident records, qualified testing, technical files, sales locations, and advice from appropriate specialists',
      buyerAction:
        'Stop distribution, preserve evidence, notify relevant parties as required, and obtain product-safety and legal advice',
    },
    {
      situation: 'The supplier offers free replacements on the next order',
      evidenceNeeded:
        'Written quantity, specifications, production date, freight responsibility, inspection rights, and treatment if replacements fail',
      buyerAction:
        'Do not place new money at risk solely to unlock a vague promise; document and verify the replacement arrangement',
    },
    {
      situation: 'The supplier denies the defect or stops responding',
      evidenceNeeded:
        'Complete evidence index, contract and payment records, notice history, deadline calendar, and identity of the contracting entity',
      buyerAction:
        'Preserve rights and evaluate platform, payment, insurance, formal-demand, mediation, arbitration, or legal routes promptly',
    },
  ] satisfies DecisionRow[],
  evidenceChecklist: [
    'Order identity: supplier legal name, PO or PI number, payment record, SKU, quantity, production lot, and shipment reference',
    'Receiving condition: sealed and opened cartons, pallet condition, carton marks, labels, packing method, and warehouse intake record',
    'Defect proof: numbered photos, continuous video where useful, measurements, test method, failed and acceptable comparison units',
    'Quantity proof: units sampled, selection method, defects by category, confirmed affected quantity, and untested quantity',
    'Requirement proof: signed specification, approved sample, drawings, artwork, inspection criteria, and supplier confirmations',
    'Loss proof: sorting, testing, rework, storage, disposal, freight, refunds, and replacement quotations or invoices',
    'Communication record: claim notice, supplier replies, call summaries, deadlines, admissions, remedy offers, and settlement drafts',
  ],
  scopeLimits: [
    'This guide is practical sourcing and quality-control information, not legal advice for a particular contract or jurisdiction',
    'A photo-backed inspection can document visible defects and agreed checks, but it cannot prove every hidden, intermittent, durability, safety, or compliance failure',
    'Sampling estimates lot condition; it does not prove that every unit is defective or defect-free',
    'Platform, payment, insurance, contract, arbitration, court, and regulatory deadlines vary and should be confirmed from current authoritative terms or qualified advisers',
    'A supplier promise, credit note, corrective-action report, or replacement plan does not guarantee recovery unless the commercial and verification terms are workable',
    'Huang Sourcing can help scope China-side prevention and inspection for future or replacement goods, but cannot guarantee supplier cooperation, legal recovery, or marketplace outcomes',
  ],
  relatedLinks: [
    {
      href: '/qc-inspection-china-before-balance-payment',
      label: 'QC inspection before balance payment',
      note: 'Use inspection evidence while the supplier still has the goods and the buyer still controls final payment.',
    },
    {
      href: '/china-qc-inspection-booking-checklist',
      label: 'China QC inspection booking checklist',
      note: 'Prepare the specifications, defect rules, packing files, and decision deadline for the next inspection.',
    },
    {
      href: '/aql-inspection-china-sample-size-defect-limits',
      label: 'AQL sample size and defect limits',
      note: 'Define a defensible sampling plan and product-specific defect classifications before inspection.',
    },
    {
      href: '/golden-sample-china-manufacturing-quality-control',
      label: 'Golden sample manufacturing quality control',
      note: 'Turn the accepted product into a controlled reference for production and future inspection.',
    },
    {
      href: '/buyer-side-inspection-report',
      label: 'Buyer-side inspection report guide',
      note: 'See what photo-backed product, quantity, packing, label, defect, and scope evidence should contain.',
    },
    {
      href: '/before-forwarder-pickup-inspection-china',
      label: 'Inspection before forwarder pickup',
      note: 'Verify corrected or replacement goods before cartons leave the supplier again.',
    },
  ] satisfies RelatedLink[],
  faqs: [
    {
      question: 'What should I do first when products from China arrive defective?',
      answer:
        'Stop sales and handling, quarantine the affected stock, preserve cartons and labels, photograph the receiving condition, record the quantity, retain representative samples, and notify the supplier in writing. Do not dispose of or rework goods until the evidence and response plan are secured.',
    },
    {
      question: 'What evidence should I send the China supplier?',
      answer:
        'Send an indexed package connecting the order to the failure: PO or PI, specifications, approved sample evidence, shipping and receiving records, carton and label photos, numbered defect photos, test method and results, sample counts, affected quantity, and a documented loss calculation.',
    },
    {
      question: 'Should I ask for a refund or replacement?',
      answer:
        'Choose the remedy by net recovery and execution risk. Compare refund, credit, replacement, supplier-funded sorting, local rework, parts, and combined solutions. Define freight, duties, inspection, deadlines, and what happens if replacement goods fail before agreeing.',
    },
    {
      question: 'Can I charge the supplier for sorting and rework?',
      answer:
        'You can include supported sorting and rework costs in the claim when they result from a documented nonconformity, but recovery depends on the contract, evidence, negotiation, and applicable dispute route. Obtain quotations or invoices and get the method approved before altering evidence when possible.',
    },
    {
      question: 'What if the supplier blames shipping damage?',
      answer:
        'Separate product defects from transit damage using carton condition, pallet and container records, receiving photos, packaging evidence, defect location, and carrier documents. Notify the supplier, carrier, forwarder, and insurer within applicable deadlines when responsibility is uncertain.',
    },
    {
      question: 'Should I place another order to receive free replacements?',
      answer:
        'Do not risk new money only to access a vague replacement promise. If a commercial settlement uses the next order, document replacement quantity, specifications, timing, freight, inspection rights, credit treatment, and the remedy if replacements fail.',
    },
    {
      question: 'Can Huang Sourcing resolve the dispute with my supplier?',
      answer:
        'Huang Sourcing can help buyers define China-side inspection and prevention controls for replacement or future goods. Legal representation, debt recovery, platform decisions, and forcing supplier cooperation are outside normal inspection scope and may require qualified specialists.',
    },
  ] satisfies FaqItem[],
}

export function makeDefectiveProductsChinaSupplierDisputeArticleMetadata(): Metadata {
  const canonicalPath = defectiveProductsChinaSupplierDisputeArticle.href

  return {
    title: defectiveProductsChinaSupplierDisputeArticle.metaTitle,
    description: defectiveProductsChinaSupplierDisputeArticle.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: defectiveProductsChinaSupplierDisputeArticle.metaTitle,
      description: defectiveProductsChinaSupplierDisputeArticle.metaDescription,
      url: canonicalPath,
      siteName: 'Huang Sourcing',
      type: 'article',
      images: getArticleOpenGraphImages(defectiveProductsChinaSupplierDisputeArticle),
    },
    twitter: {
      card: 'summary_large_image',
      title: defectiveProductsChinaSupplierDisputeArticle.metaTitle,
      description: defectiveProductsChinaSupplierDisputeArticle.metaDescription,
      images: [defectiveProductsChinaSupplierDisputeArticle.image.src],
    },
  }
}

export function makeDefectiveProductsChinaSupplierDisputeArticleJsonLd() {
  return [
    makeArticleJsonLd(defectiveProductsChinaSupplierDisputeArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: defectiveProductsChinaSupplierDisputeArticle.articleStructure.title,
      itemListElement: defectiveProductsChinaSupplierDisputeArticle.articleStructure.sections.map(
        (section, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: section.title,
          description: section.summary,
        }),
      ),
    },
    makeFaqPageJsonLd(defectiveProductsChinaSupplierDisputeArticle.faqs),
  ]
}
