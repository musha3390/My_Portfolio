"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center"
    >


      <div className="container mx-auto px-6 pt-28 pb-16 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center jus gap-12 md:gap-20">
          {/* Left: Text content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-[58px] font-bold tracking-tight mb-4 leading-tight"
            >
              Hi, I&apos;m <span className="text-primary">Mushahid Raza</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl md:text-2xl font-medium text-foreground/60 mb-4"
            >
              Frontend Developer &amp; React, Next.js Engineer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex items-center gap-2 text-foreground/50 text-sm mb-6 justify-center md:justify-start"
            >
              <MapPin size={14} />
              <span>Bhopal, India</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-foreground/70 mb-8 max-w-xl leading-relaxed"
            >
              I&apos;m a passionate frontend developer specializing in React,
              Next.js, and TypeScript. I love building scalable, beautiful,
              and user-centric web applications that solve real-world problems.
            </motion.p>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start"
            >
              {["React", "Next.js", "TypeScript", "Node.js", "MongoDB"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary/80 font-medium"
                  >
                    {tech}
                  </span>
                ),
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center justify-center md:justify-start"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/85 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-primary/30"
              >
                View My Work
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-foreground/20 hover:border-primary/50 px-6 py-3 rounded-full font-medium transition-all hover:bg-primary/5"
              >
                <Download size={16} />
                Contact Me
              </Link>

              <div className="flex items-center gap-3 ml-1">
                <Link
                  href="https://github.com/musha3390"
                  target="_blank"
                  className="p-2.5 rounded-full border border-foreground/10 hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
                >
                  <FaGithub size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mushahid-raza-117095222/"
                  target="_blank"
                  className="p-2.5 rounded-full border border-foreground/10 hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
                >
                  <FaLinkedin size={20} />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 relative md:mr-12"
          >


            {/* Outer decorative ring */}
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-[2px]"
              style={{ backgroundColor: "var(--primary)" }}
            >
              {/* Inner white border */}
              <div className="w-full h-full rounded-full p-1 bg-background">
                <Image
                  src="/profile.jpg"
                  alt="Mushahid Raza - Full Stack Developer"
                  width={320}
                  height={320}
                  className="w-full h-full rounded-full object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Floating badge: Experience */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 bg-background border border-primary/20 rounded-2xl px-4 py-2 shadow-xl"
            >
              <p className="text-xs text-foreground/50">Experience</p>
              <p className="text-sm font-bold text-primary">5+ Months</p>
            </motion.div>

            {/* Floating badge: Projects */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-6 bg-background border border-secondary/20 rounded-2xl px-4 py-2 shadow-xl"
            >
              <p className="text-xs text-foreground/50">Projects</p>
              <p className="text-sm font-bold text-secondary">5+ Built</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
