import { en } from '@/content/en'
import {
  businessEmail,
  publicLinkedInHref,
  publicWhatsAppHref,
  whatsappPhoneDisplay,
} from '@/lib/site-links'
import { companyDetails } from '@/lib/company-details'
import { getAbsoluteUrl } from '@/lib/site-url'

export type JsonLdObject = Record<string, unknown>

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

export type WebPageJsonLdInput = {
  about?: unknown
  description?: string
  hasPart?: unknown
  keywords?: unknown
  mainEntity?: unknown
  name: string
  path: string
  type?: string
}

type JsonLdOptions = {
  includeContext?: boolean
}

const schemaContext = 'https://schema.org'

export const organizationJsonLdId = getAbsoluteUrl('/#organization')
export const websiteJsonLdId = getAbsoluteUrl('/#website')
export const agentHuangJsonLdId = getAbsoluteUrl('/about#agent-huang')

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
  '@id': organizationJsonLdId,
  name: 'Huang Sourcing',
  legalName: companyDetails.displayName,
  url: getAbsoluteUrl('/'),
  logo: getAbsoluteUrl('/icon.png'),
  email: businessEmail,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '61 Bridge Street',
    addressLocality: 'Kington',
    postalCode: 'HR5 3DJ',
    addressCountry: 'GB',
  },
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

function withContext(node: JsonLdObject, options: JsonLdOptions = {}) {
  const includeContext = options.includeContext ?? true

  return {
    ...(includeContext ? { '@context': schemaContext } : {}),
    ...node,
  }
}

function withoutContext(node: JsonLdObject) {
  const nodeWithoutContext = { ...node }
  delete nodeWithoutContext['@context']

  return nodeWithoutContext
}

export function makeJsonLdGraph(nodes: JsonLdObject[]) {
  return {
    '@context': schemaContext,
    '@graph': nodes.map(withoutContext),
  }
}

export function getJsonLdUrl(pathOrUrl: string) {
  if (/^https?:\/\//.test(pathOrUrl)) {
    return pathOrUrl
  }

  return getAbsoluteUrl(pathOrUrl)
}

export function makeWebPageId(pathOrUrl: string) {
  return `${getJsonLdUrl(pathOrUrl)}#webpage`
}

export function makeArticleId(pathOrUrl: string) {
  return `${getJsonLdUrl(pathOrUrl)}#article`
}

export function makeServiceId(pathOrUrl: string) {
  return `${getJsonLdUrl(pathOrUrl)}#service`
}

export function makeWebsiteReference() {
  return {
    '@type': 'WebSite',
    '@id': websiteJsonLdId,
    name: 'Huang Sourcing',
    url: getAbsoluteUrl('/'),
  }
}

export function makeOrganizationReference() {
  return {
    '@type': 'Organization',
    '@id': organizationJsonLdId,
    name: 'Huang Sourcing',
    legalName: companyDetails.displayName,
    url: getAbsoluteUrl('/'),
    email: businessEmail,
  }
}

export function makeAgentHuangReference() {
  return {
    '@type': 'Person',
    '@id': agentHuangJsonLdId,
    name: 'Agent Huang',
    url: getAbsoluteUrl('/about#agent-huang'),
  }
}

export function makeWebPageJsonLd(
  page: WebPageJsonLdInput,
  options: JsonLdOptions = {},
) {
  const pageUrl = getJsonLdUrl(page.path)

  return withContext(
    {
      '@type': page.type ?? 'WebPage',
      '@id': makeWebPageId(page.path),
      name: page.name,
      ...(page.description ? { description: page.description } : {}),
      url: pageUrl,
      inLanguage: 'en',
      isPartOf: {
        '@id': websiteJsonLdId,
      },
      publisher: {
        '@id': organizationJsonLdId,
      },
      ...(page.keywords ? { keywords: page.keywords } : {}),
      ...(page.about ? { about: page.about } : {}),
      ...(page.mainEntity ? { mainEntity: page.mainEntity } : {}),
      ...(page.hasPart ? { hasPart: page.hasPart } : {}),
    },
    options,
  )
}

export function makeProfilePageJsonLd(
  page: Omit<WebPageJsonLdInput, 'type'>,
  options: JsonLdOptions = {},
) {
  const agentReference = makeAgentHuangReference()

  return makeWebPageJsonLd(
    {
      ...page,
      type: 'ProfilePage',
      about: page.about ?? agentReference,
      mainEntity: page.mainEntity ?? agentReference,
    },
    options,
  )
}

export function makeBreadcrumbJsonLd(items: BreadcrumbJsonLdItem[]) {
  const currentItem = items.at(-1)

  return {
    '@context': schemaContext,
    '@type': 'BreadcrumbList',
    ...(currentItem
      ? { '@id': `${getJsonLdUrl(currentItem.path)}#breadcrumb` }
      : {}),
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getJsonLdUrl(item.path),
    })),
  }
}

export function makeFaqPageJsonLd(faqs: FaqJsonLdItem[]) {
  return {
    '@context': schemaContext,
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
  options: JsonLdOptions = {},
) {
  const serviceUrl = service.url ? getJsonLdUrl(service.url) : undefined

  return withContext(
    {
      '@type': 'Service',
      ...(serviceUrl ? { '@id': makeServiceId(serviceUrl) } : {}),
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
      ...(serviceUrl
        ? {
            url: serviceUrl,
            mainEntityOfPage: {
              '@id': makeWebPageId(serviceUrl),
            },
          }
        : {}),
    },
    options,
  )
}

export function makeHomeJsonLd() {
  return makeJsonLdGraph([
    {
      ...organization,
      description: en.Meta.description,
    },
    {
      '@type': 'WebSite',
      '@id': websiteJsonLdId,
      name: 'Huang Sourcing',
      url: getAbsoluteUrl('/'),
      inLanguage: 'en',
      publisher: {
        '@id': organizationJsonLdId,
      },
    },
  ])
}

export function makeAboutJsonLd() {
  return makeJsonLdGraph([
    makeProfilePageJsonLd(
      {
        name: en.About.meta.title,
        description: en.About.meta.description,
        path: '/about',
      },
      { includeContext: false },
    ),
    {
      '@type': 'Person',
      '@id': agentHuangJsonLdId,
      name: 'Agent Huang',
      jobTitle: 'Founder and China-side sourcing partner',
      worksFor: {
        '@id': organizationJsonLdId,
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
  ])
}
