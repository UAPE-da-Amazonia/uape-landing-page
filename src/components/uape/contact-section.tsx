"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { Section } from "@/src/components/ui/section"
import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <Section id="contact" className="relative overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-primary mb-4">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Let's talk!</h3>
                <p className="text-secondary/80 text-lg leading-relaxed max-w-md">
                  I am always available to discuss new projects, creative opportunities 
                  or interesting partnerships. Don't hesitate to contact us!
                </p>
              </div>

              {/* Static Email Card */}
              <div className="flex items-center gap-4 p-6 bg-[#1a1a24] rounded-2xl border border-white/5">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-secondary font-mono mb-1">Email</p>
                  <span
                    className="text-xl font-bold text-white"
                  >
                    adm@uape.us
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
             <ContactForm />
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
