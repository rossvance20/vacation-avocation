import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  title: string
  slug: string
  image?: string
}

export default function BlogCard({ title, slug, image }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block mb-4 break-inside-avoid rounded-xl2 overflow-hidden border border-slate-200 hover:shadow-md transition"
    >
      {image && (
        <div className="relative w-full aspect-[4/3]">
          <Image src={image} alt={title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        </div>
      )}
      <div className="p-4 font-semibold">{title}</div>
    </Link>
  )
}
