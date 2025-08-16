import Image from 'next/image'
import Link from 'next/link'

// You might need to import your WorldMap component if it's in a different location
// For now, we'll create a placeholder for it so the page works.
const WorldMap = () => (
    <div className="bg-slate-100 rounded-lg min-h-[300px] flex items-center justify-center">
        <p className="text-slate-500">Interactive World Map Component Goes Here</p>
    </div>
);

// Reusable Component for Guide Cards
const GuideCard = ({ title, href, imgSrc }: { title: string, href: string, imgSrc: string }) => (
  <Link href={href} className="group block rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300">
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
  <Link href={href} className="block rounded-2xl border border-slate-200 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <span className="text-xl font-semibold">{title}</span>
  </Link>
);

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative text-white text-center">
        <div className="absolute inset-0">
          {/* Ensure you have an image at public/hero.jpg */}
          <Image src="/hero.jpg" alt="Street food and city lights" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/50" /> {/* This dark overlay makes text readable */}
        </div>
        <div className="relative container mx-auto py-24 md:py-32">
          [cite_start]<h1 className="text-5xl md:text-6xl font-bold">Your gateway to food-first, joy-forward travel. [cite: 3]</h1>
          [cite_start]<p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">Tight itineraries, cheeky vibes, hidden eats all killer, no filler. [cite: 4]</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            [cite_start]<Link href="/guides" className="inline-flex px-6 py-3 rounded-xl bg-[#F47174] font-semibold hover:bg-[#e95a5e] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform">Start Exploring [cite: 4]</Link>
            [cite_start]<Link href="/map" className="inline-flex px-6 py-3 rounded-xl bg-white/90 text-slate-900 font-semibold hover:bg-white transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform">Explore by map [cite: 5]</Link>
          </div>
        </div>
      </section>

      {/* FEATURED GUIDES */}
      <section className="container mx-auto py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Start with these</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* These are placeholders. You can replace them with your actual guides. */}
          <GuideCard title="48 Hours in London (Food Edition)" href="/guides/europe" imgSrc="/hero.jpg" />
          <GuideCard title="Rome Coffee & Cannoli Walk" href="/guides/europe" imgSrc="/hero.jpg" />
          <GuideCard title="Cape Town Bites in a Day" href="/guides/africa" imgSrc="/hero.jpg" />
        </div>
      </section>

      {/* EXPLORE BY MAP */}
      <section className="container mx-auto pb-16 md:pb-24">
        <div className="rounded-2xl border border-slate-200 p-6 md:p-8 text-center">
          [cite_start]<h2 className="text-3xl md:text-4xl font-bold mb-4">Explore by map [cite: 5]</h2>
          <WorldMap />
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
