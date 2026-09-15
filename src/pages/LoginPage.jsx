import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const res = await logIn(email, password);
    setSubmitting(false);
    if (!res.ok) {
      setError(res.error);
      if (res.needsVerification) {
        navigate(`/verify?email=${encodeURIComponent(email.trim().toLowerCase())}`, { state: { from } });
      }
      return;
    }
    navigate(from, { replace: true });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-ink px-6">
      <div className="w-full max-w-sm">
        <Link to="/" className="flex items-center gap-2 justify-center mb-8">
          <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
          <span className="font-mono text-[15px] font-semibold tracking-tight text-text">CodeSprint</span>
        </Link>

        <div className="border border-line rounded-lg bg-surface p-6">
          <h1 className="text-lg font-semibold text-text mb-1">Welcome back</h1>
          <p className="text-[13px] text-muted mb-6">Log in to pick up where you left off.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-2xs font-mono text-faint uppercase tracking-wider mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-md bg-surface2 border border-line text-text text-sm outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-2xs font-mono text-faint uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2 rounded-md bg-surface2 border border-line text-text text-sm outline-none focus:border-accent transition-colors"
              />
            </div>

            {error && <p className="text-2xs text-bad">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2 rounded-md bg-accent hover:bg-accentDim text-white text-sm font-medium transition-colors disabled:opacity-60"
            >
              {submitting ? "Logging in…" : "Log in"}
            </button>
          </form>
        </div>

        <p className="text-center text-[13px] text-muted mt-5">
          Don't have an account?{" "}
          <Link to="/signup" className="text-accent hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
