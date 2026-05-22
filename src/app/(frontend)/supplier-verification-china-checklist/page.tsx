import { SupplierVerificationChecklistPage } from '@/components/resources/SupplierVerificationChecklistPage'
import { makeSupplierVerificationChecklistMetadata } from '@/lib/supplier-verification-checklist'

export const metadata = makeSupplierVerificationChecklistMetadata()

export default function ChinaSupplierVerificationChecklistForOverseasBuyersPage() {
  return <SupplierVerificationChecklistPage />
}
