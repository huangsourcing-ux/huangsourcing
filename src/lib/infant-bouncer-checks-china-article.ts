import type { Metadata } from 'next'
import { getArticleOpenGraphImages, makeArticleJsonLd } from '@/lib/article-seo'

export const cpscFlybossWarning = "https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-Flyboss-Infant-Bouncers-Immediately-Due-to-Risk-of-Collapse-and-Impact-Injury-to-Infants"
export const cpscBouncerGuidance = "https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Infant-Bouncer-Seats"
export const cpscChildrensProductCertificate = "https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Childrens-Product-Certificate"
export const cpscInfantSleepGuidance = "https://www.cpsc.gov/FAQ/Infant-Sleep-Products"
export const news12FlybossCoverage = "https://newjersey.news12.com/federal-safety-officials-warn-consumers-to-stop-using-flyboss-infant-bouncers"

export const infantBouncerChecksChinaArticle = {
  author: "editorial-team" as const,
  href: "/infant-bouncer-checks-china",
  title: "Infant Bouncer Checks Before Shipping from China",
  h1: "Infant Bouncer Checks Before Shipping from China",
  metaTitle: "Infant Bouncer Checks Before China Shipment",
  metaDescription: "Before releasing China-made infant bouncers, match folding locks, frame and seat versions, qualified test evidence, labels, production lots, and cartons.",
  publishedDate: "October 1, 2026",
  publishedDateIso: "2026-10-01T03:32:11+08:00",
  eyebrow: "Folding locks · configuration evidence · lot release",
  image: {
    src: "/images/infant-bouncer-checks-china.webp",
    width: 1600,
    height: 900,
    alt: "Original schematic of an unbranded infant bouncer showing an adjustable frame lock, approved configuration record, and lot-to-carton checks; not a recalled product or test result"
  },
  imageVariants: [
    {
      src: "/images/infant-bouncer-checks-china.webp",
      width: 1600,
      height: 900
    },
    {
      src: "/images/infant-bouncer-checks-china-4x3.webp",
      width: 1200,
      height: 900
    },
    {
      src: "/images/infant-bouncer-checks-china-1x1.webp",
      width: 1000,
      height: 1000
    }
  ],
  intro: "Before paying the balance or authorizing pickup for China-made infant bouncers, match the finished frame, folding and height-adjustment locks, seat attachment, and restraint version to the approved configuration and qualified evidence. Hold named lots if a lock fails to engage, a safety-related part changed without review, or reports cannot be connected to the goods.",
  answer: "Use three release gates: confirm each intended mode and the applicable evidence with the importer and qualified laboratory; compare sampled finished units with the approved frame, latch, seat, restraints, and instructions; then tie findings and corrective actions to specific lots and cartons. A brief factory demonstration is not a durability test, and a passing sampled inspection is not a safety certification.",
  whatsappMessage: "Hi Agent Huang,\n\nI need a China-side infant bouncer evidence and pre-shipment check.\n\nDestination, importer, exact models/SKUs and all intended use modes:\nApproved sample, frame/latch/seat/restraint version and change log:\nComplete test reports, tested-sample identity, laboratory scope and CPC:\nLabels, warnings, instructions, registration materials and listing claims:\nFactory, dates, lots, quantities and carton map:\nKnown issues, balance-payment date and pickup deadline:\n",
  checklist: [
    {
      title: "Freeze every configuration",
      detail: "List model, intended modes, height settings, frame and lock revision, seat and restraint version, factory, lot, quantity, and carton range. Keep a controlled reference sample."
    },
    {
      title: "Connect qualified evidence",
      detail: "Ask the importer and qualified lab to reconcile report photos, model scope, tested configuration, applicable requirements, changes, and the CPC. A similar-looking model is not a matching record."
    },
    {
      title: "Observe sampled assembly and locks",
      detail: "Against the approved instructions and safe agreed inspection plan, record setup, lock engagement at every claimed setting, seat attachment, restraints, accessible gaps, loose hardware, markings, and pack contents. Stop on abnormal behavior."
    },
    {
      title: "Contain and repeat-check",
      detail: "Segregate affected lots and mixed cartons. Obtain documented qualified disposition, any necessary retesting, controlled corrections, and repeat inspection before releasing identified stock."
    }
  ],
  decisionRows: [
    {
      riskNode: "Lock fails to engage or frame moves unexpectedly",
      evidence: "Unit ID, setting, setup sequence, photos/video, approved instructions, latch/frame version, lot and carton range",
      buyerDecision: "Stop the check and hold affected stock. Escalate for qualified mechanical assessment; do not clear it with an improvised load test or one successful demonstration."
    },
    {
      riskNode: "Changed frame, lock, seat or mode; report mismatch",
      evidence: "Approved sample, bill of materials and revision history, report sample photos, intended-mode list, CPC and production identity",
      buyerDecision: "Hold the changed scope. Ask the responsible importer and lab to assess coverage and necessary testing before accepting substitutions or corrections."
    },
    {
      riskNode: "Evidence aligns and corrections are closed",
      evidence: "Qualified evidence, controlled version, sampled inspection record, corrected labels/instructions, lot-to-carton map and open conditions",
      buyerDecision: "Release only named lots/cartons after the responsible parties accept the evidence. Record sampling limits; do not extend the decision to unexamined versions."
    }
  ],
  relatedLinks: [
    {
      href: "/qc-inspection-china",
      label: "China QC inspection",
      note: "Compare accessible finished goods with the approved version."
    },
    {
      href: "/verify-china-lab-test-report",
      label: "Verify a China lab report",
      note: "Connect a complete report to the actual configuration."
    },
    {
      href: "/baby-swing-checks-china",
      label: "Baby swing checks",
      note: "Review the distinct swing and jumper evidence questions."
    },
    {
      href: "/packaging-label-check-before-payment",
      label: "Packaging and label checks",
      note: "Reconcile product identity, instructions and carton scope."
    },
    {
      href: "/china-sourcing-risk-guides",
      label: "China sourcing risk guides",
      note: "Browse payment, production and shipment decisions."
    },
    {
      href: "/free-china-sourcing-risk-check",
      label: "Free sourcing risk check",
      note: "Send the unresolved gap before goods leave the factory."
    }
  ],
  sources: [
    {
      href: "https://www.cpsc.gov/Warnings/2026/CPSC-Warns-Consumers-to-Stop-Using-Flyboss-Infant-Bouncers-Immediately-Due-to-Risk-of-Collapse-and-Impact-Injury-to-Infants",
      label: "CPSC — Flyboss bouncer warning 26-757",
      note: "September 10, 2026: China-made bouncer collapse hazard, reported incidents, product identity, and stop-use advice; a warning rather than a cooperative recall."
    },
    {
      href: "https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/Infant-Bouncer-Seats",
      label: "CPSC — infant bouncer seats business guidance",
      note: "Current bouncer scope, performance requirements, labeling, registration and certification overview."
    },
    {
      href: "https://www.cpsc.gov/Business--Manufacturing/Testing-Certification/Childrens-Product-Certificate",
      label: "CPSC — Children’s Product Certificate guidance",
      note: "Responsible certifier, test basis and certificate identification for covered children’s products."
    },
    {
      href: "https://www.cpsc.gov/FAQ/Infant-Sleep-Products",
      label: "CPSC — infant sleep products FAQ",
      note: "Mode and marketing distinctions, including supervised-sleep claims."
    },
    {
      href: "https://newjersey.news12.com/federal-safety-officials-warn-consumers-to-stop-using-flyboss-infant-bouncers",
      label: "News 12 — Flyboss warning coverage",
      note: "September 10 reporting used as an independent coverage signal; official CPSC records control the case facts."
    }
  ]
}

export function makeInfantBouncerChecksChinaArticleMetadata(): Metadata {
  const article = infantBouncerChecksChinaArticle
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: article.href },
    openGraph: { title: article.metaTitle, description: article.metaDescription, url: article.href, siteName: 'Huang Sourcing', type: 'article', publishedTime: article.publishedDateIso, images: getArticleOpenGraphImages(article) },
    twitter: { card: 'summary_large_image', title: article.metaTitle, description: article.metaDescription, images: [article.image.src] },
  }
}

export function makeInfantBouncerChecksChinaArticleJsonLd() {
  return [makeArticleJsonLd(infantBouncerChecksChinaArticle), {
    '@context': 'https://schema.org', '@type': 'ItemList', name: 'Infant bouncer shipment release checklist',
    itemListElement: infantBouncerChecksChinaArticle.checklist.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: `${item.title}: ${item.detail}` })),
  }]
}
