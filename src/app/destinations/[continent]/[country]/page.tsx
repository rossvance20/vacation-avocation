import Breadcrumbs from '@/components/Breadcrumbs'
import GuideCard from '@/components/GuideCard'
import type { Metadata } from 'next'
import { getContinents, getCountries, getGuidesByCountry, slugify, slugToContinent, slugToCountry } from '@/lib/guides'

export async function generateStaticParams(){
  const params: {continent:string,country:string}[] = []
  getContinents().forEach(continent=>{
    const cSlug = slugify(continent)
    getCountries(continent).forEach(country=>{
      params.push({continent: cSlug, country: slugify(country)})
    })
  })
  return params
}

export function generateMetadata({ params }:{ params:{ continent:string, country:string } }): Metadata {
  const continentName = slugToContinent(params.continent)
  const countryName = slugToCountry(continentName, params.country)
  return { title: `${countryName}, ${continentName} - Vacation Avocation` }
}

export default function CountryPage({ params }:{ params:{ continent:string, country:string } }){
  const continentName = slugToContinent(params.continent)
  const countryName = slugToCountry(continentName, params.country)
  const guides = getGuidesByCountry(continentName, countryName)
  return (
    <main className="container py-12 space-y-6">
      <Breadcrumbs items={[
        {label:'Home',href:'/'},
        {label:'Destinations',href:'/destinations'},
        {label:continentName,href:`/destinations/${params.continent}`},
        {label:countryName}
      ]} />
      <h1 className="text-3xl font-semibold">{countryName}</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {guides.map(g=> (
          <GuideCard key={g.url} image={g.image} tag={g.city} title={g.title} excerpt={g.excerpt} href={g.url} />
        ))}
      </div>
    </main>
  )
}
