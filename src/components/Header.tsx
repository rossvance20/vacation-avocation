'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-with-text.png"
            alt="Vacation Avocation"
            width={180}
            height={48}
            priority
          />
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <Navigation className="hidden md:flex" />
      </div>

      <div className="border-t border-slate-200">
        <div className="container py-2 flex justify-end">
          <form action="/search" className="hidden md:block">
            <input
              name="q"
              placeholder="Search guides..."
              className="border rounded-lg px-3 py-1.5 text-sm"
            />
          </form>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-30 bg-white transition-transform duration-300 md:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/logo-with-text.png"
              alt="Vacation Avocation"
              width={180}
              height={48}
              priority
            />
          </Link>
          <button className="p-2" onClick={() => setOpen(false)} aria-label="Close menu">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <Navigation onLinkClick={() => setOpen(false)} />
        </div>
      </div>
    </header>
  )
}

