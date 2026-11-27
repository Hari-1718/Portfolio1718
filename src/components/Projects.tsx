import React from "react";
import Project from "./Project";
import SectionBackground from "./SectionBackground";



// My projects list
const projects: IProject[] = [
  {
    title: "Kawaiiarts – Full Stack E-Commerce Platform",
    image: "/kawaiiarts-project.jpg",
    description:
      "Designed and developed a full-stack e-commerce application using React (Vite), Node.js, Express, and MongoDB. Implemented JWT-based authentication and role-secured RESTful APIs for user and order management. Built immersive and responsive UI using Tailwind CSS and Framer Motion.",
    techstack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Hari-1718/kawaiiarts",
    preview: "https://kawaiiarts.vercel.app/",
  },
  {
    title: "Eat Right, Live Bright - Nutrition Platform",
    image: "/eat-right-live-bright.png",
    description:
      "Empowering families with practical, local nutrition guidance through workshops, recipes, and health education. Features a Diet Checker for personalized vegetarian-friendly diet recommendations and nutritional guides for preventing common health issues.",
    techstack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Hari-1718/Eat-Right-Live-Bright",
    preview: "https://eatright-livebright17.vercel.app/",
  },
  {
    title: "SHL GenAI Assessment Recommendation System",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000",
    description:
      "Designed and developed a Retrieval-Augmented Generation (RAG) system to recommend relevant SHL assessments directly from job descriptions. Implemented semantic search using sentence embeddings (MiniLM) and cosine similarity. Built a production-style backend using FastAPI.",
    techstack: ["FastAPI", "GenAI", "RAG", "Python", "NLP"],
    github: "https://github.com/Hari-1718",
    preview: "",
  },
  {
    title: "Agentic AI-Based Autonomous Trading System",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000",
    description:
      "Designed and implemented an autonomous trading agent using Deep Q-Networks (DQN) to make buy, sell, and hold decisions in a simulated market environment. Built a custom trading environment with reward functions to model realistic market behavior.",
    techstack: ["Python", "Reinforcement Learning", "Deep Q-Learning", "DQN"],
    github: "https://github.com/Hari-1718",
    preview: "",
  },
  {
    title: "Animal Sense AI – Real-Time Detection System",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000",
    description:
      "Designed and developed a real-time animal detection web application using Flask and OpenCV, integrating custom-trained YOLOv8 models for high-accuracy classification. Implemented an optimized inference pipeline with lazy loading for classification and detection models.",
    techstack: ["Flask", "OpenCV", "YOLOv8", "Python", "Computer Vision"],
    github: "https://github.com/Hari-1718",
    preview: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative flex w-full justify-center py-24 sm:py-28"
    >
      <SectionBackground text="PROJECTS" />
      <div className="relative z-10 w-full max-w-6xl space-y-8 px-6 sm:px-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected work</p>
          <h1 id="projects-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl">Projects</h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            A selection of products and experiments across web development, applied AI, and computer vision.
          </p>
        </div>
        <ul className="grid gap-5 pt-2 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.title} className="flex h-full">
              <Project project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
