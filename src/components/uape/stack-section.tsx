"use client"

import { Card } from "@/src/components/ui/card"
import { motion } from "framer-motion"

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
    <section id="stack" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-mono font-bold mb-16 text-center text-[#00ff9d]"
        >
          Native Mastery of the Global Health Ecosystem
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a24] border-[#00ff9d]/30 p-6 h-full hover:border-[#00ff9d] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,157,0.3)]">
                <h3 className="text-2xl font-mono font-bold text-[#00ff9d] mb-3">{tool.title}</h3>
                <p className="text-[#20d5d5] leading-relaxed">{tool.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
