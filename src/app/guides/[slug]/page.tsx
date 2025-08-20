import Image from 'next/image'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'
import { getGuideBySlug, getGuideSlugs } from '@/lib/guides'

export async function generateStaticParams(){
  return getGuideSlugs().map(slug=>({slug}))
}

export function generateMetadata({ params }:{ params:{ slug:string } }): Metadata {
  const guide = getGuideBySlug(params.slug)
  if(!guide) return {}
  return {
    title: `${guide.title} - Vacation Avocation`,
    description: guide.excerpt,
  }
}

export default function GuidePage({ params }:{ params:{ slug:string } }){
  const guide = getGuideBySlug(params.slug)
  if(!guide) return notFound()
  return (
    <main className="container py-12 prose">
      <Breadcrumbs items={[{label:'Home',href:'/'},{label:'Guides',href:'/guides'},{label:guide.title}]} />
      <h1>{guide.title}</h1>
      <p>{guide.excerpt}</p>
      <Image src={guide.image} alt={guide.title} width={800} height={500} className="rounded" />
    </main>
  )
}
