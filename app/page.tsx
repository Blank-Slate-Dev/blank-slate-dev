// app/page.tsx
"use client";

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
import HeroSplineMacbook from "@/components/hero-spline-macbook";
import HeroContactLink from "@/components/hero-contact-link";
import Logo from "@/components/logo";
import { SplineShowcase } from "@/components/spline-showcase";
import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const backgroundFadeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: backgroundFadeRef,
    offset: ["start end", "end start"],
  });

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Small delay so layout/paint is ready before we start the global fade
    const timer = setTimeout(() => setIsPageLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const gradientOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 0.6, 1]
  );
  const gradientShift = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.div
      className="relative min-h-screen bg-[#0a0a0a]"
      initial={{ opacity: 0 }}
      animate={{ opacity: isPageLoaded ? 1 : 0 }}
      transition={{ duration: 3 }}
    >
      <Header />

      <div ref={backgroundFadeRef} className="relative">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            opacity: gradientOpacity,
            y: gradientShift,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 45%, rgba(20,20,20,0.4) 65%, rgba(20,20,20,0) 100%)",
          }}
        />

        {/* ---------------------------------------------------------- */}
        {/* HERO SECTION                                                */}
        {/* ---------------------------------------------------------- */}
        <section
          id="hero-section"
          className="relative min-h-screen overflow-hidden bg-[#0a0a0a] pt-20 pb-24 lg:pt-24 lg:pb-36"
        >
          {/* Code background - RIGHT SIDE ONLY */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <HeroCodeBackground />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 h-full flex items-center">
            <div className="w-full">
              {/* Two-column layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[calc(100vh-12rem)]">
                {/* LEFT COLUMN - Spline MacBook */}
                <div className="order-2 lg:order-1 relative z-20">
                  <FadeIn delay={0.2}>
                    <HeroSplineMacbook />
                  </FadeIn>
                </div>

                {/* RIGHT COLUMN - Logo and CTA */}
                <div className="order-1 lg:order-2 flex flex-col items-center text-center relative z-10">
                  <div className="relative z-10 mb-10 inline-flex">
                    <Logo
                      width={600}
                      height={600}
                      className="relative z-10 h-52 w-auto sm:h-64 md:h-72 lg:h-[20rem] xl:h-[22rem] drop-shadow-[0_0_6px_rgba(255,122,26,0.45)] drop-shadow-[0_0_12px_rgba(255,177,94,0.25)]"
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
              </div>
            </div>
          </div>

          <div className="relative w-full h-[300px] pointer-events-none select-none">
            {/* Floor gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black" />

            {/* Reflection glow */}
            <div
              className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[200px] 
                  bg-[radial-gradient(ellipse_at_center,rgba(255,140,60,0.25)_0%,rgba(0,0,0,0)_70%)]
                  blur-3xl opacity-60"
            />
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* ★ PRODUCT SHOWCASE (SPLINE STUDIO DISPLAY)                 */}
        {/* ---------------------------------------------------------- */}
        <Section className="relative bg-[#050505] py-20 lg:py-24">
          <InViewOnce>
            <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
              <FadeIn>
                <div className="mb-10 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/60 bg-emerald-500/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-emerald-300 shadow-[0_0_24px_rgba(52,211,153,0.25)]">
                    Product Showcase
                  </div>
                  <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Your product, in the spotlight
                  </h2>
                  <p className="mt-4 max-w-2xl mx-auto text-balance text-sm sm:text-base text-slate-300/85">
                    A live 3D Studio Display mockup powered by Spline. Rotate,
                    explore, and see your experience on a real desk.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <SplineShowcase src="https://my.spline.design/studiodisplaymockup-x8bozQLUV3KDA9br1zCYkwhy/" />
              </FadeIn>
            </div>
          </InViewOnce>
        </Section>

        {/* ---------------------------------------------------------- */}
        {/* SERVICES SECTION                                           */}
        {/* ---------------------------------------------------------- */}
        <section id="services" className="relative bg-[#050505]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[160px] bg-gradient-to-b from-[#0a0a0a] to-[#050505]"
          />

          <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:py-28 lg:px-8">
            <motion.div
              className="flex flex-col items-center gap-4 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center rounded-full border border-emerald-500/60 bg-emerald-500/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-300 shadow-[0_0_24px_rgba(52,211,153,0.2)]">
                Services
              </span>
              <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                What we do best
              </h2>
              <p className="mt-4 max-w-2xl text-balance text-sm text-slate-300/85 sm:text-base">
                Full-stack rigor paired with high-fidelity design. We ship dark,
                fast, and obsessively engineered experiences that feel native
                from day one.
              </p>
            </motion.div>
          </div>
        </section>
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
                  description:
                    "Deep dive into your vision, goals, and technical requirements.",
                  color: "from-[#604585] to-[#8f6fcc]",
                },
                {
                  step: "02",
                  title: "Design",
                  description:
                    "Wireframes, prototypes, and pixel-perfect UI designs.",
                  color: "from-[#8f6fcc] to-[#c48ef6]",
                },
                {
                  step: "03",
                  title: "Development",
                  description:
                    "Agile sprints with weekly demos and continuous deployment.",
                  color: "from-[#2d233d] to-[#604585]",
                },
                {
                  step: "04",
                  title: "Launch",
                  description:
                    "Go live with confidence, backed by thorough testing and support.",
                  color: "from-[#b373ef] to-[#c48ef6]",
                },
              ].map((item, idx) => (
                <SlideUp key={idx} delay={idx * 0.15}>
                  <div className="relative text-center lg:text-left">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white font-bold text-xl shadow-lg mb-6`}
                    >
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
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
                description:
                  "Real-time analytics platform for cryptocurrency trading",
                tags: ["Next.js", "WebSockets", "D3.js"],
                gradient: "from-blue-400 to-purple-600",
              },
              {
                title: "Healthcare Portal",
                description:
                  "HIPAA-compliant telemedicine platform with video consultations",
                tags: ["React", "Node.js", "WebRTC"],
                gradient: "from-[#604585] to-[#8f6fcc]",
              },
              {
                title: "E-Learning Platform",
                description:
                  "Interactive education platform with AI-powered recommendations",
                tags: ["Vue.js", "Python", "TensorFlow"],
                gradient: "from-orange-400 to-pink-600",
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="group overflow-hidden border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.6)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.75)] transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 border border-white/10 backdrop-blur-sm rounded-lg p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Case Study
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
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
                quote:
                  "Blank Slate Dev transformed our startup vision into a world-class product. Their technical expertise and attention to detail exceeded all expectations.",
                author: "Sarah Chen",
                role: "CEO & Founder",
                company: "TechStart",
                gradient: "from-blue-500 to-purple-600",
              },
              {
                quote:
                  "Working with them was like having a senior engineering team on demand. They delivered our MVP 2 weeks ahead of schedule with zero compromises on quality.",
                author: "Michael Rodriguez",
                role: "CTO",
                company: "Growth Co",
                gradient: "from-[#604585] to-[#c48ef6]",
              },
              {
                quote:
                  "The best development partner we've ever worked with. They don't just code – they understand business goals and deliver solutions that drive real results.",
                author: "Emily Watson",
                role: "Head of Product",
                company: "ScaleUp Inc",
                gradient: "from-orange-500 to-pink-600",
              },
            ].map((testimonial, idx) => (
              <Card
                key={idx}
                className="relative overflow-hidden border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.6)] p-8"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`}
                />
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg
                      className="h-8 w-8 text-slate-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
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
    </motion.div>
  );
}
