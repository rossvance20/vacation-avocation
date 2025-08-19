
import Image from 'next/image'

import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Restaurants - Vacation Avocation' }

export default function Restaurants() {
  const spots = [
    { name: 'Joe\'s Pizza', city: 'New York', country: 'USA', note: 'Classic slice joint', url: 'https://www.joespizzanyc.com/' },
    { name: 'Le Relais de l\'Entrecôte', city: 'Paris', country: 'France', note: 'Famous steak-frites', url: 'https://www.relaisentrecote.fr/' },
    { name: 'Sushi Dai', city: 'Tokyo', country: 'Japan', note: 'Beloved fish market sushi', url: 'https://example.com' },
    { name: 'Pizzeria Da Michele', city: 'Naples', country: 'Italy', note: 'Neapolitan classic', url: 'https://damichele.net/' },
    { name: 'Hoppers', city: 'London', country: 'UK', note: 'Sri Lankan street food', url: 'https://hopperslondon.com/' },
  ]
  return (
    <main className="container py-12 prose">
      <h1 className="flex items-center gap-2">Restaurants
        <Image src="/logo.svg" alt="Avocado plane icon" width={50} height={25} className="-rotate-12" />
      </h1>
      <ul>
        {spots.map((s) => (
          <li key={s.name}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              {s.name}
            </a> — {s.city}, {s.country}. {s.note}
          </li>
        ))}
      </ul>
    </main>
  )
}
