declare module "@/components/ui/InfiniteMenu" {
  export interface InfiniteMenuItem {
    image?: string;
    iconSvg?: string;
    link: string;
    title: string;
    description: string;
    tag?: string;
  }

  export interface InfiniteMenuProps {
    items?: InfiniteMenuItem[];
    scale?: number;
  }

  const InfiniteMenu: (props: InfiniteMenuProps) => JSX.Element;
  export default InfiniteMenu;
}
