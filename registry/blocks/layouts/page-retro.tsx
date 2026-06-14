import { HeaderRetro } from "@/components/blocks/header-retro"
import { HeroRetro } from "@/components/blocks/hero-retro"
import { BentoRetro } from "@/components/blocks/bento-retro"
import { FeatureRetro } from "@/components/blocks/feature-retro"
import { ParallaxRetro } from "@/components/blocks/parallax-retro"
import { TestimonialsRetro } from "@/components/blocks/testimonials-retro"
import { PricingRetro } from "@/components/blocks/pricing-retro"
import { CtaRetro } from "@/components/blocks/cta-retro"
import { FooterRetro } from "@/components/blocks/footer-retro"

/**
 * Retro soda-brand page (retro vibe) — a complete one-pager pre-wired
 * from nine playful Memphis blocks. Drop into a `data-vibe="retro"` wrapper.
 */
export function PageRetro() {
  return (
    <main>
      <HeaderRetro />
      <HeroRetro />
      <BentoRetro />
      <FeatureRetro />
      <ParallaxRetro />
      <TestimonialsRetro />
      <PricingRetro />
      <CtaRetro />
      <FooterRetro />
    </main>
  )
}
