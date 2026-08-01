/**
 * Pre-launch API Endpoint Load Testing Script
 * Executes concurrent HTTP POST requests against /api/submit-application
 * to verify throughput, rate-limiting guards, and error responses.
 *
 * Usage:
 *   node scripts/load-test.js [target_url] [concurrency] [total_requests]
 *   npm run test:load
 */

const http = require("http");
const https = require("https");
const { URL } = require("url");

const TARGET_URL = process.argv[2] || "http://localhost:3000/api/submit-application";
const CONCURRENCY = parseInt(process.argv[3] || "10", 10);
const TOTAL_REQUESTS = parseInt(process.argv[4] || "50", 10);

const samplePayload = JSON.stringify({
  fullName: "Load Test Applicant",
  businessName: "Stress Test Corp",
  email: "loadtest@example.com",
  phone: "09171234567",
  requestedAmount: 500000,
  annualRevenue: 2500000,
  turnstileToken: "1x0000000000000000000000000000000AA", // Cloudflare test pass token
});

async function runLoadTest() {
  console.log("==================================================");
  console.log(" 🚀 928 LENDING - PRE-LAUNCH ENDPOINT LOAD TEST ");
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
  let completed = 0;

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
            "X-Forwarded-For": `192.168.1.${(index % 3) + 1}`, // Simulates requests from IPs
          },
        },
        (res) => {
          let body = "";
          res.on("data", (chunk) => (body += chunk));
          res.on("end", () => {
            const latency = Date.now() - reqStart;
            results.latenciesMs.push(latency);
            results.total++;

            if (res.statusCode === 200) results.status200++;
            else if (res.statusCode === 400) results.status400++;
            else if (res.statusCode === 429) results.status429++;
            else results.otherError++;

            resolve();
          });
        }
      );

      req.on("error", (err) => {
        results.total++;
        results.otherError++;
        resolve();
      });

      req.write(samplePayload);
      req.end();
    });
  }

  // Process requests in concurrent batches
  const tasks = [];
  for (let i = 0; i < TOTAL_REQUESTS; i++) {
    tasks.push(i);
  }

  while (tasks.length > 0) {
    const batch = tasks.splice(0, CONCURRENCY);
    await Promise.all(batch.map((idx) => sendRequest(idx)));
  }

  const totalTimeMs = Date.now() - startTime;
  results.latenciesMs.sort((a, b) => a - b);

  const avgLatency =
    results.latenciesMs.reduce((a, b) => a + b, 0) / results.latenciesMs.length;
  const p50 = results.latenciesMs[Math.floor(results.latenciesMs.length * 0.5)] || 0;
  const p95 = results.latenciesMs[Math.floor(results.latenciesMs.length * 0.95)] || 0;

  console.log("📊 LOAD TEST RESULTS SUMMARY:");
  console.log(`Total Completed Requests : ${results.total}`);
  console.log(`Total Time Elapsed       : ${totalTimeMs} ms`);
  console.log(`Requests / Sec (RPS)     : ${((results.total / totalTimeMs) * 1000).toFixed(2)}`);
  console.log("--------------------------------------------------");
  console.log(`HTTP 200 OK (Success)    : ${results.status200}`);
  console.log(`HTTP 400 Bad Request     : ${results.status400}`);
  console.log(`HTTP 429 Rate Limited    : ${results.status429}`);
  console.log(`Other Errors             : ${results.otherError}`);
  console.log("--------------------------------------------------");
  console.log(`Average Latency          : ${avgLatency.toFixed(2)} ms`);
  console.log(`p50 Latency (Median)     : ${p50} ms`);
  console.log(`p95 Latency              : ${p95} ms`);
  console.log("==================================================\n");
}

runLoadTest().catch(console.error);
