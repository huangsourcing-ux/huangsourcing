import type { SeoServiceSlug } from '@/lib/seo-service-pages'
import {
  alibabaSupplierVerificationHref,
  factoryVsTradingCompanyChinaHref,
  supplierDepositGuideHref,
} from '@/lib/site-links'

type ComparisonTable = {
  columns: [string, string, string]
  rows: {
    topic: string
    left: string
    right: string
  }[]
  title: string
}

type EnhancementCard = {
  body?: string
  items?: string[]
  title: string
}

type DownloadCard = {
  body: string
  ctaLabel: string
  fileType: string
  href: string
  title: string
}

type EnhancementLink = {
  href: string
  label: string
  note: string
}

export type SeoServiceEnhancement = {
  caseCards?: EnhancementCard[]
  checklistSections?: EnhancementCard[]
  comparison?: ComparisonTable
  download?: DownloadCard
  eyebrow: string
  intro: string
  links?: EnhancementLink[]
  scopeCards?: EnhancementCard[]
  title: string
}

export const seoServiceEnhancements: Partial<Record<SeoServiceSlug, SeoServiceEnhancement>> = {
  'supplier-verification-china': {
    eyebrow: 'Supplier verification depth',
    title: 'Know what this check can and cannot replace.',
    intro:
      'Supplier verification is an early buyer-side risk filter before deposit. It helps clarify visible supplier, quote, and payment risk, but it should not be confused with a formal factory audit or legal due diligence.',
    comparison: {
      title: 'Supplier verification vs factory audit',
      columns: ['Question', 'Supplier verification', 'Factory audit'],
      rows: [
        {
          topic: 'Best timing',
          left: 'Before deposit, supplier shortlist, or first PI review.',
          right: 'Before a larger long-term order, regulated program, or formal vendor approval.',
        },
        {
          topic: 'Main focus',
          left: 'Company consistency, factory/trader signals, quote terms, payment pressure, and practical next questions.',
          right: 'Onsite systems, production capacity, management process, equipment, workforce, and deeper compliance evidence.',
        },
        {
          topic: 'Buyer output',
          left: 'Clear risk notes and go, caution, or stop guidance before money moves.',
          right: 'Formal audit-style findings, photos, and deeper onsite observations when the scope supports it.',
        },
        {
          topic: 'Limit',
          left: 'Does not prove a supplier is risk-free or replace legal review.',
          right: 'Still does not guarantee future production quality, compliance, or dispute outcomes.',
        },
      ],
    },
    scopeCards: [
      {
        title: 'What we can check remotely',
        items: [
          'Supplier website, Alibaba profile, company name, address, and contact consistency',
          'Quote, PI, MOQ, lead time, tooling, and payment-term pressure',
          'Visible product range and factory/trader signals from available evidence',
          'Questions the buyer should ask before deposit payment',
        ],
      },
      {
        title: 'What may need onsite work',
        items: [
          'Factory entrance, workshop, equipment, sample room, or warehouse evidence',
          'Whether the stated location appears connected to the production activity',
          'Photos or video from the supplier site when access is allowed',
          'Separate factory visit or audit scope when the order risk justifies it',
        ],
      },
    ],
    checklistSections: [
      {
        title: 'Common supplier documents buyers should request',
        items: [
          'Business license or company registration details',
          'Proforma invoice with matching company name and payment beneficiary',
          'Factory address, contact person, and export or trading company relationship',
          'Product quote, MOQ, lead time, tooling terms, and sample policy',
          'Relevant test reports or certificates when the product category requires them',
        ],
      },
      {
        title: 'When not to book this service',
        items: [
          'You need legal due diligence, contract review, or dispute recovery',
          'You need lab testing, certification review, or regulated compliance approval',
          'You already require a formal factory audit for a large vendor program',
          'You expect a guarantee that a supplier is safe to pay',
        ],
      },
    ],
    links: [
      {
        href: supplierDepositGuideHref,
        label: 'How to verify a Chinese supplier before deposit',
        note: 'Use this when the immediate decision is whether deposit payment should wait.',
      },
      {
        href: alibabaSupplierVerificationHref,
        label: 'Alibaba supplier verification checklist',
        note: 'Use this when the supplier was found on Alibaba and profile details need a buyer-side check.',
      },
      {
        href: factoryVsTradingCompanyChinaHref,
        label: 'Factory vs trading company in China',
        note: 'Use this when the supplier role is unclear or the quote does not match the claimed factory identity.',
      },
    ],
  },
  'qc-inspection-china': {
    eyebrow: 'QC inspection scope',
    title: 'Define the defects before the inspector arrives.',
    intro:
      'QC inspection works best when the buyer defines what matters before the visit: product expectations, packaging rules, label files, critical defects, sampling logic, and what should happen if the order fails.',
    comparison: {
      title: 'QC inspection vs pre-shipment inspection',
      columns: ['Question', 'QC inspection', 'Pre-shipment inspection'],
      rows: [
        {
          topic: 'Best timing',
          left: 'When production is finished or nearly finished and final payment is still under buyer control.',
          right: 'When goods are packed, pickup is close, and shipment release is the decision.',
        },
        {
          topic: 'Main focus',
          left: 'Product condition, visible defects, function checks when scoped, packaging, labels, and sampled quantity signals.',
          right: 'Cartons, packing condition, labels, shipping marks, packing-list match, and pickup readiness.',
        },
        {
          topic: 'Buyer decision',
          left: 'Approve, hold payment, request rework, sort, replace, or re-inspect.',
          right: 'Approve pickup, delay collection, correct carton/label issues, or hold final release.',
        },
        {
          topic: 'Limit',
          left: 'Not lab testing, certification review, or a guarantee every defect is found.',
          right: 'Not control over transit damage, customs, or forwarder handling after pickup.',
        },
      ],
    },
    checklistSections: [
      {
        title: 'What defects should the buyer define before inspection?',
        items: [
          'Critical defects that make the goods unsellable or unsafe for your channel',
          'Major defects that would trigger returns, bad reviews, rework, or margin loss',
          'Minor defects that are acceptable only within a clear tolerance',
          'Packaging, barcode, carton mark, insert, color, size, material, or finish requirements',
          'Simple function checks that can be performed onsite without lab equipment',
        ],
      },
      {
        title: 'AQL-style sampling explained for small buyers',
        items: [
          'Sampling means checking selected units instead of opening every item',
          'AQL logic helps define a practical pass/fail threshold for visible defects',
          'Small orders still need clear defect definitions because tolerance depends on product risk',
          'AQL is not a promise that every hidden defect will be found',
        ],
      },
      {
        title: 'What happens if inspection fails?',
        items: [
          'Findings are documented with practical notes and photo evidence',
          'The buyer can ask for rework, replacement, sorting, discount discussion, or re-inspection',
          'Urgent issues can be escalated before final payment or pickup',
          'Final supplier negotiation remains the buyer and supplier decision',
        ],
      },
    ],
    download: {
      title: 'QC Inspection Request Checklist PDF',
      body:
        'A practical file-prep checklist for buyers sending product, packing, label, barcode, factory, and inspection-date details before QC booking.',
      ctaLabel: 'Download QC checklist',
      fileType: 'PDF',
      href: '/media/qc-inspection-request-checklist.pdf',
    },
  },
  'china-pre-shipment-inspection': {
    eyebrow: 'Pickup readiness',
    title: 'Separate final supplier release from forwarder warehouse checking.',
    intro:
      'Pre-shipment inspection is most useful before goods leave the supplier, while cartons, labels, packing-list issues, and pickup blockers can still be corrected in China.',
    comparison: {
      title: 'Pre-shipment inspection vs forwarder warehouse check',
      columns: ['Question', 'Pre-shipment inspection', 'Forwarder warehouse check'],
      rows: [
        {
          topic: 'Where it happens',
          left: 'At or near the supplier before forwarder pickup.',
          right: 'After goods have already been handed to the forwarder or warehouse.',
        },
        {
          topic: 'What it can influence',
          left: 'Supplier correction before final payment, pickup approval, or release.',
          right: 'Warehouse receiving notes, relabeling, repacking, or limited issue discovery after handoff.',
        },
        {
          topic: 'Main evidence',
          left: 'Goods, cartons, labels, shipping marks, packing-list signals, and visible readiness.',
          right: 'Carton condition and warehouse-visible details after supplier access may be reduced.',
        },
        {
          topic: 'Risk',
          left: 'Best for catching blockers before access becomes harder.',
          right: 'Useful, but correction leverage with the supplier may already be weaker.',
        },
      ],
    },
    checklistSections: [
      {
        title: 'What to check before forwarder pickup',
        items: [
          'Finished goods are available and match the final order scope',
          'Carton count and packing-list signals are consistent',
          'Carton labels, shipping marks, barcodes, and destination marks are visible and correct',
          'Outer cartons are sealed, clean, and ready for handoff',
          'Supplier, buyer, and forwarder timing are aligned before pickup',
        ],
      },
      {
        title: 'Pickup blockers checklist',
        items: [
          'Missing or short cartons',
          'Mixed SKU labels or unclear carton markings',
          'Packing list does not match visible carton evidence',
          'Goods are not packed despite supplier saying shipment is ready',
          'Final payment is requested before correction evidence is provided',
        ],
      },
    ],
    caseCards: [
      {
        title: 'Missing cartons',
        body: 'The supplier says pickup is ready, but the visible carton count does not match the packing list. Pickup should wait until the shortage is explained or corrected.',
      },
      {
        title: 'Mixed labels',
        body: 'Cartons for different SKUs or destinations carry unclear marks. The buyer can request relabeling before the forwarder collects.',
      },
      {
        title: 'Unclear packing list',
        body: 'The packing list and carton evidence do not line up cleanly. The buyer should ask for corrected documents and new photos before release.',
      },
    ],
  },
  'amazon-fba-prep-china': {
    eyebrow: 'FBA prep boundaries',
    title: 'Check visible FBA prep before cartons leave China.',
    intro:
      'FBA prep support is strongest when the seller sends SKU, carton, label, and shipment-plan details early. Huang Sourcing can reduce visible China-side prep mistakes, but Amazon receiving approval remains outside the service scope.',
    comparison: {
      title: 'FNSKU label check vs full FBA prep',
      columns: ['Question', 'FNSKU label check', 'Full FBA prep support'],
      rows: [
        {
          topic: 'Best for',
          left: 'Confirming visible FNSKU labels, carton labels, SKU separation, and label placement.',
          right: 'Broader coordination around labels, carton checks, inserts, packaging, supplier handoff, or prep work.',
        },
        {
          topic: 'Files needed',
          left: 'FNSKU files, carton labels, SKU list, carton count, and shipment plan.',
          right: 'All label files plus prep instructions, inserts, bundles, packing rules, supplier and forwarder details.',
        },
        {
          topic: 'Output',
          left: 'Photo-backed notes on label and carton readiness.',
          right: 'Scoped prep support and evidence before pickup or shipment release.',
        },
        {
          topic: 'Limit',
          left: 'Does not replace full prep when rework or application is needed.',
          right: 'Does not guarantee Amazon receiving, listing approval, or marketplace compliance.',
        },
      ],
    },
    checklistSections: [
      {
        title: 'What sellers should send before FBA prep quote',
        items: [
          'FNSKU files, carton labels, shipment plan, and SKU list',
          'Unit count, carton count, carton dimensions, and product photos',
          'Factory address, supplier contact, forwarder contact, and pickup window',
          'Insert, bundle, polybag, suffocation label, or special prep requirements',
        ],
      },
      {
        title: 'Common FBA prep mistakes in China',
        items: [
          'FNSKU labels missing, misplaced, covered, or mixed between SKUs',
          'Carton labels do not match the shipment plan or destination',
          'SKUs are packed together without clear separation',
          'Supplier seals cartons before label evidence is checked',
          'Forwarder pickup is approved before corrections are documented',
        ],
      },
      {
        title: 'What we do not control: Amazon receiving approval',
        items: [
          'Amazon warehouse receiving decisions after arrival',
          'Listing approval, marketplace compliance, or product safety testing',
          'Amazon policy changes or shipment-plan changes after goods leave China',
          'Final FBA acceptance or downstream warehouse processing',
        ],
      },
    ],
    download: {
      title: 'FBA Prep China Checklist PDF',
      body:
        'A practical seller checklist for FNSKU files, carton labels, shipment-plan details, SKU counts, carton counts, and prep requirements before quoting.',
      ctaLabel: 'Download FBA checklist',
      fileType: 'PDF',
      href: '/media/fba-prep-china-checklist.pdf',
    },
  },
  'sample-consolidation-china': {
    eyebrow: 'Sample comparison clarity',
    title: 'Keep supplier samples traceable before choosing who gets the order.',
    intro:
      'Sample consolidation helps buyers receive, photograph, organize, compare, and forward samples from multiple China suppliers. The key is keeping each sample tied to the right supplier before production decisions begin.',
    comparison: {
      title: 'Sample consolidation vs sample inspection',
      columns: ['Question', 'Sample consolidation', 'Sample inspection'],
      rows: [
        {
          topic: 'Best for',
          left: 'Receiving, organizing, photographing, comparing, and forwarding samples from multiple suppliers.',
          right: 'A deeper check of one sample against agreed product details or a focused defect concern.',
        },
        {
          topic: 'Main output',
          left: 'Receipt confirmation, unboxing photos, side-by-side notes, and consolidated outbound shipment.',
          right: 'More focused sample findings, photos, and questions before production approval.',
        },
        {
          topic: 'Buyer decision',
          left: 'Which supplier sample deserves follow-up, verification, or quote negotiation.',
          right: 'Whether a specific sample is acceptable enough to approve or revise.',
        },
        {
          topic: 'Limit',
          left: 'Does not prove bulk production will match the sample.',
          right: 'Still not a substitute for mass-production QC before shipment.',
        },
      ],
    },
    checklistSections: [
      {
        title: 'How to label samples by supplier',
        items: [
          'Assign each supplier a short code before samples are shipped',
          'Ask suppliers to put the code on the parcel, product bag, and inner label when possible',
          'Record tracking number, sample description, color, size, material, and quoted price',
          'Keep photos tied to supplier code so comparison notes stay traceable',
        ],
      },
      {
        title: 'When to verify supplier after sample comparison',
        items: [
          'The sample looks promising but the supplier identity or factory role is unclear',
          'The quote changes after sample approval',
          'The supplier asks for deposit before company details are consistent',
          'You narrowed the shortlist and need a buyer-side risk check before payment',
        ],
      },
    ],
    download: {
      title: 'Sample comparison sheet template',
      body:
        'A simple CSV template for tracking supplier code, sample condition, product notes, packaging, quote terms, and next-step decisions.',
      ctaLabel: 'Download CSV template',
      fileType: 'CSV',
      href: '/media/sample-comparison-sheet-template.csv',
    },
  },
}
