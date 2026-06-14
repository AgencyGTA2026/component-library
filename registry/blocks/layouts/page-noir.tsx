import { HeaderNoir } from "@/components/blocks/header-noir"
import { HeroNoir } from "@/components/blocks/hero-noir"
import { BentoNoir } from "@/components/blocks/bento-noir"
import { FeatureNoir } from "@/components/blocks/feature-noir"
import { ParallaxNoir } from "@/components/blocks/parallax-noir"
import { ShopNoir } from "@/components/blocks/shop-noir"
import { TestimonialsNoir } from "@/components/blocks/testimonials-noir"
import { PricingNoir } from "@/components/blocks/pricing-noir"
import { CtaNoir } from "@/components/blocks/cta-noir"
import { FooterNoir } from "@/components/blocks/footer-noir"

/**
 * Noir jewellery-maison page (noir vibe) — a complete one-pager pre-wired
 * from ten dark-luxury blocks. Drop into a `data-vibe="noir"` wrapper.
 */
export function PageNoir() {
  return (
    <main>
      <HeaderNoir />
      <HeroNoir />
      <BentoNoir />
      <FeatureNoir />
      <ParallaxNoir />
      <ShopNoir />
      <TestimonialsNoir />
      <PricingNoir />
      <CtaNoir />
      <FooterNoir />
    </main>
  )
}
