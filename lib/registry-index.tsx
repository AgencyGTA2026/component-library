import type * as React from "react"

import { BentoBrutal } from "@/registry/blocks/bento/bento-brutal"
import { BentoEditorial } from "@/registry/blocks/bento/bento-editorial"
import { BentoSoft } from "@/registry/blocks/bento/bento-soft"
import { CalcEstimator } from "@/registry/blocks/calculators/calc-estimator"
import { CalcLoan } from "@/registry/blocks/calculators/calc-loan"
import { CalcRoi } from "@/registry/blocks/calculators/calc-roi"
import { CtaBrutal } from "@/registry/blocks/cta/cta-brutal"
import { CtaSoft } from "@/registry/blocks/cta/cta-soft"
import { FooterBrutal } from "@/registry/blocks/footers/footer-brutal"
import { FooterEditorial } from "@/registry/blocks/footers/footer-editorial"
import { FooterSoft } from "@/registry/blocks/footers/footer-soft"
import { FormContact } from "@/registry/blocks/forms/form-contact"
import { FormNewsletter } from "@/registry/blocks/forms/form-newsletter"
import { FormQuoteWizard } from "@/registry/blocks/forms/form-quote-wizard"
import { HeaderBrutal } from "@/registry/blocks/headers/header-brutal"
import { HeaderEditorial } from "@/registry/blocks/headers/header-editorial"
import { HeaderSoft } from "@/registry/blocks/headers/header-soft"
import { HeroBento } from "@/registry/blocks/heroes/hero-bento"
import { HeroBrutal } from "@/registry/blocks/heroes/hero-brutal"
import { HeroEditorial } from "@/registry/blocks/heroes/hero-editorial"
import { HeroSoft } from "@/registry/blocks/heroes/hero-soft"
import { PageLanding } from "@/registry/blocks/layouts/page-landing"
import { PageServices } from "@/registry/blocks/layouts/page-services"
import { PageBrutal } from "@/registry/blocks/layouts/page-brutal"
import { PageLandscape } from "@/registry/blocks/layouts/page-landscape"
import { PageTrade } from "@/registry/blocks/layouts/page-trade"
import { PageHome } from "@/registry/blocks/layouts/page-home"
import { CalcMaterialEstimator } from "@/registry/blocks/calculators/calc-material-estimator"
import { CalcSolarSavings } from "@/registry/blocks/calculators/calc-solar-savings"
import { CalcAffordability } from "@/registry/blocks/calculators/calc-affordability"
import { CalcMarginMarkup } from "@/registry/blocks/calculators/calc-margin-markup"
import { CalcSavingsGrowth } from "@/registry/blocks/calculators/calc-savings-growth"
import { CalcQuoteBuilder } from "@/registry/blocks/calculators/calc-quote-builder"
import { FormAuth } from "@/registry/blocks/forms/form-auth"
import { FormCheckout } from "@/registry/blocks/forms/form-checkout"
import { FormFeedback } from "@/registry/blocks/forms/form-feedback"
import { FormApplication } from "@/registry/blocks/forms/form-application"
import { FormSearchFilter } from "@/registry/blocks/forms/form-search-filter"
import { FormRfq } from "@/registry/blocks/forms/form-rfq"
import { ParallaxHero } from "@/registry/blocks/parallax/parallax-hero"
import { ParallaxBanner } from "@/registry/blocks/parallax/parallax-banner"
import { StickyScrollFeatures } from "@/registry/blocks/parallax/sticky-scroll-features"
import { HorizontalScrollGallery } from "@/registry/blocks/parallax/horizontal-scroll-gallery"
import { CtaStickyBar } from "@/registry/blocks/cta/cta-sticky-bar"
import { CtaSplit } from "@/registry/blocks/cta/cta-split"
import { CtaEditorial } from "@/registry/blocks/cta/cta-editorial"
import { HeaderMega } from "@/registry/blocks/headers/header-mega"
import { HeaderCentered } from "@/registry/blocks/headers/header-centered"
import { HeaderApp } from "@/registry/blocks/headers/header-app"
import { FooterMinimal } from "@/registry/blocks/footers/footer-minimal"
import { FooterMega } from "@/registry/blocks/footers/footer-mega"
import { FooterLocal } from "@/registry/blocks/footers/footer-local"
import { FaqAccordion } from "@/registry/blocks/misc/faq-accordion"
import { StatsBand } from "@/registry/blocks/misc/stats-band"
import { TeamGrid } from "@/registry/blocks/misc/team-grid"
import { PricingEditorial } from "@/registry/blocks/pricing/pricing-editorial"
import { PricingSoft } from "@/registry/blocks/pricing/pricing-soft"
import { TestimonialsEditorial } from "@/registry/blocks/testimonials/testimonials-editorial"
import { TestimonialsMarquee } from "@/registry/blocks/testimonials/testimonials-marquee"
import { TestimonialsStars } from "@/registry/blocks/testimonials/testimonials-stars"
import { FaqCards } from "@/registry/blocks/misc/faq-cards"
import { CtaCall } from "@/registry/blocks/cta/cta-call"
import { BeforeAfter } from "@/registry/blocks/service/before-after"
import { ProcessSteps } from "@/registry/blocks/service/process-steps"
import { ServiceArea } from "@/registry/blocks/service/service-area"
import { TrustBadges } from "@/registry/blocks/service/trust-badges"
import { Guarantee } from "@/registry/blocks/service/guarantee"
import { ContactInfo } from "@/registry/blocks/service/contact-info"
import { BookingScheduler } from "@/registry/blocks/service/booking-scheduler"
import { MenuList } from "@/registry/blocks/service/menu-list"
import { FeatureSplit } from "@/registry/blocks/features/feature-split"
import { FeatureTabs } from "@/registry/blocks/features/feature-tabs"
import { ComparisonTable } from "@/registry/blocks/features/comparison-table"
import { LogoCloud } from "@/registry/blocks/features/logo-cloud"
import { IntegrationGrid } from "@/registry/blocks/features/integration-grid"
import { BlogGrid } from "@/registry/blocks/content/blog-grid"
import { BlogPostHeader } from "@/registry/blocks/content/blog-post-header"
import { GalleryMasonry } from "@/registry/blocks/content/gallery-masonry"
import { Timeline } from "@/registry/blocks/content/timeline"
import { HeroVideo } from "@/registry/blocks/heroes/hero-video"
import { AnnouncementBar } from "@/registry/blocks/misc/announcement-bar"
import { Countdown } from "@/registry/blocks/misc/countdown"
import { StatCards } from "@/registry/blocks/misc/stat-cards"
import { StepsChecklist } from "@/registry/blocks/misc/steps-checklist"
import { Breadcrumbs } from "@/registry/blocks/misc/breadcrumbs"
import { CtaWaitlist } from "@/registry/blocks/cta/cta-waitlist"
import { CtaApp } from "@/registry/blocks/cta/cta-app"

