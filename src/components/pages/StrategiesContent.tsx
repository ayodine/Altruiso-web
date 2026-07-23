"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ScrollRevealText } from "@/components/ui/ScrollRevealText";
import { MarqueeBand } from "@/components/ui/MarqueeBand";
import { GlassIcon, type GlassIconVariant } from "@/components/ui/GlassIcon";

const CALENDLY_URL = "https://calendly.com/thealtruiso/30min";

const audiences = [
  { label: "Governments", desc: "Federal, provincial, and national agencies." },
  { label: "Crown Corporations", desc: "State-owned enterprises and public bodies." },
  { label: "Municipalities", desc: "Cities, regions, and local government." },
  { label: "Educational Institutions", desc: "Universities, colleges, and school boards." },
  { label: "Nonprofits", desc: "Mission-driven and community organizations." },
  { label: "Businesses", desc: "Companies of every size and stage." },
];

const capabilities: { title: string; icon: GlassIconVariant; items: string[] }[] = [
  {
    title: "Strategy",
    icon: "prism",
    items: ["Research & Strategic Planning", "Government Advisory", "Economic Development", "Tourism Strategy"],
  },
  {
    title: "Organizational Growth",
    icon: "stack",
    items: ["Organizational Transformation", "Leadership Development", "Change Management", "Program Evaluation"],
  },
  {
    title: "Learning & Capability",
    icon: "book",
    items: ["Financial Wellness", "Corporate Training", "Professional Development", "Workshops"],
  },
  {
    title: "Community & Stakeholders",
    icon: "pinwheel",
    items: ["Community Engagement", "Stakeholder Consultation", "Facilitation", "Public Speaking"],
  },
];

const approach = [
  {
    title: "Practical Strategy",
    body: "Solutions grounded in real-world execution, not theory.",
  },
  {
    title: "Collaborative Delivery",
    body: "Working alongside your team to build alignment, capability, and momentum.",
  },
  {
    title: "Measurable Outcomes",
    body: "Focusing on results that create lasting value for organizations and the communities they serve.",
  },
];

const focus = ["Strategy", "Transformation", "Education", "Advisory"];

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
              institutions, nonprofits, businesses, and communities to design
              practical strategies, strengthen organizations, and deliver
              measurable outcomes.
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
                    <span className="text-[#0276E8]">.</span>
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
              From national agencies to local businesses — six sectors, one
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

      {/* What We Do — four capabilities, editorial ledger */}
      <section className="section-pad" style={{ background: "#000" }}>
        <div className="container-site">
          <div className="max-w-2xl mb-12 md:mb-16">
            <Label>What We Do</Label>
            <h2
              className="font-display text-white"
              style={{ fontSize: "clamp(32px, 4vw, 60px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              Strategy. Education. Transformation.
            </h2>
          </div>

          {/* Capability bento — 2×2 cells with glass icons */}
          <div
            className="grid md:grid-cols-2 gap-px border border-white/10"
            style={{ background: "rgba(255,255,255,0.10)" }}
          >
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: easeSmooth }}
                className="group p-8 md:p-10"
                style={{ background: "#0B0D10" }}
              >
                <div className="flex items-start justify-between mb-8">
                  <GlassIcon variant={c.icon} size={72} />
                  <span className="font-heading text-[#0276E8]/50" style={{ fontSize: "14px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="font-display text-white group-hover:text-[#CDE6FF] transition-colors mb-6"
                  style={{ fontSize: "clamp(26px, 2.8vw, 40px)", letterSpacing: "-0.02em", lineHeight: 1.08 }}
                >
                  {c.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {c.items.map((item) => (
                    <span
                      key={item}
                      className="font-heading text-white/55 px-4 py-2 whitespace-nowrap"
                      style={{ fontSize: "13.5px", border: "1px solid rgba(255,255,255,0.12)" }}
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
                    <GlassIcon variant={(["sphere", "ring", "bars"] as GlassIconVariant[])[i]} size={56} />
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

      {/* CTA */}
      <section className="section-pad" style={{ background: "#000" }}>
        <div className="container-site">
          <div className="max-w-3xl">
            <Label>Partner With Us</Label>
            <h2
              className="font-heading font-medium text-white mb-8"
              style={{ fontSize: "clamp(32px, 5vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
            >
              Let&rsquo;s build something that lasts.
            </h2>
            <p className="text-body-xl text-white/55 mb-12" style={{ lineHeight: 1.8, maxWidth: "560px" }}>
              Whether you&rsquo;re designing a new strategy, leading
              organizational change, or delivering a community initiative,
              we&rsquo;d love to explore how we can help.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-9 py-5 font-heading font-medium text-white"
                style={{
                  fontSize: "16px",
                  background: "linear-gradient(135deg, #0276E8 0%, #005CB7 100%)",
                  boxShadow: "0 0 40px rgba(2,118,232,0.3)",
                }}
                data-cursor-hover
              >
                Partner With Us
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-heading font-medium text-white/60 hover:text-white transition-colors"
                style={{ fontSize: "15px" }}
                data-cursor-hover
              >
                Start a conversation
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
