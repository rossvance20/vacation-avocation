'use client'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function Gallery({ images }:{ images:{src:string,alt:string}[] }){
  const [index,setIndex] = useState<number|null>(null)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  function open(i:number){ setIndex(i) }
  function close(){ setIndex(null) }
  function prev(){ setIndex(i => i===null?null:(i+images.length-1)%images.length) }
  function next(){ setIndex(i => i===null?null:(i+1)%images.length) }

  useEffect(()=>{
    if(index!==null){
      closeRef.current?.focus()
      const onKey=(e:KeyboardEvent)=>{
        if(e.key==='Escape') close()
        if(e.key==='ArrowLeft') prev()
        if(e.key==='ArrowRight') next()
        if(e.key==='Tab'){
          e.preventDefault()
          const focusables=[prevRef.current!, nextRef.current!, closeRef.current!]
          const cur=document.activeElement
          let idx=focusables.indexOf(cur as HTMLButtonElement)
          const dir=e.shiftKey?-1:1
          idx=(idx+dir+focusables.length)%focusables.length
          focusables[idx].focus()
        }
      }
      const nextIndex=(index+1)%images.length
      const img=new window.Image()
      img.src=images[nextIndex].src
      document.addEventListener('keydown',onKey)
      return()=>document.removeEventListener('keydown',onKey)
    }
  },[index,images])

  return (
    <>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3">
        {images.map((img,i)=>(
          <button key={i} className="relative w-full aspect-[4/3] rounded-xl2 overflow-hidden" onClick={()=>open(i)}>
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 33vw" loading="lazy"/>
          </button>
        ))}
      </div>
      {index!==null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button ref={closeRef} onClick={close} aria-label="Close" className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
            ✕
          </button>
          <button ref={prevRef} onClick={prev} aria-label="Previous" className="absolute left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
            ←
          </button>
          <Image src={images[index].src} alt={images[index].alt} width={800} height={600} className="max-h-[80vh] object-contain" />
          <button ref={nextRef} onClick={next} aria-label="Next" className="absolute right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
            →
          </button>
        </div>
      )}
    </>
  )
}
