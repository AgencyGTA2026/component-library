import { Plus } from "lucide-react"

const PRODUCTS = [
  { name: "Heavy Tee", price: 48, tag: "New", swatch: "#d9f526" },
  { name: "Box Logo Cap", price: 36, tag: null, swatch: "#0c0c0c" },
  { name: "Work Tote", price: 28, tag: "Restocked", swatch: "#e2dfd0" },
  { name: "Sticker Pack", price: 12, tag: null, swatch: "#e11d48" },
  { name: "Mono Hoodie", price: 84, tag: "Hot", swatch: "#d9f526" },
  { name: "Field Notes", price: 9, tag: null, swatch: "#0c0c0c" },
]

/**
 * Brutal product grid — bordered cards with a hard-shadow add button.
 */
export function ProductBrutal() {
  return (
    <section className="border-y-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.9] tracking-tighter uppercase">
            The shop.
          </h2>
          <p className="font-mono text-xs uppercase text-muted-foreground">Free shipping over $75</p>
        </div>

        <div className="mt-10 grid border-2 border-foreground sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.name}
              className="group border-foreground p-5 [&:not(:last-child)]:border-b-2 sm:[&:not(:nth-child(2n))]:border-r-2 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:not(:nth-child(3n))]:border-r-2 lg:[&:nth-last-child(-n+3)]:border-b-0"
            >
              <div
                className="relative aspect-square border-2 border-foreground"
                style={{ backgroundColor: p.swatch }}
              >
                {p.tag && (
                  <span className="absolute top-2 left-2 border-2 border-foreground bg-background px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-lg font-black uppercase">{p.name}</p>
                  <p className="font-mono text-sm">${p.price}</p>
                </div>
                <button
                  aria-label={`Add ${p.name}`}
                  className="grid size-11 place-items-center border-2 border-foreground bg-accent shadow-[4px_4px_0_0_var(--foreground)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
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
