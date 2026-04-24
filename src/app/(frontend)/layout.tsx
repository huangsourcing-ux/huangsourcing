import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: {
    default: 'HFsourcing',
    template: '%s | HFsourcing',
  },
  description: 'HFsourcing — Next.js 16 + Payload CMS 3 platform.',
}

interface FrontendLayoutProps {
  children: React.ReactNode
}

const FrontendLayout = ({ children }: FrontendLayoutProps) => (
  <html
    lang="en"
    // [!code modify] Avoid Turbopack runtime Google font resolution issue.
    className="h-full antialiased"
    suppressHydrationWarning
  >
    <body className="min-h-full flex flex-col bg-background text-foreground">
      {children}
    </body>
  </html>
)

export default FrontendLayout
