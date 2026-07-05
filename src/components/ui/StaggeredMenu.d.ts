declare module "@/components/ui/StaggeredMenu" {
  export interface StaggeredMenuItem {
    label: string;
    ariaLabel?: string;
    link: string;
  }

  export interface StaggeredMenuSocialItem {
    label: string;
    link: string;
  }

  export interface StaggeredMenuProps {
    position?: "left" | "right";
    colors?: string[];
    items?: StaggeredMenuItem[];
    socialItems?: StaggeredMenuSocialItem[];
    displaySocials?: boolean;
    displayItemNumbering?: boolean;
    className?: string;
    logoUrl?: string;
    openLogoUrl?: string;
    menuButtonColor?: string;
    openMenuButtonColor?: string;
    accentColor?: string;
    changeMenuColorOnOpen?: boolean;
    isFixed?: boolean;
    closeOnClickAway?: boolean;
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
    onItemClick?: (
      event: React.MouseEvent<HTMLAnchorElement>,
      item: StaggeredMenuItem
    ) => void;
  }

  export const StaggeredMenu: (props: StaggeredMenuProps) => JSX.Element;
  const StaggeredMenuDefault: (props: StaggeredMenuProps) => JSX.Element;
  export default StaggeredMenuDefault;
}
