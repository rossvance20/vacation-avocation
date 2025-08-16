import Image from 'next/image'
import Link from 'next/link'
import WorldMap from '@/components/WorldMap'
export default function Home(){
  return (<main><section className="bg-gradient-to-tr from-avocado to-plane text-white"><div className="max-w-6xl mx-auto px-4 py-20 text-center"><div className="flex justify-center"><Image src="/avocado-plane.png" alt="Avocado plane" width={90} height={90}/></div><h1 className="font-display text-4xl md:text-5xl mt-4">Your gateway to food-first, joy-forward travel.</h1><p className="mt-3 text-lg opacity-90">Tight itineraries, cheeky vibes, hidden eats — all killer, no filler.</p><div className="mt-6"><Link href="/guides" className="inline-block bg-coral text-white px-6 py-3 rounded-xl2 font-semibold">Start Exploring</Link></div></div></section><section className="max-w-6xl mx-auto px-4 py-12"><h2 className="text-2xl font-semibold mb-4">Explore by map</h2><WorldMap/></section></main>)
}
