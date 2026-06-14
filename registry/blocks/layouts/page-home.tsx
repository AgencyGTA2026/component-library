import { BookingScheduler } from "@/components/blocks/booking-scheduler"
import { ContactInfo } from "@/components/blocks/contact-info"
import { FaqCards } from "@/components/blocks/faq-cards"
import { FooterSoft } from "@/components/blocks/footer-soft"
import { Guarantee } from "@/components/blocks/guarantee"
import { HeaderSoft } from "@/components/blocks/header-soft"
import { HeroSoft } from "@/components/blocks/hero-soft"
import { ProcessSteps } from "@/components/blocks/process-steps"
import { ServiceArea } from "@/components/blocks/service-area"
import { TestimonialsStars } from "@/components/blocks/testimonials-stars"
import { TrustBadges } from "@/components/blocks/trust-badges"

/**
 * Home-services site (services vibe) — HVAC / plumbing / electrical page
 * with online booking and trust building. Wrap in `data-vibe="services"`.
 */
export function PageHome() {
  return (
    <main>
      <HeaderSoft />
      <HeroSoft />
      <TrustBadges />
      <ServiceArea />
      <ProcessSteps />
      <BookingScheduler />
      <TestimonialsStars />
      <Guarantee />
      <FaqCards />
      <ContactInfo />
      <FooterSoft />
    </main>
  )
}
