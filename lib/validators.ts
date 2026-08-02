// ============================================================
// 61STSEC — Form Validators
// ============================================================

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validate email address
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || email.trim().length === 0) {
    return { valid: false, error: 'Email is required.' };
  }

  const trimmed = email.trim().toLowerCase();

  if (trimmed.length > 254) {
    return { valid: false, error: 'Email is too long.' };
  }

  // RFC 5322 simplified
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: 'Please enter a valid email address.' };
  }

  // Check for common disposable email domains
  const disposableDomains = [
    'mailinator.com',
    'guerrillamail.com',
    'tempmail.com',
    'throwaway.email',
    'yopmail.com',
    'sharklasers.com',
  ];

  const domain = trimmed.split('@')[1];
  if (disposableDomains.includes(domain)) {
    return { valid: false, error: 'Please use a permanent email address.' };
  }

  return { valid: true };
}

/**
 * Validate first name
 */
export function validateFirstName(name: string): ValidationResult {
  if (!name || name.trim().length === 0) {
    return { valid: false, error: 'First name is required.' };
  }

  const trimmed = name.trim();

  if (trimmed.length < 2) {
    return { valid: false, error: 'Name must be at least 2 characters.' };
  }

  if (trimmed.length > 50) {
    return { valid: false, error: 'Name must be less than 50 characters.' };
  }

  // Only allow letters, spaces, hyphens, apostrophes
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
  if (!nameRegex.test(trimmed)) {
    return { valid: false, error: 'Name contains invalid characters.' };
  }

  return { valid: true };
}

/**
 * Sanitize string input (remove potential XSS)
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
}

/**
 * Validate the entire waitlist form
 */
export function validateWaitlistForm(data: {
  email: string;
  firstName: string;
  consent: boolean;
}): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  const emailResult = validateEmail(data.email);
  if (!emailResult.valid && emailResult.error) {
    errors.email = emailResult.error;
  }

  const nameResult = validateFirstName(data.firstName);
  if (!nameResult.valid && nameResult.error) {
    errors.firstName = nameResult.error;
  }

  if (!data.consent) {
    errors.consent = 'You must agree to receive updates.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
