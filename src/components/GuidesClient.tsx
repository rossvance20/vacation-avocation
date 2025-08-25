'use client'
import { useEffect, useState } from 'react'
import Filters, { FiltersState } from './Filters'
import GuideCard from './GuideCard'
import { usePathname, useRouter } from 'next/navigation'

type Guide = {
  title: string
  excerpt: string
  continent: string
  country: string
  city: string
  url: string
  themes: string[]
  length: string
  season: string[]
  updated: string
  latitude?: number
  longitude?: number
  image: string
}

export default function GuidesClient(){
  const [guides,setGuides]=useState<Guide[]>([])
  const [filters,setFilters]=useState<FiltersState>({})
  const router=useRouter()
  const pathname=usePathname()

  useEffect(()=>{
    fetch('/data/guides.json').then(r=>r.json()).then(setGuides)
    const params=new URLSearchParams(window.location.search)
    const init:FiltersState={}
    const l=params.get('length'); if(l) init.length=l
    const s=params.get('season'); if(s) init.season=s
    const t=params.get('theme'); if(t) init.theme=t
    if(Object.keys(init).length) setFilters(init)
  },[])

  function handleChange(next:FiltersState){
    setFilters(next)
    const params=new URLSearchParams()
    if(next.length) params.set('length',next.length)
    if(next.season) params.set('season',next.season)
    if(next.theme) params.set('theme',next.theme)
    const qs=params.toString()
    router.replace(qs?`${pathname}?${qs}`:pathname)
  }

  const filtered=guides.filter(g=>{
    if(filters.length && g.length!==filters.length) return false
    if(filters.season && !g.season.includes(filters.season)) return false
    if(filters.theme && !g.themes.includes(filters.theme)) return false
    return true
  })

  return (
    <>
      <Filters state={filters} onChange={handleChange} />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map(g=> (
          <GuideCard key={g.url} image={g.image} tag={g.continent} title={g.title} excerpt={g.excerpt} href={g.url} />
        ))}
      </div>
    </>
  )
}
