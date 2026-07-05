"use client";
import { Mail, ArrowUpRight } from "lucide-react";

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

const footerLinks = {
  Company: [
    { label: "About", href: "#who-we-are" },
    { label: "Vision", href: "#vision" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Investments", href: "#investment-focus" },
  ],
  Ecosystem: [
    { label: "Altruiso Strategies", href: "#ecosystem" },
    { label: "Mindset to Wealth", href: "#ecosystem" },
    { label: "Swing Trade FX", href: "#ecosystem" },
    { label: "Future Advisory", href: "#ecosystem" },
  ],
  Resources: [
    { label: "News", href: "#" },
    { label: "Insights", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Contact", href: "mailto:hello@altruiso.com" },
  ],
};

export function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer
      className="pt-16 md:pt-20 pb-16 md:pb-20"
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-site">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-white.svg"
              alt="Altruiso"
              width={112}
              height={26}
              className="h-[26px] w-auto mb-6"
            />
            <p
              className="text-body-sm text-white/40 mb-8"
              style={{ lineHeight: 1.8, maxWidth: "280px" }}
            >
              Building institutions that create opportunity through ownership,
              investment, partnerships, and venture creation.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: LinkedInIcon, href: "https://linkedin.com/company/altruiso", label: "LinkedIn" },
                { icon: XIcon, href: "https://x.com/altruiso", label: "X (Twitter)" },
                { icon: Mail, href: "mailto:hello@altruiso.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all duration-300 hover:scale-110"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(2,118,232,0.5)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(2,118,232,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="font-heading font-medium text-white mb-5"
                style={{ fontSize: "13px", letterSpacing: "0.05em" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-body-sm text-white/40 hover:text-white transition-colors duration-300 link-underline text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-caption text-white/30">
            © {new Date().getFullYear()} Altruiso. All rights reserved.
          </p>

          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2 text-caption text-white/30 hover:text-white transition-colors duration-300"
          >
            Back to top
            <div className="w-6 h-6 rounded-full border border-white/20 group-hover:border-white/50 flex items-center justify-center transition-all duration-300">
              <ArrowUpRight size={11} className="rotate-[-45deg]" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
