import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Activities - Vacation Avocation' }

export default function Activities() {
  return (
    <main className="container py-12 prose">
      <h1>Activities</h1>
      <p>Discover fun things to do in London and beyond.</p>
    </main>
  )
}
