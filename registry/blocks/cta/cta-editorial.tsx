import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * Editorial CTA — one oversized serif statement, one action. Maximum
 * whitespace, maximum confidence. Lets the typography do the work.
 */
export function CtaEditorial() {
  return (
    <section className="bg-background px-5 py-24 text-foreground sm:px-8 sm:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
          The next move is yours
        </p>
        <h2 className="mt-8 font-serif text-[clamp(2.75rem,9vw,7rem)] leading-[0.95] tracking-tight text-balance">
          Good work starts with a{" "}
          <em className="text-primary">conversation.</em>
        </h2>
        <div className="mt-12 flex justify-center">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 border-b-2 border-foreground pb-1 text-lg font-medium transition-colors hover:border-primary hover:text-primary"
          >
            Start one with us
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
