import { SourcingStagePage } from '@/components/stages/SourcingStagePage'
import {
  getSourcingStagePage,
  makeSourcingStageMetadata,
} from '@/lib/sourcing-stage-pages'

const page = getSourcingStagePage('before-amazon-fba-shipment-china')

export const metadata = makeSourcingStageMetadata(page)

export default function BeforeAmazonFbaShipmentChinaPage() {
  return <SourcingStagePage page={page} />
}
