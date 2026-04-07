import dotenv from "dotenv";
import { createClient } from "next-sanity";

dotenv.config({ path: ".env.local" });

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2026-03-20",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const preEventsPageSeed = {
  internalTitle: "Pre-events Page",

  hero: {
    eyebrow: "Pre-events",
    title: "A fair designed for your next step",
    subtitle:
      "Career Day brings together engineers, tech professionals and employers in a format built around real conversations, direct contact and concrete opportunities.",
  },

  whySection: {
    label: "Why?",
    title: "Built for the right match",
    intro: "A more focused setting for engineers and employers to meet.",
    body1:
      "Career Day is built on a simple idea: the right match rarely happens through noise.",
    body2:
      "Instead of large, crowded formats, the focus is on creating a setting where engineers and companies can meet more directly — where conversations are relevant, and where opportunities are tangible.",
    body3:
      "As hiring begins to gradually pick up again after a more uncertain period, the need for spaces that connect talent and employers becomes clearer. Career Day is designed to meet that moment, offering a more focused and human way to explore what comes next.",
  },

  whatToExpectSection: {
    label: "What to expect",
    intro:
      "Each event is designed as a focused half-day format where visitors can move freely between companies, conversations and opportunities.",
  },

  expectationCards: [
    {
      title: "Employers on site",
      text: "Meet companies that are actively looking for engineers and tech professionals across different fields.",
    },
    {
      title: "Real conversations",
      text: "Speak directly with hiring teams, recruiters and peers in a setting built around access rather than noise.",
    },
    {
      title: "Career guidance",
      text: "Selected events include support around CVs, applications and interview preparation.",
    },
    {
      title: "The next step",
      text: "Whether you are actively job hunting or simply exploring what is next, the format is designed to move things forward.",
    },
  ],

  upcomingStopsSection: {
    label: "Upcoming stops",
    intro:
      "Career Day will take place in three cities during 2026. Each location reflects its local context, while staying true to the same core format.",
  },

  cityCards: [
    {
      meta: "Stockholm · 22 April 2026 · Kulturhuset",
      title: "Career Day @ Stockholm",
      text: "A focused career fair at Kulturhuset, bringing together engineers, tech professionals and employers in the capital.",
      href: "/pre-events/stockholm",
      linkLabel: "View city page",
    },
    {
      meta: "Göteborg · 27 April 2026 · Radisson Blu",
      title: "Career Day @ Göteborg",
      text: "A west coast stop designed to connect regional employers with engineering talent across industries and disciplines.",
      href: "/pre-events/goteborg",
      linkLabel: "View city page",
    },
    {
      meta: "Malmö · 11 November 2026 · Slagthuset",
      title: "Career Day @ Malmö",
      text: "A southern stop where engineers and companies meet in a more direct and personal format centred around recruitment.",
      href: "/pre-events/malmo",
      linkLabel: "View city page",
    },
  ],

  closingSection: {
    title: "Part of a broader platform",
    body1:
      "Career Day is part of Engineering Day — Sweden’s platform for engineers, innovation and the future of technology.",
    body2:
      "While the main event takes place in October, the pre-events extend the idea throughout the year. They bring the community closer to the market, creating opportunities for engineers and companies to meet where things are already in motion.",
    body3:
      "Together, they form a platform that is not only about celebrating engineering — but about enabling it.",
  },
};

async function upsertPreEventsPage() {
  const existing = await writeClient.fetch(
    `*[_type == "preEventsPage"][0]{ _id }`
  );

  const doc = {
    _type: "preEventsPage",
    internalTitle: preEventsPageSeed.internalTitle,
    hero: preEventsPageSeed.hero,
    whySection: preEventsPageSeed.whySection,
    whatToExpectSection: preEventsPageSeed.whatToExpectSection,
    expectationCards: preEventsPageSeed.expectationCards,
    upcomingStopsSection: preEventsPageSeed.upcomingStopsSection,
    cityCards: preEventsPageSeed.cityCards,
    closingSection: preEventsPageSeed.closingSection,
  };

  if (existing?._id) {
    await writeClient.patch(existing._id).set(doc).commit();
    console.log("Pre-events Page updated");
    return;
  }

  await writeClient.create(doc);
  console.log("Pre-events Page created");
}

async function run() {
  await upsertPreEventsPage();
  console.log("Done seeding Pre-events Page.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});