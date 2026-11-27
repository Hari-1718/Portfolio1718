"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import Github from "@/components/icons/github.svg";
import { ExternalLink, Star, GitFork, FileText } from "lucide-react";



const Project: React.FC<{ project: IProject }> = ({ project }) => {
  const {
    title,
    description,
    image,
    techstack,
    github,
    preview,
    colab,
    stars,
    forks,
  } = project;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
      <article className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors duration-200 hover:border-primary/50">
        {image ? (
          <div className="relative aspect-[16/9] overflow-hidden bg-muted">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/25 to-transparent" />
            <div className="absolute inset-0 animate-pulse bg-muted" hidden={imageLoaded} />
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        ) : null}

        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-xl font-semibold leading-snug tracking-tight">{title}</h2>
            {(stars || forks) && (
              <div className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
                {stars && <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5" />{stars}</span>}
                {forks && <span className="flex items-center gap-1"><GitFork className="h-3.5 w-3.5" />{forks}</span>}
              </div>
            )}
          </div>
          <p className="text-sm leading-6 text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techstack.slice(0, 6).map((tech) => (
              <Badge key={tech} variant="secondary" className="rounded-md px-2.5 py-1 text-xs font-medium">
                {tech}
              </Badge>
            ))}
            {techstack.length > 6 && (
              <Badge variant="outline" className="rounded-md px-2.5 py-1 text-xs">+{techstack.length - 6}</Badge>
            )}
          </div>

          <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-4">
            {github ? (
              <Button size="sm" variant="outline" className="rounded-lg" asChild>
                <Link href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" /> Code
                </Link>
              </Button>
            ) : null}

            {preview ? (
              <Button size="sm" className="rounded-lg" asChild>
                <Link href={preview} target="_blank" rel="noopener noreferrer">
                  Live demo <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            ) : null}

            {colab ? (
              <Button size="sm" variant="outline" className="rounded-lg" asChild>
                <Link href={colab} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" /> Colab
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      </article>
  );
};

export default Project;