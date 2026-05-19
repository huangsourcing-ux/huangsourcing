import { SourcingStagePage } from '@/components/stages/SourcingStagePage'
import {
  getSourcingStagePage,
  makeSourcingStageMetadata,
} from '@/lib/sourcing-stage-pages'

const page = getSourcingStagePage('before-forwarder-pickup-inspection-china')

export const metadata = makeSourcingStageMetadata(page)

export default function BeforeForwarderPickupInspectionChinaPage() {
  return <SourcingStagePage page={page} />
}
