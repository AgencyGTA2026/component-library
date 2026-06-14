import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * Retro CTA — a bold rounded banner with floating Memphis shapes.
 */
export function CtaRetro() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border-2 border-foreground bg-primary px-6 py-14 text-center text-primary-foreground shadow-[8px_8px_0_0_var(--foreground)] sm:px-10 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-6 top-6 size-24 rounded-full border-[10px] border-accent/60" />
          <div className="absolute right-8 bottom-6 size-16 rotate-12 rounded-2xl bg-secondary" />
          <div className="absolute right-1/3 top-8 size-5 rounded-full bg-accent" />
        </div>

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-[clamp(2rem,6vw,4rem)] font-black leading-[0.95] tracking-tight">
            Your fridge called. It wants color.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg font-medium text-primary-foreground/85">
            Grab a sampler and find your flavor. First case ships free.
          </p>
          <Link
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-accent px-8 py-4 text-lg font-black text-foreground shadow-[5px_5px_0_0_var(--foreground)] transition-transform hover:-translate-y-1"
          >
            Shop the sampler <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
