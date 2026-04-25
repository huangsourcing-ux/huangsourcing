import type { Metadata } from 'next'

import { AboutAgentPage } from '@/components/about/AboutAgentPage'
import { en } from '@/content/en'

const aboutMeta = en.About.meta

export const metadata: Metadata = {
  title: aboutMeta.title,
  description: aboutMeta.description,
}

const About = () => {
  return <AboutAgentPage />
}

export default About
