"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Target,
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
} from "lucide-react";

const tabs = [
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "passion", label: "Passion", icon: Heart },
  { id: "career", label: "Career", icon: Target },
];

const experience = [
  {
    role: "Frontend Developer Intern",
    company: "RW Infotech",
    duration: "3 Months",
    type: "Internship",
    points: [
      "Developed responsive user interfaces using React, Tailwind CSS, and modern JavaScript.",
      "Worked on real-world projects and improved UI performance and usability.",
      "Implemented component-based architecture and managed application state efficiently.",
    ],
  },
  {
    role: "MERN Stack Trainee",
    company: "Bringle Tech",
    duration: "2 Months",
    type: "Training",
    points: [
      "Learned and implemented full-stack development using MongoDB, Express.js, React, and Node.js.",
      "Built mini-projects to understand REST APIs, routing, and database integration.",
      "Gained hands-on experience in frontend-backend integration.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Technology – Computer Science",
    institute: "Sagar Institute of Research and Technology (SIRT)",
    location: "Bhopal, India",
    duration: "2021 – 2025",
    highlights: [
      "Specialized in Computer Science fundamentals and modern web technologies.",
      "Built multiple projects during coursework including full-stack applications.",
      "Actively participated in coding competitions and tech fests.",
    ],
  },
];

const passions = [
  {
    icon: "💻",
    title: "Full-Stack Development",
    description:
      "I love crafting end-to-end web solutions — from designing intuitive UIs with React/Next.js to building robust backends with Node.js and MongoDB.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Beautiful, user-centric interfaces excite me. I care deeply about pixel-perfect designs, smooth animations, and delightful user experiences.",
  },
  {
    icon: "🚀",
    title: "Performance Optimization",
    description:
      "Building fast, scalable apps is my passion. I enjoy profiling, code-splitting, and squeezing every ounce of performance out of web apps.",
  },
  {
    icon: "📚",
    title: "Continuous Learning",
    description:
      "Tech evolves fast and I love keeping up. I regularly explore new frameworks, tools, and patterns to stay ahead of the curve.",
  },
];

const careerGoals = [
  {
    icon: "🌐",
    title: "Join a Top-Tier Tech Company",
    description:
      "My immediate goal is to secure a full-time role at a growth-oriented product company where I can build impactful software at scale.",
  },
  {
    icon: "🔧",
    title: "Master the Full Stack",
    description:
      "I aim to become a proficient full-stack engineer, deepening expertise in microservices, cloud infrastructure (AWS/GCP), and system design.",
  },
  {
    icon: "🏗️",
    title: "Build My Own Product",
    description:
      "Within 3 years, I plan to launch my own SaaS product — solving a real problem with elegant tech, combining my development and product thinking skills.",
  },
  {
    icon: "🤝",
    title: "Mentor & Give Back",
    description:
      "Once established, I want to mentor junior developers, contribute to open-source, and help grow the developer community.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background decoration */}


      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Know Me <span className="text-primary">Better</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            A passionate developer from Bhopal, India — building the future one
            line of code at a time.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                    : "border border-foreground/15 text-foreground/60 hover:border-primary/40 hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* EXPERIENCE */}
          {activeTab === "experience" && (
            <div className="max-w-4xl mx-auto space-y-6">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative p-6 md:p-8 rounded-2xl border border-foreground/10 bg-white/2 backdrop-blur-sm hover:border-primary/30 transition-all group"
                >
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-foreground/60">
                        <Building2 size={14} />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="text-xs px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/5 font-medium">
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1 text-foreground/50 text-sm">
                        <Calendar size={12} />
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-foreground/70 text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {/* EDUCATION */}
          {activeTab === "education" && (
            <div className="max-w-3xl mx-auto space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 md:p-8 rounded-2xl border border-foreground/10 bg-white/2 backdrop-blur-sm hover:border-secondary/30 transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-foreground/60">
                        <GraduationCap size={14} />
                        <span className="text-sm font-medium">{edu.institute}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-foreground/50">
                        <MapPin size={12} />
                        <span className="text-xs">{edu.location}</span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <div className="flex items-center gap-1 text-foreground/50 text-sm">
                        <Calendar size={12} />
                        {edu.duration}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-foreground/70 text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="text-secondary mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Skills Summary card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-6 md:p-8 rounded-2xl border border-foreground/10 bg-white/2"
              >
                <h4 className="text-lg font-bold mb-4 text-foreground/90">Skills from Curriculum</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: "Languages", value: "C++, C, JavaScript, TypeScript" },
                    { label: "Frontend", value: "HTML, CSS, React, Next.js, Tailwind" },
                    { label: "Backend", value: "Node.js, Express.js" },
                    { label: "Database", value: "MongoDB, Prisma ORM" },
                    { label: "State Mgmt", value: "Redux Toolkit, TanStack Query" },
                    { label: "Other", value: "DSA, Storyblok, Prismic" },
                  ].map((skill) => (
                    <div key={skill.label} className="flex flex-col gap-1">
                      <span className="text-xs text-foreground/40 uppercase tracking-wider">{skill.label}</span>
                      <span className="text-sm text-foreground/80 font-medium">{skill.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}

          {/* PASSION */}
          {activeTab === "passion" && (
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              {passions.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-foreground/10 bg-white/2 hover:border-primary/30 transition-all hover:scale-[1.02] group cursor-default"
                >
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* CAREER */}
          {activeTab === "career" && (
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              {careerGoals.map((goal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-foreground/10 bg-white/2 hover:border-secondary/30 transition-all hover:scale-[1.02] group cursor-default"
                >
                  <div className="text-3xl mb-3">{goal.icon}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-secondary transition-colors">
                    {goal.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
