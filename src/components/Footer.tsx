import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: '/destinations', label: 'Destinations' },
  { href: '/food-guides', label: 'Food Guides' },
  { href: '/london', label: 'London' },
  { href: '/itineraries', label: 'Itineraries' },
  { href: '/tips', label: 'Tips' },
  { href: '/about', label: 'About' },
]

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="container py-16 space-y-6 text-center">
        <Image
          src="https://placehold.co/64x64?text=AV"
          alt="Avocado plane"
          width={64}
          height={64}
        />
        <p className="text-lg font-heading">Fun food & travel guides.</p>
        <p className="max-w-prose mx-auto text-sm">
          Vacation Avocation helps you find the tastiest bites and brightest trips. Follow along for cheeky itineraries and bold flavours.
        </p>
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center gap-6">
          <a href="#" aria-label="Instagram" className="hover:text-accent2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.001 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5.001 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7.001zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3h-10C5.346 20 4 18.654 4 17V7c0-1.654 1.346-3 3.001-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-2a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0117.5 7z" />
            </svg>
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-accent2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-accent2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
        <p className="text-xs opacity-80">
          © {new Date().getFullYear()} Vacation Avocation · <Link href="/privacy" className="underline">Privacy</Link> ·{' '}
          <Link href="/sitemap.xml" className="underline">Sitemap</Link>
        </p>
      </div>
    </footer>
  )
}
