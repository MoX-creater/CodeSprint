import { Link, Navigate, useParams } from "react-router-dom";
import { getSection, getSubcategory } from "../data/challenges";
import { useProgress } from "../hooks/useProgress";
import ProgressBar from "../components/ProgressBar";

const difficultyColor = {
  Easy: "text-good",
  Medium: "text-warn",
  Hard: "text-bad",
};

export default function SubcategoryPage() {
  const { sectionSlug, subSlug } = useParams();
  const { isComplete, subStats } = useProgress();
  const section = getSection(sectionSlug);
  const sub = getSubcategory(sectionSlug, subSlug);

  if (!section || !sub) return <Navigate to="/" replace />;
  const stats = subStats(sectionSlug, subSlug);

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-10 py-10 lg:py-14">
      <div className="text-2xs font-mono text-faint mb-4 flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-muted transition-colors">tracks</Link>
        <span>/</span>
        <Link to={`/section/${sectionSlug}`} className="hover:text-muted transition-colors">{section.title}</Link>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-sm" style={{ background: section.accent }} />
          <h1 className="text-2xl font-semibold text-text tracking-tight">{sub.title}</h1>
        </div>
        <p className="mt-2 text-[15px] text-muted">{sub.blurb}</p>

        <div className="mt-5 max-w-xs">
          <div className="flex justify-between text-2xs font-mono text-faint mb-1.5">
            <span>{stats.done} of {stats.total} solved</span>
            <span>{stats.pct}%</span>
          </div>
          <ProgressBar pct={stats.pct} color={section.accent} />
        </div>
      </div>

      <ol className="border border-line rounded-lg overflow-hidden divide-y divide-line bg-surface">
        {sub.lesson && (
          <li>
            <Link
              to={`/section/${sectionSlug}/${subSlug}/lesson`}
              className="flex items-center gap-4 px-5 py-3.5 hover:bg-surface2/60 transition-colors group"
            >
              <span
                className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-2xs font-mono
                ${isComplete(sub.lesson.id) ? "bg-warn/15 border-warn text-warn" : "border-line text-faint"}`}
              >
                {isComplete(sub.lesson.id) ? "✓" : "◇"}
              </span>
              <span className="flex-1 text-[14.5px] text-text">{sub.lesson.title}</span>
              <span className="text-2xs font-mono px-1.5 py-0.5 rounded bg-warn/10 text-warn">LESSON</span>
              <span className="text-faint group-hover:text-text group-hover:translate-x-0.5 transition-all">
                →
              </span>
            </Link>
          </li>
        )}
        {sub.challenges.map((ch, i) => {
          const done = isComplete(ch.id);
          return (
            <li key={ch.id}>
              <Link
                to={`/section/${sectionSlug}/${subSlug}/${ch.id}`}
                className="flex items-center gap-4 px-5 py-3.5 hover:bg-surface2/60 transition-colors group"
              >
                <span
                  className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-2xs font-mono
                  ${done ? "bg-good/15 border-good text-good" : "border-line text-faint"}`}
                >
                  {done ? "✓" : i + 1}
                </span>
                <span className="flex-1 text-[14.5px] text-text">{ch.title}</span>
                {ch.kind !== "fn" && (
                  <span className="text-2xs font-mono px-1.5 py-0.5 rounded bg-surface3 text-muted">DOM</span>
                )}
                <span className={`text-2xs font-mono ${difficultyColor[ch.difficulty]}`}>
                  {ch.difficulty}
                </span>
                <span className="text-2xs font-mono text-faint w-14 text-right hidden sm:inline">
                  ~{ch.minutes} min
                </span>
                <span className="text-faint group-hover:text-text group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
