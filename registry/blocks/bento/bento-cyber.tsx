import { Cpu, Shield, Radio, GitBranch, Activity } from "lucide-react"

/**
 * Cyber bento — glowing slate panels with neon icon accents.
 */
export function BentoCyber() {
  return (
    <section className="border-b border-primary/20 bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">// system.modules</p>
        <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.95] tracking-tight">
          A full deck, out of the box.
        </h2>

        <div className="mt-10 grid auto-rows-[minmax(150px,auto)] gap-4 sm:grid-cols-3">
          <div className="flex flex-col justify-between border border-primary/40 bg-card p-6 shadow-[0_0_24px_rgba(34,211,238,0.12)] sm:col-span-2 sm:row-span-2">
            <Cpu className="size-9 text-primary" />
            <div>
              <p className="text-2xl font-black">Neural compiler</p>
              <p className="mt-2 max-w-sm text-muted-foreground">
                Turn raw intent into deployable daemons in milliseconds. No syntax, just signal.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between border border-accent/40 bg-card p-6 shadow-[0_0_24px_rgba(255,0,229,0.12)]">
            <Shield className="size-7 text-accent" />
            <p className="text-lg font-black">ICE-breaker firewall</p>
          </div>

          <div className="flex flex-col justify-between border border-border bg-card p-6">
            <Radio className="size-7 text-primary" />
            <p className="text-lg font-black">Mesh uplink</p>
          </div>

          <div className="flex items-center gap-4 border border-border bg-card p-6 sm:col-span-2">
            <GitBranch className="size-7 shrink-0 text-primary" />
            <div>
              <p className="text-lg font-black">Fork &amp; hot-swap daemons</p>
              <p className="text-muted-foreground">Version your runs, roll back on a bad trace.</p>
            </div>
          </div>

          <div className="flex flex-col justify-between border border-border bg-card p-6">
            <Activity className="size-7 text-accent" />
            <p className="text-lg font-black">Live trace monitor</p>
          </div>
        </div>
      </div>
    </section>
  )
}
