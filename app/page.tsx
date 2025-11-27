// app/page.tsx
import Header from "@/components/header";
import Footer from "@/components/footer";
import Section from "@/components/section";
import { FadeIn } from "@/components/motion/fade-in";
import { SlideUp } from "@/components/motion/slide-up";
import { StaggerChildren } from "@/components/motion/stagger-children";
import { InViewOnce } from "@/components/motion/in-view-once";
import FeatureCard from "@/components/feature-card";
import ContactCTA from "@/components/contact-cta";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import HeroCodeBackground from "@/components/hero-code-background";
import {
  Code2,
  Sparkles,
  Rocket,
  Blocks,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0a] pt-6 pb-24 lg:pb-36"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <HeroCodeBackground />
        </div>

        <Section className="relative z-10 flex w-full items-center justify-center">
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <div className="relative z-10 mx-auto mb-10 inline-flex">
              <Image
                src="/Blank-slate-dev.png"
                alt="Blank Slate Dev"
                width={600}
                height={600}
                className="relative z-10 h-80 w-auto md:h-[25rem] drop-shadow-[0_0_20px_rgba(0,255,102,0.6)]"
                priority
              />
            </div>

          <SlideUp delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="xl"
                className="group bg-[#B085FF] bg-none text-white shadow-none transition-all [transition-duration:250ms] ease-in-out hover:scale-[1.04] hover:bg-[#B085FF] hover:bg-none hover:shadow-[0_0_22px_rgba(0,255,102,0.6)]"
              >
                Start your project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="xl"
                className="group bg-[#A8C7FF] bg-none text-white shadow-none transition-all [transition-duration:250ms] ease-in-out hover:scale-[1.04] hover:bg-[#A8C7FF] hover:bg-none hover:shadow-[0_0_20px_#A8C7FF]"
              >
                View case studies
              </Button>
            </div>
          </SlideUp>

          <SlideUp delay={0.6}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-slate-800 font-medium">2-week sprints</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-slate-800 font-medium">Fixed pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-slate-800 font-medium">100% remote</span>
              </div>
            </div>
          </SlideUp>
          </div>
        </Section>
      </section>

      {/* What We Do */}
      <Section className="py-24 lg:py-32 bg-white">
        <InViewOnce>
          <div className="text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-100 to-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                SERVICES
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                What we do best
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
                Full-stack development expertise combined with world-class design to build products users love.
              </p>
            </FadeIn>
          </div>

          <StaggerChildren className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Code2 className="h-6 w-6" />}
              title="Full-Stack Development"
              description="React, Next.js, Node.js, TypeScript. We build scalable applications with modern tech stacks."
              gradient="from-blue-500 to-indigo-600"
            />
            <FeatureCard
              icon={<Sparkles className="h-6 w-6" />}
              title="UI/UX Design"
              description="Beautiful, intuitive interfaces that delight users and drive engagement metrics."
              gradient="from-purple-500 to-pink-600"
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Performance Optimization"
              description="Lightning-fast load times, SEO optimization, and Core Web Vitals excellence."
              gradient="from-orange-500 to-red-600"
            />
            <FeatureCard
              icon={<Blocks className="h-6 w-6" />}
              title="API Development"
              description="RESTful and GraphQL APIs, microservices, and seamless third-party integrations."
              gradient="from-[#604585] to-[#8f6fcc]"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Security & Compliance"
              description="Enterprise-grade security, GDPR compliance, and comprehensive testing."
              gradient="from-[#8f6fcc] to-[#c48ef6]"
            />
            <FeatureCard
              icon={<Rocket className="h-6 w-6" />}
              title="DevOps & Deployment"
              description="CI/CD pipelines, cloud infrastructure, monitoring, and 24/7 support."
              gradient="from-indigo-500 to-blue-600"
            />
          </StaggerChildren>
        </InViewOnce>
      </Section>

      {/* Process */}
      <Section className="bg-gradient-to-b from-[#f3edf9] to-white py-24 lg:py-32">
        <InViewOnce>
          <div className="text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f3edf9] to-[#e8dcfb] px-4 py-2 text-sm font-semibold text-slate-800">
                PROCESS
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                How we work
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
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
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </InViewOnce>
      </Section>

      {/* Work Preview */}
      <Section className="py-24 lg:py-32 bg-white">
        <InViewOnce>
          <div className="text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-100 to-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                PORTFOLIO
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Recent work
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
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
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Case Study</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gradient-to-r from-slate-100 to-slate-50 px-4 py-1.5 text-xs font-semibold text-slate-700"
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
      <Section className="bg-gradient-to-b from-[#f3edf9] to-white py-24 lg:py-32">
        <InViewOnce>
          <div className="text-center">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f3edf9] to-[#e8dcfb] px-4 py-2 text-sm font-semibold text-slate-800">
                TESTIMONIALS
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
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
              <Card key={idx} className="relative overflow-hidden border-0 shadow-lg p-8">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`} />
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg className="h-8 w-8 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="flex-grow text-lg text-slate-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-600">
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
