"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects, type ProjectCategory } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useState } from "react";

const filters: (ProjectCategory | "All")[] = ["All", "Frontend", ];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              A selection of projects showcasing my frontend development skills,
              from interactive dashboards to full-stack applications.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                  activeFilter === filter
                    ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-via)] text-white shadow-lg"
                    : "glass text-muted-foreground hover:text-foreground"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
