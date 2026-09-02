"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
  /**
   * Use for content that is already in the initial viewport (hero, above-the-fold
   * sections). Skips the scroll IntersectionObserver gate so the content animates
   * in immediately on mount instead of waiting for a scroll event to fire — content
   * that starts the page already visible should never depend on the visitor scrolling
   * to reveal it.
   */
  immediate?: boolean;
}

const directionVariants = {
  up: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -16 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
} as const;

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
  immediate = false,
}: FadeInProps) {
  const prefersReduced = useReducedMotion();
  // Above-the-fold content (immediate=true) never gates on the observer: it is
  // visible the instant the page loads, so it must not depend on inView firing.
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.1 });
  const visible = immediate || inView;

  return (
    <motion.div
      ref={ref}
      initial={immediate ? "visible" : "hidden"}
      animate={visible ? "visible" : "hidden"}
      variants={directionVariants[direction]}
      transition={{
        duration: prefersReduced || immediate ? 0 : 0.5,
        delay: prefersReduced || immediate ? 0 : delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

