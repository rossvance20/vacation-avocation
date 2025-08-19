import type { MetadataRoute } from 'next';

const continents = ['africa', 'asia', 'europe', 'north-america', 'south-america'];

const pages = [
  '',
  'about',
  'blog',
  'contact',
  'destinations',
  'guides',
  'restaurants',
  'search',
  'shop',
  'subscribe',
  'travel-gear',
  'travel-resources',
  'travel-reward-credit-cards',
  'work',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vacationavocation.com';

  const routes = [
    ...pages.map((page) => (page ? `/${page}` : '')),
    ...continents.map((c) => `/guides/${c}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}

