import './globals.css'
import Image from 'next/image'
import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Vacation Avocation — Fun Food & Travel Guides',
  description: 'Playful, practical travel & restaurant guides with a 2000s vibe.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />

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
