"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/src/components/uape/hero-section"
import { WhySection } from "@/src/components/uape/why-section"
import { StackSection } from "@/src/components/uape/stack-section"
import { AboutSection } from "@/src/components/uape/about-section"
import { ExperienceSection } from "@/src/components/uape/experience-section"
import { FeaturesSection } from "@/src/components/uape/features-section"
import { Footer } from "@/src/components/uape/footer"
import { Navbar } from "@/src/components/uape/navbar"
import { ScrollToTop } from "@/src/components/uape/scroll-to-top"
import { BackgroundOverlay } from "@/src/components/uape/background-overlay"

export default function UapePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-[#0a0a0f] text-white overflow-x-hidden relative">
      <BackgroundOverlay scrollY={scrollY} />
      <div className="relative z-10">
        <Navbar />
        <HeroSection scrollY={scrollY} />
        <WhySection />
        <FeaturesSection />
        <StackSection />
        <AboutSection />
        <ExperienceSection />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}
