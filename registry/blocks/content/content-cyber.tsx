import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const POSTS = [
  { cat: "Dispatch", title: "Routing daemons through hostile ICE", read: "7 min", glow: "primary" },
  { cat: "Field log", title: "What we learned breaking the Arasaka grid", read: "9 min", glow: "accent" },
  { cat: "Release", title: "v3.0: the neural compiler is live", read: "4 min", glow: "primary" },
]

/**
 * Cyber feed — glowing slate cards with mono category tags.
 */
export function ContentCyber() {
  return (
    <section className="border-b border-primary/20 bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-black tracking-tight">// the_feed</h2>
          <Link href="#" className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary">
            all_posts →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {POSTS.map((p) => (
            <Link
              key={p.title}
              href="#"
              className={`group flex min-h-[280px] flex-col justify-between border bg-card p-6 transition-all ${
                p.glow === "accent"
                  ? "border-accent/40 hover:shadow-[0_0_24px_rgba(255,0,229,0.25)]"
                  : "border-primary/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]"
              }`}
            >
              <span className={`w-fit border px-2 py-0.5 font-mono text-[10px] tracking-[0.2em] uppercase ${p.glow === "accent" ? "border-accent/50 text-accent" : "border-primary/50 text-primary"}`}>
                {p.cat}
              </span>
              <div>
                <h3 className="text-xl font-black leading-snug">{p.title}</h3>
                <p className="mt-3 flex items-center gap-1 font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  {p.read}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
