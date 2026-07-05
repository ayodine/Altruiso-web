"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    key: "Opportunity",
    body: "Access that compounds — opening doors that were previously closed.",
  },
  {
    key: "Ownership",
    body: "A stake in what you build, not just a wage for your time.",
  },
  {
    key: "Impact",
    body: "Value that outlives the balance sheet and serves beyond ourselves.",
  },
];

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveals =
        sectionRef.current?.querySelectorAll(".philosophy-line");
      if (!reveals) return;

      gsap.fromTo(
        reveals,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, #000 0%, #001931 55%, #000 100%)",
      }}
    >
      <div className="container-site">
        {/* Label */}
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="blue-line" />
          <span className="text-overline text-white/40">Our Philosophy</span>
        </div>

        {/* Lead statement */}
        <div className="max-w-5xl">
          <h2
            className="philosophy-line font-display text-white"
            style={{
              fontSize: "clamp(34px, 5.5vw, 88px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 400,
            }}
          >
            We believe wealth is{" "}
            <span className="text-white/40">more than accumulation.</span>
          </h2>
        </div>

        {/* Principle callouts — tenity-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mt-20 md:mt-28 border-t border-white/[0.08] pt-14">
          {principles.map((p, i) => (
            <div key={p.key} className="philosophy-line">
              <div
                className="font-heading text-white/25 mb-5"
                style={{ fontSize: "14px", letterSpacing: "0.05em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className="font-display mb-4"
                style={{
                  fontSize: "clamp(30px, 3.6vw, 52px)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "#CDE6FF",
                }}
              >
                {p.key}.
              </h3>
              <p
                className="text-body-md text-white/50"
                style={{ lineHeight: 1.7, maxWidth: "320px" }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p
          className="philosophy-line font-display text-white/70 mt-20 md:mt-28 max-w-3xl"
          style={{
            fontSize: "clamp(22px, 2.8vw, 40px)",
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
            fontWeight: 400,
          }}
        >
          It is what we leave behind — value that serves beyond ourselves.
        </p>
      </div>
    </section>
  );
}
