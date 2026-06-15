import Link from "next/link"

const COLUMNS = [
  { title: "School", links: ["Foundation", "Workshops", "Masters", "Scholarships"] },
  { title: "Work", links: ["Student work", "Degree show", "The Bulletin", "Archive"] },
  { title: "Visit", links: ["Open day", "The Poster Shop", "Press", "Contact"] },
]

const SOCIALS = ["IG", "BE", "YT"]

/**
 * Bauhaus footer — a geometric mark and keyline link columns over a thick rule.
 */
export function FooterBauhaus() {
  return (
    <footer className="border-t-4 border-foreground bg-background px-5 py-14 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b-2 border-foreground pb-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex" aria-hidden>
                <span className="size-6 rounded-full bg-primary" />
                <span className="size-6 bg-accent" />
                <span className="size-6 rounded-bl-full bg-secondary" />
              </span>
              <span className="text-xl font-black uppercase tracking-tight">Werkbund</span>
            </div>
            <p className="mt-4 max-w-xs font-medium leading-relaxed text-muted-foreground">
              A school of design where form follows function — and the circle, square, and triangle
              do the talking.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="grid size-10 place-items-center border-2 border-foreground font-mono text-xs font-bold transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-primary">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-2 pt-5 font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Werkbund School</span>
          <span>Dessau · Berlin</span>
        </div>
      </div>
    </footer>
  )
}
