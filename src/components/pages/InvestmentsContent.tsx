"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Search, ClipboardCheck, Handshake, Infinity as InfinityIcon } from "lucide-react";
import { DonutChart, type DonutDatum } from "@/components/ui/DonutChart";
import { ScrollRevealText } from "@/components/ui/ScrollRevealText";
import { MarqueeBand } from "@/components/ui/MarqueeBand";

// Illustrative allocation — sectors ordered so no two low-separation hues sit
// adjacent; palette validated for the dark surface (dataviz six-checks).
const portfolio: DonutDatum[] = [
  { label: "Energy", value: 24, color: "#0276E8" },
  { label: "Tech", value: 20, color: "#0891B2" },
  { label: "Food", value: 10, color: "#EA580C" },
  { label: "Hospitality", value: 12, color: "#EC4899" },
  { label: "Real estate", value: 18, color: "#8B5CF6" },
  { label: "Public equity", value: 16, color: "#059669" },
];

const heroStats = [
  { value: "06", caption: "Sectors we hold and invest across" },
  { value: "05", caption: "Ways we deploy capital" },
  { value: "Forever", caption: "Our intended holding period" },
];

const steps = [
  {
    icon: Search,
    title: "Discover",
    body: "We identify exceptional businesses, founders, and opportunities aligned with our long-term investment philosophy.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluate",
    body: "We take the time to understand the business, the people, and the long-term opportunity. We audit the financials, and we focus on quality rather than complexity.",
  },
  {
    icon: Handshake,
    title: "Partner",
    body: "If there's alignment, we invest through equity ownership or strategic partnerships depending on deal structure. We don't believe in unnecessary bureaucracy — we believe in building trusted, long-term relationships.",
  },
  {
    icon: InfinityIcon,
    title: "Hold",
    body: "We don't actively operate the businesses we invest in. Instead, we partner through ownership, provide strategic support where appropriate, and allow exceptional management teams to keep building. Our approach is patient, disciplined, and designed for long-term value creation.",
  },
];

const approach = [
  { title: "Equity Investments", body: "Direct ownership stakes in businesses we believe in." },
  { title: "Angel Investments", body: "Early backing for exceptional founders and ideas." },
  { title: "Strategic Acquisitions", body: "Acquiring quality businesses with long-term potential." },
  { title: "Public Market Investments", body: "Disciplined positions across public equities." },
  { title: "Long-Term Ownership", body: "Patient capital, held for the long run." },
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
        className="min-h-screen flex items-center"
        style={{ background: "#000", paddingTop: "clamp(120px, 14vw, 200px)", paddingBottom: "clamp(80px, 10vw, 160px)" }}
      >
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeSmooth }}
          >
            <Label>Altruiso Investments</Label>
            <h1
              className="font-display text-white"
              style={{ fontSize: "clamp(44px, 7vw, 110px)", lineHeight: 1.0, letterSpacing: "-0.035em", maxWidth: "13ch" }}
            >
              Investing in Businesses That Create Opportunity.
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
              will create enduring economic and social value. We don&rsquo;t
              simply invest in businesses — we invest in businesses we believe
              will create opportunity.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <Link
                href="/#builders-welcome"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-medium text-white"
                style={{ fontSize: "15px", background: "#0276E8", boxShadow: "0 0 40px rgba(2,118,232,0.25)" }}
                data-cursor-hover
              >
                Partner With Us
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
                    style={{
                      // The word stat runs long — size it to sit at the digits' cap height.
                      fontSize: stat.value === "Forever" ? "clamp(38px, 4vw, 60px)" : "clamp(48px, 5vw, 76px)",
                      letterSpacing: "-0.03em",
                    }}
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
                A diversified base of businesses and opportunities across
                sectors. As the portfolio grows, new companies join the mix.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: easeSmooth }}
                  className="border-t border-white/10 pt-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(2,118,232,0.12)", border: "1px solid rgba(2,118,232,0.25)" }}
                    >
                      <Icon size={20} color="#0276E8" />
                    </div>
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
              );
            })}
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
              style={{ lineHeight: 1.7, maxWidth: "520px" }}
            >
              Diversified across opportunities, while remaining disciplined and
              focused on long-term value.
            </p>
          </div>

          {/* Column headers */}
          <div className="hidden md:grid grid-cols-12 gap-8 pb-4 border-b border-white/10">
            <span className="col-span-5 text-overline text-white/30">Approach</span>
            <span className="col-span-7 text-overline text-white/30">
              How we deploy
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

      {/* Partner With Us */}
      <section className="section-pad" style={{ background: "#0A0A0A" }}>
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
              If you&rsquo;re building an exceptional business or exploring
              long-term investment opportunities, we&rsquo;d love to hear from
              you.
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
              Partner With Us
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
