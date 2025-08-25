'use client'
import { useEffect, useState } from 'react'
export default function NewsletterPopup(){
  const [open, setOpen] = useState(false)
  useEffect(()=>{
      function onScroll(){ const viewport=window.visualViewport?window.visualViewport.height:document.documentElement.clientHeight; const scrolled=window.scrollY+viewport; const half=document.documentElement.scrollHeight*0.5; if(scrolled>=half){ setOpen(true); window.removeEventListener('scroll', onScroll) } }
    window.addEventListener('scroll', onScroll); return ()=>window.removeEventListener('scroll', onScroll)
  },[])
  if(!open) return null
  return (<div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/30 p-4"><div className="bg-white rounded-xl2 shadow-card max-w-md w-full p-6"><div className="flex justify-between items-center mb-2"><h3 className="text-xl font-semibold">Get new guides by email</h3><button onClick={()=>setOpen(false)} aria-label="Close">✕</button></div><p className="opacity-80 mb-4">Fun, food-first travel. No spam.</p><div className="rounded-xl2 p-4 border"><p className="text-sm opacity-70">Newsletter embed goes here (Beehiiv/Substack).</p></div><p className="text-xs opacity-60 mt-3">By subscribing, you agree to receive emails from us. You can unsubscribe anytime.</p></div></div>)
}
