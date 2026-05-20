import { HighIntentRiskGuidePage } from '@/components/resources/HighIntentRiskGuidePage'
import {
  getRiskGuidePage,
  makeRiskGuideMetadata,
} from '@/lib/risk-guide-pages'

const page = getRiskGuidePage('fnsku-label-check-china')

export const metadata = makeRiskGuideMetadata(page)

export default function FnskuLabelCheckChinaPage() {
  return <HighIntentRiskGuidePage page={page} />
}
