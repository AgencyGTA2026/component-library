import { BeforeAfter } from "@/components/blocks/before-after"
import { FooterEditorial } from "@/components/blocks/footer-editorial"
import { GalleryMasonry } from "@/components/blocks/gallery-masonry"
import { HeaderEditorial } from "@/components/blocks/header-editorial"
import { HeroEditorial } from "@/components/blocks/hero-editorial"
import { MenuList } from "@/components/blocks/menu-list"
import { ProcessSteps } from "@/components/blocks/process-steps"
import { ServiceArea } from "@/components/blocks/service-area"
import { TestimonialsStars } from "@/components/blocks/testimonials-stars"
import { TrustBadges } from "@/components/blocks/trust-badges"

/**
 * Landscaper site (landscape vibe) — a full local-business page from
 * brand intro through portfolio, pricing, and coverage. Wrap in
 * `data-vibe="landscape"`.
 */
export function PageLandscape() {
  return (
    <main>
      <HeaderEditorial />
      <HeroEditorial />
      <TrustBadges />
      <BeforeAfter />
      <ProcessSteps />
      <GalleryMasonry />
      <MenuList />
      <TestimonialsStars />
      <ServiceArea />
      <FooterEditorial />
    </main>
  )
}
