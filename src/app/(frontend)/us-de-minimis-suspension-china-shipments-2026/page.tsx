import type { Metadata } from 'next'

import { UsDeMinimisSuspensionChinaArticlePage } from '@/components/resources/UsDeMinimisSuspensionChinaArticlePage'
import { makeUsDeMinimisSuspensionChinaArticleMetadata } from '@/lib/us-de-minimis-suspension-china-shipments-2026-article'

export const metadata: Metadata = makeUsDeMinimisSuspensionChinaArticleMetadata()

export default function Page() {
  return <UsDeMinimisSuspensionChinaArticlePage />
}
