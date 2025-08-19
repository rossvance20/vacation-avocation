import type { Metadata } from 'next'
import GuidesClient from '@/components/GuidesClient'

export const metadata: Metadata = {
  title: 'Travel Guides | Vacation Avocation',
  description: 'Browse playful, practical travel guides by continent.',
  alternates: { canonical: 'https://vacationavocation.com/guides' },
  openGraph: {
    title: 'Travel Guides | Vacation Avocation',
    description: 'Browse playful, practical travel guides by continent.',
    url: 'https://vacationavocation.com/guides',
    siteName: 'Vacation Avocation',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Vacation Avocation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Guides | Vacation Avocation',
    description: 'Browse playful, practical travel guides by continent.',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'],
  },
}

export default function Guides() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Guides</h1>
      <GuidesClient />
    </main>
  )
}

