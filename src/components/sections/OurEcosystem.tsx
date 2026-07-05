"use client";
import { motion } from "framer-motion";

const companies = [
  {
    name: "Altruiso Strategies",
    mark: "AS",
    tag: "Education & Finance",
    description:
      "A financial education and wealth-building platform helping individuals develop the mindset and skills to achieve financial independence.",
  },
  {
    name: "Mindset to Wealth Collective",
    mark: "MW",
    tag: "Community",
    description:
      "A community-driven platform focused on shifting financial mindsets and building generational wealth through education, accountability, and access.",
  },
  {
    name: "Swing Trade FX",
    mark: "SF",
    tag: "Financial Markets",
    description:
      "A trading education and signal service empowering individuals to navigate financial markets with confidence and discipline.",
  },
  {
    name: "Future Advisory & Consulting",
    mark: "FA",
    tag: "Advisory",
    description:
      "Strategic advisory services for entrepreneurs, businesses, and organizations seeking clarity, direction, and sustainable growth.",
  },
  {
    name: "Altruiso Investments",
    mark: "AI",
    tag: "Investments",
    description:
      "The investment arm focused on deploying capital across public markets, private businesses, real estate, and strategic opportunities.",
  },
];

export function OurEcosystem() {
  return (
    <section id="ecosystem" className="section-pad" style={{ background: "#0A0A0A" }}>
      <div className="container-site">
        {/* Intro header — label + headline / description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 md:mb-24">
          {/* Label + headline */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="blue-line" />
              <span className="text-overline text-white/40">Our Ecosystem</span>
            </div>
            <h2
              className="font-display text-white"
              style={{ fontSize: "clamp(36px, 4.5vw, 68px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              A family of purposeful companies.
            </h2>
          </div>

          {/* Description */}
          <div className="lg:col-span-4 lg:pt-2">
            <p className="text-body-md text-white/70" style={{ lineHeight: 1.7 }}>
              Each company in our ecosystem is built with intention, designed to
              solve real problems and create enduring value.
            </p>
            <p className="text-body-sm text-white/45 mt-4" style={{ lineHeight: 1.7 }}>
              From financial education to capital deployment, our companies share
              one mission: turning mindset into lasting wealth.
            </p>
          </div>
        </div>

        {/* Company cards — two-up grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-20">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group"
              data-cursor-hover
            >
              {/* Logo tile */}
              <div
                className="relative overflow-hidden rounded-xl flex items-center justify-center transition-all duration-500"
                style={{
                  aspectRatio: "16 / 10",
                  background:
                    "radial-gradient(ellipse 100% 90% at 50% 120%, rgba(2,118,232,0.14) 0%, transparent 60%), #101215",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span
                  className="font-display text-white/90 leading-none transition-transform duration-500 group-hover:scale-105"
                  style={{ fontSize: "clamp(56px, 8vw, 104px)", letterSpacing: "-0.03em" }}
                >
                  {company.mark}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/logo-icon.svg"
                  alt=""
                  aria-hidden="true"
                  className="absolute right-5 bottom-5 w-8 opacity-20"
                />
              </div>

              {/* Name */}
              <h3
                className="font-display text-white mt-7 mb-2"
                style={{ fontSize: "clamp(24px, 2.4vw, 34px)", letterSpacing: "-0.01em", lineHeight: 1.15 }}
              >
                {company.name}
              </h3>

              {/* Category (role line) */}
              <div className="text-overline text-[#0276E8] mb-5">{company.tag}</div>

              {/* Quote-styled description */}
              <div className="flex gap-3 max-w-[440px]">
                <span
                  className="font-display text-[#0276E8]/50 select-none leading-none"
                  style={{ fontSize: "34px" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="text-body-sm text-white/55" style={{ lineHeight: 1.8 }}>
                  {company.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
