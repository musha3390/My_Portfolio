"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden min-h-screen flex md:items-center">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none"/>
      
      <div className="container mx-auto px-6 pt-32 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              Available for work
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-[59px] font-semibold md:font-bold  tracking-tight mb-6 leading-tight"
          >
            Hi, I'm <span className="font-bold">Mushahid Raza</span>. <br />
            I build <span className="text-gradient">digital experiences</span>.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[16px] md:text-xl text-foreground/70 mb-10 max-w-2xl leading-relaxed"
          >
            I'm a full-stack developer passionate about creating beautiful, responsive, and user-centric web applications using modern technologies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Link
              href="#projects"
              className="inline-flex text-[14px] md:text-[18px] items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              View My Work
              <ArrowRight size={18} />
            </Link>
            
            <div className="flex items-center gap-4 ml-4">
              <Link href="https://github.com/musha3390" target="_blank" className="p-2 rounded-full glass hover:bg-surface-border transition-colors">
                <FaGithub size={22} />
              </Link>
              <Link href="https://www.linkedin.com/in/mushahid-raza-117095222/" target="_blank" className="p-2 rounded-full glass hover:bg-surface-border transition-colors">
                <FaLinkedin size={22} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
