import type { Metadata } from "next";

const DEFAULT_SITE_TITLE = "Anderson Chagas | Senior Technical Product Manager";
const SITE_NAME = "Anderson Chagas Portfolio";

function normalizeSiteUrl(value?: string) {
  if (!value) {
    return undefined;
  }

  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return undefined;
  }

  const absoluteValue =
    trimmedValue.startsWith("http://") || trimmedValue.startsWith("https://")
      ? trimmedValue
      : `https://${trimmedValue}`;

  return absoluteValue.replace(/\/+$/, "");
}

const siteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalizeSiteUrl(process.env.VERCEL_URL);

export const defaultSiteTitle = DEFAULT_SITE_TITLE;
export const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
export const portfolioSiteName = SITE_NAME;

export function getSiteUrl() {
  return siteUrl;
}

export function getAbsoluteUrl(path = "/") {
  if (!siteUrl) {
    return undefined;
  }

  return new URL(path, `${siteUrl}/`).toString();
}

type CreatePageMetadataOptions = {
  description: string;
  path?: string;
  robots?: Metadata["robots"];
  title?: string;
};

export function createPageMetadata({
  description,
  path = "/",
  robots,
  title,
}: CreatePageMetadataOptions): Metadata {
  const absoluteUrl = getAbsoluteUrl(path);
  const fullTitle = title ? `${title} | Anderson Chagas` : DEFAULT_SITE_TITLE;

  return {
    title: title ?? { absolute: DEFAULT_SITE_TITLE },
    description,
    alternates: absoluteUrl ? { canonical: absoluteUrl } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots,
  };
}
