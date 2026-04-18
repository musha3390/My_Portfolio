"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AI Starter Kit OSS",
    description: "A comprehensive Next.js template integrated with OpenAI and Sanity CMS. Features robust text and content generation tools, multiple subscription plans, and API integrations perfect for developers building AI SaaS.",
    image: "/ai-starterkit.png",
    tags: ["Next.js", "Tailwind CSS", "Sanity CMS", "OpenAI"],
    liveUrl: "https://ai-starterkit.netlify.app/",
    githubUrl: "https://github.com/Mushahid3390/AI-staterkit-with-sanity"
  },
  {
    title: "Free Blog Platform",
    description: "A dynamic, full-featured blog application built from scratch. Integrates Prismic CMS for content management and headless data delivery, featuring custom slices, rich text articles, and a responsive reading experience.",
    image: "/free-blog.png",
    tags: ["Next.js", "React 19", "Tailwind CSS", "Prismic CMS"],
    liveUrl: "https://free-blog-eight.vercel.app/",
    githubUrl: "https://github.com/musha3390/Free-Blog.git"
  },
  {
    title: "Multi-Step Onboarding Form",
    description: "A complex, state-driven interactive multi-step form built from scratch. Implements detailed validation, smooth transitions, and state management across multiple screens for robust user onboarding and plan selection.",
    image: "/multi-step.png",
    tags: ["Next.js", "React 19", "SCSS"],
    liveUrl: "https://multi-step-form-scss.vercel.app/",
    githubUrl: "https://github.com/Mushahid3390/multi-step-form"
  },
  {
    title: "Psycho Art Gallery",
    description: "A visually striking digital art gallery application focused on modern, responsive aesthetics. Built using React and Vite, showcasing interactive UI elements and dynamic content presentation.",
    image: "/project-1.jpg",
    tags: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://stg-psycho.vercel.app/",
    githubUrl: "https://github.com/Mushahid3390/PsychoArt"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold md:font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-48 w-full bg-surface-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/70 mb-6 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-surface-border mt-auto">
                  <Link href={project.liveUrl} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </Link>
                  <Link href={project.githubUrl} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <FaGithub size={16} />
                    Source Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
