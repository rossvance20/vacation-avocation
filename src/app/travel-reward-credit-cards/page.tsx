import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Travel Reward Credit Cards - Vacation Avocation' }

export default function TravelRewardCreditCards() {
  const cards = [
    { name: 'Chase Sapphire Preferred', pros: 'Strong travel partners', cons: 'Annual fee', url: 'https://example.com/chase' },
    { name: 'Capital One Venture', pros: 'Easy flat-rate earning', cons: 'Limited transfer partners', url: 'https://example.com/venture' },
    { name: 'Amex Gold', pros: 'Great dining rewards', cons: 'Higher fee', url: 'https://example.com/amexgold' },
    { name: 'Citi Premier', pros: 'Good bonus categories', cons: 'Fewer partners', url: 'https://example.com/citipremier' },
    { name: 'Chase Freedom Flex', pros: 'Rotating bonuses', cons: 'Activation required', url: 'https://example.com/freedom' },
  ]
  return (
    <main className="container py-12 prose">
      <h1 className="flex items-center gap-2">Travel Reward Credit Cards
        <Image src="/logo.svg" alt="Avocado plane icon" width={50} height={25} className="rotate-12" />
      </h1>
      <p className="text-sm">Some links may be affiliate links. We may earn a commission if you use them.</p>
      <ul>
        {cards.map((c) => (
          <li key={c.name}>
            <a href={c.url} target="_blank" rel="nofollow sponsored">{c.name}</a> — {c.pros}. {c.cons}
          </li>
        ))}
      </ul>
    </main>
  )
}
