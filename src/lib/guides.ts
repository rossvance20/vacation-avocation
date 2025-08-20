import guidesData from '../../public/data/guides.json'

export type Guide = {
  title: string
  excerpt: string
  continent: string
  country: string
  city: string
  url: string
  themes: string[]
  length: string
  season: string[]
  updated: string
  latitude?: number
  longitude?: number
  image: string
}

export const guides = guidesData as Guide[]

export function slugify(str: string){
  return str.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')
}

export function getGuideSlugs(){
  return guides.map(g=> g.url.replace('/guides/',''))
}

export function getGuideBySlug(slug: string){
  return guides.find(g=> g.url === `/guides/${slug}`)
}

export function getContinents(){
  return Array.from(new Set(guides.map(g=> g.continent)))
}

export function getCountries(continent: string){
  return Array.from(new Set(guides.filter(g=> g.continent===continent).map(g=> g.country)))
}

export function getGuidesByCountry(continent: string, country: string){
  return guides.filter(g=> g.continent===continent && g.country===country)
}

export function slugToContinent(slug: string){
  return getContinents().find(c=> slugify(c)===slug) || slug
}

export function slugToCountry(continent: string, slug: string){
  return getCountries(continent).find(c=> slugify(c)===slug) || slug
}
