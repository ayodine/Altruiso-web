"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image mask reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
          },
        }
      );

      // Parallax on image
      const imgEl = imageRef.current?.querySelector("img");
      if (imgEl) {
        gsap.to(imgEl, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Text stagger
      const items = textRef.current?.querySelectorAll(".reveal-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="section-pad"
      style={{ background: "#000" }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text side */}
          <div ref={textRef}>
            <div className="flex items-center gap-3 mb-8 reveal-item">
              <span className="blue-line" />
              <span className="text-overline text-white/40">Who We Are</span>
            </div>

            <h2
              className="text-heading-xl font-heading font-medium text-white mb-6 reveal-item"
              style={{ lineHeight: 1.1 }}
            >
              Building institutions that outlast trends.
            </h2>

            <p className="text-body-lg text-white/55 mb-6 reveal-item" style={{ lineHeight: 1.8 }}>
              Altruiso exists to build institutions that outlast trends. Rather
              than chasing short-term outcomes, we focus on businesses capable of
              generating enduring economic and social value.
            </p>

            <p className="text-body-lg text-white/55 mb-10 reveal-item" style={{ lineHeight: 1.8 }}>
              We are builders, investors, and partners—united by a shared belief
              that the greatest opportunities are created when people and capital
              align around purpose.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/[0.08] reveal-item">
              {[
                { label: "Founded", value: "2021" },
                { label: "Companies Built", value: "5+" },
                { label: "Focus Areas", value: "7" },
                { label: "Commitment", value: "Long-term" },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    className="font-display text-white mb-1"
                    style={{ fontSize: "28px", lineHeight: 1.2 }}
                  >
                    {item.value}
                  </div>
                  <div className="text-caption text-white/40 uppercase tracking-widest">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div
            ref={imageRef}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            <Image
              src="/images/who-we-are.png"
              alt="ALTRUISO — editorial architectural photography"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
            {/* Blue overlay tint */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(2,118,232,0.08) 0%, rgba(0,25,49,0.4) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
