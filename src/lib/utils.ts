import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type CalendarData = Record<string, number>;

export interface SubmissionDay {
  count: number;
  timestamp: string;
}

export type MonthMatrix = (SubmissionDay | null)[][];
export type SubmissionMap = Record<string, MonthMatrix>;

export function buildSubmissionCalendar(calendar: CalendarData): SubmissionMap {
  const result: SubmissionMap = {};
  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  // Group by month
  const groupedByMonth: Record<string, { day: number; count: number; timestamp: string }[]> = {};

  Object.entries(calendar).forEach(([timestamp, count]) => {
    const date = new Date(parseInt(timestamp) * 1000);
    if (date < oneYearAgo) return;

    const monthKey = date.toLocaleString("default", { month: "short", year: "numeric" });
    if (!groupedByMonth[monthKey]) {
      groupedByMonth[monthKey] = [];
    }
    groupedByMonth[monthKey].push({
      day: date.getDate(),
      count,
      timestamp,
    });
  });

  // Sort months chronologically
  const monthKeys = Object.keys(groupedByMonth).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
  });

  monthKeys.forEach((monthKey) => {
    const submissions = groupedByMonth[monthKey];
    const date = new Date(submissions[0].timestamp ? parseInt(submissions[0].timestamp) * 1000 : Date.now());
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const matrix: MonthMatrix = [];
    let week: (SubmissionDay | null)[] = Array(firstDayOfMonth).fill(null);

    for (let day = 1; day <= daysInMonth; day++) {
      const submission = submissions.find(s => s.day === day);
      // We might not have a submission for every day, but we need to fill the grid.
      // However, the calendar provided by LeetCode usually assumes sparsely populated if using a raw timestamp map.
      // Actually, the input `calendar` is usually a map of timestamp -> count.
      // We need to re-construct missing days if we want a full calendar.
      // But wait, the friend's code iterates through `monthMatrix.map` and renders items.
      // Let's create a dense matrix for the month.

      const currentDayParams = submission ? { count: submission.count, timestamp: submission.timestamp } : { count: 0, timestamp: (new Date(date.getFullYear(), date.getMonth(), day).getTime() / 1000).toString() };

      week.push(currentDayParams);

      if (week.length === 7) {
        matrix.push(week);
        week = [];
      }
    }

    if (week.length > 0) {
      while (week.length < 7) week.push(null);
      matrix.push(week);
    }

    result[monthKey] = matrix;
  });

  return result;
}