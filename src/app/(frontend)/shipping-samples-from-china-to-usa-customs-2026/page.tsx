import type { Metadata } from 'next'

import { ChinaSamplesUsCustomsArticlePage } from '@/components/resources/ChinaSamplesUsCustomsArticlePage'
import { makeChinaSamplesUsCustomsArticleMetadata } from '@/lib/china-samples-us-customs-article'

export const metadata: Metadata = makeChinaSamplesUsCustomsArticleMetadata()

export default function Page() {
  return <ChinaSamplesUsCustomsArticlePage />
}