export type Vibe =
  | "editorial"
  | "brutal"
  | "soft"
  | "landscape"
  | "trade"
  | "services"

export interface CategoryMeta {
  slug: string
  title: string
  blurb: string
}

export interface BlockMeta {
  name: string
  title: string
  category: string
  vibe: Vibe
  description: string
  /** iframe height for the category-page preview */
  previewHeight: number
  component: React.ComponentType
}

export const CATEGORIES: CategoryMeta[] = [
  { slug: "headers", title: "Headers", blurb: "Navigation that sets the tone before a word is read." },
  { slug: "heroes", title: "Heroes", blurb: "The first screen. The whole argument, compressed." },
  { slug: "bento", title: "Bento & features", blurb: "Capability grids in three temperaments." },
  { slug: "features", title: "Feature sections", blurb: "Splits, tabs, comparisons, logo clouds, and integrations." },
  { slug: "content", title: "Content & blog", blurb: "Article grids, post headers, galleries, and timelines." },
  { slug: "parallax", title: "Parallax & scroll", blurb: "Scroll-driven heroes, scrollytelling, and pinned galleries." },
  { slug: "forms", title: "Forms", blurb: "Contact, quote wizard, auth, checkout, RFQ — validated and wired." },
  { slug: "calculators", title: "Calculators", blurb: "Interactive tools that earn their pixels: ROI, estimates, loans." },
  { slug: "pricing", title: "Pricing", blurb: "Rate cards and plan grids that answer before they're asked." },
  { slug: "testimonials", title: "Testimonials", blurb: "Social proof, typeset or in motion." },
  { slug: "cta", title: "Calls to action", blurb: "The closing argument, loud or gentle." },
  { slug: "service", title: "Service sections", blurb: "Trade-ready blocks: before/after, process, coverage, trust, guarantee." },
  { slug: "misc", title: "FAQ · Stats · Team", blurb: "The supporting cast every site ends up needing." },
  { slug: "footers", title: "Footers", blurb: "Endings worth scrolling to." },
  { slug: "layouts", title: "Page compositions", blurb: "Whole pages pre-wired from the blocks above." },
]

