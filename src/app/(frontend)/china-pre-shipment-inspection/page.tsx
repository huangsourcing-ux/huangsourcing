import { SeoServicePage } from '@/components/seo/SeoServicePage'
import {
  getSeoServicePage,
  makeSeoServiceMetadata,
} from '@/lib/seo-service-pages'

const page = getSeoServicePage('china-pre-shipment-inspection')

export const metadata = makeSeoServiceMetadata(page)

export default function ChinaPreShipmentInspectionPage() {
  return <SeoServicePage page={page} />
}
