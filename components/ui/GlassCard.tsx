'use client';
// ============================================================
// 61STSEC — GlassCard Component
// ============================================================

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  glowColor?: string;
  onClick?: () => void;
  as?: 'div' | 'article' | 'section';
}

export function GlassCard({
  children,
  className = '',
  hover = false,
  glow = false,
  glowColor = 'rgba(0, 102, 255, 0.15)',
  onClick,
  as: Component = 'div',
}: GlassCardProps) {
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={cn(
        'relative rounded-2xl overflow-hidden',
        'bg-white/[0.02] backdrop-blur-xl',
        'border border-white/[0.06]',
        'shadow-[0_8px_32px_rgba(0,0,0,0.3)]',
        hover && 'cursor-pointer',
        className
      )}
      whileHover={
        hover
          ? {
              scale: 1.02,
              borderColor: 'rgba(255, 255, 255, 0.12)',
              transition: { duration: 0.3 },
            }
          : undefined
      }
      whileTap={hover ? { scale: 0.98 } : undefined}
      onClick={onClick}
      style={
        glow
          ? {
              boxShadow: `0 0 40px ${glowColor}, 0 8px 32px rgba(0,0,0,0.3)`,
            }
          : undefined
      }
    >
      {/* Subtle inner glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </MotionComponent>
  );
}
