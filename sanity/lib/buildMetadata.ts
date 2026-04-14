import type { Metadata } from "next";

type SeoData = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
  ogImage?: {
    asset?: {
      url?: string;
    };
  };
};

type FallbackData = {
  title: string;
  description: string;
};

export function buildMetadata(
  seo?: SeoData,
  fallback?: FallbackData
): Metadata {
  const title = seo?.title || fallback?.title || "";
  const description = seo?.description || fallback?.description || "";
  const ogTitle = seo?.ogTitle || title;
  const ogDescription = seo?.ogDescription || description;
  const ogImage = seo?.ogImage?.asset?.url;

  return {
    title,
    description,
    robots: seo?.noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [{ url: ogImage }] : [],
    },
  };
}