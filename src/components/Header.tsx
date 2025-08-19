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
  {
    label: 'Destinations',
    children: [
      { href: '/destinations/africa', label: 'Africa' },
      { href: '/destinations/asia', label: 'Asia' },
      { href: '/destinations/north-america', label: 'North America' },
      { href: '/destinations/south-america', label: 'South America' },
    ],
  },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur border-b border-slate-200">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center focus-visible:ring-brand">
          <Image src="/logo-text.svg" alt="Vacation Avocation" width={160} height={40} priority />
        </Link>
        <nav className="hidden md:flex items-center gap-6 font-heading text-sm" aria-label="Primary">
          {links.map((l) =>
            l.children ? (
              <div key={l.label} className="relative group">
                <span className="hover:text-brand cursor-pointer">{l.label}</span>
                <div className="absolute left-0 top-full hidden group-hover:block bg-paper border border-slate-200 rounded shadow-card">
                  <ul className="py-2">
                    {l.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href!}
                          className={`block px-4 py-2 whitespace-nowrap hover:bg-paper/50 hover:text-brand ${
                            pathname === c.href ? 'text-brand font-semibold' : ''
                          }`}
                          aria-current={pathname === c.href ? 'page' : undefined}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href!}
                className={`${pathname === l.href ? 'text-brand font-semibold' : 'hover:text-brand'}`}
                aria-current={pathname === l.href ? 'page' : undefined}
              >
                {l.label}
              </Link>
            )
          )}
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
                {l.children ? (
                  <>
                    <span className="block font-semibold">{l.label}</span>
                    <ul className="pl-4 mt-2 space-y-2">
                      {l.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href!}
                            className="block hover:text-brand"
                            onClick={() => setOpen(false)}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={l.href!}
                    className="block hover:text-brand"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
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
