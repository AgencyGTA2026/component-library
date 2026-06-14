import Link from "next/link"
import { ArrowUpRight, Check, Minus } from "lucide-react"

import { Button } from "@/components/ui/button"

const TIERS = [
  {
    name: "Essay",
    price: "$6k",
    blurb: "A single page that says it all.",
    featured: false,
  },
  {
    name: "Volume",
    price: "$14k",
    blurb: "The full site, designed and built.",
    featured: true,
  },
  {
    name: "Anthology",
    price: "$30k+",
    blurb: "Brand, site, and launch campaign.",
    featured: false,
  },
]

const ROWS: { label: string; cells: (boolean | string)[] }[] = [
  { label: "Pages designed", cells: ["1", "Up to 10", "Unlimited"] },
  { label: "CMS & editing", cells: [false, true, true] },
  { label: "Copywriting", cells: ["Light edit", true, true] },
  { label: "Brand identity", cells: [false, false, true] },
  { label: "Launch support", cells: ["2 weeks", "30 days", "90 days"] },
]

/**
 * Editorial pricing — a typeset comparison table with hairline rules and
 * a featured middle column, like a rate card from a fine print shop.
 */
export function PricingEditorial() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-md font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl">
            Plain prices, printed in full.
          </h2>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Rate card — no. 7
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="w-1/4 border-b-2 border-foreground" />
                {TIERS.map((t) => (
                  <th
                    key={t.name}
                    className={`border-b-2 border-foreground p-5 text-left align-bottom ${
                      t.featured ? "bg-card" : ""
                    }`}
                  >
                    <p className="font-mono text-[11px] font-normal tracking-[0.2em] uppercase text-muted-foreground">
                      {t.featured ? "Most chosen" : "​"}
                    </p>
                    <p className="mt-1 font-serif text-2xl font-normal">{t.name}</p>
                    <p className="mt-1 text-3xl font-medium">{t.price}</p>
                    <p className="mt-1 font-normal text-muted-foreground">{t.blurb}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <td className="border-b py-4 pr-4 font-medium">{row.label}</td>
                  {row.cells.map((cell, i) => (
                    <td
                      key={i}
                      className={`border-b p-4 ${TIERS[i].featured ? "bg-card" : ""}`}
                    >
                      {cell === true ? (
                        <Check className="size-4 text-primary" />
                      ) : cell === false ? (
                        <Minus className="size-4 text-muted-foreground/50" />
                      ) : (
                        <span>{cell}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td />
                {TIERS.map((t) => (
                  <td key={t.name} className={`p-4 ${t.featured ? "bg-card" : ""}`}>
                    <Button
                      asChild
                      variant={t.featured ? "default" : "outline"}
                      className="w-full rounded-none"
                    >
                      <Link href="#contact">
                        Choose {t.name}
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          All engagements begin with a paid discovery sprint ($1,500), credited
          toward your project.
        </p>
      </div>
    </section>
  )
}
