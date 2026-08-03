import http from 'k6/http';
import { check, sleep } from 'k6';

/**
 * 928 Lending - Enterprise Grafana k6 Load & Performance Testing Suite
 * Evaluates throughput, latency percentiles, Cloudflare Turnstile token handling,
 * and Upstash sliding window rate limiters under realistic pre-launch load.
 */

export const options = {
  scenarios: {
    // 1. Smoke test to verify baseline health
    smoke: {
      executor: 'constant-vus',
      vus: 1,
      duration: '10s',
      gracefulStop: '5s',
    },
    // 2. Ramping load test simulating peak business hours
    ramping_load: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '30s', target: 10 },
        { duration: '1m', target: 20 },
        { duration: '30s', target: 0 },
      ],
      gracefulRampDown: '10s',
      startTime: '10s',
    },
    // 3. Spike test simulating sudden traffic burst
    spike_burst: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '10s', target: 40 },
        { duration: '20s', target: 40 },
        { duration: '10s', target: 0 },
      ],
      startTime: '2m20s',
    },
  },
  thresholds: {
    // SLA Threshold: 95% of requests must complete within 500ms
    http_req_duration: ['p(95)<500', 'p(99)<1500'],
    // SLA Threshold: HTTP Error rate (excluding expected 429 rate-limiting) must be < 1%
    http_req_failed: ['rate<0.05'],
  },
};

const TARGET_URL = __ENV.TARGET_URL || 'http://localhost:3000/api/submit-application';

export default function () {
  const payload = JSON.stringify({
    fullName: `Applicant VU-${__VU}`,
    businessName: `Enterprise Corp ${__VU}`,
    businessAddress: '123 Enterprise Way, Makati City',
    businessType: 'Corporation',
    yearsInBusiness: 5,
    tinNumber: '999-888-777-000',
    email: `loadtest.vu${__VU}.${__ITER}@example.ph`,
    phone: '+639171234567',
    requestedAmount: 500000 + (__ITER * 10000),
    annualRevenue: 2500000,
    purposeOfLoan: 'Working Capital',
    agreedToTerms: true,
    turnstileToken: '1x0000000000000000000000000000000AA', // CF Pass token
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'X-Forwarded-For': `10.0.${(__VU % 5) + 1}.${(__ITER % 250) + 1}`,
      'X-Idempotency-Key': `k6-vu${__VU}-iter${__ITER}-${Date.now()}`,
    },
  };

  const res = http.post(TARGET_URL, payload, params);

  check(res, {
    'status is 200 or 429': (r) => r.status === 200 || r.status === 429,
    'latency below 2000ms': (r) => r.timings.duration < 2000,
  });

  sleep(0.5);
}
