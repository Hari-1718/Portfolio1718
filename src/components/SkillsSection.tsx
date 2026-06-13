"use client";

import React from "react";
import { motion } from "motion/react";
import SectionBackground from "./SectionBackground";

type SkillGroup = {
  title: string;
  description: string;
  chips: string[];
  featured?: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces, component systems, and responsive UI work.",
    chips: ["Next.js 15", "React.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    featured: ["Next.js 15", "React.js", "TypeScript"],
  },
  {
    title: "Backend",
    description: "APIs, validation, routing, and database-backed services.",
    chips: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "Zod Validation", "SQL"],
    featured: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    title: "AI/ML",
    description: "Model integration, NLP, vision, and deep learning workflows.",
    chips: ["LangChain", "PyTorch", "TensorFlow", "Computer Vision", "Deep Learning", "Python"],
    featured: ["LangChain", "PyTorch", "TensorFlow"],
  },
  {
    title: "Tools",
    description: "Version control, delivery, and deployment support.",
    chips: ["Git", "GitHub", "Docker Basics", "Postman", "Vercel", "MySQL", "MongoDB"],
    featured: ["Git", "GitHub", "Vercel"],
  },
];

// Animation variant for individual skill cards
const skillCardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.4,
    },
  }),
};

const SkillsSection = () => {
  return (
    <section
      className="min-h-[calc(100vh-7rem)] @container overflow-hidden relative space-y-4 items-center py-12 snap-start w-full flex flex-col justify-center bg-[#DFDBE5] dark:bg-background"
      id="skills"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-primary"
        style={{
          maskImage: "url('/brick-wall/brick-wall.svg')",
          WebkitMaskImage: "url('/brick-wall/brick-wall.svg')",
          maskRepeat: "repeat",
          WebkitMaskRepeat: "repeat",
        }}
      />
      <SectionBackground text="SKILLS" />


      <motion.h1
        className="text-4xl text-center font-black max-sm:text-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>

      <motion.p
        className="font-medium backdrop-blur-[1px] dark:bg-foreground/5 px-3 py-2 rounded-md text-base max-sm:text-sm text-foreground/70 text-center max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Frontend, backend, AI/ML, and tools I use most often
      </motion.p>

      <motion.div
        className="w-full max-w-6xl px-4 pt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              className="rounded-2xl border border-foreground/10 bg-background/60 p-5 shadow-sm backdrop-blur-md"
              custom={idx}
              variants={skillCardVariant}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black text-foreground">{group.title}</h3>
                  <p className="mt-1 text-sm text-foreground/65">{group.description}</p>
                </div>
                <div className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Core
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.chips.map((skill) => {
                  const isFeatured = group.featured?.includes(skill);
                  return (
                    <span
                      key={skill}
                      className={
                        isFeatured
                          ? "rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm"
                          : "rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/80"
                      }
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
