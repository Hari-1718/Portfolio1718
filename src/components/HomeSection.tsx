"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, BriefcaseBusiness, Download } from "lucide-react";
import { Button } from "./ui/button";
import { ProfileLens } from "./ProfileLens";

const HomeSection = () => {
  return (
    <div className="relative w-full overflow-hidden border-b border-border/70 bg-background">
      <section
        id="home"
        className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-6 py-20 sm:px-10 md:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative z-10 w-full max-w-3xl space-y-7"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Full-stack developer · AI engineering
            </p>
            <span className="rounded-full border border-primary/25 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
              Open to opportunities
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <BriefcaseBusiness className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="font-medium text-foreground">Associate Software Engineer (Consultant)</span>
            <span>at Prewise · Part-time</span>
          </div>
          <div className="space-y-3">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-5xl xl:text-7xl">
              Hello, I&apos;m Hari.
            </h1>
            <p className="max-w-2xl text-2xl font-medium leading-snug tracking-tight text-foreground/75 sm:text-3xl">
              I build thoughtful software for real-world problems.
            </p>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            I&apos;m a computer science graduate focused on dependable web
            products, clear APIs, and practical AI features — from the first
            sketch to the final release.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button asChild className="h-11 rounded-lg px-5">
              <Link href="#projects">
                Explore my work
                <ArrowDown className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-lg px-5">
              <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Resume
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
            <span><strong className="mr-2 text-foreground">05</strong>Projects</span>
            <span><strong className="mr-2 text-foreground">250+</strong>Problems solved</span>
            <span>TypeScript · React · Python</span>
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-[22rem] self-center md:-translate-y-8 md:justify-self-end"
        >
          <ProfileLens />
        </motion.figure>

      </section>
    </div>
  );
};

export default HomeSection;