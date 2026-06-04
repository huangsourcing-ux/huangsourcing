import { businessEmail } from '@/lib/site-links'

export const companyDetails = {
  displayName: 'Huang Sourcing Ltd',
  companyNumber: '17241958',
  companyNumberLine: 'Company No. 17241958',
  registrationLine: 'Registered in England and Wales',
  registeredOfficeLine:
    'Registered office: 61 Bridge Street, Kington, HR5 3DJ, United Kingdom',
  legalEntityLine:
    'Huang Sourcing Ltd, a company registered in England and Wales, Company No. 17241958.',
  email: businessEmail,
} as const

export const companyDetailsLines = [
  companyDetails.displayName,
  companyDetails.companyNumberLine,
  companyDetails.registrationLine,
  companyDetails.registeredOfficeLine,
] as const
