"use client";

import { useSite } from "@/lib/context";
import { tx } from "@/lib/i18n";

interface EyebrowProps {
  label: { en: string; ar: string };
  className?: string;
}

export default function Eyebrow({ label, className = "" }: EyebrowProps) {
  const { lang } = useSite();
  return (
    <p className={`eyebrow ${className}`} style={{ color: "var(--color-brand-gold)" }}>
      {tx(label, lang)}
    </p>
  );
}
