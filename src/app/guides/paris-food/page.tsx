import Gallery from '@/components/Gallery'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Paris Food Guide - Vacation Avocation' }

export default function ParisFood() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      alt: 'Paris street',
    },
    {
      src: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=800&q=80',
      alt: 'Croissants',
    },
  ]
  return (
    <main className="container py-12 prose">
      <h1>Paris Food Guide</h1>
      <p>Bistros and bakeries in the City of Light.</p>
      <Gallery images={images} />
    </main>
  )
}
