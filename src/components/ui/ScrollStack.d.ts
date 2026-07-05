declare module "@/components/ui/ScrollStack" {
  import * as React from "react";

  export interface ScrollStackItemProps {
    children: React.ReactNode;
    itemClassName?: string;
  }
  export const ScrollStackItem: (props: ScrollStackItemProps) => JSX.Element;

  export interface ScrollStackProps {
    children: React.ReactNode;
    className?: string;
    itemDistance?: number;
    itemScale?: number;
    itemStackDistance?: number;
    stackPosition?: string;
    scaleEndPosition?: string;
    baseScale?: number;
    scaleDuration?: number;
    rotationAmount?: number;
    blurAmount?: number;
    useWindowScroll?: boolean;
    onStackComplete?: () => void;
  }
  const ScrollStack: (props: ScrollStackProps) => JSX.Element;
  export default ScrollStack;
}
