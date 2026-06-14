import { BeforeAfter } from "@/components/blocks/before-after"
import { ComparisonTable } from "@/components/blocks/comparison-table"
import { CtaCall } from "@/components/blocks/cta-call"
import { FaqCards } from "@/components/blocks/faq-cards"
import { FooterBrutal } from "@/components/blocks/footer-brutal"
import { HeaderBrutal } from "@/components/blocks/header-brutal"
import { HeroBrutal } from "@/components/blocks/hero-brutal"
import { ProcessSteps } from "@/components/blocks/process-steps"
import { StatCards } from "@/components/blocks/stat-cards"
import { TrustBadges } from "@/components/blocks/trust-badges"

/**
 * Roofing / contractor site (trade vibe) — proof-forward page built to
 * book inspections. Wrap in `data-vibe="trade"`.
 */
export function PageTrade() {
  return (
    <main>
      <HeaderBrutal />
      <HeroBrutal />
      <TrustBadges />
      <ProcessSteps />
      <ComparisonTable />
      <BeforeAfter />
      <StatCards />
      <FaqCards />
      <CtaCall />
      <FooterBrutal />
    </main>
  )
}
