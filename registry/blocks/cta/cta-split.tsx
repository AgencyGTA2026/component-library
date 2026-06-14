import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

const POINTS = ["A senior team, start to finish", "Fixed price, dated schedule", "30 days of free fixes"]

/**
 * Split CTA — offer copy on one side, a media panel on the other, with a
 * hard editorial divider. Swap the gradient for a client image.
 */
export function CtaSplit() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl overflow-hidden border md:grid-cols-2">
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Booking Q3
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl">
            Let&apos;s make something worth bookmarking.
          </h2>
          <ul className="mt-7 space-y-2.5">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-sm">
                <Check className="size-4 text-primary" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-none px-8">
              <Link href="#contact">
                Start a project
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="#work">See the work</Link>
            </Button>
          </div>
        </div>

        <div className="relative min-h-72 border-t md:border-t-0 md:border-l">
          <div className="absolute inset-0 bg-[linear-gradient(150deg,color-mix(in_oklab,var(--primary)_85%,#000)_0%,var(--foreground)_100%)]">
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_70%_30%,color-mix(in_oklab,var(--accent)_60%,transparent),transparent_55%)]" />
            <p className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.25em] uppercase text-background/70">
              Fig. 09 — Next launch
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
