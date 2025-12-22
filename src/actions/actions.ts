'use server';

export async function fetchLeetCodeStats(username: string): Promise<{
  stats: SubmissionStat[];
  totalQuestions: Record<Difficulty, number>;
  totalAvailable: number;
  calendarData: CalendarData;
}> {
  const query = `
    query userProblemsSolved($username: String!) {
      matchedUser(username: $username) {
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        submissionCalendar
        userCalendar {
          streak
          totalActiveDays
        }
        problemsSolvedBeatsStats {
          difficulty
          percentage
        }
      }
      allQuestionsCount {
        difficulty
        count
      }
    }
  `;

  const variables = { username };

  const response = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 0 }, // Disable cache for real-time updates
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch LeetCode data for ${username}`);
  }

  const json: LeetCodeResponse = await response.json();

  const rawStats = json.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum ?? [];
  const allQuestions = json.data?.allQuestionsCount ?? [];
  const submissionCalendarStr = json.data?.matchedUser?.submissionCalendar ?? '{}';
  const submissionCalendar = JSON.parse(submissionCalendarStr);

  // Calculate streak and active days manually
  const timestamps = Object.keys(submissionCalendar).map(Number).sort((a, b) => b - a);
  const totalActiveDays = timestamps.length;

  let streak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  // Check if we have a submission today or yesterday to start the streak
  const currentCheck = new Date(today);

  // Optimized streak calculation
  // Convert all timestamps to day strings/timestamps at midnight for easier comparison
  const activeDates = new Set(
    timestamps.map(ts => {
      const d = new Date(ts * 1000); // python timestamp is seconds
      d.setHours(0, 0, 0, 0);
      return d.getTime();
    })
  );

  // If user submitted today, streak starts today. If not, check yesterday.
  if (activeDates.has(today.getTime())) {
    streak = 1;
    currentCheck.setDate(currentCheck.getDate() - 1);
  } else if (activeDates.has(yesterday.getTime())) {
    streak = 1;
    currentCheck.setDate(currentCheck.getDate() - 2); // Start checking from day before yesterday
  } else {
    streak = 0;
  }

  if (streak > 0) {
    while (activeDates.has(currentCheck.getTime())) {
      streak++;
      currentCheck.setDate(currentCheck.getDate() - 1);
    }
  }

  // Process user stats
  const filtered: SubmissionStat[] = rawStats
    .filter((s) => ['Easy', 'Medium', 'Hard'].includes(s.difficulty))
    .sort((a, b) => {
      const order: Record<Difficulty, number> = { Easy: 1, Medium: 2, Hard: 3 };
      return order[a.difficulty as Difficulty] - order[b.difficulty as Difficulty];
    }) as SubmissionStat[];

  // Process total questions available
  const totalQuestions: Record<Difficulty, number> = {
    Easy: 0,
    Medium: 0,
    Hard: 0,
  };

  allQuestions
    .filter((q) => ['Easy', 'Medium', 'Hard'].includes(q.difficulty))
    .forEach((q) => {
      totalQuestions[q.difficulty as Difficulty] = q.count;
    });

  const totalAvailable = Object.values(totalQuestions).reduce((sum, count) => sum + count, 0);

  return {
    stats: filtered,
    totalQuestions,
    totalAvailable,
    calendarData: {
      totalActiveDays,
      streak,
      submissionCalendar,
    },
  };
}

export async function fetchRecentSubmissions(username: string, limit: number = 20): Promise<RecentSubmission[]> {
  const query = `
    query recentSubmissions($username: String!, $limit: Int!) {
      recentSubmissionList(username: $username, limit: $limit) {
        id
        title
        titleSlug
        timestamp
        statusDisplay
        lang
        url
      }
    }
  `;

  const variables = { username, limit };

  const response = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 0 }, // Disable cache for real-time updates
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch recent submissions for ${username}`);
  }

  const json: RecentSubmissionsResponse = await response.json();

  return json.data?.recentSubmissionList ?? [];
}

export async function fetchLeetCodeData(username: string): Promise<{
  stats: SubmissionStat[];
  totalQuestions: Record<Difficulty, number>;
  totalAvailable: number;
  recentSubmissions: RecentSubmission[];
  calendarData: CalendarData;
}> {
  try {
    const [statsData, recentSubmissions] = await Promise.all([
      fetchLeetCodeStats(username),
      fetchRecentSubmissions(username, 10)
    ]);

    return {
      ...statsData,
      recentSubmissions,
    };
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    throw error;
  }
}