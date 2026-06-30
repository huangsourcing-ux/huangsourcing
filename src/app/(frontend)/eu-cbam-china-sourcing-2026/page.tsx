import { EuCbamChinaSourcingArticlePage } from '@/components/resources/EuCbamChinaSourcingArticlePage'
import { makeEuCbamChinaSourcingArticleMetadata } from '@/lib/eu-cbam-china-sourcing-2026-article'

export const metadata = makeEuCbamChinaSourcingArticleMetadata()

export default function EuCbamChinaSourcingArticle() {
  return <EuCbamChinaSourcingArticlePage />
}
