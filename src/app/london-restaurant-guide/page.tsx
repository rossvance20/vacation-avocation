import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'London Restaurant Guide - Vacation Avocation' }

export default function LondonRestaurantGuide() {
  return (
    <main className="container py-12 prose">
      <h1>London Restaurant Guide</h1>
      <p>Our favourite spots in the city are coming soon.</p>
    </main>
  )
}
