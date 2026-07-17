"use client";
import { motion } from "framer-motion";

const callouts = [
  {
    key: "Altruism",
    body: "Success measured not only by what we build, but by the value we create for others.",
  },
  {
    key: "Ownership",
    body: "One of the greatest ways to create opportunity and lasting economic value.",
  },
  {
    key: "Generations",
    body: "Enduring economic and social value, built to outlive the businesses we back.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export function WhyAltruiso() {
  return (
    <section id="why-altruiso" className="section-pad" style={{ background: "#000" }}>
      <div className="container-site">
        {/* Label */}
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <span className="blue-line" />
          <span className="text-overline text-white/40">Why Altruiso</span>
        </div>

        {/* Heading + offset lead paragraph (Trifecta "who we are" layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-20 md:mb-28">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-6 font-display text-white"
            style={{
              fontSize: "clamp(48px, 8vw, 132px)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
            }}
          >
            Why Altruiso?
          </motion.h2>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <p
              className="text-white/70"
              style={{ fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: 1.6 }}
            >
              Our name is inspired by altruism — the belief that lasting success
              is measured not only by what we build, but by the value we create
              for others. By building businesses, investing in exceptional
              people, and backing ideas that improve lives, we create enduring
              value for generations to come.
            </p>
          </motion.div>
        </div>

        {/* Value callouts row (Trifecta stat-callout row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 border-t border-white/10 pt-12 md:pt-16">
          {callouts.map((c, i) => (
            <motion.div
              key={c.key}
              {...fadeUp}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                className="font-heading text-[#0276E8]/60 mb-4"
                style={{ fontSize: "13px", letterSpacing: "0.08em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className="font-display text-white mb-4"
                style={{
                  fontSize: "clamp(34px, 4vw, 56px)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {c.key}
              </h3>
              <p className="text-body-md text-white/50" style={{ lineHeight: 1.7, maxWidth: "320px" }}>
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-white/80 mt-20 md:mt-28 max-w-3xl"
          style={{
            fontSize: "clamp(24px, 2.8vw, 44px)",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
          }}
        >
          That philosophy shapes every investment, partnership, and business
          within Altruiso.
        </motion.p>
      </div>
    </section>
  );
}
