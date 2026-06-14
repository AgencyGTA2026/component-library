import { BentoEditorial } from "@/components/blocks/bento-editorial"
import { FaqAccordion } from "@/components/blocks/faq-accordion"
import { FooterEditorial } from "@/components/blocks/footer-editorial"
import { FormContact } from "@/components/blocks/form-contact"
import { HeaderEditorial } from "@/components/blocks/header-editorial"
import { HeroEditorial } from "@/components/blocks/hero-editorial"
import { StatsBand } from "@/components/blocks/stats-band"
import { TestimonialsEditorial } from "@/components/blocks/testimonials-editorial"

/**
 * Landing page composition (editorial vibe) — a complete one-pager
 * pre-wired from eight blocks. Install it, swap the copy, ship.
 */
export function PageLanding() {
  return (
    <main>
      <HeaderEditorial />
      <HeroEditorial />
      <StatsBand />
      <BentoEditorial />
      <TestimonialsEditorial />
      <FaqAccordion />
      <FormContact />
      <FooterEditorial />
    </main>
  )
}
