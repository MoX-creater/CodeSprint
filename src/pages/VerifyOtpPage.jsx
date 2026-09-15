import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RESEND_COOLDOWN_SECONDS = 45;

export default function VerifyOtpPage() {
  const { verifyOtp, resendOtp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [params] = useSearchParams();
  const email = params.get("email") || "";

  const from = location.state?.from || "/";
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(RESEND_COOLDOWN_SECONDS);

  // Count down the resend cooldown once a second.
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => setCooldown((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const res = await verifyOtp(email, code);
    setSubmitting(false);
    if (!res.ok) {
      setError(res.error);
      return;
    }
    navigate(from, { replace: true });
  }

  async function handleResend() {
    if (cooldown > 0 || resending) return;
    setError("");
    setInfo("");
    setResending(true);
    const res = await resendOtp(email);
    setResending(false);
    if (res.ok) {
      setInfo("A new code was sent to your email.");
      setCooldown(RESEND_COOLDOWN_SECONDS);
    } else {
      setError(res.error);
      if (typeof res.secondsRemaining === "number") setCooldown(res.secondsRemaining);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-ink px-6">
      <div className="w-full max-w-sm">
        <Link to="/" className="flex items-center gap-2 justify-center mb-8">
          <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
          <span className="font-mono text-[15px] font-semibold tracking-tight text-text">CodeSprint</span>
        </Link>

        <div className="border border-line rounded-lg bg-surface p-6">
          <h1 className="text-lg font-semibold text-text mb-1">Check your email</h1>
          <p className="text-[13px] text-muted mb-5">
            We sent a 6-digit code to <span className="text-text">{email}</span>. It expires in 5 minutes —
            check your spam folder if you don't see it.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-2xs font-mono text-faint uppercase tracking-wider mb-1.5">
                6-digit code
              </label>
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                required
                autoFocus
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                placeholder="000000"
                className="w-full px-3 py-2 rounded-md bg-surface2 border border-line text-text text-lg font-mono tracking-[0.3em] text-center outline-none focus:border-accent transition-colors"
              />
            </div>

            {info && !error && <p className="text-2xs text-good">{info}</p>}
            {error && <p className="text-2xs text-bad">{error}</p>}

            <button
              type="submit"
              disabled={submitting || code.length !== 6}
              className="w-full py-2 rounded-md bg-accent hover:bg-accentDim text-white text-sm font-medium transition-colors disabled:opacity-60"
            >
              {submitting ? "Verifying…" : "Verify & continue"}
            </button>
          </form>

          <button
            onClick={handleResend}
            disabled={cooldown > 0 || resending}
            className="mt-4 w-full text-center text-2xs font-mono text-faint hover:text-muted transition-colors disabled:opacity-50 disabled:hover:text-faint"
          >
            {resending ? "Sending…" : cooldown > 0 ? `Resend code (${cooldown}s)` : "Resend code"}
          </button>
        </div>
      </div>
    </div>
  );
}
