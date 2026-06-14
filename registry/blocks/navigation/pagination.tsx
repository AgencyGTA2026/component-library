"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

function pageList(current: number, total: number) {
  const out: (number | "…")[] = []
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || Math.abs(p - current) <= 1) out.push(p)
    else if (out[out.length - 1] !== "…") out.push("…")
  }
  return out
}

/**
 * Pagination — numbered pager with prev/next and ellipsis truncation for
 * blog, resource, and listing indexes. Self-contained demo state; lift
 * `page` up and wire it to your data/query.
 */
export function Pagination({ total = 12 }: { total?: number }) {
  const [page, setPage] = React.useState(4)
  const pages = pageList(page, total)

  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8">
      <div className="mx-auto max-w-2xl">
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Showing page {page} of {total}
        </p>
        <nav className="flex items-center justify-center gap-1.5" aria-label="Pagination">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="flex h-10 items-center gap-1 rounded-md border px-3 text-sm transition-colors hover:bg-secondary disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {pages.map((p, i) =>
            p === "…" ? (
              <span key={`e${i}`} className="grid size-10 place-items-center text-muted-foreground">
                <MoreHorizontal className="size-4" />
              </span>
            ) : (
              <button
                key={p}
                onClick={() => setPage(p)}
                aria-current={page === p ? "page" : undefined}
                className={cn(
                  "grid size-10 place-items-center rounded-md border text-sm tabular-nums transition-colors",
                  page === p ? "border-primary bg-primary text-primary-foreground" : "hover:bg-secondary"
                )}
              >
                {p}
              </button>
            )
          )}

          <button
            onClick={() => setPage((p) => Math.min(total, p + 1))}
            disabled={page === total}
            className="flex h-10 items-center gap-1 rounded-md border px-3 text-sm transition-colors hover:bg-secondary disabled:opacity-40"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="size-4" />
          </button>
        </nav>
      </div>
    </section>
  )
}
