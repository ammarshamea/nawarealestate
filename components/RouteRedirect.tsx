"use client";

import { useEffect } from "react";

export default function RouteRedirect({ hash }: { hash: string }) {
  useEffect(() => {
    const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
    window.location.replace(`${base}/#${hash}`);
  }, [hash]);
  return null;
}
