import type { Metadata } from 'next'

import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'

export const euCyberResilienceActChinaArticle = {
  author: 'editorial-team' as const,
  href: "/eu-cyber-resilience-act-china-sourcing-2026",
  title: "EU Cyber Resilience Act: China Sourcing Checks",
  metaTitle: "EU Cyber Resilience Act: China Sourcing Checks",
  metaDescription: "CRA reporting starts September 11, 2026. Check manufacturer ownership, firmware, supplier escalation and shipment evidence before releasing connected products.",
  publishedDate: "July 8, 2026",
  publishedDateIso: "2026-07-08T09:00:00-04:00",
  modifiedDate: "September 11, 2026",
  modifiedDateIso: "2026-09-11T19:26:51+00:00",
  h1: "EU Cyber Resilience Act: China Sourcing Checks",
  eyebrow: "EU connected products · reporting and shipment evidence",
  image: {
    alt: "Original diagram linking the shipment lot, responsible manufacturer and CRA reporting handoff; not documentary evidence of the TRENDnet case",
    height: 900,
    width: 1600,
    src: "/images/cra-reporting-handoff.webp"
  },
  imageVariants: [
    {
      height: 900,
      width: 1600,
      src: "/images/cra-reporting-handoff.webp"
    },
    {
      height: 1200,
      width: 1600,
      src: "/images/cra-reporting-handoff-4x3.webp"
    },
    {
      height: 1200,
      width: 1200,
      src: "/images/cra-reporting-handoff-1x1.webp"
    }
  ],
  intro: "From September 11, 2026, the EU Cyber Resilience Act requires manufacturers to report actively exploited vulnerabilities and severe incidents affecting in-scope products with digital elements. Its main product requirements apply from December 11, 2027. For buyers sourcing connected devices from China, the immediate decision is whether the exact shipment can be traced to a responsible manufacturer and a working supplier escalation route.",
  answerSummary: "Before balance payment or pickup, match the model, hardware revision, firmware, app or cloud dependency and shipment lot to the approved product file. Name the manufacturer and the people who can assess security reports and obtain supplier fixes. Hold unexplained version substitutions or missing escalation ownership for review. A China-side inspection can record this evidence; it cannot establish cybersecurity compliance or decide whether an incident must be reported.",
  primaryCta: {
    label: "Check Connected Product Evidence"
  },
  secondaryCta: {
    href: "#cra-checklist",
    label: "See Release Checklist"
  },
  whatsappMessage: "Hi Agent Huang,\n\nI need a China-side connected-product evidence check.\n\nProduct / SKU:\nHardware / firmware / app version:\nSupplier and factory location:\nEU destination and manufacturer / brand owner:\nApproved label and product files:\nOrder quantity and pickup deadline:\nKnown version or document gaps:\n",
  tableOfContents: [
    {
      href: "#quick-answer",
      label: "Quick answer"
    },
    {
      href: "#cra-checklist",
      label: "Release checklist"
    },
    {
      href: "#why-current",
      label: "2026 versus 2027"
    },
    {
      href: "#reporting-owner",
      label: "Reporting ownership"
    },
    {
      href: "#reporting-clock",
      label: "Reporting deadlines"
    },
    {
      href: "#platform-handoff",
      label: "Platform preparation"
    },
    {
      href: "#product-identity",
      label: "Product and lot identity"
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
    }
  ],
  quickChecks: [
    "Record EU destination, connected functions and a qualified scope decision for each product family.",
    "Identify the legal manufacturer, brand owner, importer and technical supplier; do not assume the factory is the manufacturer for CRA purposes.",
    "Match the approved hardware, firmware, app and cloud dependencies to sampled production units and carton lots.",
    "Name the manufacturer’s security decision-maker, reporting contact, backup and supplier engineering escalation contact.",
    "Keep awareness timestamps, affected versions and correction records available to the responsible security team.",
    "Separate the reporting duty applicable in September 2026 from the main CRA product requirements due in December 2027.",
    "Escalate known security concerns immediately; a payment or shipment hold does not pause a reporting deadline.",
    "Release only after the buyer and responsible specialists resolve identified gaps and accept the exact shipment evidence."
  ],
  checkGroups: [
    {
      title: "Who owns the product?",
      items: [
        "Brand and legal manufacturer identity, EU importer, technical supplier, firmware developer and cloud provider recorded in the order file.",
        "Named security escalation contacts and a backup route that works across supplier and buyer time zones."
      ]
    },
    {
      title: "Which version is shipping?",
      items: [
        "Model, hardware revision, firmware build, app version, relevant dependencies and lot references captured from accessible units.",
        "Approved reference file, sampled-unit identifiers and carton map make mixed or substituted versions visible."
      ]
    },
    {
      title: "What happens after an alert?",
      items: [
        "A documented path sends vulnerability information, affected versions and awareness times to the manufacturer’s security owner.",
        "The responsible team owns reportability decisions, reporting, patches and user communication; an inspector records evidence."
      ]
    },
    {
      title: "What blocks release?",
      items: [
        "Unexplained firmware changes, inaccessible version evidence, inconsistent labels or missing technical contacts trigger buyer review.",
        "Record the affected quantity, hold status, approved correction, specialist acceptance and re-check evidence."
      ]
    }
  ],
  sections: [
    {
      id: "why-current",
      title: "What applies now, and what waits until 2027?",
      paragraphs: [
        "The reporting start date has arrived. This update replaces the July planning guidance with a shipment handoff for the September 2026 reporting stage. The December 11, 2027 date remains the main application date for CRA product requirements; September 2026 is not a universal deadline for a CRA declaration of conformity or new CRA labelling.",
        "Article 69 also brings products placed on the market before December 11, 2027 within Article 14 reporting. A buyer should therefore include existing EU product lines in the ownership discussion, not only the next purchase order. Keep any CE obligations that already apply under other legislation in the current release file."
      ],
      bullets: [],
      citations: [
        {
          href: "https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act",
          label: "European Commission: CRA overview and timeline"
        },
        {
          href: "https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng",
          label: "EUR-Lex: Regulation (EU) 2024/2847"
        }
      ]
    },
    {
      id: "reporting-owner",
      title: "Who reports when the factory and the brand are different?",
      paragraphs: [
        "Identify the manufacturer before asking who will file a report. The Commission describes the manufacturer as the person or organisation placing the product on the market under its name or trademark. A private-label buyer may therefore carry manufacturer responsibilities even when another business designs or assembles the device.",
        "Ask the responsible team to confirm roles in writing. The sourcing file should show the company identity and the contacts who can reach the firmware developer, assess an alert, approve a fix and communicate with customers. A supplier promise to “handle compliance” is too vague to explain who acts when a security issue appears."
      ],
      bullets: [
        "Name the security owner and backup; record an escalation route for weekends and supplier holidays.",
        "Agree how the supplier will identify affected hardware and firmware versions and return correction evidence.",
        "Treat supplier response targets as commercial arrangements; they do not replace the manufacturer’s legal deadlines."
      ],
      citations: [
        {
          href: "https://digital-strategy.ec.europa.eu/en/policies/cra-summary",
          label: "European Commission: CRA legislative summary"
        }
      ]
    },
    {
      id: "reporting-clock",
      title: "What are the CRA reporting deadlines?",
      paragraphs: [
        "For an actively exploited vulnerability or a severe incident, the manufacturer must issue an early warning without undue delay and within 24 hours of awareness, followed by a notification within 72 hours. For an actively exploited vulnerability, the final report is due no later than 14 days after a corrective or mitigating measure becomes available. For a severe incident, it is due within one month after the 72-hour notification.",
        "These are event-reporting clocks, not shipment-document deadlines. Not every bug or failed inspection is reportable. The responsible security team must assess the event against the legal criteria. A sourcing team should preserve when information arrived, which versions may be affected and whom it notified; it should not wait for a complete inspection report before escalating a credible concern."
      ],
      bullets: [],
      citations: [
        {
          href: "https://digital-strategy.ec.europa.eu/en/policies/cra-reporting",
          label: "European Commission: CRA reporting obligations"
        },
        {
          href: "https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng",
          label: "EUR-Lex: Regulation (EU) 2024/2847"
        }
      ]
    },
    {
      id: "platform-handoff",
      title: "What should the manufacturer prepare for the reporting platform?",
      paragraphs: [
        "ENISA’s launch FAQ says Assigned Representatives use personal EU Login accounts with multi-factor authentication. Prepare the contact and access route, but do not require an advance SRP registration certificate from every supplier: ENISA advises initiating registration when a notification is needed. At launch, reporting uses the platform interface; there is no reporting API.",
        "The launch supports mandatory manufacturer reports. Voluntary reporting is deferred, and open-source software steward reporting starts December 11, 2027. ENISA also distinguishes awareness before September 11, 2026 from awareness after that date; an older vulnerability can still trigger reporting when active exploitation becomes known later.",
        "For the buyer, the useful deliverable is a named owner and a reliable technical handoff. Do not collect personal login credentials or file dummy incidents to test a supplier. Let the responsible manufacturer follow ENISA’s current registration and notification instructions."
      ],
      bullets: [],
      citations: [
        {
          href: "https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/frequently-asked-questions",
          label: "ENISA: Single Reporting Platform FAQ"
        }
      ]
    },
    {
      id: "product-identity",
      title: "How do you connect firmware evidence to the cartons?",
      paragraphs: [
        "Use one version register for the approved reference and the shipment. Record SKU, hardware revision, firmware build, app version, relevant remote service and the date of observation. Capture version screens only through access the supplier and buyer authorise. Link the photographs and observations to sampled serial numbers or lot identifiers.",
        "An unchanged enclosure or barcode does not explain a firmware substitution. If the factory updates units after inspection, ask which quantities changed and obtain a new version list. Where a version cannot be read, record that limit. The buyer should decide with its technical owner whether further access, engineering review or re-inspection is needed before release."
      ],
      bullets: [
        "Sample across identified lots and record coverage; do not imply every device was checked.",
        "Compare labels, manuals, pairing instructions and QR destinations with the approved product file.",
        "Segregate unexplained variants and document any approved correction before revising the release decision."
      ],
      citations: []
    },
    {
      id: "ce-technical-file",
      title: "What belongs in the 2027 product-readiness file?",
      paragraphs: [
        "Plan separately for the main CRA requirements: cybersecurity risk assessment, technical documentation, conformity assessment, an EU declaration of conformity, CE marking and support information. A qualified owner should confirm product scope, any important or critical category, applicable exclusions and the conformity route. The Commission’s summary explains these product obligations.",
        "For sourcing, keep a file index and revision history so that future technical documents describe the device actually ordered. Existing radio, electrical-safety, battery or other product rules may already require evidence. A CE logo or generic laboratory report cannot by itself answer whether the software, support process or CRA conformity plan is adequate."
      ],
      bullets: [],
      citations: [
        {
          href: "https://digital-strategy.ec.europa.eu/en/policies/cra-summary",
          label: "European Commission: CRA legislative summary"
        },
        {
          href: "https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act",
          label: "European Commission: CRA overview and timeline"
        }
      ]
    },
    {
      id: "public-case",
      title: "Public case example: TRENDnet connected cameras",
      paragraphs: [
        "What happened: in February 2014, the U.S. Federal Trade Commission approved a final order settling charges against TRENDnet. The FTC alleged that cameras marketed as secure contained software flaws that exposed private video feeds. The settlement required a security programme, independent assessments and customer notification about corrective software updates.",
        "Public evidence: the FTC announcement and case docket contain the complaint and order. Buyer lesson: a functioning camera and a matching retail box cannot establish secure software or a workable customer-update process. The shipment record needs a usable link between the device version and the people responsible for security and fixes.",
        "Limits: this older U.S. settlement is not a CRA enforcement decision, a finding about Chinese factories, or evidence that a current supplier has the same fault. It remains relevant because version identification and update communication are still practical sourcing handoff problems. Huang Sourcing did not participate in this case."
      ],
      bullets: [],
      citations: [
        {
          href: "https://search.ftc.gov/news-events/news/press-releases/2014/02/ftc-approves-final-order-settling-charges-against-trendnet-inc",
          label: "FTC: final TRENDnet settlement order announcement"
        },
        {
          href: "https://search.ftc.gov/legal-library/browse/cases-proceedings/122-3090-trendnet-inc-matter",
          label: "FTC: TRENDnet case docket and order"
        }
      ]
    }
  ],
  decisionRows: [
    {
      riskNode: "Version and ownership evidence agree",
      evidence: "Sampled units match the approved version file; the manufacturer and technical escalation contacts are named; responsible specialists accept the handoff.",
      buyerDecision: "Approve the documented sourcing release, subject to the buyer’s other product and destination checks."
    },
    {
      riskNode: "Firmware differs or cannot be identified",
      evidence: "Mixed builds, unexplained substitutions or inaccessible version information prevent a reliable lot match.",
      buyerDecision: "Hold affected quantities; request engineering review, an updated lot map and proportionate re-checks."
    },
    {
      riskNode: "No manufacturer or reporting owner is clear",
      evidence: "Brand, factory and importer redirect responsibility without an agreed legal role and technical contact.",
      buyerDecision: "Pause release while the responsible parties resolve ownership. Supplier labels alone do not settle legal status."
    },
    {
      riskNode: "A security concern is already known",
      evidence: "The order team receives a credible alert or version-specific security concern.",
      buyerDecision: "Escalate immediately to the manufacturer’s security team; preserve evidence and let qualified owners decide reporting and corrective action."
    },
    {
      riskNode: "Only the future CRA conformity file is pending",
      evidence: "A CRA-specific 2027 document is unavailable, while current reporting and other applicable requirements have been assessed.",
      buyerDecision: "Obtain a dated readiness plan; do not describe September 2026 as a blanket CRA CE-document deadline."
    }
  ],
  evidenceBasis: [
    "Public-source research checked September 11, 2026: European Commission guidance, ENISA platform FAQ, the CRA legal text and FTC records.",
    "The release checklist and decision matrix are Huang Sourcing editorial analysis applying those records to product identity and supplier handoffs.",
    "No private analytics, customer case files, first-hand inspection findings or supplier security assessments were used to write this update.",
    "A future order check needs buyer-provided references and explicitly recorded physical sampling; the examples here do not document an actual shipment."
  ],
  sourceNotes: [
    {
      href: "https://digital-strategy.ec.europa.eu/en/policies/cra-reporting",
      label: "European Commission: CRA reporting obligations",
      note: "Official start date, reportable events, notification windows and reporting channel."
    },
    {
      href: "https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/frequently-asked-questions",
      label: "ENISA: Single Reporting Platform FAQ",
      note: "Launch guidance checked September 11, 2026: assigned representatives, EU Login, legacy products and initial platform capabilities."
    },
    {
      href: "https://digital-strategy.ec.europa.eu/en/policies/cra-summary",
      label: "European Commission: CRA legislative summary",
      note: "Product scope, manufacturer identity, economic operators and the main product-conformity requirements."
    },
    {
      href: "https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng",
      label: "EUR-Lex: Regulation (EU) 2024/2847",
      note: "Binding text, including Article 14 reporting, Article 69 transitional provisions and Article 71 application dates."
    },
    {
      href: "https://search.ftc.gov/news-events/news/press-releases/2014/02/ftc-approves-final-order-settling-charges-against-trendnet-inc",
      label: "FTC: final TRENDnet settlement order announcement",
      note: "February 7, 2014 public record of allegations, security-program requirements and customer software-update notification."
    },
    {
      href: "https://search.ftc.gov/legal-library/browse/cases-proceedings/122-3090-trendnet-inc-matter",
      label: "FTC: TRENDnet case docket and order",
      note: "Primary case file containing the complaint and decision and order; this was a U.S. FTC matter, not CRA enforcement."
    },
    {
      href: "https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act",
      label: "European Commission: CRA overview and timeline",
      note: "September 11, 2026 reporting and December 11, 2027 main application dates."
    }
  ],
  whatToSend: [
    "Product list, EU destinations, intended functions, brand, manufacturer, importer and qualified scope notes.",
    "Approved hardware and firmware register, app and relevant cloud dependencies, labels, manuals and product-file revision dates.",
    "Supplier and technical-provider contacts, manufacturer security owner, backup and agreed escalation route.",
    "Order quantity, production lots, serial ranges where available, carton map and payment or pickup deadline.",
    "Known changes or alerts, affected versions, approved corrections and specialist release instructions; exclude passwords and unnecessary personal information."
  ],
  redFlags: [
    "The supplier changes firmware or app pairing after the approved sample without a revision record.",
    "The brand owner, factory and importer cannot agree who is the manufacturer or who receives vulnerability reports.",
    "The same SKU contains different hardware or firmware and cartons do not identify the variants.",
    "Generic CE or test documents are presented as proof of software security or reporting readiness.",
    "A supplier asks the inspection team to defer a known security concern until the payment discussion is finished."
  ],
  scopeLimits: [
    "Huang Sourcing can compare accessible device, version-screen, label, packaging, carton and supplier-document evidence against buyer-approved references in China.",
    "Cybersecurity testing, CRA legal scope, economic-operator classification, conformity assessment and reportability decisions require the responsible operators and qualified specialists.",
    "Sampling, inaccessible firmware, locked apps, unavailable technical files and supplier refusals must be recorded as evidence limits.",
    "A matched shipment file does not prove the absence of vulnerabilities, guarantee compliance or remove manufacturer reporting obligations.",
    "Platform procedures and product guidance can change. The responsible reporting team should consult the current official instructions when an event occurs."
  ],
  relatedLinks: [
    {
      href: "/china-pre-shipment-inspection",
      label: "Pre-shipment inspection in China",
      note: "Plan the physical and documentary checks before cartons leave the supplier."
    },
    {
      href: "/before-balance-payment-qc-china",
      label: "Before balance payment checklist",
      note: "Agree which evidence gaps block release and who can approve corrections."
    },
    {
      href: "/packaging-label-check-before-payment",
      label: "Packaging and label checks before payment",
      note: "Connect product identifiers, manuals and cartons to the approved file."
    },
    {
      href: "/buyer-side-inspection-report",
      label: "Buyer-side inspection report guide",
      note: "Record sampling, evidence limits and decisions clearly."
    },
    {
      href: "/china-sourcing-risk-guides",
      label: "China sourcing risk guides",
      note: "Find related supplier, inspection and shipment decisions."
    },
    {
      href: "/free-china-sourcing-risk-check",
      label: "Free China sourcing risk check",
      note: "Send the order stage, product details and unresolved evidence gaps."
    }
  ],
  faqs: [
    {
      question: "Does an ordinary QC inspection prove CRA compliance?",
      answer: "No. A QC inspection can record accessible product identity, versions, labels and documents. Cybersecurity engineering, conformity and reporting decisions sit with responsible operators and qualified specialists."
    },
    {
      question: "Should a buyer demand a CRA certificate for every September 2026 shipment?",
      answer: "Do not turn the September reporting date into a blanket CRA certificate requirement. Establish current reporting ownership and applicable product-rule evidence, then agree a separate plan for the main CRA requirements applying in December 2027."
    },
    {
      question: "What if the factory patches devices after inspection?",
      answer: "Ask for the affected quantity, old and new versions, correction approval and updated lot map. Have the technical owner assess the change and define the additional checks needed before releasing those units."
    }
  ]
}


export function makeEuCyberResilienceActChinaArticleMetadata(): Metadata {
  const article = euCyberResilienceActChinaArticle
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

export function makeEuCyberResilienceActChinaArticleJsonLd() {
  return [
    makeArticleJsonLd(euCyberResilienceActChinaArticle),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Connected-product shipment release checklist',
      itemListElement: euCyberResilienceActChinaArticle.quickChecks.map((name, index) => ({
        '@type': 'ListItem', position: index + 1, name,
      })),
    },
  ]
}
