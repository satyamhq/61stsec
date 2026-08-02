'use client';
// ============================================================
// 61STSEC — MagneticButton Component
// ============================================================

import { useRef, useState } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  variant = 'primary',
  loading = false,
  disabled,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: cn(
      'bg-white text-black font-semibold',
      'shadow-[0_0_30px_rgba(255,255,255,0.15),0_0_60px_rgba(255,255,255,0.05)]',
      'hover:shadow-[0_0_40px_rgba(255,255,255,0.25),0_0_80px_rgba(255,255,255,0.1)]'
    ),
    secondary: cn(
      'bg-transparent text-white font-medium',
      'border border-white/20',
      'hover:border-white/40 hover:bg-white/5'
    ),
  };

  return (
    <motion.button
      ref={ref}
      className={cn(
        'relative px-8 py-4 rounded-full text-base tracking-wide',
        'transition-shadow duration-500',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        variants[variant],
        className
      )}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      disabled={disabled || loading}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60" strokeDashoffset="20" strokeLinecap="round" />
          </svg>
        )}
        {children}
      </span>
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            variant === 'primary'
              ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
    </motion.button>
  );
}
