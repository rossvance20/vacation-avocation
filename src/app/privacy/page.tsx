import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Privacy Policy - Vacation Avocation' }

export default function Privacy(){
  return (
    <main className="container py-12 prose">
      <Breadcrumbs items={[{label:'Home',href:'/'},{label:'Privacy'}]} />
      <h1>Privacy Policy</h1>
      <p>Your privacy is important to us. This placeholder page outlines how we handle your data.</p>
    </main>
  )
}
