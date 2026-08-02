import * as Sentry from "@sentry/nextjs";
import { beforeSendScrubber, SentryEventLike } from "@/lib/sentry";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  debug: false,
  beforeSend(event) {
    return beforeSendScrubber(event as unknown as SentryEventLike) as Sentry.Event;
  },
});
