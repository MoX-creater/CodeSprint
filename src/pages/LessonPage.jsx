import { useMemo, useRef, useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { getSection, getSubcategory } from "../data/challenges";
import { runSnippet } from "../lib/snippetRunner";
import { useProgress } from "../hooks/useProgress";

function CodeBlock({ code, onRun }) {
  const [output, setOutput] = useState(null);
  const [hasRun, setHasRun] = useState(false);

  function handleRun() {
    const res = runSnippet(code);
    setOutput(res);
    setHasRun(true);
    onRun();
  }

  return (
    <div className="border border-line rounded-lg overflow-hidden bg-ink my-4">
      <pre className="px-4 py-3 text-[13px] leading-[1.7] font-mono text-text overflow-x-auto">{code}</pre>
      <div className="flex items-center justify-between px-4 py-1.5 border-t border-line bg-surface2">
        <span className="text-2xs font-mono text-faint">JavaScript</span>
        <button
          onClick={handleRun}
          className="text-2xs font-mono px-2.5 py-1 rounded bg-accent hover:bg-accentDim text-white transition-colors"
        >
          Run Code
        </button>
      </div>
      <div className="px-4 py-3 min-h-[2.5rem] border-t border-line">
        {hasRun ? (
          output.error ? (
            <p className="text-[12.5px] font-mono text-bad">{output.error}</p>
          ) : output.lines.length === 0 ? (
            <p className="text-[12.5px] font-mono text-faint">(no output)</p>
          ) : (
            output.lines.map((line, i) => (
              <p key={i} className="text-[12.5px] font-mono text-text">{line}</p>
            ))
          )
        ) : (
          <p className="text-2xs font-mono text-faint">Run code example to continue!</p>
        )}
      </div>
    </div>
  );
}

function TextBlock({ bullets }) {
  return (
    <ul className="space-y-3 my-4">
      {bullets.map((b, i) => (
        <li key={i} className="text-[14.5px] text-muted leading-relaxed flex gap-2">
          <span className="text-faint mt-1.5 shrink-0">•</span>
          <span dangerouslySetInnerHTML={{ __html: formatInline(b) }} />
        </li>
      ))}
    </ul>
  );
}

function formatInline(text) {
  // `code` -> styled inline code span
  return text.replace(
    /`([^`]+)`/g,
    '<span class="px-1 py-0.5 rounded bg-surface3 text-text font-mono text-[13px]">$1</span>'
  );
}

function McqBlock({ prompt, code, options, explanation, onAnswered }) {
  const [selected, setSelected] = useState(null);

  function handleSelect(i) {
    if (selected !== null) return;
    setSelected(i);
    onAnswered();
  }

  return (
    <div className="my-4">
      <p className="text-[14.5px] text-text font-medium mb-3">{prompt}</p>
      {code && (
        <pre className="px-4 py-3 mb-3 text-[13px] leading-[1.7] font-mono text-text bg-ink border border-line rounded-lg overflow-x-auto">
          {code}
        </pre>
      )}
      <div className="space-y-2">
        {options.map((opt, i) => {
          const isSelected = selected === i;
          const showCorrect = selected !== null && opt.correct;
          const showWrong = isSelected && !opt.correct;
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md border text-left text-[13px] font-mono transition-colors
                ${
                  showCorrect
                    ? "border-good bg-good/10 text-good"
                    : showWrong
                    ? "border-bad bg-bad/10 text-bad"
                    : "border-line bg-surface2 text-muted hover:border-faint"
                }`}
            >
              <span
                className={`shrink-0 w-4 h-4 rounded border flex items-center justify-center text-2xs
                ${
                  showCorrect
                    ? "border-good bg-good text-ink"
                    : showWrong
                    ? "border-bad bg-bad text-ink"
                    : "border-faint"
                }`}
              >
                {showCorrect ? "✓" : showWrong ? "✗" : ""}
              </span>
              <span className="whitespace-pre-line">{opt.text}</span>
            </button>
          );
        })}
      </div>
      {selected !== null && explanation && (
        <p className="mt-3 text-[13px] text-muted leading-relaxed">{explanation}</p>
      )}
    </div>
  );
}

