"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NawaLogo from "@/components/ui/NawaLogo";
import { useSite } from "@/lib/context";

const INTRO_KEY = "nawah-intro-seen";
const INTRO_MS = 800;

/** Non-blocking logo splash — hero stays visible underneath. */
export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const { reducedMotion } = useSite();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced =
      reducedMotion || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(INTRO_KEY)) {
      onComplete();
      return;
    }

    setVisible(true);
    const hideTimer = window.setTimeout(() => {
      sessionStorage.setItem(INTRO_KEY, "1");
      setVisible(false);
      onComplete();
    }, INTRO_MS);

    return () => window.clearTimeout(hideTimer);
  }, [onComplete, reducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[45] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          <motion.div
            className="flex flex-col items-center rounded-2xl px-8 py-6"
            style={{
              background: "rgba(0, 0, 0, 0.55)",
              backdropFilter: "blur(12px)",
            }}
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <NawaLogo height={56} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
