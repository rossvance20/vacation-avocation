import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Travel Resources - Vacation Avocation' }

export default function TravelResources() {
  return (
    <main className="container py-12 prose">
        <h1 className="flex items-center gap-2">Travel Resources
          <Image src="/logo.svg" alt="Avocado plane icon" width={50} height={25} className="rotate-12" />
        </h1>
      <p>Content coming soon.</p>
    </main>
  )
}
