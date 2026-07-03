import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ingenjorsdagen.se";

  const routes = [
  "",
  "/engineering-day-2026",
  "/attending-heroes",
  "/the-grand-prize-for-engineering",
  "/the-grand-prize-for-engineering/innovation",
  "/the-grand-prize-for-engineering/leadership",
  "/the-grand-prize-for-engineering/rising-star",
  "/the-grand-prize-for-engineering/role-model-of-the-year",
  "/the-grand-prize-for-engineering/sustainability",
  "/pre-events",
  "/pre-events/goteborg",
  "/pre-events/malmo",
  "/pre-events/stockholm",
  "/contact-us",
];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}