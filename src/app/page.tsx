// src/app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

// This is a placeholder for your WorldMap component.
const WorldMap = () => (
    <div className="bg-slate-100 rounded-lg min-h-[300px] flex items-center justify-center">
        <p className="text-slate-500">Interactive World Map Component Goes Here</p>
    </div>
);

// This is a placeholder for your GuideCard component.
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
      <section className="relative bg-[#F9F7F3] text-center overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          
          {/* Your Logo */}
          <div className="flex justify-center mb-6">
            {/* Make sure your logo is in the /public folder */}
            <Image 
              src="/logo-with-text.jpg" 
              alt="Vacation Avocation Logo" 
              width={200} 
              height={200} 
              className="rounded-full"
              priority 
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#3A4A3A]">Travel, but make it fun.</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700">Your go-to source for food-first itineraries and cheeky travel vibes.</p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/guides" 
              className="inline-block px-8 py-3 rounded-full bg-[#E87A7A] font-semibold text-white text-lg hover:bg-[#d96a6a] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Find a Guide
            </Link>
            <Link 
              href="/map" 
              className="inline-block px-8 py-3 rounded-full bg-[#F3B84A] font-semibold text-gray-800 text-lg hover:bg-[#e9ac3c] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Explore the Map
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED GUIDES SECTION */}
      <section className="container mx-auto py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Start with these</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <GuideCard title="48 Hours in London (Food Edition)" href="/guides/europe" imgSrc="/hero.jpg" />
          <GuideCard title="Rome Coffee & Cannoli Walk" href="/guides/europe" imgSrc="/hero.jpg" />
          <GuideCard title="Cape Town Bites in a Day" href="/guides/africa" imgSrc="/hero.jpg" />
        </div>
      </section>
      
    </>
  )
}
