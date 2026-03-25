import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExpertiseGrid } from "@/components/expertise-grid"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { SkillsGrid } from "@/components/skills-grid"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ExpertiseGrid />
      <ExperienceTimeline />
      <SkillsGrid />
      <EducationSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
