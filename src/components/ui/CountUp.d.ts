declare module "@/components/ui/CountUp" {
  export interface CountUpProps {
    to: number;
    from?: number;
    direction?: "up" | "down";
    delay?: number;
    duration?: number;
    className?: string;
    startWhen?: boolean;
    separator?: string;
    overshoot?: number | null;
    overshootHold?: number;
    onStart?: () => void;
    onEnd?: () => void;
  }
  const CountUp: (props: CountUpProps) => JSX.Element;
  export default CountUp;
}
