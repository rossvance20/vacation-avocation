'use client'
import { useEffect } from 'react'

export default function ChunkErrorReload() {
  useEffect(() => {
    const handler = (e: ErrorEvent) => {
      const isChunkError =
        e?.message?.includes('Loading chunk') || e?.error?.name === 'ChunkLoadError'
      if (isChunkError && !sessionStorage.getItem('reloaded-on-chunk-error')) {
        sessionStorage.setItem('reloaded-on-chunk-error', '1')
        window.location.reload()
      }
    }
    window.addEventListener('error', handler)
    return () => window.removeEventListener('error', handler)
  }, [])
  return null
}
