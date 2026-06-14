import Link from "next/link"
import { ArrowRight, Asterisk } from "lucide-react"

/**
 * Brutal CTA — a full-bleed accent banner with a mega headline, hard
 * shadow button, and rotated detail stickers.
 */
export function CtaBrutal() {
  return (
    <section className="relative overflow-hidden border-y-4 border-foreground bg-accent px-5 py-20 text-accent-foreground sm:px-8 sm:py-28">
      <Asterisk
        aria-hidden
        className="absolute -top-10 -right-10 size-48 rotate-12 opacity-15"
        strokeWidth={1}
      />
      <Asterisk
        aria-hidden
        className="absolute -bottom-14 -left-10 size-56 -rotate-12 opacity-15"
        strokeWidth={1}
      />

      <div className="relative mx-auto max-w-5xl">
        <p className="inline-block -rotate-2 border-2 border-foreground bg-background px-3 py-1 font-mono text-xs font-bold uppercase">
          Zero-pressure intro call
        </p>
        <h2 className="mt-6 text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.92] tracking-tighter uppercase">
          Your website is costing you money{" "}
          <span className="bg-foreground px-3 text-accent">right now.</span>
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 border-2 border-foreground bg-foreground px-8 py-4 text-lg font-black uppercase text-background shadow-[6px_6px_0_0_var(--background)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_var(--background)]"
          >
            Fix it
            <ArrowRight className="size-5" />
          </Link>
          <p className="max-w-xs font-mono text-sm font-bold leading-snug">
            30 minutes. We&apos;ll tell you what&apos;s broken even if you
            don&apos;t hire us.
          </p>
        </div>
      </div>
    </section>
  )
}
