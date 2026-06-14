"use client"

import * as React from "react"

const PAGES = ["Citrus", "Berry", "Lime", "Mango", "Sampler"]

/**
 * Retro pager — chunky rounded number pills with prev/next.
 */
export function NavRetro() {
  const [page, setPage] = React.useState(1)
  const total = 8

  const go = (n: number) => setPage(Math.min(total, Math.max(1, n)))
  const nums = Array.from({ length: total }, (_, i) => i + 1)

  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-black tracking-tight">Browse the flavors</h2>
        <p className="mt-2 font-bold text-muted-foreground">Page {page} of {total} · {PAGES[(page - 1) % PAGES.length]}</p>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => go(page - 1)}
            disabled={page === 1}
            className="rounded-full border-2 border-foreground bg-card px-4 py-2 text-sm font-black shadow-[3px_3px_0_0_var(--foreground)] transition-transform enabled:hover:-translate-y-0.5 disabled:opacity-40"
          >
            ← Prev
          </button>

          {nums.map((n) => (
            <button
              key={n}
              onClick={() => go(n)}
              className={`grid size-10 place-items-center rounded-full border-2 border-foreground text-sm font-black transition-transform hover:-translate-y-0.5 ${
                page === n
                  ? "bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--foreground)]"
                  : "bg-card"
              }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => go(page + 1)}
            disabled={page === total}
            className="rounded-full border-2 border-foreground bg-card px-4 py-2 text-sm font-black shadow-[3px_3px_0_0_var(--foreground)] transition-transform enabled:hover:-translate-y-0.5 disabled:opacity-40"
          >
            Next →
          </button>
        </nav>
      </div>
    </section>
  )
}
