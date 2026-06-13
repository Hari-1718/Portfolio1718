"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const HomeSection = () => {
  const headingWords = "Software Developer".split(" ");

  const credibilityItems = [
    {
      value: "3 Projects",
      label: "Shipped end-to-end",
    },
    {
      value: "250+",
      label: "LeetCode challenges solved",
    },
    {
      value: "TypeScript",
      label: "Next.js · Node.js · SQL",
    },
    {
      value: "AI/ML",
      label: "Chatbots, analytics, automation",
    },
  ];

  return (
    <div className="w-full relative min-h-screen overflow-hidden bg-[#DFDBE5] dark:bg-background">
      <div
        className="absolute inset-0 opacity-35 pointer-events-none bg-primary"
        style={{
          maskImage: "url('/topography/topography.svg')",
          WebkitMaskImage: "url('/topography/topography.svg')",
          maskRepeat: "repeat",
          WebkitMaskRepeat: "repeat",
        }}
      />
      <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-foreground/10 blur-3xl pointer-events-none" />
      <section
        id="home"
        className="relative flex snap-start min-h-screen items-center justify-center px-4 py-12 lg:py-14"
      >
        <div className="max-w-6xl w-full grid items-center gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-4 py-2 text-xs sm:text-sm font-medium text-foreground/80 backdrop-blur-sm mx-auto lg:mx-0">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Computer Science graduate · April 2026 · Full-stack + AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black max-sm:text-4xl transition-all duration-300 tracking-tight leading-none">
              {headingWords.map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-4 max-sm:mr-2 opacity-0 -translate-y-4 transition-all duration-300 cursor-default animate-[fadeInDown_0.6s_ease-out_forwards]"
                  style={{
                    animationDelay: `${index * 100 + 300}ms`,
                    transformOrigin: "center bottom",
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="max-w-2xl text-sm sm:text-base xl:text-lg text-foreground/75 mx-auto lg:mx-0">
              I build production-ready web systems with TypeScript, Node.js,
              React, Next.js, Python, and SQL. My work spans backend
              architecture, REST APIs, database design, and AI-powered
              integrations.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <Button
                asChild
                size="default"
                className="rounded-full px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 active:translate-y-0"
              >
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="default"
                variant="outline"
                className="rounded-full px-5 py-5 bg-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10 active:translate-y-0"
              >
                <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>

            <div className="grid gap-2 pt-1 sm:grid-cols-2 xl:grid-cols-4">
              {credibilityItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-foreground/10 bg-background/55 px-4 py-3 text-center shadow-sm backdrop-blur-md"
                >
                  <div className="text-lg sm:text-xl font-black tracking-tight text-foreground leading-none">
                    {item.value}
                  </div>
                  <div className="mt-1 text-[0.68rem] sm:text-xs uppercase tracking-[0.18em] text-foreground/55">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-[290px] sm:max-w-xs lg:max-w-[300px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="rounded-[1.5rem] border border-foreground/10 bg-background/60 p-2.5 sm:p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[9/11] overflow-hidden rounded-[1.1rem] border border-primary/15 bg-muted">
                <Image
                  src="/hari-profile.jpg"
                  alt="Hari Prasad Chinimilli"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>

              <div className="mt-3 space-y-2 text-left">
                <div className="flex items-start justify-between gap-2.5">
                  <div>
                    <p className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.18em] text-foreground/50">
                      Available for internships / full-time
                    </p>
                    <p className="text-lg sm:text-xl font-bold leading-tight">Hari Prasad Chinimilli</p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-primary/10 px-2.5 py-2 text-right">
                    <p className="text-[0.6rem] sm:text-[0.65rem] text-foreground/60">Focus</p>
                    <p className="text-[0.7rem] sm:text-xs font-semibold leading-tight">AI + Full Stack</p>
                  </div>
                </div>

                <TextGenerateEffect
                  words="Computer Science graduate building reliable apps, clean APIs, and AI-powered features that ship fast and work in production."
                  className="text-xs sm:text-sm font-medium text-foreground/75"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default HomeSection;