"use client";

import React from "react";
import { motion } from "motion/react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const HomeSection = () => {
  const headingWords = "GenAI & Full Stack Developer".split(" ");

  return (
    <div className="w-full relative min-h-screen bg-[#DFDBE5] dark:bg-background">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none bg-primary"
        style={{
          maskImage: "url('/topography/topography.svg')",
          WebkitMaskImage: "url('/topography/topography.svg')",
          maskRepeat: "repeat",
          WebkitMaskRepeat: "repeat",
        }}
      />
      <section
        id="home"
        className="flex snap-start flex-col h-screen items-center justify-center"
      >
        <div className="max-w-4xl space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl font-black max-sm:text-4xl transition-all duration-300">
              {headingWords.map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-4 max-sm:mr-2 opacity-0 -translate-y-4 hover:scale-110 transition-all duration-300 cursor-default animate-[fadeInDown_0.6s_ease-out_forwards]"
                  style={{
                    animationDelay: `${index * 100 + 300}ms`,
                    transformOrigin: "center bottom",
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>
          </motion.div>

          <motion.div
            className="backdrop-blur-sm bg-foreground/5 p-4 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <TextGenerateEffect
              words="Passionate GenAI & Full Stack Developer building intelligent web solutions. Experienced in developing MERN applications and AI/ML systems, including recommendation engines, NLP chatbots, and analytics platforms."
              className="text-center text-xl max-sm:text-base font-medium text-foreground/80"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;