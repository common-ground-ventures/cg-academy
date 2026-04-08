"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { curriculum, getAllLessons } from "@/lib/curriculum";
import { getOverallStats, getLessonProgress, getProgress } from "@/lib/progress";

export default function Dashboard() {
  const [stats, setStats] = useState({
    completed: 0,
    total: 0,
    percentage: 0,
    avgScore: 0,
    streak: 0,
    quizzesPassed: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const allLessons = getAllLessons();
    setStats(getOverallStats(allLessons.length));
  }, []);

  const allLessons = getAllLessons();
  const progress = mounted ? getProgress() : null;

  // Find next incomplete lesson
  const nextLesson = allLessons.find((l) => {
    const lp = mounted ? getLessonProgress(l.id) : null;
    return !lp || !lp.completed;
  });

  return (
    <div className="px-6 sm:px-10 lg:px-16 py-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--cg-gray-500)] mb-2">
          Dashboard
        </p>
        <h1 className="text-[clamp(28px,6vw,48px)] font-extrabold tracking-[-0.04em] uppercase">
          {mounted && stats.percentage > 0
            ? `${stats.percentage}% Complete`
            : "Let's Get After It"}
        </h1>
        {mounted && stats.streak > 0 && (
          <p className="text-[14px] font-bold text-[var(--cg-black)] mt-2">
            {stats.streak} day streak
          </p>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--cg-gray-500)] mb-2">
          <span>Progress</span>
          <span>
            {stats.completed} / {stats.total} lessons
          </span>
        </div>
        <div className="h-1 bg-[var(--cg-gray-100)] w-full">
          <div
            className="h-full bg-[var(--cg-black)] transition-all duration-500"
            style={{ width: `${stats.percentage}%` }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { label: "Lessons Done", value: stats.completed },
          { label: "Quizzes Passed", value: stats.quizzesPassed },
          { label: "Avg Score", value: stats.avgScore > 0 ? `${stats.avgScore}%` : "--" },
          { label: "Day Streak", value: stats.streak },
        ].map((s) => (
          <div
            key={s.label}
            className="border border-[var(--cg-gray-100)] p-6 text-center"
          >
            <div className="text-[28px] font-black text-[var(--cg-black)]">
              {mounted ? s.value : "--"}
            </div>
            <div className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[var(--cg-gray-500)] mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      {nextLesson && (
        <div className="mb-12 bg-[var(--cg-black)] p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--cg-gray-500)]">
              Up Next
            </p>
            <p className="text-[18px] font-bold text-[var(--cg-white)] mt-1">
              {nextLesson.title}
            </p>
            <p className="text-[12px] text-[var(--cg-gray-500)] mt-1">
              Week {nextLesson.weekNumber} &middot; {nextLesson.subtitle}
            </p>
          </div>
          <Link
            href={`/lesson/${nextLesson.id}`}
            className="text-[11px] font-semibold tracking-[0.15em] uppercase px-8 py-3 bg-[var(--cg-white)] text-[var(--cg-black)] hover:bg-[var(--cg-gray-100)] transition-colors whitespace-nowrap"
          >
            Continue
          </Link>
        </div>
      )}

      {/* Week-by-Week */}
      <div>
        <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--cg-gray-500)] mb-6">
          Curriculum
        </p>

        {curriculum.map((week) => {
          const weekLessons = week.lessons;
          const weekCompleted = mounted
            ? weekLessons.filter((l) => getLessonProgress(l.id)?.completed).length
            : 0;
          const weekTotal = weekLessons.length;

          return (
            <div key={week.number} className="mb-6">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-[32px] font-black text-[var(--cg-gray-100)]">
                  {String(week.number).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-[14px] font-bold uppercase tracking-wider">
                      {week.title}
                    </h3>
                    <span className="text-[10px] font-semibold text-[var(--cg-gray-500)] tracking-wider uppercase">
                      {weekCompleted}/{weekTotal}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--cg-gray-500)]">
                    Phase {week.phase}: {week.phaseTitle}
                  </p>
                </div>
              </div>

              <div className="grid gap-2 ml-12">
                {weekLessons.map((lesson) => {
                  const lp = mounted ? getLessonProgress(lesson.id) : null;
                  const isCompleted = lp?.completed;
                  const score = lp?.quizScore;

                  return (
                    <Link
                      key={lesson.id}
                      href={`/lesson/${lesson.id}`}
                      className={`block border p-4 transition-colors hover:border-[var(--cg-gray-300)] ${
                        isCompleted
                          ? "border-l-4 border-l-[var(--cg-black)] border-t-[var(--cg-gray-100)] border-r-[var(--cg-gray-100)] border-b-[var(--cg-gray-100)]"
                          : "border-[var(--cg-gray-100)]"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[13px] font-semibold">
                            {lesson.title}
                          </p>
                          <p className="text-[11px] text-[var(--cg-gray-500)]">
                            {lesson.subtitle}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          {score !== null && score !== undefined && (
                            <span
                              className={`text-[12px] font-bold ${
                                score >= 70
                                  ? "text-[#2d6a2e]"
                                  : "text-[#8b2020]"
                              }`}
                            >
                              {score}%
                            </span>
                          )}
                          {isCompleted && (
                            <span className="text-[11px] font-bold text-[var(--cg-black)]">
                              &#10003;
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
