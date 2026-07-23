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

          {/* Stacked cards — Optimus "Simple process" StepCard pattern:
              a masked, monospaced ghost numeral bleeding in from the edge,
              paired with a plain title + description. */}
          <div className="lg:flex-1 flex flex-col gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                <div
                  className="stepcard-mask relative shrink-0 flex items-center justify-center sm:justify-end overflow-hidden h-[110px] sm:h-auto sm:w-[clamp(96px,16vw,158px)]"
                >
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
                    {pillar.number}
                  </span>
                </div>

                {/* Texts */}
                <div className="relative z-10 flex flex-col justify-center gap-3 p-6 md:p-8">
                  <h3
                    className="font-body"
                    style={{ fontSize: "20px", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.3, color: "#fff" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="font-body"
                    style={{ fontSize: "16px", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.4, color: "rgba(255,255,255,0.6)", maxWidth: "440px" }}
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
