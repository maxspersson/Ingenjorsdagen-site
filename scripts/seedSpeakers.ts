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

type PersonSeed = {
  name: string;
  title: string;
  company: string;
  cardLabel: string;
  session: string;
  focus: string;
  bio: string;
  placements?: string[];
  order?: number;
};

type SessionGroupSeed = {
  title: string;
  description?: string;
  type: "panel" | "fireside" | "masterclass";
  people: string[];
  order: number;
};

const featuredPeople: PersonSeed[] = [
  {
    name: "Anna Svensson",
    title: "Chief Technology Officer",
    company: "Nordic Systems",
    cardLabel: "Keynote",
    placements: ["featured", "keynote"],
    session: "Closing keynote",
    focus:
      "A final reflection on engineering, leadership and what the conversations of the day reveal about where the field is heading next.",
    bio:
      "Anna Svensson leads technology and engineering strategy at Nordic Systems. Her work focuses on scaling technical capability, building resilient teams and ensuring that engineering remains close to both execution and long-term direction.",
    order: 1,
  },
  {
    name: "Johan Berg",
    title: "Moderator",
    company: "Engineering Day",
    cardLabel: "Moderator",
    placements: ["featured", "moderator"],
    session: "Main stage",
    focus:
      "Guiding the day across talks, panels and fireside conversations, while connecting different themes into one coherent programme.",
    bio:
      "Johan Berg is an experienced moderator and communicator with a strong understanding of engineering, innovation and how to create conversations that are both accessible and substantial.",
    order: 2,
  },
  {
    name: "Lisa Andersson",
    title: "Head of Product and Engineering",
    company: "Innovation AB",
    cardLabel: "Panel",
    placements: ["featured"],
    session: "The future of engineering leadership",
    focus:
      "What engineering leadership looks like when product, technology and organisational change need to move together.",
    bio:
      "Lisa Andersson works at the intersection of product development, engineering and strategy. She is known for building teams and structures that turn technical ambition into real progress.",
    order: 3,
  },
];

const heroTalks: PersonSeed[] = [
  {
    name: "David Holm",
    title: "Engineering Director",
    company: "Future Systems",
    cardLabel: "Hero Talk",
    placements: ["heroTalks"],
    session: "Hero Talk",
    focus:
      "What engineering organisations need in order to navigate constant technological change without losing direction.",
    bio:
      "David Holm has led large-scale engineering organisations across product, platform and systems development, with a focus on clarity, structure and technical depth.",
    order: 4,
  },
  {
    name: "Sara Lind",
    title: "Sustainability Lead",
    company: "Green Industry",
    cardLabel: "Hero Talk",
    placements: ["heroTalks"],
    session: "Hero Talk",
    focus:
      "How technical decisions shape sustainability outcomes in practice, and why engineering expertise matters in the transition.",
    bio:
      "Sara Lind works with engineering-led sustainability strategy, helping organisations connect technology choices with long-term environmental and societal impact.",
    order: 5,
  },
  {
    name: "Maria Nilsson",
    title: "Research Lead",
    company: "AI Labs",
    cardLabel: "Hero Talk",
    placements: ["heroTalks"],
    session: "Hero Talk",
    focus:
      "Where applied AI creates real value, and where engineering judgement still matters most.",
    bio:
      "Maria Nilsson works with applied research and industrial AI, focusing on the distance between experimentation, implementation and long-term usefulness.",
    order: 6,
  },
  {
    name: "Erik Johansson",
    title: "VP Engineering",
    company: "Tech AB",
    cardLabel: "Hero Talk",
    placements: ["heroTalks"],
    session: "Hero Talk",
    focus:
      "Building engineering cultures that balance speed, quality and responsibility in periods of rapid change.",
    bio:
      "Erik Johansson leads engineering teams focused on digital transformation, technical quality and operational resilience.",
    order: 7,
  },
  {
    name: "Sofia Mark",
    title: "People & Engineering Lead",
    company: "Growth Tech",
    cardLabel: "Hero Talk",
    placements: ["heroTalks"],
    session: "Hero Talk",
    focus:
      "How talent, culture and technical environments influence what engineering organisations can actually achieve.",
    bio:
      "Sofia Mark works with engineering organisations where people, leadership and technical capability need to evolve together over time.",
    order: 8,
  },
];

