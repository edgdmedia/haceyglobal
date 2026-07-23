"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  dur?: number;
  format?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export function CountUp({
  end,
  suffix = "",
  prefix = "",
  dur = 1600,
  format = true,
  style,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const run = () => {
      if (done.current) return;
      done.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(end * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      run();
      return;
    }

    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) run();
        });
      },
      { threshold: 0.4 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [end, dur]);

  const shown = format ? val.toLocaleString() : String(val);

  return (
    <span ref={ref} style={style} className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
