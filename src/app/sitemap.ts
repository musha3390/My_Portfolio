import { siteUrl } from "@/lib/site";
;
const sitemap = () => {
  return [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
};

export default sitemap;
