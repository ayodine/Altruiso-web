"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MarqueeBandProps {
  /** One sequence of the marquee; it is duplicated internally for the loop. */
  children: React.ReactNode;
  /** Seconds for one full loop of the sequence. */
  duration?: number;
  className?: string;
  /** Inline style on the overflow-clipping wrapper (e.g. an edge-fade mask). */
  style?: React.CSSProperties;
  /**
   * Class applied to EACH copy of the sequence. For a seamless wrap, pair
   * every `gap-x-*` with a matching `pr-*` (the seam inherits the padding).
   */
  trackClassName?: string;
  ariaLabel?: string;
}

/**
 * Infinite horizontal marquee. Scroll velocity briefly accelerates the
 * drift (Lenis-smoothed), which keeps the band feeling attached to the page
 * rather than a looping GIF.
 */
export function MarqueeBand({
  children,
  duration = 28,
  className = "",
  style,
  trackClassName = "",
  ariaLabel,
}: MarqueeBandProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration,
        repeat: -1,
      });

      const st = ScrollTrigger.create({
        trigger: wrap,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const boost = Math.min(Math.abs(self.getVelocity()) / 900, 5);
          gsap.to(tween, {
            timeScale: 1 + boost,
            duration: 0.6,
            overwrite: true,
          });
        },
      });

      return () => st.kill();
    }, wrap);
    return () => ctx.revert();
  }, [duration]);

  return (
    <div
      ref={wrapRef}
      className={`overflow-hidden ${className}`}
      style={style}
      aria-label={ariaLabel}
    >
      <div ref={trackRef} className="flex w-max">
        <div className={`flex shrink-0 items-center ${trackClassName}`}>{children}</div>
        <div className={`flex shrink-0 items-center ${trackClassName}`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