const panelPeople: PersonSeed[] = [
  {
    name: "Lisa Andersson",
    title: "Head of Product and Engineering",
    company: "Innovation AB",
    cardLabel: "Panel",
    session: "The future of engineering leadership",
    focus:
      "What engineering leadership looks like when product, technology and organisational change need to move together.",
    bio:
      "Lisa Andersson works at the intersection of product development, engineering and strategy. She is known for building teams and structures that turn technical ambition into real progress.",
  },
  {
    name: "Karin Holm",
    title: "Chief Engineer",
    company: "North Systems",
    cardLabel: "Panel",
    session: "The future of engineering leadership",
    focus:
      "How engineering leaders can stay technically grounded while taking broader strategic responsibility.",
    bio:
      "Karin Holm has led engineering organisations through transformation, growth and increased complexity, always with a strong focus on technical credibility.",
    order: 9,
  },
  {
    name: "Oskar Lindberg",
    title: "Chief Technology Officer",
    company: "ScaleWorks",
    cardLabel: "Panel",
    session: "The future of engineering leadership",
    focus:
      "What changes when engineering becomes central not only to product development, but to the business as a whole.",
    bio:
      "Oskar Lindberg works with scaling engineering teams and aligning product, technology and organisational structure.",
    order: 10,
  },
  {
    name: "Jonas Ek",
    title: "Head of Innovation",
    company: "Infra Group",
    cardLabel: "Panel",
    session: "Engineering for a more resilient society",
    focus:
      "How engineering decisions in infrastructure influence resilience far beyond the immediate project.",
    bio:
      "Jonas Ek works with innovation and systems development in infrastructure-heavy environments where reliability and long-term thinking are essential.",
    order: 11,
  },
  {
    name: "Nina Fors",
    title: "Sustainability Director",
    company: "Urban Future",
    cardLabel: "Panel",
    session: "Engineering for a more resilient society",
    focus:
      "Where sustainability and engineering intersect in real-world decision-making and implementation.",
    bio:
      "Nina Fors focuses on sustainable development, technical implementation and the long-term resilience of cities and systems.",
    order: 12,
  },
  {
    name: "Peter Lund",
    title: "Program Manager",
    company: "Energy Systems",
    cardLabel: "Panel",
    session: "Engineering for a more resilient society",
    focus:
      "How engineering, energy transition and systems stability connect in practice.",
    bio:
      "Peter Lund leads strategic engineering initiatives linked to energy transition, infrastructure and long-term systems performance.",
    order: 13,
  },
];

const firesidePeople: PersonSeed[] = [
  {
    name: "Helena Söder",
    title: "Chief Architect",
    company: "Core Systems",
    cardLabel: "Fireside",
    session: "Building technology that lasts",
    focus:
      "Why long-term engineering value is often decided early, in architecture, trade-offs and technical priorities.",
    bio:
      "Helena Söder has deep experience in architecture, systems design and long-horizon product development across technically demanding environments.",
    order: 14,
  },
  {
    name: "Mikael Strand",
    title: "Engineering Advisor",
    company: "Tech Forum",
    cardLabel: "Fireside",
    session: "Building technology that lasts",
    focus:
      "How engineering teams can make better long-term decisions even when short-term pressure is high.",
    bio:
      "Mikael Strand advises engineering leaders on technical strategy, system longevity and organisational design.",
    order: 15,
  },
  {
    name: "Sofia Mark",
    title: "People & Engineering Lead",
    company: "Growth Tech",
    cardLabel: "Fireside",
    session: "Talent, growth and technical culture",
    focus:
      "How engineering culture shapes hiring, retention and the long-term strength of technical organisations.",
    bio:
      "Sofia Mark works with engineering organisations where people, leadership and technical environments need to evolve together over time.",
  },
  {
    name: "Emma Dahl",
    title: "VP Technology",
    company: "Advanced Tech",
    cardLabel: "Fireside",
    session: "Talent, growth and technical culture",
    focus:
      "What technical leaders can do to make engineering environments more attractive, durable and ambitious.",
    bio:
      "Emma Dahl has extensive experience in engineering strategy, systems thinking and organisational change in technology-heavy businesses.",
    order: 16,
  },
];

