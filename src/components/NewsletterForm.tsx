'use client'

export default function NewsletterForm() {
  return (
    <form
      className="w-full flex flex-col sm:flex-row gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        placeholder="you@example.com"
        className="flex-1 rounded-xl border border-ink/20 px-4 py-3"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-xl bg-brand text-white font-semibold hover:bg-brand/90"
      >
        Join free
      </button>
    </form>
  )
}
