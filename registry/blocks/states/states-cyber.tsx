import Link from "next/link"

/**
 * Cyber 404 — a glitched neon error code over a scanline grid backdrop.
 */
export function StatesCyber() {
  return (
    <section className="relative grid min-h-[560px] place-items-center overflow-hidden border-b border-primary/20 bg-background px-5 py-20 text-center text-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute left-1/2 top-1/2 size-[55vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,0,229,0.16),transparent_65%)]" />
      </div>

      <div className="relative">
        <p className="font-mono text-[clamp(5rem,20vw,12rem)] font-black leading-none tracking-tight text-primary [text-shadow:4px_0_0_rgba(255,0,229,0.6),-4px_0_0_rgba(34,211,238,0.6)]">
          404
        </p>
        <p className="font-mono text-sm tracking-[0.3em] uppercase text-accent">// trace_lost</p>
        <h1 className="mt-5 text-3xl font-black tracking-tight">This node dropped off the grid</h1>
        <p className="mx-auto mt-3 max-w-sm text-muted-foreground">
          The route you ran no longer resolves. Reconnect to a live node below.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="#" className="border border-primary bg-primary px-7 py-3 font-mono text-sm tracking-[0.15em] uppercase text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]">
            Reconnect
          </Link>
          <Link href="#" className="border border-primary/40 px-7 py-3 font-mono text-sm tracking-[0.15em] uppercase text-primary hover:bg-primary/10">
            Console
          </Link>
        </div>
      </div>
    </section>
  )
}
