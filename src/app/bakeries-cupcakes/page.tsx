import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Bakeries & Cupcakes - Vacation Avocation' }

export default function BakeriesCupcakes() {
  return (
    <main className="container py-12 prose">
      <h1>Bakeries & Cupcakes</h1>
      <p>Sweet treats and flaky pastries are on their way.</p>
    </main>
  )
}
