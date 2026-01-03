"use client"

import { Section } from "@/src/components/ui/section"
import { motion } from "framer-motion"

const stats = [
  { value: "20+", label: "anos de experiência", accent: "#00ff9d" },
  { value: "30+", label: "implantações de sistemas", accent: "#20d5d5" },
  { value: "12+", label: "Estados-Membros suportados", accent: "#00ff9d" },
  { value: "99.9%", label: "uptime em produção", accent: "#20d5d5" },
]

export function StatsSection() {
  return (
    <Section id="stats">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-mono font-bold mb-16 text-center text-[#00ff9d]"
        >
          Impacto Mensurável
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, index) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border p-6 text-center"
              style={{
                borderColor: `${s.accent}80`,
                background:
                  "linear-gradient(180deg, rgba(0,255,157,0.06) 0%, rgba(32,213,213,0.06) 100%)",
              }}
            >
              <div
                className="text-4xl md:text-5xl font-mono font-bold mb-2"
                style={{ color: s.accent }}
              >
                {s.value}
              </div>
              <div className="text-[#20d5d5] text-sm md:text-base">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
