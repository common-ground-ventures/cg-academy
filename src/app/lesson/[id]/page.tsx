"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { getLessonById, getAllLessons } from "@/lib/curriculum";
import {
  getLessonProgress,
  updateLessonProgress,
  type LessonProgress,
} from "@/lib/progress";

export default function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const lesson = getLessonById(id);
  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex((l) => l.id === id);

  const [mounted, setMounted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [savedProgress, setSavedProgress] = useState<LessonProgress | null>(
    null
  );

  useEffect(() => {
    setMounted(true);
    if (lesson) {
      const lp = getLessonProgress(lesson.id);
      setSavedProgress(lp);
      if (lp?.quizAnswers && Object.keys(lp.quizAnswers).length > 0) {
        setAnswers(lp.quizAnswers);
        if (lp.completed) {
          setSubmitted(true);
          setScore(lp.quizScore);
          setShowQuiz(true);
        }
      }
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="px-6 sm:px-10 lg:px-16 py-20 text-center">
        <h1 className="text-[24px] font-bold">Lesson Not Found</h1>
        <Link
          href="/dashboard"
          className="text-[12px] font-semibold text-[var(--cg-gray-500)] hover:text-[var(--cg-black)] mt-4 inline-block"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;

  function selectAnswer(questionId: string, optionIndex: number) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }

  function submitQuiz() {
    if (!lesson) return;
    let correct = 0;
    lesson.quiz.forEach((q) => {
      if (answers[q.id] === q.correctIndex) correct++;
    });
    const pct = Math.round((correct / lesson.quiz.length) * 100);
    setScore(pct);
    setSubmitted(true);
    const updated = updateLessonProgress(lesson.id, pct, answers);
    setSavedProgress(updated.lessonsProgress[lesson.id]);
  }

  function retakeQuiz() {
    setAnswers({});
    setSubmitted(false);
    setScore(null);
  }

  const allAnswered = lesson.quiz.every((q) => answers[q.id] !== undefined);
  const passed = score !== null && score >= 70;

  const encouragements = [
    "Not bad for a guy who didn't know what LLM stood for a few weeks ago.",
    "Look at you, actually learning shit. Keep going.",
    "Damn, you're picking this up faster than most tech bros. Don't tell them I said that.",
    "Armstrong Construction didn't teach you THIS, did they?",
    "Your future self is going to buy your present self a beer for this.",
  ];

  const failMessages = [
    "Close but no cigar. Hit the content again and retake it. You'll get it.",
    "Not quite there yet. Re-read the lesson, don't just skim it this time.",
    "That score says 'I rushed through the reading.' Go back. Try again. You got this.",
    "Look, nobody said this was easy. But you're tougher than a quiz. Retake it.",
  ];

  return (
    <div className="max-w-[1100px] mx-auto px-[40px] py-[clamp(40px,6vw,48px)]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.1em] uppercase text-[var(--cg-gray-500)] mb-8">
        <Link href="/dashboard" className="hover:text-[var(--cg-black)]">
          Dashboard
        </Link>
        <span>/</span>
        <span>Week {lesson.weekNumber}</span>
        <span>/</span>
        <span className="text-[var(--cg-black)]">{lesson.title}</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-10">
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--cg-gray-500)] mb-2">
          Week {lesson.weekNumber}
        </p>
        <h1 className="text-[clamp(24px,5vw,40px)] font-extrabold tracking-[-0.03em] uppercase">
          {lesson.title}
        </h1>
        <p className="text-[14px] text-[var(--cg-gray-700)] mt-2">
          {lesson.subtitle}
        </p>
        {mounted && savedProgress?.completed && (
          <div className="mt-3 inline-block text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 bg-[var(--cg-black)] text-[var(--cg-white)]">
            Completed &middot; {savedProgress.quizScore}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-6 mb-12">
        {lesson.content.map((paragraph, i) => (
          <p
            key={i}
            className="text-[15px] leading-relaxed text-[var(--cg-black)] whitespace-pre-line"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Key Terms */}
      {lesson.keyTerms && lesson.keyTerms.length > 0 && (
        <div className="mb-12 border border-[var(--cg-gray-100)] p-6">
          <h3 className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--cg-gray-500)] mb-4">
            Key Terms
          </h3>
          <div className="space-y-4">
            {lesson.keyTerms.map((term, i) => (
              <div key={i}>
                <p className="text-[14px] font-bold text-[var(--cg-black)]">
                  {term.term}
                </p>
                <p className="text-[13px] text-[var(--cg-gray-700)] leading-relaxed">
                  {term.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tasks */}
      {lesson.tasks && lesson.tasks.length > 0 && (
        <div className="mb-12 bg-[var(--cg-gray-50)] p-6">
          <h3 className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--cg-gray-500)] mb-4">
            This Week&apos;s Tasks
          </h3>
          <ul className="space-y-3">
            {lesson.tasks.map((task, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[14px] text-[var(--cg-gray-700)]"
              >
                <span className="w-5 h-5 border border-[var(--cg-gray-300)] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Quiz Section */}
      <div className="border-t-2 border-[var(--cg-black)] pt-8">
        {!showQuiz ? (
          <div className="text-center py-8">
            <h3 className="text-[18px] font-bold uppercase tracking-wider mb-3">
              Ready to Prove It?
            </h3>
            <p className="text-[13px] text-[var(--cg-gray-500)] mb-6">
              {lesson.quiz.length} questions. 70% to pass. No bullshitting your
              way through.
            </p>
            <button
              onClick={() => setShowQuiz(true)}
              className="text-[11px] font-semibold tracking-[0.15em] uppercase px-10 py-4 bg-[var(--cg-black)] text-[var(--cg-white)] hover:bg-[var(--cg-gray-800)] transition-colors"
            >
              Take the Quiz
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-[14px] font-bold uppercase tracking-wider mb-6">
              Quiz &middot; {lesson.quiz.length} Questions
            </h3>

            <div className="space-y-8">
              {lesson.quiz.map((q, qi) => {
                const selected = answers[q.id];
                const isCorrect = submitted && selected === q.correctIndex;
                const isWrong =
                  submitted &&
                  selected !== undefined &&
                  selected !== q.correctIndex;

                return (
                  <div key={q.id} className="animate-in">
                    <p className="text-[15px] font-semibold mb-3">
                      <span className="text-[var(--cg-gray-300)] mr-2">
                        {qi + 1}.
                      </span>
                      {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((option, oi) => {
                        let className = "quiz-option";
                        if (submitted) {
                          if (oi === q.correctIndex) className += " correct";
                          else if (oi === selected && oi !== q.correctIndex)
                            className += " incorrect";
                        } else if (oi === selected) {
                          className += " selected";
                        }

                        return (
                          <button
                            key={oi}
                            onClick={() => selectAnswer(q.id, oi)}
                            disabled={submitted}
                            className={`${className} w-full text-left text-[14px]`}
                          >
                            <span className="font-semibold text-[var(--cg-gray-300)] mr-3">
                              {String.fromCharCode(65 + oi)}.
                            </span>
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {submitted && (
                      <div
                        className={`mt-3 p-3 text-[13px] leading-relaxed ${
                          isCorrect
                            ? "bg-[#f0faf0] text-[#2d6a2e]"
                            : isWrong
                            ? "bg-[#faf0f0] text-[#8b2020]"
                            : "bg-[var(--cg-gray-50)] text-[var(--cg-gray-700)]"
                        }`}
                      >
                        {isCorrect ? "Correct. " : isWrong ? "Wrong. " : ""}
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit / Results */}
            {!submitted ? (
              <div className="mt-8 text-center">
                <button
                  onClick={submitQuiz}
                  disabled={!allAnswered}
                  className={`text-[11px] font-semibold tracking-[0.15em] uppercase px-10 py-4 transition-colors ${
                    allAnswered
                      ? "bg-[var(--cg-black)] text-[var(--cg-white)] hover:bg-[var(--cg-gray-800)]"
                      : "bg-[var(--cg-gray-100)] text-[var(--cg-gray-500)] cursor-not-allowed"
                  }`}
                >
                  Submit Answers
                </button>
                {!allAnswered && (
                  <p className="text-[11px] text-[var(--cg-gray-500)] mt-2">
                    Answer all questions to submit
                  </p>
                )}
              </div>
            ) : (
              <div className="mt-10 text-center border-t border-[var(--cg-gray-100)] pt-8">
                <div
                  className={`w-28 h-28 rounded-full border-[6px] flex items-center justify-center mx-auto mb-4 ${
                    passed
                      ? "border-[var(--cg-black)]"
                      : "border-[#8b2020]"
                  }`}
                >
                  <span className="text-[32px] font-black">{score}%</span>
                </div>
                <p className="text-[16px] font-bold uppercase tracking-wider mb-2">
                  {passed ? "Passed" : "Not Quite"}
                </p>
                <p className="text-[13px] text-[var(--cg-gray-500)] max-w-md mx-auto mb-6">
                  {passed
                    ? encouragements[Math.floor(Math.random() * encouragements.length)]
                    : failMessages[Math.floor(Math.random() * failMessages.length)]}
                </p>
                <div className="flex justify-center gap-3">
                  {!passed && (
                    <button
                      onClick={retakeQuiz}
                      className="text-[11px] font-semibold tracking-[0.15em] uppercase px-8 py-3 bg-[var(--cg-black)] text-[var(--cg-white)] hover:bg-[var(--cg-gray-800)] transition-colors"
                    >
                      Retake Quiz
                    </button>
                  )}
                  {passed && nextLesson && (
                    <Link
                      href={`/lesson/${nextLesson.id}`}
                      className="text-[11px] font-semibold tracking-[0.15em] uppercase px-8 py-3 bg-[var(--cg-black)] text-[var(--cg-white)] hover:bg-[var(--cg-gray-800)] transition-colors"
                    >
                      Next Lesson
                    </Link>
                  )}
                  <Link
                    href="/dashboard"
                    className="text-[11px] font-semibold tracking-[0.15em] uppercase px-8 py-3 border-2 border-[var(--cg-black)] text-[var(--cg-black)] hover:bg-[var(--cg-black)] hover:text-[var(--cg-white)] transition-colors"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-[var(--cg-gray-100)] pt-6">
        {prevLesson ? (
          <Link
            href={`/lesson/${prevLesson.id}`}
            className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--cg-gray-500)] hover:text-[var(--cg-black)]"
          >
            &larr; {prevLesson.title}
          </Link>
        ) : (
          <div />
        )}
        {nextLesson ? (
          <Link
            href={`/lesson/${nextLesson.id}`}
            className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--cg-gray-500)] hover:text-[var(--cg-black)]"
          >
            {nextLesson.title} &rarr;
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
