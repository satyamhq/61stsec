'use client';
// ============================================================
// 61STSEC — Luxury Loader Component
// ============================================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading with accelerating progress
    const intervals = [
      { target: 30, duration: 400 },
      { target: 60, duration: 600 },
      { target: 85, duration: 500 },
      { target: 100, duration: 300 },
    ];

    let timeoutId: ReturnType<typeof setTimeout>;
    let currentIndex = 0;

    const runNext = () => {
      if (currentIndex >= intervals.length) {
        // Loading complete
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 800);
        }, 200);
        return;
      }

      const { target, duration } = intervals[currentIndex];
      const startProgress = currentIndex === 0 ? 0 : intervals[currentIndex - 1].target;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const t = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        setProgress(startProgress + (target - startProgress) * eased);

        if (t < 1) {
          timeoutId = setTimeout(animate, 16);
        } else {
          currentIndex++;
          runNext();
        }
      };

      animate();
    };

    // Start after a brief delay for the logo animation
    timeoutId = setTimeout(runNext, 600);

    return () => clearTimeout(timeoutId);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
          }}
        >
          {/* Animated "61" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <span className="text-7xl md:text-9xl font-display font-extrabold tracking-tighter text-white">
              61
            </span>
            {/* Glow behind text */}
            <div
              className="absolute inset-0 blur-[60px] opacity-30"
              style={{
                background:
                  'radial-gradient(circle, rgba(0,102,255,0.5) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12 w-48"
          >
            <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-blue to-white rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-center text-xs text-white/30 mt-3 font-mono tracking-widest">
              {Math.round(progress)}%
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
