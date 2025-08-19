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
      aria-label="Back to top"
      onClick={()=>{
        const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({top:0,behavior:prefersReduced?'auto':'smooth'})
      }}
      className={`btn to-top fixed bottom-4 right-4 z-50 rounded-full bg-brand text-white shadow transition-opacity ${visible?'opacity-100':'opacity-0 pointer-events-none'} w-11 h-11 p-0`}
      aria-hidden={!visible}
      tabIndex={visible?0:-1}
    >
      ↑
    </button>
  )
}
