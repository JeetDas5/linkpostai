import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://linkpostai.jeetdas.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
