import type { Metadata } from 'next'

import { en } from '@/content/en'

import '../globals.css'

export const metadata: Metadata = {
  title: {
    default: en.Meta.title,
    template: '%s | HFsourcing',
  },
  description: en.Meta.description,
}

type Props = {
  children: React.ReactNode
}

const RootFrontendLayout = ({ children }: Props) => (
  <html className="h-full antialiased" lang="en" suppressHydrationWarning>
    <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
  </html>
)

export default RootFrontendLayout
