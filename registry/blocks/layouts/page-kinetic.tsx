import { HeaderKinetic } from "@/components/blocks/header-kinetic"
import { HeroKinetic } from "@/components/blocks/hero-kinetic"
import { BentoKinetic } from "@/components/blocks/bento-kinetic"
import { FeatureKinetic } from "@/components/blocks/feature-kinetic"
import { ParallaxKinetic } from "@/components/blocks/parallax-kinetic"
import { StatsKinetic } from "@/components/blocks/stats-kinetic"
import { TestimonialsKinetic } from "@/components/blocks/testimonials-kinetic"
import { PricingKinetic } from "@/components/blocks/pricing-kinetic"
import { CtaKinetic } from "@/components/blocks/cta-kinetic"
import { FooterKinetic } from "@/components/blocks/footer-kinetic"

/**
 * Kinetic motion-studio page (kinetic vibe) — a complete one-pager pre-wired from ten
 * animation-forward blocks. Drop into a `data-vibe="kinetic"` wrapper.
 */
export function PageKinetic() {
  return (
    <main>
      <HeaderKinetic />
      <HeroKinetic />
      <BentoKinetic />
      <FeatureKinetic />
      <ParallaxKinetic />
      <StatsKinetic />
      <TestimonialsKinetic />
      <PricingKinetic />
      <CtaKinetic />
      <FooterKinetic />
    </main>
  )
}
