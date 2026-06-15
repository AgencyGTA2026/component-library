import { HeaderCyber } from "@/components/blocks/header-cyber"
import { HeroCyber } from "@/components/blocks/hero-cyber"
import { BentoCyber } from "@/components/blocks/bento-cyber"
import { FeatureCyber } from "@/components/blocks/feature-cyber"
import { ParallaxCyber } from "@/components/blocks/parallax-cyber"
import { TestimonialsCyber } from "@/components/blocks/testimonials-cyber"
import { PricingCyber } from "@/components/blocks/pricing-cyber"
import { CtaCyber } from "@/components/blocks/cta-cyber"
import { FooterCyber } from "@/components/blocks/footer-cyber"

/**
 * Cyber neural-OS page (cyber vibe) — a complete one-pager pre-wired from
 * nine neon blocks. Drop into a `data-vibe="cyber"` wrapper.
 */
export function PageCyber() {
  return (
    <main>
      <HeaderCyber />
      <HeroCyber />
      <BentoCyber />
      <FeatureCyber />
      <ParallaxCyber />
      <TestimonialsCyber />
      <PricingCyber />
      <CtaCyber />
      <FooterCyber />
    </main>
  )
}
