import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

const TRAIL = [
  { label: "Home", href: "#", icon: Home },
  { label: "Services", href: "#" },
  { label: "Roof Replacement", href: "#" },
  { label: "Architectural Shingles" },
]

/**
 * Breadcrumbs — a page-context trail with a current-page marker. Pair
 * with deep service or content pages; reads from a simple array.
 */
export function Breadcrumbs() {
  return (
    <section className="border-b bg-background px-5 py-4 text-foreground sm:px-8">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm">
          {TRAIL.map((crumb, i) => {
            const last = i === TRAIL.length - 1
            return (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="font-medium text-foreground">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href ?? "#"}
                    className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {crumb.icon && <crumb.icon className="size-3.5" />}
                    {crumb.label}
                  </Link>
                )}
                {!last && <ChevronRight className="size-3.5 text-muted-foreground/60" />}
              </li>
            )
          })}
        </ol>
      </nav>
    </section>
  )
}
