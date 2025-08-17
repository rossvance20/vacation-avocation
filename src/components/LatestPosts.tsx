'use client'

import { useState } from 'react'
import TagChip from './TagChip'
import GuideCard from './GuideCard'
import type { Post } from '@/lib/posts'

const themes = ['All', 'London', 'Weekend Trips', 'Food Spots', 'Itineraries', 'Coffee', 'Budget', 'Luxury']

export default function LatestPosts({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? posts : posts.filter((p) => p.tag === active)
  return (
    <section className="container py-12 space-y-6">
      <h2 className="text-2xl font-heading">By Theme</h2>
      <div className="flex flex-wrap gap-3">
        {themes.map((t) => (
          <TagChip key={t} label={t} active={active === t} onClick={() => setActive(t)} />
        ))}
      </div>
      <h2 className="text-3xl font-heading">Latest Posts</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {filtered.slice(0, 6).map((p) => (
          <GuideCard key={p.href} {...p} />
        ))}
      </div>
    </section>
  )
}
