'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { ContainerTextFlip } from './ui/container-text-flip'
import { ProfileLens } from './ProfileLens'
import LeetcodeStats from './LeetcodeStats'
import SectionBackground from './SectionBackground'


// About me section with profile image and bio
const AboutMe = ({
  stats,
  totalAvailable,
  totalQuestions,
  recentSubmissions,
  calendarData
}: {
  stats: SubmissionStat[],
  totalAvailable: number,
  totalQuestions: Record<Difficulty, number>,
  recentSubmissions: RecentSubmission[],
  calendarData?: CalendarData
}) => {
  // Animation variants for container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      },
    }
  }

  // Animation for individual items
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section id="about-me" className="w-full relative py-14 snap-center min-h-screen flex items-center justify-center">
      <SectionBackground text="ABOUT ME" className="opacity-10" />

      <motion.div
        className="flex flex-col md:flex-row items-center justify-between max-sm:justify-center gap-8 max-sm:gap-2 max-w-4xl w-full px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex-shrink-0 relative w-[300px] h-[300px] max-sm:w-[250px] max-sm:h-[250px] flex items-center justify-center">
          <ProfileLens />
        </div>

        <motion.div
          className="space-y-4 max-md:px-4 text-center md:text-left w-full"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl max-sm:text-3xl font-bold tracking-tight"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            Hari Prasad Chinimilli
          </motion.h1>
          <motion.p
            className="text-base font-medium text-primary/80"
            variants={itemVariants}
          >
            GenAI & Full Stack Developer
          </motion.p>

          <motion.p
            className="max-sm:text-sm"
            variants={itemVariants}
          >
            Passionate GenAI & Full Stack Developer building intelligent web solutions. Experienced in developing MERN applications and AI/ML systems, including recommendation engines, NLP chatbots, and analytics platforms.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className='w-full flex items-center max-sm:flex-col gap-8 justify-between'
          >
            <ContainerTextFlip className='h-fit'
              words={['Creative', 'Passionate', 'Tech-Savvy', 'Problem Solver', 'Adaptable']}
            />
            <LeetcodeStats
              stats={stats}
              recentSubmissions={recentSubmissions}
              totalAvailable={totalAvailable}
              totalQuestions={totalQuestions}
              calendar={calendarData?.submissionCalendar || {}}
              streak={calendarData?.streak || 0}
              totalActiveDays={calendarData?.totalActiveDays || 0}
            />
          </motion.div>



          <motion.p
            className="text-xl pt-8 font-bold font-dancing-script"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
                scale: 0.9
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 1,
                  delay: 0.2
                }
              }
            } as Variants}
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgba(0,0,0,0.3)",
              transition: { duration: 0.2 }
            }}
          >
            &quot; Innovation distinguishes between a leader and a follower. &quot;
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutMe