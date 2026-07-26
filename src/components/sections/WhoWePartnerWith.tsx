"use client";
import { motion } from "framer-motion";
import { Building2, Landmark, Users2, ArrowUpRight } from "lucide-react";
import { PITCH_FORM_URL } from "@/lib/utils";

const partners = [
  {
    number: "01",
    icon: Building2,
    title: "Business Owners & Founders",
    description: "Seeking growth capital or strategic partnership to unlock their next stage of potential.",
  },
  {
    number: "02",
    icon: Landmark,
    title: "Governments & Public Institutions",
    description: "Looking for advisory, transformation, or community initiatives that deliver real outcomes.",
  },
  {
    number: "03",
    icon: Users2,
    title: "Organizations & Nonprofits",
    description: "Building capacity, strategy, and long-term impact for the communities they serve.",
  },
];

const easeSmooth: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export function WhoWePartnerWith() {
  return (
    <section id="partner-with-us" className="section-pad" style={{ background: "#050505" }}>
      <div className="container-site">
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <span className="blue-line" />
          <span className="text-overline text-white/40">Partnerships</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display text-white"
              style={{ fontSize: "clamp(34px, 4.4vw, 64px)", letterSpacing: "-0.025em", lineHeight: 1.04 }}
            >
              Who We Partner With
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-body-md text-white/50" style={{ lineHeight: 1.75 }}>
              We collaborate with visionary leaders and institutions across sectors to turn ambitious goals into enduring results.
            </p>
          </div>
        </div>

        {/* 3-Cell Hairline Bento Grid */}
        <div
          className="grid md:grid-cols-3 gap-px border border-white/10"
          style={{ background: "rgba(255,255,255,0.10)" }}
        >
          {partners.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: easeSmooth }}
              className="group relative p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#0276E8]/40"
              style={{ background: "#0A0A0A" }}
              data-cursor-hover
            >
              {/* Subtle hover radial glow from investflow/optimus */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 70% at 100% 0%, rgba(2,118,232,0.12) 0%, transparent 65%)",
                  border: "1px solid rgba(2,118,232,0.22)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-white/[0.04] border border-white/10 group-hover:border-[#0276E8]/40 transition-colors">
                    <p.icon size={26} strokeWidth={1.5} className="text-[#0276E8]" />
                  </div>
                  <span className="font-mono text-[#0276E8]/70 tabular-nums text-sm font-medium tracking-wider">
                    [{p.number}]
                  </span>
                </div>
                <h3
                  className="font-display text-white group-hover:text-[#CDE6FF] transition-colors mb-4 font-semibold"
                  style={{ fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: 1.12, letterSpacing: "-0.015em" }}
                >
                  {p.title}
                </h3>
                <p className="text-body-md text-white/55" style={{ lineHeight: 1.7 }}>
                  {p.description}
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                <span className="text-overline text-white/30 group-hover:text-white/70 transition-colors">Explore Collaboration</span>
                <ArrowUpRight size={16} className="text-white/40 group-hover:text-[#0276E8] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
