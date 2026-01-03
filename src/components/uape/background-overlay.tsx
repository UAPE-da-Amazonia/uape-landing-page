"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface BackgroundOverlayProps {
  scrollY: number
}

export function BackgroundOverlay({ scrollY }: BackgroundOverlayProps) {
  const [particles, setParticles] = useState<
    Array<{ left: number; top: number; duration: number; delay: number }>
  >([])

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640
    const count = isMobile ? 12 : 24
    setParticles(
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    )
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,157,0.8)]"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
