import { client } from "@/sanity/lib/client";
import { grandPrizePageQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/sanity/lib/buildMetadata";
import PageClient from "./PageClient";

export async function generateMetadata() {
  const pageData = await client.fetch(grandPrizePageQuery);

  return buildMetadata(pageData?.page?.seo, {
    title: "The Grand Prize for Engineering",
    description:
      "Explore The Grand Prize for Engineering, its categories, jury and purpose.",
  });
}

export default async function Page() {
  const pageData = await client.fetch(grandPrizePageQuery);

  return <PageClient initialPageData={pageData} />;
}