'use client'

import Link from 'next/link'

interface NavigationProps {
  className?: string
  onLinkClick?: () => void
}

export default function Navigation({ className = '', onLinkClick }: NavigationProps) {
  const linkClasses = 'hover:text-[#F47174]'

  return (
    <nav className={`flex flex-col gap-4 md:flex-row md:items-center md:gap-6 font-semibold ${className}`}>
      <Link href="/" className={linkClasses} onClick={onLinkClick}>
        Home
      </Link>
      <Link href="/guides" className={linkClasses} onClick={onLinkClick}>
        Guides
      </Link>
      <Link href="/blog" className={linkClasses} onClick={onLinkClick}>
        Blog
      </Link>
      <Link href="/contact" className={linkClasses} onClick={onLinkClick}>
        Contact
      </Link>
      <Link
        href="/subscribe"
        className="inline-flex px-4 py-2 rounded-lg bg-[#F47174] text-white font-semibold"
        onClick={onLinkClick}
      >
        Subscribe
      </Link>
    </nav>
  )
}

