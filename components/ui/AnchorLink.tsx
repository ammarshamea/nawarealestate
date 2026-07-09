"use client";

import { ReactNode, MouseEvent, CSSProperties } from "react";
import { sectionAnchors } from "@/lib/data/sections";

interface AnchorLinkProps {
  anchor: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function scrollToSection(anchor: string) {
  const el = document.getElementById(anchor);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function AnchorLink({
  anchor,
  children,
  className = "",
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: AnchorLinkProps) {
  const href = anchor === sectionAnchors.home ? "#home" : `#${anchor}`;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection(anchor);
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`link-arch ${className}`}
      style={style}
    >
      {children}
    </a>
  );
}
