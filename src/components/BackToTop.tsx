'use client'
import { useEffect, useState } from 'react'

export default function BackToTop(){
  const [visible,setVisible]=useState(false)
  useEffect(()=>{
    const onScroll=()=>setVisible(window.scrollY>400)
    window.addEventListener('scroll',onScroll)
    return()=>window.removeEventListener('scroll',onScroll)
  },[])
  return (
    <button
      type="button"
      onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
      className={`fixed bottom-4 right-4 z-50 p-3 rounded-full bg-brand text-white shadow transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand ${visible?'opacity-100':'opacity-0 pointer-events-none'}`}
      aria-hidden={!visible}
      tabIndex={visible?0:-1}
    >
      ↑
    </button>
  )
}
