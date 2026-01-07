"use client"

import { motion } from "framer-motion"
import { Section } from "@/src/components/ui/section"
import { Globe, Users, Brain } from "lucide-react"

export function AboutSection() {
  return (
    <Section id="about" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-8 text-primary leading-tight">
              Two Decades of Intelligence. <br/> A Lifetime of Impact.
            </h2>

            <div className="space-y-6 text-lg text-white/80 leading-relaxed text-justify hyphens-auto">
              <p>
                The <span className="text-white font-semibold">UAPÉ Collective</span> is not just a software agency. We
                are a specialized task force of <span className="text-primary">Software Engineers</span>,
                <span className="text-primary"> Epidemiologists</span>, and{" "}
                <span className="text-primary">Statisticians</span>.
              </p>

              <p>
                With over <span className="text-white font-semibold">20 years of experience</span> at the highest levels
                of global health, our leadership team comprises PhDs and subject matter experts who have sat at the tables
                of the world&apos;s leading international health organizations.
              </p>

              <p>
                We don&apos;t just &quot;write code.&quot; We understand the nuances of disease transmission, the sensitivity of
                demographic data, and the urgency of a response. We bridge the gap between{" "}
                <span className="text-primary">Computer Science</span> and
                <span className="text-primary"> Public Health Science</span>, ensuring that the systems we build are
                technically superior and epidemiologically sound.
              </p>
            </div>
            
            <div className="flex gap-6 mt-10">
                <div className="flex items-center gap-2 text-sm font-mono text-secondary">
                    <Users className="w-5 h-5" />
                    <span>Multi-disciplinary Team</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-secondary">
                    <Brain className="w-5 h-5" />
                    <span>PhD-Level Expertise</span>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px]" />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full relative z-10"
                >
                     <Globe className="w-full h-full text-primary/20 stroke-[0.5]" />
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-0 p-3 bg-[#1a1a24] border border-primary/30 rounded-lg shadow-xl backdrop-blur-sm z-20"
                >
                    <div className="text-xs font-mono text-primary">Geneva, CH</div>
                    <div className="text-[10px] text-secondary">HQ Liaison</div>
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-0 p-3 bg-[#1a1a24] border border-primary/30 rounded-lg shadow-xl backdrop-blur-sm z-20"
                >
                    <div className="text-xs font-mono text-primary">Global Response</div>
                    <div className="text-[10px] text-secondary">Active Deployment</div>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
