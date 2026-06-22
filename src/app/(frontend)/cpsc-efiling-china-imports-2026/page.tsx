import { CpscEfilingChinaImportsArticlePage } from '@/components/resources/CpscEfilingChinaImportsArticlePage'
import { makeCpscEfilingChinaImportsArticleMetadata } from '@/lib/cpsc-efiling-china-imports-2026-article'

export const metadata = makeCpscEfilingChinaImportsArticleMetadata()

export default function CpscEfilingChinaImportsArticle() {
  return <CpscEfilingChinaImportsArticlePage />
}
