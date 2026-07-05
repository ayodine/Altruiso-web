declare module "@/components/ui/SplitText" {
  import type { CSSProperties } from "react";

  export interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string;
    splitType?: "chars" | "words" | "lines" | "words, chars";
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    threshold?: number;
    rootMargin?: string;
    textAlign?: CSSProperties["textAlign"];
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    onLetterAnimationComplete?: () => void;
  }
  const SplitText: (props: SplitTextProps) => JSX.Element;
  export default SplitText;
}