export default function LessonPage() {
  const { sectionSlug, subSlug } = useParams();
  const navigate = useNavigate();
  const { markComplete, isComplete } = useProgress();

  const section = getSection(sectionSlug);
  const sub = getSubcategory(sectionSlug, subSlug);
  const lesson = sub?.lesson;

  const [visibleCount, setVisibleCount] = useState(1);
  const [stepSatisfied, setStepSatisfied] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    // reset "satisfied" state when moving to a new step, unless the new
    // step is a plain text block (no interaction required)
    const step = lesson?.steps[visibleCount - 1];
    setStepSatisfied(!step || step.type === "text");
  }, [visibleCount, lesson]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [visibleCount]);

  const progressPct = useMemo(() => {
    if (!lesson) return 0;
    return Math.round((visibleCount / lesson.steps.length) * 100);
  }, [visibleCount, lesson]);

  if (!section || !sub || !lesson) return <Navigate to="/" replace />;

  const isLastStep = visibleCount >= lesson.steps.length;
  const done = isComplete(lesson.id);

  function handleContinue() {
    if (isLastStep) {
      markComplete(lesson.id);
      const firstChallenge = sub.challenges[0];
      navigate(
        firstChallenge
          ? `/section/${sectionSlug}/${subSlug}/${firstChallenge.id}`
          : `/section/${sectionSlug}/${subSlug}`
      );
      return;
    }
    setVisibleCount((v) => v + 1);
  }

  return (
    <div className="fixed inset-0 z-50 bg-ink flex flex-col">
      <div className="h-1 bg-surface2">
        <div className="h-full bg-warn transition-[width] duration-300" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="flex items-center justify-between px-6 py-4 border-b border-line">
        <div>
          <p className="text-2xs font-mono text-faint">
            <Link to="/" className="hover:text-muted">Home</Link> {" › "}
            <Link to={`/section/${sectionSlug}`} className="hover:text-muted">{section.title}</Link> {" › "}
            <Link to={`/section/${sectionSlug}/${subSlug}`} className="hover:text-muted">{sub.title}</Link>
          </p>
          <h1 className="text-lg font-semibold text-warn mt-0.5">{lesson.title}</h1>
        </div>
        <Link
          to={`/section/${sectionSlug}/${subSlug}`}
          className="w-8 h-8 flex items-center justify-center rounded-md text-faint hover:text-text hover:bg-surface2 transition-colors"
          aria-label="Close lesson"
        >
          ✕
        </Link>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-6 py-8">
          {done && (
            <p className="text-2xs font-mono text-good mb-4">
              ✓ You've already completed this lesson — feel free to review it.
            </p>
          )}
          {lesson.steps.slice(0, visibleCount).map((step, i) => {
            const isCurrent = i === visibleCount - 1;
            if (step.type === "text") return <TextBlock key={i} bullets={step.bullets} />;
            if (step.type === "code")
              return (
                <CodeBlock
                  key={i}
                  code={step.code}
                  onRun={() => isCurrent && setStepSatisfied(true)}
                />
              );
            if (step.type === "mcq")
              return (
                <McqBlock
                  key={i}
                  prompt={step.prompt}
                  code={step.code}
                  options={step.options}
                  explanation={step.explanation}
                  onAnswered={() => isCurrent && setStepSatisfied(true)}
                />
              );
            return null;
          })}
        </div>
      </div>

      <div className="border-t border-line px-6 py-4 flex justify-end">
        <button
          onClick={handleContinue}
          disabled={!stepSatisfied}
          className="px-5 py-2 rounded-md bg-warn hover:brightness-110 text-ink text-sm font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isLastStep ? "Finish lesson" : "Continue"}
        </button>
      </div>
    </div>
  );
}
