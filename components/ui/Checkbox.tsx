'use client';
// ============================================================
// 61STSEC — Checkbox Component
// ============================================================

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
  error?: string;
  className?: string;
}

export function Checkbox({
  id,
  checked,
  onChange,
  label,
  error,
  className = '',
}: CheckboxProps) {
  return (
    <div className={cn('', className)}>
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group">
        <div className="relative mt-0.5">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="sr-only"
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${id}-error` : undefined}
          />
          <div
            className={cn(
              'w-5 h-5 rounded-md border-2 transition-all duration-200',
              'flex items-center justify-center',
              checked
                ? 'bg-accent-blue border-accent-blue'
                : 'border-white/20 group-hover:border-white/40',
              error && !checked && 'border-red-500/50'
            )}
          >
            <motion.svg
              viewBox="0 0 12 12"
              className="w-3 h-3"
              initial={false}
              animate={checked ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
            >
              <path
                d="M2 6l3 3 5-6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </motion.svg>
          </div>
        </div>
        <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors select-none leading-relaxed">
          {label}
        </span>
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 ml-8 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
