"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import MagicRings from "@/components/ui/MagicRings";

gsap.registerPlugin(ScrollTrigger);

// The Altruiso monogram is three shards. We split it into two "diamonds":
// shard A = the large body, shard B = the two smaller wedges. Both are rendered
// in overlapping, identically-sized SVGs so that at their resting (identity)
// transform they recompose the exact monogram.
const PATH_A =
  "M114.44 34.3202L100.953 4.60528C98.1686 -1.53509 89.448 -1.53509 86.6633 4.60528L35.7779 116.732C34.0507 120.532 35.6087 125.016 39.3098 126.94L172.417 195.986C179.03 199.419 186.256 192.56 183.175 185.778L166.037 148.019C165.311 146.419 164.063 145.108 162.505 144.297L93.8894 108.71C89.2295 106.292 87.2767 100.652 89.448 95.872L114.432 40.813C115.37 38.7545 115.37 36.3858 114.432 34.3272L114.44 34.3202Z";
const PATH_B1 =
  "M153.608 130.62L100.573 103.112C98.2391 101.907 97.2662 99.0795 98.3519 96.6897L118.627 52.0151C120.383 48.1518 125.86 48.1518 127.616 52.0151L160.376 124.191C162.315 128.456 157.768 132.771 153.608 130.613V130.62Z";
const PATH_B2 =
  "M0.465461 192.003L26.303 135.055C27.4732 132.482 30.561 131.41 33.0708 132.714L75.0453 154.491C78.5984 156.331 78.5984 161.414 75.0453 163.254L7.22622 198.425C3.06684 200.583 -1.47323 196.275 0.458411 192.003H0.465461Z";

// Muted, dark-enough giant states so the white headline reads over them;
// both converge to the true brand blue as they resolve into the mark.
const A_START = "#17406F";
const B_START = "#1E5568";
const BRAND = "#0276E8";

