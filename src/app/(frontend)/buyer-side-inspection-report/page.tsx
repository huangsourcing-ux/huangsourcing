import { BuyerSideInspectionReportArticlePage } from '@/components/resources/BuyerSideInspectionReportArticlePage'
import { makeBuyerSideInspectionReportArticleMetadata } from '@/lib/buyer-side-inspection-report-article'

export const metadata = makeBuyerSideInspectionReportArticleMetadata()

export default function BuyerSideInspectionReportArticle() {
  return <BuyerSideInspectionReportArticlePage />
}
