import { siteConfig } from "./site";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,

  name: siteConfig.name,

  url: siteConfig.url,

  jobTitle: "Frontend Developer",

  description: siteConfig.description,

  email: "mushahidr317@gmail.com",

  nationality: "Indian",

  image: siteConfig.image,

  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "C Language",
    "c++",
    "DSA (Data Structure And Algorithm)",
    "Tailwind CSS",
    "MongoDB",
    "Prisma",
    "SEO",
  ],

  sameAs: [siteConfig.github, siteConfig.linkedin],
};
