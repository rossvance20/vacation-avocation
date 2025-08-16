'use client'
import Link from 'next/link'
export default function WorldMap(){
  return (<div className="rounded-xl2 border overflow-hidden"><svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto"><rect width="100%" height="100%" fill="#E8F7E8"/><Link href="/guides/north-america"><polygon points="80,120 260,80 320,120 280,200 140,220" fill="#C6E7C6"/></Link><Link href="/guides/south-america"><polygon points="300,220 360,240 340,320 320,400 300,450 260,360 280,300" fill="#CDECCB"/></Link><Link href="/guides/europe"><polygon points="480,120 560,120 580,160 520,170 500,150" fill="#C6E7C6"/></Link><Link href="/guides/africa"><polygon points="520,180 580,180 620,260 600,340 520,320 500,240" fill="#BFE4BD"/></Link><Link href="/guides/asia"><polygon points="600,120 760,140 820,220 700,260 620,200" fill="#CDECCB"/></Link><title>Click a continent</title></svg></div>)
}
