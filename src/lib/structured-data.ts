import { en } from '@/content/en'
import {
  businessEmail,
  publicLinkedInHref,
  publicWhatsAppHref,
  whatsappPhoneDisplay,
} from '@/lib/site-links'
import { getAbsoluteUrl } from '@/lib/site-url'

const organization = {
  '@type': 'Organization',
  '@id': getAbsoluteUrl('/#organization'),
  name: 'Huang Sourcing',
  url: getAbsoluteUrl('/'),
  logo: getAbsoluteUrl('/icon.png'),
  email: businessEmail,
  sameAs: [publicLinkedInHref],
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

function makeBreadcrumb(items: Array<{ name: string; path: string }>) {
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

export function makeHomeJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      ...organization,
      description: en.Meta.description,
      areaServed: {
        '@type': 'Country',
        name: 'China',
      },
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
    makeBreadcrumb([
      { name: 'Home', path: '/' },
      { name: 'About Agent Huang', path: '/about' },
    ]),
  ]
}
