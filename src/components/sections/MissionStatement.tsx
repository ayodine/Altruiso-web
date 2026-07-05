"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MissionStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 50, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pad" style={{ background: "#000" }}>
      <div className="container-site">
        <div className="max-w-5xl mx-auto text-center">
          {/* Overline */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="blue-line" />
            <span className="text-overline text-white/40">Our Purpose</span>
            <span className="blue-line" />
          </div>

          <p
            ref={quoteRef}
            className="font-display text-white leading-tight mb-10"
            style={{
              fontSize: "clamp(28px, 4.5vw, 64px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 400,
            }}
          >
            &ldquo;We believe the greatest success is success that creates
            opportunities for others.&rdquo;
          </p>

          <p
            ref={subRef}
            className="text-body-lg text-white/50 max-w-2xl mx-auto"
            style={{ lineHeight: 1.8 }}
          >
            Inspired by the principle of altruism, we build institutions that
            strengthen people, communities, and economies—creating enduring
            economic and social value that compounds across generations.
          </p>
        </div>
      </div>
    </section>
  );
}
