import Link from "next/link"

const PRODUCTS = [
  { name: "Grip Socks", meta: "Studio essential", price: "18", tint: "rgba(201,142,134,0.3)" },
  { name: "Cork Block", meta: "Props", price: "24", tint: "rgba(217,194,184,0.55)" },
  { name: "Organic Tee", meta: "Apparel", price: "42", tint: "rgba(201,142,134,0.22)" },
  { name: "Linen Towel", meta: "Studio essential", price: "32", tint: "rgba(217,194,184,0.45)" },
  { name: "Recovery Balm", meta: "Care", price: "28", tint: "rgba(201,142,134,0.28)" },
  { name: "Water Bottle", meta: "Essential", price: "36", tint: "rgba(217,194,184,0.5)" },
]

/**
 * Studio shop — soft rounded retail cards with a quiet hover reveal.
 */
export function ShopStudio() {
  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] tracking-tight">The Shop</h2>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Studio essentials</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <Link key={p.name} href="#" className="group">
              <div
                className="relative aspect-square overflow-hidden rounded-[1.25rem] border border-border"
                style={{ background: `radial-gradient(circle at 50% 40%, ${p.tint}, var(--card) 72%)` }}
              >
                <span className="absolute inset-x-3 bottom-3 rounded-full bg-card/90 py-2 text-center text-xs tracking-[0.15em] uppercase text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  Add to bag
                </span>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <p className="font-serif text-lg">{p.name}</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">{p.meta}</p>
                </div>
                <p className="text-sm text-muted-foreground">${p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