export const BLOCKS: BlockMeta[] = [
  // headers
  { name: "header-editorial", title: "Editorial header", category: "headers", vibe: "editorial", description: "Hairline utility bar, oversized serif wordmark, underline-reveal nav.", previewHeight: 280, component: HeaderEditorial },
  { name: "header-brutal", title: "Brutal header", category: "headers", vibe: "brutal", description: "Sticky bar with boxed nav cells that invert on hover.", previewHeight: 240, component: HeaderBrutal },
  { name: "header-soft", title: "Soft header", category: "headers", vibe: "soft", description: "Floating glass pill nav with backdrop blur.", previewHeight: 240, component: HeaderSoft },
  { name: "header-mega", title: "Mega-menu header", category: "headers", vibe: "soft", description: "Hover/tap reveals a panel of linked features.", previewHeight: 420, component: HeaderMega },
  { name: "header-centered", title: "Centered header", category: "headers", vibe: "editorial", description: "Serif wordmark flanked by split navigation.", previewHeight: 200, component: HeaderCentered },
  { name: "header-app", title: "App header", category: "headers", vibe: "soft", description: "SaaS top bar: workspace switcher, search, avatar, tabs.", previewHeight: 160, component: HeaderApp },
  // heroes
  { name: "hero-editorial", title: "Editorial hero", category: "heroes", vibe: "editorial", description: "Oversized serif headline, staggered reveal, mono meta column, layered media slot.", previewHeight: 720, component: HeroEditorial },
  { name: "hero-brutal", title: "Brutal hero", category: "heroes", vibe: "brutal", description: "Stacked mega-headline, sticker badge, hard shadows, infinite marquee.", previewHeight: 700, component: HeroBrutal },
  { name: "hero-soft", title: "Soft hero", category: "heroes", vibe: "soft", description: "Gradient-mesh wash, glassy product mock, floating habit cards.", previewHeight: 860, component: HeroSoft },
  { name: "hero-bento", title: "Bento hero", category: "heroes", vibe: "editorial", description: "Headline beside a live proof grid: metric, mini chart, quote, avatars.", previewHeight: 760, component: HeroBento },
  { name: "hero-video", title: "Video hero", category: "heroes", vibe: "soft", description: "Centered copy over a media stage with a play/pause control.", previewHeight: 820, component: HeroVideo },
  // bento
  { name: "bento-editorial", title: "Editorial bento", category: "bento", vibe: "editorial", description: "Asymmetric 3/2–2/3 capability grid with figure numbers.", previewHeight: 760, component: BentoEditorial },
  { name: "bento-brutal", title: "Brutal bento", category: "bento", vibe: "brutal", description: "Heavy bordered grid; cells invert to black on hover.", previewHeight: 800, component: BentoBrutal },
  { name: "bento-soft", title: "Soft bento", category: "bento", vibe: "soft", description: "Rounded glass cards with a cursor-tracking spotlight.", previewHeight: 880, component: BentoSoft },
  // features
  { name: "feature-split", title: "Feature split", category: "features", vibe: "editorial", description: "Alternating media/copy rows with checklists.", previewHeight: 1400, component: FeatureSplit },
  { name: "feature-tabs", title: "Feature tabs", category: "features", vibe: "services", description: "Tabbed product showcase with an icon rail and media panel.", previewHeight: 640, component: FeatureTabs },
  { name: "comparison-table", title: "Comparison table", category: "features", vibe: "trade", description: "'Us vs. the other guys' check/cross grid.", previewHeight: 760, component: ComparisonTable },
  { name: "logo-cloud", title: "Logo cloud", category: "features", vibe: "soft", description: "Quiet 'trusted by' wordmark band.", previewHeight: 320, component: LogoCloud },
  { name: "integration-grid", title: "Integration grid", category: "features", vibe: "soft", description: "Connect-your-stack tiles with hover lift.", previewHeight: 520, component: IntegrationGrid },
  // content
  { name: "blog-grid", title: "Blog grid", category: "content", vibe: "soft", description: "Featured lead post beside a stack of recent articles.", previewHeight: 720, component: BlogGrid },
  { name: "blog-post-header", title: "Blog post header", category: "content", vibe: "editorial", description: "Article masthead with byline, meta, and cover slot.", previewHeight: 720, component: BlogPostHeader },
  { name: "gallery-masonry", title: "Gallery masonry", category: "content", vibe: "landscape", description: "Staggered project grid with hover captions and filters.", previewHeight: 760, component: GalleryMasonry },
  { name: "timeline", title: "Timeline", category: "content", vibe: "editorial", description: "Vertical company history with a spine and year nodes.", previewHeight: 760, component: Timeline },
  // parallax
  { name: "parallax-hero", title: "Parallax hero", category: "parallax", vibe: "editorial", description: "Layered foreground/background drift on scroll.", previewHeight: 600, component: ParallaxHero },
  { name: "sticky-scroll-features", title: "Sticky scroll features", category: "parallax", vibe: "soft", description: "Pinned visual + stepped copy scrollytelling.", previewHeight: 600, component: StickyScrollFeatures },
  { name: "horizontal-scroll-gallery", title: "Horizontal scroll gallery", category: "parallax", vibe: "landscape", description: "Vertical scroll pans a horizontal row of project cards.", previewHeight: 600, component: HorizontalScrollGallery },
  { name: "parallax-banner", title: "Parallax banner", category: "parallax", vibe: "brutal", description: "Statement band whose background drifts as it passes.", previewHeight: 520, component: ParallaxBanner },
  // forms
  { name: "form-contact", title: "Contact form", category: "forms", vibe: "editorial", description: "RHF + zod validation, budget chips, success state.", previewHeight: 820, component: FormContact },
  { name: "form-quote-wizard", title: "Quote wizard", category: "forms", vibe: "soft", description: "Four-step request flow with progress bar and animated transitions.", previewHeight: 720, component: FormQuoteWizard },
  { name: "form-newsletter", title: "Newsletter strip", category: "forms", vibe: "editorial", description: "Single-field capture band with inline success swap.", previewHeight: 460, component: FormNewsletter },
  { name: "form-auth", title: "Auth card", category: "forms", vibe: "soft", description: "Tabbed sign-in / create-account with social buttons.", previewHeight: 560, component: FormAuth },
  { name: "form-checkout", title: "Checkout", category: "forms", vibe: "soft", description: "Contact + card fields beside a sticky order summary.", previewHeight: 760, component: FormCheckout },
  { name: "form-feedback", title: "Feedback / NPS", category: "forms", vibe: "editorial", description: "0–10 recommend scale with comment and thank-you state.", previewHeight: 560, component: FormFeedback },
  { name: "form-application", title: "Job application", category: "forms", vibe: "brutal", description: "Careers form with role chips and a file-upload affordance.", previewHeight: 860, component: FormApplication },
  { name: "form-search-filter", title: "Search + filter", category: "forms", vibe: "services", description: "Faceted finder: query, location, service chips, sort.", previewHeight: 420, component: FormSearchFilter },
  { name: "form-rfq", title: "Request for quote", category: "forms", vibe: "trade", description: "Structured multi-section RFQ for trades.", previewHeight: 980, component: FormRfq },
  // calculators
  { name: "calc-roi", title: "ROI calculator", category: "calculators", vibe: "soft", description: "Three sliders project revenue impact with spring-animated totals.", previewHeight: 860, component: CalcRoi },
  { name: "calc-estimator", title: "Cost estimator", category: "calculators", vibe: "editorial", description: "Base package + add-ons with a live price range sidebar.", previewHeight: 980, component: CalcEstimator },
  { name: "calc-loan", title: "Loan calculator", category: "calculators", vibe: "soft", description: "Amortization math with a principal/interest breakdown bar.", previewHeight: 900, component: CalcLoan },
  { name: "calc-material-estimator", title: "Material estimator", category: "calculators", vibe: "trade", description: "Area in, units + cost out; mulch/paint/roofing/sod/gravel.", previewHeight: 620, component: CalcMaterialEstimator },
  { name: "calc-solar-savings", title: "Solar savings", category: "calculators", vibe: "services", description: "Monthly bill + sun exposure → payback and 25-yr savings.", previewHeight: 620, component: CalcSolarSavings },
  { name: "calc-affordability", title: "Affordability calculator", category: "calculators", vibe: "soft", description: "Income/debts/rate → home price you qualify for.", previewHeight: 640, component: CalcAffordability },
  { name: "calc-margin-markup", title: "Margin / markup", category: "calculators", vibe: "editorial", description: "Cost + target → sell price; toggle margin vs markup.", previewHeight: 560, component: CalcMarginMarkup },
  { name: "calc-savings-growth", title: "Savings growth", category: "calculators", vibe: "soft", description: "Compound interest over time with a live area chart.", previewHeight: 700, component: CalcSavingsGrowth },
  { name: "calc-quote-builder", title: "Quote builder", category: "calculators", vibe: "services", description: "Line-item quote generator with rush fee + tax totals.", previewHeight: 760, component: CalcQuoteBuilder },
  // pricing
  { name: "pricing-editorial", title: "Editorial pricing table", category: "pricing", vibe: "editorial", description: "Typeset comparison table with a featured middle column.", previewHeight: 880, component: PricingEditorial },
  { name: "pricing-soft", title: "Soft pricing cards", category: "pricing", vibe: "soft", description: "Monthly/annual toggle with a lifted, glowing featured plan.", previewHeight: 940, component: PricingSoft },
  // testimonials
  { name: "testimonials-editorial", title: "Pull-quote carousel", category: "testimonials", vibe: "editorial", description: "One typeset quote at a time, paged with a crossfade.", previewHeight: 640, component: TestimonialsEditorial },
  { name: "testimonials-marquee", title: "Review marquee", category: "testimonials", vibe: "soft", description: "Press logos over counter-scrolling review cards; pauses on hover.", previewHeight: 700, component: TestimonialsMarquee },
  { name: "testimonials-stars", title: "Star review grid", category: "testimonials", vibe: "landscape", description: "Google/Yelp-style rating cards with an aggregate score header.", previewHeight: 720, component: TestimonialsStars },
  // cta
  { name: "cta-brutal", title: "Brutal CTA banner", category: "cta", vibe: "brutal", description: "Full-bleed accent banner with mega headline and hard-shadow button.", previewHeight: 620, component: CtaBrutal },
  { name: "cta-soft", title: "Soft CTA panel", category: "cta", vibe: "soft", description: "Glowing gradient panel with a reassurance row.", previewHeight: 640, component: CtaSoft },
  { name: "cta-call", title: "Click-to-call CTA", category: "cta", vibe: "trade", description: "Phone-forward emergency banner with tappable number and 24/7 note.", previewHeight: 420, component: CtaCall },
  { name: "cta-waitlist", title: "Waitlist CTA", category: "cta", vibe: "brutal", description: "Coming-soon email capture with a spot counter and success state.", previewHeight: 540, component: CtaWaitlist },
  { name: "cta-app", title: "App download CTA", category: "cta", vibe: "soft", description: "Phone mockup beside App Store / Google Play badges.", previewHeight: 560, component: CtaApp },
  { name: "cta-sticky-bar", title: "Sticky CTA bar", category: "cta", vibe: "services", description: "Dismissible bar pinned to the bottom of the viewport.", previewHeight: 320, component: CtaStickyBar },
  { name: "cta-split", title: "Split CTA", category: "cta", vibe: "editorial", description: "Offer copy beside a media panel with an editorial divider.", previewHeight: 520, component: CtaSplit },
  { name: "cta-editorial", title: "Editorial CTA", category: "cta", vibe: "editorial", description: "One oversized serif statement, one action.", previewHeight: 520, component: CtaEditorial },
  // service sections
  { name: "before-after", title: "Before / after slider", category: "service", vibe: "landscape", description: "Drag or arrow-key wipe between two states. For roofing, lawns, remodels.", previewHeight: 760, component: BeforeAfter },
  { name: "process-steps", title: "Process steps", category: "service", vibe: "trade", description: "Four-step 'how it works' rail with connecting line and numbered nodes.", previewHeight: 520, component: ProcessSteps },
  { name: "service-area", title: "Service area", category: "service", vibe: "services", description: "ZIP-check band with a neighborhood list over a stylized map panel.", previewHeight: 720, component: ServiceArea },
  { name: "trust-badges", title: "Trust badges", category: "service", vibe: "trade", description: "Credentials band: licensed, insured, warranty, financing, BBB.", previewHeight: 280, component: TrustBadges },
  { name: "guarantee", title: "Guarantee callout", category: "service", vibe: "services", description: "Warranty/satisfaction seal with plain-English promises.", previewHeight: 520, component: Guarantee },
  { name: "contact-info", title: "Contact info", category: "service", vibe: "services", description: "Name/address/phone/hours over a map panel — local-business NAP.", previewHeight: 560, component: ContactInfo },
  { name: "booking-scheduler", title: "Booking scheduler", category: "service", vibe: "services", description: "Pick service, day, and time slot, then confirm.", previewHeight: 720, component: BookingScheduler },
  { name: "menu-list", title: "Services menu", category: "service", vibe: "landscape", description: "Price list with dotted leaders, like a printed card.", previewHeight: 760, component: MenuList },
  // misc
  { name: "faq-accordion", title: "FAQ accordion", category: "misc", vibe: "editorial", description: "Sticky intro column beside a numbered accordion.", previewHeight: 760, component: FaqAccordion },
  { name: "faq-cards", title: "FAQ cards", category: "misc", vibe: "services", description: "Two-column plain Q&A tiles with a call-to-call footer.", previewHeight: 720, component: FaqCards },
  { name: "stats-band", title: "Stats band", category: "misc", vibe: "editorial", description: "Numbers spring-count up when scrolled into view.", previewHeight: 320, component: StatsBand },
  { name: "team-grid", title: "Team grid", category: "misc", vibe: "editorial", description: "Portrait grid with hover lift and a built-in hiring tile.", previewHeight: 640, component: TeamGrid },
  { name: "announcement-bar", title: "Announcement bar", category: "misc", vibe: "brutal", description: "Dismissible top strip for promos and launches.", previewHeight: 120, component: AnnouncementBar },
  { name: "countdown", title: "Countdown timer", category: "misc", vibe: "brutal", description: "Live launch/sale timer ticking to a target date.", previewHeight: 480, component: Countdown },
  { name: "stat-cards", title: "Stat cards", category: "misc", vibe: "trade", description: "Four-up metric grid with icons and sub-labels.", previewHeight: 360, component: StatCards },
  { name: "steps-checklist", title: "Steps checklist", category: "misc", vibe: "soft", description: "Interactive onboarding list with a progress ring.", previewHeight: 620, component: StepsChecklist },
  { name: "breadcrumbs", title: "Breadcrumbs", category: "misc", vibe: "editorial", description: "Page-context trail with a current-page marker.", previewHeight: 100, component: Breadcrumbs },
  // footers
  { name: "footer-editorial", title: "Editorial footer", category: "footers", vibe: "editorial", description: "Link columns over hairlines and a giant bleeding wordmark.", previewHeight: 660, component: FooterEditorial },
  { name: "footer-brutal", title: "Brutal footer", category: "footers", vibe: "brutal", description: "Bordered grid around a screaming LET'S WORK cell.", previewHeight: 620, component: FooterBrutal },
  { name: "footer-soft", title: "Soft footer", category: "footers", vibe: "soft", description: "Floating gradient CTA card above calm link columns.", previewHeight: 820, component: FooterSoft },
  { name: "footer-minimal", title: "Minimal footer", category: "footers", vibe: "editorial", description: "Wordmark, compact link row, copyright on one band.", previewHeight: 160, component: FooterMinimal },
  { name: "footer-mega", title: "Mega footer", category: "footers", vibe: "soft", description: "Sitemap columns with an inline newsletter.", previewHeight: 520, component: FooterMega },
  { name: "footer-local", title: "Local footer", category: "footers", vibe: "services", description: "Service-business NAP, hours, badges, and socials.", previewHeight: 520, component: FooterLocal },
  // layouts
  { name: "page-landing", title: "Landing page (editorial)", category: "layouts", vibe: "editorial", description: "Complete one-pager pre-wired from eight blocks.", previewHeight: 900, component: PageLanding },
  { name: "page-services", title: "SaaS page (soft)", category: "layouts", vibe: "soft", description: "Hero through pricing to CTA, from seven blocks.", previewHeight: 900, component: PageServices },
  { name: "page-brutal", title: "Agency page (brutal)", category: "layouts", vibe: "brutal", description: "Bold one-pager from eight blocks: announcement to footer.", previewHeight: 900, component: PageBrutal },
  { name: "page-landscape", title: "Landscaper site (landscape)", category: "layouts", vibe: "landscape", description: "Local-business page: portfolio, pricing, coverage, reviews.", previewHeight: 900, component: PageLandscape },
  { name: "page-trade", title: "Roofing site (trade)", category: "layouts", vibe: "trade", description: "Proof-forward contractor page built to book inspections.", previewHeight: 900, component: PageTrade },
  { name: "page-home", title: "Home-services site (services)", category: "layouts", vibe: "services", description: "HVAC/plumbing page with online booking and trust building.", previewHeight: 900, component: PageHome },
]

