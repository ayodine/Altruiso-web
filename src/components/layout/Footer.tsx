"use client";
import Link from "next/link";
import { Mail, ArrowUpRight, ArrowRight } from "lucide-react";
import { PITCH_FORM_URL } from "@/lib/utils";

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="18.5" cy="5.5" r="1.5" fill="currentColor"/>
    </svg>
  );
}

const footerLinks = {
  Company: [
    { label: "Who We Are", href: "#who-we-are" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Our Ecosystem", href: "#ecosystem" },
    { label: "Partner With Us", href: "#builders-welcome" },
  ],
  Platforms: [
    { label: "Altruiso Investments", href: "/investments" },
    { label: "Altruiso Strategies", href: "/strategies" },
  ],
  Resources: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Contact", href: "mailto:hello@altruiso.com" },
  ],
};

export function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.assign(href);
    }
  };

  return (
    <footer
      className="overflow-hidden"
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingBottom: "clamp(32px, 3vw, 48px)",
      }}
    >
      {/* Contact CTA — merged into the footer over a full-bleed architectural
          photo that fades into the dark footer nav (veritaas pattern). */}
      <div id="builders-welcome" className="scroll-mt-28 relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/footer-abstract.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(1.02) contrast(1.04) brightness(0.98)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.14) 45%, #000 100%), linear-gradient(100deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.08) 46%, transparent 66%)",
          }}
        />
        <div
          className="relative container-site"
          style={{
            paddingTop: "clamp(88px, 11vw, 180px)",
            paddingBottom: "clamp(72px, 8vw, 132px)",
          }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="blue-line" />
            <span className="text-overline text-white/60">Partner With Us</span>
          </div>
          <h2
            className="font-display text-white mb-10 md:mb-14"
            style={{
              fontSize: "clamp(40px, 6vw, 92px)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              maxWidth: "15ch",
            }}
          >
            Let&rsquo;s build something that lasts.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary — pitch for investment (opens the pitch form) */}
            <a
              href={PITCH_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 font-heading font-medium text-white transition-shadow duration-300"
              style={{
                fontSize: "16px",
                background: "linear-gradient(135deg, #0276E8 0%, #005CB7 100%)",
                boxShadow: "0 0 40px rgba(2,118,232,0.22)",
                letterSpacing: "-0.005em",
              }}
              data-cursor-hover
            >
              Pitch for Investment
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Secondary — start a conversation (water-fill sweep) */}
            <a
              href="https://calendly.com/thealtruiso/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-5 font-heading font-medium text-white border border-white/25 hover:border-[#0276E8] transition-colors duration-300"
              style={{ fontSize: "16px", background: "rgba(0,0,0,0.25)" }}
              data-cursor-hover
            >
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                style={{ background: "#0276E8" }}
                aria-hidden="true"
              />
              <span className="relative z-10">Start a Conversation</span>
              <ArrowRight
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="container-site" style={{ paddingTop: "clamp(56px, 6vw, 96px)" }}>
        {/* Top row — brand statement + link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 mb-16 md:mb-24">
          {/* Brand */}
          <div className="lg:col-span-6">
            <Link
              href="/"
              aria-label="Altruiso — back to homepage"
              className="inline-block mb-8"
              data-cursor-hover
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/logo-white.svg"
                alt="Altruiso"
                width={138}
                height={32}
                className="h-[32px] w-auto"
              />
            </Link>
            <p
              className="font-display text-white/85 mb-10"
              style={{
                fontSize: "clamp(24px, 2.6vw, 40px)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                maxWidth: "17ch",
              }}
            >
              Building institutions that create opportunity.
            </p>
            <p
              className="text-body-md text-white/40 mb-10"
              style={{ lineHeight: 1.75, maxWidth: "340px" }}
            >
              Through ownership, investment, partnerships, and venture
              creation.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: LinkedInIcon, href: "https://www.linkedin.com/company/altruiso-inc/", label: "LinkedIn" },
                { icon: InstagramIcon, href: "https://www.instagram.com/altruisoholdings/", label: "Instagram" },
                { icon: XIcon, href: "https://x.com/altruiso", label: "X (Twitter)" },
                { icon: Mail, href: "mailto:hello@altruiso.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-11 h-11 flex items-center justify-center text-white/45 hover:text-white transition-all duration-300 hover:scale-110"
                  style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(2,118,232,0.5)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(2,118,232,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                  data-cursor-hover
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-overline text-white/30 mb-7">{category}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="font-heading text-white/50 hover:text-white transition-colors duration-300 link-underline text-left"
                        style={{ fontSize: "clamp(15px, 1.3vw, 17px)" }}
                        data-cursor-hover
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-body-sm text-white/30">
            © {new Date().getFullYear()} Altruiso. All rights reserved.
          </p>

          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2.5 text-body-sm text-white/30 hover:text-white transition-colors duration-300"
            data-cursor-hover
          >
            Back to top
            <span className="w-8 h-8 border border-white/20 group-hover:border-white/50 flex items-center justify-center transition-all duration-300">
              <ArrowUpRight size={13} className="rotate-[-45deg]" />
            </span>
          </a>
        </div>
      </div>

      {/* Ghost wordmark — spans the full viewport width, cropped at the
          page's bottom edge */}
      <div
        className="relative mt-10 md:mt-14"
        style={{ height: "13vw" }}
        aria-hidden="true"
      >
        <span
          className="font-display absolute left-1/2 -translate-x-1/2 top-0 leading-none whitespace-nowrap select-none"
          style={{
            fontSize: "22.3vw",
            letterSpacing: "-0.02em",
            color: "rgba(255,255,255,0.05)",
          }}
        >
          ALTRUISO
        </span>
      </div>
    </footer>
  );
}
