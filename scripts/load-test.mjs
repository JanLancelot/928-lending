/**
 * 928 Lending - Pre-Launch Endpoint Load Testing Harness
 * Executes concurrent HTTP requests against API endpoints, calculates latency percentiles,
 * evaluates SLA thresholds, and exports timestamped text report files.
 *
 * Usage:
 *   node scripts/load-test.mjs [target_url] [concurrency] [total_requests] [--fail-on-threshold]
 *   npm run test:load
 */

import http from "node:http";
import https from "node:https";
import fs from "node:fs";
import path from "node:path";
import { URL } from "node:url";

const TARGET_URL = process.argv[2] || "http://localhost:3000/api/submit-application";
const CONCURRENCY = parseInt(process.argv[3] || "10", 10);
const TOTAL_REQUESTS = parseInt(process.argv[4] || "50", 10);
const FAIL_ON_THRESHOLD = process.argv.includes("--fail-on-threshold");

const REQUEST_TIMEOUT_MS = 10000;
const P95_SLA_THRESHOLD_MS = 2000;
const MAX_ALLOWED_ERROR_RATE = 0.05; // 5%

if (!Number.isInteger(CONCURRENCY) || CONCURRENCY <= 0) {
  throw new Error("Invalid concurrency parameter. Must be a positive integer.");
}

if (!Number.isInteger(TOTAL_REQUESTS) || TOTAL_REQUESTS <= 0) {
  throw new Error("Invalid total_requests parameter. Must be a positive integer.");
}

function getTimestampString() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const YYYY = now.getFullYear();
  const MM = pad(now.getMonth() + 1);
  const DD = pad(now.getDate());
  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());
  return `${YYYY}-${MM}-${DD}_${hh}-${mm}-${ss}`;
}

const samplePayload = JSON.stringify({
  fullName: "Load Test Applicant",
  businessName: "Enterprise Stress Test Corp",
  businessAddress: "100 Ayala Avenue, Makati City",
  businessType: "Corporation",
  yearsInBusiness: 5,
  tinNumber: "123-456-789-000",
  email: "loadtest@example.ph",
  phone: "+639171234567",
  requestedAmount: 500000,
  annualRevenue: 2500000,
  purposeOfLoan: "Working Capital Expansion",
  agreedToTerms: true,
  turnstileToken: "1x0000000000000000000000000000000AA",
});

