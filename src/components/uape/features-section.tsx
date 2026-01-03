"use client"

import { Section } from "@/src/components/ui/section"
import { Card } from "@/src/components/ui/card"
import { motion } from "framer-motion"
import { ShieldCheck, Database, Network, Activity, Layers, Radar } from "lucide-react"

const features = [
  {
    title: "Resilience by Design",
    description: "Arquiteturas que resistem a picos de demanda e falhas em campo.",
    icon: ShieldCheck,
  },
  {
    title: "Data Gravity",
    description: "Modelagem e pipelines que reduzem atrito entre coleta e análise.",
    icon: Database,
  },
  {
    title: "Interoperability First",
    description: "Integração nativa com ecossistemas globais e padrões abertos.",
    icon: Network,
  },
  {
    title: "Actionable Insight",
    description: "Camadas analíticas focadas em decisão e tempo de resposta.",
    icon: Activity,
  },
  {
    title: "Modular Stacks",
    description: "Componentes substituíveis com baixo acoplamento e alto reuso.",
    icon: Layers,
  },
  {
    title: "Early Warning",
    description: "Sinais e alertas com visualizações concebidas para vigilância.",
    icon: Radar,
  },
]

export function FeaturesSection() {
  return (
    <Section id="features">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-mono font-bold mb-16 text-center text-primary"
        >
          Engineered Blocks for Real Impact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, index) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1a1a24] border-primary/40 p-6 h-full hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,157,0.25)]">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-mono font-bold text-white mb-1">{f.title}</h3>
                      <p className="text-secondary leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
