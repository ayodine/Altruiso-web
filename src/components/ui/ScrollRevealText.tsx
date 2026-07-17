"use client";
import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Token = { word: string; accent: boolean };

/** Parse `**accented**` spans out of a plain string into word tokens. */
function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  for (const chunk of text.split(/(\*\*[^*]+\*\*)/g)) {
    if (!chunk) continue;
    const accent = chunk.startsWith("**") && chunk.endsWith("**");
    const clean = accent ? chunk.slice(2, -2) : chunk;
    for (const word of clean.split(/\s+/)) {
      if (word) tokens.push({ word, accent });
    }
  }
  return tokens;
}

interface ScrollRevealTextProps {
  /** Plain text; wrap words in `**double asterisks**` to accent them. */
  text: string;
  className?: string;
  style?: React.CSSProperties;
  tag?: "p" | "h2" | "h3" | "blockquote";
  /** Class applied to accented words (default: brand ice-blue). */
  accentClassName?: string;
  /** Resting opacity of unrevealed words. */
  dimOpacity?: number;
  /** ScrollTrigger start/end (defaults tuned for large paragraphs). */
  start?: string;
  end?: string;
}

/**
 * Large-paragraph reveal: every word starts dimmed and is brought to full
 * opacity one-by-one, scrubbed to the scroll position (Lenis-driven via
 * SmoothScroll). Reserve for big display statements — body copy should not
 * scrub.
 */
export function ScrollRevealText({
  text,
  className = "",
  style,
  tag: Tag = "p",
  accentClassName = "text-[#8FC6FF]",
  dimOpacity = 0.14,
  start = "top 78%",
  end = "bottom 45%",
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const tokens = useMemo(() => tokenize(text), [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const words = el.querySelectorAll<HTMLElement>("[data-reveal-word]");
      gsap.set(words, { opacity: dimOpacity });
      gsap.to(words, {
        opacity: 1,
        ease: "none",
        stagger: 1,
        scrollTrigger: { trigger: el, start, end, scrub: 0.6 },
      });
    }, el);
    return () => ctx.revert();
  }, [text, dimOpacity, start, end]);

  return (
    <Tag ref={ref as React.Ref<never>} className={className} style={style}>
      {tokens.map((t, i) => (
        <span
          key={i}
          data-reveal-word
          className={t.accent ? accentClassName : undefined}
        >
          {t.word}
          {i < tokens.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
