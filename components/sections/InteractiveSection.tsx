'use client';
// ============================================================
// 61STSEC — Interactive Section
// ============================================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { FadeInText } from '@/components/ui/AnimatedText';
import { RevealText } from '@/components/ui/AnimatedText';
import { INTERACTIVE_CHOICES } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const RESPONSES: Record<string, { headline: string; subtext: string }> = {
  beverage: {
    headline: 'Close.',
    subtext: "We appreciate taste — but we're not a drink.",
  },
  streetwear: {
    headline: 'Warmer.',
    subtext: 'Style matters to us, but we go deeper.',
  },
  luxury: {
    headline: 'Getting there.',
    subtext: 'Luxury is a mindset, not a price tag.',
  },
  other: {
    headline: 'Exactly.',
    subtext: "We're all of this. And none of it.",
  },
};

export function InteractiveSection() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (choiceId: string) => {
    if (selected) return; // Prevent re-selection
    setSelected(choiceId);
  };

  const response = selected ? RESPONSES[selected] : null;

  return (
    <section id="interactive" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <RevealText
            as="h2"
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4"
          >
            What do you think we are?
          </RevealText>
          <FadeInText delay={0.3}>
            <p className="text-white/40 text-lg">Take your best guess.</p>
          </FadeInText>
        </div>

        {/* Choices grid */}
        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div
              key="choices"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
            >
              {INTERACTIVE_CHOICES.map((choice) => (
                <motion.div key={choice.id} variants={fadeInUp}>
                  <GlassCard
                    hover
                    onClick={() => handleSelect(choice.id)}
                    className="p-6 text-center group"
                  >
                    <span className="text-3xl mb-3 block transition-transform duration-300 group-hover:scale-125">
                      {choice.icon}
                    </span>
                    <span className="text-white/80 font-medium text-base tracking-wide group-hover:text-white transition-colors">
                      {choice.label}
                    </span>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="response"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center max-w-xl mx-auto"
            >
              <GlassCard glow className="p-12">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
                >
                  {response?.headline}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-white/50 text-lg leading-relaxed"
                >
                  {response?.subtext}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="mt-8 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent"
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  className="mt-6 text-sm text-white/30 tracking-widest uppercase font-mono"
                >
                  The 61st second defies categories
                </motion.p>
              </GlassCard>

              {/* Reset option */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                onClick={() => setSelected(null)}
                className="mt-6 text-sm text-white/20 hover:text-white/50 transition-colors cursor-pointer"
              >
                Try another guess
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
