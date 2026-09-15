// Auth API client. All signup/OTP/login logic now lives on the backend
// (see /server) — this file just calls it and manages the session token.
//
// What's stored client-side: only the session token + email/name, in
// localStorage, the same way any SPA persists a login session. The OTP
// itself is never sent to, or stored in, the browser — it's generated,
// hashed, checked, and emailed entirely server-side (see server/src/index.js).

const SESSION_KEY = "codesprint:session";

// In dev, Vite proxies /api -> the backend (see vite.config.js). In
// production, point this at your deployed backend URL, e.g. via
// VITE_API_URL in a .env file at the project root.
const API_BASE = import.meta.env.VITE_API_URL || "/api";

async function request(path, body) {
  let res;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    return { ok: false, error: "Couldn't reach the server. Is the backend running? See README.md." };
  }

  let data;
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  if (!res.ok) {
    return { ok: false, error: data.error || "Something went wrong.", ...data };
  }
  return { ok: true, ...data };
}

export function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

function setSession({ token, email, name }) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ token, email, name }));
  } catch {
    // ignore storage errors
  }
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

// Kicks off signup: backend generates an OTP, hashes it, and emails it.
// Never returns the code.
export async function signUp(name, email, password) {
  const res = await request("/signup", { name, email, password });
  return res.ok ? { ok: true } : { ok: false, error: res.error };
}

export async function resendOtp(email) {
  const res = await request("/resend-otp", { email });
  return res.ok ? { ok: true } : { ok: false, error: res.error, secondsRemaining: res.secondsRemaining };
}

export async function verifyOtp(email, code) {
  const res = await request("/verify-otp", { email, code });
  if (!res.ok) return { ok: false, error: res.error };
  setSession({ token: res.token, email: res.email, name: res.name });
  return { ok: true };
}

export async function logIn(email, password) {
  const res = await request("/login", { email, password });
  if (!res.ok) return { ok: false, error: res.error, needsVerification: res.needsVerification };
  setSession({ token: res.token, email: res.email, name: res.name });
  return { ok: true };
}

export function logOut() {
  clearSession();
}
