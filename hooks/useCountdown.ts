'use client';
// ============================================================
// 61STSEC — useCountdown Hook
// ============================================================

import { useState, useEffect, useCallback } from 'react';
import type { CountdownTime } from '@/types';
import { COUNTDOWN_TARGET } from '@/lib/constants';

export function useCountdown(targetDate: number = COUNTDOWN_TARGET): CountdownTime & { isExpired: boolean } {
  const calculate = useCallback((): CountdownTime & { isExpired: boolean } => {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isExpired: false,
    };
  }, [targetDate]);

  const [time, setTime] = useState<CountdownTime & { isExpired: boolean }>(calculate);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculate]);

  return time;
}
