'use client'
import { useEffect, useState } from 'react'
export default function TOC(){
  const [heads, setHeads] = useState<{id:string,text:string}[]>([])
  useEffect(()=>{ const nodes=Array.from(document.querySelectorAll('main h2')); const h=nodes.map((n,i)=>{ if(!n.id){ n.id='h2-'+(i+1) } return { id:n.id, text:n.textContent||'Section' } }); setHeads(h)},[])
  if(heads.length<2) return null
  return (<aside className="rounded-xl2 border p-4 bg-white mb-6"><p className="font-semibold mb-2">On this page</p><ul className="space-y-1 text-sm">{heads.map(h=> <li key={h.id}><a className="underline" href={`#${h.id}`}>{h.text}</a></li>)}</ul></aside>)
}
