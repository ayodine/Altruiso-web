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
      // 1. Initial Entrance Animation (Text elements fly up, scroll indicator pulses)
      const tlEntrance = gsap.timeline({ delay: 0.2 });

      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".word-wrap");
        tlEntrance.fromTo(
          words,
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.2,
            stagger: 0.08,
            ease: "power4.out",
          }
        );
      }

      tlEntrance.fromTo(
        subRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.6"
      );

      tlEntrance.fromTo(
        ctaRef.current?.children ?? [],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" },
        "-=0.5"
      );

      tlEntrance.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.2"
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

      // 2. Scroll-driven convergence (emcap.com style): the monogram starts as
      //    three scattered shards bleeding off the edges and assembles into the
      //    logo as the hero scrolls away, while the copy clears out.
      if (triggerRef.current) {
        // Establish the scattered starting state up front so there's no
        // "assembled" flash before the first scroll frame. transformOrigin
        // "50% 50%" lets GSAP rotate each shard about its own bbox centre.
        gsap.set(path1Ref.current, { x: -300, y: -240, rotation: -55, opacity: 0.12, transformOrigin: "50% 50%" });
        gsap.set(path2Ref.current, { x: 320, y: -170, rotation: 50, opacity: 0.12, transformOrigin: "50% 50%" });
        gsap.set(path3Ref.current, { x: -240, y: 260, rotation: -35, opacity: 0.12, transformOrigin: "50% 50%" });
        gsap.set(svgContainerRef.current, { scale: 1.5, transformOrigin: "50% 50%" });

        const tlScroll = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Copy clears out over the first ~half of the track.
        tlScroll.to(
          [headlineRef.current, subRef.current, ctaRef.current],
          { opacity: 0, y: -80, stagger: 0.04, ease: "power2.in", duration: 0.5 },
          0
        );
        tlScroll.to(
          scrollIndicatorRef.current,
          { opacity: 0, ease: "none", duration: 0.25 },
          0
        );

        // Shards slide, rotate and fade into their assembled positions. A small
        // stagger keeps them from snapping into place all at once.
        const assemble = { x: 0, y: 0, rotation: 0, opacity: 1, ease: "power2.out", duration: 1 };
        tlScroll.to(path1Ref.current, { ...assemble }, 0);
        tlScroll.to(path2Ref.current, { ...assemble }, 0.05);
        tlScroll.to(path3Ref.current, { ...assemble }, 0.1);

        // Assembled monogram settles to a clean resting size.
        tlScroll.to(
          svgContainerRef.current,
          { scale: 0.85, ease: "power2.out", duration: 1 },
          0
        );
      }
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const headline = ["Building Institutions", "That Create Opportunity."];

  return (
    <div ref={triggerRef} className="relative w-full h-[200vh]">
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
            className="mb-10 px-5 py-2 rounded-full bg-[rgba(2,118,232,0.06)] border-[#0276E8]"
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
            className="text-display-xl font-display mb-8 mx-auto"
            style={{ maxWidth: "900px" }}
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
            className="text-body-lg text-white/60 mb-12 opacity-0 mx-auto"
            style={{ maxWidth: "560px", lineHeight: "1.7" }}
          >
            Altruiso creates, invests in, and supports businesses that generate
            enduring value through ownership, strategic partnerships, and venture
            creation.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#ecosystem"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-medium text-sm text-black transition-all duration-300 hover:scale-105"
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
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-medium text-sm text-white border border-white/20 hover:border-white/50 transition-all duration-300"
              style={{ fontSize: "14px" }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#builders-welcome")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Share Your Idea
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
