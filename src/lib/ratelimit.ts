export interface RateLimitOptions {
  /** Maximum number of allowed requests in the window */
  limit?: number;
  /** Sliding window duration in milliseconds */
  windowMs?: number;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

interface RateLimitRecord {
  timestamps: number[];
}

// In-memory store: suitable for single-instance deployments only.
const rateLimitStore = new Map<string, RateLimitRecord>();

// Periodic cleanup to avoid memory leaks (runs every 5 minutes)
if (typeof setInterval !== "undefined") {
  const CLEANUP_INTERVAL = 5 * 60 * 1000;
  const timer = setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitStore.entries()) {
      // Remove timestamps older than 1 hour
      const valid = record.timestamps.filter((ts) => now - ts < 3600 * 1000);
      if (valid.length === 0) {
        rateLimitStore.delete(key);
      } else {
        rateLimitStore.set(key, { timestamps: valid });
      }
    }
  }, CLEANUP_INTERVAL);

  if (timer.unref) {
    timer.unref();
  }
}

/**
 * Extracts client IP address from incoming Request headers.
 */
export function getClientIp(request: Request): string {
  const headers = request.headers;

  const cfConnectingIp = headers.get("cf-connecting-ip");
  if (cfConnectingIp) {
    return cfConnectingIp.split(",")[0].trim();
  }

  const xForwardedFor = headers.get("x-forwarded-for");
  if (xForwardedFor) {
    return xForwardedFor.split(",")[0].trim();
  }

  const xRealIp = headers.get("x-real-ip");
  if (xRealIp) {
    return xRealIp.trim();
  }

  return "127.0.0.1";
}

/**
 * Evaluates rate limit for a given identifier using a sliding window algorithm.
 *
 * @param identifier - Unique client identifier (e.g. IP address)
 * @param options - Configuration options for limit and window duration
 */
export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = {}
): RateLimitResult {
  const limit = options.limit ?? 5;
  const windowMs = options.windowMs ?? 60 * 1000; // Default 1 minute
  const now = Date.now();
  const windowStart = now - windowMs;

  const record = rateLimitStore.get(identifier) ?? { timestamps: [] };

  // Filter out timestamps outside the active sliding window
  const activeTimestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (activeTimestamps.length >= limit) {
    const oldestTimestamp = activeTimestamps[0];
    const reset = Math.ceil((oldestTimestamp + windowMs - now) / 1000);

    return {
      success: false,
      limit,
      remaining: 0,
      reset: Math.max(reset, 1),
    };
  }

  activeTimestamps.push(now);
  rateLimitStore.set(identifier, { timestamps: activeTimestamps });

  const remaining = limit - activeTimestamps.length;
  const oldestTimestamp = activeTimestamps[0];
  const reset = Math.ceil((oldestTimestamp + windowMs - now) / 1000);

  return {
    success: true,
    limit,
    remaining,
    reset: Math.max(reset, 1),
  };
}
