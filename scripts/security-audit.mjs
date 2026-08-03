import fs from "node:fs";
import path from "node:path";

console.log("==========================================");
console.log(" 🛡️  928 LENDING - PRE-FLIGHT SECURITY AUDIT ");
console.log("==========================================\n");

let passed = true;

function logCheck(title, success, details) {
  if (success) {
    console.log(`✅ [PASS] ${title}`);
  } else {
    console.log(`❌ [FAIL] ${title}`);
    passed = false;
  }
  if (details) {
    console.log(`   └─ ${details}`);
  }
}

// 1. Check Security Header Configuration in next.config.ts
try {
  const nextConfigPath = path.resolve("next.config.ts");
  const content = fs.readFileSync(nextConfigPath, "utf8");

  const hasCsp = content.includes("Content-Security-Policy");
  const hasHsts = content.includes("Strict-Transport-Security");
  const hasXFrame = content.includes("X-Frame-Options");
  const hasNosniff = content.includes("X-Content-Type-Options");

  logCheck(
    "Next.js Security Headers (CSP, HSTS, X-Frame-Options, Nosniff)",
    hasCsp && hasHsts && hasXFrame && hasNosniff,
    "Verified next.config.ts header directives"
  );
} catch (err) {
  logCheck("Next.js Security Headers Check", false, err.message);
}

// 2. Check Local Environment Configuration Template
try {
  const envExamplePath = path.resolve(".env.example");
  const content = fs.readFileSync(envExamplePath, "utf8");

  const hasTurnstile = content.includes("TURNSTILE_SECRET_KEY");
  const hasHmac = content.includes("HMAC_SECRET_KEY");
  const hasSentry = content.includes("NEXT_PUBLIC_SENTRY_DSN");

  logCheck(
    "Environment Variable Template Completeness (.env.example)",
    hasTurnstile && hasHmac && hasSentry,
    "Verified presence of Turnstile, HMAC, and Sentry variables"
  );
} catch (err) {
  logCheck(".env.example Audit", false, err.message);
}

// 3. Scan Source Files for Hardcoded Secrets
try {
  const srcDir = path.resolve("src");
  let secretFound = false;

  function scanDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        scanDir(fullPath);
      } else if (fullPath.endsWith(".ts") || fullPath.endsWith(".tsx")) {
        const text = fs.readFileSync(fullPath, "utf8");
        // Scan for potential hardcoded secret keys or passwords
        if (
          /['"]sk_[a-zA-Z0-9]{20,}['"]/.test(text) ||
          /['"]re_[a-zA-Z0-9]{20,}['"]/.test(text)
        ) {
          secretFound = true;
          console.log(`   ⚠️ Potential hardcoded secret in ${file}`);
        }
      }
    }
  }

  scanDir(srcDir);
  logCheck(
    "Source Code Secret Scan (No Hardcoded API Keys)",
    !secretFound,
    "Scanned all .ts and .tsx files under src/"
  );
} catch (err) {
  logCheck("Source Secret Scan", false, err.message);
}

console.log("\n------------------------------------------");
if (passed) {
  console.log("🎉 SECURITY AUDIT PASSED: All pre-flight checks succeeded!\n");
  process.exit(0);
} else {
  console.error("⛔ SECURITY AUDIT FAILED: Fix reported security checks before deployment.\n");
  process.exit(1);
}
