import { userAgent } from 'next/server'
import { siteUrl } from '@/lib/site';

const robots = () => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

export default robots
