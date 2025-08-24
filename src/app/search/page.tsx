import Link from 'next/link'
import { sanity } from '@/lib/sanity.client'

type SearchParams = {
  q?: string
}

type SearchResult = {
  _id: string
  title: string
  slug: string
  excerpt?: string
}

export default async function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  const q = searchParams.q ?? ''
  let results: SearchResult[] = []

  if (sanity && q) {

    results = await sanity.fetch<SearchResult[]>(
      `*[_type == "post" && title match $q]{ _id, title, "slug": slug.current, excerpt }`,
      { q: `${q}*` }
    )
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Search</h1>
      <form action="/search" className="mb-6">
        <input
          name="q"
          defaultValue={q}
          placeholder="Try: London, Italy, food..."
          className="border rounded-lg px-3 py-2 w-full md:w-96"
        />
      </form>
      {q ? (
        results.length ? (
          <ul className="space-y-6">
            {results.map((post) => (
              <li key={post._id}>
                <Link href={`/blog/${post.slug}`} className="underline">
                  {post.title}
                </Link>
                {post.excerpt && <p className="opacity-70">{post.excerpt}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <p className="opacity-70">No results found.</p>
        )
      ) : (
        <p className="opacity-70">Enter a search term to get started.</p>
      )}
    </main>
  )
}
