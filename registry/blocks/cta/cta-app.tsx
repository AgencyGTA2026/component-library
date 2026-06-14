import { Apple, Play, Star } from "lucide-react"

/**
 * App download CTA — a phone mockup beside store badges and a QR slot.
 * Swap the lucide marks for official App Store / Google Play artwork.
 */
export function CtaApp() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border bg-gradient-to-br from-primary to-secondary-foreground text-primary-foreground">
        <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 text-sm">
              <span className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              <span className="opacity-80">4.9 · 18k ratings</span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Take it with you. It&apos;s nicer on your phone.
            </h2>
            <p className="mt-3 max-w-md text-primary-foreground/80">
              Log habits, get gentle nudges, and check your streak from
              anywhere. Free on iOS and Android.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#ios"
                className="flex items-center gap-3 rounded-xl bg-background px-5 py-3 text-foreground transition-transform hover:-translate-y-0.5"
              >
                <Apple className="size-6" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] uppercase opacity-70">Download on the</span>
                  <span className="block text-base font-semibold">App Store</span>
                </span>
              </a>
              <a
                href="#android"
                className="flex items-center gap-3 rounded-xl bg-background px-5 py-3 text-foreground transition-transform hover:-translate-y-0.5"
              >
                <Play className="size-6 fill-current" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] uppercase opacity-70">Get it on</span>
                  <span className="block text-base font-semibold">Google Play</span>
                </span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto hidden h-80 w-44 lg:block">
            {/* Phone mockup slot — drop in an app screenshot. */}
            <div className="absolute inset-0 rounded-[2rem] border-4 border-background/30 bg-background/10 backdrop-blur" />
            <div className="absolute inset-3 overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-background/25 to-background/5">
              <div className="absolute top-3 left-1/2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-background/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
