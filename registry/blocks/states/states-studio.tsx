import Link from "next/link"

/**
 * Studio 404 — a soft serif numeral over greige with a calm blush wash.
 */
export function StatesStudio() {
  return (
    <section className="relative grid min-h-[560px] place-items-center overflow-hidden bg-background px-6 py-24 text-center text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[60vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,142,134,0.18),transparent_65%)]"
      />
      <div className="relative">
        <p className="font-serif text-[clamp(5rem,20vw,12rem)] leading-none tracking-tight text-primary">404</p>
        <div className="mx-auto mt-4 h-px w-16 bg-border" />
        <h1 className="mt-6 font-serif text-3xl tracking-tight">This page took a rest day</h1>
        <p className="mx-auto mt-3 max-w-sm leading-relaxed text-muted-foreground">
          The page you were after isn&apos;t here. Take a breath and head back to the studio.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="#" className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Back home
          </Link>
          <Link href="#" className="rounded-full border border-border px-7 py-3 text-sm text-foreground transition-colors hover:bg-secondary">
            View the schedule
          </Link>
        </div>
      </div>
    </section>
  )
}
