export type Post = {
  title: string
  tag: string
  excerpt: string
  image: string
  href: string
}

export const posts: Post[] = [
  {
    title: '48 Hours in London (Food Edition)',
    tag: 'UK',
    excerpt: 'Eat your way through the capital with our top picks.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    href: '/guides/london-48h',
  },
  {
    title: 'Weekend in New York',
    tag: 'International',
    excerpt: 'A quick guide to the Big Apple.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    href: '/guides/new-york-weekend',
  },
  {
    title: 'Paris Food Guide',
    tag: 'International',
    excerpt: 'Bistros and bakeries in the City of Light.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    href: '/guides/paris-food',
  },
  {
    title: 'Tokyo Adventure Guide',
    tag: 'International',
    excerpt: 'High-tech thrills and hidden temples.',
    image: 'https://images.unsplash.com/photo-1568084205274-00e5c1d52cc7?auto=format&fit=crop&w=800&q=80',
    href: '/guides/tokyo-adventure',
  }
]
