"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Build",
    description:
      "We create businesses designed to solve meaningful problems.",
    number: "01",
  },
  {
    title: "Acquire",
    description:
      "We acquire exceptional businesses with long-term potential.",
    number: "02",
  },
  {
    title: "Invest",
    description:
      "We invest in businesses and opportunities we believe will create lasting value and opportunity.",
    number: "03",
  },
];

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      className="section-pad"
      style={{ background: "#000" }}
    >
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
          {/* Sticky heading column */}
          <div className="lg:w-[38%] lg:sticky lg:top-28 lg:self-start flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="blue-line" />
              <span className="text-overline text-white/40">What We Do</span>
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
                Three ways we create enduring value.
              </h2>
              <p
                className="text-body-lg text-white/55"
                style={{ maxWidth: "440px", lineHeight: 1.5 }}
              >
                We don&rsquo;t simply invest in businesses. We invest in
                businesses we believe will create opportunity.
              </p>
            </div>
          </div>

          {/* Stacked cards — oversized ghost index left, copy right */}
          <div className="lg:flex-1 flex flex-col gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative flex items-center overflow-hidden p-8 md:p-10 min-h-[220px]"
                style={{
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(15px)",
                  WebkitBackdropFilter: "blur(15px)",
                }}
                data-cursor-hover
              >
                {/* Hover blue glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 80% at 100% 0%, rgba(2,118,232,0.10) 0%, transparent 60%)",
                    border: "1px solid rgba(2,118,232,0.22)",
                  }}
                />

                {/* Oversized ghost index */}
                <span
                  aria-hidden="true"
                  className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 font-display leading-none select-none text-white/[0.05] group-hover:text-white/[0.10] transition-colors duration-500"
                  style={{ fontSize: "clamp(110px, 15vw, 200px)", letterSpacing: "-0.04em" }}
                >
                  {pillar.number}
                </span>

                {/* Copy — offset clear of the ghost index */}
                <div className="relative z-10 ml-[30%] sm:ml-[24%] lg:ml-[26%]">
                  <h3
                    className="font-heading font-medium text-white mb-3 group-hover:text-[#CDE6FF] transition-colors duration-300"
                    style={{ fontSize: "clamp(24px, 2.4vw, 34px)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-body-lg text-white/55 group-hover:text-white/70 transition-colors duration-300"
                    style={{ lineHeight: 1.5, maxWidth: "460px" }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
