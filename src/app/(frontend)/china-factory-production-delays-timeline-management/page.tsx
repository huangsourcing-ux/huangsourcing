import { ChinaFactoryProductionDelaysArticlePage } from '@/components/resources/ChinaFactoryProductionDelaysArticlePage'
import { makeChinaFactoryProductionDelaysArticleMetadata } from '@/lib/china-factory-production-delays-article'

export const metadata = makeChinaFactoryProductionDelaysArticleMetadata()

export default function ChinaFactoryProductionDelaysArticle() {
  return <ChinaFactoryProductionDelaysArticlePage />
}
