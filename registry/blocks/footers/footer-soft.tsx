import Link from "next/link"
import { Leaf } from "lucide-react"

import { Button } from "@/components/ui/button"

const COLUMNS = [
  { heading: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
  { heading: "Company", links: ["About", "Customers", "Careers", "Contact"] },
  { heading: "Resources", links: ["Help center", "Guides", "API docs", "Status"] },
]

/**
 * Soft footer — a gradient CTA card floats above calm link columns and a
 * rounded social row.
 */
export function FooterSoft() {
  return (
    <footer className="bg-background px-4 pb-10 text-foreground">
      <div className="relative mx-auto -mb-14 max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-secondary-foreground p-10 text-center text-primary-foreground shadow-2xl shadow-primary/30 sm:p-14">
        <div className="absolute -top-20 -right-16 size-56 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 size-64 rounded-full bg-primary-foreground/10 blur-3xl" />
        <h2 className="relative text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Mornings feel different with Driftwell.
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-primary-foreground/80">
          Join 40,000 people building gentler routines. Free for 30 days, no
          card required.
        </p>
        <Button asChild size="lg" variant="secondary" className="relative mt-7 rounded-full px-8">
          <Link href="#start">Start your trial</Link>
        </Button>
      </div>

      <div className="mx-auto max-w-6xl rounded-[2rem] border bg-card px-8 pt-24 pb-8 sm:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="#" className="flex items-center gap-2 font-semibold">
              <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
                <Leaf className="size-4" />
              </span>
              Driftwell
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The gentle habit tracker for people who are tired of being
              yelled at by their apps.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="mb-3 text-sm font-semibold">{col.heading}</p>
                <ul className="space-y-2.5">
                  {col.links.map((label) => (
                    <li key={label}>
                      <Link
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Driftwell, Inc.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-primary">Privacy</Link>
            <Link href="#" className="hover:text-primary">Terms</Link>
            <Link href="#" className="hover:text-primary">Twitter</Link>
            <Link href="#" className="hover:text-primary">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
