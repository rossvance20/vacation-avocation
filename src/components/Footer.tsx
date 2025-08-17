import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: '/about', label: 'About Us' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/restaurants', label: 'Restaurants' },
  { href: '/travel-resources', label: 'Travel Resources' },
  { href: '/travel-reward-credit-cards', label: 'Travel Reward Credit Cards' },
  { href: '/travel-gear', label: 'Travel Gear' },
]

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="container py-16 space-y-6 text-center">
        <Image src="/logo.svg" alt="Avocado plane" width={120} height={80} />
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
          <a
            href="https://www.instagram.com/vacationavocation/"
            aria-label="Instagram"
            className="hover:text-accent2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.001 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5.001 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7.001zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3h-10C5.346 20 4 18.654 4 17V7c0-1.654 1.346-3 3.001-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-2a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0117.5 7z" />
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
