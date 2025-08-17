import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Travel Gear - Vacation Avocation' }

export default function TravelGear() {
  return (
    <main className="container py-12 prose">
      <h1 className="flex items-center gap-2">Travel Gear
        <Image src="/logo.svg" alt="" width={50} height={25} className="-rotate-12" />
      </h1>
      <p>Content coming soon.</p>
    </main>
  )
}
