import Link from "next/link"

/**
 * Noir 404 — an oversized serif numeral over near-black with a gold rule.
 */
export function StatesNoir() {
  return (
    <section className="relative grid min-h-[560px] place-items-center overflow-hidden bg-background px-5 py-24 text-center text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[60vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,164,90,0.12),transparent_65%)]"
      />
      <div className="relative">
        <p className="font-serif text-[clamp(6rem,22vw,15rem)] leading-none tracking-tight text-primary">404</p>
        <div className="mx-auto mt-6 h-px w-16 bg-primary" />
        <h1 className="mt-6 font-serif text-3xl tracking-tight">This page has been mislaid</h1>
        <p className="mx-auto mt-4 max-w-sm leading-relaxed text-muted-foreground">
          The piece you are looking for is no longer here. Allow us to show you back to the collection.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
          <Link href="#" className="bg-primary px-8 py-3.5 text-sm tracking-[0.15em] uppercase text-primary-foreground transition-opacity hover:opacity-90">
            Return home
          </Link>
          <Link href="#" className="text-sm tracking-wide text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
            View the collection
          </Link>
        </div>
      </div>
    </section>
  )
}
