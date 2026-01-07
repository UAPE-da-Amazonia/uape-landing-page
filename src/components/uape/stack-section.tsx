"use client"

import { Card } from "@/src/components/ui/card"
import { motion } from "framer-motion"
import { Section } from "@/src/components/ui/section"
import { Database, Network, Smartphone, Siren, LayoutDashboard, Globe } from "lucide-react"

const tools = [
  {
    title: "DHIS2",
    description: "Enterprise-scale health information systems. Custom modules for national aggregate and tracker data.",
    icon: Database,
  },
  {
    title: "GoData",
    description: "Contact tracing and outbreak investigation. Chain of transmission visualization and field epidemiology.",
    icon: Network,
  },
  {
    title: "GetODK",
    description: "Offline-first mobile data collection. Complex logic forms, geospatial data, and automated ETL pipelines.",
    icon: Smartphone,
  },
  {
    title: "EWARS / EIOS",
    description: "Early Warning, Alert, and Response Systems. Signal detection from unstructured open-source intelligence.",
    icon: Siren,
  },
  {
    title: "Custom Dashboards",
    description: "Bespoke visualization engines built on React/D3. Real-time situational awareness for Emergency Operations Centers.",
    icon: LayoutDashboard,
  },
  {
    title: "Interoperability",
    description: "FHIR-compliant integration layers connecting disparate health systems (EMRs, Labs, Logistics) into a unified data lake.",
    icon: Globe,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay:
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? 0
                    : index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a24] border-primary/40 p-6 h-full hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,157,0.3)] group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                    <tool.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-mono font-bold text-primary mt-1">{tool.title}</h3>
                </div>
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
