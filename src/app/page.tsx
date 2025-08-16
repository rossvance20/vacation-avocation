// src/app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

// Placeholder for your WorldMap component
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

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative text-white text-center h-[70vh] min-h-[500px] flex flex-col justify-center items-center">
        <div className="absolute inset-0">
          {/* IMPORTANT: Replace with your best travel photo! */}
          <Image src="/hero.jpg" alt="A vibrant travel scene with delicious food" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for text readability */}
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Food-first, joy-forward travel.</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">Tight itineraries, cheeky vibes, hidden eats — all killer, no filler.</p>
          <div className="mt-8">
            <Link href="/guides" className="inline-block px-8 py-4 rounded-full bg-[#F47174] font-semibold text-white text-lg hover:bg-[#e95a5e] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore All Guides
            </Link>
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
      
      {/* Other sections can go here */}
      
    </>
  )
}
