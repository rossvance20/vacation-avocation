// src/app/layout.tsx
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vacation Avocation — Fun Food & Travel Guides',
  description: 'Playful, practical travel & restaurant guides with a 2000s vibe.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-[var(--border-color)]">
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
            <nav className="hidden md:flex items-center gap-6 font-semibold">
              <Link href="/" className="hover:text-[var(--primary-color)] transition-colors">Home</Link>
              <Link href="/guides" className="hover:text-[var(--primary-color)] transition-colors">Guides</Link>
              <Link href="/blog" className="hover:text-[var(--primary-color)] transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-[var(--primary-color)] transition-colors">Contact</Link>
              <Link href="/subscribe" className="inline-flex px-4 py-2 rounded-lg bg-[var(--primary-color)] text-white font-semibold hover:bg-[#e95a5e] transition-colors">
                Subscribe
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-24 bg-[var(--dark-bg)] text-white text-center py-14">
          <div className="container space-y-4 flex flex-col items-center">
            <Image src="/avocado-plane.png" alt="Avocado plane" width={64} height={64} />
            <p className="text-lg font-semibold">Travel, but make it fun.</p>
            <p className="text-sm">
              <a href="mailto:support@vacationavocation.com" className="hover:underline">
                support@vacationavocation.com
              </a>
            </p>
            <p className="text-sm opacity-80">© {new Date().getFullYear()} Vacation Avocation</p>
            <div className="flex gap-6 justify-center opacity-90 text-sm">
              <a href="#" aria-label="Instagram" className="hover:underline">Instagram</a>
              <a href="#" aria-label="TikTok" className="hover:underline">TikTok</a>
              <a href="#" aria-label="YouTube" className="hover:underline">YouTube</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
