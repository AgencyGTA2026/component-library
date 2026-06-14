import { Plus, Star } from "lucide-react"

const PRODUCTS = [
  { name: "Citrus Pop", price: 24, note: "12-pack", color: "#ffd23f", rating: 4.9 },
  { name: "Berry Blast", price: 24, note: "12-pack", color: "#ff5a5f", rating: 4.8 },
  { name: "Cool Lime", price: 24, note: "12-pack", color: "#1fb5a8", rating: 4.9 },
  { name: "Mango Wave", price: 26, note: "12-pack", color: "#ff9f1c", rating: 4.7 },
  { name: "Sampler", price: 28, note: "Mixed 12", color: "#ffd23f", rating: 5.0 },
  { name: "Party Case", price: 44, note: "24-pack", color: "#ff5a5f", rating: 4.9 },
]

/**
 * Retro shop — rounded product cards with sticker prices and add buttons.
 */
export function ShopRetro() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight">Stock the fridge</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="overflow-hidden rounded-[1.75rem] border-2 border-foreground bg-card shadow-[5px_5px_0_0_var(--foreground)]"
            >
              <div className="relative h-44" style={{ backgroundColor: p.color }}>
                <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full border-2 border-foreground bg-card px-2.5 py-0.5 text-xs font-black">
                  <Star className="size-3 fill-foreground" />
                  {p.rating}
                </span>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="text-lg font-black">{p.name}</p>
                  <p className="text-sm font-bold text-muted-foreground">
                    ${p.price} · {p.note}
                  </p>
                </div>
                <button
                  aria-label={`Add ${p.name}`}
                  className="grid size-11 place-items-center rounded-full border-2 border-foreground bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5"
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
