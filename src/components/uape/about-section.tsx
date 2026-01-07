"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Section } from "@/src/components/ui/section"

export function AboutSection() {
  const [lines, setLines] = useState<Array<{ x1: number; y1: number; x2: number; y2: number }>>([])

  useEffect(() => {
    setLines(
      Array.from({ length: 20 }, () => ({
        x1: Math.random() * 100,
        y1: Math.random() * 100,
        x2: Math.random() * 100,
        y2: Math.random() * 100,
      }))
    )
  }, [])

  return (
    <Section id="about" className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-mono font-bold mb-12 text-center text-primary">
          Two Decades of Intelligence. A Lifetime of Impact.
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-white/90 leading-loose text-justify hyphens-auto">
          <p>
            The <span className="text-primary font-semibold">UAPÉ Collective</span> is not just a software agency. We
            are a specialized task force of <span className="text-secondary">Software Engineers</span>,
            <span className="text-secondary"> Epidemiologists</span>, and{" "}
            <span className="text-secondary">Statisticians</span>.
          </p>

          <p>
            With over <span className="text-primary font-semibold">20 years of experience</span> at the highest levels
            of global health, our leadership team comprises PhDs and subject matter experts who have sat at the tables
            of the world&apos;s leading international health organizations.
          </p>

          <p>
            We don&apos;t just &quot;write code.&quot; We understand the nuances of disease transmission, the sensitivity of
            demographic data, and the urgency of a response. We bridge the gap between{" "}
            <span className="text-secondary">Computer Science</span> and
            <span className="text-secondary"> Public Health Science</span>, ensuring that the systems we build are
            technically superior and epidemiologically sound.
          </p>
        </div>
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="w-full h-full">
          {lines.map((line, i) => (
            <line
              key={i}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="rgba(0, 255, 157, 0.3)"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>
    </Section>
  )
}
