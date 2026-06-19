import { GoldenSampleChinaManufacturingArticlePage } from '@/components/resources/GoldenSampleChinaManufacturingArticlePage'
import { makeGoldenSampleChinaManufacturingArticleMetadata } from '@/lib/golden-sample-china-manufacturing-article'

export const metadata = makeGoldenSampleChinaManufacturingArticleMetadata()

export default function GoldenSampleChinaManufacturingArticle() {
  return <GoldenSampleChinaManufacturingArticlePage />
}