const masterclassPeople: PersonSeed[] = [
  {
    name: "Maria Nilsson",
    title: "Research Lead",
    company: "AI Labs",
    cardLabel: "Masterclass",
    session: "Applied AI in engineering workflows",
    focus:
      "How teams can work with AI in ways that are useful, grounded and technically meaningful.",
    bio:
      "Maria Nilsson works with applied research and industrial AI, focusing on the gap between experimentation, implementation and long-term usefulness.",
  },
  {
    name: "Erik Johansson",
    title: "VP Engineering",
    company: "Tech AB",
    cardLabel: "Masterclass",
    session: "Engineering leadership in practice",
    focus:
      "What engineering leaders need when clarity, direction and execution all need to happen at once.",
    bio:
      "Erik Johansson leads engineering teams focused on digital transformation, technical quality and operational resilience.",
  },
  {
    name: "Sara Lind",
    title: "Sustainability Lead",
    company: "Green Industry",
    cardLabel: "Masterclass",
    session: "Sustainable systems in practice",
    focus:
      "How engineering teams can work with sustainability in concrete ways, without turning it into a parallel track.",
    bio:
      "Sara Lind works with engineering-led sustainability strategy, helping organisations connect technology choices with long-term environmental and societal impact.",
  },
  {
    name: "Lisa Andersson",
    title: "Head of Product and Engineering",
    company: "Innovation AB",
    cardLabel: "Masterclass",
    session: "Product, systems and execution",
    focus:
      "How to build stronger connections between engineering decisions, product direction and long-term delivery capability.",
    bio:
      "Lisa Andersson works at the intersection of product development, engineering and strategy. She is known for building teams and structures that turn technical ambition into real progress.",
  },
];

const moderatorPeople: PersonSeed[] = [
  {
    name: "Johan Berg",
    title: "Moderator",
    company: "Engineering Day",
    cardLabel: "Moderator",
    placements: ["moderator"],
    session: "Main stage",
    focus:
      "Guiding the day across talks, panels and fireside conversations, while connecting different themes into one coherent programme.",
    bio:
      "Johan Berg is an experienced moderator and communicator with a strong understanding of engineering, innovation and how to create conversations that are both accessible and substantial.",
  },
];

const keynotePeople: PersonSeed[] = [
  {
    name: "Anna Svensson",
    title: "Chief Technology Officer",
    company: "Nordic Systems",
    cardLabel: "Keynote",
    placements: ["keynote"],
    session: "Closing keynote",
    focus:
      "A final reflection on engineering, leadership and what the conversations of the day reveal about where the field is heading next.",
    bio:
      "Anna Svensson leads technology and engineering strategy at Nordic Systems. Her work focuses on scaling technical capability, building resilient teams and ensuring that engineering remains close to both execution and long-term direction.",
  },
];

