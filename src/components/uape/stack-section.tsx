"use client"

import { Card } from "@/src/components/ui/card"
import { motion } from "framer-motion"
import { Section } from "@/src/components/ui/section"

const tools = [
  {
    title: "DHIS2",
    description: "Architecture & Data Warehousing",
  },
  {
    title: "GoData",
    description: "Outbreak Investigation & Chain of Transmission",
  },
  {
    title: "GetODK",
    description: "Field-grade Data Collection & ETL",
  },
  {
    title: "EWARS / EIOS",
    description: "Early Warning, Alert, and Response Systems",
  },
  {
    title: "Custom Dashboards",
    description: "Real-time visualization for Ministries and International Authorities",
  },
]

export function StackSection() {
  return (
    <Section id="stack" className="relative">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-mono font-bold mb-16 text-center text-primary"
        >
          Native Mastery of the Global Health Ecosystem
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a24] border-primary/40 p-6 h-full hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,157,0.3)]">
                <h3 className="text-2xl font-mono font-bold text-primary mb-3">{tool.title}</h3>
                <p className="text-secondary leading-relaxed">{tool.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-linear-to-b from-[rgba(32,213,213,0.06)] to-[rgba(0,255,157,0.06)]" />
    </Section>
  )
}
