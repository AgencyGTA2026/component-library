import Link from "next/link"

const COLUMNS = [
  { title: "Maison", links: ["Heritage", "The atelier", "Journal", "Careers"] },
  { title: "Collections", links: ["Engagement", "High jewellery", "Bespoke", "Restoration"] },
  { title: "Client care", links: ["Book a viewing", "Shipping", "Guarantee", "Contact"] },
]

const SOCIALS = ["IG", "PIN", "YT"]

/**
 * Noir footer — hairline link columns beneath a serif wordmark and gold rule.
 */
export function FooterNoir() {
  return (
    <footer className="border-t border-border bg-background px-5 py-16 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl tracking-[0.2em] uppercase">Aurum</p>
            <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
              Fine jewellery, drawn by hand and set under the loupe. Maison Aurum, since 1924.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="grid size-9 place-items-center border border-border font-mono text-[10px] tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
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

        <div className="flex flex-col items-start justify-between gap-3 pt-6 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Maison Aurum</span>
          <span>Paris · London · New York</span>
        </div>
      </div>
    </footer>
  )
}
