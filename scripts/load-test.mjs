/**
 * 928 Lending - Industry-Standard Pre-Launch Endpoint Load Testing Harness
 * Executes concurrent HTTP requests against API endpoints, calculates latency percentiles,
 * evaluates SLA thresholds, and exports HTML & JSON performance reports.
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

  // Execute concurrent batch workloads
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

  // Save report exports
  const reportsDir = path.resolve(process.cwd(), "reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const jsonSummary = {
    targetUrl: TARGET_URL,
    concurrency: CONCURRENCY,
    totalRequests: results.total,
    elapsedMs: totalTimeMs,
    rps,
    status200: results.status200,
    status400: results.status400,
    status429: results.status429,
    otherError: results.otherError,
    latency: {
      avg: Number(avgLatency.toFixed(2)),
      p50,
      p90,
      p95,
      p99,
    },
    timestamp: new Date().toISOString(),
  };

  fs.writeFileSync(
    path.join(reportsDir, "load-test-summary.json"),
    JSON.stringify(jsonSummary, null, 2)
  );

  const htmlReport = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>928 Lending - Load Test Report</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; background: #0f172a; color: #f8fafc; padding: 2rem; }
    .card { background: #1e293b; border-radius: 12px; padding: 1.5rem; max-width: 800px; margin: 0 auto; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.5); }
    h1 { color: #38bdf8; margin-top: 0; }
    .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem; }
    .metric { background: #0f172a; padding: 1rem; border-radius: 8px; border: 1px solid #334155; }
    .metric-title { font-size: 0.875rem; color: #94a3b8; }
    .metric-value { font-size: 1.5rem; font-weight: bold; color: #f1f5f9; margin-top: 0.25rem; }
    .pass { color: #4ade80; }
    .fail { color: #f87171; }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚀 928 Lending API Load Benchmark</h1>
    <p>Target: <code>${TARGET_URL}</code> | Executed: ${new Date().toLocaleString()}</p>
    
    <div class="grid">
      <div class="metric"><div class="metric-title">Requests / Sec (RPS)</div><div class="metric-value">${rps}</div></div>
      <div class="metric"><div class="metric-title">Total Requests</div><div class="metric-value">${results.total}</div></div>
      <div class="metric"><div class="metric-title">p95 Latency</div><div class="metric-value ${p95 <= P95_SLA_THRESHOLD_MS ? "pass" : "fail"}">${p95} ms</div></div>
      <div class="metric"><div class="metric-title">HTTP 200 OK</div><div class="metric-value pass">${results.status200}</div></div>
      <div class="metric"><div class="metric-title">HTTP 429 Rate Limited</div><div class="metric-value">${results.status429}</div></div>
      <div class="metric"><div class="metric-title">Other Errors</div><div class="metric-value ${results.otherError === 0 ? "pass" : "fail"}">${results.otherError}</div></div>
    </div>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(reportsDir, "load-test-report.html"), htmlReport);
  console.log(`📄 Reports saved to ${path.join(reportsDir, "load-test-report.html")}`);

  if (FAIL_ON_THRESHOLD && (p95 > P95_SLA_THRESHOLD_MS || errorRate > MAX_ALLOWED_ERROR_RATE)) {
    console.error("❌ SLA Threshold Failed!");
    process.exit(1);
  }
}

runLoadTest().catch((err) => {
  console.error(err);
  process.exit(1);
});
