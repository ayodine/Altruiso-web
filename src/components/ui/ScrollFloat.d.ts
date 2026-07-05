declare module "@/components/ui/ScrollFloat" {
  import * as React from "react";

  export interface ScrollFloatProps {
    children: React.ReactNode;
    scrollContainerRef?: React.RefObject<HTMLElement>;
    containerClassName?: string;
    textClassName?: string;
    animationDuration?: number;
    ease?: string;
    scrollStart?: string;
    scrollEnd?: string;
    stagger?: number;
  }
  const ScrollFloat: (props: ScrollFloatProps) => JSX.Element;
  export default ScrollFloat;
}
