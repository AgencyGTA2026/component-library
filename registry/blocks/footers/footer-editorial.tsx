import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const COLUMNS = [
  {
    heading: "Studio",
    links: ["About", "Process", "Careers", "Press"],
  },
  {
    heading: "Work",
    links: ["Case studies", "Industries", "Archive"],
  },
  {
    heading: "Connect",
    links: ["Instagram", "LinkedIn", "Are.na", "Newsletter"],
  },
]

/**
 * Editorial footer — link columns over hairlines, a contact invitation,
 * and a giant serif wordmark bleeding off the bottom edge.
 */
export function FooterEditorial() {
  return (
    <footer className="overflow-hidden border-t bg-background text-foreground">
      <div className="grid gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_2fr]">
        <div className="space-y-6">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            New business
          </p>
          <Link
            href="mailto:hello@harborandpine.com"
            className="group inline-flex items-baseline gap-2 font-serif text-2xl sm:text-3xl"
          >
            hello@harborandpine.com
            <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            A design studio for brands that would rather be remembered than
            merely noticed.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 border-b pb-2 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className="text-sm transition-colors hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t px-5 py-3 font-mono text-[11px] tracking-widest uppercase text-muted-foreground sm:px-8">
        <span>© {new Date().getFullYear()} Harbor &amp; Pine</span>
        <span>45.5152° N, 122.6784° W</span>
      </div>

      <p
        aria-hidden
        className="-mb-[0.23em] select-none px-5 text-center font-serif text-[clamp(4rem,16.5vw,15rem)] leading-none tracking-tight text-foreground/90 sm:px-8"
      >
        Harbor<span className="italic text-primary">&amp;</span>Pine
      </p>
    </footer>
  )
}
