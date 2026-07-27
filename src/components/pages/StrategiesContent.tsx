"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Target, TrendingUp, GraduationCap, Users, Compass, Handshake, BarChart3, Check, Layers, Rocket, type LucideIcon } from "lucide-react";
import { ScrollRevealText } from "@/components/ui/ScrollRevealText";
import { MarqueeBand } from "@/components/ui/MarqueeBand";
import { CTASection } from "@/components/sections/CTASection";

const CALENDLY_URL = "https://calendly.com/thealtruiso/30min";

const audiences = [
  { label: "Governments", desc: "Federal, provincial, and national agencies." },
  { label: "Crown Corporations", desc: "State-owned enterprises and public bodies." },
  { label: "Municipalities", desc: "Cities, regions, and local government." },
  { label: "Educational Institutions", desc: "Universities, colleges, and school boards." },
  { label: "Nonprofits", desc: "Mission-driven and community organizations." },
  { label: "Businesses", desc: "Companies of every size and stage." },
];

const capabilities: { title: string; icon: LucideIcon; items: string[] }[] = [
  {
    title: "Strategy",
    icon: Target,
    items: ["Research & Strategic Planning", "Government Advisory", "Economic Development", "Tourism Strategy"],
  },
  {
    title: "Organizational Growth",
    icon: TrendingUp,
    items: ["Organizational Transformation", "Leadership Development", "Change Management", "Program Evaluation"],
  },
  {
    title: "Learning & Capability",
    icon: GraduationCap,
    items: ["Financial Wellness", "Corporate Training", "Professional Development", "Workshops"],
  },
  {
    title: "Community & Stakeholders",
    icon: Users,
    items: ["Community Engagement", "Stakeholder Consultation", "Facilitation", "Public Speaking"],
  },
  {
    title: "Typical Engagements",
    icon: Handshake,
    items: [
      "Develop strategic plans and organizational roadmaps.",
      "Policy & Research Projects",
      "Strengthen organizational performance and lead change initiatives.",
      "Build leadership capability and workforce capacity.",
      "Design, improve, or evaluate programs and services.",
      "Engage stakeholders, partners, and communities effectively.",
      "Deliver financial education and workforce development initiatives.",
      "Measure impact and support continuous improvement.",
    ],
  },
];

const approach: { title: string; icon: LucideIcon; body: string }[] = [
  {
    title: "Practical Strategy",
    icon: Compass,
    body: "Solutions grounded in real-world execution, not theory.",
  },
  {
    title: "Collaborative Delivery",
    icon: Handshake,
    body: "Working alongside your team to build alignment, capability, and momentum.",
  },
  {
    title: "Measurable Outcomes",
    icon: BarChart3,
    body: "Focusing on results that create lasting value for organizations and the communities they serve.",
  },
];

const focus = [
  "Strategic Planning",
  "Organizational Growth",
  "Learning & Capability",
  "Advisory & Partnerships",
];

const tickerItems = ["Strategy", "Transformation", "Education", "Advisory", "Facilitation", "Engagement"];

const easeSmooth: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="blue-line" />
      <span className="text-overline text-white/40">{children}</span>
    </div>
  );
}

