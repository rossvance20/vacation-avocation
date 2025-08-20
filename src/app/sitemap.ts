import type { MetadataRoute } from 'next'
import { guides, getContinents, getCountries, slugify } from '@/lib/guides'

const pages = [
  '',
  'about',
  'blog',
  'contact',
  'destinations',
  'guides',
  'privacy',
  'restaurants',
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

  getContinents().forEach((continent) => {
    const cSlug = slugify(continent)
    routes.push(`/destinations/${cSlug}`)
    getCountries(continent).forEach((country) => {
      routes.push(`/destinations/${cSlug}/${slugify(country)}`)
    })
  })

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}

