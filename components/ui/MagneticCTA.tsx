"use client";

import { ReactNode, useRef, MouseEvent } from "react";
import { useSite } from "@/lib/context";

interface MagneticCTAProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}

export default function MagneticCTA({
  children,
  className = "btn-gold btn-magnetic",
  onClick,
  href,
  type = "button",
}: MagneticCTAProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const { reducedMotion } = useSite();

  const onMove = (e: MouseEvent) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const max = 5;
    ref.current.style.transform = `translate(${Math.max(-max, Math.min(max, x * 0.08))}px, ${Math.max(-max, Math.min(max, y * 0.08))}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={className}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={className}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </button>
  );
}
