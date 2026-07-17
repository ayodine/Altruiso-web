import type { Metadata } from "next";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Altruiso collects, uses, and protects information when you use our website.",
};

const sections = [
  {
    title: "Who We Are",
    body: [
      "Altruiso is a long-term holding company that builds, acquires, invests in, and holds businesses and opportunities. This policy explains how we handle information collected through this website, including our Investments and Strategies pages.",
    ],
  },
  {
    title: "Information We Collect",
    body: [
      "Information you provide directly — such as your name, email address, and phone number when you share an idea or contact us through the forms on this site.",
      "Information collected automatically — such as pages visited, approximate location, device and browser type, and how you interact with the site. This is collected through cookies and similar technologies.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use the information we collect to respond to your enquiries, evaluate potential partnerships and investment opportunities, operate and improve this website, and understand how visitors use it. We do not sell personal information.",
    ],
  },
  {
    title: "Cookies & Analytics",
    body: [
      "We use optional first-party and third-party cookies to enhance site functionality, remember preferences, and analyse traffic. You can accept or decline optional cookies through the consent notice shown on your first visit, and you can withdraw consent at any time by clearing your browser's cookies for this site.",
      "Essential cookies that are strictly necessary for the site to function may be set regardless of your consent choice.",
    ],
  },
  {
    title: "Sharing & Third Parties",
    body: [
      "We may share information with service providers who help us operate this website (such as hosting and analytics providers), with professional advisers where necessary, and where required by law. These parties are only permitted to use the information to provide services to us.",
    ],
  },
  {
    title: "Data Retention & Security",
    body: [
      "We keep personal information only for as long as it is needed for the purposes described in this policy, or as required by law. We use reasonable technical and organisational measures to protect it, though no method of transmission or storage is completely secure.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "Depending on where you live, you may have rights to access, correct, delete, or restrict the use of your personal information, and to withdraw consent where processing is based on consent. To exercise any of these rights, contact us using the details below.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For any questions about this policy or how your information is handled, contact us at hello@altruiso.com. We will update this page if our practices change, and revise the date shown above.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Header */}
        <section
          style={{
            background: "#000",
            paddingTop: "clamp(140px, 16vw, 220px)",
            paddingBottom: "clamp(40px, 5vw, 80px)",
          }}
        >
          <div className="container-site">
            <div className="flex items-center gap-3 mb-6">
              <span className="blue-line" />
              <span className="text-overline text-white/40">Legal</span>
            </div>
            <h1
              className="font-display text-white mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 92px)", lineHeight: 1.03, letterSpacing: "-0.03em" }}
            >
              Privacy Policy.
            </h1>
            <p className="text-caption text-white/30 mb-8">Last updated: July 17, 2026</p>
            <p className="text-body-lg text-white/55" style={{ lineHeight: 1.75, maxWidth: "640px" }}>
              This policy describes what information we collect when you use
              this website, how we use it, and the choices you have. It is
              written to be read — if anything is unclear, ask us.
            </p>
          </div>
        </section>

        {/* Sections */}
        <section className="pb-24 md:pb-36" style={{ background: "#000" }}>
          <div className="container-site">
            <div className="max-w-3xl">
              {sections.map((s, i) => (
                <div key={s.title} className="border-t border-white/10 py-10 md:py-12">
                  <div className="flex items-baseline gap-5 mb-5">
                    <span className="font-heading text-[#0276E8]/50 shrink-0" style={{ fontSize: "14px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2
                      className="font-heading font-medium text-white"
                      style={{ fontSize: "clamp(20px, 2.2vw, 28px)", letterSpacing: "-0.015em" }}
                    >
                      {s.title}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-4 md:pl-12">
                    {s.body.map((para, j) => (
                      <p key={j} className="text-body-md text-white/50" style={{ lineHeight: 1.8 }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              <div className="border-t border-white/10" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
