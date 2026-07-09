"use client";

import { useEffect, useRef } from "react";
import { nawahLinePaths, nawahLineViewBox } from "@/lib/motion/nawahLinePaths";
import { getGsap, prefersReducedMotion } from "@/lib/motion/gsapClient";

type LineVariant = keyof typeof nawahLinePaths;

interface NawahLineProps {
  variant?: LineVariant;
  className?: string;
  strokeWidth?: number;
  animate?: boolean;
}

export default function NawahLine({
  variant = "heroGrow",
  className = "",
  strokeWidth = 1.5,
  animate = true,
}: NawahLineProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!animate || prefersReducedMotion() || !pathRef.current) return;

    let ctx: { revert: () => void } | undefined;

    getGsap().then(({ gsap }) => {
      const path = pathRef.current;
      if (!path) return;

      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, opacity: 0.9 });
      ctx = gsap.context(() => {
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "power2.inOut",
        });
      });
    });

    return () => ctx?.revert();
  }, [animate, variant]);

  return (
    <svg
      viewBox={nawahLineViewBox}
      className={`pointer-events-none w-full h-full ${className}`}
      aria-hidden="true"
      fill="none"
    >
      <path
        ref={pathRef}
        d={nawahLinePaths[variant]}
        stroke="url(#nawahGoldGrad)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="nawahGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b58516" />
          <stop offset="100%" stopColor="#ebbf5b" />
        </linearGradient>
      </defs>
    </svg>
  );
}
