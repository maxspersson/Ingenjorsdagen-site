"use client";

import { useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type Person = {
  name: string;
  title: string;
  company: string;
  image: string;
  format: string;
  session: string;
  focus: string;
  bio: string;
};

type SessionGroup = {
  title: string;
  description?: string;
  people: Person[];
};

const featuredPeople: Person[] = [
  {
    name: "Anna Svensson",
    title: "Chief Technology Officer",
    company: "Nordic Systems",
    image: "/speaker1.jpg",
    format: "Keynote",
    session: "Closing keynote",
    focus:
      "A final reflection on engineering, leadership and what the conversations of the day reveal about where the field is heading next.",
    bio:
      "Anna Svensson leads technology and engineering strategy at Nordic Systems. Her work focuses on scaling technical capability, building resilient teams and ensuring that engineering remains close to both execution and long-term direction.",
  },
  {
    name: "Johan Berg",
    title: "Moderator",
    company: "Engineering Day",
    image: "/johan-berg.jpg",
    format: "Moderator",
    session: "Main stage",
    focus:
      "Guiding the day across talks, panels and fireside conversations, while connecting different themes into one coherent programme.",
    bio:
      "Johan Berg is an experienced moderator and communicator with a strong understanding of engineering, innovation and how to create conversations that are both accessible and substantial.",
  },
  {
    name: "Lisa Andersson",
    title: "Head of Product and Engineering",
    company: "Innovation AB",
    image: "/speaker3.jpg",
    format: "Panel",
    session: "The future of engineering leadership",
    focus:
      "What engineering leadership looks like when product, technology and organisational change need to move together.",
    bio:
      "Lisa Andersson works at the intersection of product development, engineering and strategy. She is known for building teams and structures that turn technical ambition into real progress.",
  },
];

const heroTalks: Person[] = [
  {
    name: "David Holm",
    title: "Engineering Director",
    company: "Future Systems",
    image: "/speaker6.jpg",
    format: "Hero Talk",
    session: "Hero Talk",
    focus:
      "What engineering organisations need in order to navigate constant technological change without losing direction.",
    bio:
      "David Holm has led large-scale engineering organisations across product, platform and systems development, with a focus on clarity, structure and technical depth.",
  },
  {
    name: "Sara Lind",
    title: "Sustainability Lead",
    company: "Green Industry",
    image: "/speaker7.jpg",
    format: "Hero Talk",
    session: "Hero Talk",
    focus:
      "How technical decisions shape sustainability outcomes in practice, and why engineering expertise matters in the transition.",
    bio:
      "Sara Lind works with engineering-led sustainability strategy, helping organisations connect technology choices with long-term environmental and societal impact.",
  },
  {
    name: "Maria Nilsson",
    title: "Research Lead",
    company: "AI Labs",
    image: "/speaker5.jpg",
    format: "Hero Talk",
    session: "Hero Talk",
    focus:
      "Where applied AI creates real value, and where engineering judgement still matters most.",
    bio:
      "Maria Nilsson works with applied research and industrial AI, focusing on the distance between experimentation, implementation and long-term usefulness.",
  },
  {
    name: "Erik Johansson",
    title: "VP Engineering",
    company: "Tech AB",
    image: "/speaker4.jpg",
    format: "Hero Talk",
    session: "Hero Talk",
    focus:
      "Building engineering cultures that balance speed, quality and responsibility in periods of rapid change.",
    bio:
      "Erik Johansson leads engineering teams focused on digital transformation, technical quality and operational resilience.",
  },
  {
    name: "Sofia Mark",
    title: "People & Engineering Lead",
    company: "Growth Tech",
    image: "/speaker16.jpg",
    format: "Hero Talk",
    session: "Hero Talk",
    focus:
      "How talent, culture and technical environments influence what engineering organisations can actually achieve.",
    bio:
      "Sofia Mark works with engineering organisations where people, leadership and technical capability need to evolve together over time.",
  },
];

const panelSessions: SessionGroup[] = [
  {
    title: "Panel: The future of engineering leadership",
    description:
      "A conversation on leadership, accountability and how engineering organisations change when technology becomes a strategic core capability.",
    people: [
      {
        name: "Lisa Andersson",
        title: "Head of Product and Engineering",
        company: "Innovation AB",
        image: "/speaker3.jpg",
        format: "Panel",
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
        image: "/speaker8.jpg",
        format: "Panel",
        session: "The future of engineering leadership",
        focus:
          "How engineering leaders can stay technically grounded while taking broader strategic responsibility.",
        bio:
          "Karin Holm has led engineering organisations through transformation, growth and increased complexity, always with a strong focus on technical credibility.",
      },
      {
        name: "Oskar Lindberg",
        title: "Chief Technology Officer",
        company: "ScaleWorks",
        image: "/speaker9.jpg",
        format: "Panel",
        session: "The future of engineering leadership",
        focus:
          "What changes when engineering becomes central not only to product development, but to the business as a whole.",
        bio:
          "Oskar Lindberg works with scaling engineering teams and aligning product, technology and organisational structure.",
      },
    ],
  },
  {
    title: "Panel: Engineering for a more resilient society",
    description:
      "On infrastructure, sustainability and the role of engineering in shaping systems that can last and adapt over time.",
    people: [
      {
        name: "Jonas Ek",
        title: "Head of Innovation",
        company: "Infra Group",
        image: "/speaker11.jpg",
        format: "Panel",
        session: "Engineering for a more resilient society",
        focus:
          "How engineering decisions in infrastructure influence resilience far beyond the immediate project.",
        bio:
          "Jonas Ek works with innovation and systems development in infrastructure-heavy environments where reliability and long-term thinking are essential.",
      },
      {
        name: "Nina Fors",
        title: "Sustainability Director",
        company: "Urban Future",
        image: "/speaker12.jpg",
        format: "Panel",
        session: "Engineering for a more resilient society",
        focus:
          "Where sustainability and engineering intersect in real-world decision-making and implementation.",
        bio:
          "Nina Fors focuses on sustainable development, technical implementation and the long-term resilience of cities and systems.",
      },
      {
        name: "Peter Lund",
        title: "Program Manager",
        company: "Energy Systems",
        image: "/speaker13.jpg",
        format: "Panel",
        session: "Engineering for a more resilient society",
        focus:
          "How engineering, energy transition and systems stability connect in practice.",
        bio:
          "Peter Lund leads strategic engineering initiatives linked to energy transition, infrastructure and long-term systems performance.",
      },
    ],
  },
];

const firesideSessions: SessionGroup[] = [
  {
    title: "Fireside: Building technology that lasts",
    description:
      "A smaller-format conversation on durability, technical depth and why some engineering decisions matter for much longer than expected.",
    people: [
      {
        name: "Helena Söder",
        title: "Chief Architect",
        company: "Core Systems",
        image: "/speaker14.jpg",
        format: "Fireside",
        session: "Building technology that lasts",
        focus:
          "Why long-term engineering value is often decided early, in architecture, trade-offs and technical priorities.",
        bio:
          "Helena Söder has deep experience in architecture, systems design and long-horizon product development across technically demanding environments.",
      },
      {
        name: "Mikael Strand",
        title: "Engineering Advisor",
        company: "Tech Forum",
        image: "/speaker15.jpg",
        format: "Fireside",
        session: "Building technology that lasts",
        focus:
          "How engineering teams can make better long-term decisions even when short-term pressure is high.",
        bio:
          "Mikael Strand advises engineering leaders on technical strategy, system longevity and organisational design.",
      },
    ],
  },
  {
    title: "Fireside: Talent, growth and technical culture",
    description:
      "On what attracts engineers today and how strong technical cultures are built, maintained and made visible.",
    people: [
      {
        name: "Sofia Mark",
        title: "People & Engineering Lead",
        company: "Growth Tech",
        image: "/speaker16.jpg",
        format: "Fireside",
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
        image: "/speaker10.jpg",
        format: "Fireside",
        session: "Talent, growth and technical culture",
        focus:
          "What technical leaders can do to make engineering environments more attractive, durable and ambitious.",
        bio:
          "Emma Dahl has extensive experience in engineering strategy, systems thinking and organisational change in technology-heavy businesses.",
      },
    ],
  },
];

const masterclassSessions: SessionGroup[] = [
  {
    title: "Masterclass: Applied AI in engineering workflows",
    description:
      "A practical session on how AI can support engineering work without replacing judgement, structure or technical responsibility.",
    people: [
      {
        name: "Maria Nilsson",
        title: "Research Lead",
        company: "AI Labs",
        image: "/speaker5.jpg",
        format: "Masterclass",
        session: "Applied AI in engineering workflows",
        focus:
          "How teams can work with AI in ways that are useful, grounded and technically meaningful.",
        bio:
          "Maria Nilsson works with applied research and industrial AI, focusing on the gap between experimentation, implementation and long-term usefulness.",
      },
    ],
  },
  {
    title: "Masterclass: Engineering leadership in practice",
    description:
      "A smaller session on navigating structure, complexity and execution when engineering teams grow or change rapidly.",
    people: [
      {
        name: "Erik Johansson",
        title: "VP Engineering",
        company: "Tech AB",
        image: "/speaker4.jpg",
        format: "Masterclass",
        session: "Engineering leadership in practice",
        focus:
          "What engineering leaders need when clarity, direction and execution all need to happen at once.",
        bio:
          "Erik Johansson leads engineering teams focused on digital transformation, technical quality and operational resilience.",
      },
    ],
  },
  {
    title: "Masterclass: Sustainable systems in practice",
    description:
      "A focused session on how sustainability ambitions are translated into engineering decisions, trade-offs and measurable outcomes.",
    people: [
      {
        name: "Sara Lind",
        title: "Sustainability Lead",
        company: "Green Industry",
        image: "/speaker7.jpg",
        format: "Masterclass",
        session: "Sustainable systems in practice",
        focus:
          "How engineering teams can work with sustainability in concrete ways, without turning it into a parallel track.",
        bio:
          "Sara Lind works with engineering-led sustainability strategy, helping organisations connect technology choices with long-term environmental and societal impact.",
      },
    ],
  },
  {
    title: "Masterclass: Product, systems and execution",
    description:
      "On how engineering, product and technical execution can align more clearly in organisations where complexity keeps growing.",
    people: [
      {
        name: "Lisa Andersson",
        title: "Head of Product and Engineering",
        company: "Innovation AB",
        image: "/speaker3.jpg",
        format: "Masterclass",
        session: "Product, systems and execution",
        focus:
          "How to build stronger connections between engineering decisions, product direction and long-term delivery capability.",
        bio:
          "Lisa Andersson works at the intersection of product development, engineering and strategy. She is known for building teams and structures that turn technical ambition into real progress.",
      },
    ],
  },
];

const moderator: Person[] = [
  {
    name: "Johan Berg",
    title: "Moderator",
    company: "Engineering Day",
    image: "/speaker2.jpg",
    format: "Moderator",
    session: "Main stage",
    focus:
      "Guiding the day across talks, panels and fireside conversations, while connecting different themes into one coherent programme.",
    bio:
      "Johan Berg is an experienced moderator and communicator with a strong understanding of engineering, innovation and how to create conversations that are both accessible and substantial.",
  },
];

const keynote: Person[] = [
  {
    name: "Anna Svensson",
    title: "Chief Technology Officer",
    company: "Nordic Systems",
    image: "/speaker1.jpg",
    format: "Keynote",
    session: "Closing keynote",
    focus:
      "A final reflection on engineering, leadership and what the conversations of the day reveal about where the field is heading next.",
    bio:
      "Anna Svensson leads technology and engineering strategy at Nordic Systems. Her work focuses on scaling technical capability, building resilient teams and ensuring that engineering remains close to both execution and long-term direction.",
  },
];

function SpeakerCard({
  person,
  onOpen,
}: {
  person: Person;
  onOpen: (person: Person) => void;
}) {
  return (
    <div className="group transition-transform duration-300 hover:translate-y-[-2px]">
      <div className="overflow-hidden bg-[#ebe7df]">
        <img
          src={person.image}
          alt={person.name}
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="pt-4">
        <p
          className={`${firaSans.className} text-[10px] uppercase tracking-[0.18em] text-[#8b8276]`}
        >
          {person.format}
        </p>

        <h3 className="mt-2 font-serif text-[1.22rem] leading-[1.1] text-[#1f1f1f] sm:text-[1.3rem]">
          {person.name}
        </h3>

        <p className="mt-1 text-[0.92rem] leading-[1.6] text-[#5a5a5a] sm:text-[0.95rem]">
          {person.title}, {person.company}
        </p>

        <button
          type="button"
          onClick={() => onOpen(person)}
          className={`${firaSans.className} mt-4 text-[10px] uppercase tracking-[0.16em] text-[#a27a26] transition-colors hover:text-[#d9a441] sm:text-[11px] sm:tracking-[0.18em]`}
        >
          Read more
        </button>
      </div>
    </div>
  );
}

function SectionHeader({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-9 md:mb-12">
      <p
        className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
      >
        {label}
      </p>
      <div className="mb-7 h-px w-14 bg-[#d9a441] md:mb-8" />

      <h2 className="font-serif text-[2.05rem] font-light leading-[1.04] text-[#1f1f1f] sm:text-[2.35rem] md:text-[3.2rem] lg:text-[3.7rem]">
        {title}
      </h2>

      {intro ? (
        <p className="mt-4 max-w-3xl text-[1rem] leading-[1.75] text-[#5a5a5a] md:mt-5 md:text-[1.12rem] md:leading-[1.78]">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

function SessionSection({
  label,
  title,
  intro,
  sessions,
  onOpen,
}: {
  label: string;
  title: string;
  intro?: string;
  sessions: SessionGroup[];
  onOpen: (person: Person) => void;
}) {
  return (
    <section className="px-5 pb-20 md:px-12 md:pb-24 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label={label} title={title} intro={intro} />

        <div className="space-y-14 md:space-y-20">
          {sessions.map((session) => (
            <div
              key={session.title}
              className="border-t border-black/10 pt-7 md:pt-10"
            >
              <h3 className="font-serif text-[1.55rem] leading-[1.08] text-[#1f1f1f] sm:text-[1.75rem] md:text-[2.25rem]">
                {session.title}
              </h3>

              {session.description ? (
                <p className="mt-4 max-w-3xl text-[0.98rem] leading-[1.75] text-[#5a5a5a] md:text-[1.05rem] md:leading-[1.78]">
                  {session.description}
                </p>
              ) : null}

              <div className="mt-7 grid gap-8 sm:gap-10 md:mt-8 md:grid-cols-2 xl:grid-cols-3">
                {session.people.map((person) => (
                  <SpeakerCard
                    key={`${person.name}-${person.session}`}
                    person={person}
                    onOpen={onOpen}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AttendingHeroesPage() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
   <main className="min-h-screen overflow-x-hidden bg-[#f3f1ed]">
      <SiteHeader />

      {/* HERO */}
      <section className="px-5 pt-20 pb-14 md:px-12 md:pt-24 md:pb-20 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <p
            className={`${firaSans.className} mb-5 text-[10px] uppercase tracking-[0.24em] text-[#d9a441] sm:text-[11px] sm:tracking-[0.3em] md:mb-6`}
          >
            Attending heroes
          </p>

          <h1 className="font-serif text-[2.55rem] leading-[1.04] text-[#1f1f1f] sm:text-[3rem] md:text-[4.4rem] lg:text-[5.1rem]">
            Voices shaping
            <br />
            Engineering Day 2026
          </h1>

          <p className="mx-auto mt-5 max-w-[22rem] text-[1rem] leading-[1.6] text-[#5f5a52] sm:mt-6 sm:max-w-[30rem] sm:text-[1.08rem] md:max-w-2xl md:text-[1.2rem] md:leading-[1.65]">
            Engineers, leaders and innovators contributing to talks, panels,
            fireside conversations, masterclasses and the wider programme
            throughout the day.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-5 pb-20 md:px-12 md:pb-24 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Featured"
            title="A few of the voices to know"
            intro="A first look at some of the people helping shape the conversations on stage and throughout the programme."
          />

          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
            {featuredPeople.map((person) => (
              <SpeakerCard
                key={`${person.name}-${person.session}`}
                person={person}
                onOpen={setSelectedPerson}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MODERATOR */}
      <section className="px-5 pb-20 md:px-12 md:pb-24 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Moderator"
            title="Holding the day together"
            intro="Guiding the programme, shaping the transitions and making each conversation land."
          />

          <div className="grid max-w-sm gap-8 sm:gap-10">
            {moderator.map((person) => (
              <SpeakerCard
                key={`${person.name}-${person.session}`}
                person={person}
                onOpen={setSelectedPerson}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HERO TALKS */}
      <section className="px-5 pb-20 md:px-12 md:pb-24 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Hero talks"
            title="Five focused perspectives"
            intro="A series of talks from partners and speakers sharing ideas, experience and practical insight from different parts of engineering."
          />

          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
            {heroTalks.map((person) => (
              <SpeakerCard
                key={`${person.name}-${person.session}`}
                person={person}
                onOpen={setSelectedPerson}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PANELS */}
      <SessionSection
        label="Panels"
        title="Conversations with multiple perspectives"
        intro="Each panel brings together people with different viewpoints, experiences and responsibilities."
        sessions={panelSessions}
        onOpen={setSelectedPerson}
      />

      {/* FIRESIDES */}
      <SessionSection
        label="Fireside conversations"
        title="Smaller-format conversations"
        intro="More intimate discussions centred around experience, reflection and technical depth."
        sessions={firesideSessions}
        onOpen={setSelectedPerson}
      />

      {/* MASTERCLASSES */}
      <SessionSection
        label="Masterclasses"
        title="Smaller sessions for deeper insight"
        intro="A focused format for those who want to go further into specific themes, methods and questions."
        sessions={masterclassSessions}
        onOpen={setSelectedPerson}
      />

      {/* KEYNOTE */}
      <section className="px-5 pb-24 md:px-12 md:pb-32 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Keynote"
            title="Closing keynote"
            intro="The keynote brings the day together — reflecting on the conversations, insights and what comes next."
          />

          <div className="grid max-w-sm gap-8 sm:gap-10">
            {keynote.map((person) => (
              <SpeakerCard
                key={`${person.name}-${person.session}`}
                person={person}
                onOpen={setSelectedPerson}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedPerson ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-4 sm:px-6 sm:py-8 md:px-6 md:py-10">
          <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto bg-[#f3f1ed] shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedPerson(null)}
              className={`${firaSans.className} absolute right-4 top-4 z-20 text-[10px] uppercase tracking-[0.16em] text-[#8b8276] transition-colors hover:text-[#a27a26] sm:right-6 sm:top-6 sm:text-[11px] sm:tracking-[0.18em]`}
            >
              Close
            </button>

            <div className="grid md:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-[#e7e2d8]">
                <img
                  src={selectedPerson.image}
                  alt={selectedPerson.name}
                  className="h-[280px] w-full object-cover sm:h-[360px] md:h-full"
                />
              </div>

              <div className="px-5 py-6 sm:px-8 sm:py-8 md:px-12 md:py-14">
                <p
                  className={`${firaSans.className} text-[10px] uppercase tracking-[0.16em] text-[#8b8276] md:tracking-[0.18em]`}
                >
                  {selectedPerson.format}
                </p>

                <h2 className="mt-3 font-serif text-[1.95rem] leading-[1.05] text-[#1f1f1f] sm:text-[2.2rem] md:text-[2.8rem]">
                  {selectedPerson.name}
                </h2>

                <p className="mt-3 text-[0.98rem] leading-[1.72] text-[#5a5a5a] md:text-[1rem] md:leading-[1.75]">
                  {selectedPerson.title}, {selectedPerson.company}
                </p>

                <div className="mt-6 border-t border-black/10 pt-6 md:mt-8 md:pt-8">
                  <p
                    className={`${firaSans.className} text-[10px] uppercase tracking-[0.16em] text-[#8b8276] md:tracking-[0.18em]`}
                  >
                    Session
                  </p>
                  <p className="mt-2 font-serif text-[1.2rem] leading-[1.18] text-[#1f1f1f] sm:text-[1.3rem] md:text-[1.4rem]">
                    {selectedPerson.session}
                  </p>
                </div>

                <div className="mt-6 border-t border-black/10 pt-6 md:mt-8 md:pt-8">
                  <p
                    className={`${firaSans.className} text-[10px] uppercase tracking-[0.16em] text-[#8b8276] md:tracking-[0.18em]`}
                  >
                    Focus
                  </p>
                  <p className="mt-3 text-[0.98rem] leading-[1.78] text-[#2c2c2c] md:text-[1.02rem] md:leading-[1.82]">
                    {selectedPerson.focus}
                  </p>
                </div>

                <div className="mt-6 border-t border-black/10 pt-6 md:mt-8 md:pt-8">
                  <p
                    className={`${firaSans.className} text-[10px] uppercase tracking-[0.16em] text-[#8b8276] md:tracking-[0.18em]`}
                  >
                    About
                  </p>
                  <p className="mt-3 text-[0.96rem] leading-[1.78] text-[#555] md:text-[1rem] md:leading-[1.82]">
                    {selectedPerson.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close modal backdrop"
            onClick={() => setSelectedPerson(null)}
            className="absolute inset-0 -z-10"
          />
        </div>
      ) : null}

      <footer className="bg-[#f3f1ed] pt0 pb-12 md:pt0 md:pb-14">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-6">
          <p className="text-[0.98rem] leading-[1.82] text-[#3e3c38] sm:text-[1.02rem] md:text-[1.15rem] md:leading-[1.9]">
            Engineering Day – Sweden’s first official day for engineers. We celebrate our engineers and their powers of innovation, creativity and hard work. The event is also a forum for knowledge-sharing and networking.
          </p>

          <p className="mt-4 text-[13px] italic tracking-[0.02em] text-black/40 md:mt-5 md:text-sm">
            A part of Ny Teknik
          </p>

          <div className="mt-10 flex items-center justify-center gap-7 md:mt-12 md:gap-8">
            <a
              href="https://www.linkedin.com/company/ingenj%C3%B6rsdagen/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition duration-200 hover:opacity-100"
            >
              <img
                src="/Linkedin.svg"
                alt="LinkedIn"
                className="h-5 w-5 object-contain"
              />
            </a>

            <a
              href="https://www.instagram.com/engineeringdaysweden/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition duration-200 hover:opacity-100"
            >
              <img
                src="/Instagram.png"
                alt="Instagram"
                className="h-5 w-5 object-contain"
              />
            </a>

            <a
              href="https://open.spotify.com/show/6FcEbcTbMfue0FLgwIoM8a?si=5d52f0a791e14f04"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition duration-200 hover:opacity-100"
            >
              <img
                src="/Spotify.png"
                alt="Spotify"
                className="h-5 w-5 object-contain"
              />
            </a>

            <a
              href="https://www.nyteknik.se/ingenjorsdagen"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition duration-200 hover:opacity-100"
            >
              <img
                src="/Website.png"
                alt="Ny Teknik"
                className="h-5 w-5 object-contain"
              />
            </a>
          </div>

          <div className="mt-10 text-[10px] uppercase tracking-[0.12em] text-black/30 md:mt-12 md:text-[11px]">
            © 2026 Ny Teknik
          </div>
        </div>
      </footer>
    </main>
  );
}