import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import GuideCard from '@/components/GuideCard'
import LatestPosts from '@/components/LatestPosts'
import NewsletterForm from '@/components/NewsletterForm'
import { posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Vacation Avocation | Fun food & travel guides',
  description: 'Tight itineraries, cheeky vibes, hidden eats — all killer, no filler.',
  alternates: { canonical: 'https://vacationavocation.com/' },
  openGraph: {
    title: 'Vacation Avocation | Fun food & travel guides',
    description: 'Tight itineraries, cheeky vibes, hidden eats — all killer, no filler.',
    url: 'https://vacationavocation.com/',
    siteName: 'Vacation Avocation',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Vacation Avocation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vacation Avocation | Fun food & travel guides',
    description: 'Tight itineraries, cheeky vibes, hidden eats — all killer, no filler.',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'],
  },
}

export default function Home() {
  const featured = posts.slice(0, 6)
  return (
    <main>
      <section className="relative h-[45vh] md:h-[60vh]">
        <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80" alt="Beach vacation" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-paper space-y-4 px-4">
          <Image src="/logo-text.svg" alt="Vacation Avocation" width={240} height={60} className="-rotate-6" />
          <h1 className="sr-only">Vacation Avocation</h1>
          <p className="text-lg md:text-xl">Fun food & travel guides.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/london" className="px-6 py-3 rounded-xl bg-brand text-white font-semibold hover:bg-brand/90">
              Start with London
            </Link>
            <Link href="/guides" className="px-6 py-3 rounded-xl bg-accent1 text-white font-semibold hover:bg-accent1/90">
              All Guides
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-12 space-y-8">
        <h2 className="text-3xl font-heading flex items-center gap-2">
          <Image src="/logo.svg" alt="Avocado plane icon" width={40} height={20} className="rotate-12" />
          Featured Guides
          <Image src="/logo.svg" alt="Avocado plane icon" width={40} height={20} className="-rotate-12" />
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {featured.map((p) => (
            <GuideCard key={p.href} {...p} />
          ))}
        </div>
      </section>

      <LatestPosts posts={posts} />

      <section className="bg-accent2/20 py-12">
        <div className="container space-y-4 text-center">
          <h2 className="text-2xl font-heading flex items-center justify-center gap-2">
            <Image src="/logo.svg" alt="Avocado plane icon" width={40} height={20} className="-rotate-12" />
            Get fresh guides in your inbox
            <Image src="/logo.svg" alt="Avocado plane icon" width={40} height={20} className="rotate-12" />
          </h2>
          <NewsletterForm />
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline": posts[0].title,"image": posts[0].image,"author":{"@type":"Person","name":"Vacation Avocation"},"publisher":{"@type":"Organization","name":"Vacation Avocation"}})}} />
</main>
  )
}
