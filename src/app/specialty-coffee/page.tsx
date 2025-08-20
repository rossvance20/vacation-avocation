import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Specialty Coffee - Vacation Avocation' }

export default function SpecialtyCoffee() {
  return (
    <main className="container py-12 prose">
      <h1>Specialty Coffee</h1>
      <p>The best spots for a quality caffeine fix.</p>
    </main>
  )
}
