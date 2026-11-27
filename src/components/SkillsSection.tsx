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
      className="relative flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center space-y-4 overflow-hidden py-20 snap-start"
      id="skills"
    >
      <SectionBackground text="SKILLS" />


      <motion.h1
        className="relative z-10 text-center text-4xl font-semibold tracking-tight max-sm:text-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>

      <motion.p
        className="relative z-10 max-w-4xl rounded-md px-3 py-2 text-center text-base text-muted-foreground max-sm:text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Frontend, backend, AI/ML, and tools I use most often
      </motion.p>

      <motion.div
        className="relative z-10 w-full max-w-6xl px-6 pt-4 sm:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              custom={idx}
              variants={skillCardVariant}
            >
              <div className="flex items-start gap-3">
                <span className="pt-1 text-xs font-semibold tracking-widest text-primary">0{idx + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{group.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{group.description}</p>
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
                          ? "rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                          : "rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
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