export function StrategiesContent() {
  return (
    <>
      {/* Hero — editorial: headline, offset paragraph, focus row */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#000", paddingTop: "clamp(120px, 14vw, 200px)", paddingBottom: "clamp(80px, 10vw, 160px)" }}
      >
        {/* Baked hero photo — silhouettes over the city, blended into black */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-strategies.jpg"
            alt=""
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: 0.5,
              objectPosition: "62% 45%",
              filter: "saturate(0.7) contrast(1.08) brightness(0.9)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #000 15%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.4) 100%), linear-gradient(to top, #000 8%, transparent 50%), linear-gradient(to bottom, #000 2%, transparent 30%)",
            }}
          />
        </div>
        <div className="container-site relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeSmooth }}
          >
            <Label>Altruiso Strategies</Label>
            <h1
              className="font-display text-white"
              style={{ fontSize: "clamp(42px, 6.4vw, 100px)", lineHeight: 1.0, letterSpacing: "-0.035em", maxWidth: "17ch" }}
            >
              Helping Organizations Move From Ideas to Measurable Impact.
            </h1>
          </motion.div>

          {/* Offset intro — editorial right column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: easeSmooth }}
            className="mt-12 md:mt-16 lg:ml-[41.666%] max-w-[620px]"
          >
            <p className="text-body-xl text-white/60" style={{ lineHeight: 1.7 }}>
              Altruiso Strategies partners with governments, public
              institutions, nonprofits, businesses, and community organizations
              to solve complex challenges through strategy, implementation,
              leadership, and capability building. Together, we turn ideas into
              practical action and measurable results.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 font-heading font-medium text-white"
                style={{ fontSize: "15px", background: "#0276E8", boxShadow: "0 0 40px rgba(2,118,232,0.25)" }}
                data-cursor-hover
              >
                Partner With Us
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors font-heading font-medium"
                style={{ fontSize: "15px" }}
                data-cursor-hover
              >
                <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Altruiso
              </Link>
            </div>
          </motion.div>

          {/* Our Focus — four disciplines, top-aligned hairline row */}
          <div className="mt-20 md:mt-28">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-overline text-white/40 block mb-8"
            >
              Our Focus
            </motion.span>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
              {focus.map((word, i) => (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: easeSmooth }}
                  className="border-t border-white/15 pt-5"
                >
                  <span className="font-heading text-[#0276E8]/50 block mb-3" style={{ fontSize: "13px", letterSpacing: "0.08em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-display text-white block leading-none"
                    style={{ fontSize: "clamp(26px, 2.8vw, 44px)", letterSpacing: "-0.02em" }}
                  >
                    {word}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discipline ticker — Consilio-style band */}
      <section
        className="py-7 md:py-9 border-y border-white/[0.07] select-none"
        style={{ background: "#050505" }}
        aria-hidden="true"
      >
        <MarqueeBand duration={22} trackClassName="gap-x-10 pr-10 md:gap-x-14 md:pr-14">
          {tickerItems.map((item) => (
            <span key={item} className="flex items-center gap-x-10 md:gap-x-14">
              <span
                className="font-heading font-medium uppercase whitespace-nowrap text-white/55"
                style={{ fontSize: "clamp(14px, 1.4vw, 18px)", letterSpacing: "0.22em" }}
              >
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#0276E8" }} />
            </span>
          ))}
        </MarqueeBand>
      </section>

      {/* Who We Serve — hairline grid, no card boxes */}
      <section className="section-pad" style={{ background: "#0A0A0A" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-14 md:mb-20 items-end">
            <div className="lg:col-span-7">
              <Label>Who We Serve</Label>
              <h2
                className="font-display text-white"
                style={{ fontSize: "clamp(32px, 4vw, 60px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
              >
                Partnering with organizations that create lasting impact.
              </h2>
            </div>
            <p className="lg:col-span-5 text-body-md text-white/45 lg:pb-2" style={{ lineHeight: 1.7, maxWidth: "380px" }}>
              From national agencies to local businesses: six sectors, one
              standard of rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {audiences.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: easeSmooth }}
                className="group relative pt-7"
                data-cursor-hover
              >
                {/* resting hairline + growing accent line */}
                <span className="absolute top-0 left-0 w-full h-px bg-white/10" aria-hidden="true" />
                <span
                  className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                  style={{ background: "#0276E8" }}
                  aria-hidden="true"
                />
                <span className="font-heading text-[#0276E8]/60 block mb-5" style={{ fontSize: "13px", letterSpacing: "0.08em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-display text-white group-hover:text-[#CDE6FF] transition-colors duration-300 mb-3"
                  style={{ fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
                >
                  {a.label}
                </h3>
                <p className="text-body-sm text-white/40" style={{ lineHeight: 1.65 }}>
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help — four capabilities, editorial ledger */}
      <section className="section-pad" style={{ background: "#000" }}>
        <div className="container-site">
          <div className="max-w-2xl mb-12 md:mb-16">
            <Label>How We Help</Label>
            <h2
              className="font-display text-white"
              style={{ fontSize: "clamp(32px, 4vw, 60px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              Strategy. Education. Transformation.
            </h2>
          </div>

          {/* Column headers */}
          <div className="hidden md:grid grid-cols-12 gap-8 pb-4 border-b border-white/10">
            <span className="col-span-5 text-overline text-white/30">Capabilities &amp; Disciplines</span>
            <span className="col-span-7 text-overline text-white/30">Focus &amp; Offerings</span>
          </div>

          {/* Table Rows — Tresmares "Fund Overview" editorial table style */}
          <div className="border-t md:border-t-0 border-white/10">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-7 md:py-8 border-b border-white/10 transition-colors hover:bg-white/[0.015]"
              >
                <div className="md:col-span-5 flex items-baseline gap-5">
                  <span className="font-heading text-[#0276E8]/50" style={{ fontSize: "14px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-display text-white group-hover:text-[#CDE6FF] transition-colors"
                    style={{
                      fontSize: "clamp(26px, 3vw, 44px)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.05,
                      fontWeight: 400,
                    }}
                  >
                    {c.title}
                  </h3>
                </div>
                <div className="md:col-span-7 flex flex-wrap gap-2.5 pt-2 md:pt-0">
                  {c.items.map((item) => (
                    <span
                      key={item}
                      className="font-heading text-white/60 px-4 py-2"
                      style={{ fontSize: "14px", border: "1px solid rgba(255,255,255,0.12)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work — 3-step process section adopted from Investflow / Optimus */}
      <section className="section-pad" style={{ background: "#050505" }}>
        <div className="container-site">
          <div className="flex items-center gap-3 mb-4">
            <span className="blue-line" />
            <span className="text-overline text-[#0276E8]">Our Process</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20 items-end">
            <div className="lg:col-span-7">
              <h2
                className="font-display text-white font-normal"
                style={{ fontSize: "clamp(34px, 4.4vw, 64px)", letterSpacing: "-0.025em", lineHeight: 1.04, fontWeight: 400 }}
              >
                How We Work
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-body-md text-white/50" style={{ lineHeight: 1.75 }}>
                A structured, collaborative approach to delivering practical strategies and lasting results.
              </p>
            </div>
          </div>

          {/* 3-Cell Hairline Bento Grid */}
          <div
            className="grid md:grid-cols-3 gap-px border border-white/10"
            style={{ background: "rgba(255,255,255,0.10)" }}
          >
            {[
              {
                icon: Compass,
                title: "Understand",
                description:
                  "We take time to understand your organization, challenges, stakeholders, and objectives before recommending solutions.",
              },
              {
                icon: Layers,
                title: "Design",
                description:
                  "Together, we develop practical strategies, programs, and implementation plans tailored to your goals.",
              },
              {
                icon: Rocket,
                title: "Deliver",
                description:
                  "We support implementation, build organizational capability, and measure progress to help ensure lasting results.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: easeSmooth }}
                className="group relative p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#0276E8]/40"
                style={{ background: "#0A0A0A" }}
                data-cursor-hover
              >
                {/* Top active blue accent line */}
                <span
                  className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                  style={{ background: "#0276E8" }}
                  aria-hidden="true"
                />

                {/* Subtle hover radial glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 70% at 100% 0%, rgba(2,118,232,0.12) 0%, transparent 65%)",
                    border: "1px solid rgba(2,118,232,0.22)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <step.icon size={28} strokeWidth={1.5} className="text-[#0276E8]" />
                  </div>
                  <h3
                    className="font-display text-white group-hover:text-[#CDE6FF] transition-colors mb-4 font-normal"
                    style={{ fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: 1.12, letterSpacing: "-0.015em", fontWeight: 400 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-body-md text-white/55" style={{ lineHeight: 1.7 }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Altruiso Strategies — statement, approach, procurement */}
      <section className="section-pad mesh-gradient">
        <div className="container-site">
          <Label>Why Altruiso Strategies</Label>
          <ScrollRevealText
            text="We help organizations turn **strategy into action.** By combining strategic thinking, practical implementation, and capability building, we partner with organizations to solve meaningful challenges and deliver **measurable, lasting outcomes.**"
            className="font-display text-white max-w-5xl"
            style={{ fontSize: "clamp(30px, 4.2vw, 64px)", lineHeight: 1.18, letterSpacing: "-0.025em" }}
          />

          {/* Our Approach — 3-cell bento with glass icons */}
          <div className="mt-16 md:mt-24">
            <span className="text-overline text-white/40 block mb-8">Our Approach</span>
            <div
              className="grid md:grid-cols-3 gap-px border border-white/10"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              {approach.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: easeSmooth }}
                  className="p-7 md:p-8"
                  style={{ background: "rgba(5,7,10,0.85)" }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <a.icon size={26} strokeWidth={1.5} className="text-[#0276E8]" />
                    <span className="font-heading text-[#0276E8]/60" style={{ fontSize: "13px", letterSpacing: "0.08em" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3
                    className="font-heading font-medium text-white mb-3"
                    style={{ fontSize: "clamp(20px, 2vw, 26px)", letterSpacing: "-0.01em" }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-body-sm text-white/50" style={{ lineHeight: 1.7 }}>
                    {a.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Engagement Model — Reusing exact WhatWeDo split layout & 4 StepCards */}
          <div className="mt-20 md:mt-28 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
            {/* Sticky heading column */}
            <div className="lg:w-[38%] lg:sticky lg:top-28 lg:self-start flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <span className="blue-line" />
                <span className="text-overline text-white/40">Our Engagement Model</span>
              </div>
              <div className="flex flex-col gap-4">
                <h2
                  className="font-display text-white"
                  style={{
                    fontSize: "clamp(34px, 4vw, 52px)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.08,
                    maxWidth: "420px",
                  }}
                >
                  Think, Plan, Implement, Evaluate
                </h2>
                <p
                  className="text-body-lg text-white/55"
                  style={{ maxWidth: "440px", lineHeight: 1.5 }}
                >
                  Four stages designed to move your organization from initial clarity to long-term, measurable impact.
                </p>
              </div>
            </div>

            {/* Stacked cards — exact WhatWeDo StepCard design with 4 cards */}
            <div className="lg:flex-1 flex flex-col gap-4">
              {[
                {
                  title: "Thinking",
                  description: "Clarifying opportunities, challenges, and priorities.",
                  number: "01",
                },
                {
                  title: "Planning",
                  description: "Developing strategies, roadmaps, policies, and programs.",
                  number: "02",
                },
                {
                  title: "Implementation",
                  description: "Supporting execution, organizational change, and capability building.",
                  number: "03",
                },
                {
                  title: "Evaluation",
                  description: "Measuring outcomes, identifying lessons learned, and informing future decisions.",
                  number: "04",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: easeSmooth }}
                  className="group relative flex flex-col sm:flex-row sm:items-stretch overflow-hidden"
                  style={{ background: "#121212", border: "1px solid rgba(255,255,255,0.06)" }}
                  data-cursor-hover
                >
                  {/* Hover blue glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 80% at 100% 0%, rgba(2,118,232,0.10) 0%, transparent 60%)",
                      border: "1px solid rgba(2,118,232,0.18)",
                    }}
                  />

                  {/* Ghost numeral — masked so it fades in from the edge */}
                  <div className="stepcard-mask relative shrink-0 flex items-center justify-center sm:justify-end overflow-hidden h-[110px] sm:h-auto sm:w-[clamp(96px,16vw,158px)]">
                    <span
                      aria-hidden="true"
                      className="font-mono leading-none select-none"
                      style={{
                        fontSize: "clamp(84px, 10vw, 150px)",
                        letterSpacing: "-0.04em",
                        lineHeight: 1.1,
                        color: "#EDEDED",
                        opacity: 0.1,
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Texts */}
                  <div className="relative z-10 flex flex-col justify-center gap-3 p-6 md:p-8">
                    <h3
                      className="font-body"
                      style={{ fontSize: "20px", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.3, color: "#fff" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-body"
                      style={{ fontSize: "16px", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.4, color: "rgba(255,255,255,0.6)", maxWidth: "440px" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Procurement & Partnerships */}
          <div className="mt-16 md:mt-20 pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <span className="lg:col-span-4 text-overline text-white/40">
              Procurement &amp; Partnerships
            </span>
            <p className="lg:col-span-7 text-body-lg text-white/55" style={{ lineHeight: 1.75, maxWidth: "620px" }}>
              We welcome opportunities through direct engagements, competitive
              procurements, standing offers, strategic partnerships, and
              collaborative initiatives across the public, private, and
              nonprofit sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Decoupled Call to Action — strategies page only */}
      <CTASection />
    </>
  );
}
