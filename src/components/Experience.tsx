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

// Experience Data based on User's LinkedIn Profile
const experiences: ExperienceItem[] = [
    {
        id: 1,
        role: "AI Developer Intern",
        company: "VISWAM.AI",
        location: "Hyderabad, Telangana (Remote)",
        period: "May 2025 - June 2025",
        type: "Internship",
        description: [
            "Worked as an AI Developer Intern.",
            "Contributed to AI-driven development projects."
        ],
        skills: ["Artificial Intelligence", "Development"]
    },
    {
        id: 2,
        role: "Data Science Master Virtual Intern",
        company: "EduSkills Foundation",
        location: "India (Remote)",
        period: "Jan 2025 - Mar 2025",
        type: "Internship",
        description: [
            "Completed a 10-week intensive virtual internship covering key data science concepts.",
            "Gained hands-on experience in data preprocessing, machine learning algorithms, and model evaluation.",
            "Worked on real-world projects under mentorship of industry experts."
        ],
        skills: ["Data Science", "Machine Learning", "Data Preprocessing", "Model Evaluation"]
    },
    {
        id: 3,
        role: "AI Intern – TechSaksham Program",
        company: "Edunet Foundation",
        location: "Remote",
        period: "Dec 2024 - Jan 2025",
        type: "Internship",
        description: [
            "Completed an AI-focused internship under the TechSaksham initiative by Microsoft and SAP.",
            "Gained hands-on experience in AI/ML fundamentals, data preprocessing, and model building.",
            "Developed practical applications using Python and real-world datasets."
        ],
        skills: ["AI", "NLP", "Machine Learning", "Python", "LLMs"]
    },
    {
        id: 4,
        role: "AI & Data Analytics Intern",
        company: "Edunet Foundation",
        location: "Remote",
        period: "Dec 2024 - Jan 2025",
        type: "Internship",
        description: [
            "Built 'P3' – A Chatbot Implementation using NLP with Python.",
            "Applied intent classification, entity extraction, and dialogue management.",
            "Collaborated in a virtual team environment and enhanced communication skills."
        ],
        skills: ["NLP", "Python", "Chatbot Development", "Team Collaboration"]
    },
    {
        id: 5,
        role: "AI & Data Analytics Intern (Green Skills)",
        company: "Edunet Foundation",
        location: "Remote",
        period: "Nov 2024 - Dec 2024",
        type: "Internship",
        description: [
            "Developed a Healthcare Prediction System using Python for diabetic patients.",
            "Applied data preprocessing, visualisation, and classification techniques (Logistic Regression, Random Forest).",
            "Gained exposure to sustainability-focused AI applications."
        ],
        skills: ["Python", "AI", "Machine Learning", "Data Analytics", "Healthcare AI"]
    },
    {
        id: 6,
        role: "AI-ML Virtual Intern",
        company: "EduSkills Foundation",
        location: "Remote",
        period: "Oct 2024 - Dec 2024",
        type: "Internship",
        description: [
            "Completed AI-ML Virtual Internship organized by AICTE-EduSkills with Google for Developers.",
            "Applied concepts to real-world scenarios in AI and Machine Learning.",
            "Skills covered image classification, object detection, and product image search."
        ],
        skills: ["TensorFlow", "Object Detection", "Image Classification", "Neural Networks"]
    },
    {
        id: 7,
        role: "Web Full Stack Developer Intern",
        company: "EduSkills Foundation",
        location: "Remote",
        period: "Jul 2024 - Sep 2024",
        type: "Internship",
        description: [
            "Deepened knowledge in full stack development and connected with professionals.",
            "Supported by EduSkills Foundation and AICTE NEAT."
        ],
        skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "MongoDB", "SQL"]
    },
    {
        id: 8,
        role: "AI & ML Intern",
        company: "APSSDC",
        location: "Kakinada, Andhra Pradesh (Remote)",
        period: "Jun 2024 - Aug 2024",
        type: "Internship",
        description: [
            "Completed a 6-week internship organized by Edunet with IBM SkillsBuild.",
            "Built machine learning models for predictive tasks using Python and IBM cloud tools.",
            "Improved practical knowledge in ML pipelines and data visualization."
        ],
        skills: ["AI", "Machine Learning", "Python", "IBM SkillsBuild"]
    },
    {
        id: 9,
        role: "Summer Intern",
        company: "Swecha Telangana",
        location: "Hyderabad, Telangana (Remote)",
        period: "May 2024 - Jul 2024",
        type: "Internship",
        description: [
            "Worked remotely on cutting-edge AI and Large Language Models (LLMs).",
            "Part of the Swecha Telangana Summer of AI program."
        ],
        skills: ["AI", "NLP", "LLMs", "Text-to-Speech"]
    },
    {
        id: 10,
        role: "Intern",
        company: "iHub-Data, IIIT Hyderabad",
        location: "Remote",
        period: "Aug 2023 - May 2024",
        type: "Internship",
        description: [
            "Completed 'Foundations of Modern Machine Learning' program.",
            "Implemented algorithms, analyzed datasets, and developed predictive models.",
            "Secured Grade A for excellent performance."
        ],
        skills: ["Machine Learning", "Deep Learning", "Algorithms", "Predictive Models"]
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
                        Work Experience
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My professional journey, internships, and career milestones.
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
