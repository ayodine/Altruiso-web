import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Altruiso "Pitch for Investment" form — served from the same site at /pitch
 * (built into out/pitch). Opened in a new tab from every "Pitch for Investment" CTA.
 */
export const PITCH_FORM_URL = "/pitch/";
