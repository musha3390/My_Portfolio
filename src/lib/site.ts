const productionUrl =
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `${process.env.NEXT_PUBLIC_SITE_URL}`
  : productionUrl
    ? `https://${productionUrl}`
    : "http://localhost:3000";

export const siteConfig = {
  name: "Mushahid Raza",

  title: "Mushahid Raza | Frontend Developer",

  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, and modern web applications. Explore my projects, skills, and professional experience.",

  url: siteUrl,

  image: `${siteUrl}/profile.png`,

  github: "https://github.com/musha3390",

  linkedin: "www.linkedin.com/in/mushahid-raza-117095222",
};
