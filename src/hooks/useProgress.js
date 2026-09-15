import { useCallback, useEffect, useState } from "react";
import { sections, allChallengesFlat } from "../data/challenges";
import { useAuth } from "./useAuth";

function storageKey(user) {
  return `codesprint:progress:${user || "guest"}`;
}

function loadProgress(user) {
  try {
    const raw = localStorage.getItem(storageKey(user));
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function useProgress() {
  const { user } = useAuth();
  const [completed, setCompleted] = useState(() => loadProgress(user));

  // reload when the signed-in user changes (login/logout)
  useEffect(() => {
    setCompleted(loadProgress(user));
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey(user), JSON.stringify(completed));
    } catch {
      // storage unavailable (private browsing, quota, etc.) — fail silently
    }
  }, [completed, user]);

  const markComplete = useCallback((itemId) => {
    setCompleted((prev) => (prev[itemId] ? prev : { ...prev, [itemId]: true }));
  }, []);

  const resetProgress = useCallback(() => setCompleted({}), []);

  const isComplete = useCallback((itemId) => !!completed[itemId], [completed]);

  const subStats = useCallback(
    (sectionSlug, subSlug) => {
      const section = sections.find((s) => s.slug === sectionSlug);
      const sub = section?.subcategories.find((c) => c.slug === subSlug);
      const list = sub?.challenges || [];
      const lessonId = sub?.lesson?.id;
      const total = list.length + (lessonId ? 1 : 0);
      const done =
        list.filter((c) => completed[c.id]).length + (lessonId && completed[lessonId] ? 1 : 0);
      return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
    },
    [completed]
  );

  const sectionStats = useCallback(
    (sectionSlug) => {
      const section = sections.find((s) => s.slug === sectionSlug);
      if (!section) return { done: 0, total: 0, pct: 0 };
      let done = 0;
      let total = 0;
      for (const sub of section.subcategories) {
        const s = subStats(sectionSlug, sub.slug);
        done += s.done;
        total += s.total;
      }
      return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
    },
    [subStats]
  );

  const overallStats = useCallback(() => {
    const all = allChallengesFlat();
    const lessonIds = sections.flatMap((s) => s.subcategories.map((sub) => sub.lesson?.id).filter(Boolean));
    const total = all.length + lessonIds.length;
    const done = all.filter((c) => completed[c.id]).length + lessonIds.filter((id) => completed[id]).length;
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
  }, [completed]);

  return { completed, markComplete, resetProgress, isComplete, subStats, sectionStats, overallStats };
}
