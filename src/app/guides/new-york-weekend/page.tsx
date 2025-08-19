import Gallery from '@/components/Gallery'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Weekend in New York - Vacation Avocation' }

export default function NewYorkWeekend() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80',
      alt: 'Times Square',
    },
    {
      src: 'https://images.unsplash.com/photo-1502735325653-4a4581235761?auto=format&fit=crop&w=800&q=80',
      alt: 'Central Park',
    },
  ]
  return (
    <main className="container py-12 prose">
      <h1>Weekend in New York</h1>
      <p>Quick hits and tasty bites in the Big Apple.</p>
      <Gallery images={images} />
    </main>
  )
}
