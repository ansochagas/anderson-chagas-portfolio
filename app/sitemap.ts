import type { MetadataRoute } from "next";

import { publishedPortfolioCases } from "@/data/site-content";
import { getAbsoluteUrl } from "@/lib/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about", "/work"]
    .map((path) => getAbsoluteUrl(path))
    .filter((url): url is string => Boolean(url))
    .map((url) => ({
      url,
      lastModified: new Date(),
    }));

  const caseRoutes = publishedPortfolioCases
    .map((caseStudy) => getAbsoluteUrl(`/work/${caseStudy.slug}`))
    .filter((url): url is string => Boolean(url))
    .map((url) => ({
      url,
      lastModified: new Date(),
    }));

  return [...staticRoutes, ...caseRoutes];
}
