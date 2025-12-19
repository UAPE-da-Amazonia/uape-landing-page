"use client"

import { Button } from "@/src/components/ui/button"
import { motion } from "framer-motion"

const achievements = [
  "Architected data integration for UN-level health agencies during global health emergencies.",
  "Deployed surveillance infrastructure used by dozens of Member States for real-time outbreak tracking.",
  "Engineered custom analytical layers for the world's most prominent intergovernmental health bodies.",
]

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full"
      >
        <h2 className="text-4xl md:text-6xl font-mono font-bold mb-16 text-center text-[#00ff9d]">Proven at Scale.</h2>

        <div className="space-y-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 group"
            >
              <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#00ff9d] mt-2 group-hover:shadow-[0_0_20px_rgba(0,255,157,0.8)] transition-all duration-300" />
              <p className="text-xl text-white/90 leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-transparent border-2 border-[#20d5d5] text-[#20d5d5] hover:bg-[#20d5d5] hover:text-[#0a0a0f] transition-all duration-300 font-mono text-lg px-8 py-6"
            style={{ boxShadow: "0 0 20px rgba(32, 213, 213, 0.3)" }}
          >
            [ Begin Collaboration ]
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
