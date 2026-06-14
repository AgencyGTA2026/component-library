import Link from "next/link"
import { Home, Search } from "lucide-react"

/**
 * Retro 404 — a big bouncy number over a Memphis-shape backdrop.
 */
export function StatesRetro() {
  return (
    <section className="relative grid min-h-[560px] place-items-center overflow-hidden bg-background px-5 py-20 text-center text-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[18%] size-12 rounded-full bg-accent" />
        <div className="absolute right-[14%] top-1/4 size-16 rotate-12 rounded-2xl border-4 border-secondary" />
        <div className="absolute bottom-[18%] left-[20%] size-8 rounded-full border-4 border-primary" />
      </div>

      <div className="relative">
        <p className="text-[clamp(5rem,20vw,12rem)] font-black leading-none tracking-tighter text-primary">
          404
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight">This flavor doesn&apos;t exist</h1>
        <p className="mx-auto mt-3 max-w-sm font-medium text-muted-foreground">
          The page fizzled out. Let&apos;s get you back to the good stuff.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-primary px-6 py-3 font-black text-primary-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5"
          >
            <Home className="size-5" /> Back home
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-6 py-3 font-black shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5"
          >
            <Search className="size-5" /> Search shop
          </Link>
        </div>
      </div>
    </section>
  )
}
