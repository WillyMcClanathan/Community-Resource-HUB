export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface SubmissionData {
  organizationName: string;
  category: string;
  description: string;
  address: string;
  city: string;
  serviceArea: string[];
  hours: string;
  phone: string;
  email: string;
  website: string;
  cost: string;
  eligibility: string;
  languages: string[];
  accessibility: string[];
  notes?: string;
  consent: boolean;
  submitterName: string;
  submitterEmail: string;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10 || cleaned.length === 11;
}

export function validateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

export function sanitizeUrl(url: string): string {
  if (!url) return '';

  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  try {
    const urlObj = new URL(url);
    return urlObj.href;
  } catch {
    return '';
  }
}

export function validateSubmission(data: SubmissionData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.organizationName || data.organizationName.trim().length < 3) {
    errors.organizationName = 'Organization name must be at least 3 characters';
  }

  if (!data.category || data.category.trim().length === 0) {
    errors.category = 'Please select a category';
  }

  if (!data.description || data.description.trim().length < 20) {
    errors.description = 'Description must be at least 20 characters';
  }

  if (!data.address || data.address.trim().length < 5) {
    errors.address = 'Please provide a valid address';
  }

  if (!data.city || data.city.trim().length < 2) {
    errors.city = 'Please provide a city';
  }

  if (!data.serviceArea || data.serviceArea.length === 0) {
    errors.serviceArea = 'Please select at least one service area';
  }

  if (!data.hours || data.hours.trim().length < 3) {
    errors.hours = 'Please provide hours of operation';
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = 'Please provide a valid phone number';
  }

  if (data.email && !validateEmail(data.email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (data.website) {
    const sanitized = sanitizeUrl(data.website);
    if (!sanitized || !validateUrl(sanitized)) {
      errors.website = 'Please provide a valid website URL';
    }
  }

  if (!data.cost || data.cost.trim().length === 0) {
    errors.cost = 'Please specify cost information';
  }

  if (!data.eligibility || data.eligibility.trim().length < 5) {
    errors.eligibility = 'Please provide eligibility information';
  }

  if (!data.languages || data.languages.length === 0) {
    errors.languages = 'Please select at least one language';
  }

  if (!data.submitterName || data.submitterName.trim().length < 2) {
    errors.submitterName = 'Please provide your name';
  }

  if (!data.submitterEmail || !validateEmail(data.submitterEmail)) {
    errors.submitterEmail = 'Please provide a valid email address';
  }

  if (!data.consent) {
    errors.consent = 'You must consent to verification before submitting';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .slice(0, 1000);
}
