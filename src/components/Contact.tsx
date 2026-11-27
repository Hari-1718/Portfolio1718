"use client";

import React from "react";
import SectionBackground from "./SectionBackground";
import GithubIcon from "@/components/icons/github.svg";
import EmailIcon from "@/components/icons/email.svg";
import XIcon from "@/components/icons/x.svg";
import LinkedIcon from "@/components/icons/linkedin.svg";
import LeetcodeIcon from "@/components/icons/leetcode.svg";
import Link from "next/link";
import MonkeyTypeIcon from "@/components/icons/monkeytype.svg";
import HackerRankIcon from "@/components/icons/hackerrank.svg";

type ContactInfo = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
};

const contactInfo: ContactInfo[] = [
  {
    name: "Email",
    icon: EmailIcon,
    href: "mailto:hariprasadchinimilli18@gmail.com",
  },
  { name: "GitHub", icon: GithubIcon, href: "https://github.com/Hari-1718" },
  {
    name: "LinkedIn",
    icon: LinkedIcon,
    href: "https://www.linkedin.com/in/haripch",
  },
  {
    name: "LeetCode",
    icon: LeetcodeIcon,
    href: "https://leetcode.com/u/Hari1718/",
  },
  {
    name: "MonkeyType",
    icon: MonkeyTypeIcon,
    href: "https://monkeytype.com/profile/hari1718",
  },
  {
    name: "HackerRank",
    icon: HackerRankIcon,
    href: "https://www.hackerrank.com/profile/22B21A44A2",
  },
  {
    name: "Phone",
    icon: XIcon,
    href: "tel:+919346416669",
  },
];

const Contact = () => {
  return (
      <section
        id="contact-me"
        className="relative mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-5xl content-center space-y-8 px-6 py-24 text-center sm:px-10"
      >
        <SectionBackground text="CONTACT" />
        <div className="relative z-10 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get in touch</p>
          <h1 className="text-4xl font-semibold tracking-tight max-sm:text-3xl">Let&apos;s make something useful.</h1>
          <p className="mx-auto max-w-xl text-base leading-7 text-muted-foreground">
            Let&apos;s connect and bring your ideas to life!
          </p>
        </div>

        <ul className="relative z-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((contact) => (
            <li key={contact.name}>
              <Link
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex min-h-14 items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-accent/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                aria-label={`Contact via ${contact.name}`}
              >
                <contact.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>{contact.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
  );
};

export default Contact;