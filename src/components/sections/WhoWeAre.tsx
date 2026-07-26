"use client";
import { motion } from "framer-motion";
import { ScrollRevealText } from "@/components/ui/ScrollRevealText";

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 mb-20 md:mb-28 items-stretch">
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
              Where Businesses Grow Through Investment and Strategy
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

        {/* Vision & Philosophy Block — Editorial typographic presentation */}
        <div
          className="p-8 md:p-14 lg:p-20 relative overflow-hidden border border-white/10"
          style={{ background: "rgba(10,10,10,0.85)" }}
        >
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(circle, #0276E8 0%, transparent 70%)" }}
          />

          <span className="text-overline text-[#0276E8] block mb-8">Vision &amp; Philosophy</span>

          <ScrollRevealText
            text="Our vision is inspired by **altruism** — the belief that lasting success is measured not only by what we build, but by the **value we create for others.**"
            className="font-display text-white max-w-5xl mb-12"
            style={{ fontSize: "clamp(28px, 3.8vw, 56px)", lineHeight: 1.18, letterSpacing: "-0.025em" }}
          />

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p
              className="font-display text-white/80"
              style={{
                fontSize: "clamp(22px, 2.4vw, 36px)",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                maxWidth: "32ch",
              }}
            >
              This philosophy shapes every investment, partnership, and business within Altruiso.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#0276E8" }} />
              <span className="text-overline text-white/40">The Altruiso Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
