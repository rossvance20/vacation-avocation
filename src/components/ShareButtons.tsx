'use client'
export default function ShareButtons({ title }: { title: string }){
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const text = encodeURIComponent(title); const u = encodeURIComponent(url)
  return (<div className="flex gap-3 text-sm"><a className="underline" target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?text=${text}%20${u}`}>WhatsApp</a><a className="underline" target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${text}&url=${u}`}>X/Twitter</a><button className="underline" onClick={()=>navigator.clipboard.writeText(url)}>Copy link</button></div>)
}
