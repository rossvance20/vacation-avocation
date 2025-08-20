import Link from 'next/link'
import type { Metadata } from 'next'
import { getContinents, slugify } from '@/lib/guides'

export const metadata: Metadata = { title: 'Destinations - Vacation Avocation' }

export default function Destinations(){
  const continents = getContinents()
  return (
    <main className="container py-12 space-y-6">
      <h1 className="text-3xl font-semibold">Destinations</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {continents.map(c=>(
          <Link key={c} href={`/destinations/${slugify(c)}`} className="rounded-xl border p-4 hover:bg-accent2/20">
            {c}
          </Link>
        ))}
      </div>
    </main>
  )
}
