'use client'

export default function CookieSettingsButton() {
  return (
    <button
      onClick={() => window.showCookieConsent()}
      className="bg-coral text-white px-4 py-2 rounded"
    >
      Adjust cookie settings
    </button>
  )
}

declare global {
  interface Window {
    showCookieConsent: () => void
  }
}
