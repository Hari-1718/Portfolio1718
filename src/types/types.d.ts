type ThemeColors =
  | "Zinc"
  | "Slate"
  | "Neutral"
  | "Gray"
  | "Stone"
  | "Red"
  | "Rose"
  | "Orange"
  | "Green"
  | "Blue"
  | "Yellow"
  | "Violet"
  | "Amber"
  | "Emerald"
  | "Teal"
  | "Cyan"
  | "Indigo"
  | "Pink"
  | "Lime"
  | "Fuchsia";


interface SubmissionDay {
  count: number;
  timestamp: string;
}

type MonthMatrix = (SubmissionDay | null)[][];
type SubmissionMap = Record<string, MonthMatrix>; // Key is "Month Year"

interface SubmissionStat {

  difficulty: Difficulty;
  count: number;
  submissions: number;
}

interface SubmissionStat {
  difficulty: "Easy" | "Medium" | "Hard";
  count: number;
  submissions: number;
}
interface CalendarData {
  totalActiveDays: number;
  streak: number;
  submissionCalendar: Record<string, number>;
}

interface LeetcodeStatsProps {
  stats: SubmissionStat[];
  totalQuestions: Record<"Easy" | "Medium" | "Hard", number>;
  totalAvailable: number;
  recentSubmissions: RecentSubmission[];
  calendar: Record<string, number>;
  streak: number;
  totalActiveDays: number;
}

type Difficulty = "Easy" | "Medium" | "Hard";

interface SubmissionStat {
  difficulty: Difficulty;
  count: number;
  submissions: number;
}

interface RecentSubmission {
  id: string;
  title: string;
  titleSlug: string;
  timestamp: string;
  statusDisplay: string;
  lang: string;
  url: string;
}

interface LeetCodeResponse {
  data: {
    matchedUser: {
      submitStatsGlobal: {
        acSubmissionNum: {
          difficulty: string;
          count: number;
          submissions: number;
        }[];
      };
      submissionCalendar: string;
      userCalendar?: {
        streak: number;
        totalActiveDays: number;
      };
      problemsSolvedBeatsStats: {
        difficulty: string;
        percentage: number;
      }[];
    };
    allQuestionsCount: {
      difficulty: string;
      count: number;
    }[];
  };
}

interface RecentSubmissionsResponse {
  data: {
    recentSubmissionList: {
      id: string;
      title: string;
      titleSlug: string;
      timestamp: string;
      statusDisplay: string;
      lang: string;
      url: string;
    }[];
  };
}

type ThemeMode = "dark" | "light" | "system";

interface ThemeColorStateParams {
  themeColor: ThemeColors;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>;
}

interface IProject {
  title: string;
  image: string;
  description: string;
  techstack: string[];
  github: string;
  preview: string;
  colab?: string;
  stars?: number;
  forks?: number;
}

interface ContactInfo {
  name: string;
  icon: React.ReactElement;
  href: string;
}
