'use client'
import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: item.href } : {}),
    })),
  }
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm mb-4">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="text-brand hover:underline focus-visible:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
              {i < items.length - 1 && <span>/</span>}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
