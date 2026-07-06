"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS","SaaS/Scss", "Redux Toolkit", "GSAP","Zustand", "React-Query/Tan-stack-Query", "React-Form-HooK","Formik"] },
  { category: "Backend", items: ["Node.js", "Express","GraphQL", "Rest API", "PostgreSQL", "MongoDB"] },
  { category: "Tools & DevOps", items: ["Git", "Vercel", "Netlify", "CI/CD"] },
  { category: "Design", items: ["Figma", "UI/UX Principles", "Responsive Design"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">


      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb:10 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold md:font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 h-[3px] rounded-full mx-auto mt-4" style={{ backgroundColor: 'var(--primary)' }}></div>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use
            to build robust applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass px-8 py-4 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary inline-block">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-white/8  text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-foreground/70 text-lg mb-8 text-center mt-10">
          I specialize in developing scalable frontend applications using React,
          Next.js, TypeScript, Redux Toolkit, TanStack Query, and Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
