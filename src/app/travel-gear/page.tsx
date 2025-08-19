
import Image from 'next/image'

import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Travel Gear - Vacation Avocation' }

export default function TravelGear() {
  const gear = [
    { name: 'Carry-on Backpack', note: 'Fits under most airline seats', url: 'https://example.com/backpack' },
    { name: 'Noise-Cancelling Headphones', note: 'Peace on long flights', url: 'https://example.com/headphones' },
    { name: 'Universal Adapter', note: 'Works in 150+ countries', url: 'https://example.com/adapter' },
    { name: 'Packing Cubes', note: 'Stay organized', url: 'https://example.com/cubes' },
    { name: 'Travel Water Bottle', note: 'Collapsible and leak-proof', url: 'https://example.com/bottle' },
  ]
  return (
    <main className="container py-12 prose">
      <h1 className="flex items-center gap-2">Travel Gear
        <Image src="/logo.svg" alt="Avocado plane icon" width={50} height={25} className="-rotate-12" />
      </h1>
      <p className="text-sm">Some product links are affiliate links; we may earn a small commission.</p>
      <ul>
        {gear.map((g) => (
          <li key={g.url}>
            <a href={g.url} target="_blank" rel="nofollow sponsored">
              {g.name}
            </a> — {g.note}
          </li>
        ))}
      </ul>
    </main>
  )
}
