import Link from "next/link"
import { Terminal } from "lucide-react"

const COLUMNS = [
  { title: "Product", links: ["Console", "Modules", "Pricing", "Changelog"] },
  { title: "Runners", links: ["Docs", "The feed", "Status", "Mesh map"] },
  { title: "Crew", links: ["Manifesto", "Careers", "Press", "Contact"] },
]

const SOCIALS = ["X", "DC", "GH", "TG"]

/**
 * Cyber footer — a glowing mono mark over neon link columns.
 */
export function FooterCyber() {
  return (
    <footer className="border-t border-primary/30 bg-background px-5 py-14 text-foreground shadow-[0_-1px_0_0_rgba(34,211,238,0.4)] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-border pb-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center border border-primary/50 bg-primary/10 text-primary shadow-[0_0_12px_rgba(34,211,238,0.5)]">
                <Terminal className="size-4" />
              </span>
              <span className="font-mono text-lg font-bold tracking-[0.15em] uppercase">Nexen</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The neural OS for netrunners. Compile intent, deploy daemons, own the grid.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="grid size-9 place-items-center border border-primary/40 font-mono text-[10px] tracking-widest text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_12px_rgba(34,211,238,0.45)]"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-2 pt-5 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Nexen Systems</span>
          <span>// built on the grid</span>
        </div>
      </div>
    </footer>
  )
}
