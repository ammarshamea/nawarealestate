"use client";

import { useSite } from "@/lib/context";
import { tx } from "@/lib/i18n";

interface EyebrowProps {
  label: { en: string; ar: string };
  className?: string;
  id?: string;
}

export default function Eyebrow({ label, className = "", id }: EyebrowProps) {
  const { lang } = useSite();
  return (
    <p id={id} className={`eyebrow ${className}`.trim()}>
      {tx(label, lang)}
    </p>
  );
}
