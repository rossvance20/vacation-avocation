import { createClient } from '@sanity/client'

export function getSanityClient() {
  const projectId = process.env.SANITY_PROJECT_ID
  if (!projectId) return null
  return createClient({
    projectId,
    dataset: process.env.SANITY_DATASET || 'production',
    apiVersion: process.env.SANITY_API_VERSION || '2023-10-01',
    useCdn: true,
  })
}
