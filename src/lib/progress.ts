// Progress tracking with localStorage persistence

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  quizScore: number | null; // percentage 0-100
  quizAnswers: Record<string, number>; // questionId -> selectedIndex
  completedAt: string | null; // ISO date
}

export interface UserProgress {
  name: string;
  startDate: string;
  lessonsProgress: Record<string, LessonProgress>;
  streak: number;
  lastActivityDate: string | null;
  totalQuizzesPassed: number;
}

const STORAGE_KEY = "cg-academy-progress";

const defaultProgress: UserProgress = {
  name: "Brandon",
  startDate: new Date().toISOString(),
  lessonsProgress: {},
  streak: 0,
  lastActivityDate: null,
  totalQuizzesPassed: 0,
};

export function getProgress(): UserProgress {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultProgress;
    return JSON.parse(stored);
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function updateLessonProgress(
  lessonId: string,
  quizScore: number,
  quizAnswers: Record<string, number>
): UserProgress {
  const progress = getProgress();
  const today = new Date().toISOString().split("T")[0];
  const lastDate = progress.lastActivityDate;

  // Calculate streak
  if (lastDate) {
    const last = new Date(lastDate);
    const now = new Date(today);
    const diffDays = Math.floor(
      (now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diffDays === 1) {
      progress.streak += 1;
    } else if (diffDays > 1) {
      progress.streak = 1;
    }
  } else {
    progress.streak = 1;
  }

  progress.lastActivityDate = today;

  const passed = quizScore >= 70;
  const existing = progress.lessonsProgress[lessonId];
  const wasPassed = existing?.quizScore !== null && (existing?.quizScore ?? 0) >= 70;

  progress.lessonsProgress[lessonId] = {
    lessonId,
    completed: passed,
    quizScore,
    quizAnswers,
    completedAt: passed ? new Date().toISOString() : null,
  };

  if (passed && !wasPassed) {
    progress.totalQuizzesPassed += 1;
  }

  saveProgress(progress);
  return progress;
}

export function getLessonProgress(lessonId: string): LessonProgress | null {
  const progress = getProgress();
  return progress.lessonsProgress[lessonId] || null;
}

export function getOverallStats(totalLessons: number) {
  const progress = getProgress();
  const completed = Object.values(progress.lessonsProgress).filter(
    (p) => p.completed
  ).length;
  const percentage = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
  const avgScore =
    Object.values(progress.lessonsProgress).filter((p) => p.quizScore !== null)
      .length > 0
      ? Math.round(
          Object.values(progress.lessonsProgress)
            .filter((p) => p.quizScore !== null)
            .reduce((sum, p) => sum + (p.quizScore ?? 0), 0) /
            Object.values(progress.lessonsProgress).filter(
              (p) => p.quizScore !== null
            ).length
        )
      : 0;

  return {
    completed,
    total: totalLessons,
    percentage,
    avgScore,
    streak: progress.streak,
    quizzesPassed: progress.totalQuizzesPassed,
  };
}

export function resetProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
