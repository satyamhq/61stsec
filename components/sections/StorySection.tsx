'use client';
// ============================================================
// 61STSEC — Story Section
// ============================================================

import { RevealText } from '@/components/ui/AnimatedText';
import { FadeInText } from '@/components/ui/AnimatedText';
import { DecorativeLine } from '@/components/svg/Patterns';
import { STORY_SECTIONS } from '@/lib/constants';

export function StorySection() {
  return (
    <section id="story" className="relative">
      {/* Decorative top line */}
      <div className="flex justify-center py-4">
        <DecorativeLine className="w-64" />
      </div>

      {STORY_SECTIONS.map((section, index) => (
        <div
          key={section.id}
          className="min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-6"
        >
          <div className="max-w-3xl mx-auto text-center">
            {section.lines.map((line, lineIndex) => (
              <RevealText
                key={`${section.id}-${lineIndex}`}
                as="h2"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1] mb-2 text-white"
                delay={lineIndex * 0.15}
              >
                {line}
              </RevealText>
            ))}
          </div>

          {/* Separator between sections */}
          {index < STORY_SECTIONS.length - 1 && (
            <FadeInText className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="w-px h-16 bg-gradient-to-b from-white/10 to-transparent" />
            </FadeInText>
          )}
        </div>
      ))}

      {/* Final story beat */}
      <div className="min-h-[50vh] flex items-center justify-center px-6">
        <FadeInText delay={0.2} className="text-center max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed tracking-wide">
            Welcome to{' '}
            <span className="text-gradient font-semibold">61STSEC</span>
            {' '}— where every second counts, especially the impossible one.
          </p>
        </FadeInText>
      </div>

      {/* Bottom gradient */}
      <div className="flex justify-center py-4">
        <DecorativeLine className="w-64" />
      </div>
    </section>
  );
}
