import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const POSTS = ["When to repair vs. replace", "A homeowner's seasonal checklist", "Questions to ask any contractor"]

/**
 * Author bio — a byline card with avatar, blurb, follow action, and a
 * short list of the author's other posts. Sits at the end of an article.
 */
export function AuthorBio() {
  return (
    <section className="bg-background px-5 py-12 text-foreground sm:px-8">
      <div className="mx-auto max-w-2xl rounded-2xl border bg-card p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row">
          <span className="grid size-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-xl font-bold text-primary-foreground">
            JO
          </span>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">Written by</p>
                <h3 className="text-lg font-semibold">June Okafor</h3>
                <p className="text-sm text-muted-foreground">Master technician · 18 years in the trade</p>
              </div>
              <Link href="#" className="rounded-full border px-4 py-1.5 text-sm font-medium transition-colors hover:bg-secondary">
                Follow
              </Link>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              June writes plain-language guides to help homeowners make
              confident decisions — and avoid the repairs that didn&apos;t need
              to happen.
            </p>
          </div>
        </div>

        <div className="mt-6 border-t pt-5">
          <p className="mb-3 text-sm font-semibold">More from June</p>
          <ul className="space-y-1">
            {POSTS.map((p) => (
              <li key={p}>
                <Link href="#" className="group flex items-center justify-between gap-2 py-1.5 text-sm transition-colors hover:text-primary">
                  {p}
                  <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
