import { client } from "@/sanity/lib/client";
import { preEventsCityQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/sanity/lib/buildMetadata";
import PageClient from "./PageClient";

export async function generateMetadata() {
  const pageData = await client.fetch(preEventsCityQuery, { slug: "goteborg" });

  return buildMetadata(pageData?.seo, {
    title: "Career Day Göteborg",
    description:
      "Explore Career Day Göteborg, part of Engineering Day pre-events.",
  });
}

export default async function Page() {
  const pageData = await client.fetch(preEventsCityQuery, { slug: "goteborg" });

  return <PageClient initialPageData={pageData} />;
}