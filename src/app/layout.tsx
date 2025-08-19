import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import PWA from '@/components/PWA'
import ChunkErrorReload from '@/components/ChunkErrorReload'

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
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/c3a672b9a29c45937b557cd4/script.js"
          strategy="beforeInteractive"
        />
        <Script id="consent-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z3CL1LXKEW" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'G-Z3CL1LXKEW', { anonymize_ip: true });
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#6B8E23" />
      </head>
      <body className="min-h-screen">
        <Header />
        {children}
        <BackToTop />
        <PWA />
        <ChunkErrorReload />
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
