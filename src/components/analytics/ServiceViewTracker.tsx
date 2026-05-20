'use client'

import { useEffect } from 'react'

import {
  trackServiceFbaView,
  trackServiceQcView,
  trackServiceSupplierVerificationView,
} from '@/lib/analytics'
import type { SeoServiceSlug } from '@/lib/seo-service-pages'

type ServiceViewTrackerProps = {
  serviceName: string
  serviceSlug: SeoServiceSlug
}

export function ServiceViewTracker({
  serviceName,
  serviceSlug,
}: ServiceViewTrackerProps) {
  useEffect(() => {
    const event = {
      serviceName,
      serviceSlug,
    }

    if (serviceSlug === 'supplier-verification-china') {
      trackServiceSupplierVerificationView(event)
      return
    }

    if (serviceSlug === 'qc-inspection-china') {
      trackServiceQcView(event)
      return
    }

    if (serviceSlug === 'amazon-fba-prep-china') {
      trackServiceFbaView(event)
    }
  }, [serviceName, serviceSlug])

  return null
}