export function Hero() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const shapeLayerRef = useRef<HTMLDivElement>(null);
  const shardARef = useRef<SVGSVGElement>(null);
  const shardBRef = useRef<SVGSVGElement>(null);
  const pathARef = useRef<SVGPathElement>(null);
  const pathB1Ref = useRef<SVGPathElement>(null);
  const pathB2Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const words = headlineRef.current?.querySelectorAll(".word-wrap") ?? [];
      const pathsB = [pathB1Ref.current, pathB2Ref.current];

      // ---- Reduced motion: show everything already resolved, no scrub. ----
      if (reduced) {
        gsap.set([shardARef.current, shardBRef.current], {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
        });
        gsap.set(pathARef.current, { fill: BRAND });
        gsap.set(pathsB, { fill: BRAND });
        gsap.set(shapeLayerRef.current, { opacity: 1 });
        gsap.set([pillRef.current, subRef.current], { opacity: 1, y: 0 });
        gsap.set(words, { y: "0%", opacity: 1 });
        gsap.set(ctaRef.current?.children ?? [], { opacity: 1, y: 0 });
        gsap.set(scrollIndicatorRef.current, { opacity: 1 });
        return;
      }

      // ---- Copy hidden until the load entrance. ----
      gsap.set(shapeLayerRef.current, { opacity: 0 });
      gsap.set([pillRef.current, subRef.current], { opacity: 0, y: 34 });
      gsap.set(ctaRef.current?.children ?? [], { opacity: 0, y: 22 });

      // 1. Load entrance — the giant diamonds fade in as the headline rises.
      //    The copy is present from the start (emcap keeps it static); only
      //    the shapes are driven by scroll.
      const tlEntrance = gsap.timeline({ delay: 0.15 });
      tlEntrance
        .to(shapeLayerRef.current, { opacity: 1, duration: 1.3, ease: "power2.out" })
        .to(
          pillRef.current,
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          0.15
        )
        .to(
          words,
          { y: "0%", opacity: 1, stagger: 0.09, duration: 0.9, ease: "power4.out" },
          0.28
        )
        .to(
          subRef.current,
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          0.62
        )
        .to(
          ctaRef.current?.children ?? [],
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.7, ease: "power3.out" },
          0.74
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          0.9
        );

      // Scroll cue line pulse.
      const scrollLine = scrollIndicatorRef.current?.querySelector(".scroll-line");
      if (scrollLine) {
        gsap.to(scrollLine, {
          scaleY: 0,
          duration: 1.2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          transformOrigin: "top center",
        });
      }

      // 2. The resolve — scrubbed across the sticky wall. Two oversized,
      //    rotated shards flank the headline (A top-left, B bottom-right) and
      //    de-rotate, shrink, and converge into the assembled monogram while
      //    shifting from muted to brand blue. power-out front-loads the motion
      //    so it settles early and holds — the emcap cadence.
      if (triggerRef.current) {
        const tlScroll = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.to(scrollIndicatorRef.current, {
                opacity: self.progress > 0.04 ? 0 : 1,
                duration: 0.3,
                overwrite: true,
              });
            },
          },
        });

        const resolve = { ease: "power2.out", duration: 1 } as const;
        tlScroll
          .fromTo(
            shardARef.current,
            {
              x: () => -window.innerWidth * 0.26,
              y: () => -window.innerHeight * 0.22,
              rotation: 42,
              scale: 3.6,
              transformOrigin: "50% 50%",
            },
            { x: 0, y: 0, rotation: 0, scale: 1, ...resolve },
            0
          )
          .fromTo(
            shardBRef.current,
            {
              x: () => window.innerWidth * 0.26,
              y: () => window.innerHeight * 0.22,
              rotation: -78,
              scale: 3.6,
              transformOrigin: "50% 50%",
            },
            { x: 0, y: 0, rotation: 0, scale: 1, ...resolve },
            0
          )
          .fromTo(
            pathARef.current,
            { fill: A_START },
            { fill: BRAND, duration: 1, ease: "power1.out" },
            0
          )
          .fromTo(
            pathsB,
            { fill: B_START },
            { fill: BRAND, duration: 1, ease: "power1.out" },
            0
          )
          // As the shards join into the finished mark, clear the copy so the
          // completed logo stands alone (emcap). Reverses on scroll-up.
          .to(
            [
              pillRef.current,
              headlineRef.current,
              subRef.current,
              ctaRef.current,
            ],
            { opacity: 0, y: -22, ease: "power2.in", duration: 0.3 },
            0.45
          );
      }
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const headline = ["Investing in Businesses", "Creating Opportunity."];

  return (
    <div ref={triggerRef} className="relative w-full h-[240vh]">
      {/* Sticky Hero section */}
      <section
        ref={stickyRef}
        id="hero"
        className="sticky top-0 left-0 w-full h-screen flex flex-col justify-center overflow-hidden bg-black"
      >
        {/* MagicRings WebGL atmosphere — dialed back so it reads as faint depth
            behind the resolving shards. */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <MagicRings
            color="#0276E8"
            colorTwo="#00C2FF"
            ringCount={7}
            speed={0.8}
            attenuation={9}
            lineThickness={2}
            baseRadius={0.3}
            radiusStep={0.12}
            scaleRate={0.12}
            opacity={0.32}
            blur={0}
            noiseAmount={0.04}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
          />
        </div>

        {/* Two monogram shards — giant, rotated, flanking on load; they resolve
            into the assembled mark on scroll. Both SVGs share the same viewBox,
            size, and centering so identity recomposes the exact logo. */}
        <div
          ref={shapeLayerRef}
          className="absolute inset-0 z-[1] pointer-events-none"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              ref={shardARef}
              viewBox="0 0 184 199"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[280px] h-[300px] md:w-[380px] md:h-[400px] overflow-visible"
            >
              <path ref={pathARef} d={PATH_A} fill={A_START} />
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              ref={shardBRef}
              viewBox="0 0 184 199"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[280px] h-[300px] md:w-[380px] md:h-[400px] overflow-visible"
            >
              <path ref={pathB1Ref} d={PATH_B1} fill={B_START} />
              <path ref={pathB2Ref} d={PATH_B2} fill={B_START} />
            </svg>
          </div>
        </div>

        {/* Legibility overlay — darkens the headline zone and melts the shards
            into black at the bottom edge (emcap's hero_overlay). */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "radial-gradient(56% 46% at 50% 46%, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.30) 44%, transparent 72%), linear-gradient(to bottom, transparent 52%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        {/* Content on top */}
        <div className="container-site relative z-10 flex flex-col items-center text-center">
          {/* Overline */}
          <div
            ref={pillRef}
            className="mb-8 px-5 py-2 bg-[rgba(2,118,232,0.06)] border-[#0276E8] opacity-0"
            style={{ borderWidth: "0.5px" }}
          >
            <span
              className="text-overline text-[#0276E8] tracking-[0.2em] font-heading font-medium block"
              style={{ fontSize: "10px", lineHeight: "1" }}
            >
              Investment • Strategy
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-display text-white mb-8 mx-auto"
            style={{
              maxWidth: "1080px",
              fontSize: "clamp(46px, 6.6vw, 104px)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              fontWeight: 500,
            }}
          >
            {headline.map((word, i) => (
              <span key={i} className="block overflow-hidden">
                <span className="word-wrap block opacity-0" style={{ transform: "translateY(110%)" }}>
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Subheading */}
          <p
            ref={subRef}
            className="text-body-lg text-white/55 mb-10 opacity-0 mx-auto"
            style={{ maxWidth: "620px", lineHeight: 1.7 }}
          >
            Through Altruiso Investments and Altruiso Strategies, we invest
            in, acquire, and grow businesses designed for long-term value.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#ecosystem"
              className="group inline-flex items-center gap-3 px-8 py-4 font-heading font-medium text-sm text-black transition-all duration-300 hover:scale-105 opacity-0"
              style={{ background: "#0276E8", color: "white", fontSize: "14px", letterSpacing: "0.01em" }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#ecosystem")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Our Ecosystem
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#builders-welcome"
              className="inline-flex items-center gap-3 px-8 py-4 font-heading font-medium text-sm text-white border border-white/20 hover:border-white/50 transition-all duration-300 opacity-0"
              style={{ fontSize: "14px" }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#builders-welcome")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Partner With Us
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 z-10"
        >
          <div className="text-overline text-white/30 mb-1">Scroll</div>
          <div className="w-px h-12 bg-white/10 overflow-hidden">
            <div className="scroll-line w-full h-full bg-[#0276E8]" />
          </div>
        </div>
      </section>
    </div>
  );
}
