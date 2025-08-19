import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

const poppins = Poppins({ subsets: ['latin'], weight: ['600','700'], variable: '--font-poppins', display: 'swap' })
const inter = Inter({ subsets: ['latin'], weight: ['400'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: 'Vacation Avocation — Fun Food & Travel Guides',
  description: 'Playful, practical travel & restaurant guides with a fun, bold vibe.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen">
        <Header />
        {children}
        <BackToTop />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Blog',
              name: 'Vacation Avocation',
              url: 'https://vacationavocation.com/',
            }),
          }}
        />
      </body>
    </html>
  )
}
