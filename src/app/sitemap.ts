import type { MetadataRoute } from 'next'
import { guides } from '@/lib/guides'

const pages = [
  '',
  'about',
  'blog',
  'contact',
  'guides',
  'privacy',
  'london-restaurant-guide',
  'search',
  'shop',
  'subscribe',
  'travel-gear',
  'travel-resources',
  'travel-reward-credit-cards',
  'work',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vacationavocation.com'

  const routes = [
    ...pages.map((page) => (page ? `/${page}` : '')),
    ...guides.map((g) => g.url),
  ]


  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}

