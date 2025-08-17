import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Vacation Avocation',
  description: 'Stories and tips from our food-first adventures.',
  alternates: { canonical: 'https://vacationavocation.com/blog' },
  openGraph: {
    title: 'Blog | Vacation Avocation',
    description: 'Stories and tips from our food-first adventures.',
    url: 'https://vacationavocation.com/blog',
    siteName: 'Vacation Avocation',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Vacation Avocation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Vacation Avocation',
    description: 'Stories and tips from our food-first adventures.',
    images: ['/hero.jpg'],
  },
}

export default function Blog() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Blog</h1>
      <p className="opacity-70">
        No posts yet — connect your editor (Sanity) to start publishing.
      </p>
    </main>
  )
}

