"use client";
import { useCallback } from "react";
import StaggeredMenu, {
  type StaggeredMenuItem,
} from "@/components/ui/StaggeredMenu";
import GradualBlur from "@/components/ui/GradualBlur";

const menuItems: StaggeredMenuItem[] = [
  { label: "Who We Are", ariaLabel: "Who we are", link: "#who-we-are" },
  { label: "What We Do", ariaLabel: "See what we do", link: "#what-we-do" },
  { label: "Ecosystem", ariaLabel: "Explore our ecosystem", link: "#ecosystem" },
  { label: "Investments", ariaLabel: "Altruiso Investments", link: "/investments" },
  { label: "Strategies", ariaLabel: "Altruiso Strategies", link: "/strategies" },
  { label: "Partner With Us", ariaLabel: "Partner with us", link: "#builders-welcome" },
];

const socialItems = [
  { label: "LinkedIn", link: "https://www.linkedin.com/company/altruiso-inc/" },
  { label: "Instagram", link: "https://www.instagram.com/altruisoholdings/" },
  { label: "X", link: "https://x.com/altruiso" },
  { label: "Email", link: "mailto:hello@altruiso.com" },
];

export function Navbar() {
  const handleItemClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, item: StaggeredMenuItem) => {
      if (item.link.startsWith("#")) {
        event.preventDefault();
        const target = document.querySelector(item.link);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        } else {
          // Anchor lives on the homepage — navigate there with the hash.
          window.location.href = `/${item.link}`;
        }
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
