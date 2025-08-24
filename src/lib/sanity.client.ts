import { createClient, type SanityClient } from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID

export const sanity: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset: process.env.SANITY_DATASET || 'production',
      apiVersion: process.env.SANITY_API_VERSION || '2023-10-01',
      useCdn: true,
    })
  : null
