import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Travel Resources - Vacation Avocation' }

export default function TravelResources() {
  const resources = [
    { name: 'Google Flights', note: 'Find flight deals', url: 'https://www.google.com/flights' },
    { name: 'SeatGuru', note: 'Airline seat maps', url: 'https://www.seatguru.com/' },
    { name: 'Rome2Rio', note: 'Multi-modal route planning', url: 'https://www.rome2rio.com/' },
    { name: 'XE Currency', note: 'Exchange rate calculator', url: 'https://www.xe.com/' },
    { name: 'TripIt', note: 'Itinerary organizer', url: 'https://www.tripit.com/' },
  ]
  return (
    <main className="container py-12 prose">
      <h1 className="flex items-center gap-2">Travel Resources
        <Image src="/logo.svg" alt="Avocado plane icon" width={50} height={25} className="rotate-12" />
      </h1>
      <ul>
        {resources.map((r) => (
          <li key={r.url}>
            <a href={r.url} target="_blank" rel="noopener noreferrer">
              {r.name}
            </a> — {r.note}
          </li>
        ))}
      </ul>
    </main>
  )
}
