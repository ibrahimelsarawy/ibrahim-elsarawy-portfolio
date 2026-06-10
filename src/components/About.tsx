"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { stats } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Crafting Digital{" "}
              <span className="gradient-text">Experiences</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="gradient-border rounded-2xl p-1">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary flex items-center justify-center">
                  <Image
                    src="/ibrahim-elsarawy.jpeg"
                    alt="Ibrahim Elsarawy - Frontend Developer"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />{" "}
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl px-5 py-3 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="absolute inset-0 rounded-full bg-green-500 animate-ping" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">
                      Available for Work
                    </p>
                    <p className="font-semibold text-sm text-black ">
                      Frontend Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I’m Ibrahim Elsarawy, a Frontend Developer passionate about
                    building modern, responsive, and user-friendly web
                    applications. I specialize in React.js, Next.js, TypeScript,
                    and Tailwind CSS, focusing on creating clean, scalable, and
                    maintainable solutions.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I graduated with a Bachelor’s degree in Computer Science
                    from Modern Academy for Science and Technology. During my
                    learning journey, I completed intensive Frontend Development
                    training and built several real-world projects including an
                    E-Commerce platform, a Social Media application, and
                    business-focused web applications.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I enjoy transforming ideas into interactive digital
                    experiences and continuously improving my skills through
                    hands-on projects and modern web technologies. I’m currently
                    seeking Frontend Developer opportunities where I can
                    contribute, learn, and grow while building impactful
                    products.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <motion.div
                className="glass rounded-2xl p-8 text-center group hover:border-primary/30 transition-colors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
