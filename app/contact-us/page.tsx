import { client } from "@/sanity/lib/client";
import { contactPageQuery } from "@/sanity/lib/queries";
import { buildMetadata } from "@/sanity/lib/buildMetadata";
import PageClient from "./PageClient";

export async function generateMetadata() {
  const pageData = await client.fetch(contactPageQuery);

  return buildMetadata(pageData?.seo, {
    title: "Contact Us | Engineering Day",
    description:
      "Get in touch with the Engineering Day team regarding participation, partnerships and general inquiries.",
  });
}

export default async function Page() {
  const pageData = await client.fetch(contactPageQuery);

  return <PageClient initialPageData={pageData as any} />;
}