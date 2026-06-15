import Link from "next/link"
import { Play } from "lucide-react"

const COLUMNS = [
  { title: "Studio", links: ["Work", "About", "Process", "Careers"] },
  { title: "Services", links: ["Brand films", "Title design", "Product motion", "3D"] },
  { title: "Connect", links: ["Instagram", "Vimeo", "LinkedIn", "Newsletter"] },
]

/**
 * Kinetic footer — intentionally still. A bold wordmark over tidy link columns.
 */
export function FooterKinetic() {
  return (
    <footer className="bg-foreground px-5 py-16 text-background sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-background/15 pb-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-[var(--radius)] bg-primary text-primary-foreground">
                <Play className="size-4" />
              </span>
              <span className="text-2xl font-black tracking-tight uppercase">Tempo</span>
            </div>
            <p className="mt-4 max-w-xs text-background/60">
              A motion design studio for brands that refuse to sit still.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-background/50">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-sm text-background/75 transition-colors hover:text-background">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-2 pt-6 text-xs tracking-wide uppercase text-background/45 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Tempo Studio</span>
          <span>Made in motion</span>
        </div>
      </div>
    </footer>
  )
}
