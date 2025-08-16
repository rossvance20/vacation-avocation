import Image from 'next/image'
import Link from 'next/link'
import WorldMap from '@/components/WorldMap'

export default function Home() {
  return (
    <main>
      {/* HERO — banner height, not full screen */}
      <section className="relative w-full h-[30vh] min-h-[420px] flex items-center justify-center text-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero.jpg"
          alt="Street food at night with city lights"
          fill
          priority
          className="object-cover"
        />
        {/* Soft dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Foreground content */}
        <div className="relative z-10 text-white px-4">
          <div className="flex justify-center">
            <Image
              src="/avocado-plane.png"
              alt="Vacation Avocation icon"
              width={84}
              height={84}
              className="mb-4"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold">
            Food-first, joy-forward travel.
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Tight itineraries, cheeky vibes, hidden eats — all killer, no filler.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/guides"
              className="inline-flex px-5 py-3 rounded-xl bg-[#F47174] text-white font-semibold"
            >
              Discover Food-First Guides
            </Link>
            <Link
              href="/guides"
              className="inline-flex px-5 py-3 rounded-xl bg-white/90 text-slate-900 font-semibold"
            >
              Explore by Map
            </Link>
          </div>
        </div>
      </section>

      {/* “Start with these” — placeholder cards (swap with real posts later) */}
      <section className="container mx-auto py-12">
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
      <section className="container mx-auto py-12">
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
