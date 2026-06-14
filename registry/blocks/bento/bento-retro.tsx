import { Droplet, Leaf, Recycle, Sparkles, Truck } from "lucide-react"

/**
 * Retro bento — playful rounded cells in bright Memphis colors.
 */
export function BentoRetro() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl text-[clamp(2rem,5vw,3.25rem)] font-black leading-[0.95] tracking-tight">
          Good stuff, all the way down.
        </h2>

        <div className="mt-10 grid auto-rows-[minmax(150px,auto)] gap-4 sm:grid-cols-3">
          <div className="flex flex-col justify-between rounded-3xl border-2 border-foreground bg-primary p-6 text-primary-foreground shadow-[5px_5px_0_0_var(--foreground)] sm:col-span-2 sm:row-span-2">
            <Sparkles className="size-9" />
            <div>
              <p className="text-2xl font-black">Real fruit, real flavor</p>
              <p className="mt-2 max-w-sm font-medium text-primary-foreground/80">
                Pressed, never powdered. Every can starts with something that grew.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border-2 border-foreground bg-accent p-6 shadow-[5px_5px_0_0_var(--foreground)]">
            <Leaf className="size-7" />
            <p className="text-lg font-black">Plant-based, gluten-free</p>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border-2 border-foreground bg-secondary p-6 text-secondary-foreground shadow-[5px_5px_0_0_var(--foreground)]">
            <Recycle className="size-7" />
            <p className="text-lg font-black">100% recyclable cans</p>
          </div>

          <div className="flex items-center gap-4 rounded-3xl border-2 border-foreground bg-card p-6 shadow-[5px_5px_0_0_var(--foreground)] sm:col-span-2">
            <Truck className="size-8 shrink-0" />
            <div>
              <p className="text-lg font-black">Free shipping on cases</p>
              <p className="font-medium text-muted-foreground">Doorstep in 2–4 days, cold-pack included.</p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border-2 border-foreground bg-card p-6 shadow-[5px_5px_0_0_var(--foreground)]">
            <Droplet className="size-7" />
            <p className="text-lg font-black">Only 40 calories</p>
          </div>
        </div>
      </div>
    </section>
  )
}
