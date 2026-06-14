import { Leaf } from "lucide-react"

const GROUPS = [
  {
    name: "Lawn care",
    items: [
      { name: "Mow, edge & blow", note: "Per visit, up to ¼ acre", price: "$55" },
      { name: "Seasonal cleanup", note: "Spring or fall, hauling included", price: "$220" },
      { name: "Aeration & overseed", note: "Per ¼ acre", price: "$180" },
      { name: "Fertilization program", note: "6 applications / year", price: "$420" },
    ],
  },
  {
    name: "Garden & beds",
    items: [
      { name: "Mulch install", note: "Per yard, delivered & spread", price: "$95" },
      { name: "Planting & design", note: "Consult + install, from", price: "$650" },
      { name: "Pruning & shaping", note: "Per hour, two-person crew", price: "$110" },
    ],
  },
]

/**
 * Menu list — a price-list / service menu with dotted leaders. Reads
 * like a printed card; works for landscapers, salons, and restaurants.
 */
export function MenuList() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <Leaf className="mx-auto size-6 text-primary" />
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-balance sm:text-4xl">
            Services &amp; pricing
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Honest, published rates. Custom quotes for anything bigger.
          </p>
        </div>

        <div className="space-y-10">
          {GROUPS.map((group) => (
            <div key={group.name}>
              <h3 className="mb-4 font-mono text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                {group.name}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-3">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.note}</p>
                    </div>
                    <span className="mx-1 flex-1 translate-y-[-3px] border-b border-dotted border-border" />
                    <span className="font-mono font-semibold text-primary">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
