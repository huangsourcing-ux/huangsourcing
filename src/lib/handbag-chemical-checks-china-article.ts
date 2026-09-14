import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'

export const handbagChemicalChecksChinaArticle = {
  author: "editorial-team" as const,
  href: "/handbag-chemical-checks-china",
  title: "Handbag Chemical Checks Before Shipping from China",
  h1: "Handbag Chemical Checks Before Shipping from China",
  metaTitle: "Handbag Chemical Checks Before Shipment",
  metaDescription: "Match handbag materials, colorways, chemical test reports, and production lots before payment or pickup in China. Includes public recalls and a release checklist.",
  publishedDate: "September 15, 2026",
  publishedDateIso: "2026-09-15T03:44:51+08:00",
  eyebrow: "Materials • Chemical evidence • Production lots • Release",
  image: {
    alt: "Original diagram connecting handbag components, qualified chemical test evidence, production lots and a shipment decision; not a case photograph or laboratory result",
    height: 900,
    src: "/images/handbag-chemical-checks-china.webp",
    width: 1600
  },
  imageVariants: [
    {
      height: 900,
      src: "/images/handbag-chemical-checks-china.webp",
      width: 1600
    },
    {
      height: 1200,
      src: "/images/handbag-chemical-checks-china-4x3.webp",
      width: 1600
    },
    {
      height: 1200,
      src: "/images/handbag-chemical-checks-china-1x1.webp",
      width: 1200
    }
  ],
  intro: "Before paying the balance or releasing a handbag order from China, connect each material and colorway to the chemical evidence that covers it, then check that the same materials went into the finished production lots. Hold affected stock when a coating, lining, trim, supplier, or material batch has changed without a documented review.",
  answerSummary: "A clean-looking bag and an approved sample do not establish chemical compliance. China-side inspection can document component identity, sample selection, visible differences, labels, and carton scope. A qualified laboratory and the responsible importer must resolve chemical testing, coverage, and destination requirements before the buyer signs a release.",
  primaryCta: {
    label: "Check Handbag Shipment Evidence"
  },
  secondaryCta: {
    href: "#release-checklist",
    label: "See Release Checklist"
  },
  whatsappMessage: "Hi Agent Huang,\n\nI need a China-side handbag material and shipment evidence check.\n\nDestination and importer:\nStyles, colorways, quantities and factory:\nMaterial/component list and approved references:\nComplete chemical reports and sample identities:\nMaterial changes, production lots and carton map:\nPacking status and payment or pickup deadline:\n",
  quickChecks: [
    "List destination, intended users, handbag style, colorway, quantity, factory, production lot, and carton range.",
    "Map the outer material, coating, lining, handles, straps, trims, and other components to controlled material references.",
    "Connect complete chemical reports to identified samples and the importer-approved test scope for that destination.",
    "Record material suppliers, batch codes, substitutions, and which finished lots used each material batch.",
    "Compare sampled finished bags and pack-out with the approved references; keep untested laboratory samples traceable.",
    "Hold unresolved scope; authorize only named lots and cartons after technical questions and corrections close."
  ],
  checkGroups: [
    {
      title: "Material-to-report map",
      items: [
        "Use one row per style, colorway, and component. Record material code, supplier, sample photo, report number, and coverage decision.",
        "Do not assume a report for black outer material covers a camel version, a different coating, or the lining. Have the laboratory justify grouping."
      ]
    },
    {
      title: "Sample custody",
      items: [
        "Agree who selects samples, which material batches they represent, and how they are sealed and identified.",
        "Keep selection photographs, sample IDs, dispatch records, laboratory receipt, and retained references together. A report alone does not prove where its sample came from."
      ]
    },
    {
      title: "Production identity",
      items: [
        "Link incoming material batches and approved substitutions to finished lots and carton ranges.",
        "Where records cannot distinguish affected stock, keep the wider uncertain scope on hold until it can be separated or assessed."
      ]
    },
    {
      title: "Shipment disposition",
      items: [
        "Record each open finding, responsible party, correction, required evidence, and decision deadline.",
        "Keep laboratory clearance and commercial release as separate signed decisions. Tell the forwarder exactly which cartons may move."
      ]
    }
  ],
  sections: [
    {
      id: "why-current",
      title: "Why revisit handbag chemical evidence now?",
      paragraphs: [
        "The September 2, 2026 OPSS recall of ASDA ladies’ handbags identifies excessive DEHP and lists China as the country of origin. An earlier, separate French recall record identifies excessive phthalates in a Kiabi handbag. These records make material evidence a useful question before another order leaves the factory; they do not establish a failure rate for handbags or Chinese suppliers.",
        "The buyer question is whether the tested material can be traced into the bags awaiting payment. This guide adds a component, colorway, and lot workflow to general laboratory-report verification. The recommendations below are Huang Sourcing’s buyer-side analysis, not findings about how either recalled product was manufactured."
      ],
      bullets: [],
      citations: [
        {
          href: "https://www.gov.uk/product-safety-alerts-reports-recalls/product-recall-asda-ladies-handbags-2609-0009",
          label: "OPSS ASDA handbag recall"
        },
        {
          href: "https://rappel.conso.gouv.fr/fiche-rappel/2026-03-0152",
          label: "RappelConso Kiabi COH67 recall"
        }
      ]
    },
    {
      id: "destination",
      title: "Set the destination and test brief before collecting reports",
      paragraphs: [
        "Name the market precisely. HSE explains that UK REACH applies in Great Britain, while EU REACH operates separately and continues to apply in Northern Ireland. A supplier’s undifferentiated “EU/UK compliant” statement is not a usable test brief.",
        "Ask the importer and qualified laboratory to identify applicable restrictions, substances, methods, concentration basis, limits, and sample grouping for the actual materials and intended use. Record other applicable obligations separately. This is especially important if one purchase order serves multiple markets or includes products intended for children."
      ],
      bullets: [],
      citations: [
        {
          href: "https://www.hse.gov.uk/reach/about.htm",
          label: "HSE: UK REACH and EU REACH scope"
        }
      ]
    },
    {
      id: "report-scope",
      title: "Does the report cover the component you are buying?",
      paragraphs: [
        "Read the complete report, including sample descriptions, photographs, test methods, results, units, reporting limits, and any exclusions. Match it to the order’s component map. A report naming only “bag material” leaves the buyer unable to tell whether it covers the body, coating, strap, lining, or another part.",
        "Ask the laboratory whether the tested sample and any grouping can support the intended decision. Do not infer coverage across colors, formulations, suppliers, or production revisions. If several materials were combined for testing, obtain a written explanation of what the combined result can and cannot establish for the individual materials.",
        "Have the issuer confirm a questionable report through its own contact channel. Preserve the original file and verification response. An authentic report can still be irrelevant to the material used in this order."
      ],
      bullets: [],
      citations: []
    },
    {
      id: "svhc-versus-restrictions",
      title: "Why an SVHC declaration is not the whole answer",
      paragraphs: [
        "Restriction compliance and Candidate List communication are different questions. HSE describes restrictions as limits, bans, or conditions on substances, including substances in articles. Its SVHC guidance describes separate duties to communicate information about Candidate List substances in articles.",
        "Request a destination-specific restriction assessment as well as any applicable SVHC information. Record the scope and date of each document. A one-page “REACH certificate,” an old Candidate List declaration, or a marketing statement such as “vegan” does not identify all applicable requirements or the tested production materials."
      ],
      bullets: [],
      citations: [
        {
          href: "https://www.hse.gov.uk/reach/restrictions.htm",
          label: "HSE: restrictions under REACH"
        },
        {
          href: "https://www.hse.gov.uk/reach/svhc-overview.htm",
          label: "HSE: SVHC supplier responsibilities"
        }
      ]
    },
    {
      id: "production-changes",
      title: "Which material changes should stop an automatic release?",
      paragraphs: [
        "Treat a new material supplier, coating formulation, adhesive, trim, recycled input, or color recipe as a review trigger. The trigger does not automatically mean the product is noncompliant; it means previous evidence needs a documented coverage decision.",
        "Ask the factory to identify the first affected material batch and every finished lot using it. Preserve samples and records while the laboratory or responsible technical party decides whether existing evidence remains suitable or additional testing is needed. If old and changed stock are mixed, do not release the mixed cartons on the strength of the earlier report."
      ],
      bullets: [],
      citations: []
    },
    {
      id: "factory-checks",
      title: "What can an inspector check at the factory?",
      paragraphs: [
        "Scope the visit around accessible evidence and goods. Compare the agreed sample set with approved material references, component descriptions, workmanship criteria, colorway identification, labels, packaging, quantities, and the carton map. Record discrepancies with sample and lot context.",
        "Odor, texture, appearance, and a successful zipper or strap check cannot measure phthalate concentration. Likewise, repacking, airing, or relabeling is not evidence that a chemical finding has been resolved. Where chemistry is unresolved, hold the affected scope for qualified assessment.",
        "If the buyer releases a cleared portion, document the exact order lines, quantities, lots, and cartons. Keep the held stock separately identified and obtain the forwarder’s collection instruction against that same list."
      ],
      bullets: [],
      citations: []
    }
  ],
  decisionRows: [
    {
      riskNode: "Report sample cannot be identified",
      evidence: "Complete report, sample photos, dispatch record, laboratory receipt, and component map.",
      buyerDecision: "Hold the claimed coverage; obtain traceable evidence before relying on the result."
    },
    {
      riskNode: "Only one color or component was tested",
      evidence: "Style–color–component matrix and a qualified explanation of any grouping.",
      buyerDecision: "Hold uncovered order lines until scope is resolved."
    },
    {
      riskNode: "Material supplier or formulation changed",
      evidence: "Change log, material batch, first affected production lot, and technical testing decision.",
      buyerDecision: "Segregate changed stock; clear it only against the required evidence."
    },
    {
      riskNode: "Chemical result exceeds an applicable limit",
      evidence: "Confirmed result, exact sample identity, affected stock map, and importer/laboratory disposition.",
      buyerDecision: "Hold affected stock. Correct the cause and obtain the required verification before considering release."
    },
    {
      riskNode: "Evidence is acceptable but stock is mixed",
      evidence: "Traceable segregation, revised carton list, and follow-up inspection findings.",
      buyerDecision: "Release only identifiable cleared stock; a passing report does not identify mixed cartons."
    },
    {
      riskNode: "Technical evidence and sampled goods align",
      evidence: "Closed findings, report coverage decisions, inspection record, and identified release scope.",
      buyerDecision: "Buyer signs the commercial release with remaining conditions recorded; sampling does not guarantee every unit."
    }
  ],
  publicCase: {
    title: "ASDA: three handbag references, one chemical recall",
    facts: "On September 2, 2026, OPSS published recall 2609-0009 for three black ASDA ladies’ handbags because of excessive DEHP. It lists China as the origin. The affected references are Front Pocket Xbody Bag (1100258937001), Opp Tote Bag (1100260834001), and Black Nylon Phone Bag (1100258939001).",
    evidence: "The regulator lists product identifiers, the hazard, and the return-for-refund instruction. It does not publish a complete laboratory report or establish which factory control failed.",
    lesson: "Use the exact style and component evidence to define review scope. A fabric description or a similar-looking sample cannot establish the chemical status of the finished order.",
    limits: "The public record does not establish a common material supplier, a failed component, or a root cause. This article makes no such inference. Huang Sourcing did not participate in the case.",
    href: "https://www.gov.uk/product-safety-alerts-reports-recalls/product-recall-asda-ladies-handbags-2609-0009",
    label: "OPSS recall 2609-0009"
  },
  secondCase: "A separate April 3, 2026 French RappelConso record covers Kiabi COH67 in camel, GTIN 3616030106178, for excessive phthalates. The professional-submitted voluntary recall concerns a named colorway. It remains relevant as a reminder to preserve variant identity; it does not prove other colors or either retailer share a material source.",
  secondCaseHref: "https://rappel.conso.gouv.fr/fiche-rappel/2026-03-0152",
  evidenceBasis: [
    "Primary case records: OPSS’s September handbag recall notice, plus the separate April Kiabi record published on France’s RappelConso portal.",
    "Current official scope checked against HSE’s UK REACH, restriction, and SVHC guidance. Product-specific requirements and testing remain for the importer and qualified specialists.",
    "Original buyer-side contribution: component and colorway mapping, sample custody, material change review, and lot-to-carton release records.",
    "No private customer records, claimed field experience, search-volume estimate, laboratory result, or guaranteed compliance outcome is used."
  ],
  whatToSend: [
    "Order file: destination, importer, intended users, style, colorway, quantity, factory, dates, and shipment deadline.",
    "Material file: component map, controlled specifications, approved references, material suppliers, batch codes, and change history.",
    "Evidence file: complete reports, sample selection and custody records, laboratory confirmations, requirement matrix, and unresolved questions.",
    "Release file: finished production lots, packing list, carton map, known findings, corrective actions, and named technical/commercial decision owners."
  ],
  scopeLimits: [
    "A sampled factory inspection cannot measure chemical concentration or certify all materials in every bag.",
    "Huang Sourcing can compare buyer-approved references, document accessible goods and records, and coordinate an agreed sample handoff. Laboratory testing and legal compliance decisions require the responsible qualified parties.",
    "A supplier declaration is evidence to review, not a substitute for a complete product-specific assessment. A report describes its tested sample and stated scope.",
    "The importer retains its market obligations. The buyer decides payment and pickup only after identifying cleared stock and recording unresolved conditions."
  ],
  relatedLinks: [
    {
      href: "/qc-inspection-china",
      label: "China QC inspection service",
      note: "Scope material identity, finished-goods, and packaging comparisons."
    },
    {
      href: "/verify-china-lab-test-report",
      label: "Verify a supplier laboratory report",
      note: "Review issuer, sample identity, completeness, and limitations."
    },
    {
      href: "/qc-before-balance",
      label: "QC before balance payment",
      note: "Keep open findings connected to payment release."
    },
    {
      href: "/packaging-label-check-before-payment",
      label: "Packaging and label checks",
      note: "Match labels, order lines, and cartons before dispatch."
    },
    {
      href: "/pre-shipment-before-pickup",
      label: "Inspection before forwarder pickup",
      note: "Define which inspected lots and cartons may leave."
    },
    {
      href: "/china-sourcing-risk-guides",
      label: "China sourcing risk guides",
      note: "Find related supplier, evidence, and shipment decisions."
    }
  ],
  sourceNotes: [
    {
      href: "https://www.gov.uk/product-safety-alerts-reports-recalls/product-recall-asda-ladies-handbags-2609-0009",
      label: "OPSS: ASDA ladies’ handbags recall",
      note: "September 2, 2026; product references, origin, chemical hazard, and recall action."
    },
    {
      href: "https://rappel.conso.gouv.fr/fiche-rappel/2026-03-0152",
      label: "RappelConso: Kiabi COH67 camel handbag",
      note: "April 3, 2026; professional-submitted voluntary recall with model, colorway, GTIN, and phthalate reason."
    },
    {
      href: "https://www.hse.gov.uk/reach/about.htm",
      label: "HSE: UK REACH explained",
      note: "Great Britain scope and the separate operation of UK REACH and EU REACH."
    },
    {
      href: "https://www.hse.gov.uk/reach/restrictions.htm",
      label: "HSE: restrictions under REACH",
      note: "Restriction requirements can concern substances in articles."
    },
    {
      href: "https://www.hse.gov.uk/reach/svhc-overview.htm",
      label: "HSE: substances of very high concern",
      note: "Separate Candidate List and supplier communication responsibilities."
    }
  ],
  tableOfContents: [
    {
      href: "#quick-answer",
      label: "Quick answer"
    },
    {
      href: "#release-checklist",
      label: "Release checklist"
    },
    {
      href: "#why-current",
      label: "Current evidence"
    },
    {
      href: "#destination",
      label: "Destination and test brief"
    },
    {
      href: "#report-scope",
      label: "Report and sample scope"
    },
    {
      href: "#svhc-versus-restrictions",
      label: "SVHC and restrictions"
    },
    {
      href: "#production-changes",
      label: "Material changes"
    },
    {
      href: "#factory-checks",
      label: "Factory checks"
    },
    {
      href: "#decision-table",
      label: "Release decisions"
    },
    {
      href: "#public-case",
      label: "Public cases"
    },
    {
      href: "#documents",
      label: "What to send"
    },
    {
      href: "#scope-limits",
      label: "Scope limits"
    },
    {
      href: "#sources",
      label: "Sources"
    }
  ]
}

export function makeHandbagChemicalChecksChinaArticleMetadata(): Metadata {
  const article = handbagChemicalChecksChinaArticle
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: article.href },
    openGraph: { title: article.metaTitle, description: article.metaDescription, url: article.href, siteName: 'Huang Sourcing', type: 'article', publishedTime: article.publishedDateIso, images: getArticleOpenGraphImages(article) },
    twitter: { card: 'summary_large_image', title: article.metaTitle, description: article.metaDescription, images: [article.image.src] },
  }
}

export function makeHandbagChemicalChecksChinaArticleJsonLd() {
  return [makeArticleJsonLd(handbagChemicalChecksChinaArticle), {
    '@context': 'https://schema.org', '@type': 'ItemList',
    name: 'Handbag chemical evidence release checklist',
    itemListElement: handbagChemicalChecksChinaArticle.quickChecks.map((name, index) => ({ '@type': 'ListItem', position: index + 1, name })),
  }]
}
