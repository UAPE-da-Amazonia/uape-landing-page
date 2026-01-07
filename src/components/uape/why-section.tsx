"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState, useEffect } from "react"
import { Section } from "@/src/components/ui/section"
import { ShieldCheck, Zap, Activity } from "lucide-react"

export function WhySection() {
  const [particles, setParticles] = useState<Array<{ left: number; top: number; duration: number; delay: number }>>([])
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) {
      setParticles([])
      return
    }
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640
    const count = isMobile ? 8 : 15
    setParticles(
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    )
  }, [shouldReduceMotion])

  return (
    <Section id="why" className="relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-mono font-bold mb-8 text-primary">
            Data is Abundant. Insight is Timely.
          </h2>
          <p className="text-xl md:text-2xl text-secondary leading-loose">
            Public health doesn&apos;t have a &quot;data shortage&quot;—it has an engineering bottleneck. We solve the fragmentation
            between field-level data and high-level policy decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-2">
              <Activity className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-mono font-bold text-white">Epidemiological Rigor</h3>
            <p className="text-secondary/80 leading-relaxed">
              Built by experts who understand R0 as well as API latency. We bridge the gap between science and code.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-2">
              <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-mono font-bold text-white">Data Sovereignty</h3>
            <p className="text-secondary/80 leading-relaxed">
              Full compliance with national health data governance and GDPR. Your data stays within your borders.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-2">
              <Zap className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-mono font-bold text-white">Rapid Deployment</h3>
            <p className="text-secondary/80 leading-relaxed">
              From zero to operational surveillance in days, not months. Critical response when hours count.
            </p>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(180deg,rgba(0,255,157,0.05)_0%,rgba(32,213,213,0.05)_100%)]"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,157,0.8)]"
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
                ease: "easeOut",
              }}
            />
          ))}
      </div>
    </Section>
  )
}
