import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'
import CookieSettingsButton from '@/components/CookieSettingsButton'

export const metadata: Metadata = { title: 'Cookie Policy - Vacation Avocation' }

export default function CookiePolicy() {
  return (
    <main className="container py-12 prose">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cookie Policy' }]} />
      <h1>Cookie Policy</h1>
      <p>This Cookie Policy explains how Vacation Avocation uses cookies and similar technologies.</p>
      <h2>What Are Cookies?</h2>
      <p>Cookies are small text files stored on your device when you visit a website.</p>
      <h2>How We Use Cookies</h2>
      <p>We use essential cookies to make our site work and optional analytics cookies to improve the experience.</p>
      <h2>Your Choices</h2>
      <p>You can accept or reject non-essential cookies using the banner. You can also change your preferences at any time below.</p>
      <CookieSettingsButton />
    </main>
  )
}
