// ============================================================
// 61STSEC — Constants & Configuration
// ============================================================

// --- Brand ---
export const BRAND = {
  name: '61STSEC',
  tagline: 'Every minute has 60 seconds. The best moments happen in the 61st.',
  description:
    'Something extraordinary is coming. The 61st second represents breaking limits, going beyond ordinary, and refusing to fit inside one box.',
  url: 'https://61stsec.com',
  email: 'hello@61stsec.com',
} as const;

// --- Hero Copy ---
export const HERO_COPY = {
  title: '61STSEC',
  subtitle: 'Every minute has 60 seconds.',
  tagline: 'The best moments happen in the 61st.',
  cta: 'Join The First 61',
  secondaryCta: 'Discover the Story',
} as const;

// --- Story Sections ---
export const STORY_SECTIONS = [
  {
    id: 'story-1',
    lines: ['Every rule', 'was written', 'for everyone else.'],
  },
  {
    id: 'story-2',
    lines: ['We questioned', 'time.'],
  },
  {
    id: 'story-3',
    lines: ['We questioned', 'expectations.'],
  },
  {
    id: 'story-4',
    lines: ['We questioned', 'categories.'],
  },
  {
    id: 'story-5',
    lines: ['Then we built something', 'that refuses', 'to fit inside one box.'],
  },
] as const;

// --- Interactive Choices ---
export const INTERACTIVE_CHOICES = [
  { id: 'beverage', label: 'Premium Beverage', icon: 'beverage' },
  { id: 'streetwear', label: 'Streetwear', icon: 'streetwear' },
  { id: 'luxury', label: 'Luxury Brand', icon: 'luxury' },
  { id: 'other', label: 'Something Else', icon: 'sparkle' },
] as const;

// --- Countries ---
export const COUNTRIES = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'India',
  'Japan',
  'Brazil',
  'Netherlands',
  'Sweden',
  'South Korea',
  'Singapore',
  'UAE',
  'Italy',
  'Spain',
  'Mexico',
  'Switzerland',
  'Norway',
  'Denmark',
  'Other',
] as const;

// --- Vault ---
export const VAULT_CONFIG = {
  maxAttempts: 5,
  lockoutDuration: 300000, // 5 minutes in ms
} as const;

// --- Rate Limiting ---
export const RATE_LIMIT = {
  maxRequests: 3,
  windowMs: 60000, // 1 minute
} as const;

// --- Navigation ---
export const NAV_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Discover', href: '#interactive' },
  { label: 'Join', href: '#waitlist' },
] as const;

// --- Social Links ---
export const SOCIAL_LINKS = [
  { label: 'Twitter / X', href: 'https://x.com/61stsec', icon: 'twitter' },
  { label: 'Instagram', href: 'https://instagram.com/61stsec', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/61st-sec/people/', icon: 'linkedin' },
] as const;

// --- Konami Code ---
export const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
] as const;

// --- Achievements ---
export const ACHIEVEMENTS = {
  TYPED_61: { id: 'typed_61', title: 'Time Bender', message: 'You found the 61st second.' },
  LOGO_CLICKS: { id: 'logo_clicks', title: 'Persistent', message: 'Curiosity is a superpower.' },
  KONAMI: { id: 'konami', title: 'Old School', message: 'Some codes never die.' },
  SCROLL_COMPLETE: { id: 'scroll_complete', title: 'Deep Diver', message: 'You went all the way.' },
  VAULT_ATTEMPT: { id: 'vault_attempt', title: 'Vault Hunter', message: 'Access denied... for now.' },
} as const;
