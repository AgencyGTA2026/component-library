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
import { ProductGrid } from "@/registry/blocks/commerce/product-grid"
import { ProductDetail } from "@/registry/blocks/commerce/product-detail"
import { CartDrawer } from "@/registry/blocks/commerce/cart-drawer"
import { ModalDialog } from "@/registry/blocks/overlays/modal-dialog"
import { CookieConsent } from "@/registry/blocks/overlays/cookie-consent"
import { NotificationToast } from "@/registry/blocks/overlays/notification-toast"
import { LightboxGallery } from "@/registry/blocks/media/lightbox-gallery"
import { Carousel } from "@/registry/blocks/media/carousel"
import { LogoMarquee } from "@/registry/blocks/media/logo-marquee"
import { Error404 } from "@/registry/blocks/states/error-404"
import { ThankYou } from "@/registry/blocks/states/thank-you"
import { EmptyState } from "@/registry/blocks/states/empty-state"
import { LoadingSkeleton } from "@/registry/blocks/states/loading-skeleton"
import { Maintenance } from "@/registry/blocks/states/maintenance"
import { AnchorNav } from "@/registry/blocks/navigation/anchor-nav"
import { Pagination } from "@/registry/blocks/navigation/pagination"
import { DirectoryNav } from "@/registry/blocks/navigation/directory-nav"
import { ValuesGrid } from "@/registry/blocks/about/values-grid"
import { Locations } from "@/registry/blocks/about/locations"
import { AwardsPress } from "@/registry/blocks/about/awards-press"
import { Mission } from "@/registry/blocks/about/mission"
import { SparklineCards } from "@/registry/blocks/charts/sparkline-cards"
import { ProgressRings } from "@/registry/blocks/charts/progress-rings"
import { StatComparison } from "@/registry/blocks/charts/stat-comparison"
import { HeroFormCapture } from "@/registry/blocks/heroes/hero-form-capture"
import { HeroSplit } from "@/registry/blocks/heroes/hero-split"
import { CtaNewsletterCard } from "@/registry/blocks/cta/cta-newsletter-card"
import { FormOtp } from "@/registry/blocks/forms/form-otp"
import { FormDatePicker } from "@/registry/blocks/forms/form-date-picker"
import { FormAddress } from "@/registry/blocks/forms/form-address"
import { ArticleBody } from "@/registry/blocks/content/article-body"
import { TableOfContents } from "@/registry/blocks/content/table-of-contents"
import { AuthorBio } from "@/registry/blocks/content/author-bio"
import { ShareBar } from "@/registry/blocks/content/share-bar"
import { TestimonialVideo } from "@/registry/blocks/testimonials/testimonial-video"
import { CaseStudyCard } from "@/registry/blocks/testimonials/case-study-card"
import { PressBar } from "@/registry/blocks/testimonials/press-bar"
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
// brutal — one block per previously-missing category
import { AboutBrutal } from "@/registry/blocks/about/about-brutal"
import { CalcBrutal } from "@/registry/blocks/calculators/calc-brutal"
import { ChartBrutal } from "@/registry/blocks/charts/chart-brutal"
import { ProductBrutal } from "@/registry/blocks/commerce/product-brutal"
import { ContentBrutal } from "@/registry/blocks/content/content-brutal"
import { FeatureBrutal } from "@/registry/blocks/features/feature-brutal"
import { MediaBrutal } from "@/registry/blocks/media/media-brutal"
import { NavBrutal } from "@/registry/blocks/navigation/nav-brutal"
import { ModalBrutal } from "@/registry/blocks/overlays/modal-brutal"
import { PricingBrutal } from "@/registry/blocks/pricing/pricing-brutal"
import { ServiceBrutal } from "@/registry/blocks/service/service-brutal"
import { TestimonialsBrutal } from "@/registry/blocks/testimonials/testimonials-brutal"
// retro — a full new theme, one block per category
import { HeaderRetro } from "@/registry/blocks/headers/header-retro"
import { HeroRetro } from "@/registry/blocks/heroes/hero-retro"
import { BentoRetro } from "@/registry/blocks/bento/bento-retro"
import { FeatureRetro } from "@/registry/blocks/features/feature-retro"
import { ContentRetro } from "@/registry/blocks/content/content-retro"
import { ParallaxRetro } from "@/registry/blocks/parallax/parallax-retro"
import { ShopRetro } from "@/registry/blocks/commerce/shop-retro"
import { MediaRetro } from "@/registry/blocks/media/media-retro"
import { ModalRetro } from "@/registry/blocks/overlays/modal-retro"
import { NavRetro } from "@/registry/blocks/navigation/nav-retro"
import { AboutRetro } from "@/registry/blocks/about/about-retro"
import { ChartRetro } from "@/registry/blocks/charts/chart-retro"
import { StatesRetro } from "@/registry/blocks/states/states-retro"
import { FormRetro } from "@/registry/blocks/forms/form-retro"
import { CalcRetro } from "@/registry/blocks/calculators/calc-retro"
import { PricingRetro } from "@/registry/blocks/pricing/pricing-retro"
import { TestimonialsRetro } from "@/registry/blocks/testimonials/testimonials-retro"
import { CtaRetro } from "@/registry/blocks/cta/cta-retro"
import { ServiceRetro } from "@/registry/blocks/service/service-retro"
import { FaqRetro } from "@/registry/blocks/misc/faq-retro"
import { FooterRetro } from "@/registry/blocks/footers/footer-retro"
import { PageRetro } from "@/registry/blocks/layouts/page-retro"
// noir — a full dark-luxury theme, one block per category
import { HeaderNoir } from "@/registry/blocks/headers/header-noir"
import { HeroNoir } from "@/registry/blocks/heroes/hero-noir"
import { BentoNoir } from "@/registry/blocks/bento/bento-noir"
import { FeatureNoir } from "@/registry/blocks/features/feature-noir"
import { ContentNoir } from "@/registry/blocks/content/content-noir"
import { ParallaxNoir } from "@/registry/blocks/parallax/parallax-noir"
import { ShopNoir } from "@/registry/blocks/commerce/shop-noir"
import { MediaNoir } from "@/registry/blocks/media/media-noir"
import { ModalNoir } from "@/registry/blocks/overlays/modal-noir"
import { NavNoir } from "@/registry/blocks/navigation/nav-noir"
import { AboutNoir } from "@/registry/blocks/about/about-noir"
import { ChartNoir } from "@/registry/blocks/charts/chart-noir"
import { StatesNoir } from "@/registry/blocks/states/states-noir"
import { FormNoir } from "@/registry/blocks/forms/form-noir"
import { CalcNoir } from "@/registry/blocks/calculators/calc-noir"
import { PricingNoir } from "@/registry/blocks/pricing/pricing-noir"
import { TestimonialsNoir } from "@/registry/blocks/testimonials/testimonials-noir"
import { CtaNoir } from "@/registry/blocks/cta/cta-noir"
import { ServiceNoir } from "@/registry/blocks/service/service-noir"
import { FaqNoir } from "@/registry/blocks/misc/faq-noir"
import { FooterNoir } from "@/registry/blocks/footers/footer-noir"
import { PageNoir } from "@/registry/blocks/layouts/page-noir"

