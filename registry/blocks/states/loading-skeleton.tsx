/**
 * Loading skeletons — shimmer placeholders for card, list, and table
 * shapes while data loads. Swap each block in for its real content once
 * loaded. The shimmer is pure CSS (Tailwind animate-pulse).
 */
export function LoadingSkeleton() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Card grid */}
        <div>
          <Bar className="mb-5 h-5 w-40" />
          <div className="grid gap-5 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-xl border bg-card p-4">
                <Bar className="aspect-[4/3] w-full rounded-lg" />
                <Bar className="mt-4 h-4 w-3/4" />
                <Bar className="mt-2 h-4 w-1/2" />
                <div className="mt-4 flex items-center gap-2">
                  <Bar className="size-8 rounded-full" />
                  <Bar className="h-3 w-20" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="space-y-3">
          <Bar className="mb-5 h-5 w-32" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl border bg-card p-4">
              <Bar className="size-12 shrink-0 rounded-full" />
              <div className="flex-1 space-y-2">
                <Bar className="h-4 w-1/3" />
                <Bar className="h-3 w-2/3" />
              </div>
              <Bar className="h-8 w-20 rounded-md" />
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border">
          <div className="flex gap-4 border-b bg-muted/40 p-4">
            {["w-1/4", "w-1/4", "w-1/6", "w-1/6"].map((w, i) => (
              <Bar key={i} className={`h-4 ${w}`} />
            ))}
          </div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-4 border-b p-4 last:border-b-0">
              {["w-1/4", "w-1/4", "w-1/6", "w-1/6"].map((w, j) => (
                <Bar key={j} className={`h-4 ${w}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Bar({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded bg-muted ${className}`} />
}
