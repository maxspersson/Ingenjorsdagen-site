import { client } from "@/sanity/lib/client";
import { attendingHeroesPageQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/sanity/lib/buildMetadata";
import PageClient from "./PageClient";

export async function generateMetadata() {
  const pageData = await client.fetch(attendingHeroesPageQuery);

  return buildMetadata(pageData?.seo, {
    title: "Attending Heroes | Engineering Day",
    description:
      "Meet the engineers, leaders and innovators contributing to Engineering Day.",
  });
}

export default async function Page() {
  const pageData = await client.fetch(attendingHeroesPageQuery);

  return <PageClient initialPageData={pageData} />;
}