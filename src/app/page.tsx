import HomeSection from '@/components/HomeSection'
export const dynamic = 'force-dynamic'
import SkillsSection from '@/components/SkillsSection'
import AboutMe from '@/components/AboutMe'
import React from 'react'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import { fetchLeetCodeData } from '@/actions/actions'

// Main page component
const Home = async () => {
  let stats: SubmissionStat[] = [];
  let recentSubmissions: RecentSubmission[] = [];
  let totalAvailable = 0;
  let totalQuestions: Record<Difficulty, number> = {
    Easy: 0,
    Medium: 0,
    Hard: 0,
  };
  let calendarData: CalendarData = {
    totalActiveDays: 0,
    streak: 0,
    submissionCalendar: {},
  };

  try {
    const data = await fetchLeetCodeData('Hari1718');
    stats = data.stats;
    recentSubmissions = data.recentSubmissions;
    totalAvailable = data.totalAvailable;
    totalQuestions = data.totalQuestions;
    calendarData = data.calendarData;
  } catch (error) {
    console.error('Failed to fetch LeetCode data:', error);
    // Keep defaults if fetch fails
  }

  return (
    <div className='flex flex-col w-full items-center snap-y snap-proximity justify-center'>
      <HomeSection />
      <AboutMe
        stats={stats}
        recentSubmissions={recentSubmissions}
        totalAvailable={totalAvailable}
        totalQuestions={totalQuestions}
        calendarData={calendarData}
      />
      <SkillsSection />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  )
}

export default Home