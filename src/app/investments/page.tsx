import type { Metadata } from "next";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InvestmentsContent } from "@/components/pages/InvestmentsContent";

export const metadata: Metadata = {
  title: "Altruiso Investments",
  description:
    "We invest patiently in businesses and opportunities we believe will create enduring economic and social value.",
  openGraph: {
    title: "Altruiso Investments | Long-Term Value & Growth Capital",
    description:
      "Investing in businesses and opportunities that create enduring economic and social value through equity ownership and strategic partnerships.",
    url: "https://altruiso.com/investments",
    images: [{ url: "/altruiso-opengraph.png", width: 1200, height: 630, alt: "Altruiso Investments" }],
  },
  alternates: {
    canonical: "https://altruiso.com/investments",
  },
};

export default function InvestmentsPage() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <InvestmentsContent />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
