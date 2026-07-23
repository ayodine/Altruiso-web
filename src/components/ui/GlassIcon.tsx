export type GlassIconVariant =
  | "sphere"
  | "cube"
  | "prism"
  | "stack"
  | "ring"
  | "bars"
  | "book"
  | "pinwheel";

/**
 * Abstract 3D "glass" icon — a light, frosted-glass render (generated with
 * three.js, shipped as a transparent PNG). A soft blue halo behind it keeps
 * the icon legible on any surface, light or dark.
 */
export function GlassIcon({
  variant = "sphere",
  size = 64,
  className,
}: {
  variant?: GlassIconVariant;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${className ?? ""}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* soft halo — lifts the icon off dark cards */}
      <span
        className="pointer-events-none absolute inset-[-18%]"
        style={{
          background:
            "radial-gradient(circle at 50% 46%, rgba(2,118,232,0.32) 0%, rgba(2,118,232,0.10) 42%, transparent 68%)",
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/icons/${variant}.png`}
        alt=""
        loading="lazy"
        className="relative h-full w-full object-contain"
        style={{ filter: "drop-shadow(0 8px 20px rgba(2,118,232,0.28))" }}
      />
    </span>
  );
}
