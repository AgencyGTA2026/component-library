import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * Bauhaus CTA — a flat primary banner cut by a diagonal of geometric shapes.
 */
export function CtaBauhaus() {
  return (
    <section className="relative overflow-hidden border-b-4 border-foreground bg-primary px-5 py-20 text-primary-foreground sm:px-8 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="absolute -right-10 -top-10 size-48 rounded-full bg-accent/90" />
        <span className="absolute bottom-0 left-1/4 size-24 bg-secondary" />
        <span className="absolute right-1/3 top-10 h-0 w-0 border-x-[30px] border-b-[52px] border-x-transparent border-b-background/80" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-[clamp(2.25rem,7vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter">
          Make something that works.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg font-medium text-primary-foreground/85">
          Applications for the autumn term are open. Bring a portfolio and a point of view.
        </p>
        <Link
          href="#"
          className="mt-9 inline-flex items-center gap-2 border-2 border-foreground bg-accent px-8 py-4 text-base font-black uppercase text-foreground transition-colors hover:bg-background"
        >
          Apply now <ArrowRight className="size-5" />
        </Link>
      </div>
    </section>
  )
}
