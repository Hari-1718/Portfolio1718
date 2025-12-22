import React from "react";
import Project from "./Project";

import { GridPattern } from "./magicui/grid-pattern";

// My projects list
const projects: IProject[] = [
  {
    title: "Kawaiiarts – String Art E-commerce Website",
    image: "/kawaiiarts-project.jpg",
    description:
      "Developed a responsive e-commerce platform with Home, Gallery, Shop, Blog, and Contact pages. Showcased 50+ unique designs and supported 100+ customer orders with free shipping. Built a complete online store for string art products with seamless user experience.",
    techstack: ["React", "Next.js", "E-commerce", "Responsive Design", "Vercel"],
    github: "https://github.com/Hari-1718/kawaiiarts",
    preview: "https://kawaiiarts.vercel.app/",
  },
  {
    title: "Eat Right, Live Bright - Nutrition Platform",
    image: "/eat-right-live-bright.png",
    description:
      "Empowering families with practical, local nutrition guidance through workshops, recipes, and health education. Features a Diet Checker for personalized vegetarian-friendly diet recommendations and nutritional guides for preventing common health issues like anemia and diabetes.",
    techstack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Hari-1718/Eat-Right-Live-Bright",
    preview: "https://eatright-livebright17.vercel.app/",
  },
  {
    title: "Movie Recommendation System",
    image: "",
    description:
      "Designed a hybrid recommendation engine combining content-based and collaborative filtering. Achieved silhouette score of 0.667 and reduced RMSE to 0.879 after model tuning. Implemented advanced feature engineering and model evaluation techniques.",
    techstack: ["Python", "Machine Learning", "Recommendation Systems", "Data Preprocessing"],
    github: "https://github.com/Hari-1718",
    preview: "",
    colab: "https://colab.research.google.com/github/Hari-1718/FMML_Project_and_Labs/blob/main/Module_7_Project.ipynb",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="min-h-[calc(100dvh-5.5rem)] relative flex items-start py-12 justify-center w-full"
    >
      <GridPattern strokeDasharray="1 2" className="fill-primary/30 -z-10 stroke-primary/80 [mask-image:radial-gradient(90vw_circle_at_center,var(--muted),transparent)]" />
      <div className="max-w-4xl w-full space-y-4">
        <h1 id="projects-heading" className="text-center font-black text-4xl max-sm:text-2xl">Projects</h1>
        <p className="text-base p-1 max-sm:text-sm text-foreground text-center">Showcasing my passion for innovation through creative and impactful projects</p>
        <ul className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 pt-8 pb-4">
          {projects.map((project, idx) => (
            <li key={idx} className="flex h-full">
              <Project project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
