import { SeoServicePage } from '@/components/seo/SeoServicePage'
import {
  getSeoServicePage,
  makeSeoServiceMetadata,
} from '@/lib/seo-service-pages'

const page = getSeoServicePage('supplier-verification-china')

export const metadata = makeSeoServiceMetadata(page)

export default function SupplierVerificationChinaPage() {
  return <SeoServicePage page={page} />
}
