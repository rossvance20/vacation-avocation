'use client'
export default function ShareButtons({ title }: { title: string }){
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const text = encodeURIComponent(title)
  const u = encodeURIComponent(url)
  function copy(){
    if(navigator.clipboard?.writeText){
      navigator.clipboard.writeText(url).catch(()=>{})
    } else {
      const t=document.createElement('textarea'); t.value=url; t.style.position='fixed'; t.style.opacity='0'; document.body.appendChild(t); t.focus(); t.select(); try{document.execCommand('copy')}catch{} document.body.removeChild(t)
    }
  }
  return (<div className="flex gap-3 text-sm"><a className="underline" target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?text=${text}%20${u}`}>WhatsApp</a><a className="underline" target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${text}&url=${u}`}>X/Twitter</a><button className="underline" onClick={copy}>Copy link</button></div>)
}
