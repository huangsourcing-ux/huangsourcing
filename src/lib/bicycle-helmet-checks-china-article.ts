import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'
import { bicycleHelmetChecksChinaArticleHref, qcBeforeBalanceArticleHref, preShipmentBeforePickupArticleHref } from '@/lib/site-links'

export const bicycleHelmetChecksChinaArticle = {
  author: "editorial-team" as const,
  href: bicycleHelmetChecksChinaArticleHref,
  title: "Bicycle Helmet Checks Before Shipping from China",
  h1: "Bicycle Helmet Checks Before Shipping from China",
  metaTitle: "Bicycle Helmet Checks Before China Shipment",
  metaDescription: "Match bicycle helmet models, sizes, retention systems, test records, certification labels, and production lots before balance payment or pickup in China.",
  publishedDate: "September 13, 2026",
  publishedDateIso: "2026-09-13T03:31:30+08:00",
  eyebrow: "Model and size • Test evidence • Production lot • Release",
  image: {
    alt: "Original diagram linking bicycle helmet model and size, qualified test records, production lot checks, and a buyer release decision; not a product test or case photograph",
    height: 900,
    src: "/images/bicycle-helmet-checks-china.webp",
    width: 1600
  },
  imageVariants: [
    {
      height: 900,
      src: "/images/bicycle-helmet-checks-china.webp",
      width: 1600
    },
    {
      height: 1200,
      src: "/images/bicycle-helmet-checks-china-4x3.webp",
      width: 1600
    },
    {
      height: 1200,
      src: "/images/bicycle-helmet-checks-china-1x1.webp",
      width: 1200
    }
  ],
  intro: "Before paying the balance or releasing a U.S.-bound bicycle helmet order from China, match each model and size to its approved construction, qualified test records, certification labels, and actual production lot. Hold a shipment if the straps, buckles, fit system, liner, attachments, label version, or lot identity differ from the evaluated product.",
  answerSummary: "A finished-goods inspection can document production identity, visible assembly, sizing references, labels, packaging, and carton scope. It cannot establish crash protection through a hand pull, fit check, or visual pass. Keep qualified helmet testing, importer certification, and the buyer’s commercial release decision separately documented.",
  primaryCta: {
    label: "Check Helmet Shipment Evidence"
  },
  secondaryCta: {
    href: "#release-checklist",
    label: "See Release Checklist"
  },
  whatsappMessage: "Hi Agent Huang,\n\nI need a China-side bicycle helmet evidence and quality check before shipment.\n\nDestination, importer, intended age and use:\nModels, sizes, attachments, factory and production lots:\nApproved samples, drawings, component list and changes:\nComplete test reports, certification and label artwork:\nQuantities, carton map and packing status:\nKnown issues and balance-payment or pickup deadline:\n",
  quickChecks: [
    "List every model, size, intended age, intended activity, attachment, factory, production date, and lot in the order.",
    "Connect complete test records to the exact shell, liner, retention system, fit adjustment, size range, and offered configuration.",
    "Obtain importer-approved certification, warnings, instructions, traceability labels, and packaging artwork before inspection.",
    "Compare sampled finished helmets with controlled references; identify substitutions, damage, inconsistent assembly, and mixed stock.",
    "Keep laboratory samples and any impacted, altered, or destructively tested helmets out of saleable inventory.",
    "Release only identified lots and carton ranges after open findings have a documented disposition."
  ],
  checkGroups: [
    {
      title: "Model and size coverage",
      items: [
        "Create one row per model–size–configuration. Record the report reference, approved bill of materials, attachment set, and production lot.",
        "Ask qualified parties to resolve uncovered sizes or configurations before treating a model-family report as order coverage."
      ]
    },
    {
      title: "Retention and fit assembly",
      items: [
        "Compare strap routing, anchors, webbing, stitching, buckle halves, dividers, adjuster, and pad set with approved samples and drawings.",
        "Photograph each mismatch with sample identity and carton context. An apparently functioning buckle does not establish retention strength."
      ]
    },
    {
      title: "Labels and package identity",
      items: [
        "Use approved destination-specific artwork. Match model, size, age statement, manufacturer/importer identity, production date, and lot across helmet, package, and records.",
        "Record barcode, instructions, accessories, retail protection, quantity, and carton marks. Segregate mixed sizes or label revisions."
      ]
    },
    {
      title: "Corrections and release",
      items: [
        "Map changes to affected quantities and first affected lots. Require technical review where the change could affect performance or evidence coverage.",
        "Keep corrected stock identifiable and arrange repeat inspection or qualified testing where required. Document who authorized each cleared lot."
      ]
    }
  ],
  sections: [
    {
      id: "why-current",
      title: "Why helmet evidence deserves a fresh check",
      paragraphs: [
        "CPSC’s September 2026 Victgoal recall and June 2026 Gudook recall concern different helmet models and different performance failures. Together they show why an importer should check specific test coverage and production identity, rather than rely on a brand name or a generic compliance claim.",
        "An independent signal comes from the Bicycle Helmet Safety Institute’s June 18, 2026 report on revisions to three ASTM helmet standards. This is a reason to confirm the edition behind an optional performance claim; it does not make an ASTM revision a replacement for the U.S. mandatory bicycle-helmet standard.",
        "The practical question is narrow: does the evidence describe the helmets in the cartons awaiting payment and pickup? This guide focuses on that handoff. It makes no claim about rising search volume, the quality of an entire country’s output, or Huang Sourcing’s involvement in the cited cases."
      ],
      bullets: [],
      citations: [
        {
          href: "https://www.cpsc.gov/Recalls/2026/Victgoal-Recalls-Bicycle-Helmets-Due-to-Risk-of-Serious-Injury-or-Death-from-Head-Injury-Violate-Mandatory-Standard-for-Bicycle-Helmets",
          label: "CPSC Victgoal recall"
        },
        {
          href: "https://www.cpsc.gov/Recalls/2026/Bicycle-Helmets-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Head-Injury-Violates-Mandatory-Standard-for-Bicycle-Helmets-Sold-on-Amazon-by-Gudook-Outdoor-Sports",
          label: "CPSC Gudook recall"
        },
        {
          href: "https://helmets.org/astm-improves-three-bike-helmet-standards/",
          label: "BHSI report on ASTM revisions"
        }
      ]
    },
    {
      id: "define-product",
      title: "Define the use, size range, and attachments first",
      paragraphs: [
        "Write a product brief that the importer, factory, laboratory, and inspector can all identify. Include intended activity and age, head-circumference range, shell and liner versions, padding, straps, buckles, fit adjuster, visor, lights, and other supplied attachments. Keep listing claims consistent with the brief.",
        "CPSC’s guidance explains that marketing can bring a multi-purpose helmet within the bicycle-helmet rule. Its test overview addresses peripheral vision, positional stability, retention strength, and impact attenuation, with model, size, conditioning, and attachment considerations. A “multi-sport” description should therefore trigger a requirements review, not a shortcut around one.",
        "Use a coverage matrix rather than a folder of certificates. For each order line, show the approved version, tested configuration, report pages, label revision, and lot. Mark missing coverage explicitly. A shared outer shell or a supplier’s model alias is a question to resolve, not evidence that sizes and constructions are interchangeable."
      ],
      bullets: [
        "Resolve U.S. bicycle use separately from motorcycle, downhill, BMX, skate-only, and other destination claims.",
        "Ask the laboratory or responsible technical party to explain which offered configurations the records cover."
      ],
      citations: [
        {
          href: "https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Bicycle-Helmets",
          label: "CPSC bicycle helmet scope and test guidance"
        }
      ]
    },
    {
      id: "test-records",
      title: "What should the helmet test file connect?",
      paragraphs: [
        "Ask for the complete record and its connection to current production. Our buyer-side review worksheet links report identity, issuer, manufacturer, model, size, sample photographs, construction revision, tested attachments, results, exceptions, and the shipment’s production lot. Missing pages or unexplained model aliases should remain open findings.",
        "Read beyond an overall “PASS.” Ask the qualified reviewer to identify the underlying retention, stability, impact, and vision evidence, and any labeling findings. Confirm the tested sample’s configuration through photographs and controlled specifications. Record who confirmed an ambiguous report scope and on what basis.",
        "Where a helmet is a children’s product, CPSC states that the domestic manufacturer or importer issues the Children’s Product Certificate using results from a CPSC-accepted third-party laboratory. The responsible party must determine the applicable requirements and certificate content for the exact product. A supplier PDF or a factory inspection report is not automatically the importer’s certificate."
      ],
      bullets: [
        "Verify the claimed laboratory and report through independently obtained contact details or its official verification channel.",
        "Record unresolved size, attachment, sample-photo, factory, or component discrepancies before payment."
      ],
      citations: [
        {
          href: "https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Childrens-Product-Certificate",
          label: "CPSC Children’s Product Certificate guidance"
        }
      ]
    },
    {
      id: "physical-checks",
      title: "What can the inspector check at the factory?",
      paragraphs: [
        "Inspectors can compare sampled finished helmets with buyer-approved criteria while cartons remain accessible. Useful observations include visible cracks, dents, crushed or chipped liner areas, separation at bonded surfaces, sharp edges, poorly seated padding, loose fittings, inconsistent strap routing, incomplete stitching, and mismatched buckle parts.",
        "Document dimensions and weight against approved tolerances, label legibility, available adjustment, accessory count, cosmetic condition, and package protection. Use reference photographs of the approved assembly so differences are visible in the report. Do not infer a liner’s impact performance from its appearance, mass, or apparent thickness.",
        "Agree the sample plan, accessible checks, equipment, tolerances, and stop conditions before the visit. Ordinary handling checks must not become improvised impact drops, weighted strap pulls, or roll-off testing. Any qualified performance work needs its own controlled method and sample disposition. Never return an impacted or altered test helmet to saleable stock."
      ],
      bullets: [
        "Take overall and detail photographs linked to sample number, model, size, lot label, retail pack, and master carton.",
        "Sample across agreed models, sizes, production lots, and carton locations; do not let one convenient sample stand in for every order line.",
        "Treat unexpected damage or component changes as a hold-and-review finding, even if other visible checks pass."
      ],
      citations: []
    },
    {
      id: "labels",
      title: "Check certification labels against approved artwork",
      paragraphs: [
        "Under 16 CFR 1203.34, the helmet’s certification labeling includes the appropriate compliance statement, responsible-party details, foreign manufacturer information where applicable, production-lot identification, and uncoded manufacturing month and year. The rule also addresses visibility and packaging or promotional labeling. Have the importer approve the exact wording and permitted coding; the inspector should compare production with that controlled file.",
        "Do not fix a failed performance result by adding a label. Equally, do not treat correct printing as proof that the claimed testing occurred. Keep evidence review and artwork approval as two separate fields in the release record.",
        "For a private-label order, build a cross-reference between the commercial SKU, factory model, tested configuration, helmet label, retail barcode, and carton range. If a label code changes, preserve the mapping so a later inquiry can identify the actual production lot."
      ],
      bullets: [],
      citations: [
        {
          href: "https://www.law.cornell.edu/cfr/text/16/1203.34",
          label: "16 CFR 1203.34 certification labeling"
        }
      ]
    },
    {
      id: "change-control",
      title: "When should a new lot stay on hold?",
      paragraphs: [
        "Section 1203.33 requires a new production lot for testing when a change in parts, part suppliers, or production methods could affect compliance. A testing program that indicates possible noncompliance prevents certification of that lot until sufficient corrective action has been taken. The rule’s production-lot definition concerns safety-relevant design, construction, and material similarity.",
        "Apply that question to a changed buckle source, strap weave, anchor, stitching pattern, foam formulation, molding process, adhesive, shell geometry, or attachment. Our recommended purchase-order control is simple: no safety-relevant substitution without a written change record and qualified disposition.",
        "Keep the old and new versions identifiable in production and storage. A supplier explanation such as “same quality” should not close a mismatch. Record affected lots and cartons, the evidence needed, the decision owner, and the deadline. Arrange revised testing or repeat inspection according to the disposition before release."
      ],
      bullets: [],
      citations: [
        {
          href: "https://www.law.cornell.edu/cfr/text/16/1203.33",
          label: "16 CFR 1203.33 production-lot testing"
        },
        {
          href: "https://www.law.cornell.edu/cfr/text/16/1203.32",
          label: "16 CFR 1203.32 production-lot definition"
        }
      ]
    }
  ],
  decisionRows: [
    {
      riskNode: "Report covers one size; order contains several",
      evidence: "Model–size matrix, complete report scope, attachments, and qualified coverage explanation.",
      buyerDecision: "Hold uncovered order lines until the responsible technical party resolves scope."
    },
    {
      riskNode: "Strap, buckle, liner, or process has changed",
      evidence: "Change record, first affected lot, revised references, and testing disposition.",
      buyerDecision: "Segregate changed lots; release only after the required evidence and checks close."
    },
    {
      riskNode: "Visible damage or inconsistent assembly",
      evidence: "Sample photographs, agreed defect criteria, affected carton map, and correction record.",
      buyerDecision: "Hold affected stock; assess extent, correct, and repeat the relevant inspection."
    },
    {
      riskNode: "Correct-looking helmet; missing or wrong label",
      evidence: "Importer-approved artwork and traceable evidence supporting the label claim.",
      buyerDecision: "Hold for controlled correction. Relabeling cannot resolve a performance failure."
    },
    {
      riskNode: "Evidence and sampled goods align",
      evidence: "Completed review, inspection findings, closed corrections, and named lots/cartons.",
      buyerDecision: "Buyer records release scope and remaining conditions; sampling does not guarantee every unit."
    }
  ],
  publicCase: {
    title: "Victgoal: a small recall with precise lot boundaries",
    facts: "On September 10, 2026, CPSC recalled about 40 China-made Victgoal children’s bicycle helmets for retention-system, positional-stability, and certification noncompliance. The notice identifies small-size HT-006 helmets made in November 2025, lot 2025A1101. No incidents or injuries were reported.",
    evidence: "The official notice supplies product identifiers, interior label details, affected scope, and the consumer remedy. It does not disclose the full laboratory report or the factory’s production controls.",
    lesson: "Use model, size, production date, and lot as linked release fields. Ask for the underlying test coverage as well as the correct labeling.",
    limits: "This record concerns an identified product and lot. It does not establish that other suppliers or helmets share the defect. Huang Sourcing did not participate in this case.",
    href: "https://www.cpsc.gov/Recalls/2026/Victgoal-Recalls-Bicycle-Helmets-Due-to-Risk-of-Serious-Injury-or-Death-from-Head-Injury-Violate-Mandatory-Standard-for-Bicycle-Helmets",
    label: "CPSC Victgoal recall 26-749"
  },
  secondCase: "A separate June 4, 2026 CPSC recall involved about 520 Gudook adult helmets, model KY-055, batch 202503. CPSC identified impact-attenuation and certification failures. That earlier case remains relevant because passing appearance checks cannot establish the impact performance of a different model or lot.",
  secondCaseHref: "https://www.cpsc.gov/Recalls/2026/Bicycle-Helmets-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Head-Injury-Violates-Mandatory-Standard-for-Bicycle-Helmets-Sold-on-Amazon-by-Gudook-Outdoor-Sports",
  evidenceBasis: [
    "Primary records: the September 2026 Victgoal and June 2026 Gudook CPSC recall notices. Case facts are distinguished from our proposed purchasing controls.",
    "Current requirements checked against CPSC bicycle-helmet guidance, the current 16 CFR Part 1203 text, and CPSC certificate guidance.",
    "Independent context: BHSI’s June 2026 report on ASTM revisions. Optional claims require edition review; no new mandatory U.S. test threshold is inferred here.",
    "Huang Sourcing’s contribution is an original buyer-side model, evidence, lot, and carton release workflow. No laboratory result, private client experience, or safety outcome is claimed."
  ],
  whatToSend: [
    "Order matrix: destination, importer, intended age/use, model, size, head range, color, attachments, quantity, and production lots.",
    "Approved references: samples, photographs, drawings, bill of materials, strap and buckle details, liner version, tolerances, and change history.",
    "Evidence file: complete reports, sample identity, qualified coverage decisions, certification documents, and open technical questions.",
    "Pack-out and schedule: approved labels/instructions, barcodes, lot-code key, carton map, known problems, correction records, and release deadline."
  ],
  scopeLimits: [
    "A sampled visual inspection cannot certify impact protection, retention strength, positional stability, or every helmet in a shipment.",
    "Huang Sourcing can document goods and compare buyer-approved references; qualified parties control design validation, laboratory methods, product classification, and compliance decisions.",
    "The importer remains responsible for applicable certification and market-entry obligations. U.S. bicycle-helmet evidence does not automatically cover another activity or destination.",
    "Payment release and pickup authorization should name the cleared lots and cartons. Keep unresolved items visible instead of treating a generic inspection pass as blanket approval."
  ],
  relatedLinks: [
    {
      href: "/qc-inspection-china",
      label: "China QC inspection service",
      note: "Scope an accessible finished-goods comparison before release."
    },
    {
      href: "/verify-china-lab-test-report",
      label: "Check a supplier’s lab report",
      note: "Review issuer, sample identity, completeness, and limitations."
    },
    {
      href: qcBeforeBalanceArticleHref,
      label: "QC before balance payment",
      note: "Connect open findings to the payment decision."
    },
    {
      href: preShipmentBeforePickupArticleHref,
      label: "Inspection before forwarder pickup",
      note: "Define the inspected quantity and carton scope."
    },
    {
      href: "/china-sourcing-risk-guides",
      label: "China sourcing risk guides",
      note: "Find related supplier, packaging, and shipment decisions."
    }
  ],
  sourceNotes: [
    {
      href: "https://www.cpsc.gov/Recalls/2026/Victgoal-Recalls-Bicycle-Helmets-Due-to-Risk-of-Serious-Injury-or-Death-from-Head-Injury-Violate-Mandatory-Standard-for-Bicycle-Helmets",
      label: "CPSC: Victgoal children’s helmet recall",
      note: "September 10, 2026; retention, stability, certification, and identified lot scope."
    },
    {
      href: "https://www.cpsc.gov/Recalls/2026/Bicycle-Helmets-Recalled-Due-to-Risk-of-Serious-Injury-or-Death-from-Head-Injury-Violates-Mandatory-Standard-for-Bicycle-Helmets-Sold-on-Amazon-by-Gudook-Outdoor-Sports",
      label: "CPSC: Gudook adult helmet recall",
      note: "June 4, 2026; a separate impact-performance and certification case."
    },
    {
      href: "https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Bicycle-Helmets",
      label: "CPSC: bicycle helmet business guidance",
      note: "Product scope and an overview of qualified helmet testing."
    },
    {
      href: "https://www.law.cornell.edu/cfr/text/16/1203.34",
      label: "16 CFR 1203.34: Certification labeling",
      note: "Responsible-party, lot, date, and labeling provisions. Regulation text hosted by Cornell Legal Information Institute and cross-checked with eCFR."
    },
    {
      href: "https://www.law.cornell.edu/cfr/text/16/1203.33",
      label: "16 CFR 1203.33: Certification testing",
      note: "Production-lot changes, testing, and corrective action. Regulation text hosted by Cornell Legal Information Institute and cross-checked with eCFR."
    },
    {
      href: "https://www.law.cornell.edu/cfr/text/16/1203.32",
      label: "16 CFR 1203.32: Definitions",
      note: "Production-lot definition in the regulation. Regulation text hosted by Cornell Legal Information Institute and cross-checked with eCFR."
    },
    {
      href: "https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Childrens-Product-Certificate",
      label: "CPSC: Children’s Product Certificate",
      note: "Responsible issuer and third-party testing basis for children’s products."
    },
    {
      href: "https://helmets.org/astm-improves-three-bike-helmet-standards/",
      label: "BHSI: June 2026 ASTM revision report",
      note: "Independent standards context; not a replacement for the mandatory U.S. rule."
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
      href: "#define-product",
      label: "Use, size, attachments"
    },
    {
      href: "#test-records",
      label: "Test records"
    },
    {
      href: "#physical-checks",
      label: "Factory checks"
    },
    {
      href: "#labels",
      label: "Certification labels"
    },
    {
      href: "#change-control",
      label: "Change control"
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

export function makeBicycleHelmetChecksChinaArticleMetadata(): Metadata {
  const article = bicycleHelmetChecksChinaArticle
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: article.href },
    openGraph: { title: article.metaTitle, description: article.metaDescription, url: article.href, siteName: 'Huang Sourcing', type: 'article', publishedTime: article.publishedDateIso, images: getArticleOpenGraphImages(article) },
    twitter: { card: 'summary_large_image', title: article.metaTitle, description: article.metaDescription, images: [article.image.src] },
  }
}

export function makeBicycleHelmetChecksChinaArticleJsonLd() {
  return [makeArticleJsonLd(bicycleHelmetChecksChinaArticle), {
    '@context': 'https://schema.org', '@type': 'ItemList',
    name: 'Bicycle helmet shipment release checklist',
    itemListElement: bicycleHelmetChecksChinaArticle.quickChecks.map((name, index) => ({ '@type': 'ListItem', position: index + 1, name })),
  }]
}
