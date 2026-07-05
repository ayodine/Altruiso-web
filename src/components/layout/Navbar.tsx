"use client";
import { useCallback } from "react";
import StaggeredMenu, {
  type StaggeredMenuItem,
} from "@/components/ui/StaggeredMenu";
import GradualBlur from "@/components/ui/GradualBlur";

const menuItems: StaggeredMenuItem[] = [
  { label: "About", ariaLabel: "Learn who we are", link: "#who-we-are" },
  { label: "What We Do", ariaLabel: "See what we do", link: "#what-we-do" },
  { label: "Ecosystem", ariaLabel: "Explore our ecosystem", link: "#ecosystem" },
  { label: "Portfolio", ariaLabel: "See our portfolio", link: "#portfolio" },
  { label: "Investments", ariaLabel: "View our investment focus", link: "#investment-focus" },
  { label: "Focus Areas", ariaLabel: "Explore our focus areas", link: "#focus-areas" },
  { label: "Vision", ariaLabel: "Read our vision", link: "#vision" },
  { label: "Get in Touch", ariaLabel: "Share your idea", link: "#builders-welcome" },
];

const socialItems = [
  { label: "LinkedIn", link: "https://linkedin.com/company/altruiso" },
  { label: "X", link: "https://x.com/altruiso" },
  { label: "Email", link: "mailto:hello@altruiso.com" },
];

export function Navbar() {
  const handleItemClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, item: StaggeredMenuItem) => {
      if (item.link.startsWith("#")) {
        event.preventDefault();
        document
          .querySelector(item.link)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <>
      <GradualBlur
        target="page"
        position="top"
        height="6rem"
        strength={2}
        divCount={6}
        curve="bezier"
        exponential
        opacity={1}
        zIndex={30}
      />
      <StaggeredMenu
        isFixed
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        logoUrl="/brand/logo-white.svg"
        openLogoUrl="/brand/logo-black.svg"
        accentColor="#0276E8"
        colors={["#001931", "#0276E8"]}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#0276E8"
        changeMenuColorOnOpen
        onItemClick={handleItemClick}
      />
    </>
  );
}
