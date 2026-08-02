'use client';
// ============================================================
// 61STSEC — Hero Section
// ============================================================

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from '@/components/svg/Logo';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeInText } from '@/components/ui/AnimatedText';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ArrowDown } from '@/components/svg/Icons';
import { HERO_COPY } from '@/lib/constants';

interface HeroSectionProps {
  onLogoClick?: () => void;
}

export function HeroSection({ onLogoClick }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Primary blue orb */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(0,102,255,0.12) 0%, transparent 70%)',
          }}
        />
        {/* Secondary gold orb */}
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
            animationDelay: '1.5s',
          }}
        />
        {/* Subtle top gradient */}
        <div
          className="absolute inset-x-0 top-0 h-[40vh]"
          style={{
            background: 'linear-gradient(180deg, rgba(0,102,255,0.03) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <Logo
            size="lg"
            animated
            onClick={onLogoClick}
            className="text-white"
          />
        </motion.div>

        {/* Subtitle line 1 */}
        <div className="mb-2">
          <AnimatedText
            text={HERO_COPY.subtitle}
            as="p"
            className="text-lg md:text-xl text-white/50 font-light tracking-wide"
            delay={0.8}
          />
        </div>

        {/* Tagline */}
        <div className="mb-12">
          <AnimatedText
            text={HERO_COPY.tagline}
            as="h1"
            className="text-2xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white"
            delay={1.2}
          />
        </div>

        {/* CTAs */}
        <FadeInText delay={1.8} className="flex flex-col sm:flex-row items-center gap-4">
          <MagneticButton
            variant="primary"
            onClick={() => scrollToSection('waitlist')}
          >
            {HERO_COPY.cta}
          </MagneticButton>
          <MagneticButton
            variant="secondary"
            onClick={() => scrollToSection('story')}
          >
            {HERO_COPY.secondaryCta}
          </MagneticButton>
        </FadeInText>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        onClick={() => scrollToSection('story')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-mono">Scroll</span>
        <div className="animate-scroll-bounce">
          <ArrowDown size={20} />
        </div>
      </motion.button>

      {/* Bottom fade gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, var(--color-bg) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />
    </section>
  );
}
