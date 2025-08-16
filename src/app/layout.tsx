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
      <body className="min-h-screen">
        {/* Header */}
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

            <nav className="hidden md:flex items-center gap-6 font-semibold">
              <Link href="/" className="hover:text-[#F47174]">Home</Link>
              <Link href="/guides" className="hover:text-[#F47174]">Guides</Link>
              <Link href="/blog" className="hover:text-[#F47174]">Blog</Link>
              <Link href="/contact" className="hover:text-[#F47174]">Contact</Link>
              <Link
                href="/subscribe"
                className="inline-flex px-4 py-2 rounded-lg bg-[#F47174] text-white font-semibold"
              >
                Subscribe
              </Link>
            </nav>
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
        </header>

        {/* Page content */}
        {children}

        {/* Footer */}
        <footer className="mt-24 bg-slate-900 text-white">
          <div className="container py-14 text-center space-y-4">
            <Image src="/avocado-plane.png" alt="Avocado plane" width={64} height={64} />
            <p className="text-lg font-semibold">Travel, but make it fun.</p>
            <p className="text-sm">
              <a href="mailto:support@vacationavocation.com" className="underline">
                support@vacationavocation.com
              </a>
            </p>
            <p className="text-sm opacity-80">© {new Date().getFullYear()} Vacation Avocation</p>
            <div className="flex gap-6 justify-center opacity-90 text-sm">
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="TikTok">TikTok</a>
              <a href="#" aria-label="YouTube">YouTube</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
