"use client";
import { useId } from "react";

export type GlassIconVariant = "sphere" | "cube" | "prism" | "stack" | "ring";

/**
 * Abstract 3D "glass" icon rendered in pure SVG — brand-blue gradients with
 * specular highlights so the shapes read dimensional on dark surfaces.
 * No external assets; crisp at any size.
 */
export function GlassIcon({
  variant = "sphere",
  size = 56,
  className,
}: {
  variant?: GlassIconVariant;
  size?: number;
  className?: string;
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const glow = `glow-${uid}`;
  const face = `face-${uid}`;
  const frost = `frost-${uid}`;
  const blur = `blur-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient id={glow} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="18%" stopColor="#9CC8F5" />
          <stop offset="55%" stopColor="#3D96EE" />
          <stop offset="100%" stopColor="#0257AC" />
        </radialGradient>
        <linearGradient id={face} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(205,230,255,0.9)" />
          <stop offset="50%" stopColor="rgba(2,118,232,0.55)" />
          <stop offset="100%" stopColor="rgba(1,58,115,0.9)" />
        </linearGradient>
        <linearGradient id={frost} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.38)" />
          <stop offset="100%" stopColor="rgba(205,230,255,0.08)" />
        </linearGradient>
        <filter id={blur} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* soft ground shadow shared by all variants */}
      <ellipse cx="50" cy="88" rx="30" ry="6" fill="#0276E8" opacity="0.18" filter={`url(#${blur})`} />

      {variant === "sphere" && (
        <>
          <circle cx="50" cy="46" r="38" fill={`url(#${glow})`} />
          <ellipse cx="38" cy="28" rx="10" ry="6" fill="#FFFFFF" opacity="0.85" />
        </>
      )}

      {variant === "cube" && (
        <>
          {/* top face */}
          <path d="M50 12 L84 30 L50 48 L16 30 Z" fill={`url(#${frost})`} opacity="0.95" stroke="rgba(255,255,255,0.5)" strokeWidth="0.75" />
          {/* left face */}
          <path d="M16 30 L50 48 L50 86 L16 68 Z" fill={`url(#${face})`} stroke="rgba(255,255,255,0.35)" strokeWidth="0.75" />
          {/* right face */}
          <path d="M84 30 L50 48 L50 86 L84 68 Z" fill={`url(#${glow})`} opacity="0.9" stroke="rgba(255,255,255,0.35)" strokeWidth="0.75" />
          <ellipse cx="36" cy="24" rx="7" ry="3.5" fill="#FFFFFF" opacity="0.6" />
        </>
      )}

      {variant === "prism" && (
        <>
          {/* back triangle */}
          <path d="M62 18 L90 74 L34 74 Z" fill={`url(#${face})`} opacity="0.85" />
          {/* front frosted triangle */}
          <path d="M42 26 L72 82 L12 82 Z" fill={`url(#${frost})`} stroke="rgba(255,255,255,0.45)" strokeWidth="0.75" />
          <path d="M42 26 L50 42" stroke="#FFFFFF" strokeWidth="2" opacity="0.7" strokeLinecap="square" />
        </>
      )}

      {variant === "stack" && (
        <>
          <rect x="34" y="14" width="44" height="44" fill={`url(#${frost})`} stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
          <rect x="24" y="26" width="44" height="44" fill={`url(#${face})`} stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
          <rect x="14" y="38" width="44" height="44" fill={`url(#${glow})`} stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
          <rect x="18" y="42" width="12" height="4" fill="#FFFFFF" opacity="0.55" />
        </>
      )}

      {variant === "ring" && (
        <>
          <circle cx="50" cy="48" r="30" stroke={`url(#${glow})`} strokeWidth="14" fill="none" />
          {/* inner shadow arc for depth */}
          <path d="M28 62 A30 30 0 0 0 72 62" stroke="#012B54" strokeWidth="14" fill="none" opacity="0.35" />
          <ellipse cx="36" cy="26" rx="8" ry="4" fill="#FFFFFF" opacity="0.7" />
        </>
      )}
    </svg>
  );
}
