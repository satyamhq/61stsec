'use client';
// ============================================================
// 61STSEC — Toast Component
// ============================================================

import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, CheckIcon, SparkleIcon, TrophyIcon } from '@/components/svg/Icons';
import type { ToastMessage } from '@/types';

interface ToastProps {
  toast: ToastMessage | null;
  onDismiss: () => void;
}

export function Toast({ toast, onDismiss }: ToastProps) {
  const icons = {
    success: <CheckIcon size={18} className="text-emerald-400" />,
    error: <XIcon size={18} className="text-red-400" />,
    info: <SparkleIcon size={18} className="text-accent-blue" />,
  };

  const borderColors = {
    success: 'border-emerald-500/20',
    error: 'border-red-500/20',
    info: 'border-accent-blue/20',
  };

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] max-w-md w-[calc(100%-2rem)] px-5 py-4 rounded-2xl bg-black/90 backdrop-blur-xl border ${borderColors[toast.type]} shadow-[0_8px_32px_rgba(0,0,0,0.5)]`}
        >
          <div className="flex items-center gap-3">
            {icons[toast.type]}
            <p className="text-sm text-white/90 flex-1">{toast.message}</p>
            <button
              onClick={onDismiss}
              className="text-white/40 hover:text-white/80 transition-colors p-1"
              aria-label="Dismiss"
            >
              <XIcon size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Achievement Toast (for Easter Eggs) ---
interface AchievementToastProps {
  achievement: { title: string; message: string } | null;
  onDismiss: () => void;
}

export function AchievementToast({ achievement, onDismiss }: AchievementToastProps) {
  return (
    <AnimatePresence>
      {achievement && (
        <motion.div
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] max-w-sm w-[calc(100%-2rem)]"
        >
          <div className="px-6 py-4 rounded-2xl bg-gradient-to-r from-accent-blue/10 to-accent-gold/10 backdrop-blur-xl border border-accent-blue/20 shadow-[0_8px_32px_rgba(0,102,255,0.15)]">
            <div className="flex items-start gap-3">
              <TrophyIcon size={20} className="text-white mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">{achievement.title}</p>
                <p className="text-xs text-white/60 mt-0.5">{achievement.message}</p>
              </div>
              <button
                onClick={onDismiss}
                className="text-white/40 hover:text-white/80 transition-colors p-1"
                aria-label="Dismiss"
              >
                <XIcon size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
