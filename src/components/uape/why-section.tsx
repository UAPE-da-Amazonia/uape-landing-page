"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Section } from "@/src/components/ui/section"

export function WhySection() {
  const [particles, setParticles] = useState<Array<{ left: number; top: number; duration: number; delay: number }>>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    )
  }, [])

  return (
    <Section id="why" className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl text-center"
      >
        <h2 className="text-4xl md:text-6xl font-mono font-bold mb-8 text-[#00ff9d]">
          Data is Abundant. Insight is Timely.
        </h2>
        <p className="text-xl md:text-2xl text-[#20d5d5] leading-relaxed">
          Public health doesn&apos;t have a &quot;data shortage&quot;—it has an engineering bottleneck. We solve the fragmentation
          between field-level data and high-level policy decision-making.
        </p>
      </motion.div>

      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(180deg,rgba(0,255,157,0.05)_0%,rgba(32,213,213,0.05)_100%)]"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#00ff9d] shadow-[0_0_10px_rgba(0,255,157,0.8)]"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
            }}
          />
        ))}
      </div>
    </Section>
  )
}
