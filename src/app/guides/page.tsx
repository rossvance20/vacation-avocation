'use client'
import Link from 'next/link'
import Filters, { FiltersState } from '@/components/Filters'
import { useState } from 'react'
const continents=[{slug:'africa',name:'Africa',disabled:false},{slug:'asia',name:'Asia',disabled:false},{slug:'europe',name:'Europe',disabled:false},{slug:'north-america',name:'North America',disabled:false},{slug:'south-america',name:'South America',disabled:false},{slug:'oceania',name:'Oceania (TBC)',disabled:true},{slug:'antarctica',name:'Antarctica (TBC)',disabled:true}]
export default function Guides(){
  const [filters,setFilters]=useState<FiltersState>({})
  return (<main className="max-w-6xl mx-auto px-4 py-12"><h1 className="text-3xl font-semibold mb-6">Guides</h1><Filters onChange={setFilters}/><div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">{continents.map(c=> c.disabled? (<div key={c.slug} className="rounded-xl2 border p-4 opacity-60 cursor-not-allowed" aria-disabled="true" title="Coming soon">{c.name}</div>):(<Link key={c.slug} href={`/guides/${c.slug}`} className="rounded-xl2 border p-4 hover:border-coral">{c.name}</Link>))}</div></main>)
}
