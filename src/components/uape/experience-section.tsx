"use client"

import { Button } from "@/src/components/ui/button"
import { Section } from "@/src/components/ui/section"
import { motion } from "framer-motion"

const achievements = [
  "Architected data integration for UN-level health agencies during global health emergencies.",
  "Deployed surveillance infrastructure used by dozens of Member States for real-time outbreak tracking.",
  "Engineered custom analytical layers for the world's most prominent intergovernmental health bodies.",
]

export function ExperienceSection() {
  return (
    <Section id="experience" className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto w-full"
      >
        <h2 className="text-4xl md:text-6xl font-mono font-bold mb-16 text-center text-primary">Proven at Scale.</h2>

        <div className="space-y-8 text-center">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay:
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? 0
                    : index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="mx-auto w-fit flex items-center gap-3 group"
            >
              <div className="shrink-0 w-3 h-3 rounded-full bg-primary group-hover:shadow-[0_0_20px_rgba(0,255,157,0.8)] transition-all duration-300" />
              <p className="text-xl text-white/90 leading-loose text-left">{item}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="xl" variant="uapeSolid" className="font-mono text-lg shadow-[0_0_30px_rgba(0,255,157,0.3)] hover:shadow-[0_0_50px_rgba(0,255,157,0.5)] transition-all duration-300">
            [ Begin Collaboration ]
          </Button>
        </div>
      </motion.div>
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-linear-to-b from-[rgba(0,255,157,0.05)] to-[rgba(32,213,213,0.05)]" />
    </Section>
  )
}
