'use client'

import Image from 'next/image'
import { useState } from 'react'
import TagChip from './TagChip'
import GuideCard from './GuideCard'
import type { Post } from '@/lib/posts'

const themes = ['All', 'UK', 'International', 'Restaurants', 'Third-wave Coffee', 'Bakeries', 'Cupcakes', 'Butchers']

export default function LatestPosts({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? posts : posts.filter((p) => p.tag === active)
  return (
    <section className="container py-12 space-y-6">
      <h2 className="text-2xl font-heading flex items-center gap-2">
        By Theme
        <Image src="/logo.svg" alt="" width={32} height={16} className="-rotate-12" />
      </h2>
      <div className="flex flex-wrap gap-3">
        {themes.map((t) => (
          <TagChip key={t} label={t} active={active === t} onClick={() => setActive(t)} />
        ))}
      </div>
      <h2 className="text-3xl font-heading flex items-center gap-2">
        Latest Posts
        <Image src="/logo.svg" alt="" width={32} height={16} className="rotate-12" />
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {filtered.slice(0, 6).map((p) => (
          <GuideCard key={p.href} {...p} />
        ))}
      </div>
    </section>
  )
}
