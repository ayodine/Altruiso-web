"use client";
import { motion } from "framer-motion";

const platforms = [
  {
    key: "Altruiso Investments",
    body: "Acquires equity and invests in businesses with enduring potential.",
  },
  {
    key: "Altruiso Strategies",
    body: "Helps organizations, professionals, and communities grow through strategic advisory, financial education, and operational transformation.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="section-pad" style={{ background: "#000" }}>
      <div className="container-site">
        {/* Label */}
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <span className="blue-line" />
          <span className="text-overline text-white/40">Who We Are</span>
        </div>

        {/* Heading + offset lead paragraph (Trifecta "who we are" layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-20 md:mb-28">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-7 font-display text-white"
            style={{
              fontSize: "clamp(44px, 6.6vw, 112px)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
            }}
          >
            Investing in Better Businesses.
          </motion.h2>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-4 lg:col-start-9"
          >
            <p
              className="text-white/70"
              style={{ fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: 1.6 }}
            >
              We acquire, build, and grow businesses through two complementary
              platforms. Together, they allow us to create long-term value
              through both capital and capability.
            </p>
          </motion.div>
        </div>

        {/* Platform callouts row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 border-t border-white/10 pt-12 md:pt-16">
          {platforms.map((p, i) => (
            <motion.div
              key={p.key}
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
                  fontSize: "clamp(30px, 3.4vw, 50px)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.02em",
                }}
              >
                {p.key}
              </h3>
              <p className="text-body-md text-white/50" style={{ lineHeight: 1.7, maxWidth: "460px" }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white/70 mt-20 md:mt-28"
          style={{ fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: 1.6, maxWidth: "56ch" }}
        >
          Our vision is inspired by altruism, the belief that lasting success
          is measured not only by what we build, but by the value we create
          for others.
        </motion.p>

        {/* Closing line */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-white/80 mt-10 md:mt-14 max-w-3xl"
          style={{
            fontSize: "clamp(24px, 2.8vw, 44px)",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
          }}
        >
          This philosophy shapes every investment, partnership, and business
          within Altruiso.
        </motion.p>
      </div>
    </section>
  );
}
