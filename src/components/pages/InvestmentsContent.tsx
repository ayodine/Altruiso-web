"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ArrowUpRight, Telescope, ClipboardCheck, Landmark, TrendingUp, Layers, UserCheck, Rocket, Scale, HeartHandshake, type LucideIcon } from "lucide-react";
import { DonutChart, type DonutDatum } from "@/components/ui/DonutChart";
import { ScrollRevealText } from "@/components/ui/ScrollRevealText";
import { MarqueeBand } from "@/components/ui/MarqueeBand";
import { InvestmentsCTA } from "@/components/sections/InvestmentsCTA";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { PITCH_FORM_URL } from "@/lib/utils";

// Illustrative allocation — sectors ordered so no two low-separation hues sit
// adjacent; palette validated for the dark surface (dataviz six-checks).
const portfolio: DonutDatum[] = [
  { label: "Technology", value: 25, color: "#0276E8" },
  { label: "Real estate", value: 25, color: "#8B5CF6" },
  { label: "Energy", value: 10, color: "#059669" },
  { label: "Education", value: 10, color: "#0891B2" },
  { label: "Food", value: 10, color: "#EA580C" },
  { label: "Travel & Hospitality", value: 10, color: "#EC4899" },
  { label: "Health Care", value: 10, color: "#EAB308" },
];

const steps: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Telescope,
    title: "Discover",
    body: "We identify exceptional businesses, founders, and opportunities aligned with our long-term investment philosophy.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluate",
    body: "We take the time to understand the business, the people, and the long-term opportunity. We audit the financials. We focus on quality rather than complexity.",
  },
  {
    icon: Landmark,
    title: "Invest",
    body: "If there's alignment, we invest through equity ownership or strategic partnerships depending on deal structure. We don't believe in unnecessary bureaucracy. We believe in building trusted, long-term relationships.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    body: "We respect the independence of the businesses we invest in while providing strategic guidance, governance support, and access to our expertise when it creates long-term value.",
  },
];

const approach = [
  {
    title: "Growth-Stage Businesses",
    body: "Our primary focus — investing in established businesses ready for their next stage of growth.",
  },
  {
    title: "Strategic Acquisitions",
    body: "Acquiring quality businesses with enduring potential.",
  },
  {
    title: "Exceptional Founders",
    body: "Select early-stage investments in exceptional founders and ideas where we have high conviction.",
  },
];

const easeSmooth: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="blue-line" />
      <span className="text-overline text-white/40">{children}</span>
    </div>
  );
}

