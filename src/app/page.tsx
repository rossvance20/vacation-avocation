import Image from 'next/image'
import Link from 'next/link'
import WorldMap from '@/components/WorldMap'

export default function Home(){
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero.jpg" alt="Street food and city lights" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <div className="relative container mx-auto py-24 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-semibold">Food-first, joy-forward travel.</h1>
          <p className="mt-4 text-lg opacity-90">Tight itineraries, cheeky vibes, hidden eats — all killer, no filler.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/guides" className="inline-flex px-5 py-3 rounded-xl bg-[#F47174] font-semibold">Discover Food-First Guides</Link>
            <Link href="/guides" className="inline-flex px-5 py-3 rounded-xl bg-white/90 text-slate-900 font-semibold">Explore by Map</Link>
          </div>
        </div>
      </section>

      {/* LATEST / POPULAR (placeholders for now) */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">Start with these</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: '48 Hours in London (Food Edition)', href:'/guides/europe', img:'/hero.jpg' },
            { title: 'Rome Coffee & Cannoli Walk', href:'/guides/europe', img:'/hero.jpg' },
            { title: 'Cape Town Bites in a Day', href:'/guides/africa', img:'/hero.jpg' },
          ].map((c, i)=>(
            <Link key={i} href={c.href} className="rounded-2xl overflow-hidden border border-slate-200 hover:shadow-md transition">
              <div className="relative aspect-[4/3]">
                <Image src={c.img} alt={c.title} fill className="object-cover" loading="lazy" />
              </div>
              <div className="p-4 font-semibold">{c.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* EXPLORE BY MAP */}
      <section className="container mx-auto py-12">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold mb-3">Explore by map</h2>
          <WorldMap />
        </div>
      </section>

      {/* CONTINENT SHORTCUTS */}
      <section className="container mx-auto pb-16">
        <h2 className="text-2xl font-semibold mb-4">Browse by continent</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title:'Africa', href:'/guides/africa' },
            { title:'Europe', href:'/guides/europe' },
            { title:'Asia', href:'/guides/asia' },
          ].map((c,i)=>(
            <Link key={i} href={c.href} className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition">
              <span className="font-semibold">{c.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
