// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { beforeSendScrubber, SentryEventLike } from "@/lib/sentry";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  debug: false,
  beforeSend(event) {
    return beforeSendScrubber(event as unknown as SentryEventLike) as unknown as Sentry.ErrorEvent;
  },
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
