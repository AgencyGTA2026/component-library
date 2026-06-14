import { AnnouncementBar } from "@/components/blocks/announcement-bar"
import { BentoBrutal } from "@/components/blocks/bento-brutal"
import { ComparisonTable } from "@/components/blocks/comparison-table"
import { CtaBrutal } from "@/components/blocks/cta-brutal"
import { FooterBrutal } from "@/components/blocks/footer-brutal"
import { HeaderBrutal } from "@/components/blocks/header-brutal"
import { HeroBrutal } from "@/components/blocks/hero-brutal"
import { StatCards } from "@/components/blocks/stat-cards"

/**
 * Agency landing page (brutal vibe) — a complete one-pager pre-wired
 * from eight bold blocks. Drop into a `data-vibe="brutal"` wrapper.
 */
export function PageBrutal() {
  return (
    <main>
      <AnnouncementBar />
      <HeaderBrutal />
      <HeroBrutal />
      <BentoBrutal />
      <ComparisonTable />
      <StatCards />
      <CtaBrutal />
      <FooterBrutal />
    </main>
  )
}
