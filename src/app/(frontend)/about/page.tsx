import type { Metadata } from 'next'

import { AboutAgentPage } from '@/components/about/AboutAgentPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { en } from '@/content/en'
import { makeAboutJsonLd } from '@/lib/structured-data'

const aboutMeta = en.About.meta

export const metadata: Metadata = {
  title: aboutMeta.title,
  description: aboutMeta.description,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: aboutMeta.title,
    description: aboutMeta.description,
    url: '/about',
    siteName: 'Huang Sourcing',
    type: 'profile',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agent Huang and Huang Sourcing buyer-side China support',
      },
    ],
  },
}

const About = () => {
  return (
    <>
      <JsonLd data={makeAboutJsonLd()} />
      <AboutAgentPage />
    </>
  )
}

export default About
