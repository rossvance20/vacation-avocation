import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Holiday Guides - Vacation Avocation' }

export default function HolidayGuides() {
  return (
    <main className="container py-12 prose">
      <h1>Holiday Guides</h1>
      <p>Plan your next escape with our upcoming guides.</p>
    </main>
  )
}
