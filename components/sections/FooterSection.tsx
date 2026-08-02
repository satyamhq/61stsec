'use client';
// ============================================================
// 61STSEC — Footer Section
// ============================================================

import { motion } from 'framer-motion';
import { LogoText } from '@/components/svg/Logo';
import { FadeInText } from '@/components/ui/AnimatedText';
import { DecorativeLine } from '@/components/svg/Patterns';
import { BRAND, SOCIAL_LINKS } from '@/lib/constants';
import { ExternalLink } from '@/components/svg/Icons';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12">
      {/* Top separator */}
      <div className="flex justify-center mb-16">
        <DecorativeLine className="w-64" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Logo & tagline */}
        <FadeInText className="text-center mb-12">
          <LogoText className="text-3xl md:text-4xl text-white mb-4" />
          <p className="text-white/30 text-sm max-w-sm mx-auto leading-relaxed">
            {BRAND.tagline}
          </p>
        </FadeInText>

        {/* Social links */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          {SOCIAL_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">
                {link.label}
              </span>
              <ExternalLink size={12} className="text-white/20 group-hover:text-white/50 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-mono tracking-wide">
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/15 italic">
            Made with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
