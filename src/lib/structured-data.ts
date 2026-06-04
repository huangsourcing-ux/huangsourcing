import { en } from '@/content/en'
import {
  businessEmail,
  publicLinkedInHref,
  publicWhatsAppHref,
  whatsappPhoneDisplay,
} from '@/lib/site-links'
import { companyDetails } from '@/lib/company-details'
import { getAbsoluteUrl } from '@/lib/site-url'

export type BreadcrumbJsonLdItem = {
  name: string
  path: string
}

export type FaqJsonLdItem = {
  answer: string
  question: string
}

export type ServiceJsonLdInput = {
  availableChannel?: unknown
  description?: string
  offers?: unknown
  serviceType?: string
  url?: string
  name: string
}

const organizationId = getAbsoluteUrl('/#organization')

export const chinaServiceAreas = [
  {
    '@type': 'City',
    name: 'Shanghai',
    containedInPlace: {
      '@type': 'Country',
      name: 'China',
    },
  },
  {
    '@type': 'Country',
    name: 'China',
  },
]

export const organization = {
  '@type': 'Organization',
  '@id': organizationId,
  name: 'Huang Sourcing',
  legalName: companyDetails.displayName,
  url: getAbsoluteUrl('/'),
  logo: getAbsoluteUrl('/icon.png'),
  email: businessEmail,
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'Company No.',
    value: companyDetails.companyNumber,
  },
  sameAs: [publicLinkedInHref],
  areaServed: chinaServiceAreas,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: businessEmail,
      telephone: whatsappPhoneDisplay,
      availableLanguage: ['English', 'Chinese'],
      url: publicWhatsAppHref,
    },
  ],
}

export function makeOrganizationReference() {
  return {
    '@type': 'Organization',
    '@id': organizationId,
    name: 'Huang Sourcing',
    legalName: companyDetails.displayName,
    url: getAbsoluteUrl('/'),
    email: businessEmail,
  }
}

export function makeBreadcrumbJsonLd(items: BreadcrumbJsonLdItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  }
}

export function makeFaqPageJsonLd(faqs: FaqJsonLdItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'en',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function makeServiceJsonLd(
  service: ServiceJsonLdInput,
  options: { includeContext?: boolean } = {},
) {
  const includeContext = options.includeContext ?? true

  return {
    ...(includeContext ? { '@context': 'https://schema.org' } : {}),
    '@type': 'Service',
    name: service.name,
    ...(service.description ? { description: service.description } : {}),
    ...(service.serviceType ? { serviceType: service.serviceType } : {}),
    inLanguage: 'en',
    provider: makeOrganizationReference(),
    areaServed: chinaServiceAreas,
    ...(service.offers ? { offers: service.offers } : {}),
    ...(service.availableChannel
      ? { availableChannel: service.availableChannel }
      : {}),
    ...(service.url ? { url: service.url } : {}),
  }
}

export function makeHomeJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      ...organization,
      description: en.Meta.description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': getAbsoluteUrl('/#website'),
      name: 'Huang Sourcing',
      url: getAbsoluteUrl('/'),
      inLanguage: 'en',
      publisher: {
        '@id': getAbsoluteUrl('/#organization'),
      },
    },
  ]
}

export function makeAboutJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: en.About.meta.title,
      description: en.About.meta.description,
      url: getAbsoluteUrl('/about'),
      inLanguage: 'en',
      isPartOf: {
        '@id': getAbsoluteUrl('/#website'),
      },
      about: {
        '@id': getAbsoluteUrl('/about#agent-huang'),
      },
      publisher: {
        '@id': getAbsoluteUrl('/#organization'),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': getAbsoluteUrl('/about#agent-huang'),
      name: 'Agent Huang',
      jobTitle: 'Founder and China-side sourcing partner',
      worksFor: {
        '@id': getAbsoluteUrl('/#organization'),
      },
      url: getAbsoluteUrl('/about'),
      sameAs: [publicLinkedInHref],
      knowsAbout: [
        'China sourcing',
        'Supplier verification',
        'QC inspection',
        'Sample consolidation',
        'Amazon FBA prep in China',
      ],
    },
  ]
}
