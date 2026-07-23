"use client";
import { useId, useState } from "react";

export type DonutDatum = {
  label: string;
  value: number;
  color: string;
};

type Props = {
  data: DonutDatum[];
  /** SVG diameter in px (viewBox units). */
  size?: number;
  /** Ring thickness in px. */
  thickness?: number;
  /** Hide the built-in legend (when the page supplies its own rows). */
  hideLegend?: boolean;
  /** Controlled highlight index — pair with onActiveChange. */
  active?: number | null;
  onActiveChange?: (index: number | null) => void;
};

/**
 * Dependency-free donut. Part-to-whole for a handful of categories.
 * Secondary encoding beyond color: 2px gaps between segments and a
 * direct-labelled legend (identity is never color-alone). Hovering a
 * segment or legend row highlights it and updates the center readout.
 */
export function DonutChart({
  data,
  size = 220,
  thickness = 26,
  hideLegend = false,
  active: controlledActive,
  onActiveChange,
}: Props) {
  const gradientId = useId();
  const [uncontrolledActive, setUncontrolledActive] = useState<number | null>(null);
  const active = controlledActive !== undefined ? controlledActive : uncontrolledActive;
  const setActive = (i: number | null) => {
    setUncontrolledActive(i);
    onActiveChange?.(i);
  };

  const total = data.reduce((sum, d) => sum + d.value, 0);
  const radius = (size - thickness) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;
  const gap = 2; // px surface gap between segments

  const fractions = data.map((d) => (total > 0 ? d.value / total : 0));
  const segments = data.map((d, i) => {
    const startFraction = fractions.slice(0, i).reduce((a, b) => a + b, 0);
    const length = Math.max(fractions[i] * circumference - gap, 0);
    return {
      ...d,
      i,
      dashArray: `${length} ${circumference - length}`,
      dashOffset: -(startFraction * circumference),
      pct: fractions[i] * 100,
    };
  });

  const centered =
    active != null ? segments[active] : null;

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
      {/* Chart */}
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          role="img"
          aria-label="Portfolio allocation by sector"
        >
          {/* track */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={thickness}
          />
          <g transform={`rotate(-90 ${cx} ${cy})`}>
            {segments.map((s) => (
              <circle
                key={s.label}
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                stroke={s.color}
                strokeWidth={thickness}
                strokeLinecap="butt"
                strokeDasharray={s.dashArray}
                strokeDashoffset={s.dashOffset}
                onMouseEnter={() => setActive(s.i)}
                onMouseLeave={() => setActive(null)}
                style={{
                  cursor: "pointer",
                  opacity: active == null || active === s.i ? 1 : 0.35,
                  transition: "opacity 0.25s ease",
                }}
                aria-hidden="true"
              />
            ))}
          </g>
        </svg>

        {/* Center readout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
          <span
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(28px, 3.4vw, 40px)", letterSpacing: "-0.02em" }}
          >
            {centered ? `${Math.round(centered.pct)}%` : data.length}
          </span>
          <span
            className="text-caption text-white/45 mt-1 max-w-[9ch]"
            style={{ lineHeight: 1.2 }}
          >
            {centered ? centered.label : "Sectors"}
          </span>
        </div>
        <span className="sr-only" id={gradientId}>
          Portfolio allocation:{" "}
          {segments
            .map((s) => `${s.label} ${Math.round(s.pct)}%`)
            .join(", ")}
          .
        </span>
      </div>

      {/* Legend (doubles as the data table) */}
      {!hideLegend && (
      <ul className="flex flex-col gap-3 w-full max-w-[300px]" aria-describedby={gradientId}>
        {segments.map((s) => (
          <li
            key={s.label}
            onMouseEnter={() => setActive(s.i)}
            onMouseLeave={() => setActive(null)}
            className="flex items-center gap-3 cursor-pointer"
            style={{
              opacity: active == null || active === s.i ? 1 : 0.4,
              transition: "opacity 0.25s ease",
            }}
          >
            <span
              className="w-3 h-3 shrink-0"
              style={{ background: s.color }}
              aria-hidden="true"
            />
            <span className="text-body-md text-white/80 flex-1">{s.label}</span>
            <span className="text-body-md font-heading text-white tabular-nums">
              {Math.round(s.pct)}%
            </span>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}
