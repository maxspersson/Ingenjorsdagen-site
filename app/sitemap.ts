import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ingenjorsdagen.se";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/heroes`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/grand-prize`,
      lastModified: new Date(),
    },
    // osv...
  ];
}