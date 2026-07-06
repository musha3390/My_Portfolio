import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border md:py-4 py-12  relative overflow-hidden">


      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link
            href="#hero"
            className="text-2xl font-bold tracking-tight text-foreground"
          >
            Mushahid<span className="text-primary">.</span>
          </Link>
          <p className="text-foreground/50 text-sm text-center">
            Frontend Developer specializing in React, Next.js, TypeScript, and
            modern web technologies.
          </p>
          <p className="text-foreground/50 text-sm text-center">
            @ {currentYear} Mushahid Raza. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/musha3390"
            target="_blank"
            className="p-2 rounded-full hover:bg-surface-border text-foreground/70 hover:text-primary transition-colors"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mushahid-raza-117095222/"
            target="_blank"
            className="p-2 rounded-full hover:bg-surface-border text-foreground/70 hover:text-primary transition-colors"
          >
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
