"use client";

import Link from "next/link";
import { curriculum } from "@/lib/curriculum";
import { useEffect, useState } from "react";
import { getLessonProgress } from "@/lib/progress";

export default function CurriculumPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const phases = [
    { num: 1, title: "Foundations", weeks: "Weeks 1-3", color: "var(--cg-black)" },
    { num: 2, title: "Applied Skills", weeks: "Weeks 4-6", color: "var(--cg-gray-700)" },
    { num: 3, title: "Automation & Business", weeks: "Weeks 7-9", color: "var(--cg-gray-700)" },
    { num: 4, title: "Certification & Mastery", weeks: "Weeks 10-12", color: "var(--cg-black)" },
  ];

  return (
    <div className="px-8 sm:px-12 lg:px-20 py-12 max-w-5xl mx-auto">
      <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--cg-gray-500)] mb-2">
        Full Curriculum
      </p>
      <h1 className="text-[clamp(28px,6vw,48px)] font-extrabold tracking-[-0.04em] uppercase mb-4">
        12 Weeks.{" "}
        <span className="text-[var(--cg-gray-300)]">Zero Filler.</span>
      </h1>
      <p className="text-[14px] text-[var(--cg-gray-700)] leading-relaxed max-w-2xl mb-12">
        Every lesson has real content, practical tasks, and a quiz to prove you
        actually learned something. No hand-holding, no participation trophies.
        Pass the quiz or do it again.
      </p>

      {phases.map((phase) => {
        const phaseWeeks = curriculum.filter((w) => w.phase === phase.num);

        return (
          <div key={phase.num} className="mb-16">
            {/* Phase Header */}
            <div className="flex items-baseline gap-4 mb-6 border-b-2 border-[var(--cg-black)] pb-4">
              <span className="text-[48px] font-black text-[var(--cg-gray-100)]">
                {String(phase.num).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-[18px] font-bold uppercase tracking-wider">
                  {phase.title}
                </h2>
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[var(--cg-gray-500)]">
                  {phase.weeks}
                </p>
              </div>
            </div>

            {/* Weeks */}
            {phaseWeeks.map((week) => (
              <div key={week.number} className="mb-8">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[13px] font-bold uppercase tracking-wider">
                    Week {week.number}: {week.title}
                  </span>
                  <span className="text-[11px] text-[var(--cg-gray-500)] italic">
                    {week.tagline}
                  </span>
                </div>

                <div className="grid gap-2">
                  {week.lessons.map((lesson) => {
                    const lp = mounted ? getLessonProgress(lesson.id) : null;
                    const completed = lp?.completed;
                    const score = lp?.quizScore;

                    return (
                      <Link
                        key={lesson.id}
                        href={`/lesson/${lesson.id}`}
                        className={`flex justify-between items-center border p-5 transition-colors hover:border-[var(--cg-gray-300)] ${
                          completed
                            ? "border-l-4 border-l-[var(--cg-black)] border-t-[var(--cg-gray-100)] border-r-[var(--cg-gray-100)] border-b-[var(--cg-gray-100)]"
                            : "border-[var(--cg-gray-100)]"
                        }`}
                      >
                        <div>
                          <p className="text-[14px] font-semibold">
                            {lesson.title}
                          </p>
                          <p className="text-[12px] text-[var(--cg-gray-500)] mt-0.5">
                            {lesson.subtitle} &middot; {lesson.quiz.length} quiz
                            questions
                          </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 ml-4">
                          {score !== null && score !== undefined && (
                            <span
                              className={`text-[13px] font-bold ${
                                score >= 70
                                  ? "text-[#2d6a2e]"
                                  : "text-[#8b2020]"
                              }`}
                            >
                              {score}%
                            </span>
                          )}
                          {completed ? (
                            <span className="w-6 h-6 bg-[var(--cg-black)] text-[var(--cg-white)] flex items-center justify-center text-[12px] font-bold">
                              &#10003;
                            </span>
                          ) : (
                            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--cg-gray-500)]">
                              Start
                            </span>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
