'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_MAILCHIMP_URL!, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
      if (res.ok) {
        setStatus('success')
        setMessage('Thanks! Check your inbox.')
        form.reset()
      } else {
        throw new Error('Bad response')
      }
    } catch (err) {
      setStatus('error')
      setMessage('Oops! Something went wrong.')
    }
  }

  return (
    <form className="w-full flex flex-col sm:flex-row gap-4 items-center" onSubmit={subscribe}>
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        name="EMAIL"
        type="email"
        required
        placeholder="you@example.com"
        className="flex-1 rounded-xl border border-ink/20 px-4 py-3"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-xl bg-brand text-white font-semibold hover:bg-brand/90 focus-visible:ring-brand"
      >
        Join Free
      </button>
      {status !== 'idle' && (
        <p role="alert" className={`text-sm ${status === 'success' ? 'text-brand' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </form>
  )
}
