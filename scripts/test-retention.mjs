import { evaluateRetentionStatus, anonymizeRecord, RETENTION_LIMITS } from "../src/lib/retention.ts";

console.log("==========================================");
console.log(" 🧪 DATA RETENTION ENGINE VERIFICATION ");
console.log("==========================================\n");

// 1. Test Temporary Artifact Retention Evaluation (30 Days)
const recentDate = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000); // 10 days old
const oldDate = new Date(Date.now() - 35 * 24 * 60 * 60 * 1000); // 35 days old

const recentStatus = evaluateRetentionStatus(recentDate, "TEMP_ARTIFACT");
const oldStatus = evaluateRetentionStatus(oldDate, "TEMP_ARTIFACT");

console.log(`[TEST 1] 10-day old artifact expired? ${recentStatus.isExpired} (Expected: false)`);
console.log(`[TEST 2] 35-day old artifact expired? ${oldStatus.isExpired} (Expected: true)`);

if (recentStatus.isExpired || !oldStatus.isExpired) {
  console.error("❌ Retention evaluation failed!");
  process.exit(1);
}

// 2. Test Record Anonymization
const sampleRecord = {
  id: "app-12345",
  fullName: "Juan Dela Cruz",
  email: "juan@example.com",
  phoneNumber: "09171234567",
  requestedAmount: 500000,
  nested: {
    businessName: "Dela Cruz Trading",
  },
};

const anonymized = anonymizeRecord(sampleRecord);

console.log("\n[TEST 3] Original Record:", JSON.stringify(sampleRecord));
console.log("[TEST 3] Anonymized Record:", JSON.stringify(anonymized));

if (
  anonymized.fullName !== "[ANONYMIZED]" ||
  anonymized.email !== "[ANONYMIZED]" ||
  anonymized.nested.businessName !== "[ANONYMIZED]" ||
  anonymized.requestedAmount !== 500000
) {
  console.error("❌ Anonymization test failed!");
  process.exit(1);
}

console.log("\n✅ All data retention engine tests passed successfully!\n");
