import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Privacy Policy - Vacation Avocation' }

export default function Privacy() {
  return (
    <main className="container py-12 prose">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
      <h1>Privacy Policy</h1>
      <p>Last updated {new Date().toLocaleDateString()}</p>
      <h2>Information We Collect</h2>
      <p>
        We collect information you provide directly to us, such as through forms, and data collected
        automatically through cookies.
      </p>
      <h2>How We Use Information</h2>
      <p>Information is used to provide and improve our services and respond to inquiries.</p>
      <h2>Your Rights</h2>
      <p>
        You may request access to, correction or deletion of your personal data, or a copy of the
        information we hold about you. Submit requests via our <a href="/contact">contact form</a>.
      </p>
      <h2>Cookies</h2>
      <p>
        See our <a href="/cookies">Cookie Policy</a> for details on how we use cookies and how to update
        your preferences.
      </p>
      <h2>Contact</h2>
      <p>
        Vacation Avocation LLC<br />123 Demo Street<br />London, UK<br />
        <a href="mailto:support@vacationavocation.com">support@vacationavocation.com</a>
      </p>
    </main>
  )
}
