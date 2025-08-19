import Gallery from '@/components/Gallery'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Tokyo Adventure Guide - Vacation Avocation' }

export default function TokyoAdventure() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1568084205274-00e5c1d52cc7?auto=format&fit=crop&w=800&q=80',
      alt: 'Tokyo skyline',
    },
    {
      src: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80',
      alt: 'Shibuya crossing',
    },
  ]
  return (
    <main className="container py-12 prose">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides' }, { label: 'Tokyo Adventure Guide' }]} />
      <h1>Tokyo Adventure Guide</h1>
      <p>High-tech thrills and hidden temples.</p>
      <Gallery images={images} />
    </main>
  )
}
