import { SupplierDepositGuidePage } from '@/components/resources/SupplierDepositGuidePage'
import { makeSupplierDepositGuideMetadata } from '@/lib/supplier-deposit-guide'

export const metadata = makeSupplierDepositGuideMetadata()

export default function HowToVerifyChineseSupplierBeforeDepositPage() {
  return <SupplierDepositGuidePage />
}
