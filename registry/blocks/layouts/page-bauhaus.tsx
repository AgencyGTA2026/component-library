import { HeaderBauhaus } from "@/components/blocks/header-bauhaus"
import { HeroBauhaus } from "@/components/blocks/hero-bauhaus"
import { BentoBauhaus } from "@/components/blocks/bento-bauhaus"
import { FeatureBauhaus } from "@/components/blocks/feature-bauhaus"
import { ParallaxBauhaus } from "@/components/blocks/parallax-bauhaus"
import { TestimonialsBauhaus } from "@/components/blocks/testimonials-bauhaus"
import { PricingBauhaus } from "@/components/blocks/pricing-bauhaus"
import { CtaBauhaus } from "@/components/blocks/cta-bauhaus"
import { FooterBauhaus } from "@/components/blocks/footer-bauhaus"

/**
 * Bauhaus design-school page (bauhaus vibe) — a complete one-pager pre-wired
 * from nine constructivist blocks. Drop into a `data-vibe="bauhaus"` wrapper.
 */
export function PageBauhaus() {
  return (
    <main>
      <HeaderBauhaus />
      <HeroBauhaus />
      <BentoBauhaus />
      <FeatureBauhaus />
      <ParallaxBauhaus />
      <TestimonialsBauhaus />
      <PricingBauhaus />
      <CtaBauhaus />
      <FooterBauhaus />
    </main>
  )
}
