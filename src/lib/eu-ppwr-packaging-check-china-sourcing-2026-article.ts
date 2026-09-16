import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'

export const euPpwrPackagingCheckChinaArticle = {
  href: "/eu-ppwr-packaging-check-china-sourcing-2026",
  title: "EU PPWR Packaging Checks After August 2026",
  metaTitle: "EU PPWR Packaging Checks After August 2026",
  metaDescription: "PPWR now applies. Match packaging versions, declaration ownership and food-contact PFAS evidence before releasing China-sourced goods for EU shipment.",
  publishedDate: "June 24, 2026",
  publishedDateIso: "2026-06-24T09:00:00-04:00",
  h1: "EU PPWR Packaging Checks After August 2026",
  eyebrow: "EU packaging · evidence before payment and pickup",
  image: {
    alt: "Original diagram connecting packaging revision, responsible owner and shipment evidence for a PPWR release decision; not a photograph of the public case",
    width: 1600,
    height: 900,
    src: "/images/ppwr-packaging-release-evidence.webp"
  },
  imageVariants: [
    {
      width: 1600,
      height: 900,
      src: "/images/ppwr-packaging-release-evidence.webp"
    },
    {
      width: 1600,
      height: 1200,
      src: "/images/ppwr-packaging-release-evidence-4x3.webp"
    },
    {
      width: 1200,
      height: 1200,
      src: "/images/ppwr-packaging-release-evidence-1x1.webp"
    }
  ],
  intro: "The EU Packaging and Packaging Waste Regulation (PPWR) has applied generally since August 12, 2026. If your China order is ready for balance payment or pickup, connect the packaging actually in the cartons to its responsible manufacturer, applicable requirements and evidence file. The start date does not make every future PPWR target due today.",
  answerSummary: "Before release, identify each packaging layer and revision, confirm who owns the conformity decision, and match the approved materials, artwork and supporting files to sampled stock. Escalate food-contact PFAS evidence gaps, unsupported environmental claims and substitutions. Hold the affected quantity until the responsible team accepts the correction and evidence. An inspection records shipment facts; it does not certify PPWR compliance.",
  primaryCta: {
    label: "Check EU Packaging Before Shipment"
  },
  secondaryCta: {
    href: "#ppwr-checklist",
    label: "See PPWR Checklist"
  },
  whatsappMessage: "Hi Agent Huang,\n\nI need a China-side EU PPWR packaging evidence check before shipment.\n\nProduct / SKU count:\nEU destination country or marketplace:\nSupplier / factory location:\nOrder quantity / cartons:\nApproved packaging files:\nMaterial, label, or declaration files:\nPayment or pickup deadline:\n",
  tableOfContents: [
    {
      href: "#quick-answer",
      label: "Quick answer"
    },
    {
      href: "#ppwr-checklist",
      label: "Release checklist"
    },
    {
      href: "#why-current",
      label: "What applies now"
    },
    {
      href: "#responsible-owner",
      label: "Who owns the declaration"
    },
    {
      href: "#substances",
      label: "Food-contact PFAS"
    },
    {
      href: "#packaging-scope",
      label: "Match files to cartons"
    },
    {
      href: "#public-case",
      label: "Public case example"
    },
    {
      href: "#importer-handoff",
      label: "Release handoff"
    },
    {
      href: "#decision-table",
      label: "Hold or release"
    },
    {
      href: "#source-notes",
      label: "Sources"
    }
  ],
  quickChecks: [
    "Name the EU destination, packaging type and responsible manufacturer for every packaging layer; keep importer and EPR roles separately identified.",
    "Freeze the approved packaging revision, material list, supplier, dimensions and artwork before the inspection.",
    "Index the declaration and technical evidence by packaging type and revision, with a named reviewer and an approval status.",
    "For food-contact packaging, send matched material and coating evidence to the qualified team assessing PFAS and other applicable restrictions.",
    "Photograph sampled packaging, printed claims and carton identifiers; record what was accessible and how much was checked.",
    "List substitutions, mixed revisions, missing files and unsupported claims by affected SKU and quantity.",
    "After correction, update the file index and obtain re-check evidence; do not reuse photos from the original failed condition.",
    "Get the buyer’s documented release decision and EU-side acceptance of unresolved compliance questions before authorising pickup."
  ],
  checkGroups: [
    {
      title: "Packaging identity",
      items: [
        "Use one revision code across the material list, artwork, declaration reference and inspection photos.",
        "Map sales, grouped and transport packs separately; a carton photo does not identify the coating inside a food-contact pack."
      ]
    },
    {
      title: "Accountable owner",
      items: [
        "Record which business is the packaging manufacturer and who reviews the EU conformity file.",
        "Obtain supplier cooperation for material data and changes; a purchase-order clause does not settle the legal role."
      ]
    },
    {
      title: "Evidence fit",
      items: [
        "Check that laboratory samples and declarations describe the supplied material, coating, supplier and packaging version.",
        "Treat untraceable or out-of-scope results as a review gap, even when the report has a PASS heading."
      ]
    },
    {
      title: "Shipment decision",
      items: [
        "Record the affected cartons, hold instruction, correction owner and deadline.",
        "Release on an accepted evidence record; keep future redesign tasks separate from current shipment blockers."
      ]
    }
  ],
  sections: [
    {
      id: "why-current",
      title: "What applies now, and what comes later?",
      paragraphs: [
        "The general application date has passed, and the Commission’s FAQ publication page is dated August 3, 2026. This revision moves the June guide from preparation to a release-file check for orders being packed now. The Commission overview confirms that the rules cover packaging regardless of origin.",
        "Current obligations include conformity documentation and applicable substance restrictions. The harmonised material-composition label has a later trigger: August 12, 2028 or 24 months after the relevant implementing acts enter into force, whichever is later. Recyclability and recycled-content requirements have later, staged dates. Confirm the requirement for the specific packaging before ordering a redesign.",
        "Ask your EU reviewer for a short requirements register: packaging type, applicable obligation, start date, evidence reference and owner. Do not use a supplier’s general “PPWR ready” statement as that register. Existing destination-specific instructions still need to be checked."
      ],
      bullets: [
        "Now: resolve packaging identity, accountable roles and evidence for applicable requirements.",
        "Later: put future label, recyclability and recycled-content work into a dated plan without treating every target as a September shipment failure."
      ],
      citations: [
        {
          href: "https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en",
          label: "European Commission: PPWR scope and application"
        },
        {
          href: "https://environment.ec.europa.eu/publications/faq-packaging-and-packaging-waste-regulation-ppwr_en",
          label: "European Commission: August 2026 FAQ publication"
        },
        {
          href: "https://eur-lex.europa.eu/eli/reg/2025/40/oj/eng",
          label: "Regulation (EU) 2025/40: Articles 5–12, 15 and 39"
        }
      ]
    },
    {
      id: "responsible-owner",
      title: "Who owns the declaration when the factory packs your brand?",
      paragraphs: [
        "The packaging manufacturer is responsible for the conformity assessment and EU declaration of conformity. An importer must check that the required assessment and documentation exist. The factory, buyer, brand owner and importer are not interchangeable labels. Have a qualified reviewer establish the roles for your arrangement, including private-label production.",
        "For sourcing purposes, create a responsibility sheet with legal entity, packaging type, document owner and contact. Ask the factory which packaging suppliers can provide material details and who must approve a substitution. Keep EPR registration responsibilities on a separate line; an EPR number does not explain whether the particular packaging matches its conformity file.",
        "An inspection booking can use draft files to define what to check. A draft is not the completed declaration required for placing applicable packaging on the market. Treat “we will send the paperwork after departure” as an unresolved handoff, and agree the release condition while the goods remain accessible."
      ],
      bullets: [],
      citations: [
        {
          href: "https://eur-lex.europa.eu/eli/reg/2025/40/oj/eng",
          label: "Regulation (EU) 2025/40: manufacturer and importer duties"
        },
        {
          href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52026XC03084",
          label: "Commission guidance: manufacturer responsibility and declarations"
        }
      ]
    },
    {
      id: "substances",
      title: "What should you do with food-contact PFAS evidence?",
      paragraphs: [
        "Food-contact packaging is subject to the Article 5(5) PFAS limits from August 12, 2026. The Commission guidance says there is no stock-exhaustion transition for packaging produced earlier but first placed on the market after that date. Manufacturing date alone is therefore not an exemption. Have the responsible EU team assess market-placement facts.",
        "The guidance describes a testing approach while noting the absence of a harmonised EU method for PFAS in food-contact packaging. Ask a qualified laboratory or compliance reviewer to specify the suitable sample, methods and interpretation. A photograph, a generic “PFAS-free” statement or an unrelated food-contact report cannot establish that the supplied pack satisfies the relevant limits.",
        "Build a sample-to-shipment link: packaging supplier, material grade, coating or laminate, revision, sample identifier, report reference and production lots using that material. If a coating changes after testing, stop treating the old file as automatically representative. Record the changed quantity and obtain the reviewer’s decision before release."
      ],
      bullets: [
        "Identify each food-contact layer and any change in coating, ink, adhesive or laminate.",
        "Ask the reviewer whether the results and reporting limits answer the applicable restrictions for that material.",
        "Keep other food-contact requirements in the review; a PPWR check does not replace them."
      ],
      citations: [
        {
          href: "https://eur-lex.europa.eu/eli/reg/2025/40/oj/eng",
          label: "Regulation (EU) 2025/40: Article 5 substance restrictions"
        },
        {
          href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52026XC03084",
          label: "Commission guidance: PFAS testing and pre-August stock"
        }
      ]
    },
    {
      id: "packaging-scope",
      title: "How do you match the evidence file to the cartons?",
      paragraphs: [
        "Use a packaging register with one row per packaging type and revision, then map the rows to SKUs and carton lots. Include the retail pack, inner protection, grouped pack and transport pack where relevant. Record the basis for treating an item as packaging rather than assuming every insert or accessory has the same status.",
        "At inspection, compare accessible stock with the approved register. Capture the whole pack, material and manufacturer markings, claim text, revision identifiers and the carton reference. Weigh or measure against the agreed specification when included in the scope. Record sample coverage and inaccessible cartons so the buyer can see the limits.",
        "A low-cost substitution can break the file link even when the product itself is unchanged. Different coatings, films, adhesives or packaging suppliers may require fresh specialist review. For mixed stock, identify and segregate the affected quantity instead of accepting one clean sample as representative of the entire order."
      ],
      bullets: [
        "Keep one evidence index: SKU → packaging revision → material supplier → file references → sampled carton IDs.",
        "Log discrepancies with photos, affected quantity, owner and correction status.",
        "After repacking or relabelling, capture new evidence and retire superseded artwork from the release folder."
      ],
      citations: []
    },
    {
      id: "public-case",
      title: "Public case example: ECM BioFilms and unsupported packaging claims",
      paragraphs: [
        "What happened: on October 19, 2015, the U.S. FTC announced its opinion and final order finding that ECM BioFilms made deceptive, unsupported claims about the biodegradability of plastics treated with its additive. The FTC also found that the company enabled customers to pass misleading claims down the supply chain. The public case docket records a 2017 court decision denying ECM’s petition for review.",
        "Buyer lesson: do not copy a material supplier’s environmental claim straight onto retail packaging. Ask what exact material was tested, under which disposal conditions, and whether the proposed wording is supported. If the supporting file cannot be tied to your packaging revision, send it for specialist review before printing or releasing the affected packs.",
        "Limits of comparison: this is a historical U.S. advertising case, not a PPWR decision, PFAS finding or case about this buyer’s Chinese supplier. It remains relevant because a supplier statement can travel into finished-package artwork without its limitations. Huang Sourcing did not participate in the case, and the record does not establish that any current supplier or shipment is non-compliant."
      ],
      bullets: [],
      citations: [
        {
          href: "https://search.ftc.gov/news-events/news/press-releases/2015/10/ftc-concludes-ecm-biofilms-made-false-misleading-unsubstantiated-claims-about-biodegradability",
          label: "FTC: ECM BioFilms findings and final order announcement"
        },
        {
          href: "https://www.ftc.gov/legal-library/browse/cases-proceedings/122-3118-ecm-biofilms-inc-also-dba-enviroplastics-international-matter",
          label: "FTC case docket: ECM BioFilms and judicial review"
        }
      ]
    },
    {
      id: "importer-handoff",
      title: "What should the release folder contain?",
      paragraphs: [
        "Give the buyer a file index that can be opened without reconstructing a chat history. Include the order and packing list, packaging register, approved artwork, supporting declarations and reports, sampled-stock photos, discrepancy log and correction evidence. Show who reviewed each open point and the date of the decision.",
        "Use clear statuses: accepted for this revision, correction required, specialist review pending, or outside the agreed inspection scope. “Documents received” should not silently become “compliance approved.” If a specialist decision is pending, make the affected quantity and hold instruction visible to the supplier and pickup coordinator.",
        "Approve pickup only after the buyer accepts the shipment facts and the responsible EU team resolves applicable compliance questions. Keep the original files alongside corrections so a later query can follow the packaging version that actually shipped."
      ],
      bullets: [],
      citations: []
    }
  ],
  decisionRows: [
    {
      riskNode: "Files and sampled stock match",
      evidence: "The packaging revision, supplier data, accepted file references and carton map agree; the reviewer has resolved applicable requirements.",
      buyerDecision: "Buyer may release the identified lot within the documented inspection scope."
    },
    {
      riskNode: "Declaration owner or file is unclear",
      evidence: "The supplier offers a general certificate but no accountable owner or link to the packaging type.",
      buyerDecision: "Hold the handoff; obtain role confirmation and the applicable conformity record before release."
    },
    {
      riskNode: "Food-contact material changed",
      evidence: "The coating, laminate or supplier differs from the material covered by the available evidence.",
      buyerDecision: "Segregate the affected quantity and obtain specialist assessment of replacement evidence or testing."
    },
    {
      riskNode: "Claim or artwork is unsupported",
      evidence: "Printed biodegradable, recyclable or other claims exceed or cannot be tied to the approved evidence.",
      buyerDecision: "Hold affected packs for review; use approved corrected artwork and document any relabelling."
    },
    {
      riskNode: "Only a future requirement is unresolved",
      evidence: "The reviewer confirms the requirement is not yet applicable and current obligations are satisfied.",
      buyerDecision: "Record the future action separately; do not invent a present legal release condition."
    }
  ],
  evidenceBasis: [
    "Public-source research checked September 16, 2026: the PPWR regulation, Commission overview, June guidance and August FAQ publication record.",
    "The FTC ECM BioFilms announcement and case docket supply the visible historical public case. They are not evidence of a Huang Sourcing inspection or a PPWR violation.",
    "The packaging register, photo mapping and hold/release steps are Huang Sourcing editorial analysis for buyer-side evidence collection.",
    "No customer order, laboratory result or first-hand factory investigation is claimed in this guide. Actual inspection scope depends on the buyer’s references and supplier access."
  ],
  sourceNotes: [
    {
      href: "https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en",
      label: "European Commission: packaging waste and PPWR",
      note: "Official scope, application date and implementation resources."
    },
    {
      href: "https://eur-lex.europa.eu/eli/reg/2025/40/oj/eng",
      label: "EUR-Lex: Regulation (EU) 2025/40",
      note: "Binding text, including substances, staged dates, manufacturer/importer duties and conformity documentation."
    },
    {
      href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52026XC03084",
      label: "Commission Notice: PPWR implementation guidance",
      note: "Official interpretation of selected provisions, including responsibility, PFAS testing and stock timing. Guidance is not a substitute for the regulation."
    },
    {
      href: "https://environment.ec.europa.eu/publications/faq-packaging-and-packaging-waste-regulation-ppwr_en",
      label: "European Commission: August 2026 FAQ",
      note: "Official FAQ publication page dated August 3, 2026; a current reference for the responsible team’s packaging review."
    },
    {
      href: "https://search.ftc.gov/news-events/news/press-releases/2015/10/ftc-concludes-ecm-biofilms-made-false-misleading-unsubstantiated-claims-about-biodegradability",
      label: "FTC: ECM BioFilms decision announcement",
      note: "October 2015 findings about unsupported biodegradability claims and their transmission through customers."
    },
    {
      href: "https://www.ftc.gov/legal-library/browse/cases-proceedings/122-3118-ecm-biofilms-inc-also-dba-enviroplastics-international-matter",
      label: "FTC: ECM BioFilms case docket",
      note: "Public orders and subsequent judicial-review record, including the March 2017 court decision."
    }
  ],
  whatToSend: [
    "EU destination, shipment schedule, SKU list, order quantity, packing list and accessible carton or pallet locations.",
    "Packaging register by type and revision, material suppliers, specifications, dimensions and approved artwork.",
    "Named manufacturer, importer and conformity reviewer, plus the applicable requirements and file index supplied by that team.",
    "Matched declarations and laboratory reports, with sample identifiers and details of any material or coating change.",
    "Written inspection scope, sample coverage, release criteria and instructions for holds, corrections and re-checks."
  ],
  redFlags: [
    "The current coating, laminate, adhesive or packaging supplier differs from the referenced evidence.",
    "The declaration or report names a packaging type that cannot be identified in the sampled stock.",
    "Old and new artwork or unsupported environmental claims appear in the same shipment.",
    "A pre-August manufacture date is offered as the sole reason to dismiss a food-contact PFAS question.",
    "The EU-side reviewer is unnamed, the conformity file is promised only after departure, or draft paperwork is treated as final approval.",
    "The supplier reworks stock after inspection without a revised carton map and correction evidence."
  ],
  scopeLimits: [
    "Huang Sourcing can compare visible packaging, label, carton, supplier, and document evidence against buyer-provided references in China",
    "Huang Sourcing does not certify PPWR compliance, register producers for EPR, prepare EU declarations, file marketplace data, classify packaging, authenticate lab reports, or provide legal advice",
    "A China-side evidence check cannot prove recyclability, recycled content, PFAS status, heavy-metal compliance, compostability, packaging minimisation compliance, customs acceptance, or marketplace approval",
    "The EU importer, producer, marketplace seller, lab, packaging consultant, compliance adviser, or counsel remains responsible for PPWR decisions",
    "Factory access, sealed cartons, missing files, late artwork changes, unapproved material substitutions, or supplier obstruction can limit report confidence",
    "PPWR implementing measures, guidance, national practices, and marketplace requirements can change, so time-sensitive instructions should be reconfirmed before shipment release"
  ],
  relatedLinks: [
    {
      href: "/qc-inspection-china",
      label: "China quality control inspection",
      note: "Arrange an agreed packaging and shipment evidence check while the order remains accessible."
    },
    {
      href: "/qc-inspection-china-before-balance-payment",
      label: "Inspection before balance payment",
      note: "Connect the documented packaging gaps and corrections to the buyer’s payment decision."
    },
    {
      href: "/eu-gpsr-label-check-china-sourcing-2026",
      label: "EU GPSR label check guide",
      note: "Use this when product safety labels, responsible-person details, warnings, and listing evidence also need checking."
    },
    {
      href: "/packaging-label-check-before-payment",
      label: "Packaging and label checks before payment",
      note: "Use this when packaging, labels, inserts, and carton marks affect a final payment decision."
    },
    {
      href: "/what-to-send-before-china-inspection",
      label: "What to send before China inspection",
      note: "Prepare SKU lists, artwork, packaging references, carton records, and decision rules before inspection."
    },
    {
      href: "/buyer-side-inspection-report",
      label: "Buyer-side inspection report guide",
      note: "Use this when the buyer needs photo-backed evidence for a payment, pickup, or correction decision."
    },
    {
      href: "/quality-control-china-manufacturing-plan",
      label: "Quality control China manufacturing plan",
      note: "Build packaging evidence checks into the manufacturing plan instead of waiting until pickup."
    }
  ],
  faqs: [
    {
      question: "Does each shipment need a completely new declaration?",
      answer: "Do not assume either that every carton needs a separate declaration or that one old file covers everything. Have the responsible team define the packaging types and revisions covered, maintain the declaration as required, and link that coverage to the shipment. A material or design change needs review."
    },
    {
      question: "Can a normal pre-shipment inspection prove PFAS compliance?",
      answer: "No. It can photograph the packaging, compare identifiers and collect supplied files. A qualified laboratory or compliance reviewer must assess chemical evidence and its relevance to the material actually used."
    },
    {
      question: "Should the factory add a new PPWR sorting label immediately?",
      answer: "First ask the EU reviewer which label rule and date apply. The new harmonised material-composition label has a later phase-in trigger; current destination-specific instructions and approved artwork still need checking. Do not invent a new label based only on the general August 2026 start date."
    }
  ],
  author: "editorial-team" as const,
  modifiedDate: "September 16, 2026",
  modifiedDateIso: "2026-09-16T19:27:59.551Z"
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
      modifiedTime: article.modifiedDateIso,
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
  ]
}
