import { Boxes, Gauge, Megaphone, ShoppingCart, Wrench, Zap } from "lucide-react"

const SERVICES = [
  {
    icon: Zap,
    title: "Landing pages",
    body: "One page. One job. Conversion or bust.",
    big: true,
  },
  { icon: ShoppingCart, title: "E-commerce", body: "Stores that load before the doubt kicks in." },
  { icon: Gauge, title: "Performance", body: "Sub-second or we keep working." },
  { icon: Megaphone, title: "SEO", body: "Rankings you can screenshot." },
  { icon: Boxes, title: "Design systems", body: "Components, not chaos." },
  {
    icon: Wrench,
    title: "Retainers",
    body: "A crew on call. Fixed price, no surprise invoices, cancel monthly.",
    big: true,
  },
]

/**
 * Brutal bento — heavy bordered grid where every cell inverts to black
 * on hover and the icon picks up the accent.
 */
export function BentoBrutal() {
  return (
    <section className="border-y-4 border-foreground bg-background px-5 py-20 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-3 text-[clamp(2.25rem,6vw,4.5rem)] font-black leading-none tracking-tighter uppercase">
          What we <span className="bg-accent px-2">do</span>
        </h2>
        <p className="mb-12 max-w-md font-mono text-sm">
          Six things. Done loudly, shipped quietly, billed honestly.
        </p>

        <div className="grid border-2 border-foreground md:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className={`group -mt-px -ml-px border-2 border-foreground bg-background p-6 transition-colors duration-150 hover:bg-foreground hover:text-background ${
                s.big ? "md:col-span-2 md:row-span-1" : ""
              }`}
            >
              <s.icon className="size-8 transition-colors group-hover:text-accent" strokeWidth={2.5} />
              <h3 className="mt-10 text-xl font-black tracking-tight uppercase">
                {s.title}
              </h3>
              <p className="mt-2 font-mono text-sm leading-snug opacity-80">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
