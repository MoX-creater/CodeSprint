import { Link } from "react-router-dom";
import { sections } from "../data/challenges";
import { useProgress } from "../hooks/useProgress";
import ProgressBar from "../components/ProgressBar";

export default function Dashboard() {
  const { sectionStats, overallStats } = useProgress();
  const overall = overallStats();

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-10 py-10 lg:py-14">
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-start mb-14">
        <div>
          <h1 className="text-[2.1rem] leading-[1.15] font-semibold text-text tracking-tight">
            Learn JavaScript by writing it, not reading about it.
          </h1>
          <p className="mt-4 text-[15px] text-muted leading-relaxed max-w-md">
            Every drill hands you a broken function (or a broken page) and a set
            of tests. Fix it, run the tests, move on. No videos, no slides — just code.
          </p>
          {overall.done > 0 && (
            <div className="mt-6 flex items-center gap-3 text-sm text-muted">
              <span className="font-mono text-text">{overall.done}</span>
              <span>of</span>
              <span className="font-mono text-text">{overall.total}</span>
              <span>drills solved so far</span>
            </div>
          )}
        </div>

        <div className="border border-line rounded-lg bg-surface overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-line bg-surface2">
            <span className="w-2.5 h-2.5 rounded-full bg-bad/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-warn/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-good/70" />
            <span className="ml-2 text-2xs font-mono text-faint">is-palindrome.js</span>
          </div>
          <pre className="px-4 py-4 text-[12.5px] leading-[1.7] font-mono text-muted overflow-x-auto">
{`function solve(str) {
  const clean = str.toLowerCase();
  const back = clean
    .split("")
    .reverse()
    .join("");
  return clean === back;
}`}
          </pre>
          <div className="px-4 py-2.5 border-t border-line flex items-center gap-2 text-2xs font-mono">
            <span className="text-good">✓</span>
            <span className="text-muted">3/3 tests passed</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-mono uppercase tracking-wider text-faint">Sections</h2>
        <span className="text-2xs font-mono text-faint">{overall.pct}% complete overall</span>
      </div>

      <div className="border border-line rounded-lg overflow-hidden divide-y divide-line bg-surface">
        {sections.map((section) => {
          const stats = sectionStats(section.slug);
          const done = stats.done === stats.total && stats.total > 0;
          const subCount = section.subcategories.length;
          return (
            <Link
              key={section.slug}
              to={`/section/${section.slug}`}
              className="flex items-center gap-4 px-5 py-4 hover:bg-surface2/60 transition-colors group"
              style={{ borderLeft: `3px solid ${section.accent}` }}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-[15px] font-medium text-text">{section.title}</h3>
                  {done && (
                    <span className="text-2xs font-mono px-1.5 py-0.5 rounded bg-good/10 text-good">
                      done
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-muted mt-0.5 truncate">
                  {section.blurb} · {subCount} topics
                </p>
              </div>

              <div className="hidden sm:block w-32 shrink-0">
                <div className="flex justify-between text-2xs font-mono text-faint mb-1.5">
                  <span>{stats.done}/{stats.total}</span>
                  <span>{stats.pct}%</span>
                </div>
                <ProgressBar pct={stats.pct} color={section.accent} height={4} />
              </div>

              <span className="text-faint group-hover:text-text group-hover:translate-x-0.5 transition-all shrink-0">
                →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
