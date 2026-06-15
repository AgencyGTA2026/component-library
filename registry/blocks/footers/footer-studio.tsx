import Link from "next/link"

const COLUMNS = [
  { title: "Studio", links: ["Classes", "Schedule", "Memberships", "The shop"] },
  { title: "About", links: ["The method", "Teachers", "Journal", "Careers"] },
  { title: "Visit", links: ["Find us", "First visit", "Gift cards", "Contact"] },
]

const SOCIALS = ["IG", "FB", "TT"]

/**
 * Studio footer — a calm serif wordmark over quiet hairline link columns.
 */
export function FooterStudio() {
  return (
    <footer className="border-t border-border bg-background px-6 py-16 text-foreground sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl tracking-tight">Méthode</p>
            <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
              A boutique reformer Pilates studio. Small classes, slow tempo, real attention.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="grid size-9 place-items-center rounded-full border border-border text-[11px] tracking-wide text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{col.title}</p>
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

        <div className="flex flex-col items-start justify-between gap-2 pt-6 text-xs tracking-[0.15em] uppercase text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Studio Méthode</span>
          <span>Made to move you</span>
        </div>
      </div>
    </footer>
  )
}
