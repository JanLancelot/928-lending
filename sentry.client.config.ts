import { beforeSendScrubber, SentryEventLike } from "@/lib/sentry";

export const sentryClientOptions = {
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  debug: false,
  beforeSend(event: SentryEventLike) {
    return beforeSendScrubber(event);
  },
};
