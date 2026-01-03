"use client";

import { Button } from "@/src/components/ui/button";
import { Section } from "@/src/components/ui/section";
import { motion } from "framer-motion";

interface HeroSectionProps {
  scrollY: number;
}

export function HeroSection({ scrollY }: HeroSectionProps) {
  return (
    <Section
      id="home"
      className="flex flex-col items-center justify-center relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10"
      >
        <div className="mb-12 flex justify-center">
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="relative w-48 h-48"
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full filter drop-shadow-[0_0_20px_rgba(0,255,157,0.5)]"
            >
              <ellipse
                cx="100"
                cy="100"
                rx="90"
                ry="90"
                fill="none"
                stroke="rgba(0, 255, 157, 0.8)"
                strokeWidth="2"
              />
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                const rad = (angle * Math.PI) / 180;
                const x2 =
                  Math.round((100 + Math.cos(rad) * 90) * 1000000) / 1000000;
                const y2 =
                  Math.round((100 + Math.sin(rad) * 90) * 1000000) / 1000000;
                return (
                  <line
                    key={i}
                    x1="100"
                    y1="100"
                    x2={x2}
                    y2={y2}
                    stroke="rgba(0, 255, 157, 0.4)"
                    strokeWidth="1"
                  />
                );
              })}
              <circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="rgba(0, 255, 157, 0.3)"
                strokeWidth="1"
              />
              <circle
                cx="100"
                cy="100"
                r="30"
                fill="none"
                stroke="rgba(0, 255, 157, 0.3)"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        </div>

        <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 text-balance">
          <span className="text-primary">UAPÉ</span>: Engineering the
          Architecture of Global Health
        </h1>
        <p className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto mb-12 leading-relaxed text-pretty">
          Translating complex epidemiological challenges into resilient data
          ecosystems. From field collection to global surveillance, we build the
          foundations that save lives.
        </p>
        <Button size="xl" variant="uapeOutline" className="font-mono text-lg">
          [ Initialize Consultation ]
        </Button>
      </motion.div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(0,255,157,0.04)] to-[rgba(32,213,213,0.04)]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,255,157,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,157,0.1)_1px,transparent_1px)] bg-size-[50px_50px]"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
      </div>
    </Section>
  );
}
