import { Eye, Lock, Network, Zap } from "lucide-react"

const VALUES = [
  { icon: Network, title: "Open the grid", body: "Infrastructure should answer to its users, not its owners. We build for the runners.", glow: "primary" },
  { icon: Lock, title: "Privacy is armor", body: "Your traces are yours. Zero-knowledge by default, encrypted end to end, no backdoors.", glow: "accent" },
  { icon: Zap, title: "Speed is freedom", body: "Latency is a cage. Every cycle we shave is a cycle you spend ahead of the ICE.", glow: "primary" },
  { icon: Eye, title: "Stay invisible", body: "The best run is the one nobody logs. We obsess over leaving no trace behind.", glow: "accent" },
]

/**
 * Cyber about — manifesto cards with glowing neon icon frames.
 */
export function AboutCyber() {
  return (
    <section className="border-b border-primary/20 bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">// manifest.txt</p>
        <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.95] tracking-tight">
          Four rules we run by.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, body, glow }) => (
            <div
              key={title}
              className={`border bg-card p-6 ${glow === "accent" ? "border-accent/40" : "border-primary/40"}`}
            >
              <span
                className={`grid size-11 place-items-center border ${
                  glow === "accent"
                    ? "border-accent/50 text-accent shadow-[0_0_14px_rgba(255,0,229,0.45)]"
                    : "border-primary/50 text-primary shadow-[0_0_14px_rgba(34,211,238,0.45)]"
                }`}
              >
                <Icon className="size-5" />
              </span>
              <p className="mt-5 text-lg font-black">{title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