export interface DemoMeta {
  vibe: Vibe
  business: string
  industry: string
  tagline: string
  component: React.ComponentType
}

/** One full-page demo per theme — powers the /demo gallery. */
export const DEMOS: DemoMeta[] = [
  { vibe: "editorial", business: "Harbor & Pine", industry: "Design studio", tagline: "Editorial — serif, whitespace, ink on cream", component: PageLanding },
  { vibe: "brutal", business: "Tonne®", industry: "Web agency", tagline: "Brutal — borders, mono, hard shadows", component: PageBrutal },
  { vibe: "soft", business: "Driftwell", industry: "Habit-tracking SaaS", tagline: "Soft — rounded, glass, gradient calm", component: PageServices },
  { vibe: "landscape", business: "Rooted Landscapes", industry: "Landscaping & lawn care", tagline: "Landscape — earthy green, clay accent", component: PageLandscape },
  { vibe: "trade", business: "Summit Roofing", industry: "Roofing & contracting", tagline: "Trade — steel + safety orange", component: PageTrade },
  { vibe: "services", business: "Calder Home Services", industry: "HVAC, plumbing & electric", tagline: "Services — trust blue, amber CTA", component: PageHome },
]

export function getDemo(vibe: string) {
  return DEMOS.find((d) => d.vibe === vibe)
}

export function getBlock(name: string) {
  return BLOCKS.find((b) => b.name === name)
}

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug)
}

export function blocksFor(slug: string) {
  return BLOCKS.filter((b) => b.category === slug)
}
