import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/sanity/lib/buildMetadata";
import PageClient from "./PageClient";

export async function generateMetadata() {
  const pageData = await client.fetch(homePageQuery);

  return buildMetadata(pageData?.seo, {
    title: "Engineering Day",
    description:
      "Engineering Day is a platform for conversations, recognition, talent and the engineering ideas shaping what comes next.",
  });
}

export default async function Page() {
  const pageData = await client.fetch(homePageQuery);

  return <PageClient initialPageData={pageData} />;
}