export type Post = {
  title: string
  tag: string
  excerpt: string
  image: string
  href: string
}

export const posts: Post[] = [
  {
    title: 'Pophams London Fields',
    tag: 'London Restaurants',
    excerpt: 'A first look at this East London bakery favourite.',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80',
    href: '/blog/pophams-london-fields',
  },
  {
    title: 'Holiday Planning Tips',
    tag: 'Holiday Guides',
    excerpt: 'Get inspired for your next getaway.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    href: '/holiday-guides',
  },
  {
    title: 'Best London Activities',
    tag: 'Activities',
    excerpt: 'Fun things to do around town.',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
    href: '/activities',
  },
  {
    title: 'London Specialty Coffee',
    tag: 'Specialty Coffee',
    excerpt: 'Sip the best brews in the city.',
    image: 'https://images.unsplash.com/photo-1523942839745-7848d6e24d6c?auto=format&fit=crop&w=800&q=80',
    href: '/specialty-coffee',
  },
  {
    title: 'Sweetest Bakeries',
    tag: 'Bakeries & Cupcakes',
    excerpt: 'Where to satisfy your sweet tooth.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    href: '/bakeries-cupcakes',
  },
]
