import Link from 'next/link'
const continents=['africa','asia','europe','north-america','south-america']
const continentNames:Record<string,string>={'africa':'Africa','asia':'Asia','europe':'Europe','north-america':'North America','south-america':'South America'}
export async function generateStaticParams(){ return continents.map(c=>({continent:c})) }
export default function ContinentPage({ params }:{ params:{ continent:string } }){
  const title=continentNames[params.continent] || 'Guides'
  const placeholderCountries=['Country A','Country B','Country C']
  return (<main className="max-w-6xl mx-auto px-4 py-12"><h1 className="text-3xl font-semibold mb-6">{title}</h1><p className="opacity-80 mb-6">Select a country to view guides. (We’ll replace these placeholders with real countries later.)</p><div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">{placeholderCountries.map((c,i)=>(<div key={i} className="rounded-xl2 border p-4">{c}</div>))}</div><div className="mt-8"><Link href="/guides" className="underline">Back to all continents</Link></div></main>)
}
