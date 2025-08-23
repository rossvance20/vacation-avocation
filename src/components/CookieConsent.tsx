'use client'

import { useEffect, useState } from 'react'

interface Consent {
  analytics: boolean
  timestamp: string
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    if (stored) {
      const parsed: Consent = JSON.parse(stored)
      setAnalytics(parsed.analytics)
      if (parsed.analytics) loadAnalytics()
    } else {
      if (navigator.doNotTrack === '1') {
        saveConsent(false)
      } else {
        setOpen(true)
      }
    }
    window.showCookieConsent = () => setOpen(true)
  }, [])

  const loadAnalytics = () => {
    if (window.gtag) return
    const script = document.createElement('script')
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Z3CL1LXKEW'
    script.async = true
    document.head.appendChild(script)
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', 'G-Z3CL1LXKEW', { anonymize_ip: true })
  }

  const saveConsent = (allowAnalytics: boolean) => {
    const payload: Consent = { analytics: allowAnalytics, timestamp: new Date().toISOString() }
    localStorage.setItem('cookie-consent', JSON.stringify(payload))
    setAnalytics(allowAnalytics)
    setOpen(false)
    if (allowAnalytics) loadAnalytics()
  }

  if (!open) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-ink text-paper p-4 text-sm shadow-md">
      {showSettings ? (
        <div className="space-y-3">
          <p className="font-semibold">Cookie preferences</p>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
            />
            Enable analytics cookies
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => saveConsent(analytics)}
              className="bg-coral text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button onClick={() => setShowSettings(false)} className="underline">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p>
            We use cookies to enhance your experience. You can accept, reject, or customise
            preferences.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => saveConsent(true)}
              className="bg-coral text-white px-4 py-2 rounded"
            >
              Accept
            </button>
            <button
              onClick={() => saveConsent(false)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
              Reject
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="underline"
            >
              Customise
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

declare global {
  interface Window {
    showCookieConsent: () => void
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
