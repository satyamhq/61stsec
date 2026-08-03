'use client';
// ============================================================
// 61STSEC — Dropping Soon Section
// ============================================================

import { FadeInText, RevealText } from '@/components/ui/AnimatedText';
import { DROP_CONFIG } from '@/lib/constants';

export function InteractiveSection() {
  return (
    <section id="interactive" className="section-padding relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(0,102,255,0.08) 0%, rgba(201,168,76,0.04) 50%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center">
          <RevealText
            as="h2"
            className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white mb-4"
          >
            {DROP_CONFIG.headline}
          </RevealText>
          <FadeInText delay={0.3}>
            <p className="text-white/50 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
              {DROP_CONFIG.subtext}
            </p>
          </FadeInText>
        </div>
      </div>
    </section>
  );
}
