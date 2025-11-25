// components/contact-cta.tsx
"use client";

import { useState } from "react";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { motion } from "framer-motion";

export default function ContactCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    setIsOpen(false);
  };

  return (
    <Section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f3edf9] via-[#e8dcfb] to-[#f6f2fb]" />
      
      <FadeIn>
        <motion.div 
          className="relative"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2d233d] via-[#4f3a72] to-[#8f6fcc] p-2">
            <div className="rounded-3xl bg-gradient-to-br from-[#2d233d] via-[#4f3a72] to-[#8f6fcc] px-12 py-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"
              />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-8"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                
                <h2 className="text-5xl font-black text-white mb-6">
                  Ready to build something amazing?
                </h2>
                <p className="mx-auto max-w-2xl text-xl text-[#ede7f5] mb-12">
                  Let's turn your vision into reality. Get a free consultation and project estimate.
                </p>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="xl"
                      className="bg-white text-[#4f3a72] hover:bg-[#f3edf9] shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-lg px-10 py-6"
                    >
                      Start your project
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </DialogTrigger>
                  
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">Let's get started</DialogTitle>
                      <DialogDescription className="text-base">
                        Tell us about your project and we'll be in touch within 24 hours.
                      </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-5 mt-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                          Your name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                          Company (optional)
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                          placeholder="Acme Inc."
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                          Project details
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          required
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                          placeholder="Tell us about your project, timeline, and budget..."
                        />
                      </div>

                      <Button type="submit" className="w-full py-3 text-base font-semibold">
                        Send message
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </motion.div>
      </FadeIn>
    </Section>
  );
}