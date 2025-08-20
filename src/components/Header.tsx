'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

type NavLink = {
  href?: string
  label: string
  children?: NavLink[]
}

const links: NavLink[] = [
  { href: '/about', label: 'About Us' },
  { href: '/london-restaurant-guide', label: 'London Restaurant Guide' },
  { href: '/holiday-guides', label: 'Holiday Guides' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur border-b border-slate-200">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center focus-visible:ring-brand">
          <Image src="/logo-text.svg" alt="Vacation Avocation" width={74} height={18} priority />
        </Link>
        <nav className="hidden md:flex items-center gap-6 font-heading text-sm" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href!}
              className={`${pathname === l.href ? 'text-brand font-semibold' : 'hover:text-brand'}`}
              aria-current={pathname === l.href ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/vacationavocation/"
            aria-label="Instagram"
            className="hover:text-brand"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.001 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5.001 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7.001zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3h-10C5.346 20 4 18.654 4 17V7c0-1.654 1.346-3 3.001-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-2a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0117.5 7z" />
            </svg>
          </a>
          <Link href="/search" aria-label="Search" className="hover:text-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </Link>
        </nav>
        <button
          className="md:hidden p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-slate-200 bg-paper" aria-label="Mobile">
          <ul className="flex flex-col px-4 py-4 space-y-4">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href!}
                  className="block hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.instagram.com/vacationavocation/"
                aria-label="Instagram"
                className="block hover:text-brand"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="mx-auto"
                >
                  <path d="M7.001 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5.001 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7.001zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3h-10C5.346 20 4 18.654 4 17V7c0-1.654 1.346-3 3.001-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-2a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0117.5 7z" />
                </svg>
              </a>
            </li>
            <li>
              <Link
                href="/search"
                className="block hover:text-brand"
                onClick={() => setOpen(false)}
              >
                Search
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
