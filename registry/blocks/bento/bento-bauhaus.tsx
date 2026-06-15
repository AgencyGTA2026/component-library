import { Circle, Square, Triangle, Type } from "lucide-react"

/**
 * Bauhaus bento — a thick-keyline grid of flat primary-color cells.
 */
export function BentoBauhaus() {
  return (
    <section className="border-b-4 border-foreground bg-background px-5 py-16 text-foreground sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.92] tracking-tighter uppercase">
          Three shapes. Endless ideas.
        </h2>

        <div className="mt-10 grid auto-rows-[minmax(150px,auto)] gap-0 border-2 border-foreground sm:grid-cols-3">
          <div className="flex flex-col justify-between border-foreground bg-primary p-6 text-primary-foreground sm:col-span-2 sm:row-span-2 sm:border-r-2">
            <Circle className="size-10" />
            <div>
              <p className="text-2xl font-black uppercase">The colour workshop</p>
              <p className="mt-2 max-w-sm font-medium text-primary-foreground/85">
                Red, blue, yellow — and the discipline to use nothing else. Theory you can see.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between border-b-2 border-foreground bg-accent p-6">
            <Square className="size-8" />
            <p className="text-lg font-black uppercase">Typography</p>
          </div>

          <div className="flex flex-col justify-between bg-secondary p-6 text-secondary-foreground">
            <Triangle className="size-8" />
            <p className="text-lg font-black uppercase">Form studies</p>
          </div>

          <div className="flex items-center gap-4 border-t-2 border-foreground bg-card p-6 sm:col-span-3">
            <Type className="size-8 shrink-0" />
            <div>
              <p className="text-lg font-black uppercase">Print &amp; poster lab</p>
              <p className="font-medium text-muted-foreground">Set it, pull it, pin it on the wall.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
