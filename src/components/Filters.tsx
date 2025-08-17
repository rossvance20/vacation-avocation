'use client'
import { useState } from 'react'
const tripLengths=['Weekend','1 Week','2 Weeks','Longer']; const seasons=['Spring','Summer','Autumn','Winter']; const themes=['Food','Adventure','Luxury','Budget','City Break']
export type FiltersState = { length?:string, season?:string, theme?:string }
export default function Filters({ onChange }:{ onChange:(f:FiltersState)=>void }){
  const [f,setF] = useState<FiltersState>({})
  function setField(k: keyof FiltersState, v?: string){
    const next={...f}
    if(v===f[k]){ delete next[k] } else { next[k]=v }
    setF(next); onChange(next)
  }
  function Btn({k,v}:{k:keyof FiltersState,v:string}){ const active=f[k]===v; return <button type="button" onClick={()=>setField(k,v)} className={`px-3 py-1.5 rounded-lg border ${active?'bg-coral text-white border-coral':'hover:border-coral'}`}>{v}</button> }
  return (<div className="space-y-3"><div className="flex flex-wrap gap-2 items-center"><span className="text-sm opacity-70 w-24">Trip Length</span>{tripLengths.map(v=><Btn key={v} k="length" v={v}/>)}</div><div className="flex flex-wrap gap-2 items-center"><span className="text-sm opacity-70 w-24">Season</span>{seasons.map(v=><Btn key={v} k="season" v={v}/>)}</div><div className="flex flex-wrap gap-2 items-center"><span className="text-sm opacity-70 w-24">Theme</span>{themes.map(v=><Btn key={v} k="theme" v={v}/>)}</div></div>)
}
