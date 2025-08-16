// src/app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import WorldMap from '@/components/WorldMap'

// Reusable Component for Guide Cards
const GuideCard = ({ title, href, imgSrc }: { title: string, href: string, imgSrc: string }) => (
  <Link href={href} className="group block rounded-2xl overflow-hidden border border-[var(--border-color)] hover:shadow-lg transition-all duration-300">
    <div className="relative aspect-[4/3] overflow-hidden">
      <Image src={imgSrc} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  </Link>
);

// Reusable Component for Continent Links
const ContinentLink = ({ title, href }: { title: string, href: string }) => (
  <Link href={href} className="block rounded-2xl border border-[var(--border-color)] p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <span className="text-xl font-semibold">{title}</span>
  </Link>
);

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative text-white text-center">
        <div className="absolute inset-0">
          <Image src="/hero.jpg" alt="Street food and city lights" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto py-24 md:py-32">
          <h1 className="text-5xl md:text-6xl font-bold">Food-first, joy-forward travel.</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">Tight itineraries, cheeky vibes, hidden eats — all killer, no filler.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/guides" className="inline-flex px-6 py-3 rounded-xl bg-[var(--primary-color)] font-semibold hover:bg-[#e95a5e] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform">Discover Food-First Guides</Link>
            <Link href="/guides" className="inline-flex px-6 py-3 rounded-xl bg-white/90 text-slate-900 font-semibold hover:bg-white transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform">Explore by Map</Link>
          </div>
        </div>
      </section>

      {/* FEATURED GUIDES */}
      <section className="container mx-auto py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Start with these</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <GuideCard title="48 Hours in London (Food Edition)" href="/guides/europe" imgSrc="/hero.jpg" />
          <GuideCard title="Rome Coffee & Cannoli Walk" href="/guides/europe" imgSrc="/hero.jpg" />
          <GuideCard title="Cape Town Bites in a Day" href="/guides/africa" imgSrc="/hero.jpg" />
        </div>
      </section>

      {/* EXPLORE BY MAP */}
      <section className="container mx-auto pb-16 md:pb-24">
        <div className="rounded-2xl border border-[var(--border-color)] p-6 md:p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore by map</h2>
          <div className="bg-slate-100 rounded-lg min-h-[300px] flex items-center justify-center">
            <WorldMap />
          </div>
        </div>
      </section>

      {/* BROWSE BY CONTINENT */}
      <section className="container mx-auto pb-16 md:pb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Browse by continent</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <ContinentLink title="Africa" href="/guides/africa" />
          <ContinentLink title="Europe" href="/guides/europe" />
          <ContinentLink title="Asia" href="/guides/asia" />
        </div>
      </section>
    </>
  )
}
