import { HighIntentRiskGuidePage } from '@/components/resources/HighIntentRiskGuidePage'
import {
  getRiskGuidePage,
  makeRiskGuideMetadata,
} from '@/lib/risk-guide-pages'

const page = getRiskGuidePage('factory-vs-trading-company-china')

export const metadata = makeRiskGuideMetadata(page)

export default function FactoryVsTradingCompanyChinaPage() {
  return <HighIntentRiskGuidePage page={page} />
}
