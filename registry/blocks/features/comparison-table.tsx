import { Check, X } from "lucide-react"

const ROWS = [
  "Free, no-obligation inspection",
  "Fixed written quote up front",
  "Licensed, bonded & insured crews",
  "Cleanup & nail sweep included",
  "10-year workmanship warranty",
  "Financing options on approved credit",
  "Answers the phone after 5pm",
]

/**
 * Comparison table — an "us vs. the other guys" grid that makes the
 * choice obvious. Edit the column headers to name your real alternative.
 */
export function ComparisonTable() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            Why us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            The difference is in the fine print.
          </h2>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div className="grid grid-cols-[1fr_auto_auto] items-stretch bg-card">
            <div className="p-4" />
            <div className="flex w-24 items-center justify-center bg-primary p-4 text-center text-sm font-bold text-primary-foreground sm:w-32">
              Our crew
            </div>
            <div className="flex w-24 items-center justify-center p-4 text-center text-sm font-medium text-muted-foreground sm:w-32">
              Typical guys
            </div>
          </div>

          {ROWS.map((row, i) => (
            <div
              key={row}
              className={`grid grid-cols-[1fr_auto_auto] items-center border-t ${
                i % 2 === 1 ? "bg-muted/40" : "bg-background"
              }`}
            >
              <p className="p-4 text-sm font-medium">{row}</p>
              <div className="flex w-24 justify-center p-4 sm:w-32">
                <span className="grid size-6 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" />
                </span>
              </div>
              <div className="flex w-24 justify-center p-4 sm:w-32">
                <span className="grid size-6 place-items-center rounded-full bg-muted text-muted-foreground">
                  <X className="size-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
