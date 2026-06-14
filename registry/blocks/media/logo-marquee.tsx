"use client"

import { motion } from "framer-motion"

const ROW_A = ["Aperture", "Northwind", "Vela", "Cobalt", "Lumen", "Pinewood", "Soapbox"]
const ROW_B = ["Quantive", "Almanac", "Driftwell", "Maple & Co", "Verdant", "Atlas", "Hearth"]

/**
 * Logo marquee — two rows of wordmarks scrolling in opposite directions,
 * pausing on hover. Animation-only (no logos shipped); replace the text
 * spans with client <img> logos. Distinct from the static logo-cloud.
 */
export function LogoMarquee() {
  return (
    <section className="overflow-hidden bg-background py-16 text-foreground">
      <p className="mb-10 text-center text-sm font-medium text-muted-foreground">
        Trusted by teams at every stage
      </p>

      <div className="space-y-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {[ROW_A, ROW_B].map((row, r) => (
          <div key={r} className="group flex overflow-hidden">
            <motion.div
              className="flex w-max items-center gap-16 pr-16 group-hover:[animation-play-state:paused]"
              animate={{ x: r === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {[...row, ...row].map((logo, i) => (
                <span
                  key={i}
                  className="font-serif text-2xl font-semibold tracking-tight whitespace-nowrap text-muted-foreground/50 transition-colors hover:text-foreground"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
