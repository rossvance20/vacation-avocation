import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import WorldMap from '@/components/WorldMap'

export const metadata: Metadata = {
  title: 'Vacation Avocation | Food-first travel guides',
  description:
    'Tight itineraries, cheeky vibes, hidden eats — all killer, no filler.',
  alternates: { canonical: 'https://vacationavocation.com/' },
  openGraph: {
    title: 'Vacation Avocation | Food-first travel guides',
    description:
      'Tight itineraries, cheeky vibes, hidden eats — all killer, no filler.',
    url: 'https://vacationavocation.com/',
    siteName: 'Vacation Avocation',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Vacation Avocation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vacation Avocation | Food-first travel guides',
    description:
      'Tight itineraries, cheeky vibes, hidden eats — all killer, no filler.',
    images: ['/hero.jpg'],
  },
}

export default function Home() {
  return (
    <main>
      {/* “Start with these” — placeholder cards (swap with real posts later) */}
      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4">Start with these</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: '48 Hours in London (Food Edition)',
              href: '/guides/europe',
              img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&h=300&q=80',
            },
            {
              title: 'Rome Coffee & Cannoli Walk',
              href: '/guides/europe',
              img: 'https://images.unsplash.com/photo-1551024709-8f23befc6cf9?auto=format&fit=crop&w=400&h=300&q=80',
            },
            {
              title: 'Cape Town Bites in a Day',
              href: '/guides/africa',
              img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&h=300&q=80',
            },
          ].map((c, i) => (
            <Link
              key={i}
              href={c.href}
              className="rounded-2xl overflow-hidden border border-slate-200 hover:shadow-md transition"
            >
              <div className="relative aspect-[4/3]">
                <Image src={c.img} alt={c.title} fill className="object-cover" loading="lazy" />
              </div>
              <div className="p-4 font-semibold">{c.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Map section */}
      <section className="container mx-auto py-10">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold mb-3">Explore by map</h2>
          <WorldMap />
        </div>
      </section>

      {/* Continent shortcuts */}
      <section className="container mx-auto pb-16">
        <h2 className="text-2xl font-semibold mb-4">Browse by continent</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: 'Africa', href: '/guides/africa' },
            { title: 'Europe', href: '/guides/europe' },
            { title: 'Asia', href: '/guides/asia' },
          ].map((c, i) => (
            <Link
              key={i}
              href={c.href}
              className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition"
            >
              <span className="font-semibold">{c.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