export type Vibe =
  | "editorial"
  | "brutal"
  | "soft"
  | "landscape"
  | "trade"
  | "services"
  | "retro"
  | "noir"

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
  { slug: "commerce", title: "Commerce", blurb: "Product grids, detail pages, and a slide-over cart." },
  { slug: "media", title: "Media & gallery", blurb: "Lightbox galleries, carousels, and logo marquees." },
  { slug: "overlays", title: "Overlays & feedback", blurb: "Modals, cookie consent, and toast notifications." },
  { slug: "navigation", title: "Navigation", blurb: "Anchor nav with scroll-spy, pagination, and link directories." },
  { slug: "about", title: "About & company", blurb: "Values, multi-location maps, awards, and mission statements." },
  { slug: "charts", title: "Charts & stats", blurb: "Sparkline KPIs, progress rings, and before/after comparisons." },
  { slug: "states", title: "States & system", blurb: "404, thank-you, empty, loading, and maintenance screens." },
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
  { name: "hero-form-capture", title: "Form-capture hero", category: "heroes", vibe: "soft", description: "Headline + benefits beside an inline lead form, above the fold.", previewHeight: 620, component: HeroFormCapture },
  { name: "hero-split", title: "Split hero", category: "heroes", vibe: "editorial", description: "Full-bleed media half beside a copy half, flush to the edges.", previewHeight: 600, component: HeroSplit },
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
  { name: "article-body", title: "Article body", category: "content", vibe: "editorial", description: "Typeset long-form prose with drop cap, pull-quote, and figure.", previewHeight: 900, component: ArticleBody },
  { name: "table-of-contents", title: "Table of contents", category: "content", vibe: "editorial", description: "Sticky TOC with scroll-spy and a reading progress bar.", previewHeight: 640, component: TableOfContents },
  { name: "author-bio", title: "Author bio", category: "content", vibe: "editorial", description: "Byline card with avatar, follow action, and other posts.", previewHeight: 420, component: AuthorBio },
  { name: "share-bar", title: "Share bar", category: "content", vibe: "soft", description: "Copy-link, email, print, and save with clipboard feedback.", previewHeight: 240, component: ShareBar },
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
  { name: "form-otp", title: "OTP verification", category: "forms", vibe: "services", description: "Segmented code input with paste, auto-advance, and verify.", previewHeight: 560, component: FormOtp },
  { name: "form-date-picker", title: "Date & time picker", category: "forms", vibe: "services", description: "Month calendar + time slots for appointment booking.", previewHeight: 640, component: FormDatePicker },
  { name: "form-address", title: "Address form", category: "forms", vibe: "trade", description: "Service-address fields with a lightweight autocomplete.", previewHeight: 600, component: FormAddress },
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
  { name: "testimonial-video", title: "Video testimonial", category: "testimonials", vibe: "soft", description: "Play-button video stage beside a pulled quote and attribution.", previewHeight: 620, component: TestimonialVideo },
  { name: "case-study-card", title: "Case study cards", category: "testimonials", vibe: "services", description: "Problem → result cards with hard before/after metrics.", previewHeight: 700, component: CaseStudyCard },
  { name: "press-bar", title: "Press bar", category: "testimonials", vibe: "editorial", description: "Slim 'as seen in' strip of outlet wordmarks.", previewHeight: 180, component: PressBar },
  // cta
  { name: "cta-brutal", title: "Brutal CTA banner", category: "cta", vibe: "brutal", description: "Full-bleed accent banner with mega headline and hard-shadow button.", previewHeight: 620, component: CtaBrutal },
  { name: "cta-soft", title: "Soft CTA panel", category: "cta", vibe: "soft", description: "Glowing gradient panel with a reassurance row.", previewHeight: 640, component: CtaSoft },
  { name: "cta-call", title: "Click-to-call CTA", category: "cta", vibe: "trade", description: "Phone-forward emergency banner with tappable number and 24/7 note.", previewHeight: 420, component: CtaCall },
  { name: "cta-waitlist", title: "Waitlist CTA", category: "cta", vibe: "brutal", description: "Coming-soon email capture with a spot counter and success state.", previewHeight: 540, component: CtaWaitlist },
  { name: "cta-app", title: "App download CTA", category: "cta", vibe: "soft", description: "Phone mockup beside App Store / Google Play badges.", previewHeight: 560, component: CtaApp },
  { name: "cta-sticky-bar", title: "Sticky CTA bar", category: "cta", vibe: "services", description: "Dismissible bar pinned to the bottom of the viewport.", previewHeight: 320, component: CtaStickyBar },
  { name: "cta-split", title: "Split CTA", category: "cta", vibe: "editorial", description: "Offer copy beside a media panel with an editorial divider.", previewHeight: 520, component: CtaSplit },
  { name: "cta-editorial", title: "Editorial CTA", category: "cta", vibe: "editorial", description: "One oversized serif statement, one action.", previewHeight: 520, component: CtaEditorial },
  { name: "cta-newsletter-card", title: "Newsletter CTA card", category: "cta", vibe: "soft", description: "Rounded gradient-edged newsletter card with inline success.", previewHeight: 360, component: CtaNewsletterCard },
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
  // commerce
  { name: "product-grid", title: "Product grid", category: "commerce", vibe: "soft", description: "Filterable storefront cards with rating, wishlist, and hover quick-add.", previewHeight: 820, component: ProductGrid },
  { name: "product-detail", title: "Product detail", category: "commerce", vibe: "editorial", description: "Thumbnail gallery beside variants, qty, add-to-cart, and detail accordion.", previewHeight: 880, component: ProductDetail },
  { name: "cart-drawer", title: "Cart drawer", category: "commerce", vibe: "soft", description: "Slide-over cart with steppers, free-shipping bar, and checkout.", previewHeight: 360, component: CartDrawer },
  // media
  { name: "lightbox-gallery", title: "Lightbox gallery", category: "media", vibe: "editorial", description: "Masonry grid that opens a fullscreen lightbox with prev/next.", previewHeight: 720, component: LightboxGallery },
  { name: "carousel", title: "Carousel", category: "media", vibe: "soft", description: "One-at-a-time slideshow with arrows, dots, and pausable autoplay.", previewHeight: 640, component: Carousel },
  { name: "logo-marquee", title: "Logo marquee", category: "media", vibe: "soft", description: "Two rows of wordmarks scrolling opposite directions; pause on hover.", previewHeight: 280, component: LogoMarquee },
  // overlays
  { name: "modal-dialog", title: "Modal dialog", category: "overlays", vibe: "soft", description: "Accessible centered modal with overlay, Escape, and backdrop close.", previewHeight: 320, component: ModalDialog },
  { name: "cookie-consent", title: "Cookie consent", category: "overlays", vibe: "services", description: "Bottom banner with accept/reject and expandable preference toggles.", previewHeight: 340, component: CookieConsent },
  { name: "notification-toast", title: "Notification toasts", category: "overlays", vibe: "soft", description: "Trigger buttons spawn stacked, auto-dismissing toasts.", previewHeight: 320, component: NotificationToast },
  // navigation
  { name: "anchor-nav", title: "Anchor nav", category: "navigation", vibe: "editorial", description: "Sticky on-page nav with IntersectionObserver scroll-spy.", previewHeight: 620, component: AnchorNav },
  { name: "pagination", title: "Pagination", category: "navigation", vibe: "soft", description: "Numbered pager with prev/next and ellipsis truncation.", previewHeight: 280, component: Pagination },
  { name: "directory-nav", title: "Directory nav", category: "navigation", vibe: "services", description: "Searchable, categorized link grid (departments / service lines).", previewHeight: 560, component: DirectoryNav },
  // about
  { name: "values-grid", title: "Values grid", category: "about", vibe: "editorial", description: "Company principles as icon cards over hairline dividers.", previewHeight: 640, component: ValuesGrid },
  { name: "locations", title: "Locations", category: "about", vibe: "services", description: "Multi-branch cards beside a map with selectable pins.", previewHeight: 680, component: Locations },
  { name: "awards-press", title: "Awards & press", category: "about", vibe: "soft", description: "Accreditation cards beside 'as seen in' press quotes.", previewHeight: 520, component: AwardsPress },
  { name: "mission", title: "Mission statement", category: "about", vibe: "landscape", description: "Large statement of purpose with supporting stats.", previewHeight: 560, component: Mission },
  // charts
  { name: "sparkline-cards", title: "Sparkline cards", category: "charts", vibe: "trade", description: "KPI tiles each with a mini trend line and period delta.", previewHeight: 360, component: SparklineCards },
  { name: "progress-rings", title: "Progress rings", category: "charts", vibe: "services", description: "Circular percentage stats for outcomes and capacity.", previewHeight: 460, component: ProgressRings },
  { name: "stat-comparison", title: "Stat comparison", category: "charts", vibe: "editorial", description: "Paired before/after bars that make improvement obvious.", previewHeight: 560, component: StatComparison },
  // states
  { name: "error-404", title: "404 page", category: "states", vibe: "editorial", description: "Friendly not-found with search and escape links.", previewHeight: 640, component: Error404 },
  { name: "thank-you", title: "Thank-you page", category: "states", vibe: "services", description: "Booking/quote confirmation with next steps and calendar add.", previewHeight: 760, component: ThankYou },
  { name: "empty-state", title: "Empty state", category: "states", vibe: "soft", description: "Reusable 'nothing here yet' panel with illustration slot.", previewHeight: 480, component: EmptyState },
  { name: "loading-skeleton", title: "Loading skeleton", category: "states", vibe: "soft", description: "Shimmer placeholders for card, list, and table shapes.", previewHeight: 760, component: LoadingSkeleton },
  { name: "maintenance", title: "Maintenance screen", category: "states", vibe: "brutal", description: "Scheduled-downtime screen with ETA and notify-me field.", previewHeight: 640, component: Maintenance },
  // layouts
  { name: "page-landing", title: "Landing page (editorial)", category: "layouts", vibe: "editorial", description: "Complete one-pager pre-wired from eight blocks.", previewHeight: 900, component: PageLanding },
  { name: "page-services", title: "SaaS page (soft)", category: "layouts", vibe: "soft", description: "Hero through pricing to CTA, from seven blocks.", previewHeight: 900, component: PageServices },
  { name: "page-brutal", title: "Agency page (brutal)", category: "layouts", vibe: "brutal", description: "Bold one-pager from eight blocks: announcement to footer.", previewHeight: 900, component: PageBrutal },
  { name: "page-landscape", title: "Landscaper site (landscape)", category: "layouts", vibe: "landscape", description: "Local-business page: portfolio, pricing, coverage, reviews.", previewHeight: 900, component: PageLandscape },
  { name: "page-trade", title: "Roofing site (trade)", category: "layouts", vibe: "trade", description: "Proof-forward contractor page built to book inspections.", previewHeight: 900, component: PageTrade },
  { name: "page-home", title: "Home-services site (services)", category: "layouts", vibe: "services", description: "HVAC/plumbing page with online booking and trust building.", previewHeight: 900, component: PageHome },

  // brutal — fills every category the vibe was missing
  { name: "about-brutal", title: "Brutal about", category: "about", vibe: "brutal", description: "Company values as bordered cells that invert on hover.", previewHeight: 560, component: AboutBrutal },
  { name: "calc-brutal", title: "Brutal estimator", category: "calculators", vibe: "brutal", description: "Pick a base package and add-ons; watch the hard-shadow total tick.", previewHeight: 720, component: CalcBrutal },
  { name: "chart-brutal", title: "Brutal stat bars", category: "charts", vibe: "brutal", description: "Heavy horizontal bars with hard-edged fills and deltas.", previewHeight: 520, component: ChartBrutal },
  { name: "product-brutal", title: "Brutal product grid", category: "commerce", vibe: "brutal", description: "Bordered product cards with a hard-shadow add button.", previewHeight: 760, component: ProductBrutal },
  { name: "content-brutal", title: "Brutal blog grid", category: "content", vibe: "brutal", description: "One screaming featured post over a bordered list.", previewHeight: 620, component: ContentBrutal },
  { name: "feature-brutal", title: "Brutal feature rows", category: "features", vibe: "brutal", description: "Alternating bordered rows with a checklist and color block.", previewHeight: 720, component: FeatureBrutal },
  { name: "media-brutal", title: "Brutal gallery", category: "media", vibe: "brutal", description: "Bordered work grid over a hard-edged logo wall.", previewHeight: 640, component: MediaBrutal },
  { name: "nav-brutal", title: "Brutal anchor nav", category: "navigation", vibe: "brutal", description: "Boxed nav cells; the active one inverts.", previewHeight: 480, component: NavBrutal },
  { name: "modal-brutal", title: "Brutal modal", category: "overlays", vibe: "brutal", description: "Hard-shadow dialog with Escape and backdrop close.", previewHeight: 340, component: ModalBrutal },
  { name: "pricing-brutal", title: "Brutal pricing", category: "pricing", vibe: "brutal", description: "Three bordered plan cards; the middle one is inverted.", previewHeight: 720, component: PricingBrutal },
  { name: "service-brutal", title: "Brutal process steps", category: "service", vibe: "brutal", description: "Four-step numbered rail in bordered cells.", previewHeight: 520, component: ServiceBrutal },
  { name: "testimonials-brutal", title: "Brutal testimonials", category: "testimonials", vibe: "brutal", description: "One screaming pull-quote over a bordered review grid.", previewHeight: 620, component: TestimonialsBrutal },

  // retro — a full new theme (Memphis / 80s), one block per category
  { name: "header-retro", title: "Retro header", category: "headers", vibe: "retro", description: "Chunky rounded pill nav with a wobbly sticker logo.", previewHeight: 240, component: HeaderRetro },
  { name: "hero-retro", title: "Retro hero", category: "heroes", vibe: "retro", description: "Memphis squiggles, a sticker badge, and a chunky CTA.", previewHeight: 640, component: HeroRetro },
  { name: "bento-retro", title: "Retro bento", category: "bento", vibe: "retro", description: "Playful rounded cells in bright Memphis colors.", previewHeight: 720, component: BentoRetro },
  { name: "feature-retro", title: "Retro features", category: "features", vibe: "retro", description: "Alternating rounded rows with a bright color panel.", previewHeight: 820, component: FeatureRetro },
  { name: "content-retro", title: "Retro blog grid", category: "content", vibe: "retro", description: "Rounded color cards with sticker category tags.", previewHeight: 560, component: ContentRetro },
  { name: "parallax-retro", title: "Retro parallax", category: "parallax", vibe: "retro", description: "A statement band whose Memphis shapes drift on scroll.", previewHeight: 520, component: ParallaxRetro },
  { name: "shop-retro", title: "Retro shop", category: "commerce", vibe: "retro", description: "Rounded product cards with sticker prices and add buttons.", previewHeight: 760, component: ShopRetro },
  { name: "media-retro", title: "Retro gallery", category: "media", vibe: "retro", description: "A rounded color grid that opens a playful lightbox.", previewHeight: 560, component: MediaRetro },
  { name: "modal-retro", title: "Retro modal", category: "overlays", vibe: "retro", description: "A playful rounded promo dialog with a sticker close button.", previewHeight: 340, component: ModalRetro },
  { name: "nav-retro", title: "Retro pager", category: "navigation", vibe: "retro", description: "Chunky rounded number pills with prev/next.", previewHeight: 360, component: NavRetro },
  { name: "about-retro", title: "Retro about", category: "about", vibe: "retro", description: "Values as bright rounded cards with sticker icons.", previewHeight: 520, component: AboutRetro },
  { name: "chart-retro", title: "Retro stats", category: "charts", vibe: "retro", description: "Rounded KPI tiles with chunky progress bars.", previewHeight: 480, component: ChartRetro },
  { name: "states-retro", title: "Retro 404", category: "states", vibe: "retro", description: "A big bouncy number over a Memphis-shape backdrop.", previewHeight: 600, component: StatesRetro },
  { name: "form-retro", title: "Retro contact form", category: "forms", vibe: "retro", description: "Rounded fields, sticker topic chips, success swap.", previewHeight: 760, component: FormRetro },
  { name: "calc-retro", title: "Retro plan builder", category: "calculators", vibe: "retro", description: "A subscription builder with a chunky live total.", previewHeight: 520, component: CalcRetro },
  { name: "pricing-retro", title: "Retro pricing", category: "pricing", vibe: "retro", description: "Three rounded plan cards; the middle one pops in coral.", previewHeight: 720, component: PricingRetro },
  { name: "testimonials-retro", title: "Retro testimonials", category: "testimonials", vibe: "retro", description: "Bright rounded review cards with star ratings.", previewHeight: 560, component: TestimonialsRetro },
  { name: "cta-retro", title: "Retro CTA", category: "cta", vibe: "retro", description: "A bold rounded banner with floating Memphis shapes.", previewHeight: 480, component: CtaRetro },
  { name: "service-retro", title: "Retro process steps", category: "service", vibe: "retro", description: "A four-step rail of bright rounded cards.", previewHeight: 520, component: ServiceRetro },
  { name: "faq-retro", title: "Retro FAQ", category: "misc", vibe: "retro", description: "Rounded cards that pop open with a sticker toggle.", previewHeight: 620, component: FaqRetro },
  { name: "footer-retro", title: "Retro footer", category: "footers", vibe: "retro", description: "A bright rounded newsletter card over playful link columns.", previewHeight: 680, component: FooterRetro },
  { name: "page-retro", title: "Soda brand site (retro)", category: "layouts", vibe: "retro", description: "Playful Memphis one-pager from nine retro blocks.", previewHeight: 900, component: PageRetro },

  // noir — a full dark-luxury theme, one block per category
  { name: "header-noir", title: "Noir header", category: "headers", vibe: "noir", description: "Hairline utility bar over a centered serif wordmark and quiet nav.", previewHeight: 200, component: HeaderNoir },
  { name: "hero-noir", title: "Noir hero", category: "heroes", vibe: "noir", description: "Oversized serif statement over near-black with a layered gold media slot.", previewHeight: 720, component: HeroNoir },
  { name: "bento-noir", title: "Noir bento", category: "bento", vibe: "noir", description: "Asymmetric grid of hairline cells over near-black.", previewHeight: 720, component: BentoNoir },
  { name: "feature-noir", title: "Noir features", category: "features", vibe: "noir", description: "Numbered serif rows divided by gold hairlines.", previewHeight: 640, component: FeatureNoir },
  { name: "content-noir", title: "Noir journal", category: "content", vibe: "noir", description: "Featured serif lead beside a hairline list of entries.", previewHeight: 680, component: ContentNoir },
  { name: "parallax-noir", title: "Noir parallax", category: "parallax", vibe: "noir", description: "A serif statement band whose gold glow drifts on scroll.", previewHeight: 520, component: ParallaxNoir },
  { name: "shop-noir", title: "Noir collection", category: "commerce", vibe: "noir", description: "Hairline product cards with serif names and gold prices.", previewHeight: 820, component: ShopNoir },
  { name: "media-noir", title: "Noir gallery", category: "media", vibe: "noir", description: "A hairline grid that opens a quiet fullscreen lightbox.", previewHeight: 560, component: MediaNoir },
  { name: "modal-noir", title: "Noir modal", category: "overlays", vibe: "noir", description: "A hairline-framed private-viewing invitation with a gold action.", previewHeight: 360, component: ModalNoir },
  { name: "nav-noir", title: "Noir anchor nav", category: "navigation", vibe: "noir", description: "Sticky hairline rail with a gold active underline.", previewHeight: 560, component: NavNoir },
  { name: "about-noir", title: "Noir about", category: "about", vibe: "noir", description: "Values as serif cards over a hairline grid.", previewHeight: 560, component: AboutNoir },
  { name: "chart-noir", title: "Noir stats", category: "charts", vibe: "noir", description: "Serif figures over thin gold measure lines.", previewHeight: 420, component: ChartNoir },
  { name: "states-noir", title: "Noir 404", category: "states", vibe: "noir", description: "Oversized serif numeral over near-black with a gold rule.", previewHeight: 600, component: StatesNoir },
  { name: "form-noir", title: "Noir enquiry form", category: "forms", vibe: "noir", description: "Hairline fields and gold chips with a quiet success state.", previewHeight: 760, component: FormNoir },
  { name: "calc-noir", title: "Noir bespoke estimator", category: "calculators", vibe: "noir", description: "Choose stone, setting, and metal; a serif total updates.", previewHeight: 720, component: CalcNoir },
  { name: "pricing-noir", title: "Noir membership", category: "pricing", vibe: "noir", description: "Hairline membership tiers with a gold-framed featured plan.", previewHeight: 720, component: PricingNoir },
  { name: "testimonials-noir", title: "Noir testimonials", category: "testimonials", vibe: "noir", description: "One typeset pull-quote at a time, paged with a crossfade.", previewHeight: 520, component: TestimonialsNoir },
  { name: "cta-noir", title: "Noir CTA", category: "cta", vibe: "noir", description: "A single serif statement and one gold action over near-black.", previewHeight: 560, component: CtaNoir },
  { name: "service-noir", title: "Noir process", category: "service", vibe: "noir", description: "A four-step serif rail divided by gold hairlines.", previewHeight: 560, component: ServiceNoir },
  { name: "faq-noir", title: "Noir FAQ", category: "misc", vibe: "noir", description: "A serif accordion divided by gold hairlines.", previewHeight: 620, component: FaqNoir },
  { name: "footer-noir", title: "Noir footer", category: "footers", vibe: "noir", description: "Hairline link columns beneath a serif wordmark and gold rule.", previewHeight: 520, component: FooterNoir },
  { name: "page-noir", title: "Jewellery maison site (noir)", category: "layouts", vibe: "noir", description: "Dark-luxury one-pager from ten noir blocks.", previewHeight: 900, component: PageNoir },
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
  { vibe: "retro", business: "Poptone Soda Co.", industry: "Craft soda brand", tagline: "Retro — Memphis pop, cream & coral", component: PageRetro },
  { vibe: "noir", business: "Aurum", industry: "Fine jewellery maison", tagline: "Noir — near-black, gold, serif luxury", component: PageNoir },
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
