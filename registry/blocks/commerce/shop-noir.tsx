import Link from "next/link"

const PIECES = [
  { name: "Solène Ring", meta: "18k gold · 1.2ct", price: "12,400", tint: "#2a2317" },
  { name: "Lumière Pendant", meta: "Platinum · 0.8ct", price: "8,900", tint: "#241f1a" },
  { name: "Astra Earrings", meta: "18k gold · pavé", price: "6,200", tint: "#2c2519" },
  { name: "Margaux Cuff", meta: "Brushed gold", price: "4,800", tint: "#221d15" },
  { name: "Étoile Necklace", meta: "Platinum · 1.5ct", price: "18,600", tint: "#272019" },
  { name: "Cœur Band", meta: "18k gold", price: "3,100", tint: "#231e16" },
]

/**
 * Noir collection — hairline product cards with serif names and gold price.
 */
export function ShopNoir() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] tracking-tight">The Collection</h2>
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Spring commissions</p>
        </div>

        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PIECES.map((p) => (
            <Link key={p.name} href="#" className="group flex flex-col bg-card p-5">
              <div
                className="relative aspect-square border border-border"
                style={{ background: `radial-gradient(circle at 50% 35%, ${p.tint}, var(--card) 72%)` }}
              >
                <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-primary py-2 text-center font-mono text-[10px] tracking-[0.25em] uppercase text-primary-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  View piece
                </span>
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <div>
                  <p className="font-serif text-lg tracking-tight">{p.name}</p>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{p.meta}</p>
                </div>
                <p className="font-serif text-primary">${p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
