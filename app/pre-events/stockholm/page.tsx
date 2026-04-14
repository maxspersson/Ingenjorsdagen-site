import { client } from "@/sanity/lib/client";
import { preEventsCityQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/sanity/lib/buildMetadata";
import PageClient from "./PageClient";

export async function generateMetadata() {
  const pageData = await client.fetch(preEventsCityQuery, { slug: "stockholm" });

  return buildMetadata(pageData?.seo, {
    title: "Career Day Stockholm",
    description:
      "Explore Career Day Stockholm, part of Engineering Day pre-events.",
  });
}

export default async function Page() {
  const pageData = await client.fetch(preEventsCityQuery, { slug: "stockholm" });

  return <PageClient initialPageData={pageData} />;
}