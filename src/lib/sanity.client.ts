import { createClient, type SanityClient } from '@sanity/client'

export const sanity: SanityClient | null = process.env.SANITY_PROJECT_ID
  ? createClient({

      projectId: process.env.SANITY_PROJECT_ID!,
main
      dataset: process.env.SANITY_DATASET || 'production',
      apiVersion: process.env.SANITY_API_VERSION || '2023-10-01',
      useCdn: true,
    })
  : null
