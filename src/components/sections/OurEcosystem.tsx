"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const platforms = [
  {
    name: "Altruiso Investments",
    image: "/images/ecosystem-investments.jpg",
    tagline: "Building long-term value through ownership.",
    description:
      "We invest in public markets, private businesses, equity partnerships, and strategic opportunities aligned with our long-term investment philosophy.",
    cta: "Explore Investments",
    href: "/investments",
  },
  {
    name: "Altruiso Strategies",
    image: "/images/ecosystem-strategies.jpg",
    tagline: "Helping organizations solve meaningful challenges.",
    description:
      "We help organizations, governments, professionals, and portfolio companies grow through strategy, financial education, operational transformation, and advisory.",
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
              Two Engines. One Mission.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-body-md text-white/50" style={{ lineHeight: 1.7, maxWidth: "380px" }}>
              Every great business needs more than capital. It needs the right
              strategy, execution, and long-term partnership. That&rsquo;s why
              Altruiso operates through two complementary platforms.
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
                className="group relative flex h-full flex-col overflow-hidden transition-all duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 90% at 50% 0%, rgba(2,118,232,0.10) 0%, transparent 55%), #101215",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                data-cursor-hover
              >
                {/* hover stroke lighting — the card's edge glows blue */}
                <span
                  className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    border: "1px solid rgba(2,118,232,0.5)",
                    boxShadow:
                      "0 0 40px rgba(2,118,232,0.18), inset 0 0 32px rgba(2,118,232,0.07)",
                  }}
                  aria-hidden="true"
                />

                {/* Image top — abstract 3D render blended into the card */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 7" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={platform.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{ filter: "saturate(0.85) contrast(1.05) brightness(0.85)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, #101215 2%, rgba(16,18,21,0.35) 45%, transparent 75%), linear-gradient(120deg, rgba(2,118,232,0.12), transparent 55%)",
                    }}
                  />
                </div>

                <div className="relative z-10 flex flex-1 flex-col p-8 md:p-10">
                <h3
                  className="font-display text-white group-hover:text-[#CDE6FF] transition-colors duration-300 mb-4"
                  style={{ fontSize: "clamp(30px, 3.2vw, 46px)", letterSpacing: "-0.025em", lineHeight: 1.05, fontWeight: 600 }}
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
                  className="group/btn relative overflow-hidden mt-auto self-start inline-flex items-center gap-3 px-7 py-3.5 font-heading font-medium text-white border border-white/20 hover:border-[#0276E8] transition-colors duration-300"
                  style={{ fontSize: "15px" }}
                >
                  {/* water fill — curved surface sweeps in from the left */}
                  <span
                    className="absolute inset-0 w-full -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out"
                    style={{ background: "#0276E8" }}
                    aria-hidden="true"
                  />
                  <span className="relative z-10">{platform.cta}</span>
                  <ArrowRight
                    size={17}
                    className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
