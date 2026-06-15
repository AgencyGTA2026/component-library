import { Plus } from "lucide-react"

const POSTERS = [
  { name: "Composition I", price: 45, color: "#e63422", shape: "circle" },
  { name: "Blue Square", price: 45, color: "#2b4cc4", shape: "square" },
  { name: "Yellow Angle", price: 40, color: "#f5c518", shape: "triangle" },
  { name: "Three Points", price: 55, color: "#e63422", shape: "triangle" },
  { name: "Red Circle", price: 50, color: "#2b4cc4", shape: "circle" },
  { name: "Grid Study", price: 38, color: "#f5c518", shape: "square" },
]

function Mark({ kind }: { kind: string }) {
  if (kind === "circle") return <span className="size-20 rounded-full bg-foreground/85" />
  if (kind === "square") return <span className="size-20 bg-foreground/85" />
  return <span aria-hidden className="h-0 w-0 border-x-[40px] border-b-[70px] border-x-transparent border-b-foreground/85" />
}

/**
 * Bauhaus poster shop — bordered cells with geometric prints and an add button.
 */
export function ShopBauhaus() {
  return (
    <section className="border-b-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black uppercase tracking-tighter">The Poster Shop</h2>
          <p className="font-mono text-xs uppercase text-muted-foreground">Screen-printed · A1</p>
        </div>

        <div className="mt-10 grid gap-0 border-2 border-foreground sm:grid-cols-2 lg:grid-cols-3">
          {POSTERS.map((p, i) => (
            <div
              key={p.name}
              className="group border-foreground p-5 [&:not(:last-child)]:border-b-2 sm:[&:not(:nth-child(2n))]:border-r-2 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:not(:nth-child(3n))]:border-r-2 lg:[&:nth-last-child(-n+3)]:border-b-0"
            >
              <div
                className="grid aspect-[3/4] place-items-center border-2 border-foreground"
                style={{ backgroundColor: p.color }}
              >
                <Mark kind={p.shape} />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-lg font-black uppercase">{p.name}</p>
                  <p className="font-mono text-sm">${p.price}</p>
                </div>
                <button
                  aria-label={`Add ${p.name}`}
                  className="grid size-11 place-items-center border-2 border-foreground bg-accent transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Plus className="size-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
