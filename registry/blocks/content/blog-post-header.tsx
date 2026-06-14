import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"

/**
 * Blog post header — an article masthead with category, title, dek,
 * author byline, and a cover slot. Drop a <article> body below it.
 */
export function BlogPostHeader() {
  return (
    <header className="bg-background px-5 pt-12 text-foreground sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="#blog"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back to journal
        </Link>

        <p className="mt-8 font-mono text-xs tracking-[0.2em] uppercase text-primary">
          Conversion · Essay
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl">
          Why your homepage hero is quietly costing you leads
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          The first screen is the most valuable real estate you own. Here&apos;s
          how to stop wasting it on a stock photo and a slogan nobody reads.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y py-5">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              JO
            </span>
            <div className="text-sm">
              <p className="font-semibold">June Okafor</p>
              <p className="text-muted-foreground">Creative Director</p>
            </div>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs tracking-wide text-muted-foreground uppercase">
            <span>May 28, 2026</span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" />6 min read
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-accent/15 to-secondary" />
    </header>
  )
}
