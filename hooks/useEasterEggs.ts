'use client';
// ============================================================
// 61STSEC — useEasterEggs Hook
// ============================================================

import { useState, useEffect, useCallback, useRef } from 'react';
import { KONAMI_CODE, ACHIEVEMENTS } from '@/lib/constants';
import type { EasterEggState } from '@/types';

interface UseEasterEggsReturn {
  state: EasterEggState;
  handleLogoClick: () => void;
  activeToast: { title: string; message: string } | null;
  dismissToast: () => void;
}

const STORAGE_KEY = '61stsec_easter_eggs';

function loadState(): EasterEggState {
  if (typeof window === 'undefined') {
    return { logoClicks: 0, typed61: false, konamiUnlocked: false, achievements: [] };
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return { logoClicks: 0, typed61: false, konamiUnlocked: false, achievements: [] };
}

function saveState(state: EasterEggState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export function useEasterEggs(): UseEasterEggsReturn {
  const [state, setState] = useState<EasterEggState>(loadState);
  const [activeToast, setActiveToast] = useState<{ title: string; message: string } | null>(null);
  const konamiIndex = useRef(0);
  const typedKeys = useRef('');

  const showAchievement = useCallback(
    (achievement: { id: string; title: string; message: string }) => {
      setState((prev) => {
        if (prev.achievements.includes(achievement.id)) return prev;
        const newState = {
          ...prev,
          achievements: [...prev.achievements, achievement.id],
        };
        saveState(newState);
        return newState;
      });
      setActiveToast({ title: achievement.title, message: achievement.message });
      setTimeout(() => setActiveToast(null), 4000);
    },
    []
  );

  // Konami code detection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Konami code
      if (e.key === KONAMI_CODE[konamiIndex.current]) {
        konamiIndex.current++;
        if (konamiIndex.current === KONAMI_CODE.length) {
          konamiIndex.current = 0;
          setState((prev) => {
            const newState = { ...prev, konamiUnlocked: true };
            saveState(newState);
            return newState;
          });
          showAchievement(ACHIEVEMENTS.KONAMI);
        }
      } else {
        konamiIndex.current = 0;
      }

      // Typing "61" detection
      typedKeys.current += e.key;
      if (typedKeys.current.length > 10) {
        typedKeys.current = typedKeys.current.slice(-10);
      }
      if (typedKeys.current.includes('61')) {
        typedKeys.current = '';
        setState((prev) => {
          if (prev.typed61) return prev;
          const newState = { ...prev, typed61: true };
          saveState(newState);
          return newState;
        });
        showAchievement(ACHIEVEMENTS.TYPED_61);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAchievement]);

  const handleLogoClick = useCallback(() => {
    setState((prev) => {
      const newClicks = prev.logoClicks + 1;
      const newState = { ...prev, logoClicks: newClicks };
      saveState(newState);

      if (newClicks === 6) {
        showAchievement(ACHIEVEMENTS.LOGO_CLICKS);
      }

      return newState;
    });
  }, [showAchievement]);

  const dismissToast = useCallback(() => {
    setActiveToast(null);
  }, []);

  return { state, handleLogoClick, activeToast, dismissToast };
}
