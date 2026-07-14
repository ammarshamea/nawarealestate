"use client";

import { useRef, ReactNode, useEffect, useState } from "react";
import { motion, useInView, type Variants, type HTMLMotionProps } from "framer-motion";
import { useSite } from "@/lib/context";

export type RevealVariant = "fadeUp" | "fadeIn" | "slideFromStart" | "imageReveal";

const EASE = [0.22, 1, 0.36, 1] as const;
const IN_VIEW_OPTS = { once: true, amount: 0.12 as const, margin: "-10% 0px -10% 0px" as const };

function useRevealVisibility() {
  const ref = useRef(null);
  const { reducedMotion } = useSite();
  const inView = useInView(ref, IN_VIEW_OPTS);
  const [fallbackVisible, setFallbackVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion || inView) return;

    const timer = window.setTimeout(() => {
      const node = ref.current as HTMLElement | null;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (inViewport) setFallbackVisible(true);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [inView, reducedMotion]);

  return { ref, show: reducedMotion || inView || fallbackVisible };
}

function getVariantStyles(variant: RevealVariant, isRtl: boolean): Variants {
  switch (variant) {
    case "fadeIn":
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    case "slideFromStart":
      return {
        hidden: { opacity: 0, x: isRtl ? 40 : -40 },
        visible: { opacity: 1, x: 0 },
      };
    case "imageReveal":
      return {
        hidden: { opacity: 0, y: 28, scale: 1.04 },
        visible: { opacity: 1, y: 0, scale: 1 },
      };
    case "fadeUp":
    default:
      return {
        hidden: { opacity: 0, y: 36 },
        visible: { opacity: 1, y: 0 },
      };
  }
}

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  /** @deprecated Use variant instead */
  direction?: "up" | "down" | "left" | "right" | "none";
  variant?: RevealVariant;
  className?: string;
  once?: boolean;
  duration?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  variant,
  className = "",
  once = true,
  duration = 0.7,
}: ScrollRevealProps) {
  const { ref, show } = useRevealVisibility();
  const { reducedMotion, isAr } = useSite();

  const variants: Variants = variant
    ? getVariantStyles(variant, isAr)
    : direction === "none"
      ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
      : {
          hidden: {
            opacity: 0,
            y: direction === "up" ? 36 : direction === "down" ? -36 : 0,
            x: direction === "left" ? 36 : direction === "right" ? -36 : 0,
          },
          visible: { opacity: 1, y: 0, x: 0 },
        };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={reducedMotion ? "visible" : "hidden"}
      animate={show ? "visible" : "hidden"}
      transition={{
        duration: reducedMotion ? 0 : duration,
        delay: reducedMotion ? 0 : delay,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const staggerItemImage: Variants = {
  hidden: { opacity: 0, y: 32, scale: 1.03 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: EASE },
  },
};

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
  stagger?: number;
}

export function StaggerReveal({
  children,
  className = "",
  once = true,
  stagger = 0.12,
}: StaggerRevealProps) {
  const { ref, show } = useRevealVisibility();
  const { reducedMotion } = useSite();

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: 0.04 } },
      }}
      initial={reducedMotion ? "visible" : "hidden"}
      animate={show ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  image?: boolean;
}

export function StaggerItem({ image, children, className = "", ...rest }: StaggerItemProps) {
  const { reducedMotion } = useSite();
  return (
    <motion.div
      variants={image ? staggerItemImage : staggerItem}
      initial={reducedMotion ? "visible" : undefined}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
