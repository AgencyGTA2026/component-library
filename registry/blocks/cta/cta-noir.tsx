import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

/**
 * Noir CTA — a single serif statement and one gold action over near-black.
 */
export function CtaNoir() {
  return (
    <section className="relative overflow-hidden bg-background px-5 py-24 text-foreground sm:px-8 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[50vw] max-w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(200,164,90,0.14),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-3xl border-y border-border py-16 text-center">
        <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-primary">By appointment</p>
        <h2 className="mt-6 font-serif text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] tracking-tight text-balance">
          Some things are worth the wait.
        </h2>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted-foreground">
          Begin a commission, or simply visit the atelier. There is no obligation — only champagne
          and good company.
        </p>
        <Link
          href="#"
          className="group mt-10 inline-flex items-center gap-2 bg-primary px-9 py-4 text-sm tracking-[0.15em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
        >
          Request an appointment
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  )
}
