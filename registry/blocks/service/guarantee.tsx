import { Check, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"

const POINTS = [
  "If a repair fails within the warranty period, we fix it free — parts and labor.",
  "Upfront, itemized pricing. No overtime charges, no surprise fees, ever.",
  "Don't love the work? We'll make it right or refund the visit. Simple.",
]

/**
 * Guarantee — a warranty / satisfaction callout with a seal graphic and
 * plain-English promises. Removes risk right before the CTA.
 */
export function Guarantee() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border bg-card">
        <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-[auto_1fr]">
          <div className="relative mx-auto grid size-40 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-primary-foreground/40" />
            <div className="text-center">
              <ShieldCheck className="mx-auto size-9" />
              <p className="mt-1 text-xs font-bold tracking-widest uppercase">100%</p>
              <p className="text-[10px] tracking-wide uppercase opacity-80">Guaranteed</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              Our no-nonsense satisfaction guarantee.
            </h2>
            <ul className="mt-6 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8" size="lg">
              Schedule your free estimate
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
