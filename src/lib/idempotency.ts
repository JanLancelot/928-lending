export interface IdempotencyRecord {
  statusCode: number;
  body: unknown;
  createdAt: number;
}

const idempotencyStore = new Map<string, IdempotencyRecord>();

// Periodic cleanup of expired records (older than 24 hours)
if (typeof setInterval !== "undefined") {
  const CLEANUP_INTERVAL = 15 * 60 * 1000; // Every 15 minutes
  const MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours

  const timer = setInterval(() => {
    const now = Date.now();
    for (const [key, record] of idempotencyStore.entries()) {
      if (now - record.createdAt > MAX_AGE) {
        idempotencyStore.delete(key);
      }
    }
  }, CLEANUP_INTERVAL);

  if (timer.unref) {
    timer.unref();
  }
}

/**
 * Retrieves a cached response for an idempotency key if present and unexpired.
 */
export function getIdempotencyRecord(
  key: string,
  maxAgeMs = 24 * 60 * 60 * 1000
): IdempotencyRecord | null {
  if (!key || typeof key !== "string") {
    return null;
  }

  const record = idempotencyStore.get(key);
  if (!record) {
    return null;
  }

  if (Date.now() - record.createdAt > maxAgeMs) {
    idempotencyStore.delete(key);
    return null;
  }

  return record;
}

/**
 * Saves an idempotency record for duplicate submission prevention.
 */
export function saveIdempotencyRecord(
  key: string,
  statusCode: number,
  body: unknown
): void {
  if (!key || typeof key !== "string") {
    return;
  }

  idempotencyStore.set(key, {
    statusCode,
    body,
    createdAt: Date.now(),
  });
}
