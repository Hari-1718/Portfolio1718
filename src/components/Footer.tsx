'use client'
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionText from "./SectionText";

// Footer component
const Footer: React.FC<{ resumeLink: string }> = ({ resumeLink }) => {
  const currentYear = new Date().getFullYear();
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative @container gap-y-8 overflow-hidden flex flex-col justify-center items-center px-2 py-[5rem]" aria-label="Site footer">
      {/* Decorative background text */}
      <SectionText text="HariPrasad" />

      {/* Identity Section */}
      <section className="text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ amount: 0.5 }}
          className="flex items-center gap-3 mb-2"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-muted">
            <Image
              src="/avatar.png"
              alt="HariPrasad"
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <p className="font-bold text-lg max-sm:text-base text-left">
            HariPrasad | Prompt Engineer & Generative AI Specialist
          </p>
        </motion.div>

        <motion.blockquote
          cite="self"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          viewport={{ amount: 0.5 }}
          className="font-dancing-script text-xl max-sm:text-base max-sm:font-normal font-bold mt-2"
        >
          &quot; Innovation distinguishes between a leader and a follower. &quot;
        </motion.blockquote>
      </section>

      {/* Resume Button */}
      <section aria-label="Resume Download" className="mt-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          viewport={{ amount: 0.5 }}
          className="flex flex-wrap gap-2"
        >
          <motion.div whileHover={!reduceMotion ? { scale: 1.05 } : {}}>
            <Button variant="outline" asChild className="text-xs" aria-label="Download Resume">
              <Link target="_blank" href={resumeLink} rel="noopener noreferrer">
                <Download className="mr-2" />
                Get my Resume
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Copyright */}
      <motion.p
        role="contentinfo"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        viewport={{ amount: 0.5 }}
        className="absolute bottom-4 text-xs"
      >
        © {currentYear} All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
