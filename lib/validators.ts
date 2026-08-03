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

  // Standard email validation pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: 'Please enter a valid email address.' };
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

  if (trimmed.length > 50) {
    return { valid: false, error: 'Name must be less than 50 characters.' };
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
  consent?: boolean;
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

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
