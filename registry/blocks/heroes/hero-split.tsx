import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

/**
 * Split hero — a full-bleed media half beside a copy half, flush to the
 * page edges. Swap the gradient panel for a hero photograph.
 */
export function HeroSplit() {
  return (
    <section className="bg-background text-foreground">
      <div className="grid min-h-[70vh] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto w-full max-w-lg">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
              Family-owned since 2014
            </p>
            <h1 className="mt-6 font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] tracking-tight text-balance">
              Care for your home, the way you&apos;d do it yourself.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Honest pricing, tidy work, and people who treat your place like
              it&apos;s theirs. That&apos;s the whole idea.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#quote">Get a free quote <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:+15551234567"><Phone className="size-4" /> (555) 123-4567</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative min-h-72 overflow-hidden bg-[linear-gradient(150deg,color-mix(in_oklab,var(--primary)_80%,#000)_0%,var(--foreground)_100%)]">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_70%_25%,color-mix(in_oklab,var(--accent)_60%,transparent),transparent_55%)]" />
          <div className="absolute bottom-6 left-6 rounded-xl bg-background/90 px-5 py-4 shadow-lg backdrop-blur">
            <p className="text-2xl font-semibold">4.9★</p>
            <p className="text-sm text-muted-foreground">600+ five-star reviews</p>
          </div>
        </div>
      </div>
    </section>
  )
}
