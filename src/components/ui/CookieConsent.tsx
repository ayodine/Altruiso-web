"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const CONSENT_KEY = "altruiso-cookie-consent";

/**
 * First-visit cookie consent notice, pinned to the base of the viewport.
 * The choice ("accepted" | "declined") is persisted in localStorage so the
 * banner never reappears once answered.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let existing: string | null = null;
    try {
      existing = window.localStorage.getItem(CONSENT_KEY);
    } catch {
      // Storage unavailable (private mode etc.) — show the notice anyway.
    }
    if (existing) return;
    const timer = setTimeout(() => setVisible(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  const choose = (choice: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // If storage fails the banner simply returns next visit.
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 48 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 inset-x-0 z-[100] pointer-events-none"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
        >
          <div className="container-site pb-5">
            <div
              className="pointer-events-auto rounded-2xl border border-white/10 px-6 py-5 md:px-8 md:py-6 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10"
              style={{
                background: "rgba(10, 12, 16, 0.92)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 -8px 40px rgba(0,0,0,0.45)",
              }}
            >
              <p className="text-body-sm text-white/55 flex-1" style={{ lineHeight: 1.7 }}>
                By using this website, you agree to our use of optional
                first-party and third-party cookies to enhance navigation,
                analyse site usage, and improve your experience. You can
                withdraw consent at any time. See our{" "}
                <Link
                  href="/privacy"
                  className="text-white/80 hover:text-white transition-colors link-underline"
                  data-cursor-hover
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => choose("declined")}
                  className="px-6 py-3 rounded-full font-heading font-medium text-white/60 hover:text-white border border-white/15 hover:border-white/40 transition-colors duration-300"
                  style={{ fontSize: "14px" }}
                  data-cursor-hover
                >
                  Decline
                </button>
                <button
                  type="button"
                  onClick={() => choose("accepted")}
                  className="px-7 py-3 rounded-full font-heading font-medium text-white transition-shadow duration-300"
                  style={{
                    fontSize: "14px",
                    background: "#0276E8",
                    boxShadow: "0 0 30px rgba(2,118,232,0.25)",
                  }}
                  data-cursor-hover
                >
                  I Understand
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
