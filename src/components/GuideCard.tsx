import Image from 'next/image'
import Link from 'next/link'

export type GuideCardProps = {
  image: string
  tag: string
  title: string
  excerpt: string
  href: string
}

export default function GuideCard({ image, tag, title, excerpt, href }: GuideCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl overflow-hidden border border-slate-200 hover:shadow-card transition block bg-paper"
    >
      <div className="relative aspect-[16/9]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
          sizes="(min-width:1024px) 400px, 100vw"
          loading="lazy"
        />
      </div>
      <div className="p-4 space-y-1">
        <span className="text-xs font-semibold uppercase text-accent1">{tag}</span>
        <h3 className="font-heading text-lg">{title}</h3>
        <p className="text-sm text-ink/80">{excerpt}</p>
        <span className="text-sm font-semibold text-brand">Read guide →</span>
      </div>
    </Link>
  )
}
