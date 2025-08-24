import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Do Not Sell or Share My Personal Information - Vacation Avocation',
}

export default function DoNotSell() {
  return (
    <main className="container py-12 prose">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Do Not Sell My Data' }]} />
      <h1>Do Not Sell or Share My Personal Information</h1>
      <p>
        If you are a California resident, you may request that we do not sell or share your personal
        information.
      </p>
      <p>
        To submit a request, please use our <a href="/contact">contact form</a> or email
        <a href="mailto:support@vacationavocation.com"> support@vacationavocation.com</a>.
      </p>
    </main>
  )
}
