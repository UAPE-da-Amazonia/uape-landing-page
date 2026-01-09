"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Form submitted:", data)
      setSubmitStatus("success")
      reset()
    } catch (error) {
      console.error("Submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#1a1a24] p-8 rounded-2xl border border-white/5 relative">
      <h3 className="text-xl font-bold text-white mb-2">Send a message</h3>
      <p className="text-secondary/60 text-sm mb-8">
        Fill out the form below and I will get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold text-secondary">
              Name
            </label>
            <input
              {...register("name")}
              id="name"
              placeholder="Your full name"
              className={cn(
                "w-full px-4 py-3 rounded-sm bg-background/50 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all",
                errors.name && "border-red-500/50 focus:ring-red-500/20"
              )}
            />
            {errors.name && (
              <span className="text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.name.message}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-secondary">
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              placeholder="your@email.com"
              className={cn(
                "w-full px-4 py-3 rounded-sm bg-background/50 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all",
                errors.email && "border-red-500/50 focus:ring-red-500/20"
              )}
            />
            {errors.email && (
              <span className="text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-bold text-secondary">
            Subject
          </label>
          <input
            {...register("subject")}
            id="subject"
            placeholder="Subject of the message"
            className={cn(
              "w-full px-4 py-3 rounded-sm bg-background/50 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all",
              errors.subject && "border-red-500/50 focus:ring-red-500/20"
            )}
          />
          {errors.subject && (
            <span className="text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.subject.message}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold text-secondary">
            Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            placeholder="Describe your project or question..."
            className={cn(
              "w-full px-4 py-3 rounded-sm bg-background/50 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none",
              errors.message && "border-red-500/50 focus:ring-red-500/20"
            )}
          />
          {errors.message && (
            <span className="text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message.message}
            </span>
          )}
        </div>

        <Button
          type="submit"
          variant="uapeSolid"
          size="lg"
          disabled={isSubmitting}
          className={cn(
            "w-full bg-primary text-background font-bold hover:bg-primary/90",
            "hover:translate-y-0 hover:shadow-none shadow-none"
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5 text-green-500" />
            <p className="text-sm text-green-200">
              Message sent successfully! I'll get back to you soon.
            </p>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-500" />
            <p className="text-sm text-red-200">
              Failed to send message. Please try again later.
            </p>
          </motion.div>
        )}
      </form>
    </div>
  )
}
