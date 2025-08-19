'use client'
import { useEffect, useRef } from 'react'

type Guide = { title:string; url:string; latitude?:number; longitude?:number }

export default function GuidesMap({ guides }:{guides:Guide[]}){
  const mapEl = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])

  function addMarkers(){
    const L=(window as any).L
    if(!mapRef.current || !L) return
    markersRef.current.forEach(m=>m.remove())
    markersRef.current=[]
    guides.filter(g=>g.latitude&&g.longitude).forEach(g=>{
      const marker=L.marker([g.latitude,g.longitude]).addTo(mapRef.current)
      marker.bindPopup(`<a href="${g.url}">${g.title}</a>`)
      markersRef.current.push(marker)
    })
  }

  useEffect(()=>{
    const el=mapEl.current
    if(!el) return
    const observer=new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting){
        observer.disconnect()
        if(mapRef.current) return
        const link=document.createElement('link')
        link.rel='stylesheet'
        link.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)
        const script=document.createElement('script')
        script.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.onload=()=>{
          const L=(window as any).L
          mapRef.current=L.map(el).setView([20,0],2)
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution:'© OpenStreetMap' }).addTo(mapRef.current)
          addMarkers()
        }
        document.body.appendChild(script)
      }
    })
    observer.observe(el)
    return()=>observer.disconnect()
  },[])

  useEffect(()=>{ addMarkers() },[guides])

  function reset(){ if(mapRef.current) mapRef.current.setView([20,0],2) }

  return (
    <div className="my-8">
      <div ref={mapEl} className="h-96 w-full" id="guides-map" />
      <button type="button" onClick={reset} className="mt-2 underline text-sm">Reset view</button>
    </div>
  )
}
