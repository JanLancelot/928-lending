# Cloudflare Edge Security & WAF Configuration Guide

This document outlines the mandatory Cloudflare edge security settings, WAF rules, and Turnstile CAPTCHA configurations for the **928 Lending** platform.

---

## 1. SSL/TLS & Transport Security

* **Encryption Mode**: `Full (Strict)`
* **Minimum TLS Version**: `TLS 1.3`
* **HTTP Strict Transport Security (HSTS)**:
  * Max Age: `63072000` (2 years)
  * Include Subdomains: `Enabled`
  * Preload: `Enabled`
* **Automatic HTTPS Rewrites**: `Enabled`
* **Opportunistic Encryption**: `Enabled`

---

## 2. Web Application Firewall (WAF) Rules

### Rule 1: API Endpoint Rate Limiting
* **Expression**: `(http.request.uri.path eq "/api/submit-application" and http.request.method eq "POST")`
* **Action**: `Rate Limit (Block for 10 minutes)`
* **Threshold**: `5 requests per 60 seconds per Client IP`
* **Response Status**: `429 Too Many Requests`

### Rule 2: Cloudflare Managed Rulesets
* **Cloudflare OWASP Core Ruleset**: `Enabled` (Paranoia Level: 2, Action: Block)
* **Cloudflare Managed Ruleset**: `Enabled` (Mitigates known zero-day exploits, XSS, SQLi, and command injection)

### Rule 3: Bot Fight Mode & Challenge Rules
* **Super Bot Fight Mode**: `Challenge Definite Bots`
* **Turnstile Managed Challenge**: Apply Managed Challenge to requests targeting `/api/*` originating from non-philippine IP ranges if geo-restriction is active.

---

## 3. Cloudflare Turnstile Setup

1. **Create Sitekey & Secret in Cloudflare Dashboard**:
   * Site Name: `928 Lending Production`
   * Domain: `928lending.com`
   * Widget Type: `Managed` (Invisible until risk detected)
2. **Environment Variables**:
   * `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
   * `TURNSTILE_SECRET_KEY`

---

## 4. DNS & Email Authentication (SPF / DKIM / DMARC)

```dns
; SPF Record
v=spf1 include:amazonses.com include:resend.com ~all

; DMARC Record
v=DMARC1; p=reject; rua=mailto:dmarc-reports@928lending.com; pct=100
```
