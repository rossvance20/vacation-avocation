import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'
import { getContinents, getCountries, slugify, slugToContinent } from '@/lib/guides'

export async function generateStaticParams(){
  return getContinents().map(c=>({continent: slugify(c)}))
}

export function generateMetadata({ params }:{ params:{ continent:string } }): Metadata {
  const continentName = slugToContinent(params.continent)
  return { title: `${continentName} Destinations - Vacation Avocation` }
}

export default function ContinentPage({ params }:{ params:{ continent:string } }){
  const continentName = slugToContinent(params.continent)
  const countries = getCountries(continentName)
  return (
    <main className="container py-12 space-y-6">
      <Breadcrumbs items={[{label:'Home',href:'/'},{label:'Destinations',href:'/destinations'},{label:continentName}]} />
      <h1 className="text-3xl font-semibold">{continentName}</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {countries.map(country=> (
          <Link key={country} href={`/destinations/${params.continent}/${slugify(country)}`} className="rounded-xl border p-4 hover:bg-accent2/20">
            {country}
          </Link>
        ))}
      </div>
    </main>
  )
}
