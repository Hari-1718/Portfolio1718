'use client'
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

// Footer component
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative flex flex-col items-center justify-center gap-y-6 border-t border-border px-6 py-12" aria-label="Site footer">

      {/* Identity Section */}
      <section className="text-center flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          viewport={{ once: true, amount: 0.5 }}
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
          <motion.div
            variants={{ hidden: {}, visible: {} }}
            className="text-left"
          >
            <motion.p
              variants={{
                hidden: { clipPath: "inset(0 100% 0 0)" },
                visible: {
                  clipPath: "inset(0 0 0 0)",
                  transition: { duration: 1.6, ease: "easeInOut" },
                },
              }}
              className="w-fit font-dancing-script text-3xl font-semibold leading-tight tracking-wide sm:text-4xl"
            >
              Hari Prasad
            </motion.p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              GenAI &amp; Full Stack Developer
            </p>
          </motion.div>
        </motion.div>

        <motion.blockquote
          cite="self"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          viewport={{ amount: 0.5 }}
          className="mt-2 text-sm text-muted-foreground"
        >
          &quot; Turning imagination into intelligent reality. &quot;
        </motion.blockquote>
      </section>

      {/* Resume QR removed as requested */}

      {/* Copyright */}
      <motion.p
        role="contentinfo"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        viewport={{ amount: 0.5 }}
        className="text-xs text-muted-foreground"
      >
        © {currentYear} All rights reserved.
      </motion.p>
    </footer >
  );
};

export default Footer;
