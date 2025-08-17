import type { MetadataRoute } from 'next';
import { readdirSync, existsSync } from 'fs';
import path from 'path';

const continents = ['africa', 'asia', 'europe', 'north-america', 'south-america'];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const appDir = path.join(process.cwd(), 'src/app');
  const entries = readdirSync(appDir, { withFileTypes: true });

  const routes: string[] = [''];

  for (const entry of entries) {
    if (
      entry.isDirectory() &&
      !entry.name.startsWith('(') &&
      !entry.name.startsWith('_') &&
      entry.name !== 'api'
    ) {
      const pagePath = path.join(appDir, entry.name, 'page.tsx');
      if (existsSync(pagePath)) {
        routes.push(`/${entry.name}`);
      }
    }
  }

  continents.forEach((c) => routes.push(`/guides/${c}`));

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}

