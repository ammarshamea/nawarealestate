"use client";

import { useEffect } from "react";
import { publicPath } from "@/lib/publicPath";

/** Registers the image-cache Service Worker (production only). */
export default function RegisterServiceWorker() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return;

    const swUrl = publicPath("sw.js");
    navigator.serviceWorker.register(swUrl).catch(() => {
      /* ignore registration failures (e.g. file:// or unsupported host) */
    });
  }, []);

  return null;
}
