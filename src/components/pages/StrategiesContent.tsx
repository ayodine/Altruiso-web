"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ScrollRevealText } from "@/components/ui/ScrollRevealText";
import { MarqueeBand } from "@/components/ui/MarqueeBand";

const audiences = [
  { label: "Governments", desc: "Federal, provincial, and national agencies." },
  { label: "Crown Corporations", desc: "State-owned enterprises and public bodies." },
  { label: "Municipalities", desc: "Cities, regions, and local government." },
  { label: "Educational Institutions", desc: "Universities, colleges, and school boards." },
  { label: "Nonprofits", desc: "Mission-driven and community organizations." },
  { label: "Businesses", desc: "Companies of every size and stage." },
];

const services = [
  { title: "Strategy & Advisory", body: "Clear direction and decision support for complex challenges." },
  { title: "Organizational Transformation", body: "Reshaping how organizations operate, adapt, and grow." },
  { title: "Financial Education", body: "Building financial literacy across teams and communities." },
  { title: "Corporate Training", body: "Practical programs that lift capability and performance." },
  { title: "Leadership Development", body: "Developing leaders equipped for what comes next." },
  { title: "Community Engagement", body: "Engagement that brings stakeholders together around shared goals." },
  { title: "Government Consulting", body: "Advisory and delivery built for the public sector." },
];

const heroStats = [
  { value: "06", caption: "Sectors we serve, public and private" },
  { value: "07", caption: "Service disciplines under one roof" },
  { value: "01", caption: "Accountable partner, end to end" },
];

const tickerItems = ["Strategy", "Facilitation", "Education", "Advisory", "Training", "Engagement"];

const disciplines = ["Strategy", "Facilitation", "Education", "Advisory"];

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
      {/* Hero — editorial: headline, offset paragraph, staggered stat trio */}
      <section
        className="min-h-screen flex items-center"
        style={{ background: "#000", paddingTop: "clamp(120px, 14vw, 200px)", paddingBottom: "clamp(80px, 10vw, 160px)" }}
      >
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeSmooth }}
          >
            <Label>Altruiso Strategies</Label>
            <h1
              className="font-display text-white"
              style={{ fontSize: "clamp(44px, 7vw, 110px)", lineHeight: 1.0, letterSpacing: "-0.035em", maxWidth: "13ch" }}
            >
              Helping Organizations Solve Meaningful Challenges.
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
              Our consulting and advisory company serves governments, crown
              corporations, municipalities, educational institutions,
              nonprofits, and businesses through strategy, facilitation,
              education, and advisory services.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <Link
                href="/#builders-welcome"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-medium text-white"
                style={{ fontSize: "15px", background: "#0276E8", boxShadow: "0 0 40px rgba(2,118,232,0.25)" }}
                data-cursor-hover
              >
                Work With Us
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
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

          {/* Staggered stat trio */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10 mt-20 md:mt-28 max-w-4xl">
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.caption}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.12, ease: easeSmooth }}
                className="border-t border-white/15 pt-5"
              >
                <div className={i === 1 ? "sm:mt-10" : i === 2 ? "sm:mt-20" : ""}>
                  <span
                    className="font-display text-white block leading-none"
                    style={{ fontSize: "clamp(48px, 5vw, 76px)", letterSpacing: "-0.03em" }}
                  >
                    {stat.value}
                    <span className="text-[#0276E8]">.</span>
                  </span>
                  <p className="text-body-sm text-white/40 mt-3 max-w-[22ch]" style={{ lineHeight: 1.5 }}>
                    {stat.caption}
                  </p>
                </div>
              </motion.div>
            ))}
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
                Built for the organizations that shape communities.
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

      {/* What We Do — editorial service ledger */}
      <section className="section-pad" style={{ background: "#000" }}>
        <div className="container-site">
          <div className="max-w-2xl mb-12 md:mb-16">
            <Label>What We Do</Label>
            <h2
              className="font-display text-white"
              style={{ fontSize: "clamp(32px, 4vw, 60px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              A full-service consulting partner.
            </h2>
          </div>

          {/* Column headers */}
          <div className="hidden md:grid grid-cols-12 gap-8 pb-4 border-b border-white/10">
            <span className="col-span-6 text-overline text-white/30">Service</span>
            <span className="col-span-6 text-overline text-white/30">What it delivers</span>
          </div>

          <div>
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.04, ease: easeSmooth }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline py-6 md:py-7 border-b border-white/10 transition-colors hover:bg-white/[0.015]"
              >
                <div className="md:col-span-6 flex items-baseline gap-5">
                  <span className="font-heading text-[#0276E8]/50 shrink-0" style={{ fontSize: "14px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-display text-white group-hover:text-[#CDE6FF] transition-colors"
                    style={{ fontSize: "clamp(24px, 2.6vw, 40px)", letterSpacing: "-0.02em", lineHeight: 1.08 }}
                  >
                    {s.title}
                  </h3>
                </div>
                <p className="md:col-span-6 text-body-lg text-white/50" style={{ lineHeight: 1.6 }}>
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capability — statement band, revealed word-by-word on scroll */}
      <section className="section-pad mesh-gradient">
        <div className="container-site">
          <Label>Our Capability</Label>
          <ScrollRevealText
            text="Altruiso Strategies is our professional consulting profile and **government contracting** platform. As we win contracts, this becomes our **proof of capability.**"
            className="font-display text-white max-w-5xl"
            style={{ fontSize: "clamp(30px, 4.2vw, 64px)", lineHeight: 1.18, letterSpacing: "-0.025em" }}
          />

          <div className="mt-14 md:mt-20 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-8">
            <div className="flex flex-wrap items-center gap-3">
              {disciplines.map((d) => (
                <span
                  key={d}
                  className="font-heading text-white/60 px-5 py-2.5 rounded-full"
                  style={{ fontSize: "14px", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  {d}
                </span>
              ))}
            </div>
            <Link
              href="/#builders-welcome"
              className="group inline-flex items-center gap-2 font-heading font-medium text-white/70 hover:text-white transition-colors"
              style={{ fontSize: "15px" }}
              data-cursor-hover
            >
              Start a conversation
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "#000" }}>
        <div className="container-site">
          <div className="max-w-3xl">
            <Label>Work With Us</Label>
            <h2
              className="font-heading font-medium text-white mb-8"
              style={{ fontSize: "clamp(32px, 5vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
            >
              Let&rsquo;s solve it together.
            </h2>
            <p className="text-body-xl text-white/55 mb-12" style={{ lineHeight: 1.8, maxWidth: "560px" }}>
              If your organization is navigating a meaningful challenge, we&rsquo;d
              love to explore how we can help.
            </p>
            <Link
              href="/#builders-welcome"
              className="group inline-flex items-center gap-3 px-9 py-5 rounded-full font-heading font-medium text-white"
              style={{
                fontSize: "16px",
                background: "linear-gradient(135deg, #0276E8 0%, #005CB7 100%)",
                boxShadow: "0 0 40px rgba(2,118,232,0.3)",
              }}
              data-cursor-hover
            >
              Work With Us
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