export function InvestmentsContent() {
  const [activeSector, setActiveSector] = useState<number | null>(null);
  const total = portfolio.reduce((sum, d) => sum + d.value, 0);

  return (
    <>
      {/* Hero — editorial: headline, offset paragraph, staggered stat trio */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#000", paddingTop: "clamp(120px, 14vw, 200px)", paddingBottom: "clamp(80px, 10vw, 160px)" }}
      >
        {/* Baked hero photo — dark tower blended into the black canvas */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-investments.jpg"
            alt=""
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: 0.8,
              objectPosition: "52% 62%",
              filter: "saturate(0.85) contrast(1.1) brightness(1.15)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #000 8%, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.15) 100%), linear-gradient(to top, #000 5%, transparent 40%), linear-gradient(to bottom, #000 1%, transparent 25%)",
            }}
          />
        </div>
        <div className="container-site relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeSmooth }}
          >
            <Label>Altruiso Investments</Label>
            <h1
              className="font-display text-white"
              style={{ fontSize: "clamp(44px, 7vw, 110px)", lineHeight: 1.0, letterSpacing: "-0.035em", maxWidth: "22ch" }}
            >
              Investing in Businesses That create enduring value for generations to come.
            </h1>
          </motion.div>

          {/* Offset intro — editorial right column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: easeSmooth }}
            className="mt-12 md:mt-16 lg:ml-[41.666%] max-w-[600px]"
          >
            <p className="text-body-xl text-white/60" style={{ lineHeight: 1.7 }}>
              We invest patiently in businesses and opportunities we believe
              will create enduring economic and social value.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <a
                href={PITCH_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 font-heading font-medium text-white"
                style={{ fontSize: "15px", background: "#0276E8", boxShadow: "0 0 40px rgba(2,118,232,0.25)" }}
                data-cursor-hover
              >
                Pitch for Investment
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

        </div>
      </section>

      {/* Our Philosophy — large statement, revealed word-by-word on scroll */}
      <section className="section-pad" style={{ background: "#0A0A0A" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Label>Our Philosophy</Label>
                <p className="text-body-sm text-white/35 max-w-[26ch]" style={{ lineHeight: 1.7 }}>
                  The conviction behind every position we take.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ScrollRevealText
                text="Our investment philosophy is inspired by **altruism.** We believe capital should do more than generate returns. It should support businesses that solve meaningful problems, strengthen industries, and create **opportunity** for people and communities."
                className="font-display text-white"
                style={{ fontSize: "clamp(28px, 3.6vw, 54px)", lineHeight: 1.25, letterSpacing: "-0.02em" }}
              />
              <div className="mt-12 md:mt-16 pl-6 md:pl-10" style={{ borderLeft: "2px solid #0276E8" }}>
                <ScrollRevealText
                  text="That is why we invest where we believe **long-term value** can be created."
                  className="font-display text-white/85"
                  style={{ fontSize: "clamp(22px, 2.4vw, 34px)", lineHeight: 1.35, letterSpacing: "-0.015em" }}
                  end="bottom 55%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By logo marquee */}
      <TrustedBy />

      {/* Our Portfolio — sector ledger rows drive the donut */}
      <section className="section-pad" style={{ background: "#000" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            <div className="lg:col-span-6">
              <Label>Our Portfolio</Label>
              <h2
                className="font-display text-white mb-6"
                style={{ fontSize: "clamp(32px, 4vw, 60px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
              >
                What we own and invest in.
              </h2>
              <p className="text-body-lg text-white/55 mb-12" style={{ lineHeight: 1.7, maxWidth: "460px" }}>
                We invest in a diversified base of businesses and opportunities across
                sectors. As new companies join the mix, the portfolio grows.
              </p>

              {/* Sector ledger */}
              <div className="border-t border-white/10">
                {portfolio.map((sector, i) => {
                  const pct = Math.round((sector.value / total) * 100);
                  const dimmed = activeSector != null && activeSector !== i;
                  return (
                    <motion.button
                      key={sector.label}
                      type="button"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.55, delay: i * 0.06, ease: easeSmooth }}
                      onMouseEnter={() => setActiveSector(i)}
                      onMouseLeave={() => setActiveSector(null)}
                      onFocus={() => setActiveSector(i)}
                      onBlur={() => setActiveSector(null)}
                      className="group w-full flex items-baseline gap-5 py-5 border-b border-white/10 text-left transition-opacity duration-300"
                      style={{ opacity: dimmed ? 0.35 : 1 }}
                      data-cursor-hover
                    >
                      <span className="font-heading text-[#0276E8]/50 tabular-nums shrink-0" style={{ fontSize: "13px" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex items-center gap-3 flex-1 min-w-0">
                        <span
                          className="w-2 h-2 rounded-full shrink-0 self-center transition-transform duration-300 group-hover:scale-125"
                          style={{ background: sector.color }}
                          aria-hidden="true"
                        />
                        <span
                          className="font-heading font-medium text-white group-hover:text-[#CDE6FF] transition-colors truncate"
                          style={{ fontSize: "clamp(18px, 1.8vw, 24px)", letterSpacing: "-0.01em" }}
                        >
                          {sector.label}
                        </span>
                      </span>
                      <span
                        className="font-display text-white/70 group-hover:text-white transition-colors tabular-nums shrink-0"
                        style={{ fontSize: "clamp(18px, 1.8vw, 24px)", letterSpacing: "-0.01em" }}
                      >
                        {pct}%
                      </span>
                    </motion.button>
                  );
                })}
              </div>
              <p className="text-caption text-white/25 mt-4">
                Illustrative allocation across current focus sectors.
              </p>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end lg:sticky lg:top-28 pt-4">
              <DonutChart
                data={portfolio}
                size={320}
                thickness={34}
                hideLegend
                active={activeSector}
                onActiveChange={setActiveSector}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Invest */}
      <section className="section-pad" style={{ background: "#0A0A0A" }}>
        <div className="container-site">
          <div className="max-w-2xl mb-16 md:mb-20">
            <Label>How We Invest</Label>
            <h2
              className="font-display text-white mb-5"
              style={{ fontSize: "clamp(32px, 4vw, 60px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              Simple. Clear. Fast.
            </h2>
            <p className="text-body-lg text-white/55" style={{ lineHeight: 1.7 }}>
              A patient, disciplined approach — without the bureaucracy.
            </p>
          </div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px border border-white/10"
            style={{ background: "rgba(255,255,255,0.10)" }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: easeSmooth }}
                className="p-8"
                style={{ background: "#0B0D10" }}
              >
                <div className="flex items-start justify-between mb-7">
                  <step.icon size={30} strokeWidth={1.5} className="text-[#0276E8]" />
                  <span
                    className="font-heading text-white/20"
                    style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="font-heading font-medium text-white mb-3"
                  style={{ fontSize: "clamp(20px, 2vw, 26px)", letterSpacing: "-0.01em" }}
                >
                  {step.title}
                </h3>
                <p className="text-body-sm text-white/50" style={{ lineHeight: 1.7 }}>
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Approach — Tresmares "Fund Overview" editorial table */}
      <section className="section-pad" style={{ background: "#000" }}>
        <div className="container-site">
          <div className="mb-10 md:mb-14">
            <Label>Investment Approach</Label>
            <h2
              className="font-display leading-none"
              style={{
                fontSize: "clamp(48px, 9vw, 150px)",
                letterSpacing: "-0.035em",
                color: "rgba(255,255,255,0.13)",
              }}
            >
              How We Deploy Capital
            </h2>
            <p
              className="text-body-lg text-white/55 mt-6"
              style={{ lineHeight: 1.7, maxWidth: "560px" }}
            >
              We primarily invest in established businesses with strong
              fundamentals and long-term growth potential. In exceptional
              cases, we partner with outstanding founders at an earlier stage.
            </p>
          </div>

          {/* Column headers */}
          <div className="hidden md:grid grid-cols-12 gap-8 pb-4 border-b border-white/10">
            <span className="col-span-5 text-overline text-white/30">Focus</span>
            <span className="col-span-7 text-overline text-white/30">
              Description
            </span>
          </div>

          {/* Rows */}
          <div>
            {approach.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline py-7 md:py-8 border-b border-white/10 transition-colors hover:bg-white/[0.015]"
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
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className="md:col-span-7 text-body-lg text-white/50"
                  style={{ lineHeight: 1.6 }}
                >
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Target Profile — Tightly packed bento grid with 1px hairline dividers */}
          <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-white/10">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="blue-line" />
                <span className="text-overline text-[#0276E8]">Target Profile</span>
              </div>
              <h3
                className="font-display text-white mb-4"
                style={{ fontSize: "clamp(30px, 3.6vw, 54px)", letterSpacing: "-0.025em", lineHeight: 1.05, fontWeight: 400 }}
              >
                Investment Criteria
              </h3>
              <p className="text-body-lg text-white/60" style={{ lineHeight: 1.7 }}>
                While every opportunity is unique, we generally look for businesses that demonstrate:
              </p>
            </div>

            {/* 6 Bento Grid Cards — Tightly packed hairline grid (no gap/space) */}
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px border border-white/10"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              {[
                { title: "Proven business model", icon: Layers },
                { title: "Positive unit economics", icon: TrendingUp },
                { title: "Strong leadership", icon: UserCheck },
                { title: "Clear path for sustainable growth", icon: Rocket },
                { title: "Sound financial fundamentals", icon: Scale },
                { title: "Alignment with our long-term philosophy", icon: HeartHandshake },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group relative p-7 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#0276E8]/40"
                  style={{ background: "#0A0A0A" }}
                  data-cursor-hover
                >
                  {/* Active top line indicator */}
                  <span
                    className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                    style={{ background: "#0276E8" }}
                    aria-hidden="true"
                  />

                  {/* Hover radial ambient glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 70% at 100% 0%, rgba(2,118,232,0.12) 0%, transparent 65%)",
                    }}
                  />

                  <div className="relative z-10 flex items-center justify-between mb-6">
                    <item.icon size={24} strokeWidth={1.5} className="text-[#0276E8]" />
                  </div>

                  <span
                    className="relative z-10 font-heading text-white text-lg leading-snug group-hover:text-[#CDE6FF] transition-colors"
                    style={{ fontWeight: 400 }}
                  >
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Structuring Strategy */}
          <div className="mt-20 md:mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="blue-line" />
                  <span className="text-overline text-[#0276E8]">Structuring Strategy</span>
                </div>
                <h3
                  className="font-display text-white"
                  style={{ fontSize: "clamp(30px, 3.8vw, 56px)", letterSpacing: "-0.025em", lineHeight: 1.05, fontWeight: 400 }}
                >
                  Flexible Capital — No two businesses are the same.
                </h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-body-lg text-white/60" style={{ lineHeight: 1.7 }}>
                  We structure investments based on the needs of the opportunity, whether through minority equity investments, majority acquisitions, or strategic partnerships.
                </p>
              </div>
            </div>

            {/* 3 Strategy Vehicle Cards */}
            <div
              className="grid md:grid-cols-3 gap-px border border-white/10"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              {[
                {
                  title: "Minority Equity Investments",
                  description: "Providing growth capital while empowering existing leadership and management teams to execute their long-term vision.",
                },
                {
                  title: "Majority Acquisitions",
                  description: "Long-term buyout partnerships focused on business continuity, operational excellence, and enduring succession planning.",
                },
                {
                  title: "Strategic Partnerships",
                  description: "Tailored capital structures designed for joint ventures, growth initiatives, and strategic co-investments.",
                },
              ].map((vehicle, idx) => (
                <motion.div
                  key={vehicle.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="group relative p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#0276E8]/40"
                  style={{ background: "#0A0A0A" }}
                  data-cursor-hover
                >
                  {/* Subtle hover radial glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 70% at 100% 0%, rgba(2,118,232,0.12) 0%, transparent 65%)",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-end mb-8">
                      <ArrowUpRight size={18} className="text-white/30 group-hover:text-[#0276E8] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <h4
                      className="font-display text-white group-hover:text-[#CDE6FF] transition-colors mb-4"
                      style={{ fontSize: "clamp(22px, 2.2vw, 28px)", lineHeight: 1.15, letterSpacing: "-0.015em", fontWeight: 400 }}
                    >
                      {vehicle.title}
                    </h4>
                    <p className="text-body-md text-white/55" style={{ lineHeight: 1.7 }}>
                      {vehicle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ghost marquee — Blackstone-style oversized drift */}
      <section
        className="py-10 md:py-14 border-y border-white/[0.06] select-none"
        style={{ background: "#000" }}
        aria-hidden="true"
      >
        <MarqueeBand duration={38} trackClassName="gap-x-12 pr-12 md:gap-x-20 md:pr-20">
          {["Invest", "Partner", "Hold"].map((word) => (
            <span key={word} className="flex items-center gap-x-12 md:gap-x-20">
              <span
                className="font-display leading-none whitespace-nowrap"
                style={{
                  fontSize: "clamp(72px, 11vw, 180px)",
                  letterSpacing: "-0.03em",
                  color: "rgba(255,255,255,0.08)",
                }}
              >
                {word}
              </span>
              <span
                className="rounded-full shrink-0"
                style={{ width: "clamp(10px, 1vw, 16px)", height: "clamp(10px, 1vw, 16px)", background: "rgba(2,118,232,0.5)" }}
              />
            </span>
          ))}
        </MarqueeBand>
      </section>

      {/* Dedicated Investments CTA Section with Inline Lead Collection Form */}
      <InvestmentsCTA />
    </>
  );
}
