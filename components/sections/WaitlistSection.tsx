'use client';
// ============================================================
// 61STSEC — Waitlist Section
// ============================================================

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { Toast } from '@/components/ui/Toast';
import { RevealText, FadeInText } from '@/components/ui/AnimatedText';
import { SparkleIcon, CheckIcon } from '@/components/svg/Icons';
import { validateWaitlistForm, sanitizeInput } from '@/lib/validators';
import { COUNTRIES } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';
import type { ToastMessage, WaitlistFormData } from '@/types';

export function WaitlistSection() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    email: '',
    firstName: '',
    country: '',
    consent: false,
    honeypot: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = useCallback((type: ToastMessage['type'], message: string) => {
    const id = Date.now().toString();
    setToast({ id, type, message });
    setTimeout(() => setToast(null), 5000);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) return;

    // Validate
    const validation = validateWaitlistForm({
      email: formData.email,
      firstName: formData.firstName,
      consent: formData.consent,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // Simulate API call (Supabase integration would go here)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      showToast('success', "You're in! Welcome to the first 61.");
    } catch {
      showToast('error', 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof WaitlistFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: typeof value === 'string' ? sanitizeInput(value) : value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <section id="waitlist" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,102,255,0.06) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeInText className="flex items-center justify-center gap-2 mb-6">
            <SparkleIcon size={18} className="text-accent-gold" />
            <span className="text-sm text-accent-gold font-mono tracking-widest uppercase">
              Exclusive Access
            </span>
          </FadeInText>

          <RevealText
            as="h2"
            className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4"
          >
            Join the First 61
          </RevealText>
          <FadeInText delay={0.3}>
            <p className="text-white/40 text-lg max-w-md mx-auto">
              Be among the first to experience what comes next. No spam, just the signal.
            </p>
          </FadeInText>
        </div>

        {/* Form / Success */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {!isSuccess ? (
            <GlassCard className="p-8 md:p-10">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Honeypot — hidden from real users */}
                <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => updateField('honeypot', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    placeholder="Your name"
                    value={formData.firstName}
                    onChange={(e) => updateField('firstName', e.target.value)}
                    error={errors.firstName}
                    required
                    autoComplete="given-name"
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    error={errors.email}
                    required
                    autoComplete="email"
                  />
                </div>

                {/* Country select */}
                <div className="w-full">
                  <label
                    htmlFor="waitlist-country"
                    className="block text-sm font-medium text-white/60 mb-2 tracking-wide"
                  >
                    Country <span className="text-white/30">(optional)</span>
                  </label>
                  <select
                    id="waitlist-country"
                    value={formData.country}
                    onChange={(e) => updateField('country', e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white appearance-none cursor-pointer transition-all duration-300 focus:outline-none focus:border-accent-blue/50 focus:bg-white/[0.05] hover:border-white/[0.15]"
                  >
                    <option value="" className="bg-black text-white/50">
                      Select country
                    </option>
                    {COUNTRIES.map((country) => (
                      <option key={country} value={country} className="bg-black text-white">
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Consent */}
                <Checkbox
                  id="waitlist-consent"
                  checked={formData.consent}
                  onChange={(checked) => updateField('consent', checked)}
                  error={errors.consent}
                  label={
                    <>
                      I agree to receive updates about 61STSEC. No spam, unsubscribe anytime.
                    </>
                  }
                />

                {/* Submit */}
                <div className="pt-2">
                  <MagneticButton
                    type="submit"
                    variant="primary"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Joining...' : 'Secure My Spot'}
                  </MagneticButton>
                </div>

                <p className="text-center text-xs text-white/20 mt-4">
                  🔒 Your data is encrypted and never shared.
                </p>
              </form>
            </GlassCard>
          ) : (
            /* Success state */
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <GlassCard glow className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckIcon size={32} className="text-emerald-400" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-3xl font-display font-bold text-white mb-3"
                >
                  You&apos;re in.
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-white/50 text-lg"
                >
                  Welcome to the first 61. We&apos;ll be in touch.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.9 }}
                  className="mt-8 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="mt-6 text-xs text-white/20 font-mono tracking-widest uppercase"
                >
                  The 61st second begins now
                </motion.p>
              </GlassCard>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Toast notifications */}
      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </section>
  );
}
