import type { CollectionConfig } from 'payload'

// Keep in sync with riskCheckStages in src/lib/risk-check-lead.ts
const stageOptions = [
  'Before deposit',
  'Before supplier selection',
  'Before balance payment',
  'Before pickup',
  'Before FBA shipment',
  'Not sure',
] as const

export const RiskCheckLeads: CollectionConfig = {
  slug: 'risk-check-leads',
  admin: {
    useAsTitle: 'emailAddress',
    defaultColumns: ['emailAddress', 'currentStage', 'sourcePagePath', 'createdAt'],
    group: 'Leads',
  },
  access: {
    // Public homepage form creates rows without auth; only admins can read/delete.
    create: () => true,
    read: ({ req: { user } }) => user?.role === 'admin',
    update: () => false,
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'emailAddress',
      type: 'email',
      required: true,
      label: 'Buyer email',
    },
    {
      name: 'checkRequest',
      type: 'textarea',
      required: true,
      label: 'What they want checked',
    },
    {
      name: 'currentStage',
      type: 'select',
      required: true,
      label: 'Current stage',
      options: stageOptions.map((value) => ({ label: value, value })),
    },
    {
      name: 'sourcePagePath',
      type: 'text',
      label: 'Source page',
      admin: { readOnly: true },
    },
    {
      name: 'triggerName',
      type: 'text',
      label: 'Trigger',
      admin: { readOnly: true },
    },
    {
      name: 'submittedAt',
      type: 'date',
      label: 'Submitted at',
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
  ],
}
