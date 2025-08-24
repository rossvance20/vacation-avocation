export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>
      <p className="opacity-80 mb-6">
        Email us at <a className="underline" href="mailto:support@vacationavocation.com">support@vacationavocation.com</a> or
        use the form below. You may also use this form to request access to, correction of, or deletion of your data.
      </p>
      <form method="POST" action="https://formspree.io/f/your-form-id" className="space-y-4">
        <label className="block">
          <span className="sr-only">Your name</span>
          <input required name="name" placeholder="Your name" className="w-full border rounded-lg px-3 py-2" />
        </label>
        <label className="block">
          <span className="sr-only">Your email</span>
          <input required type="email" name="email" placeholder="Your email" className="w-full border rounded-lg px-3 py-2" />
        </label>
        <label className="block">
          <span className="sr-only">How can we help?</span>
          <textarea required name="message" placeholder="How can we help?" rows={6} className="w-full border rounded-lg px-3 py-2" />
        </label>
        <button className="bg-coral text-white px-5 py-2 rounded-lg font-semibold">Send</button>
      </form>
      <p className="text-sm opacity-70 mt-3">Replace <code>your-form-id</code> with your Formspree ID later.</p>
      <div className="mt-8 text-sm">
        <p>Vacation Avocation</p>
        <p>London, UK</p>
      </div>
    </main>
  )
}
