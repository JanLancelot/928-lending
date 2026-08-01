interface TurnstileResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

export interface VerifyTurnstileResult {
  success: boolean;
  errorCodes?: string[];
  message?: string;
}

/**
 * Verifies a Cloudflare Turnstile token server-side.
 *
 * @param token - The turnstile response token sent from the client
 * @param remoteIp - Optional remote IP address of the client
 * @returns Result object indicating verification status
 */
export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string
): Promise<VerifyTurnstileResult> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  const isDev = process.env.NODE_ENV === "development";
  const skipTurnstile = process.env.SKIP_TURNSTILE === "true";

  // Allow development bypass if explicitly configured or using Cloudflare test tokens
  if ((isDev && skipTurnstile) || (isDev && (!secretKey || secretKey === "dummy-secret-key"))) {
    return {
      success: true,
      message: "Turnstile verification bypassed for local development",
    };
  }

  // Cloudflare Turnstile always passes dummy sitekey / secret test tokens:
  // 1x0000000000000000000000000000000AA (Always passes)
  // 2x0000000000000000000000000000000AA (Always fails)
  if (!secretKey) {
    return {
      success: false,
      errorCodes: ["missing-secret-key"],
      message: "TURNSTILE_SECRET_KEY is not configured on the server",
    };
  }

  if (!token) {
    return {
      success: false,
      errorCodes: ["missing-input-response"],
      message: "Turnstile token is required",
    };
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);
    if (remoteIp) {
      formData.append("remoteip", remoteIp);
    }

    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (!res.ok) {
      return {
        success: false,
        errorCodes: [`http-${res.status}`],
        message: `Turnstile verification service returned status ${res.status}`,
      };
    }

    const data = (await res.json()) as TurnstileResponse;

    return {
      success: data.success,
      errorCodes: data["error-codes"],
      message: data.success
        ? "Turnstile verification successful"
        : "Turnstile CAPTCHA verification failed",
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown verification error";
    return {
      success: false,
      errorCodes: ["internal-error"],
      message: isDev ? errorMessage : "Unable to verify Turnstile token",
    };
  }
}
