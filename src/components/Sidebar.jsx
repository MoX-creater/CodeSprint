import { NavLink } from "react-router-dom";
import { sections } from "../data/challenges";
import { useProgress } from "../hooks/useProgress";
import { useAuth } from "../hooks/useAuth";
import ProgressBar from "./ProgressBar";

export default function Sidebar({ open, onClose }) {
  const { sectionStats, overallStats, resetProgress } = useProgress();
  const { user, logOut } = useAuth();
  const overall = overallStats();

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/60 z-30 lg:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed lg:sticky top-0 z-40 h-screen w-72 shrink-0 border-r border-line bg-surface
        flex flex-col transition-transform duration-200
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="px-5 pt-6 pb-5 border-b border-line">
          <NavLink to="/" className="flex items-center gap-2 group" onClick={onClose}>
            <span className="w-2.5 h-2.5 rounded-sm bg-accent group-hover:bg-good transition-colors" />
            <span className="font-mono text-[15px] font-semibold tracking-tight text-text">
              CodeSprint
            </span>
          </NavLink>
          <p className="mt-2 text-xs text-muted leading-relaxed">
            Think. Code. Test. Improve.
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <p className="px-2 pb-2 text-2xs uppercase tracking-wider text-faint font-mono">
            Sections
          </p>
          {sections.map((section) => {
            const stats = sectionStats(section.slug);
            return (
              <NavLink
                key={section.slug}
                to={`/section/${section.slug}`}
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-md group transition-colors ${
                    isActive ? "bg-surface2" : "hover:bg-surface2/60"
                  }`
                }
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-text font-medium">{section.title}</span>
                  <span className="text-2xs font-mono text-muted">
                    {stats.done}/{stats.total}
                  </span>
                </div>
                <ProgressBar pct={stats.pct} color={section.accent} height={4} />
              </NavLink>
            );
          })}
        </nav>

        <div className="px-5 py-4 border-t border-line">
          {user ? (
            <div className="flex items-center justify-between mb-4">
              <div className="min-w-0">
                <p className="text-2xs font-mono text-faint uppercase tracking-wider">Signed in</p>
                <p className="text-[13px] text-text truncate">{user}</p>
              </div>
              <button
                onClick={logOut}
                className="text-2xs font-mono text-faint hover:text-bad transition-colors shrink-0"
              >
                log out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 mb-4">
              <NavLink
                to="/login"
                onClick={onClose}
                className="flex-1 text-center text-2xs font-mono py-1.5 rounded-md border border-line text-muted hover:text-text hover:border-faint transition-colors"
              >
                Log in
              </NavLink>
              <NavLink
                to="/signup"
                onClick={onClose}
                className="flex-1 text-center text-2xs font-mono py-1.5 rounded-md bg-accent hover:bg-accentDim text-white transition-colors"
              >
                Sign up
              </NavLink>
            </div>
          )}

          <div className="flex items-center justify-between mb-1.5">
            <span className="text-2xs uppercase tracking-wider text-faint font-mono">
              Overall
            </span>
            <span className="text-2xs font-mono text-muted">{overall.pct}%</span>
          </div>
          <ProgressBar pct={overall.pct} />
          <button
            onClick={() => {
              if (confirm("Reset all saved progress? This can't be undone.")) resetProgress();
            }}
            className="mt-4 text-2xs text-faint hover:text-bad transition-colors"
          >
            Reset progress
          </button>
        </div>
      </aside>
    </>
  );
}
