import validator from "validator";

export interface SanitizedStringOptions {
  trim?: boolean;
  stripLow?: boolean;
  escapeHtml?: boolean;
}

/**
 * Sanitizes a generic string input to prevent XSS, HTML injection, and control character exploits.
 */
export function sanitizeString(
  input: string,
  options: SanitizedStringOptions = {}
): string {
  if (typeof input !== "string") {
    return "";
  }

  const { trim = true, stripLow = true, escapeHtml = true } = options;

  let result = input;

  if (trim) {
    result = result.trim();
  }

  if (stripLow) {
    result = validator.stripLow(result);
  }

  if (escapeHtml) {
    result = validator.escape(result);
  }

  return result;
}

/**
 * Normalizes and sanitizes an email address string.
 */
export function sanitizeEmail(email: string): string {
  const trimmed = email.trim();
  const normalized = validator.normalizeEmail(trimmed);
  return typeof normalized === "string" ? normalized : trimmed;
}

/**
 * Sanitizes phone numbers by stripping whitespace and invalid characters.
 */
export function sanitizePhone(phone: string): string {
  const trimmed = phone.trim();
  // Retains digits and leading + for international E.164 phone formats
  return trimmed.replace(/[^\d+]/g, "");
}

/**
 * Recursively sanitizes object payload string values for safety before processing.
 */
export function sanitizePayload<T extends Record<string, unknown>>(
  payload: T
): T {
  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(payload)) {
    if (typeof value === "string") {
      if (key.toLowerCase().includes("email")) {
        result[key] = sanitizeEmail(value);
      } else if (key.toLowerCase().includes("phone")) {
        result[key] = sanitizePhone(value);
      } else {
        result[key] = sanitizeString(value);
      }
    } else if (
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value)
    ) {
      result[key] = sanitizePayload(value as Record<string, unknown>);
    } else {
      result[key] = value;
    }
  }

  return result as T;
}
