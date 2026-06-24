import type { Variants, Transition } from "framer-motion";
import { tokens } from "./tokens";

function buildTransition(durationSec: number, ease: string | number[]): Transition {
  return {
    duration: durationSec,
    ease: ease as Transition["ease"],
  };
}

export const transitions = {
  default: buildTransition(tokens.motion.duration.normal, tokens.motion.easing.default),
  fast: buildTransition(tokens.motion.duration.fast, tokens.motion.easing.default),
  slow: buildTransition(tokens.motion.duration.slow, tokens.motion.easing.smooth),
} as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const cardHover: Variants = {
  rest: { y: 0 },
  hover: { y: -4 },
};

export function withReducedMotion<T extends Variants>(variant: T): T {
  const reduced: Variants = {};
  for (const key of Object.keys(variant)) {
    reduced[key] = { ...variant[key], transition: { duration: 0 } };
  }
  return reduced as T;
}
