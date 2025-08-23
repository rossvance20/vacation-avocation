import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Terms of Service - Vacation Avocation' }

export default function Terms() {
  return (
    <main className="container py-12 prose">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} />
      <h1>Terms of Service</h1>
      <p>Last updated {new Date().toLocaleDateString()}</p>
      <h2>Use of Site</h2>
      <p>
        By accessing or using Vacation Avocation, you agree to use the site for lawful purposes and in
        accordance with these terms.
      </p>
      <h2>Intellectual Property</h2>
      <p>All content is owned by Vacation Avocation unless otherwise noted and may not be reused without permission.</p>
      <h2>Limitation of Liability</h2>
      <p>
        Vacation Avocation provides information for general purposes. We are not liable for any damages
        resulting from reliance on the site.
      </p>
      <h2>Governing Law</h2>
      <p>These terms are governed by the laws of the United Kingdom.</p>
    </main>
  )
}