async function runLoadTest() {
  console.log("==================================================");
  console.log(" 🚀 928 LENDING - ENTERPRISE API LOAD TEST HARNESS ");
  console.log("==================================================");
  console.log(`Target Endpoint : ${TARGET_URL}`);
  console.log(`Concurrency     : ${CONCURRENCY} parallel workers`);
  console.log(`Total Requests  : ${TOTAL_REQUESTS}`);
  console.log("--------------------------------------------------\n");

  const parsedUrl = new URL(TARGET_URL);
  const requester = parsedUrl.protocol === "https:" ? https : http;

  const results = {
    total: 0,
    status200: 0,
    status400: 0,
    status429: 0,
    otherError: 0,
    latenciesMs: [],
  };

  const startTime = Date.now();

  function sendRequest(index) {
    return new Promise((resolve) => {
      const reqStart = Date.now();
      const req = requester.request(
        parsedUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(samplePayload),
            "X-Forwarded-For": `192.168.1.${(index % 10) + 1}`,
            "X-Idempotency-Key": `idem-load-${index}-${Date.now()}`,
          },
        },
        (res) => {
          let body = "";
          res.on("data", (chunk) => {
            body += chunk;
          });
          res.on("end", () => {
            const latency = Date.now() - reqStart;
            results.latenciesMs.push(latency);
            results.total++;

            if (res.statusCode === 200) results.status200++;
            else if (res.statusCode === 400) results.status400++;
            else if (res.statusCode === 429) results.status429++;
            else results.otherError++;

            resolve(body);
          });
        }
      );

      req.on("error", () => {
        results.total++;
        results.otherError++;
        resolve(null);
      });

      req.setTimeout(REQUEST_TIMEOUT_MS, () => {
        req.destroy(new Error(`Request timed out after ${REQUEST_TIMEOUT_MS}ms`));
      });

      req.write(samplePayload);
      req.end();
    });
  }

  const tasks = Array.from({ length: TOTAL_REQUESTS }, (_, i) => i);
  while (tasks.length > 0) {
    const batch = tasks.splice(0, CONCURRENCY);
    await Promise.all(batch.map((idx) => sendRequest(idx)));
  }

  const totalTimeMs = Date.now() - startTime;
  results.latenciesMs.sort((a, b) => a - b);

  const len = results.latenciesMs.length;
  const avgLatency = len === 0 ? 0 : results.latenciesMs.reduce((a, b) => a + b, 0) / len;
  const p50 = len === 0 ? 0 : results.latenciesMs[Math.floor(len * 0.5)] || 0;
  const p90 = len === 0 ? 0 : results.latenciesMs[Math.floor(len * 0.9)] || 0;
  const p95 = len === 0 ? 0 : results.latenciesMs[Math.floor(len * 0.95)] || 0;
  const p99 = len === 0 ? 0 : results.latenciesMs[Math.floor(len * 0.99)] || 0;
  const rps = totalTimeMs === 0 ? 0 : Number(((results.total / totalTimeMs) * 1000).toFixed(2));
  const errorRate = results.total === 0 ? 0 : results.otherError / results.total;

  console.log("📊 LOAD TEST RESULTS SUMMARY:");
  console.log(`Total Completed Requests : ${results.total}`);
  console.log(`Total Elapsed Time       : ${totalTimeMs} ms`);
  console.log(`Requests / Sec (RPS)     : ${rps}`);
  console.log("--------------------------------------------------");
  console.log(`HTTP 200 OK (Success)    : ${results.status200}`);
  console.log(`HTTP 400 Bad Request     : ${results.status400}`);
  console.log(`HTTP 429 Rate Limited    : ${results.status429}`);
  console.log(`Other Errors             : ${results.otherError}`);
  console.log("--------------------------------------------------");
  console.log(`Average Latency          : ${avgLatency.toFixed(2)} ms`);
  console.log(`p50 Latency (Median)     : ${p50} ms`);
  console.log(`p90 Latency              : ${p90} ms`);
  console.log(`p95 Latency              : ${p95} ms`);
  console.log(`p99 Latency              : ${p99} ms`);
  console.log("==================================================\n");

  const reportsDir = path.resolve(process.cwd(), "reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const timestampStr = getTimestampString();
  const textReport = `===================================================================
 🚀 928 LENDING - API LOAD TEST BENCHMARK REPORT
===================================================================
 Timestamp       : ${new Date().toLocaleString()}
 Target Endpoint : ${TARGET_URL}
 Concurrency    : ${CONCURRENCY} parallel workers
 Total Requests : ${results.total}
-------------------------------------------------------------------
 📊 LATENCY & THROUGHPUT METRICS:
   Requests / Sec (RPS) : ${rps} req/sec
   Total Elapsed Time   : ${totalTimeMs} ms
   Average Latency      : ${avgLatency.toFixed(2)} ms
   p50 Latency (Median) : ${p50} ms
   p90 Latency          : ${p90} ms
   p95 Latency          : ${p95} ms
   p99 Latency          : ${p99} ms
-------------------------------------------------------------------
 🚥 HTTP RESPONSE BREAKDOWN:
   HTTP 200 OK (Success) : ${results.status200}
   HTTP 400 Bad Request  : ${results.status400}
   HTTP 429 Rate Limited : ${results.status429}
   Other Errors          : ${results.otherError}
===================================================================
 STATUS: ${p95 <= P95_SLA_THRESHOLD_MS && errorRate <= MAX_ALLOWED_ERROR_RATE ? "PASSED (SLA Threshold Met)" : "FAILED (SLA Violation Detected)"}
===================================================================
`;

  const timestampedFilename = `load-test-report-${timestampStr}.txt`;
  const latestFilename = `load-test-report.txt`;

  fs.writeFileSync(path.join(reportsDir, timestampedFilename), textReport);
  fs.writeFileSync(path.join(reportsDir, latestFilename), textReport);

  console.log(`📄 Timestamped text report saved to: ${path.join(reportsDir, timestampedFilename)}`);
  console.log(`📄 Latest text report saved to: ${path.join(reportsDir, latestFilename)}`);

  if (FAIL_ON_THRESHOLD && (p95 > P95_SLA_THRESHOLD_MS || errorRate > MAX_ALLOWED_ERROR_RATE)) {
    console.error("❌ SLA Threshold Failed!");
    process.exit(1);
  }
}

runLoadTest().catch((err) => {
  console.error(err);
  process.exit(1);
});
