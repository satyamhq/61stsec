'use client';
// ============================================================
// 61STSEC — Logo SVG Component
// ============================================================

import { motion, type Variants } from 'framer-motion';

interface LogoProps {
  className?: string;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const sizeMap = {
  sm: { width: 120, height: 28 },
  md: { width: 200, height: 46 },
  lg: { width: 320, height: 74 },
};

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};

export function Logo({ className = '', animated = false, size = 'md', onClick }: LogoProps) {
  const { width, height } = sizeMap[size];

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 320 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      role="img"
      aria-label="61STSEC logo"
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      initial={animated ? 'hidden' : 'visible'}
      animate="visible"
    >
      {/* 6 */}
      <motion.text
        x="0"
        y="58"
        fontFamily="var(--font-display), system-ui"
        fontSize="64"
        fontWeight="800"
        fill="currentColor"
        letterSpacing="-0.02em"
        variants={animated ? pathVariants : undefined}
      >
        6
      </motion.text>
      {/* 1 */}
      <motion.text
        x="42"
        y="58"
        fontFamily="var(--font-display), system-ui"
        fontSize="64"
        fontWeight="800"
        fill="currentColor"
        letterSpacing="-0.02em"
        variants={animated ? pathVariants : undefined}
      >
        1
      </motion.text>
      {/* S */}
      <motion.text
        x="78"
        y="58"
        fontFamily="var(--font-display), system-ui"
        fontSize="64"
        fontWeight="800"
        fill="currentColor"
        letterSpacing="-0.02em"
        variants={animated ? pathVariants : undefined}
      >
        S
      </motion.text>
      {/* T */}
      <motion.text
        x="126"
        y="58"
        fontFamily="var(--font-display), system-ui"
        fontSize="64"
        fontWeight="800"
        fill="currentColor"
        letterSpacing="-0.02em"
        variants={animated ? pathVariants : undefined}
      >
        T
      </motion.text>
      {/* S */}
      <motion.text
        x="168"
        y="58"
        fontFamily="var(--font-display), system-ui"
        fontSize="64"
        fontWeight="800"
        fill="currentColor"
        letterSpacing="-0.02em"
        variants={animated ? pathVariants : undefined}
      >
        S
      </motion.text>
      {/* E */}
      <motion.text
        x="216"
        y="58"
        fontFamily="var(--font-display), system-ui"
        fontSize="64"
        fontWeight="800"
        fill="currentColor"
        letterSpacing="-0.02em"
        variants={animated ? pathVariants : undefined}
      >
        E
      </motion.text>
      {/* C */}
      <motion.text
        x="262"
        y="58"
        fontFamily="var(--font-display), system-ui"
        fontSize="64"
        fontWeight="800"
        fill="currentColor"
        letterSpacing="-0.02em"
        variants={animated ? pathVariants : undefined}
      >
        C
      </motion.text>
    </motion.svg>
  );
}

/**
 * Simple text-based logo for places SVG doesn't work well
 */
export function LogoText({ className = '' }: { className?: string }) {
  return (
    <span
      className={`font-display font-extrabold tracking-tighter ${className}`}
      aria-label="61STSEC"
    >
      61STSEC
    </span>
  );
}
