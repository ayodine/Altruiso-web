"use client";
import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  overshoot = null,
  overshootHold = 0.45,
  onStart,
  onEnd
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = num => {
    const str = num.toString();

    if (str.includes('.')) {
      const decimals = str.split('.')[1];

      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }

    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    latest => {
      const hasDecimals = maxDecimals > 0;

      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const finalValue = direction === 'down' ? from : to;
      const useOvershoot = overshoot != null;
      const timeouts = [];

      // Phase 1: race up to the overshoot peak (or straight to the value).
      timeouts.push(
        setTimeout(() => {
          motionValue.set(useOvershoot ? overshoot : finalValue);
        }, delay * 1000)
      );

      // Phase 2: settle back down from the peak to the real value.
      if (useOvershoot) {
        timeouts.push(
          setTimeout(() => {
            motionValue.set(finalValue);
          }, (delay + overshootHold) * 1000)
        );
      }

      const holdOffset = useOvershoot ? overshootHold : 0;
      timeouts.push(
        setTimeout(
          () => {
            if (typeof onEnd === 'function') onEnd();
          },
          (delay + holdOffset + duration) * 1000
        )
      );

      return () => timeouts.forEach(clearTimeout);
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration, overshoot, overshootHold]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', latest => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}
