import { client } from "@/sanity/lib/client";
import { preEventsPageQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/sanity/lib/buildMetadata";
import PageClient from "./PageClient";

export async function generateMetadata() {
  const pageData = await client.fetch(preEventsPageQuery);

  return buildMetadata(pageData?.seo, {
    title: "Pre-events",
    description:
      "Explore Engineering Day pre-events and Career Day stops across Sweden.",
  });
}

export default async function Page() {
  const pageData = await client.fetch(preEventsPageQuery);

  return <PageClient initialPageData={pageData} />;
}