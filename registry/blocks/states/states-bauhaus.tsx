import Link from "next/link"

/**
 * Bauhaus 404 — an oversized slab numeral over a composition of primary shapes.
 */
export function StatesBauhaus() {
  return (
    <section className="relative grid min-h-[560px] place-items-center overflow-hidden border-b-4 border-foreground bg-background px-5 py-20 text-center text-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="absolute left-[12%] top-[20%] size-20 rounded-full bg-primary" />
        <span className="absolute right-[14%] top-[24%] size-16 bg-secondary" />
        <span className="absolute bottom-[20%] left-[22%] h-0 w-0 border-x-[28px] border-b-[48px] border-x-transparent border-b-accent" />
      </div>

      <div className="relative">
        <p className="text-[clamp(5rem,20vw,12rem)] font-black leading-none tracking-tighter">404</p>
        <div className="mx-auto mt-4 h-2 w-24 bg-primary" />
        <h1 className="mt-6 text-3xl font-black uppercase tracking-tight">This page is off the grid</h1>
        <p className="mx-auto mt-3 max-w-sm font-medium text-muted-foreground">
          No form, no function, no page. Let&apos;s put you back where the work is.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="#" className="border-2 border-foreground bg-primary px-7 py-3 font-black uppercase text-primary-foreground transition-colors hover:bg-secondary">
            Back home
          </Link>
          <Link href="#" className="border-2 border-foreground px-7 py-3 font-black uppercase transition-colors hover:bg-accent">
            View the work
          </Link>
        </div>
      </div>
    </section>
  )
}
