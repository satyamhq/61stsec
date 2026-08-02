// ============================================================
// 61STSEC — SVG Patterns & Decorative Elements
// ============================================================

export function GridPattern({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="100%" height="100%" aria-hidden="true">
      <defs>
        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
}

export function NoiseOverlay({ className = '', opacity = 0.03 }: { className?: string; opacity?: number }) {
  return (
    <svg className={className} width="100%" height="100%" aria-hidden="true" style={{ opacity }}>
      <filter id="noise-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-filter)" />
    </svg>
  );
}

export function GradientOrb({ className = '', color = '#0066FF' }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" aria-hidden="true">
      <defs>
        <radialGradient id="orb-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="50%" stopColor={color} stopOpacity="0.1" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="200" fill="url(#orb-gradient)" />
    </svg>
  );
}

export function DecorativeLine({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 2" aria-hidden="true">
      <defs>
        <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <rect width="400" height="1" fill="url(#line-gradient)" />
    </svg>
  );
}
