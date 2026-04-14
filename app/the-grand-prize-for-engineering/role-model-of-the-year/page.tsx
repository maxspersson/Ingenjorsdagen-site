import { client } from "@/sanity/lib/client";
import { grandPrizeCategoryPageQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/sanity/lib/buildMetadata";
import PageClient from "./PageClient";

export async function generateMetadata() {
  const pageData = await client.fetch(grandPrizeCategoryPageQuery, {
    slug: "role-model-of-the-year",
  });

  return buildMetadata(pageData?.seo, {
    title: "Role Model of the Year",
    description:
      "Explore the Role Model of the Year category within The Grand Prize for Engineering.",
  });
}

export default async function Page() {
  const pageData = await client.fetch(grandPrizeCategoryPageQuery, {
    slug: "role-model-of-the-year",
  });

  return <PageClient initialPageData={pageData} />;
}