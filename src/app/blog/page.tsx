import Link from 'next/link'
import { getSanityClient } from '@/lib/sanity.client'
import BlogCard from '@/components/BlogCard'

export const dynamic = 'force-dynamic'
const PAGE_SIZE = 9

type Post = {
  _id: string
  title: string
  slug: { current: string }
  image?: string
}

export default async function Blog({ searchParams }: { searchParams?: { page?: string } }) {
  const client = getSanityClient()
  const page = Number(searchParams?.page) || 1
  const start = (page - 1) * PAGE_SIZE
  const end = start + PAGE_SIZE - 1

  if (!client) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-6">Blog</h1>
        <p className="opacity-70">No posts yet — connect your editor (Sanity) to start publishing.</p>
      </main>
    )
  }

  const [posts, total] = await Promise.all([
    client.fetch<Post[]>(
      `*[_type == "post"] | order(publishedAt desc) [$start..$end] {
        _id,
        title,
        slug,
        "image": mainImage.asset->url
      }`,
      { start, end }
    ),
    client.fetch<number>('count(*[_type == "post"])')
  ])

  const totalPages = Math.ceil(total / PAGE_SIZE)

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Blog</h1>
      {posts.length ? (
        <>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {posts.map((post) => (
              <BlogCard key={post._id} title={post.title} slug={post.slug.current} image={post.image} />
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-4">
            {page > 1 && (
              <Link href={`/blog?page=${page - 1}`} className="px-3 py-1 rounded border">
                Previous
              </Link>
            )}
            {page < totalPages && (
              <Link href={`/blog?page=${page + 1}`} className="px-3 py-1 rounded border">
                Next
              </Link>
            )}
          </div>
        </>
      ) : (
        <p className="opacity-70">No posts yet — connect your editor (Sanity) to start publishing.</p>
      )}
    </main>
  )
}
