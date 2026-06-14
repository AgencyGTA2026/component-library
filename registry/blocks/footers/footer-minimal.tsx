import Link from "next/link"

const LINKS = ["Work", "Studio", "Journal", "Contact"]

/**
 * Minimal footer — wordmark, a compact link row, and a copyright line on
 * a single hairline-topped band. For sites that end quietly.
 */
export function FooterMinimal() {
  return (
    <footer className="border-t bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-8 sm:flex-row sm:px-8">
        <Link href="#" className="font-serif text-xl tracking-tight">
          Harbor<span className="italic text-primary">&amp;</span>Pine
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {LINKS.map((l) => (
            <Link key={l} href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </Link>
          ))}
        </nav>

        <p className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
