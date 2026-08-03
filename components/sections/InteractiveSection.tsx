'use client';
// ============================================================
// 61STSEC — Dropping Soon Section
// ============================================================

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { FadeInText, RevealText } from '@/components/ui/AnimatedText';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { SparkleIcon, ArrowRight, ClockIcon } from '@/components/svg/Icons';
import { DROP_CONFIG } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function InteractiveSection() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

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
        {/* Status Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-xs font-mono text-white/70 tracking-widest uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066ff]"></span>
            </span>
            {DROP_CONFIG.badge}
          </motion.div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
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

        {/* Feature Teaser Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
        >
          <motion.div variants={fadeInUp}>
            <GlassCard glow hover className="p-6 text-center h-full flex flex-col items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4 text-[#0066ff]">
                <ClockIcon size={20} />
              </div>
              <div>
                <h3 className="text-white font-display font-semibold text-lg mb-1">061 EDITION</h3>
                <p className="text-white/40 text-xs font-mono tracking-wider uppercase">Vault Allocation</p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassCard glow hover className="p-6 text-center h-full flex flex-col items-center justify-between border-white/20">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0066ff]/20 to-[#c9a84c]/20 border border-white/20 flex items-center justify-center mb-4 text-[#c9a84c]">
                <SparkleIcon size={20} />
              </div>
              <div>
                <h3 className="text-white font-display font-semibold text-lg mb-1">UNBOXING NEXT</h3>
                <p className="text-white/40 text-xs font-mono tracking-wider uppercase">Beyond Categories</p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassCard glow hover className="p-6 text-center h-full flex flex-col items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4 text-white/80">
                <ArrowRight size={20} />
              </div>
              <div>
                <h3 className="text-white font-display font-semibold text-lg mb-1">FIRST 61 ACCESS</h3>
                <p className="text-white/40 text-xs font-mono tracking-wider uppercase">Priority Invite Only</p>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* CTA button to waitlist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center"
        >
          <MagneticButton onClick={scrollToWaitlist} variant="primary">
            <span className="flex items-center gap-2">
              Get Notified When It Drops
              <ArrowRight size={16} />
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
