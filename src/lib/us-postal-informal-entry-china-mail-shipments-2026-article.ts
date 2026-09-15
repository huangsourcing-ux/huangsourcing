import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'

export const usPostalInformalEntryChinaMailShipmentsArticle = {
  author: "editorial-team" as const,
  href: "/us-postal-informal-entry-china-mail-shipments-2026",
  title: "China Mail to the U.S.: Entry Type 13 and CPSC Checks",
  h1: "China Mail to the U.S.: Entry Type 13 and CPSC Checks",
  metaTitle: "China Mail: Entry Type 13 & CPSC Checks",
  metaDescription: "Prepare China mail parcels for Entry Type 13 and CPSC eFiling: September and October 2026 dates, certificate-to-parcel checks, broker handoff and dispatch holds.",
  publishedDate: "July 6, 2026",
  publishedDateIso: "2026-07-06T15:00:00-04:00",
  modifiedDate: "September 16, 2026",
  modifiedDateIso: "2026-09-16T03:36:17+08:00",
  eyebrow: "U.S. postal entry • Certificate evidence • Dispatch control",
  image: {
    alt: "Original diagram linking a China mail parcel, product evidence and the U.S. filing owner to a dispatch decision; not a customs clearance record",
    height: 900,
    src: "/images/china-mail-entry-type-13.webp",
    width: 1600
  },
  imageVariants: [
    {
      height: 900,
      src: "/images/china-mail-entry-type-13.webp",
      width: 1600
    },
    {
      height: 1200,
      src: "/images/china-mail-entry-type-13-4x3.webp",
      width: 1600
    },
    {
      height: 1200,
      src: "/images/china-mail-entry-type-13-1x1.webp",
      width: 1200
    }
  ],
  intro: "Before releasing a U.S.-bound mail parcel from China, connect the actual goods and foreign-post tracking number to a named entry owner and the required product evidence. Hold dispatch when the parcel, invoice, certificate file or filing instructions disagree.",
  answerSummary: "Two dates need separate planning: CBP schedules its voluntary Entry Type 13 test for September 22, 2026; CPSC says required certificates for mail shipments must be eFiled from October 22, 2026. Confirm the applicable entry path with the broker. Neither a printed postal label nor an electronic filing establishes product compliance.",
  primaryCta: {
    label: "Check Mail Shipment Evidence"
  },
  secondaryCta: {
    href: "#postal-entry-checklist",
    label: "See Dispatch Checklist"
  },
  whatsappMessage: "Hi Agent Huang,\n\nI need a China-side U.S. mail shipment evidence check.\n\nProducts and versions:\nSupplier or warehouse:\nPostal route and tracking file:\nImporter and broker:\nCertificate evidence and open findings:\nPacking status and dispatch deadline:\n",
  quickChecks: [
    "Confirm the actual postal route, planned arrival window, importer, broker and person authorized to release the parcels.",
    "Use one parcel register linking tracking number, order line, SKU/version, quantity, invoice line and product photographs.",
    "Ask the importer to identify required certificates and approve their connection to the actual finished products.",
    "Confirm the filing method, data owner and correction channel with the broker before goods leave the warehouse.",
    "Check packed goods and labels against the approved file; record substitutions, mixed versions and unresolved findings.",
    "Release only the identified cleared parcels. Keep held tracking numbers and any replacement labels under control."
  ],
  checkGroups: [
    {
      title: "Route and dates",
      items: [
        "Record the postal operator and consolidator, expected arrival, entry path and contingency for delay.",
        "Separate the September test start from the October mail certificate date; obtain current broker instructions for the shipment."
      ]
    },
    {
      title: "One parcel register",
      items: [
        "Link tracking number to SKU, product version, quantity, invoice line and an identified set of images.",
        "When a label is replaced, retire the old tracking reference in every handoff file and obtain acknowledgment."
      ]
    },
    {
      title: "Product evidence",
      items: [
        "Match certificate and report identifiers to the finished product, including relevant batteries, age grading, labels and instructions.",
        "Log component or factory changes for qualified review; do not reuse a similar-product file without a coverage decision."
      ]
    },
    {
      title: "Release and exceptions",
      items: [
        "Give each unresolved mismatch an owner, deadline, affected parcel list and required correction evidence.",
        "Record technical review separately from the buyer’s commercial dispatch decision."
      ]
    }
  ],
  sections: [
    {
      id: "why-current",
      title: "What changed since the July postal guidance?",
      paragraphs: [
        "CPSC announced its mail-specific eFiling guidance on September 1. Its document library also lists a refreshed HTS guidance document dated September 14. Expeditors reported on Entry Type 13 implementation support on September 11. These are current operational signals, not evidence of search volume or a rise in violations.",
        "The July edition of this guide focused on the postal rule’s initial effective date. This update adds the mail certificate deadline, a parcel-to-certificate handoff and release controls for changed labels and mixed product versions."
      ],
      citations: [
        {
          href: "https://content.govdelivery.com/accounts/USCPSC/bulletins/427e935",
          label: "CPSC: September 1 mail guidance announcement"
        },
        {
          href: "https://www.cpsc.gov/eFiling-Document-Library",
          label: "CPSC: current eFiling document library"
        },
        {
          href: "https://info.expeditors.com/newsflash/cbp-reschedules-entry-type-13-test-support-calls",
          label: "Expeditors: Entry Type 13 support-call update"
        }
      ],
      bullets: []
    },
    {
      id: "key-dates",
      title: "Which dates should a China mail seller use?",
      paragraphs: [
        "CBP’s postal interim final rule generally took effect July 24, 2026, with its de minimis suspension provision effective June 24. The rule gives October 22 as the compliance date for two specified formal-entry provisions, 19 CFR 145.12(a)(2)(v) and (vi). The former July comment deadline has passed.",
        "CBP’s published schedule sets September 22 for the Entry Type 13 test in ACE production. CPSC separately identifies October 22 for eFiling required certificates for mail shipments, using a Full or Reference Message Set.",
        "Plan against the applicable entry timing, not just the day a warehouse prints a label. If transit may cross the October date, ask the broker how the shipment will be handled and have the required evidence ready before dispatch."
      ],
      citations: [
        {
          href: "https://www.govinfo.gov/content/pkg/FR-2026-06-24/pdf/2026-12669.pdf",
          label: "Federal Register: postal interim final rule"
        },
        {
          href: "https://content.govdelivery.com/accounts/USDHSCBP/bulletins/4214706",
          label: "CBP CSMS 69289734: ACE deployment schedule"
        },
        {
          href: "https://www.cpsc.gov/s3fs-public/CPSC-Guidance-for-Mail-Shipments-6B-Cleared.pdf?VersionId=gj5nC3wM7dO6zEcXZJbQr2sYKCBX4zPi",
          label: "CPSC: eFiling guidance for mail shipments"
        }
      ],
      bullets: []
    },
    {
      id: "entry-type-13",
      title: "Is Entry Type 13 available for every parcel?",
      paragraphs: [
        "No. CBP describes a voluntary test for qualifying international mail valued at $2,500 or less. It includes a temporary path for certain PGA-data and additional-duty shipments; AD/CVD and quota shipments remain excluded. Participation does not remove other product or customs obligations.",
        "Do not read the CPSC mail announcement as permission to put every shipment into Entry Type 13. Have the broker confirm eligibility, who may make entry, the required bond and any formal-entry alternative. Keep the certificate requirement and entry-type selection as separate decisions."
      ],
      citations: [
        {
          href: "https://www.govinfo.gov/content/pkg/FR-2026-06-24/pdf/2026-12668.pdf",
          label: "CBP: Entry Type 13 test notice"
        },
        {
          href: "https://www.cpsc.gov/s3fs-public/CPSC-Guidance-for-Mail-Shipments-6B-Cleared.pdf?VersionId=gj5nC3wM7dO6zEcXZJbQr2sYKCBX4zPi",
          label: "CPSC: eFiling guidance for mail shipments"
        }
      ],
      bullets: []
    },
    {
      id: "entry-owner",
      title: "Who owns the entry and certificate handoff?",
      paragraphs: [
        "Name the responsible importer and broker before instructing the supplier to dispatch. Record who supplies product facts, who approves certificate coverage, who transmits the filing and who handles rejection or correction messages.",
        "CPSC assigns certificate responsibility to the importer under its applicable definition. CBP’s test notice separately sets out who has the right to make an Entry Type 13 filing. A consolidator’s promise to “handle customs” does not document these roles for the buyer.",
        "Use a brief handoff record with the responsible parties, agreed entry path, shipment reference, approved data version and open issues. Ask for acknowledgment that the broker has the required data; do not describe this acknowledgment as customs clearance."
      ],
      citations: [
        {
          href: "https://www.cpsc.gov/s3fs-public/CPSC-Guidance-for-Mail-Shipments-6B-Cleared.pdf?VersionId=gj5nC3wM7dO6zEcXZJbQr2sYKCBX4zPi",
          label: "CPSC: eFiling guidance for mail shipments"
        },
        {
          href: "https://www.govinfo.gov/content/pkg/FR-2026-06-24/pdf/2026-12668.pdf",
          label: "CBP: Entry Type 13 test notice"
        }
      ],
      bullets: []
    },
    {
      id: "data-elements",
      title: "How should the parcel file connect to the filing?",
      paragraphs: [
        "Build the file around a stable parcel reference. Beside it, record the foreign-post tracking number, SKU and version, quantity, invoice line, actual product description, origin evidence and the broker-approved classification and value instructions.",
        "Keep the importer’s Full Message Set data or Reference Message Set identifiers in the same controlled handoff. CPSC’s FAQ describes both methods. The product identifiers must resolve to the goods inside the parcel, not merely to a supplier’s catalogue image.",
        "At the warehouse, compare the approved register with sampled goods, product markings, retail packaging, warnings and shipping labels. Record what was accessible and sampled. Keep the final file, photographs and corrections together so the entry owner can see which version was approved."
      ],
      citations: [
        {
          href: "https://www.cpsc.gov/FAQ/eFiling-Frequently-Asked-Questions-FAQ",
          label: "CPSC: eFiling frequently asked questions"
        }
      ],
      bullets: []
    },
    {
      id: "regulated-goods",
      title: "Does an unflagged HTS code mean no certificate is needed?",
      paragraphs: [
        "No. CPSC’s September HTS guidance says its list does not cover every code where an electronic certificate may be required. Product-specific certification scope needs a separate decision; an absent flag is not evidence of an exemption.",
        "Ask the qualified compliance owner to review the actual product’s function, intended users, materials and features. A light-up cup, for example, needs a description that preserves its battery feature. A generic “plastic cup” description can hide information the reviewer needs.",
        "Record the guidance version checked and the reason for the scope decision. Do not alter descriptions, values, age labels or routing to avoid review. If supplier evidence changes, reopen the affected decision before release."
      ],
      citations: [
        {
          href: "https://www.cpsc.gov/s3fs-public/CPSC-Guidance-and-HTS-List-for-Filing-of-Electronic-Certificates-09142026.pdf?VersionId=2v0dyISej8FfxAR7nBIHYV52e4L.776H",
          label: "CPSC: September 2026 HTS and eFiling guidance"
        }
      ],
      bullets: []
    },
    {
      id: "label-changes",
      title: "What should stop dispatch after the parcel file is approved?",
      paragraphs: [
        "A changed tracking label, mixed product versions, a substituted component or a certificate reference that no longer resolves to the goods should trigger a hold on the affected scope. These are buyer control triggers, not automatic legal findings.",
        "For relabeling, preserve the old-to-new tracking map, photograph the replacement label and get the updated file acknowledged. For product changes, ask the importer and qualified technical reviewer what evidence must be replaced or supplemented.",
        "If cleared and held parcels share a sack, pallet or pickup instruction, separate them before handoff. Give the forwarder or postal consolidator an explicit list of parcels authorized to move."
      ],
      citations: [],
      bullets: []
    }
  ],
  decisionRows: [
    {
      riskNode: "No agreed entry owner or route",
      evidence: "Importer, broker, route, expected arrival and written entry instructions.",
      buyerDecision: "Hold dispatch until responsibility and the shipment path are confirmed."
    },
    {
      riskNode: "Certificate scope unresolved",
      evidence: "Complete product identity, required certificate data and qualified coverage decision.",
      buyerDecision: "Hold affected products; request the missing review or evidence."
    },
    {
      riskNode: "Tracking number changed",
      evidence: "Old-to-new tracking map, replacement-label photographs and updated broker file.",
      buyerDecision: "Correct the register and obtain acknowledgment before release."
    },
    {
      riskNode: "Mixed or substituted products",
      evidence: "Actual SKU/version list, change record, technical review and revised parcel allocation.",
      buyerDecision: "Segregate uncertain stock; do not release it under the old product file."
    },
    {
      riskNode: "Product file and parcel agree",
      evidence: "Closed findings, approved data version, sampled-goods record and named release scope.",
      buyerDecision: "Buyer authorizes identified parcels with remaining conditions recorded; customs decisions remain external."
    }
  ],
  publicCase: {
    title: "BUILT LUUM tumblers: product features matter in the parcel file",
    facts: "CPSC’s March 19, 2026 recall concerns China-made BUILT LUUM light-up tumblers. The tumblers could break and expose button-cell batteries. The notice identifies affected themes, item numbers and UPCs.",
    evidence: "The recall provides product descriptions, identifiers, the battery hazard and a refund remedy. It does not publish an entry filing or a postal shipment history.",
    lesson: "Preserve features such as an LED battery compartment in the product evidence reviewed before mailing. Match the precise item and version rather than relying on a generic description. The older case remains useful for the approaching mail-data handoff.",
    limits: "This is a product-identity example, not an eFiling enforcement case. The record does not show that these goods entered by mail, that certificate data were missing, or that eFiling would have prevented the recall. Huang Sourcing did not participate.",
    href: "https://www.cpsc.gov/Recalls/2026/Lifetime-Brands-Recalls-BUILT-LUUM-Light-Up-Tumblers-Due-to-Risk-of-Choking-and-Battery-Ingestion-Hazards",
    label: "CPSC: BUILT LUUM light-up tumbler recall"
  },
  evidenceBasis: [
    "Public sources checked September 16, 2026, Beijing time: CBP test and rule records, CPSC mail and September HTS guidance, and the cited recall.",
    "Current relevance also checked against independent September 11 Expeditors coverage; no private analytics or search-volume estimate is used.",
    "Original buyer-side analysis: parcel register, product-version matching, label-change control, responsible handoff and explicit dispatch holds.",
    "The July edition’s historical credit to Agent Huang is preserved. Huang Sourcing Editorial Team substantially revised this edition from public sources; no personal review or first-hand case involvement is claimed."
  ],
  sourceNotes: [
    {
      href: "https://www.cpsc.gov/s3fs-public/CPSC-Guidance-for-Mail-Shipments-6B-Cleared.pdf?VersionId=gj5nC3wM7dO6zEcXZJbQr2sYKCBX4zPi",
      label: "CPSC: eFiling guidance for mail shipments",
      note: "Mail-specific certificate transmission and importer responsibility; announced September 1, 2026."
    },
    {
      href: "https://content.govdelivery.com/accounts/USCPSC/bulletins/427e935",
      label: "CPSC: September 1 mail guidance announcement",
      note: "Announcement identifying October 22, 2026 for required mail certificates."
    },
    {
      href: "https://www.govinfo.gov/content/pkg/FR-2026-06-24/pdf/2026-12668.pdf",
      label: "CBP: Entry Type 13 test notice",
      note: "June 24, 2026 notice; participation, eligibility, bond, data fields and exclusions."
    },
    {
      href: "https://www.govinfo.gov/content/pkg/FR-2026-06-24/pdf/2026-12669.pdf",
      label: "Federal Register: postal interim final rule",
      note: "Official electronic edition, 91 FR 37801; effective dates and October compliance provisions."
    },
    {
      href: "https://content.govdelivery.com/accounts/USDHSCBP/bulletins/4214706",
      label: "CBP CSMS 69289734: ACE deployment schedule",
      note: "July 20 notice schedules Entry Type 13 production deployment for September 22, 2026."
    },
    {
      href: "https://www.cpsc.gov/s3fs-public/CPSC-Guidance-and-HTS-List-for-Filing-of-Electronic-Certificates-09142026.pdf?VersionId=2v0dyISej8FfxAR7nBIHYV52e4L.776H",
      label: "CPSC: September 2026 HTS and eFiling guidance",
      note: "Listed in the CPSC library on September 14; flagging guidance is not an exhaustive coverage list."
    },
    {
      href: "https://www.cpsc.gov/eFiling-Document-Library",
      label: "CPSC: current eFiling document library",
      note: "Current document versions, including mail guidance and the September HTS list."
    },
    {
      href: "https://www.cpsc.gov/Recalls/2026/Lifetime-Brands-Recalls-BUILT-LUUM-Light-Up-Tumblers-Due-to-Risk-of-Choking-and-Battery-Ingestion-Hazards",
      label: "CPSC: BUILT LUUM light-up tumbler recall",
      note: "March 19, 2026; product identifiers, China origin and accessible button-cell battery hazard."
    },
    {
      href: "https://info.expeditors.com/newsflash/cbp-reschedules-entry-type-13-test-support-calls",
      label: "Expeditors: Entry Type 13 support-call update",
      note: "September 11 industry coverage; independent operational attention, not an additional legal authority."
    },
    {
      href: "https://www.cpsc.gov/FAQ/eFiling-Frequently-Asked-Questions-FAQ",
      label: "CPSC: eFiling frequently asked questions",
      note: "Certificate scope and Full and Reference message-set context."
    }
  ],
  whatToSend: [
    "Product file: SKU, version, features, intended users, quantity, supplier, factory and approved references.",
    "Parcel file: postal operator, consolidator, tracking register, labels, invoice, packing details, origin support and photographs.",
    "Compliance file: complete test reports, certificate data or identifiers, importer-approved scope decisions and change history.",
    "Handoff file: broker instructions, expected arrival, data version, open issues, release owner and dispatch deadline."
  ],
  redFlags: [
    "A postal label is treated as proof that the entry and certificate files are complete.",
    "The packing file uses a different product version or tracking number from the broker file.",
    "The supplier omits a battery or other relevant feature from the description.",
    "An unflagged HTS code or low value is used as the only justification for having no certificate data.",
    "Cleared and held parcels are mixed under one collection instruction."
  ],
  scopeLimits: [
    "Huang Sourcing can compare accessible China-side goods, labels, packaging, tracking and documents against buyer-approved references.",
    "An inspection does not determine certificate sufficiency, testing coverage, HTS classification, legal origin, customs value, duty, bond, entry eligibility or admissibility.",
    "The importer, broker and qualified specialists retain their filing and compliance responsibilities. Huang Sourcing does not file Entry Type 13 or CPSC certificates.",
    "Sampled evidence and a completed handoff do not guarantee every unit, customs release, carrier acceptance or delivery timing. Reconfirm time-sensitive instructions before shipment."
  ],
  relatedLinks: [
    {
      href: "/qc-inspection-china",
      label: "China QC inspection service",
      note: "Scope a check of packed goods against the approved evidence."
    },
    {
      href: "/cpsc-efiling-china-imports-2026",
      label: "CPSC eFiling for China imports",
      note: "Read the broader certificate and broker-handoff guide."
    },
    {
      href: "/pre-shipment-before-pickup",
      label: "Inspection before forwarder pickup",
      note: "Connect inspection findings to the physical release."
    },
    {
      href: "/packaging-label-check-before-payment",
      label: "Packaging and label checks",
      note: "Resolve product and carton mismatches before payment."
    },
    {
      href: "/china-sourcing-risk-guides",
      label: "China sourcing risk guides",
      note: "Find related supplier and shipment decisions."
    },
    {
      href: "/free-china-sourcing-risk-check",
      label: "Free sourcing risk check",
      note: "Send the order stage and unresolved evidence for scope review."
    }
  ],
  faqs: [
    {
      question: "Does an October 22 mail deadline exempt ordinary freight until then?",
      answer: "No. The October date discussed here concerns CPSC’s mail-specific guidance. Confirm other modes against their own applicable requirements; do not apply a postal date to a courier or freight shipment."
    },
    {
      question: "Should I mail early to avoid preparing certificate data?",
      answer: "Do not base release on that assumption. Transit and entry timing can change, and applicable product obligations still need review. Have the broker confirm the timing and prepare the necessary evidence before dispatch."
    },
    {
      question: "Can a supplier report for a similar SKU support this parcel?",
      answer: "Similarity alone does not establish coverage. Send the actual product identity and any changes to the responsible importer and qualified reviewer, then record their decision before using the file."
    }
  ],
  tableOfContents: [
    {
      href: "#quick-answer",
      label: "Quick answer"
    },
    {
      href: "#postal-entry-checklist",
      label: "Dispatch checklist"
    },
    {
      href: "#key-dates",
      label: "September and October dates"
    },
    {
      href: "#entry-type-13",
      label: "Entry eligibility"
    },
    {
      href: "#entry-owner",
      label: "Responsible handoff"
    },
    {
      href: "#data-elements",
      label: "Parcel register"
    },
    {
      href: "#regulated-goods",
      label: "Certificate scope"
    },
    {
      href: "#label-changes",
      label: "Changes and holds"
    },
    {
      href: "#public-case",
      label: "Public case example"
    },
    {
      href: "#decision-table",
      label: "Release decisions"
    },
    {
      href: "#source-notes",
      label: "Sources"
    },
    {
      href: "#scope-limits",
      label: "Scope limits"
    }
  ]
}

export function makeUsPostalInformalEntryChinaMailShipmentsArticleMetadata(): Metadata {
  const article = usPostalInformalEntryChinaMailShipmentsArticle
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: article.href },
    openGraph: { title: article.metaTitle, description: article.metaDescription, url: article.href, siteName: 'Huang Sourcing', type: 'article', publishedTime: article.publishedDateIso, modifiedTime: article.modifiedDateIso, images: getArticleOpenGraphImages(article) },
    twitter: { card: 'summary_large_image', title: article.metaTitle, description: article.metaDescription, images: [article.image.src] },
  }
}

export function makeUsPostalInformalEntryChinaMailShipmentsArticleJsonLd() {
  return [makeArticleJsonLd(usPostalInformalEntryChinaMailShipmentsArticle), {
    '@context': 'https://schema.org', '@type': 'ItemList',
    name: 'China mail parcel dispatch checklist',
    itemListElement: usPostalInformalEntryChinaMailShipmentsArticle.quickChecks.map((name, index) => ({ '@type': 'ListItem', position: index + 1, name })),
  }]
}
