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
      {/* HERO — fixed banner height */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero.jpg"
          alt="Street food at night with city lights"
          fill
          priority
          className="object-cover"
        />
        {/* Soft overlay for text contrast */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Foreground content (kept compact) */}
        <div className="relative z-10 text-white px-4">
          <div className="flex justify-center">
            <Image
              src="/avocado-plane.png"
              alt="Vacation Avocation icon"
              width={60}
              height={60}
              className="mb-3"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Food-first, joy-forward travel.
          </h1>
          <p className="mt-2 text-base md:text-lg opacity-90">
            Tight itineraries, cheeky vibes, hidden eats — all killer, no filler.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              href="/guides"
              className="inline-flex px-4 py-2 rounded-lg bg-[#F47174] text-white font-semibold"
            >
              Discover Guides
            </Link>
            <Link
              href="/guides"
              className="inline-flex px-4 py-2 rounded-lg bg-white/90 text-slate-900 font-semibold"
            >
              Explore by Map
            </Link>
          </div>
        </div>
      </section>

      {/* “Start with these” — placeholder cards (swap with real posts later) */}
      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4">Start with these</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: '48 Hours in London (Food Edition)', href: '/guides/europe', img: '/hero.jpg' },
            { title: 'Rome Coffee & Cannoli Walk', href: '/guides/europe', img: '/hero.jpg' },
            { title: 'Cape Town Bites in a Day', href: '/guides/africa', img: '/hero.jpg' },
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
