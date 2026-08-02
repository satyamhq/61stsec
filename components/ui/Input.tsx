'use client';
// ============================================================
// 61STSEC — Input Component
// ============================================================

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', id, ...props }, ref) => {
    const inputId = id || `input-${label?.toLowerCase().replace(/\s/g, '-')}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-white/60 mb-2 tracking-wide"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3',
              'text-white placeholder:text-white/25',
              'transition-all duration-300',
              'focus:outline-none focus:border-accent-blue/50 focus:bg-white/[0.05]',
              'focus:shadow-[0_0_0_3px_rgba(0,102,255,0.1)]',
              'hover:border-white/[0.15]',
              icon && 'pl-10',
              error && 'border-red-500/50 focus:border-red-500/50 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
        </div>
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
