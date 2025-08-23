'use client'

import { useEffect, useRef } from 'react'
import { posts } from '@/lib/posts'

export default function LondonRestaurantMap(){
  const mapEl = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const markerRef = useRef<any>(null)
  const closeTimeout = useRef<number | null>(null)

  useEffect(() => {
    const el = mapEl.current
    if (!el) return
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        observer.disconnect()
        if (mapRef.current) return
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.onload = () => {
          const L = (window as any).L
          const lat = 51.5435583
          const lng = -0.0576372
          mapRef.current = L.map(el).setView([lat, lng], 15)
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap',
          }).addTo(mapRef.current)
          const post = posts.find(p => p.href === '/blog/pophams-london-fields')
          if (!post) return
          const popupContent = `\
<a href="${post.href}" class="block text-center">
  <h3 class="font-semibold mb-2">${post.title}</h3>
  <img src="${post.image}" alt="${post.title}" />
</a>`
          markerRef.current = L.marker([lat, lng]).addTo(mapRef.current)
          markerRef.current.bindPopup(popupContent, { closeButton: false })
          markerRef.current.on('mouseover', () => {
            if (closeTimeout.current) window.clearTimeout(closeTimeout.current)
            markerRef.current.openPopup()
          })
          markerRef.current.on('mouseout', () => {
            closeTimeout.current = window.setTimeout(() => {
              markerRef.current.closePopup()
            }, 100)
          })
          markerRef.current.on('popupopen', (e:any) => {
            const popupEl = e.popup.getElement()
            popupEl.addEventListener('mouseover', () => {
              if (closeTimeout.current) window.clearTimeout(closeTimeout.current)
            })
            popupEl.addEventListener('mouseout', () => {
              markerRef.current.closePopup()
            })
          })
        }
        document.body.appendChild(script)
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return <div ref={mapEl} className="my-8 h-96 w-full" />
}

