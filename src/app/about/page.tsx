import Image from 'next/image'

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose">
      <h1 className="flex items-center gap-2">
        About Vacation Avocation
        <Image src="/logo.svg" alt="Avocado plane icon" width={50} height={25} className="-rotate-12" />
      </h1>
      <p>
        London shifts constantly. A restaurant can be full one month and forgotten the next.
      </p>
      <p>
        Vacation Avocation exists to record what lasts and what doesn’t. We visit quietly, pay every bill, and judge by the same standards each time.
      </p>
      <p>
        No gifts. No special access. Just the same experience anyone else would have.
      </p>
      <p>
        Our rankings change because quality changes. When places improve, they rise. When they fall short, they drop.
      </p>
      <p>
        This approach is slower, harder, and costlier than taking handouts. But it’s also the only way to create reviews that stand up to scrutiny — and that readers can genuinely trust.
      </p>
    </main>
  )
}

