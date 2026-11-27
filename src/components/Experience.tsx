"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";
import SectionBackground from "./SectionBackground";

// Experience Data Interface
interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    skills: string[];
    type: string;
}

// Experience Data based on the uploaded resume
const experiences: ExperienceItem[] = [
    {
        id: 1,
        role: "Associate Software Engineer (Consultant)",
        company: "Prewise (Samyati Technologies)",
        location: "Bengaluru, Karnataka, India · Hybrid",
        period: "Aug 2026 - Present",
        type: "Part-time",
        description: [
            "Continued with Prewise as a part-time consultant after completing a seven-month software engineering internship."
        ],
        skills: ["React", "Node.js", "B2B SaaS", "Multi-tenant systems"]
    },
    {
        id: 2,
        role: "Software Engineer Intern",
        company: "Prewise (Samyati Technologies)",
        location: "Remote",
        period: "Feb 2026 - Aug 2026",
        type: "Internship",
        description: [
            "Worked as the primary full-stack developer to build two B2B enterprise SaaS applications from scratch amid evolving requirements and tight sprint timelines.",
            "Turned Figma layouts into modular, interactive React components.",
            "Built Node.js business logic and secure REST APIs, with relational schemas and query validation enforcing strict tenant isolation.",
            "Investigated staging issues affecting data flow and application routing ahead of release."
        ],
        skills: ["React", "Node.js", "REST APIs", "Relational schemas", "Tenant isolation", "Figma"]
    },
    {
        id: 3,
        role: "Full Stack Developer Intern",
        company: "SmartBridge Educational Services",
        location: "Remote",
        period: "May 2025 - Jul 2025",
        type: "Internship",
        description: [
            "Traced an intermittent staging timeout issue back to unindexed, nested database reads.",
            "Restructured aggregation paths and added targeted SQL indexes to reduce API response delays by 40%.",
            "Assembled 12 core backend endpoints in Express.js while keeping database access isolated from the frontend."
        ],
        skills: ["Express.js", "SQL", "Backend APIs", "Indexes", "Performance Tuning"]
    },
    {
        id: 4,
        role: "Artificial Intelligence Intern",
        company: "TechSaksham (Microsoft & SAP Partnership)",
        location: "Remote",
        period: "Dec 2024 - Jan 2025",
        type: "Internship",
        description: [
            "Replaced a manual five-hour weekly CSV export routine with automated SQL queries to pull metrics directly from test databases.",
            "Wrote Python scripts to filter tokenization anomalies from unstructured text data.",
            "Improved the pipeline baseline accuracy from 74% to 88% by cleaning and processing the input data."
        ],
        skills: ["Python", "SQL", "Automation", "Data Cleaning", "ML Pipeline"]
    }
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="min-h-screen relative flex flex-col items-center justify-center py-20 w-full overflow-hidden"
        >
            <SectionBackground text="EXPERIENCE" />

            <div className="max-w-5xl w-full px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                        Experience
                    </h2>
                    <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground">
                        Product engineering, full-stack delivery, and AI/data experience.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute bottom-0 left-[19px] top-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1.5 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-background md:left-1/2 md:-translate-x-1/2">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 ml-12 md:ml-0">
                                    <div className={`rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                                        }`}>
                                        <div className="flex flex-col gap-4">

                                            {/* Header */}
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center justify-between flex-wrap gap-2">
                                                    <h3 className="text-lg font-semibold text-foreground">
                                                        {exp.role}
                                                    </h3>
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                                                            {exp.type}
                                                        </span>
                                                        <span className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                                                            {exp.period}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground/80">
                                                    <span className="flex items-center gap-1.5">
                                                        <Building2 className="w-4 h-4" />
                                                        {exp.company}
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <MapPin className="w-4 h-4" />
                                                        {exp.location}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <ul className="space-y-2 list-none">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Skills */}
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {exp.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Empty space - Layout Balancer */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
