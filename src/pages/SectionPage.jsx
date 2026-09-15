import { Link, Navigate, useParams } from "react-router-dom";
import { sections, getSection } from "../data/challenges";
import { useProgress } from "../hooks/useProgress";
import ProgressBar from "../components/ProgressBar";

export default function SectionPage() {
  const { sectionSlug } = useParams();
  const { subStats, sectionStats, isComplete } = useProgress();
  const section = getSection(sectionSlug);

  if (!section) return <Navigate to="/" replace />;
  const stats = sectionStats(sectionSlug);

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-10 py-10 lg:py-14">
      <Link to="/" className="text-2xs font-mono text-faint hover:text-muted transition-colors">
        ← all sections
      </Link>

      <div className="mt-4 mb-8">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-sm" style={{ background: section.accent }} />
          <h1 className="text-2xl font-semibold text-text tracking-tight">{section.title}</h1>
        </div>
        <p className="mt-2 text-[15px] text-muted">{section.blurb}</p>

        <div className="mt-5 max-w-xs">
          <div className="flex justify-between text-2xs font-mono text-faint mb-1.5">
            <span>{stats.done} of {stats.total} solved</span>
            <span>{stats.pct}%</span>
          </div>
          <ProgressBar pct={stats.pct} color={section.accent} />
        </div>
      </div>

      <div className="relative">
        {section.subcategories.map((sub, i) => {
          const subStat = subStats(section.slug, sub.slug);
          const done = subStat.done === subStat.total && subStat.total > 0;
          const isLast = i === section.subcategories.length - 1;
          const lessonPending = sub.lesson && !isComplete(sub.lesson.id);
          const firstUnsolved = sub.challenges.find((c) => !isComplete(c.id)) || sub.challenges[0];
          const startHref = lessonPending
            ? `/section/${section.slug}/${sub.slug}/lesson`
            : firstUnsolved
            ? `/section/${section.slug}/${sub.slug}/${firstUnsolved.id}`
            : `/section/${section.slug}/${sub.slug}`;

          return (
            <div key={sub.slug} className="relative flex gap-4 pb-5">
              {!isLast && (
                <span className="absolute left-[15px] top-9 bottom-0 w-px bg-line" />
              )}
              <div
                className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-2xs font-mono z-10 bg-surface
                ${done ? "border-good text-good" : "border-line text-faint"}`}
              >
                {subStat.done}/{subStat.total}
              </div>

              <Link
                to={startHref}
                className="flex-1 border border-line rounded-lg px-4 py-3.5 hover:bg-surface2/60 transition-colors bg-surface group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[14.5px] font-medium text-text">{sub.title}</h3>
                  <span className="text-faint group-hover:text-text group-hover:translate-x-0.5 transition-all">
                    →
                  </span>
                </div>
                <p className="text-[13px] text-muted mt-1">{sub.blurb}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
