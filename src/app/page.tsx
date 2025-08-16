// src/app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Header and Hero Section */}
      <header className="hero-section">
        <nav className="navbar">
          <div className="logo">Vacation Avocation</div>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/guides">Guides</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Fun Food & Travel Guides</h1>
          <p>Your adventure starts here. Discover the best food and travel experiences.</p>
        </div>
      </header>

      <main>
        {/* Pages Section */}
        <section className="pages-section">
          <h2 className="section-title">Plan Your Next Trip</h2>
          <div className="page-buttons">
            <Link href="/guides" className="page-button">
              <Image src="https://via.placeholder.com/100x100.png?text=Guides" alt="Travel Guides" width={100} height={100} />
              <span>Guides</span>
            </Link>
            <Link href="/destinations" className="page-button">
              <Image src="https://via.placeholder.com/100x100.png?text=Destinations" alt="Destinations" width={100} height={100} />
              <span>Destinations</span>
            </Link>
            <Link href="/blog" className="page-button">
              <Image src="https://via.placeholder.com/100x100.png?text=Blog" alt="Blog" width={100} height={100} />
              <span>Blog</span>
            </Link>
            <Link href="/tips" className="page-button">
              <Image src="https://via.placeholder.com/100x100.png?text=Tips" alt="Travel Tips" width={100} height={100} />
              <span>Travel Tips</span>
            </Link>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="map-section">
          <h2 className="section-title">Explore Our Interactive Map</h2>
          <div className="map-placeholder">
            <p>Interactive Map Coming Soon!</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Vacation Avocation. All rights reserved.</p>
      </footer>
    </>
  )
}
