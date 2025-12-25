"use client";

import React from "react";
import { motion } from "motion/react";

import PythonSvg from "@/components/icons/python.svg";
import MongoSvg from "@/components/icons/mongodb.svg";
import ReactSvg from "@/components/icons/react.svg";
import NodeSvg from "@/components/icons/node.svg";
import ExpressSvg from "@/components/icons/express.svg";
import GitHubSvg from "@/components/icons/github.svg";
import CSvg from "@/components/icons/c.svg";
import JavaSvg from "@/components/icons/java.svg";
import JavaScriptSvg from "@/components/icons/javascript.svg";
import TensorFlowSvg from "@/components/icons/tensorflow.svg";
import GitSvg from "@/components/icons/git.svg";
import RestApiSvg from "@/components/icons/restapi.svg";
import SectionBackground from "./SectionBackground";


type SkillImage = React.FC<React.SVGProps<SVGSVGElement>>;

// Skills I know
const skills: { name: string; image?: SkillImage }[] = [
  { name: "Python", image: PythonSvg },
  { name: "C", image: CSvg },
  { name: "Java", image: JavaSvg },
  { name: "JavaScript", image: JavaScriptSvg },
  { name: "React.js", image: ReactSvg },
  { name: "Node.js", image: NodeSvg },
  { name: "Express.js", image: ExpressSvg },
  { name: "MongoDB", image: MongoSvg },
  { name: "REST APIs", image: RestApiSvg },
  { name: "TensorFlow", image: TensorFlowSvg },
  { name: "NLP" },
  { name: "Generative AI" },
  { name: "Data Structures" },
  { name: "Algorithms" },
  { name: "OOP" },
  { name: "DBMS" },
  { name: "Git", image: GitSvg },
  { name: "GitHub", image: GitHubSvg },
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
        className="font-medium backdrop-blur-[1px] dark:bg-foreground/5 px-2 rounded-md text-base max-sm:text-sm text-foreground/70 text-center max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Technologies and tools I work with
      </motion.p>

      <motion.div
        className="max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap gap-3 pt-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-1 group hover:bg-primary/20 transition-colors duration-300 gap-x-4 bg-foreground/5 backdrop-blur-[2px] min-w-[10rem] justify-center items-center p-4 rounded-md"
              custom={idx}
              variants={skillCardVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill.image ? (
                <skill.image className="w-8 group-hover:rotate-[360deg] h-8 text-foreground transition-all ease-in-out duration-500" />
              ) : (
                <div className="w-8 h-8 rounded-md bg-foreground/3 flex items-center justify-center text-xs font-semibold text-foreground">{skill.name[0]}</div>
              )}
              <span className="font-semibold text-sm text-accent-foreground text-nowrap transition-transform duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
