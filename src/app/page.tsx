import Image from 'next/image'
import Link from 'next/link'
import WorldMap from '@/components/WorldMap'

export default function Home(){
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            'radial-gradient(1200px 600px at 80% -50%, #fde2e4 0%, rgba(255,255,255,0) 60%), radial-gradient(900px 500px at -20% 10%, #d1fae5 0%, rgba(255,255,255,0) 50%)'
        }}
      >
        <div className="container py-20 text-center">
          <div className="flex justify-center">
            <Image src="/avocado-plane.png" alt="Avocado plane" width={96} height={96} />
          </div>
          <h1 className="display text-5xl md:text-6xl mt-5">Food-first, joy-forward travel.</h1>
          <p className="mt-4 text-lg text-slate-600">
            Tight itineraries, cheeky vibes, hidden eats — all killer, no filler.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/guides" className="btn btn-primary">Start exploring</Link>
            <Link href="/subscribe" className="btn btn-ghost">Get updates</Link>
          </div>
        </div>
      </section>

      {/* Map + guides CTA */}
      <section className="container py-12">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-3">Explore by map</h2>
          <WorldMap />
        </div>
      </section>
    </main>
  )
}
