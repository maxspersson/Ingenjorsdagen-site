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

type GrandPrizeCategorySeed = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

type JuryMemberSeed = {
  name: string;
  title: string;
  company: string;
  sortOrder: number;
};

const grandPrizePageSeed = {
  internalTitle: "Grand Prize Page",

  hero: {
    eyebrow: "The Grand Prize for Engineering",
    title: "Celebrating the people behind the progress",
    text: "Since 2021, we have celebrated the engineers, ideas and achievements that turn innovation into real-world impact.",
  },

  whySection: {
    label: "WHY?",
    title: "Engineering that matters",
    intro: "A prize for engineering that creates lasting impact.",
    body1:
      "Engineering has always been at the core of progress. From infrastructure and energy systems to digital platforms and intelligent machines, it is engineers who translate ideas into reality.",
    body2:
      "The Grand Prize for Engineering exists to recognize individuals and teams whose work not only advances technology, but creates lasting impact in society.",
    body3:
      "It highlights the people, ideas and achievements that move industries forward and shape the future through knowledge, courage and execution.",
  },

  whoSection: {
    label: "WHO?",
    title: "The people behind the progress",
    intro: "Individuals and teams redefining what engineering can achieve.",
    body1:
      "The Grand Prize for Engineering recognizes individuals and teams who have distinguished themselves through exceptional work, innovation and leadership. Their contributions push boundaries, solve real-world challenges and create meaningful impact across industries.",
    body2:
      "The prize is awarded across five categories: Innovation, Leadership, Sustainability, Rising Star and Role Model of the Year. Together, they reflect the breadth of engineering and the many ways progress is shaped.",
    body3:
      "From breakthrough technologies to transformative leadership, each category highlights those who contribute to building a more advanced, sustainable and resilient society.",
  },

  categoriesSection: {
    label: "WHAT?",
    title: "Five ways engineering makes an impact",
    intro:
      "Explore the five award categories within The Grand Prize for Engineering.",
  },

  jurySection: {
    title: "Meet the jury",
  },

  bottomSection: {
    title: "Engineering deserves recognition",
    text: "The Grand Prize for Engineering highlights the people and ideas that move society forward — not for attention, but for impact.",
    linkLabel: "The winners will be celebrated at SPACE, Stockholm · October 21",
    linkHref: "/engineering-day-2026",
  },
};

const categoriesSeed: GrandPrizeCategorySeed[] = [
  {
    title: "Innovation",
    description:
      "For breakthrough ideas, technologies and solutions with the power to create real-world change.",
    href: "/the-grand-prize-for-engineering/innovation",
    linkLabel: "Read more",
  },
  {
    title: "Leadership",
    description:
      "For leaders who create progress by combining technical understanding with vision, courage and direction.",
    href: "/the-grand-prize-for-engineering/leadership",
    linkLabel: "Read more",
  },
  {
    title: "Sustainability",
    description:
      "For engineering that helps accelerate the transition toward a more sustainable and resilient society.",
    href: "/the-grand-prize-for-engineering/sustainability",
    linkLabel: "Read more",
  },
  {
    title: "Rising Star",
    description:
      "For emerging engineers whose ideas, leadership or technical achievements point clearly toward the future.",
    href: "/the-grand-prize-for-engineering/rising-star",
    linkLabel: "Read more",
  },
  {
    title: "Role Model of the Year",
    description:
      "For those who inspire others through leadership, expertise and a clear commitment to positive change.",
    href: "/the-grand-prize-for-engineering/role-model-of-the-year",
    linkLabel: "Read more",
  },
];

const juryMembersSeed: JuryMemberSeed[] = [
  {
    name: "Anna Holm",
    title: "Chief Technology Officer",
    company: "NordTech",
    sortOrder: 1,
  },
  {
    name: "Erik Lund",
    title: "VP Engineering",
    company: "Future Systems",
    sortOrder: 2,
  },
  {
    name: "Sara Berg",
    title: "Head of Innovation",
    company: "Green Industry",
    sortOrder: 3,
  },
  {
    name: "Johan Ek",
    title: "Director of R&D",
    company: "Infra Nordic",
    sortOrder: 4,
  },
  {
    name: "Lisa Nyström",
    title: "Senior Advisor",
    company: "Industrial Transformation",
    sortOrder: 5,
  },
  {
    name: "Mikael Sjöberg",
    title: "Engineering Director",
    company: "Nordic Grid",
    sortOrder: 6,
  },
  {
    name: "Karin West",
    title: "Head of Product Development",
    company: "Urban Systems",
    sortOrder: 7,
  },
  {
    name: "David Lind",
    title: "Innovation Lead",
    company: "Advanced Materials",
    sortOrder: 8,
  },
  {
    name: "Elin Fors",
    title: "Senior Engineering Manager",
    company: "TechWorks",
    sortOrder: 9,
  },
  {
    name: "Oskar Broman",
    title: "R&D Strategist",
    company: "Future Mobility",
    sortOrder: 10,
  },
  {
    name: "Maria Nyberg",
    title: "Director of Sustainability Engineering",
    company: "GreenCore",
    sortOrder: 11,
  },
  {
    name: "Henrik Åström",
    title: "Chief Engineer",
    company: "Industrial Scale",
    sortOrder: 12,
  },
  {
    name: "Sofia Lindqvist",
    title: "Transformation Lead",
    company: "Energy Systems",
    sortOrder: 13,
  },
  {
    name: "Patrik Holmér",
    title: "VP Technology",
    company: "Smart Infra",
    sortOrder: 14,
  },
  {
    name: "Nina Ekström",
    title: "Head of Research Collaboration",
    company: "Engine Lab",
    sortOrder: 15,
  },
];

async function upsertGrandPrizePage() {
  const existing = await writeClient.fetch(
    `*[_type == "grandPrizePage"][0]{ _id }`
  );

  const doc = {
    _type: "grandPrizePage",
    internalTitle: grandPrizePageSeed.internalTitle,
    hero: grandPrizePageSeed.hero,
    whySection: grandPrizePageSeed.whySection,
    whoSection: grandPrizePageSeed.whoSection,
    categoriesSection: grandPrizePageSeed.categoriesSection,
    categories: categoriesSeed,
    jurySection: grandPrizePageSeed.jurySection,
    bottomSection: grandPrizePageSeed.bottomSection,
  };

  if (existing?._id) {
    await writeClient.patch(existing._id).set(doc).commit();
    console.log("Grand Prize Page updated");
    return;
  }

  await writeClient.create(doc);
  console.log("Grand Prize Page created");
}

async function upsertJuryMember(member: JuryMemberSeed) {
  const existing = await writeClient.fetch(
    `*[_type == "juryMember" && name == $name][0]{ _id }`,
    { name: member.name }
  );

  const doc = {
    _type: "juryMember",
    name: member.name,
    title: member.title,
    company: member.company,
    sortOrder: member.sortOrder,
  };

  if (existing?._id) {
    await writeClient.patch(existing._id).set(doc).commit();
    console.log(`Jury member updated: ${member.name}`);
    return;
  }

  await writeClient.create(doc);
  console.log(`Jury member created: ${member.name}`);
}

async function run() {
  await upsertGrandPrizePage();

  for (const member of juryMembersSeed) {
    await upsertJuryMember(member);
  }

  console.log("Done seeding Grand Prize Page and jury members.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});