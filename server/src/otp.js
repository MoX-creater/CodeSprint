export const OTP_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes
export const RESEND_COOLDOWN_MS = 45 * 1000; // 45 seconds between sends

export function generateOtp() {
  // 6-digit numeric code, always zero-padded (e.g. "004821").
  return String(Math.floor(Math.random() * 1_000_000)).padStart(6, "0");
}
