"use client";
import { motion } from "framer-motion";
import { GlassIcon } from "@/components/ui/GlassIcon";

const platforms = [
  {
    key: "Altruiso Investments",
    icon: "bars" as const,
    body: "Acquires equity and invests in businesses with enduring potential.",
  },
  {
    key: "Altruiso Strategies",
    icon: "pinwheel" as const,
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

        {/* Split: headline + lead copy left, image panel right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 mb-16 md:mb-24 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between gap-12">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-white"
              style={{
                fontSize: "clamp(44px, 6.4vw, 108px)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
                maxWidth: "12ch",
              }}
            >
              Investing in Better Businesses.
            </motion.h2>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-white/70"
              style={{ fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: 1.6, maxWidth: "48ch" }}
            >
              We acquire, build, and grow businesses through two complementary
              platforms. Together, they allow us to create long-term value
              through both capital and capability.
            </motion.p>
          </div>

          {/* Image panel — dark architecture, blended into the page */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5 relative overflow-hidden border border-white/10 min-h-[320px] lg:min-h-0"
            style={{ maxHeight: "560px", aspectRatio: "4 / 5" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/who-we-are.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "saturate(0.8) contrast(1.05) brightness(0.9)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, #000 4%, transparent 55%), linear-gradient(120deg, rgba(2,118,232,0.14), transparent 55%)",
              }}
            />
            <span className="absolute bottom-5 left-6 text-overline text-white/45">
              Built to endure
            </span>
          </motion.div>
        </div>

        {/* Platform bento — two cells, hairline dividers */}
        <div
          className="grid md:grid-cols-2 gap-px border border-white/10 mb-20 md:mb-28"
          style={{ background: "rgba(255,255,255,0.10)" }}
        >
          {platforms.map((p, i) => (
            <motion.div
              key={p.key}
              {...fadeUp}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="p-8 md:p-10"
              style={{ background: "#0A0A0A" }}
            >
              <div className="flex items-start justify-between mb-8">
                <GlassIcon variant={p.icon} size={68} />
                <span
                  className="font-heading text-[#0276E8]/60"
                  style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="font-display text-white mb-4"
                style={{
                  fontSize: "clamp(28px, 3.2vw, 44px)",
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
          className="text-white/70"
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
