"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [blast, setBlast] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const footer = document.getElementById("footer")
      
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        setIsVisible(scrollY > 300 || footerTop < windowHeight - 300)
      } else {
        setIsVisible(scrollY > 300)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() 

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    setBlast(true)
    const startY = window.scrollY
    if (startY <= 0) {
      setBlast(false)
      return
    }
    const duration = startY < 800 ? 600 : 1000
    const startTime = performance.now()
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(1, elapsed / duration)
      const eased = ease(progress)
      const current = Math.max(0, Math.round(startY * (1 - eased)))
      window.scrollTo(0, current)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        window.scrollTo(0, 0)
        setBlast(false)
        rafRef.current = null
      }
    }
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(step)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-99 w-14 h-14 rounded-full bg-[#00ff9d] text-[#0a0a0f] flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(0,255,157,0.6)] transition-all duration-300 font-mono font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff9d]/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <motion.div
            animate={
              blast
                ? {
                    y: [-2, -18, 0],
                    scale: [1, 1.15, 1],
                    rotate: [0, -20, 0],
                  }
                : undefined
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ArrowUp size={24} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
