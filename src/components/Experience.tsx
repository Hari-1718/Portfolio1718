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
        role: "Software Engineer Intern",
        company: "Prewise (Samyati Technologies)",
        location: "Remote",
        period: "Feb 2026 - Present",
        type: "Internship",
        description: [
            "Built frontend components and backend services for two B2B enterprise SaaS platforms.",
            "Translated raw Figma layouts into functional, modular React interfaces.",
            "Wrote Node.js backend logic and REST APIs with strict tenant isolation to prevent cross-account data exposure.",
            "Debugged staging routing errors before launch to secure client-server data flow and prevent deployment failures."
        ],
        skills: ["React", "Node.js", "REST APIs", "Tenant Isolation", "Figma"]
    },
    {
        id: 2,
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
        id: 3,
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
                    <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Experience
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Hands-on experience from the resume, focused on product delivery, backend logic, and AI/data work.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />

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
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 w-10 h-10 bg-background rounded-full border-4 border-primary/20 shadow-lg flex items-center justify-center z-20">
                                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 ml-12 md:ml-0">
                                    <div className={`p-6 rounded-2xl border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 group hover:border-primary/30 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                                        }`}>
                                        <div className="flex flex-col gap-4">

                                            {/* Header */}
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center justify-between flex-wrap gap-2">
                                                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                        {exp.role}
                                                    </h3>
                                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                        {exp.period}
                                                    </span>
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
                                                        className="text-[10px] px-2 py-1 rounded-md bg-secondary/30 text-secondary-foreground border border-secondary/50 font-medium"
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
