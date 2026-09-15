import { useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { getSection, getSubcategory, getChallenge } from "../data/challenges";
import { runChallenge, formatArgs } from "../lib/runner";
import { useProgress } from "../hooks/useProgress";

const difficultyColor = {
  Easy: "text-good",
  Medium: "text-warn",
  Hard: "text-bad",
};

export default function ChallengePage() {
  const { sectionSlug, subSlug, id } = useParams();
  const navigate = useNavigate();
  const { isComplete, markComplete } = useProgress();

  const section = getSection(sectionSlug);
  const sub = getSubcategory(sectionSlug, subSlug);
  const challenge = getChallenge(sectionSlug, subSlug, id);

  const [code, setCode] = useState(challenge?.starter ?? "");
  const [result, setResult] = useState(null);
  const [running, setRunning] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    setCode(challenge?.starter ?? "");
    setResult(null);
  }, [challenge?.id]);

  const { prevChallenge, nextChallenge, position } = useMemo(() => {
    if (!sub) return { prevChallenge: null, nextChallenge: null, position: 0 };
    const list = sub.challenges;
    const idx = list.findIndex((c) => c.id === id);
    return {
      prevChallenge: idx > 0 ? list[idx - 1] : null,
      nextChallenge: idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null,
      position: idx + 1,
    };
  }, [sub, id]);

  if (!section || !sub || !challenge) return <Navigate to="/" replace />;

  async function handleRun() {
    setRunning(true);
    try {
      const res = await runChallenge(code, challenge);
      setResult(res);
      if (res.passed) markComplete(challenge.id);
    } finally {
      setRunning(false);
    }
  }

  function handleTab(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      const el = textareaRef.current;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const newCode = code.slice(0, start) + "  " + code.slice(end);
      setCode(newCode);
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = start + 2;
      });
    }
  }

  const done = isComplete(challenge.id);
  const isDom = challenge.kind === "domRead" || challenge.kind === "domMutate";

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-10 py-8 lg:py-10">
      <div className="flex items-center gap-2 text-2xs font-mono text-faint mb-5 flex-wrap">
        <Link to="/" className="hover:text-muted transition-colors">tracks</Link>
        <span>/</span>
        <Link to={`/section/${sectionSlug}`} className="hover:text-muted transition-colors">{section.title}</Link>
        <span>/</span>
        <Link to={`/section/${sectionSlug}/${subSlug}`} className="hover:text-muted transition-colors">{sub.title}</Link>
        <span>/</span>
        <span className="text-muted">{position} of {sub.challenges.length}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {/* Problem panel */}
        <div className="lg:sticky lg:top-6">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-xl font-semibold text-text tracking-tight">{challenge.title}</h1>
            {done && <span className="text-good text-sm">✓</span>}
          </div>
          <div className="flex items-center gap-3 mb-5 text-2xs font-mono">
            <span className={difficultyColor[challenge.difficulty]}>{challenge.difficulty}</span>
            <span className="text-faint">~{challenge.minutes} min</span>
            {isDom && <span className="px-1.5 py-0.5 rounded bg-surface3 text-muted">DOM</span>}
          </div>

          <p className="text-[14.5px] text-muted leading-relaxed mb-6">{challenge.prompt}</p>

          {isDom && challenge.setupHTML && (
            <div className="border border-line rounded-lg overflow-hidden bg-surface mb-4">
              <div className="px-4 py-2.5 border-b border-line bg-surface2">
                <span className="text-2xs font-mono text-faint uppercase tracking-wider">Starting HTML</span>
              </div>
              <pre className="px-4 py-3 text-[12.5px] leading-[1.7] font-mono text-muted overflow-x-auto">
{challenge.setupHTML}
              </pre>
            </div>
          )}

          <div className="border border-line rounded-lg overflow-hidden bg-surface">
            <div className="px-4 py-2.5 border-b border-line bg-surface2">
              <span className="text-2xs font-mono text-faint uppercase tracking-wider">
                {challenge.kind === "domMutate" ? "Requirements" : "Examples"}
              </span>
            </div>
            <ul className="divide-y divide-line">
              {challenge.kind === "domMutate"
                ? challenge.tests.map((t, i) => (
                    <li key={i} className="px-4 py-2.5 font-mono text-[12.5px] text-muted">
                      {t.description}
                    </li>
                  ))
                : challenge.tests.map((t, i) => (
                    <li key={i} className="px-4 py-2.5 font-mono text-[12.5px] text-muted">
                      {challenge.kind === "domRead"
                        ? "solve(container)"
                        : `solve(${formatArgs(t.args)})`}{" "}
                      <span className="text-faint">→</span>{" "}
                      <span className="text-text">{JSON.stringify(t.expected)}</span>
                    </li>
                  ))}
            </ul>
          </div>

          <div className="mt-6 flex items-center gap-3">
            {prevChallenge ? (
              <button
                onClick={() => navigate(`/section/${sectionSlug}/${subSlug}/${prevChallenge.id}`)}
                className="text-2xs font-mono text-faint hover:text-muted transition-colors"
              >
                ← previous
              </button>
            ) : <span />}
          </div>
        </div>

        {/* Editor panel */}
        <div>
          <div className="border border-line rounded-lg overflow-hidden bg-surface flex flex-col">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-line bg-surface2">
              <span className="text-2xs font-mono text-faint">{challenge.id}.js</span>
              <button
                onClick={() => setCode(challenge.starter)}
                className="text-2xs font-mono text-faint hover:text-muted transition-colors"
              >
                reset
              </button>
            </div>
            <textarea
              ref={textareaRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleTab}
              spellCheck={false}
              className="w-full h-64 resize-y px-4 py-4 bg-transparent text-[13.5px] leading-[1.7] font-mono font-mono-code text-text outline-none"
            />
            <div className="px-4 py-3 border-t border-line flex items-center justify-between">
              <button
                onClick={handleRun}
                disabled={running}
                className="px-4 py-1.5 rounded-md bg-accent hover:bg-accentDim text-white text-sm font-medium transition-colors disabled:opacity-60"
              >
                {running ? "Running…" : "Run tests"}
              </button>
              {result && (
                <span className={`text-2xs font-mono ${result.passed ? "text-good" : "text-bad"}`}>
                  {result.passed
                    ? "all tests passed"
                    : `${result.results.filter((r) => r.pass).length}/${result.results.length} passed`}
                </span>
              )}
            </div>
          </div>

          {/* Console output */}
          {result && (
            <div className="mt-4 border border-line rounded-lg overflow-hidden bg-surface">
              <div className="px-4 py-2.5 border-b border-line bg-surface2">
                <span className="text-2xs font-mono text-faint uppercase tracking-wider">Console</span>
              </div>

              {result.compileError ? (
                <div className="px-4 py-3 font-mono text-[12.5px] text-bad">
                  {result.compileError}
                </div>
              ) : (
                <ul className="divide-y divide-line">
                  {result.results.map((r) => (
                    <li key={r.index} className="px-4 py-2.5 font-mono text-[12.5px]">
                      <div className="flex items-start gap-2">
                        <span className={r.pass ? "text-good" : "text-bad"}>{r.pass ? "✓" : "✗"}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-muted">{r.label}</div>
                          {!r.pass && (
                            <div className="mt-1 text-2xs text-faint">
                              {r.error ? (
                                <span className="text-bad">threw: {r.error}</span>
                              ) : r.expectedDisplay !== null ? (
                                <>expected <span className="text-text">{r.expectedDisplay}</span>, got{" "}
                                <span className="text-bad">{r.actualDisplay}</span></>
                              ) : (
                                <span className="text-bad">requirement not met</span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {result.passed && (
                <div className="px-4 py-3.5 border-t border-line flex items-center justify-between bg-good/5">
                  <span className="text-[13px] text-good">Nice — every test passed.</span>
                  {nextChallenge ? (
                    <button
                      onClick={() => navigate(`/section/${sectionSlug}/${subSlug}/${nextChallenge.id}`)}
                      className="text-2xs font-mono text-good hover:underline"
                    >
                      next drill →
                    </button>
                  ) : (
                    <Link to={`/section/${sectionSlug}`} className="text-2xs font-mono text-good hover:underline">
                      back to section →
                    </Link>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
