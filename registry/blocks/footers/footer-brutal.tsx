import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const LINKS = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Process", "#process"],
  ["Journal", "#journal"],
  ["Contact", "#contact"],
] as const

const SOCIALS = ["IG", "X", "LI", "BE"] as const

/**
 * Brutal footer — everything lives in a bordered grid; the centerpiece
 * is a screaming "LET'S WORK" cell that inverts on hover.
 */
export function FooterBrutal() {
  return (
    <footer className="border-t-4 border-foreground bg-background text-foreground">
      <Link
        href="#contact"
        className="group flex items-center justify-between px-5 py-10 transition-colors hover:bg-foreground hover:text-background sm:px-8"
      >
        <span className="text-[clamp(2.5rem,9vw,7rem)] font-black leading-none tracking-tighter uppercase">
          Let&apos;s work
        </span>
        <ArrowUpRight className="size-[clamp(2.5rem,7vw,5rem)] transition-transform group-hover:rotate-45" />
      </Link>

      <div className="grid border-t-2 border-foreground sm:grid-cols-2 md:grid-cols-4">
        <div className="border-b-2 border-foreground p-5 sm:border-r-2 md:border-b-0">
          <p className="text-xl font-black uppercase">Tonne®</p>
          <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
            Industrial-strength websites.
            <br />
            Antwerp / Remote.
          </p>
        </div>

        <nav className="grid border-b-2 border-foreground sm:border-r-0 md:border-r-2 md:border-b-0">
          {LINKS.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="flex items-center justify-between border-b-2 border-foreground px-5 py-2 text-sm font-bold uppercase last:border-b-0 hover:bg-accent"
            >
              {label}
              <span aria-hidden>→</span>
            </Link>
          ))}
        </nav>

        <div className="border-b-2 border-foreground p-5 sm:border-r-2 sm:border-b-0">
          <p className="mb-3 font-mono text-xs uppercase">Elsewhere</p>
          <div className="flex flex-wrap gap-2">
            {SOCIALS.map((s) => (
              <Link
                key={s}
                href="#"
                className="grid size-10 place-items-center border-2 border-foreground font-mono text-xs font-bold shadow-[3px_3px_0_0_var(--foreground)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between p-5">
          <p className="font-mono text-xs leading-relaxed text-muted-foreground">
            No cookies. No trackers.
            <br />
            Just borders.
          </p>
          <p className="mt-6 font-mono text-xs font-bold uppercase">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
