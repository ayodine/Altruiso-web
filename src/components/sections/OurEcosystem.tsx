"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const platforms = [
  {
    name: "Altruiso Investments",
    mark: "AI",
    tagline: "Building long-term value through ownership.",
    description:
      "We invest in public markets, private businesses, equity partnerships, and strategic opportunities aligned with our long-term investment philosophy.",
    cta: "Explore Investments",
    href: "/investments",
  },
  {
    name: "Altruiso Strategies",
    mark: "AS",
    tagline: "Helping organizations solve meaningful challenges.",
    description:
      "Our consulting and advisory company serving governments, organizations, educational institutions, nonprofits, and businesses through strategy, facilitation, education, and advisory services.",
    cta: "Explore Strategies",
    href: "/strategies",
  },
];

export function OurEcosystem() {
  return (
    <section id="ecosystem" className="section-pad" style={{ background: "#0A0A0A" }}>
      <div className="container-site">
        {/* Intro header — paragraph bottom-aligns with the heading's baseline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 md:mb-24 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="blue-line" />
              <span className="text-overline text-white/40">Our Ecosystem</span>
            </div>
            <h2
              className="font-display text-white"
              style={{ fontSize: "clamp(36px, 4.5vw, 68px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              Two platforms, one philosophy.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-body-md text-white/50" style={{ lineHeight: 1.7, maxWidth: "380px" }}>
              Altruiso branches into two platforms — one for building and
              investing in businesses, one for helping organizations solve
              meaningful challenges.
            </p>
          </div>
        </div>

        {/* Platform cards — two-up, each links to its own page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link
                href={platform.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-[24px] p-8 md:p-10 transition-all duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 90% at 50% 0%, rgba(2,118,232,0.10) 0%, transparent 55%), #101215",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                data-cursor-hover
              >
                {/* hover stroke lighting — the card's edge glows blue */}
                <span
                  className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    border: "1px solid rgba(2,118,232,0.5)",
                    boxShadow:
                      "0 0 40px rgba(2,118,232,0.18), inset 0 0 32px rgba(2,118,232,0.07)",
                  }}
                  aria-hidden="true"
                />

                {/* Index + ghost monogram */}
                <div className="flex items-start justify-between mb-8">
                  <span
                    className="font-heading text-[#0276E8]/60 pt-2"
                    style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-display leading-none text-white/[0.07] group-hover:text-white/[0.14] transition-colors duration-500 select-none"
                    style={{ fontSize: "clamp(52px, 5.4vw, 84px)", letterSpacing: "-0.03em" }}
                    aria-hidden="true"
                  >
                    {platform.mark}
                  </span>
                </div>

                <h3
                  className="font-display text-white group-hover:text-[#CDE6FF] transition-colors duration-300 mb-4"
                  style={{ fontSize: "clamp(30px, 3.2vw, 46px)", letterSpacing: "-0.025em", lineHeight: 1.05 }}
                >
                  {platform.name}
                </h3>
                <p
                  className="font-heading text-[#CDE6FF]/80 mb-5"
                  style={{ fontSize: "clamp(17px, 1.7vw, 22px)", lineHeight: 1.35 }}
                >
                  {platform.tagline}
                </p>
                <p
                  className="text-body-md text-white/50 mb-10"
                  style={{ lineHeight: 1.7, maxWidth: "460px" }}
                >
                  {platform.description}
                </p>

                <span
                  className="group/btn relative overflow-hidden mt-auto self-start inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-heading font-medium text-white border border-white/20 hover:border-[#0276E8] transition-colors duration-300"
                  style={{ fontSize: "15px" }}
                >
                  {/* water fill — curved surface sweeps in from the left */}
                  <span
                    className="absolute left-0 top-[-25%] h-[150%] w-full -translate-x-full rounded-r-[100%] group-hover/btn:translate-x-0 group-hover/btn:rounded-r-none transition-all duration-500 ease-out"
                    style={{ background: "#0276E8" }}
                    aria-hidden="true"
                  />
                  <span className="relative z-10">{platform.cta}</span>
                  <ArrowRight
                    size={17}
                    className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
