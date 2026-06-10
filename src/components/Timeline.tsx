"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { timelineEntries } from "@/lib/data";
import { motion } from "framer-motion";

export function Timeline() {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              Journey
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              My{" "}
              <span className="gradient-text">Experience</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] md:-translate-x-1/2" />

          {timelineEntries.map((entry, index) => (
            <ScrollReveal key={entry.id} delay={index * 0.15}>
              <div
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block flex-1" />

                <motion.div
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-via)] border-4 border-background md:-translate-x-1/2 z-10"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />

                <div className="flex-1 ml-12 md:ml-0">
                  <motion.div
                    className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block text-sm font-bold text-primary mb-2">
                      {entry.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{entry.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {entry.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
