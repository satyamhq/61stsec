'use client';
// ============================================================
// 61STSEC — Countdown Section
// ============================================================

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { FadeInText } from '@/components/ui/AnimatedText';
import { RevealText } from '@/components/ui/AnimatedText';
import { useCountdown } from '@/hooks/useCountdown';
import { padNumber } from '@/lib/utils';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { ClockIcon } from '@/components/svg/Icons';

const TIME_UNITS = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
] as const;

export function CountdownSection() {
  const countdown = useCountdown();

  return (
    <section id="countdown" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,102,255,0.05) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInText className="flex items-center justify-center gap-2 mb-6">
            <ClockIcon size={20} className="text-accent-blue" />
            <span className="text-sm text-accent-blue font-mono tracking-widest uppercase">
              Countdown
            </span>
          </FadeInText>

          <RevealText
            as="h2"
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4"
          >
            Something is coming.
          </RevealText>
          <FadeInText delay={0.3}>
            <p className="text-white/40 text-lg max-w-md mx-auto">
              The clock is ticking. Are you ready for the 61st second?
            </p>
          </FadeInText>
        </div>

        {/* Countdown timer */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {TIME_UNITS.map(({ key, label }) => (
            <motion.div key={key} variants={fadeInUp}>
              <GlassCard className="p-6 md:p-8 text-center gradient-border">
                <div className="relative">
                  <motion.span
                    key={countdown[key]}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="block text-4xl md:text-6xl font-display font-extrabold text-white tabular-nums"
                  >
                    {padNumber(countdown[key])}
                  </motion.span>
                  <span className="block mt-2 text-xs text-white/30 uppercase tracking-[0.2em] font-mono">
                    {label}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tag */}
        <FadeInText delay={0.6} className="text-center mt-12">
          <p className="text-sm text-white/20 font-mono tracking-widest">
            {countdown.isExpired ? 'THE WAIT IS OVER' : 'EVERY SECOND COUNTS'}
          </p>
        </FadeInText>
      </div>
    </section>
  );
}
