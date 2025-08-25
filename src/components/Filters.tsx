'use client'

export type FiltersState={ length?:string; season?:string; theme?:string }

const tripLengths=['Weekend','1 Week','2 Weeks','Longer']
const seasons=['Spring','Summer','Autumn','Winter']
const themes=['Food','Adventure','Luxury','Budget','City Break']

export default function Filters({ state, onChange }:{ state:FiltersState, onChange:(f:FiltersState)=>void }){
  function setField(k:keyof FiltersState, v:string){
    const next={...state}
    if(next[k]===v) delete next[k]
    else next[k]=v
    onChange(next)
  }
  function Btn({k,v}:{k:keyof FiltersState,v:string}){
    const active=state[k]===v
    return (
      <button
        type="button"
        onClick={()=>setField(k,v)}
        aria-pressed={active}
        className={`px-3 py-1.5 rounded-lg border focus-visible:outline focus-visible:outline-2 focus-visible:outline-coral ${active?'bg-coral text-white border-coral':'hover:border-coral focus:border-coral active:border-coral'}`}
      >
        {v}
      </button>
    )
  }
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm opacity-70 w-24">Trip Length</span>
        {tripLengths.map(v=><Btn key={v} k="length" v={v}/>)}
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm opacity-70 w-24">Season</span>
        {seasons.map(v=><Btn key={v} k="season" v={v}/>)}
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm opacity-70 w-24">Theme</span>
        {themes.map(v=><Btn key={v} k="theme" v={v}/>)}
      </div>
      <div>
        <button type="button" onClick={()=>onChange({})} className="underline text-sm">Clear filters</button>
      </div>
    </div>
  )
}
