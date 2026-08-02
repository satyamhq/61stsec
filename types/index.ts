// ============================================================
// 61STSEC — Type Definitions
// ============================================================

// --- Waitlist ---
export interface WaitlistEntry {
  id?: string;
  created_at?: string;
  email: string;
  first_name: string;
  country?: string;
  ip_hash?: string;
  source?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  device?: string;
  browser?: string;
  status?: 'pending' | 'confirmed' | 'unsubscribed';
  email_verified?: boolean;
}

export interface WaitlistFormData {
  email: string;
  firstName: string;
  country?: string;
  consent: boolean;
  honeypot?: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
  error?: string;
}

// --- Analytics ---
export interface AnalyticsEvent {
  event_type: string;
  event_data?: Record<string, unknown>;
  session_id?: string;
  page?: string;
  referrer?: string;
  device?: string;
  browser?: string;
  country?: string;
}

export type AnalyticsEventType =
  | 'page_view'
  | 'scroll_depth'
  | 'button_click'
  | 'waitlist_submit'
  | 'waitlist_success'
  | 'waitlist_error'
  | 'countdown_interaction'
  | 'interactive_selection'
  | 'vault_attempt'
  | 'easter_egg'
  | 'audio_toggle';

// --- Interactive Section ---
export type BrandGuess =
  | 'Premium Beverage'
  | 'Streetwear'
  | 'Luxury Brand'
  | 'Something Else';

// --- Countdown ---
export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// --- Toast ---
export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
  duration?: number;
}

// --- Easter Eggs ---
export interface EasterEggState {
  logoClicks: number;
  typed61: boolean;
  konamiUnlocked: boolean;
  achievements: string[];
}

// --- Vault ---
export interface VaultState {
  isUnlocked: boolean;
  attempts: number;
}

// --- Loader ---
export interface LoaderState {
  progress: number;
  isComplete: boolean;
}

// --- Section ---
export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}
