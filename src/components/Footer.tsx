import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border md:py-4 py-12  relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-gradient">
            Raza
          </Link>
          <p className="text-foreground/50 text-sm">
            © {currentYear} Mushahid Raza. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" className="p-2 rounded-full hover:bg-surface-border text-foreground/70 hover:text-primary transition-colors">
            <FaGithub size={20} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="p-2 rounded-full hover:bg-surface-border text-foreground/70 hover:text-primary transition-colors">
            <FaLinkedin size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="p-2 rounded-full hover:bg-surface-border text-foreground/70 hover:text-primary transition-colors">
            <FaTwitter size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
