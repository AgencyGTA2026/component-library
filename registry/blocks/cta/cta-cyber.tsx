import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * Cyber CTA — a neon-bordered panel over a glowing grid with a charged button.
 */
export function CtaCyber() {
  return (
    <section className="border-b border-primary/20 bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden border border-primary/50 bg-card px-6 py-16 text-center shadow-[0_0_40px_rgba(34,211,238,0.18)] sm:px-10 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="absolute left-1/2 top-0 size-[40vw] max-w-[480px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(255,0,229,0.2),transparent_65%)]" />
        </div>

        <div className="relative">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent">// ready_to_run</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-[clamp(2rem,6vw,4rem)] font-black leading-[0.95] tracking-tight">
            The grid is open. Are you?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            Spin up a free rig in under a minute. No card, no contract, no corp watching.
          </p>
          <Link
            href="#"
            className="mt-8 inline-flex items-center gap-2 border border-primary bg-primary px-8 py-4 font-mono text-base tracking-[0.15em] uppercase text-primary-foreground transition-all hover:shadow-[0_0_28px_rgba(34,211,238,0.7)]"
          >
            Jack in free <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
