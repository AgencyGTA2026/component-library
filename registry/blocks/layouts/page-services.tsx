import { BentoSoft } from "@/components/blocks/bento-soft"
import { CtaSoft } from "@/components/blocks/cta-soft"
import { FooterSoft } from "@/components/blocks/footer-soft"
import { HeaderSoft } from "@/components/blocks/header-soft"
import { HeroSoft } from "@/components/blocks/hero-soft"
import { PricingSoft } from "@/components/blocks/pricing-soft"
import { TestimonialsMarquee } from "@/components/blocks/testimonials-marquee"

/**
 * SaaS / services page composition (soft vibe) — hero through pricing to
 * CTA, pre-wired from seven blocks.
 */
export function PageServices() {
  return (
    <main>
      <HeaderSoft />
      <HeroSoft />
      <BentoSoft />
      <TestimonialsMarquee />
      <PricingSoft />
      <CtaSoft />
      <FooterSoft />
    </main>
  )
}
