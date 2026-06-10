export const siteConfig = {
  name: "Ibrahim Elsarawy",
  title: "Frontend Developer",
  description:
    "Frontend Developer specialized in building responsive and modern web applications using React.js, Next.js, TypeScript, and Tailwind CSS. Passionate about creating seamless user experiences and writing clean, maintainable code.",
  email: "yasr05660@gmail.com",
  github: "https://github.com/ibrahimelsarawy",
  linkedin: "https://www.linkedin.com/in/ibrahim-elsarawy-875370209/",
  cvUrl:
    "https://drive.google.com/file/d/17XRRzLdG3QjngK9Rg_MF_k_MpFkJkXcs/view?usp=drive_link",
};

export const stats = [
  { label: "Years Learning", value: "3+" },
  { label: "Projects Built", value: "5+" },
  { label: "Technologies Used", value: "15+" },
];
export type SkillCategory = "Frontend" | "Backend" | "Tools" | "AI Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", category: "Frontend", icon: "🌐" },
  { name: "CSS3", category: "Frontend", icon: "🎨" },
  { name: "JavaScript", category: "Frontend", icon: "⚡" },
  { name: "TypeScript", category: "Frontend", icon: "📘" },
  { name: "React.js", category: "Frontend", icon: "⚛️" },
  { name: "Next.js", category: "Frontend", icon: "▲" },
  { name: "Tailwind CSS", category: "Frontend", icon: "💨" },
  { name: "Bootstrap", category: "Frontend", icon: "🅱️" },
  { name: "Shadcn UI", category: "Frontend", icon: "🎯" },
  { name: "React Hook Form", category: "Frontend", icon: "📝" },
  { name: "Zod", category: "Frontend", icon: "✅" },
  { name: "Redux Toolkit", category: "Frontend", icon: "🛠️" },
  { name: "Zustand", category: "Frontend", icon: "🐻" },
  { name: "TanStack Query", category: "Frontend", icon: "🔄" },
  { name: "Framer Motion", category: "Frontend", icon: "✨" },
  { name: "Axios", category: "Frontend", icon: "📡" },
  { name: "Responsive Design", category: "Frontend", icon: "📱" },

  // Backend Integration
  { name: "REST APIs", category: "Backend", icon: "🔗" },
  { name: "Authentication", category: "Backend", icon: "🔐" },

  // Tools
  { name: "Git", category: "Tools", icon: "📦" },
  { name: "GitHub", category: "Tools", icon: "🐙" },
  { name: "VS Code", category: "Tools", icon: "💻" },
  { name: "Chrome DevTools", category: "Tools", icon: "🔍" },
  { name: "Figma", category: "Tools", icon: "🎨" },
  { name: "Postman", category: "Tools", icon: "📬" },

  // AI Tools
  { name: "Cursor AI", category: "Tools", icon: "🤖" },
  { name: "ChatGPT", category: "Tools", icon: "🧠" },
  { name: "GitHub Copilot", category: "Tools", icon: "✨" },
];
export type ProjectCategory = "Frontend" ;

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Website",
    description:
      "A modern and responsive e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Features product browsing, authentication, shopping cart functionality, and REST API integration.",
    image: "/projects/ecommerce.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    category: "Frontend",
    liveUrl: "https://e-commerce-project-next-ibrahim-e-l.vercel.app/",
    githubUrl:
      "https://github.com/ibrahimelsarawy/E-commerce-Project-next-IbrahimELsarawy.git",
  },
{
  id: "2",
  title: "Personal Portfolio Website",
  description:
    "A modern and responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features dark mode, smooth animations, project showcase, skills section, and a contact form integrated with EmailJS.",
  image: "/projects/portfolio-preview.png",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "EmailJS",
  ],
  category: "Frontend",
  liveUrl: "https://ibrahim-elsarawy-portfolio-ajtb.vercel.app/",
  githubUrl: "https://github.com/ibrahimelsarawy/ibrahim-elsarawy-portfolio",
},
  {
    id: "3",
    title: "Social Media Application",
    description:
      "A responsive social media application built with React.js and Tailwind CSS. Includes authentication, posts, comments, user profiles, and API integration.",
    image: "/projects/socialapp.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST API"],
    category: "Frontend",
    liveUrl: "https://social-media-app-sand-zeta.vercel.app/",
    githubUrl: "https://github.com/ibrahimelsarawy/Social-Media-App.git",
  },

  {
    id: "4",
    title: "Adasa Lens",
    description:
      "A modern business website focused on performance, accessibility, and responsive design. Built using modern frontend development practices.",
    image: "/projects/adasa-lens.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    category: "Frontend",
    liveUrl: "https://hilarious-haupia-a31c20.netlify.app/",
    githubUrl:
      "https://github.com/ibrahimelsarawy/React-Adasa-Ibrahim-Elsarawy.git",
  },
  {
    id: "5",
    title: "Contact Hub",
    description:
      "A responsive contact management application built with HTML, CSS, and JavaScript. It allows users to add, edit, delete, and organize contacts through a clean and user-friendly interface.",
    image: "/projects/contact-hub.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "Frontend",
    liveUrl: "https://contact-hub-ibrahim-elsarawy.vercel.app/",
    githubUrl: "https://github.com/ibrahimelsarawy/contactHub-Ibrahim-Elsarawy",
  },

  {
    id: "6",
    title: "Space Explorer Dashboard",
    description:
      "An interactive space exploration dashboard that displays space-related information through a modern and responsive user interface. Built with vanilla JavaScript and focused on clean UI design and user experience.",
    image: "/projects/space-explorer-dashboard.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "Frontend",
    liveUrl: "https://space-explorer-dashboard-ibrahim-el.vercel.app/",
    githubUrl:
      "https://github.com/ibrahimelsarawy/Space-Explorer-Dashboard-ibrahimElsarawy",
  },
];

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: "1",
    year: "2019",
    title: "Started Computer Science Journey",
    description:
      "Began studying Computer Science and developed a strong foundation in programming, problem solving, and software development concepts.",
  },
  {
    id: "2",
    year: "2022",
    title: "CS50 - Harvard University",
    description:
      "Completed Harvard University's CS50 course, gaining a solid understanding of computer science fundamentals, algorithms, data structures, and software development principles.",
  },
  {
    id: "3",
    year: "2023",
    title: "Google UX Design Professional Certificate",
    description:
      "Completed Google's UX Design Professional Certificate, learning user research, wireframing, prototyping, and creating user-centered digital experiences.",
  },
  {
    id: "4",
    year: "2023",
    title: "Bachelor's Degree in Computer Science",
    description:
      "Graduated from Modern Academy for Science and Technology with a Bachelor's degree in Computer Science and worked on multiple academic and practical projects.",
  },
  {
    id: "5",
    year: "2025",
    title: "Frontend Development Diploma",
    description:
      "Completed Frontend Development training at Route Academy focusing on React.js, Next.js, TypeScript, Tailwind CSS, and REST API integration.",
  },
  {
    id: "6",
    year: "2026",
    title: "Building Real-World Projects",
    description:
      "Developed real-world applications including E-Commerce, Social Media, and business-focused web applications using modern frontend technologies.",
  },
  {
    id: "7",
    year: "Present",
    title: "Seeking Frontend Developer Opportunities",
    description:
      "Actively seeking Frontend Developer opportunities to contribute, grow professionally, and build impactful digital products.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
