import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * Studio CTA — a calm rounded panel with a soft blush wash and one quiet action.
 */
export function CtaStudio() {
  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10 sm:py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-16 text-center sm:px-10 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(201,142,134,0.28),transparent_65%)]"
        />
        <div className="relative">
          <p className="text-xs tracking-[0.25em] uppercase text-primary">Begin where you are</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-[clamp(2rem,6vw,4rem)] leading-[1.05] tracking-tight">
            Your first class is the hardest part.
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted-foreground">
            Three classes for $39 over two weeks. Come as you are — we&apos;ll take it from there.
          </p>
          <Link
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start your intro <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
