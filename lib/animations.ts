// ============================================================
// 61STSEC — Animation Presets (Framer Motion + GSAP)
// ============================================================

import type { Variants } from 'framer-motion';

// --- Framer Motion Variants ---

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

export const letterReveal: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -80 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const glassCardHover = {
  rest: {
    scale: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  hover: {
    scale: 1.02,
    borderColor: 'rgba(255,255,255,0.15)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// --- Easing Curves ---
export const EASE = {
  smooth: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  snappy: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  expo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  power3: [0.645, 0.045, 0.355, 1] as [number, number, number, number],
  power4: [0.77, 0, 0.175, 1] as [number, number, number, number],
} as const;

// --- GSAP Defaults ---
export const GSAP_DEFAULTS = {
  duration: 1,
  ease: 'power3.out',
} as const;

// --- Transition Presets ---
export const transition = {
  fast: { duration: 0.2, ease: EASE.smooth },
  normal: { duration: 0.4, ease: EASE.smooth },
  slow: { duration: 0.8, ease: EASE.smooth },
  spring: { type: 'spring' as const, stiffness: 300, damping: 30 },
  springLoose: { type: 'spring' as const, stiffness: 100, damping: 20 },
} as const;
