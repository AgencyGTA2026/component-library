import { HeaderStudio } from "@/components/blocks/header-studio"
import { HeroStudio } from "@/components/blocks/hero-studio"
import { BentoStudio } from "@/components/blocks/bento-studio"
import { FeatureStudio } from "@/components/blocks/feature-studio"
import { ParallaxStudio } from "@/components/blocks/parallax-studio"
import { TestimonialsStudio } from "@/components/blocks/testimonials-studio"
import { PricingStudio } from "@/components/blocks/pricing-studio"
import { CtaStudio } from "@/components/blocks/cta-studio"
import { FooterStudio } from "@/components/blocks/footer-studio"

/**
 * Studio Pilates page (studio vibe) — a complete one-pager pre-wired from
 * nine calm, airy blocks. Drop into a `data-vibe="studio"` wrapper.
 */
export function PageStudio() {
  return (
    <main>
      <HeaderStudio />
      <HeroStudio />
      <BentoStudio />
      <FeatureStudio />
      <ParallaxStudio />
      <TestimonialsStudio />
      <PricingStudio />
      <CtaStudio />
      <FooterStudio />
    </main>
  )
}
