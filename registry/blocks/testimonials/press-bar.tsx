const OUTLETS = ["The Tribune", "Local Living", "Home & Hearth", "City Press", "Trade Weekly"]

/**
 * Press bar — a slim "as seen in" strip of outlet wordmarks over a
 * hairline divider. Lighter than the awards-press section; drops neatly
 * under a hero. Swap the text for publication logos.
 */
export function PressBar() {
  return (
    <section className="border-y bg-background px-5 py-6 text-foreground sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:gap-8">
        <p className="shrink-0 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">As seen in</p>
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-between">
          {OUTLETS.map((o) => (
            <span key={o} className="font-serif text-lg font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground">
              {o}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
