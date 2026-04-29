import { client } from "@/sanity/lib/client";
import {
  attendingHeroesPageQuery,
  speakersQuery,
  sessionGroupsQuery,
} from "@/sanity/lib/queries";
import { buildMetadata } from "@/sanity/lib/buildMetadata";
import PageClient from "./PageClient";

export async function generateMetadata() {
  const pageData = await client.fetch(
    attendingHeroesPageQuery,
    {},
    { cache: "no-store" }
  );

  return buildMetadata(pageData?.seo, {
    title: "Attending Heroes | Engineering Day",
    description:
      "Meet the engineers, leaders and innovators contributing to Engineering Day.",
  });
}

export default async function Page() {
  const [pageData, speakers, sessionGroups] = await Promise.all([
    client.fetch(attendingHeroesPageQuery, {}, { cache: "no-store" }),
    client.fetch(speakersQuery, {}, { cache: "no-store" }),
    client.fetch(sessionGroupsQuery, {}, { cache: "no-store" }),
  ]);

  return (
    <PageClient
      initialPageData={{
        page: pageData,
        speakers,
        sessionGroups,
      }}
    />
  );
}