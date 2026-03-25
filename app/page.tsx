import { HeroSection } from "@/components/hero-section"
import { FieldGrid } from "@/components/field-grid"
import { FloatingDock } from "@/components/floating-dock"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FieldGrid />
      <FloatingDock />
    </main>
  )
}
