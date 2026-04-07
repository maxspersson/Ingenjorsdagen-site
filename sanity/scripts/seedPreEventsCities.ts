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

type CitySeed = {
  internalTitle: string;
  slug: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  facts: {
    date: string;
    location: string;
    time: string;
    admission: string;
  };
  content: {
    label: string;
    title: string;
    intro: string;
    body1: string;
    body2: string;
    body3: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

const cities: CitySeed[] = [
  {
    internalTitle: "Pre-events Stockholm",
    slug: "stockholm",
    hero: {
      eyebrow: "Stockholm · 22 April 2026",
      title: "Career Day @ Stockholm",
      subtitle:
        "A focused career fair at Kulturhuset, bringing together engineers, tech professionals and companies ready to recruit.",
    },
    facts: {
      date: "22 April",
      location: "Kulturhuset",
      time: "09:00 - 12:00",
      admission: "Free",
    },
    content: {
      label: "Stockholm",
      title: "Where engineers meet opportunity",
      intro:
        "A morning built around real conversations, direct access and meaningful connections.",
      body1:
        "Stockholm is one of Sweden’s strongest hubs for engineering, technology and innovation. Career Day @ Stockholm brings together companies and engineers in a format designed to create direct connections in a focused and accessible setting.",
      body2:
        "At Kulturhuset, visitors can explore new opportunities, meet employers who are actively recruiting and take part in a morning built around conversations rather than noise. Whether you are actively looking for a new role or simply exploring what is next, the format is designed to make those next steps tangible.",
      body3:
        "It is a space where companies and engineers meet on equal terms — without layers in between, and with a shared focus on finding the right match.",
      ctaLabel: "View event details & register",
      ctaHref: "https://confetti.events/",
    },
  },
  {
    internalTitle: "Pre-events Goteborg",
    slug: "goteborg",
    hero: {
      eyebrow: "Göteborg · 27 April 2026",
      title: "Career Day @ Göteborg",
      subtitle:
        "A west coast stop designed to connect regional employers with engineering talent across industries and disciplines.",
    },
    facts: {
      date: "27 April",
      location: "Radisson Blu",
      time: "09:00 - 12:00",
      admission: "Free",
    },
    content: {
      label: "Göteborg",
      title: "A west coast meeting point",
      intro:
        "A local stop shaped around access, relevance and direct contact between engineers and employers.",
      body1:
        "Göteborg has long been one of Sweden’s most important industrial and technical regions. Career Day @ Göteborg creates a focused setting where engineers, tech professionals and employers can meet in a way that feels direct and practical.",
      body2:
        "The format is built to support relevant conversations, whether you are exploring new opportunities, looking for a next step or simply wanting a clearer view of the market. Companies on site are there to meet talent with real intent.",
      body3:
        "Rather than trying to do everything at once, the event is designed to do one thing well: create the conditions for the right conversations to happen.",
      ctaLabel: "View event details & register",
      ctaHref: "https://confetti.events/",
    },
  },
  {
    internalTitle: "Pre-events Malmo",
    slug: "malmo",
    hero: {
      eyebrow: "Malmö · 11 November 2026",
      title: "Career Day @ Malmö",
      subtitle:
        "A southern stop where engineers and companies meet in a more direct and personal format centred around recruitment.",
    },
    facts: {
      date: "11 November",
      location: "Slagthuset",
      time: "09:00 - 12:00",
      admission: "Free",
    },
    content: {
      label: "Malmö",
      title: "Direct, local and accessible",
      intro:
        "A career fair format designed to make it easier for engineers and employers to meet around real opportunities.",
      body1:
        "Malmö is a city shaped by movement, cross-border perspectives and a growing mix of technology, industry and knowledge-intensive business. Career Day @ Malmö reflects that context through a format that keeps the focus on direct access and meaningful conversations.",
      body2:
        "Visitors can meet employers, ask concrete questions and get a clearer sense of which opportunities are relevant right now. For companies, it is a chance to meet talent in a setting that is less crowded and more human.",
      body3:
        "The result is a format that feels both efficient and personal — built to help the right people find each other.",
      ctaLabel: "View event details & register",
      ctaHref: "https://confetti.events/",
    },
  },
];

async function upsertCity(city: CitySeed) {
  const existing = await writeClient.fetch(
    `*[_type == "preEventsCity" && slug.current == $slug][0]{ _id }`,
    { slug: city.slug }
  );

  const doc = {
    _type: "preEventsCity",
    internalTitle: city.internalTitle,
    slug: {
      _type: "slug",
      current: city.slug,
    },
    hero: city.hero,
    facts: city.facts,
    content: city.content,
  };

  if (existing?._id) {
    await writeClient.patch(existing._id).set(doc).commit();
    console.log(`Pre-events city updated: ${city.internalTitle}`);
    return;
  }

  await writeClient.create(doc);
  console.log(`Pre-events city created: ${city.internalTitle}`);
}

async function run() {
  for (const city of cities) {
    await upsertCity(city);
  }

  console.log("Done seeding pre-events cities.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});