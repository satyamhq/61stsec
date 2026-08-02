'use client';
// ============================================================
// 61STSEC — AnimatedText & RevealText Components
// ============================================================

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// --- AnimatedText: Split text into characters with staggered reveal ---
interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  as: Tag = 'span',
}: AnimatedTextProps) {
  const letters = text.split('');

  return (
    <Tag className={cn('inline-block overflow-hidden', className)} aria-label={text}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.03, delayChildren: delay },
          },
        }}
        className="inline-flex"
        aria-hidden="true"
      >
        {letters.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            variants={{
              hidden: { opacity: 0, y: 50, rotateX: -80 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }}
            className="inline-block"
            style={{ transformOrigin: 'bottom' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

// --- RevealText: Word-by-word reveal with clip-path ---
interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export function RevealText({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: RevealTextProps) {
  const words = children.split(' ');

  return (
    <Tag className={cn('', className)} aria-label={children}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: delay },
          },
        }}
        aria-hidden="true"
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '110%', opacity: 0 },
                visible: {
                  y: '0%',
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

// --- FadeInText: Simple fade + translate ---
interface FadeInTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function FadeInText({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: FadeInTextProps) {
  const directionMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
