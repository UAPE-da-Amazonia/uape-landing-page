"use client"

import { Button } from "@/src/components/ui/button"
import { Section } from "@/src/components/ui/section"
import { motion } from "framer-motion"

const stats = [
  {
    value: "20+",
    label: "Years Experience",
    description: "Architecting data systems for UN-level agencies during global health emergencies.",
  },
  {
    value: "50+",
    label: "Member States",
    description: "Deploying surveillance infrastructure for real-time outbreak tracking across borders.",
  },
  {
    value: "1B+",
    label: "Records Processed",
    description: "Engineering analytical layers that handle massive scale epidemiological data.",
  },
]

export function ExperienceSection() {
  return (
    <Section id="experience" className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto w-full"
      >
        <h2 className="text-4xl md:text-6xl font-mono font-bold mb-20 text-center text-primary">Proven at Scale.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className="text-4xl md:text-5xl font-sans font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xl font-bold text-primary mb-4 tracking-wide uppercase">
                {stat.label}
              </div>
              <p className="text-secondary/80 leading-relaxed max-w-xs mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Button size="xl" variant="uapeSolid" asChild>
            <a href="mailto:adm@uape.us">
              Begin Collaboration
            </a>
          </Button>
        </div>
      </motion.div>
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-linear-to-b from-[rgba(0,255,157,0.05)] to-[rgba(32,213,213,0.05)]" />
    </Section>
  )
}
