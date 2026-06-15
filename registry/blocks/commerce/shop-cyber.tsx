import { Plus } from "lucide-react"

const GEAR = [
  { name: "Kiroshi Optics", meta: "Mk.IV implant", price: "2,400", glow: "primary" },
  { name: "Sandevistan", meta: "Reflex booster", price: "8,900", glow: "accent" },
  { name: "Mantis Blades", meta: "Arm cyberware", price: "5,200", glow: "primary" },
  { name: "Neural Port", meta: "Deck interface", price: "1,800", glow: "accent" },
  { name: "Subdermal Armor", meta: "Tier-3 plating", price: "3,600", glow: "primary" },
  { name: "Ping Daemon", meta: "Quickhack", price: "640", glow: "accent" },
]

/**
 * Cyber gear shop — glowing slate cards with neon prices and add buttons.
 */
export function ShopCyber() {
  return (
    <section className="border-b border-primary/20 bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight">// black_market</h2>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">eddies accepted</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GEAR.map((g) => (
            <div
              key={g.name}
              className={`group overflow-hidden border bg-card transition-all ${
                g.glow === "accent" ? "border-accent/40 hover:shadow-[0_0_24px_rgba(255,0,229,0.22)]" : "border-primary/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.22)]"
              }`}
            >
              <div className="relative grid h-40 place-items-center overflow-hidden bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(255,0,229,0.14))]">
                <div aria-hidden className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:100%_18px]" />
                <span className="relative font-mono text-xs tracking-[0.3em] uppercase text-foreground/60">{g.meta}</span>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="text-lg font-black">{g.name}</p>
                  <p className="font-mono text-sm text-primary">€$ {g.price}</p>
                </div>
                <button
                  aria-label={`Add ${g.name}`}
                  className="grid size-11 place-items-center border border-primary bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_16px_rgba(34,211,238,0.6)]"
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
