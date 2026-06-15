const ROWS = [
  {
    n: "01",
    title: "Workshops, not lectures",
    body: "You learn by making. Every course ends with something printed, bound, or built — not a grade on a screen.",
    shape: "circle",
    color: "bg-primary",
  },
  {
    n: "02",
    title: "Masters who still make",
    body: "Taught by working designers. The people marking your work ship theirs every week.",
    shape: "square",
    color: "bg-secondary",
  },
  {
    n: "03",
    title: "One language, three colours",
    body: "Constraint is the point. With a circle, a square, and three primaries you can say almost anything.",
    shape: "triangle",
    color: "bg-accent",
  },
]

function Shape({ kind }: { kind: string }) {
  if (kind === "circle") return <span className="size-12 rounded-full bg-foreground" />
  if (kind === "square") return <span className="size-12 bg-foreground" />
  return <span aria-hidden className="h-0 w-0 border-x-[24px] border-b-[42px] border-x-transparent border-b-foreground" />
}

/**
 * Bauhaus features — numbered rows with a flat color block and a hard shape.
 */
export function FeatureBauhaus() {
  return (
    <section className="border-b-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl divide-y-2 divide-foreground border-y-2 border-foreground">
        {ROWS.map((r) => (
          <div key={r.n} className="grid items-center gap-6 py-8 sm:grid-cols-[auto_1fr_auto] sm:gap-10">
            <span className="text-5xl font-black tracking-tighter text-primary">{r.n}</span>
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tight">{r.title}</h3>
              <p className="mt-2 max-w-xl font-medium leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
            <div className={`hidden size-24 place-items-center border-2 border-foreground sm:grid ${r.color}`}>
              <Shape kind={r.shape} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
