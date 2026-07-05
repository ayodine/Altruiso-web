"use client";
import { ArrowRight } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

type CardPoint = { name: string; type: string };

const cards: {
  n: string;
  title: string;
  description: string;
  points: CardPoint[];
  blob: React.CSSProperties;
}[] = [
  {
    n: "01",
    title: "Ventures We've Built",
    description:
      "We create and operate businesses that solve real problems, from financial education to community platforms and trading services.",
    points: [
      { name: "Altruiso Strategies", type: "Financial Education" },
      { name: "Mindset to Wealth", type: "Community Platform" },
      { name: "Swing Trade FX", type: "Trading Education" },
    ],
    blob: {
      borderRadius: "42% 58% 63% 37% / 45% 40% 60% 55%",
      background:
        "radial-gradient(circle at 40% 40%, rgba(2,118,232,0.85) 0%, rgba(2,118,232,0.35) 45%, transparent 72%)",
    },
  },
  {
    n: "02",
    title: "Where We Invest",
    description:
      "We deploy capital across public and private markets, building a diversified base of long-term, compounding assets.",
    points: [
      { name: "Public Markets", type: "Equities & Derivatives" },
      { name: "Private Businesses", type: "Direct Investment" },
      { name: "Real Estate", type: "Property Acquisition" },
    ],
    blob: {
      borderRadius: "50%",
      background:
        "radial-gradient(circle at 50% 50%, rgba(2,118,232,0.85) 0%, rgba(2,118,232,0.3) 48%, transparent 70%)",
    },
  },
  {
    n: "03",
    title: "How We Grow",
    description:
      "We expand through disciplined acquisitions, venture partnerships, and advisory work that compounds our ecosystem.",
    points: [
      { name: "Strategic Acquisitions", type: "M&A" },
      { name: "Venture Partnerships", type: "Early-Stage" },
      { name: "Future Advisory", type: "Consulting" },
    ],
    blob: {
      borderRadius: "58% 42% 38% 62% / 55% 55% 45% 45%",
      background:
        "radial-gradient(circle at 55% 45%, rgba(2,118,232,0.85) 0%, rgba(2,118,232,0.32) 46%, transparent 70%)",
    },
  },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function Portfolio() {
  return (
    <section id="portfolio" className="section-pad" style={{ background: "#000" }}>
      <div className="container-site">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="blue-line" />
              <span className="text-overline text-white/40">Portfolio</span>
            </div>
            <h2
              className="font-display text-white"
              style={{ fontSize: "clamp(34px, 4.5vw, 64px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
            >
              What we&rsquo;ve built and where we invest.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:pt-4 text-body-md text-white/60" style={{ lineHeight: 1.7 }}>
            Our unified model combines operating companies with disciplined
            investment, so every venture and every dollar compounds toward
            enduring value.
          </p>
        </div>

        {/* Cards — scroll-stack effect */}
        <ScrollStack
          useWindowScroll
          itemDistance={60}
          itemStackDistance={22}
          stackPosition="20%"
          scaleEndPosition="12%"
          baseScale={0.9}
          itemScale={0.025}
        >
          {cards.map((card) => (
            <ScrollStackItem
              key={card.n}
              itemClassName="group relative overflow-hidden rounded-[28px] p-8 md:p-12 bg-[#0b0d12] border border-white/10 shadow-[0_24px_70px_-24px_rgba(0,0,0,0.85)]"
            >
              {/* Brand blob */}
              <div
                className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 w-[360px] h-[360px] opacity-70 blur-[36px] transition-transform duration-700 group-hover:scale-110"
                style={card.blob}
                aria-hidden="true"
              />

              <div className="relative z-10 max-w-[640px]">
                {/* Number */}
                <div className="font-mono text-white/40 text-sm mb-8 md:mb-10">
                  {card.n}.
                </div>

                {/* Title */}
                <h3
                  className="font-heading font-medium text-white mb-5"
                  style={{ fontSize: "clamp(26px, 3vw, 40px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="text-body-md text-white/60 mb-8"
                  style={{ lineHeight: 1.7, maxWidth: "400px" }}
                >
                  {card.description}
                </p>

                {/* Item pills */}
                <div className="flex flex-wrap gap-3">
                  {card.points.map((point) => (
                    <button
                      key={point.name}
                      onClick={() => scrollTo("#ecosystem")}
                      className="group/pill inline-flex items-center gap-2 rounded-full pl-5 pr-2 py-2 text-sm font-heading font-medium text-white/85 hover:text-white transition-colors"
                      style={{ border: "1px solid rgba(255,255,255,0.16)" }}
                    >
                      {point.name}
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-300 group-hover/pill:bg-[#0276E8]"
                        style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                      >
                        <ArrowRight size={13} className="transition-transform duration-300 group-hover/pill:translate-x-0.5" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
