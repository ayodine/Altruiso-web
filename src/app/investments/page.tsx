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
