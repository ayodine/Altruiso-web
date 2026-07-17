"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import MagicRings from "@/components/ui/MagicRings";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Narrative: the page loads on the fully assembled monogram, front and
      // center. Scrolling shatters it — the shards fly apart and dim — and
      // the copy (pill → headline → sub → CTAs) reveals in its place.

      // Assembled starting state. transformOrigin "50% 50%" rotates each
      // shard about its own bbox centre when it scatters.
      gsap.set([path1Ref.current, path2Ref.current, path3Ref.current], {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
      });
      gsap.set(svgContainerRef.current, { scale: 0.85, transformOrigin: "50% 50%" });

      // Copy hidden until the reveal phase (headline words carry their own
      // inline hidden state in the JSX).
      gsap.set([pillRef.current, subRef.current], { opacity: 0, y: 36 });
      gsap.set(ctaRef.current?.children ?? [], { opacity: 0, y: 24 });

      // 1. Load entrance — the assembled logo settles in, scroll cue invites
      // the story.
      const tlEntrance = gsap.timeline({ delay: 0.2 });
      tlEntrance.fromTo(
        svgContainerRef.current,
        { opacity: 0, scale: 0.72 },
        { opacity: 1, scale: 0.85, duration: 1.4, ease: "power3.out" }
      );
      tlEntrance.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.6"
      );

      // Scroll indicator line pulse
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

      // 2. Scrubbed story across the sticky track.
      if (triggerRef.current) {
        const words = headlineRef.current?.querySelectorAll(".word-wrap") ?? [];

        const tlScroll = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
            // The scroll cue is driven directly off progress (overwrite kills
            // the entrance tween) so a scroll during page load can't leave it
            // stuck visible.
            onUpdate: (self) => {
              gsap.to(scrollIndicatorRef.current, {
                opacity: self.progress > 0.04 ? 0 : 1,
                duration: 0.3,
                overwrite: true,
              });
            },
          },
        });

        // Phase 1 (0 → ~0.45): the monogram shatters — shards fly outward,
        // rotate, and dim to a faint residue. A small stagger keeps them from
        // breaking apart all at once.
        const shatter = { ease: "power2.in", duration: 0.42 };
        tlScroll.to(path1Ref.current, { x: -300, y: -240, rotation: -55, opacity: 0.1, ...shatter }, 0);
        tlScroll.to(path2Ref.current, { x: 320, y: -170, rotation: 50, opacity: 0.1, ...shatter }, 0.03);
        tlScroll.to(path3Ref.current, { x: -240, y: 260, rotation: -35, opacity: 0.1, ...shatter }, 0.06);
        tlScroll.to(
          svgContainerRef.current,
          { scale: 1.4, ease: "power2.inOut", duration: 0.5 },
          0
        );

        // Phase 2 (~0.36 → 0.8): copy reveals in editorial order, starting
        // when the shatter is ~75% through so the two moments overlap.
        tlScroll.to(pillRef.current, { opacity: 1, y: 0, ease: "power2.out", duration: 0.1 }, 0.36);
        tlScroll.to(
          words,
          { y: "0%", opacity: 1, stagger: 0.045, ease: "power3.out", duration: 0.22 },
          0.42
        );
        tlScroll.to(subRef.current, { opacity: 1, y: 0, ease: "power2.out", duration: 0.14 }, 0.56);
        tlScroll.to(
          ctaRef.current?.children ?? [],
          { opacity: 1, y: 0, stagger: 0.04, ease: "power2.out", duration: 0.12 },
          0.66
        );
      }
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const headline = ["Building Institutions", "That Create Opportunity."];

  return (
    <div ref={triggerRef} className="relative w-full h-[280vh]">
      {/* Sticky Hero section */}
      <section
        ref={stickyRef}
        id="hero"
        className="sticky top-0 left-0 w-full h-screen flex flex-col justify-center overflow-hidden bg-black"
      >
        {/* MagicRings WebGL background */}
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
            opacity={0.55}
            blur={0}
            noiseAmount={0.04}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
          />
        </div>

        {/* 3D Converging Logo Container in the background */}
        <div
          ref={svgContainerRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <svg
            width="380"
            height="400"
            viewBox="0 0 184 199"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[280px] h-[300px] md:w-[380px] md:h-[400px] overflow-visible"
          >
            <path
              ref={path1Ref}
              d="M114.44 34.3202L100.953 4.60528C98.1686 -1.53509 89.448 -1.53509 86.6633 4.60528L35.7779 116.732C34.0507 120.532 35.6087 125.016 39.3098 126.94L172.417 195.986C179.03 199.419 186.256 192.56 183.175 185.778L166.037 148.019C165.311 146.419 164.063 145.108 162.505 144.297L93.8894 108.71C89.2295 106.292 87.2767 100.652 89.448 95.872L114.432 40.813C115.37 38.7545 115.37 36.3858 114.432 34.3272L114.44 34.3202Z"
              fill="#0276E8"
            />
            <path
              ref={path2Ref}
              d="M153.608 130.62L100.573 103.112C98.2391 101.907 97.2662 99.0795 98.3519 96.6897L118.627 52.0151C120.383 48.1518 125.86 48.1518 127.616 52.0151L160.376 124.191C162.315 128.456 157.768 132.771 153.608 130.613V130.62Z"
              fill="#0276E8"
            />
            <path
              ref={path3Ref}
              d="M0.465461 192.003L26.303 135.055C27.4732 132.482 30.561 131.41 33.0708 132.714L75.0453 154.491C78.5984 156.331 78.5984 161.414 75.0453 163.254L7.22622 198.425C3.06684 200.583 -1.47323 196.275 0.458411 192.003H0.465461Z"
              fill="#0276E8"
            />
          </svg>
        </div>

        {/* Content on top */}
        <div className="container-site relative z-10 flex flex-col items-center text-center">
          {/* Overline */}
          <div
            ref={pillRef}
            className="mb-8 px-5 py-2 rounded-full bg-[rgba(2,118,232,0.06)] border-[#0276E8] opacity-0"
            style={{ borderWidth: "0.5px" }}
          >
            <span
              className="text-overline text-[#0276E8] tracking-[0.2em] font-heading font-medium block"
              style={{ fontSize: "10px", lineHeight: "1" }}
            >
              Venture Building & Investment
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
            Altruiso is a long-term holding company that builds, acquires,
            invests in, and holds businesses and opportunities with enduring
            potential. We partner with exceptional founders and businesses to
            create lasting economic value and build institutions that outlive
            generations.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#ecosystem"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-medium text-sm text-black transition-all duration-300 hover:scale-105 opacity-0"
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
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-medium text-sm text-white border border-white/20 hover:border-white/50 transition-all duration-300 opacity-0"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
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
