"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Building, Home, Target, Zap } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Public Markets",
    description:
      "Equity and derivatives exposure across global markets with disciplined risk management and long-term positioning.",
    tags: ["Equities", "Derivatives", "Global"],
  },
  {
    icon: Building,
    title: "Private Businesses",
    description:
      "Direct investment and co-ownership in private companies demonstrating strong fundamentals and growth potential.",
    tags: ["Direct", "Co-ownership", "Growth"],
  },
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Strategic acquisition and development of properties that generate stable, long-term returns.",
    tags: ["Acquisition", "Development", "Yield"],
  },
  {
    icon: Target,
    title: "Strategic Acquisitions",
    description:
      "Identifying and acquiring undervalued businesses that align with our ecosystem and long-term value thesis.",
    tags: ["Value", "Ecosystem", "Control"],
  },
  {
    icon: Zap,
    title: "Venture Opportunities",
    description:
      "Early-stage bets on founders and ideas addressing meaningful problems at the intersection of innovation and need.",
    tags: ["Early-stage", "Founders", "Innovation"],
  },
];

export function InvestmentFocus() {
  const [active, setActive] = useState(0);

  const openCard = (i: number) => setActive(i);

  return (
    <section
      id="investment-focus"
      className="section-pad"
      style={{ background: "#000" }}
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="blue-line" />
            <span className="text-overline text-white/40">Investment Focus</span>
            <span className="blue-line" />
          </div>
          <h2
            className="font-heading font-medium text-white mx-auto"
            style={{
              fontSize: "clamp(28px, 3.5vw, 52px)",
              letterSpacing: "-0.02em",
              maxWidth: "600px",
            }}
          >
            Five pillars of our investment strategy.
          </h2>
        </div>

        {/* Expand / collapse cards */}
        <div className="flex flex-col lg:flex-row lg:h-[460px] rounded-2xl overflow-hidden border border-white/10">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isActive = i === active;
            return (
              <motion.div
                key={pillar.title}
                onMouseEnter={() => openCard(i)}
                onClick={() => openCard(i)}
                animate={{ flexGrow: isActive ? 6 : 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative overflow-hidden cursor-pointer min-h-[96px] lg:min-h-0 border-t border-white/10 first:border-t-0 lg:border-t-0 lg:border-l lg:first:border-l-0"
                style={{
                  flexBasis: 0,
                  minWidth: 0,
                  background: isActive
                    ? "rgba(2,118,232,0.10)"
                    : "rgba(255,255,255,0.03)",
                  transition: "background 0.4s ease",
                }}
                data-cursor-hover
              >
                <div className="relative h-full w-full p-5 sm:p-6 md:p-7 flex flex-col">
                  {/* Top row — number + icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-heading font-medium"
                      style={{
                        fontSize: "14px",
                        letterSpacing: "0.05em",
                        color: isActive ? "#0276E8" : "rgba(255,255,255,0.35)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(2,118,232,0.12)",
                        border: "1px solid rgba(2,118,232,0.25)",
                      }}
                    >
                      <Icon size={20} color="#0276E8" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="mt-auto">
                    <AnimatePresence mode="wait" initial={false}>
                      {isActive ? (
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.35, delay: 0.12 }}
                        >
                          <h3
                            className="font-heading font-medium text-white mb-3"
                            style={{
                              fontSize: "clamp(20px, 2vw, 28px)",
                              lineHeight: 1.15,
                            }}
                          >
                            {pillar.title}
                          </h3>
                          <p
                            className="text-body-sm text-white/55 mb-5"
                            style={{ lineHeight: 1.7, maxWidth: "380px" }}
                          >
                            {pillar.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {pillar.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-full text-caption text-[#CDE6FF]"
                                style={{
                                  background: "rgba(2,118,232,0.12)",
                                  border: "1px solid rgba(2,118,232,0.22)",
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.h3
                          key="collapsed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="font-heading font-medium text-white/70 lg:[writing-mode:vertical-rl] lg:rotate-180"
                          style={{
                            fontSize: "16px",
                            letterSpacing: "0.01em",
                            lineHeight: 1.1,
                          }}
                        >
                          {pillar.title}
                        </motion.h3>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
