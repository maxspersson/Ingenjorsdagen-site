import { client } from "@/sanity/lib/client";
import { grandPrizeCategoryPageQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/sanity/lib/buildMetadata";
import PageClient from "./PageClient";

export async function generateMetadata() {
  const pageData = await client.fetch(grandPrizeCategoryPageQuery, {
    slug: "rising-star",
  });

  return buildMetadata(pageData?.seo, {
    title: "Rising Star",
    description:
      "Explore the Rising Star category within The Grand Prize for Engineering.",
  });
}

export default async function Page() {
  const pageData = await client.fetch(grandPrizeCategoryPageQuery, {
    slug: "rising-star",
  });

  return <PageClient initialPageData={pageData} />;
}