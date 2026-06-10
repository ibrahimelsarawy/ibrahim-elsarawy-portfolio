"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { skills, type SkillCategory } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const categories: (SkillCategory | "All")[] = ["All", "Frontend", "Backend", "Tools","AI Tools"];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              Skills
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Technologies I{" "}
              <span className="gradient-text">Work With</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                  activeCategory === category
                    ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-via)] text-white shadow-lg"
                    : "glass text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 0.05}>
              <motion.div
                layout
                className="glass rounded-2xl p-6 text-center group cursor-default hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </span>
                <p className="font-semibold text-sm sm:text-base">{skill.name}</p>
                <Badge variant="outline" className="mt-2 text-[10px]">
                  {skill.category}
                </Badge>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
