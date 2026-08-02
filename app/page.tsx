'use client';
// ============================================================
// 61STSEC — Main Page
// ============================================================

import { useState, useEffect } from 'react';
import { Loader } from '@/components/layout/Loader';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { StorySection } from '@/components/sections/StorySection';
import { InteractiveSection } from '@/components/sections/InteractiveSection';
import { CountdownSection } from '@/components/sections/CountdownSection';
import { WaitlistSection } from '@/components/sections/WaitlistSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { AchievementToast } from '@/components/ui/Toast';
import { useEasterEggs } from '@/hooks/useEasterEggs';
import Lenis from 'lenis';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { handleLogoClick, activeToast, dismissToast } = useEasterEggs();

  // Initialize Lenis smooth scroll after loading
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      {/* Loading Screen */}
      <Loader onComplete={() => setIsLoading(false)} />

      {/* Main Experience */}
      {!isLoading && (
        <div className="relative min-h-screen bg-[#050505] text-[#f5f5f5] selection:bg-[#0066ff] selection:text-white">
          <Navbar onLogoClick={handleLogoClick} />
          
          <main>
            <HeroSection onLogoClick={handleLogoClick} />
            <StorySection />
            <InteractiveSection />
            <CountdownSection />
            <WaitlistSection />
          </main>

          <FooterSection />

          {/* Achievement Toast for Easter Eggs */}
          <AchievementToast achievement={activeToast} onDismiss={dismissToast} />
        </div>
      )}
    </>
  );
}
