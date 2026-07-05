"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "@/components/ui/CountUp";

gsap.registerPlugin(ScrollTrigger);

type Stat = {
  value?: number;
  suffix?: string;
  infinite?: boolean;
  title: string;
  description: string;
};

const stats: Stat[] = [
  {
    value: 5,
    suffix: "+",
    title: "Portfolio Companies",
    description:
      "Businesses built and scaled within our unified ecosystem to address real market needs.",
  },
  {
    value: 7,
    suffix: "",
    title: "Focus Areas",
    description:
      "Strategic sectors driving long-term economic and technological value across platforms.",
  },
  {
    value: 3,
    suffix: "+",
    title: "Years Building",
    description:
      "Disciplined execution and venture creation spanning multiple market cycles.",
  },
  {
    infinite: true,
    title: "Long-term Vision",
    description:
      "Commitment to creating generational wealth that compounds far beyond short-term trends.",
  },
];

export function StatsList() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".proof-row");

      rows.forEach((row) => {
        const revealEls = row.querySelectorAll<HTMLElement>(".proof-reveal");

        gsap.fromTo(
          revealEls,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats-list"
      className="section-pad border-b border-white/[0.06]"
      style={{ background: "#000" }}
    >
      <div className="container-site">
        {/* Section head */}
        <div className="flex items-center gap-3 mb-4">
          <span className="blue-line" />
          <span className="text-overline text-white/50">Bending the Odds</span>
        </div>
        <h2 className="text-heading-xl font-display mb-16 md:mb-20" style={{ maxWidth: "640px" }}>
          Proof in numbers
        </h2>

        {/* Rows */}
        <div ref={rowsRef} className="border-t border-white/[0.08]">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="proof-row group grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-8 py-10 md:py-12 border-b border-white/[0.08] transition-colors duration-500 hover:bg-white/[0.015]"
            >
              {/* Label + description */}
              <div className="md:col-span-5 lg:col-span-4">
                <h3 className="proof-reveal font-heading font-medium text-white text-body-lg mb-2">
                  {stat.title}
                </h3>
                <p
                  className="proof-reveal text-body-sm text-white/45"
                  style={{ lineHeight: 1.7, maxWidth: "340px" }}
                >
                  {stat.description}
                </p>
              </div>

              {/* Oversized number */}
              <div className="md:col-span-7 lg:col-span-8">
                <div
                  className="proof-reveal proof-number font-display text-[#0276E8] leading-none text-left md:text-right transition-colors duration-500 group-hover:text-white"
                  style={{
                    fontSize: "clamp(64px, 11vw, 172px)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stat.infinite ? (
                    "∞"
                  ) : (
                    <>
                      <CountUp
                        to={stat.value ?? 0}
                        from={0}
                        duration={0.5}
                        overshoot={100}
                        overshootHold={0.45}
                        separator=","
                      />
                      {stat.suffix}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
