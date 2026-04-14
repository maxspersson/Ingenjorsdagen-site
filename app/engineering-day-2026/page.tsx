import { client } from "@/sanity/lib/client";
import { engineeringDayPageQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/sanity/lib/buildMetadata";
import PageClient from "./PageClient";

export async function generateMetadata() {
  const pageData = await client.fetch(engineeringDayPageQuery);

  return buildMetadata(pageData?.page?.seo, {
    title: "Engineering Day 2026",
    description:
      "Engineering Day 2026 brings together engineers, leaders and innovators for a day of talks, masterclasses and networking.",
  });
}

export default async function Page() {
  const pageData = await client.fetch(engineeringDayPageQuery);

  return <PageClient initialPageData={pageData} />;
}