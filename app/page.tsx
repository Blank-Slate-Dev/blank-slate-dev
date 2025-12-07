// app/page.tsx
"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Section from "@/components/section";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren } from "@/components/motion/stagger-children";
import { InViewOnce } from "@/components/motion/in-view-once";
import { SlideUp } from "@/components/motion/slide-up";
import ContactCTA from "@/components/contact-cta";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { SplineShowcase } from "@/components/spline-showcase";
import { useRef, useEffect, useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const backgroundFadeRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: backgroundFadeRef,
    offset: ["start end", "end start"],
  });

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Handle scroll events on the hero section
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    window.scrollBy({
      top: e.deltaY,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("wheel", handleWheel, { passive: false });
      return () => {
        heroElement.removeEventListener("wheel", handleWheel);
      };
    }
  }, [handleWheel]);

  const gradientOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 0.6, 1]
  );
  const gradientShift = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.div
      className="relative w-screen min-h-screen bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: isPageLoaded ? 1 : 0 }}
      transition={{ duration: 3 }}
    >
      <Header />

      <div ref={backgroundFadeRef} className="relative w-screen">
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
          ref={heroRef}
          id="hero-section"
          className="relative w-screen h-screen overflow-hidden bg-black m-0 p-0"
        >
          {/* Full-screen interactive Spline background (keyboard keys) */}
          <div className="hero-keyscape absolute inset-0 z-0">
            <iframe
              src="https://my.spline.design/draganddroplandingpage-a87141UdBxnPCLMo72o08mXO/"
              frameBorder="0"
              className="h-full w-full"
              allow="fullscreen"
              style={{ border: "none" }}
            />
          </div>

          {/* MacBook Spline - centered vertically, 100px from left */}
          <div
            className="absolute z-10 pointer-events-none"
            style={{
              left: "100px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "45%",
              maxWidth: "700px",
              aspectRatio: "16 / 10",
            }}
          >
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <iframe
                src="https://my.spline.design/macbookwithcode-Xe4xd7M8vkd14o4G8w63yuPl/"
                frameBorder="0"
                className="w-full h-full"
                allow="fullscreen"
                style={{ border: "none", pointerEvents: "none" }}
              />
            </motion.div>
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
                    WHAT WE DO
                  </div>
                  <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Fully Functional Websites
                  </h2>
                  <p className="mt-4 max-w-2xl mx-auto text-balance text-sm sm:text-base text-slate-300/85">
                    Websites that are built from the ground up, 100% custom coded
                    and designed specifically for your business.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <SplineShowcase src="https://my.spline.design/studiodisplaymockup-x8bozQLUV3KDA9br1zCYkwhy/" />
              </FadeIn>
            </div>
          </InViewOnce>
        </Section>

      </div>

      {/* Process */}
      <section className="relative w-full flex flex-col items-center py-32 bg-[#0a0a0a]">
        <InViewOnce>
          <FadeIn>
            <div className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
                PROCESS
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                How we work
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300/90">
                A vertical, neon-lit journey from first discovery to launch.
              </p>
            </div>
          </FadeIn>
        </InViewOnce>

        <div className="mt-20 flex flex-col items-center gap-16">
          {[
            {
              step: "01",
              title: "Discovery",
              description:
                "We learn your goals and identify exactly what your business needs.",
              neonClass: "neon-step-1",
              connectorClass: "connector-step-1",
            },
            {
              step: "02",
              title: "Design",
              description: "We craft clean, purposeful UI/UX that fits your vision.",
              neonClass: "neon-step-2",
              connectorClass: "connector-step-2",
            },
            {
              step: "03",
              title: "Development",
              description:
                "We build fast, reliable, fully custom websites — no templates, ever.",
              neonClass: "neon-step-3",
              connectorClass: "connector-step-3",
            },
            {
              step: "04",
              title: "Launch",
              description:
                "We deploy, optimise, and support your site for long-term success.",
              neonClass: "neon-step-4",
              connectorClass: "connector-step-4",
            },
          ].map((item, idx, arr) => (
            <div key={item.step} className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
              <InViewOnce>
                <FadeIn delay={0.08 * (idx + 1)}>
                  <SlideUp distance={28} duration={0.7} ease="easeOut" scaleFrom={1.04}>
                    <div className={`tile-card ${item.neonClass} shadow-[0_0_18px_rgba(255,255,255,0.08)]`}>
                      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                        <div className="tile-glow-text text-[11px] font-semibold uppercase tracking-[0.42em]">
                          Step {item.step}
                        </div>
                        <h3 className="tile-glow-text text-3xl font-semibold tracking-[0.02em] sm:text-4xl">
                          {item.title}
                        </h3>
                        <p className="max-w-xl text-base leading-relaxed text-white/90">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </SlideUp>
                </FadeIn>
              </InViewOnce>

              {idx < arr.length - 1 && (
                <InViewOnce>
                  <FadeIn delay={0.16 * (idx + 1)}>
                    <div className={`connector ${item.connectorClass}`} />
                  </FadeIn>
                </InViewOnce>
              )}
            </div>
          ))}
        </div>
      </section>

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

      {/* Contact CTA */}
      <ContactCTA />

      <Footer />
    </motion.div>
  );
}