const sessionGroups: SessionGroupSeed[] = [
  {
    title: "Panel: The future of engineering leadership",
    description:
      "A conversation on leadership, accountability and how engineering organisations change when technology becomes a strategic core capability.",
    type: "panel",
    people: ["Lisa Andersson", "Karin Holm", "Oskar Lindberg"],
    order: 1,
  },
  {
    title: "Panel: Engineering for a more resilient society",
    description:
      "On infrastructure, sustainability and the role of engineering in shaping systems that can last and adapt over time.",
    type: "panel",
    people: ["Jonas Ek", "Nina Fors", "Peter Lund"],
    order: 2,
  },
  {
    title: "Fireside: Building technology that lasts",
    description:
      "A smaller-format conversation on durability, technical depth and why some engineering decisions matter for much longer than expected.",
    type: "fireside",
    people: ["Helena Söder", "Mikael Strand"],
    order: 3,
  },
  {
    title: "Fireside: Talent, growth and technical culture",
    description:
      "On what attracts engineers today and how strong technical cultures are built, maintained and made visible.",
    type: "fireside",
    people: ["Sofia Mark", "Emma Dahl"],
    order: 4,
  },
  {
    title: "Masterclass: Applied AI in engineering workflows",
    description:
      "A practical session on how AI can support engineering work without replacing judgement, structure or technical responsibility.",
    type: "masterclass",
    people: ["Maria Nilsson"],
    order: 5,
  },
  {
    title: "Masterclass: Engineering leadership in practice",
    description:
      "A smaller session on navigating structure, complexity and execution when engineering teams grow or change rapidly.",
    type: "masterclass",
    people: ["Erik Johansson"],
    order: 6,
  },
  {
    title: "Masterclass: Sustainable systems in practice",
    description:
      "A focused session on how sustainability ambitions are translated into engineering decisions, trade-offs and measurable outcomes.",
    type: "masterclass",
    people: ["Sara Lind"],
    order: 7,
  },
  {
    title: "Masterclass: Product, systems and execution",
    description:
      "On how engineering, product and technical execution can align more clearly in organisations where complexity keeps growing.",
    type: "masterclass",
    people: ["Lisa Andersson"],
    order: 8,
  },
];

function mergePeople(...groups: PersonSeed[][]): PersonSeed[] {
  const peopleMap = new Map<string, PersonSeed>();

  for (const person of groups.flat()) {
    const existing = peopleMap.get(person.name);

    if (!existing) {
      peopleMap.set(person.name, {
        ...person,
        placements: person.placements || [],
      });
      continue;
    }

    peopleMap.set(person.name, {
      ...existing,
      ...person,
      placements: Array.from(
        new Set([...(existing.placements || []), ...(person.placements || [])])
      ),
      order: existing.order ?? person.order,
    });
  }

  return Array.from(peopleMap.values());
}

async function upsertSpeaker(person: PersonSeed) {
  const existing = await writeClient.fetch(
    `*[_type == "speaker" && name == $name][0]{ _id }`,
    { name: person.name }
  );

  const doc = {
    _type: "speaker",
    name: person.name,
    title: person.title,
    company: person.company,
    cardLabel: person.cardLabel,
    placements: person.placements || [],
    session: person.session,
    focus: person.focus,
    bio: person.bio,
    order: person.order,
  };

  if (existing?._id) {
    return writeClient.patch(existing._id).set(doc).commit();
  }

  return writeClient.create(doc);
}

async function run() {
  const allPeople = mergePeople(
    featuredPeople,
    heroTalks,
    panelPeople,
    firesidePeople,
    masterclassPeople,
    moderatorPeople,
    keynotePeople
  );

  const speakerIdByName = new Map<string, string>();

  for (const person of allPeople) {
    const res: any = await upsertSpeaker(person);
    speakerIdByName.set(person.name, res._id);
    console.log(`Speaker upserted: ${person.name}`);
  }

  for (const group of sessionGroups) {
    const existing = await writeClient.fetch(
      `*[_type == "sessionGroup" && title == $title][0]{ _id }`,
      { title: group.title }
    );

    const peopleRefs = group.people
      .map((name) => speakerIdByName.get(name))
      .filter(Boolean)
      .map((id) => ({
        _type: "reference",
        _ref: id as string,
      }));

    const doc = {
      _type: "sessionGroup",
      title: group.title,
      description: group.description,
      type: group.type,
      people: peopleRefs,
      order: group.order,
    };

    if (existing?._id) {
      await writeClient.patch(existing._id).set(doc).commit();
      console.log(`Session group updated: ${group.title}`);
    } else {
      await writeClient.create(doc);
      console.log(`Session group created: ${group.title}`);
    }
  }

  console.log("Done seeding speakers and session groups.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});