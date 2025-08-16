import { createClient } from '@sanity/client'
export const sanity = createClient({ projectId: process.env.SANITY_PROJECT_ID || '', dataset: process.env.SANITY_DATASET || 'production', apiVersion: process.env.SANITY_API_VERSION || '2023-10-01', useCdn: true })
