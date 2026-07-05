declare module "@/components/ui/RotatingText" {
  import * as React from "react";
  import type { Transition, Target } from "motion/react";

  export interface RotatingTextHandle {
    next: () => void;
    previous: () => void;
    jumpTo: (index: number) => void;
    reset: () => void;
  }

  export interface RotatingTextProps {
    texts: string[];
    rotationInterval?: number;
    initial?: Target;
    animate?: Target;
    exit?: Target;
    animatePresenceMode?: "wait" | "sync" | "popLayout";
    animatePresenceInitial?: boolean;
    staggerDuration?: number;
    staggerFrom?: "first" | "last" | "center" | "random" | number;
    transition?: Transition;
    loop?: boolean;
    auto?: boolean;
    splitBy?: "characters" | "words" | "lines" | string;
    onNext?: (index: number) => void;
    mainClassName?: string;
    splitLevelClassName?: string;
    elementLevelClassName?: string;
    [key: string]: unknown;
  }

  const RotatingText: React.ForwardRefExoticComponent<
    RotatingTextProps & React.RefAttributes<RotatingTextHandle>
  >;
  export default RotatingText;
}
