# 🧪 928 Lending - Developer Testing & Benchmark Guide

This document outlines the testing standards, commands, architecture, and load performance practices for the 928 Lending application.

---

## 📐 1. Architecture Overview

| Testing Tier | Technology / Runner | Location | Goal |
|---|---|---|---|
| **Unit Testing** | Vitest + v8 Coverage | `src/lib/__tests__`, `src/schemas/__tests__` | Verify core sanitization, HMAC integrity, idempotency, retention, and schema boundary validations |
| **Component Testing** | `@testing-library/react` + `jsdom` | `src/components/__tests__` | Verify UI component rendering, state transitions, consent banners, and user events |
| **Endpoint Load Testing** | Multi-threaded Node.js HTTP Harness | `scripts/load-test.mjs` | Measure RPS, $p_{50}, p_{90}, p_{95}, p_{99}$ latencies, and export HTML/JSON benchmark reports |
| **Grafana k6 Load Testing** | Grafana k6 Engine | `load-tests/k6-loan-submission.js` | Execute smoke, ramping VU, and spike burst traffic profiles with SLA metric threshold rules |

---

## ⚡ 2. Quick Command Reference

```bash
# Run ALL test suites & audits with a single command (Linting, Vitest, Security, Retention, Load)
npm run test:all

# Run complete unit and component test suite
npm run test

# Run unit tests only (lib + schemas)
npm run test:unit

# Run component UI tests only
npm run test:components

# Run Vitest test watcher (development mode)
npm run test:watch

# Generate code coverage report (Enforces >80% threshold across lines, functions, branches, statements)
npm run test:coverage

# Execute pre-launch endpoint load test against local or remote dev target
npm run test:load http://localhost:3000/api/submit-application 10 50

# Run Grafana k6 enterprise load scenarios (Requires k6 installed)
k6 run load-tests/k6-loan-submission.js
```

---

## 📊 3. Code Coverage Quality Thresholds

Coverage thresholds are enforced by Vitest in `vitest.config.mts`:
- **Statements**: $\ge 80\%$
- **Branches**: $\ge 80\%$
- **Functions**: $\ge 80\%$
- **Lines**: $\ge 80\%$

Reports are generated in `coverage/` in text, JSON, and interactive HTML formats.

---

## 📈 4. Load & Performance Benchmarking Reports

When running `npm run test:load`, the script generates performance summary reports in:
- `reports/load-test-summary.json` (Structured JSON benchmark output for metrics monitoring)
- `reports/load-test-report.html` (Interactive dark-mode HTML dashboard with latency percentile distribution)

### SLA Metrics & Thresholds
- **$p_{95}$ Latency SLA**: $< 2000\text{ms}$
- **Max Error Rate**: $< 5\%$