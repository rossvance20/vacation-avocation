import Image from 'next/image'
export default function Gallery({ images }:{ images:{src:string,alt:string}[] }){
  return (<div className="grid gap-2 grid-cols-2 md:grid-cols-3">{images.map((img,i)=>(<div key={i} className="relative w-full aspect-[4/3] rounded-xl2 overflow-hidden"><Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 33vw" loading="lazy"/></div>))}</div>)
}
