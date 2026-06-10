"use client";

import { siteConfig } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { ArrowUp, Mail } from "lucide-react";

const socialLinks = [
  { icon: GitHubIcon, href: siteConfig.github, label: "GitHub" },
  { icon: LinkedInIcon, href: siteConfig.linkedin, label: "LinkedIn" },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/u/0/?fs=1&to=yasr05660@gmail.com&tf=cm",
    label: "Email",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-secondary/20">
      <div className="container-custom section-padding py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold gradient-text mb-1">
              {siteConfig.name}
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto") ? undefined : "noopener noreferrer"
                }
                aria-label={label}
                className="glass p-3 rounded-xl text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("home")}
            className="glass flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
