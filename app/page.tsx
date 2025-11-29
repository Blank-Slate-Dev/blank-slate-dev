"use client";

// app/page.tsx
import Header from "@/components/header";
import Footer from "@/components/footer";
import Section from "@/components/section";
import { FadeIn } from "@/components/motion/fade-in";
import { SlideUp } from "@/components/motion/slide-up";
import { StaggerChildren } from "@/components/motion/stagger-children";
import { InViewOnce } from "@/components/motion/in-view-once";
import ContactCTA from "@/components/contact-cta";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroCodeBackground from "@/components/hero-code-background";
import HeroContactLink from "@/components/hero-contact-link";
import Logo from "@/components/logo";
import { useRef } from "react";
import {
  ArrowRight,
  Braces,
  Code2,
  Gauge,
  Layout,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

const servicesHeaderVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const servicesGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const serviceCardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Home() {
  const transitionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start center", "end center"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const heroTranslateY = useTransform(scrollYProgress, [0, 0.22], [0, -16]);
  const servicesOpacity = useTransform(scrollYProgress, [0, 0.22], [0, 1]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <Header />


      <div ref={transitionRef} className="relative bg-[#0a0a0a]">
        {/* Hero Section */}
        <motion.section
          id="hero-section"
          className="relative z-10 flex min-h-screen items-center overflow-hidden bg-[#0a0a0a] pt-6 pb-24 lg:pb-36"
          style={{ opacity: heroOpacity, y: heroTranslateY }}
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <HeroCodeBackground />
          </div>

          <Section className="relative z-10 flex w-full items-center justify-center">
            <div className="relative z-10 mx-auto max-w-6xl text-center">
              <div className="relative z-10 mx-auto mb-10 inline-flex">
                <Logo
                  width={600}
                  height={600}
                  className="relative z-10 h-80 w-auto md:h-[25rem] drop-shadow-[0_0_6px_rgba(168,85,255,0.45)] drop-shadow-[0_0_12px_rgba(168,85,255,0.25)]"
                  priority
                />
              </div>

              <SlideUp delay={0.4}>
                <div className="flex justify-center">
                  <div className="relative inline-flex">
                    <HeroContactLink />
                  </div>
                </div>
              </SlideUp>
            </div>
          </Section>
        </motion.section>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[60vh] z-[1] h-64 bg-gradient-to-b from-transparent via-[#0a0a0a]/70 to-transparent"
        />

        {/* Services – What we do best */}
        <motion.section
          id="services"
          className="relative z-10 bg-[#0a0a0a] py-20 sm:py-24 lg:py-28"
          style={{ opacity: servicesOpacity }}
        >
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            {/* Section label */}
            <motion.div
              className="flex flex-col items-center gap-4 text-center"
              variants={servicesHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <span className="inline-flex items-center rounded-full border border-emerald-500/60 bg-emerald-500/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-300 shadow-[0_0_24px_rgba(52,211,153,0.2)]">
                Services
              </span>
              <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                What we do best
              </h2>
              <p className="mt-4 max-w-2xl text-balance text-sm text-slate-300/85 sm:text-base">
                Full-stack rigor paired with high-fidelity design. We ship dark, fast, and
                obsessively engineered experiences that feel native from day one.
              </p>
            </motion.div>

            {/* Services grid */}
            <motion.div
              className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
              variants={servicesGridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              {/* Full-Stack Development */}
              <motion.article
                variants={serviceCardVariants}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0b0b0f]/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.75)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/90 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.25),0_16px_55px_rgba(0,0,0,0.8),0_0_35px_rgba(52,211,153,0.25)]"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-[#54e3b9] text-white shadow-[0_0_25px_rgba(52,211,153,0.45)]">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    Full-Stack Development
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-300/80">
                  Next.js, Node, TypeScript, databases tuned for scale. We architect resilient
                  products that stay fast under real traffic.
                </p>
                <p className="mt-3 text-xs font-semibold text-emerald-300/80">
                  • Clean architecture • API-first design • High-performance UIs
                </p>
              </motion.article>

              {/* UI/UX Design */}
              <motion.article
                variants={serviceCardVariants}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0b0b0f]/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.75)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/90 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.25),0_16px_55px_rgba(0,0,0,0.8),0_0_35px_rgba(52,211,153,0.25)]"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-[#7dd3fc] text-white shadow-[0_0_26px_rgba(56,189,248,0.45)]">
                    <Layout className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    UI/UX Design
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-300/80">
                  Product strategy to pixel-perfect delivery. We craft interfaces that stay
                  sharp in dark mode and convert without friction.
                </p>
                <p className="mt-3 text-xs font-semibold text-emerald-300/80">
                  • Wireframes to polish • Design systems • Interaction design
                </p>
              </motion.article>

              {/* Performance Optimization */}
              <motion.article
                variants={serviceCardVariants}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0b0b0f]/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.75)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/90 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.25),0_16px_55px_rgba(0,0,0,0.8),0_0_35px_rgba(52,211,153,0.25)]"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-[#38bdf8] text-white shadow-[0_0_26px_rgba(56,189,248,0.38)]">
                    <Gauge className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    Performance Optimization
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-300/80">
                  Core Web Vitals, bundle budgets, edge delivery, and profiling to shave
                  milliseconds. We keep your experience laser fast.
                </p>
                <p className="mt-3 text-xs font-semibold text-emerald-300/80">
                  • Profiling • Caching • Edge delivery • SEO-aware performance
                </p>
              </motion.article>

              {/* API Development */}
              <motion.article
                variants={serviceCardVariants}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0b0b0f]/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.75)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/90 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.25),0_16px_55px_rgba(0,0,0,0.8),0_0_35px_rgba(52,211,153,0.25)]"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-[#22d3ee] text-white shadow-[0_0_26px_rgba(34,211,238,0.42)]">
                    <Braces className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    API Development
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-300/80">
                  REST, GraphQL, queues, and event-driven patterns with strong contracts and
                  observability baked in from the start.
                </p>
                <p className="mt-3 text-xs font-semibold text-emerald-300/80">
                  • Robust contracts • Versioning • Observability
                </p>
              </motion.article>

              {/* Security & Compliance */}
              <motion.article
                variants={serviceCardVariants}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0b0b0f]/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.75)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/90 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.25),0_16px_55px_rgba(0,0,0,0.8),0_0_35px_rgba(52,211,153,0.25)]"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-purple-500 text-white shadow-[0_0_26px_rgba(168,85,247,0.45)]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    Security & Compliance
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-300/80">
                  Secure defaults, least-privilege access, audits, and encryption-first
                  pipelines so you launch with confidence.
                </p>
                <p className="mt-3 text-xs font-semibold text-emerald-300/80">
                  • Auth & permissions • Hardening • Auditing
                </p>
              </motion.article>

              {/* DevOps & Deployment */}
              <motion.article
                variants={serviceCardVariants}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0b0b0f]/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.75)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/90 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.25),0_16px_55px_rgba(0,0,0,0.8),0_0_35px_rgba(52,211,153,0.25)]"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-sky-500 text-white shadow-[0_0_26px_rgba(59,130,246,0.4)]">
                    <ServerCog className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    DevOps & Deployment
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-300/80">
                  CI/CD automation, zero-downtime releases, telemetry, and recovery plans.
                  Your stack stays observable and ship-ready.
                </p>
                <p className="mt-3 text-xs font-semibold text-emerald-300/80">
                  • Pipelines • Monitoring • 24/7-ready setups
                </p>
              </motion.article>
            </motion.div>
          </div>
        </motion.section>
      </div>
      {/* Process */}
      <Section className="bg-[#0a0a0a] py-24 lg:py-32">
        <InViewOnce>
          <div className="text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200/90">
                PROCESS
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                How we work
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
                A battle-tested process refined over 120+ successful projects.
              </p>
            </FadeIn>
          </div>

          <div className="mt-20 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--border))] to-transparent transform -translate-y-1/2 hidden lg:block" />
            <div className="grid gap-12 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Deep dive into your vision, goals, and technical requirements.",
                  color: "from-[#604585] to-[#8f6fcc]",
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Wireframes, prototypes, and pixel-perfect UI designs.",
                  color: "from-[#8f6fcc] to-[#c48ef6]",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Agile sprints with weekly demos and continuous deployment.",
                  color: "from-[#2d233d] to-[#604585]",
                },
                {
                  step: "04",
                  title: "Launch",
                  description: "Go live with confidence, backed by thorough testing and support.",
                  color: "from-[#b373ef] to-[#c48ef6]",
                },
              ].map((item, idx) => (
                <SlideUp key={idx} delay={idx * 0.15}>
                  <div className="relative text-center lg:text-left">
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white font-bold text-xl shadow-lg mb-6`}>
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </InViewOnce>
      </Section>

      {/* Work Preview */}
      <Section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <InViewOnce>
          <div className="text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200/90">
                PORTFOLIO
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Recent work
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
                A selection of projects we're proud to showcase.
              </p>
            </FadeIn>
          </div>

          <StaggerChildren className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "FinTech Dashboard",
                description: "Real-time analytics platform for cryptocurrency trading",
                tags: ["Next.js", "WebSockets", "D3.js"],
                gradient: "from-blue-400 to-purple-600",
              },
              {
                title: "Healthcare Portal",
                description: "HIPAA-compliant telemedicine platform with video consultations",
                tags: ["React", "Node.js", "WebRTC"],
                gradient: "from-[#604585] to-[#8f6fcc]",
              },
              {
                title: "E-Learning Platform",
                description: "Interactive education platform with AI-powered recommendations",
                tags: ["Vue.js", "Python", "TensorFlow"],
                gradient: "from-orange-400 to-pink-600",
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="group overflow-hidden border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.6)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.75)] transition-all duration-300 cursor-pointer"
              >
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 border border-white/10 backdrop-blur-sm rounded-lg p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Case Study</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-slate-300 leading-relaxed">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gradient-to-r from-white/10 to-white/5 px-4 py-1.5 text-xs font-semibold text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </StaggerChildren>

          <FadeIn>
            <div className="mt-16 text-center">
              <Button size="lg" variant="outline" className="group border-2">
                View all case studies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </FadeIn>
        </InViewOnce>
      </Section>

      {/* Testimonials */}
      <Section className="bg-[#0a0a0a] py-24 lg:py-32">
        <InViewOnce>
          <div className="text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200/90">
                TESTIMONIALS
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Client success stories
              </h2>
            </FadeIn>
          </div>

          <StaggerChildren className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "Blank Slate Dev transformed our startup vision into a world-class product. Their technical expertise and attention to detail exceeded all expectations.",
                author: "Sarah Chen",
                role: "CEO & Founder",
                company: "TechStart",
                gradient: "from-blue-500 to-purple-600",
              },
              {
                quote: "Working with them was like having a senior engineering team on demand. They delivered our MVP 2 weeks ahead of schedule with zero compromises on quality.",
                author: "Michael Rodriguez",
                role: "CTO",
                company: "Growth Co",
                gradient: "from-[#604585] to-[#c48ef6]",
              },
              {
                quote: "The best development partner we've ever worked with. They don't just code – they understand business goals and deliver solutions that drive real results.",
                author: "Emily Watson",
                role: "Head of Product",
                company: "ScaleUp Inc",
                gradient: "from-orange-500 to-pink-600",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="relative overflow-hidden border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.6)] p-8">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`} />
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg className="h-8 w-8 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="flex-grow text-lg text-slate-200 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-slate-300">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </StaggerChildren>
        </InViewOnce>
      </Section>

      {/* Contact CTA */}
      <ContactCTA />

      <Footer />
    </div>
  );
}
