"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, Stripe, and Prisma. Features include user authentication, product management, and a seamless checkout experience.",
    image: "/project-1.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "Prisma", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity app with real-time updates, drag-and-drop task organization, and team collaboration features.",
    image: "/project-2.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard providing real-time forecasting data with beautiful visual representations using Chart.js.",
    image: "/project-3.jpg",
    tags: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
    liveUrl: "#",
    githubUrl: "#"
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
