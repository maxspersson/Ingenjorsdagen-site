"use client";

import { useEffect, useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans, Lora } from "next/font/google";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { speakersQuery, sessionGroupsQuery } from "@/sanity/lib/queries";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type Person = {
  name: string;
  title: string;
  company: string;
  image: string;
  format?: string;
  cardLabel?: string;
  session: string;
  focus: string;
  bio: string;
  placements?: string[];
  order?: number;
};

type SessionGroup = {
  title: string;
  description?: string;
  type?: string;
  order?: number;
  people: Person[];
};

const hasPlacement = (person: Person, placement: string) =>
  person.placements?.includes(placement);

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
          {person.cardLabel || person.format}
        </p>

        <h3
          className={`${lora.className} mt-2 text-[1.22rem] leading-[1.1] text-[#1f1f1f] sm:text-[1.3rem]`}
        >
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

      <h2
        className={`${lora.className} text-[2.05rem] font-light leading-[1.04] text-[#1f1f1f] sm:text-[2.35rem] md:text-[3.2rem] lg:text-[3.7rem]`}
      >
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
              <h3
                className={`${lora.className} text-[1.55rem] leading-[1.08] text-[#1f1f1f] sm:text-[1.75rem] md:text-[2.25rem]`}
              >
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

export default function PageClient({
  initialPageData,
}: {
  initialPageData: any;
}) {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const pageData = initialPageData;
  const [speakers, setSpeakers] = useState<Person[]>([]);
  const [sessionGroups, setSessionGroups] = useState<SessionGroup[]>([]);

  useEffect(() => {
    async function loadSpeakers() {
      const data = await client.fetch(speakersQuery);
      console.log("SPEAKERS", data);
      setSpeakers(data);
    }

    loadSpeakers();
  }, []);

  useEffect(() => {
    async function loadSessionGroups() {
      const data = await client.fetch(sessionGroupsQuery);
      console.log("SESSION GROUPS", data);
      setSessionGroups(data);
    }

    loadSessionGroups();
  }, []);

  const sanitySpeakers = (speakers || []).filter(Boolean);
  const sanitySessionGroups = (sessionGroups || []).filter(Boolean);

  const featuredSpeakers = sanitySpeakers.filter((person: Person) =>
    hasPlacement(person, "featured")
  );

  const heroTalkSpeakers = sanitySpeakers.filter((person: Person) =>
    hasPlacement(person, "heroTalks")
  );

  const moderatorSpeakers = sanitySpeakers.filter((person: Person) =>
    hasPlacement(person, "moderator")
  );

  const keynoteSpeakers = sanitySpeakers.filter((person: Person) =>
    hasPlacement(person, "keynote")
  );

  const panelGroups = sanitySessionGroups.filter(
    (group: SessionGroup) => group.type === "panel"
  );

  const firesideGroups = sanitySessionGroups.filter(
    (group: SessionGroup) => group.type === "fireside"
  );

  const masterclassGroups = sanitySessionGroups.filter(
    (group: SessionGroup) => group.type === "masterclass"
  );

  const hasHeroMedia =
    (pageData?.hero?.mediaType === "image" && pageData?.hero?.image?.asset) ||
    (pageData?.hero?.mediaType === "video" && pageData?.hero?.videoUrl);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f1ed]">
      <SiteHeader />

      {hasHeroMedia ? (
        <section className="relative mb-16 min-h-[78vh] overflow-hidden bg-[#111111] md:mb-20 lg:mb-24">
          <div className="absolute inset-0">
            {pageData?.hero?.mediaType === "video" && pageData?.hero?.videoUrl ? (
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={pageData.hero.videoUrl} type="video/mp4" />
              </video>
            ) : pageData?.hero?.image?.asset ? (
              <img
                src={urlFor(pageData.hero.image).width(2200).quality(90).url()}
                alt={
                  pageData?.hero?.image?.alt ||
                  pageData?.hero?.title ||
                  "Attending Heroes hero image"
                }
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 flex min-h-[78vh] items-center justify-center px-5 pb-16 pt-24 md:px-12 md:pb-20 md:pt-28 lg:px-20">
            <div className="mx-auto max-w-5xl text-center text-white">
              <p
                className={`${firaSans.className} mb-5 text-[10px] uppercase tracking-[0.24em] text-[#d9a441] sm:text-[11px] sm:tracking-[0.3em] md:mb-6`}
              >
                {pageData?.hero?.kicker || "Attending heroes"}
              </p>

              <h1
                className={`${lora.className} whitespace-pre-line text-[2.55rem] leading-[1.04] text-white sm:text-[3rem] md:text-[4.4rem] lg:text-[5.1rem]`}
              >
                {pageData?.hero?.title ? (
                  pageData.hero.title
                ) : (
                  <>
                    Voices shaping
                    <br />
                    Engineering Day 2026
                  </>
                )}
              </h1>

              <p className="mx-auto mt-5 max-w-[22rem] text-[1rem] leading-[1.6] text-white/90 sm:mt-6 sm:max-w-[30rem] sm:text-[1.08rem] md:max-w-2xl md:text-[1.2rem] md:leading-[1.65]">
                {pageData?.hero?.subtitle ||
                  "Engineers, leaders and innovators contributing to talks, panels, fireside conversations, masterclasses and the wider programme throughout the day."}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="px-5 pb-14 pt-20 md:px-12 md:pb-20 md:pt-24 lg:px-20">
          <div className="mx-auto max-w-5xl text-center">
            <p
              className={`${firaSans.className} mb-5 text-[10px] uppercase tracking-[0.24em] text-[#d9a441] sm:text-[11px] sm:tracking-[0.3em] md:mb-6`}
            >
              {pageData?.hero?.kicker || "Attending heroes"}
            </p>

            <h1
              className={`${lora.className} whitespace-pre-line text-[2.55rem] leading-[1.04] text-[#1f1f1f] sm:text-[3rem] md:text-[4.4rem] lg:text-[5.1rem]`}
            >
              {pageData?.hero?.title ? (
                pageData.hero.title
              ) : (
                <>
                  Voices shaping
                  <br />
                  Engineering Day 2026
                </>
              )}
            </h1>

            <p className="mx-auto mt-5 max-w-[22rem] text-[1rem] leading-[1.6] text-[#5f5a52] sm:mt-6 sm:max-w-[30rem] sm:text-[1.08rem] md:max-w-2xl md:text-[1.2rem] md:leading-[1.65]">
              {pageData?.hero?.subtitle ||
                "Engineers, leaders and innovators contributing to talks, panels, fireside conversations, masterclasses and the wider programme throughout the day."}
            </p>
          </div>
        </section>
      )}

      <section className="px-5 pb-20 md:px-12 md:pb-24 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label={pageData?.featuredSection?.label || "Featured"}
            title={
              pageData?.featuredSection?.title || "A few of the voices to know"
            }
            intro={
              pageData?.featuredSection?.intro ||
              "A first look at some of the people helping shape the conversations on stage and throughout the programme."
            }
          />

          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
            {featuredSpeakers.map((person) => (
              <SpeakerCard
                key={`${person.name}-${person.session}`}
                person={person}
                onOpen={setSelectedPerson}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-12 md:pb-24 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label={pageData?.moderatorSection?.label || "Moderator"}
            title={
              pageData?.moderatorSection?.title || "Holding the day together"
            }
            intro={
              pageData?.moderatorSection?.intro ||
              "Guiding the programme, shaping the transitions and making each conversation land."
            }
          />

          <div className="grid max-w-sm gap-8 sm:gap-10">
            {moderatorSpeakers.map((person) => (
              <SpeakerCard
                key={`${person.name}-${person.session}`}
                person={person}
                onOpen={setSelectedPerson}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-12 md:pb-24 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label={pageData?.heroTalksSection?.label || "Hero talks"}
            title={
              pageData?.heroTalksSection?.title || "Five focused perspectives"
            }
            intro={
              pageData?.heroTalksSection?.intro ||
              "A series of talks from partners and speakers sharing ideas, experience and practical insight from different parts of engineering."
            }
          />

          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
            {heroTalkSpeakers.map((person) => (
              <SpeakerCard
                key={`${person.name}-${person.session}`}
                person={person}
                onOpen={setSelectedPerson}
              />
            ))}
          </div>
        </div>
      </section>

      <SessionSection
        label={pageData?.panelsSection?.label || "Panels"}
        title={
          pageData?.panelsSection?.title ||
          "Conversations with multiple perspectives"
        }
        intro={
          pageData?.panelsSection?.intro ||
          "Each panel brings together people with different viewpoints, experiences and responsibilities."
        }
        sessions={panelGroups}
        onOpen={setSelectedPerson}
      />

      <SessionSection
        label={pageData?.firesidesSection?.label || "Fireside conversations"}
        title={
          pageData?.firesidesSection?.title || "Smaller-format conversations"
        }
        intro={
          pageData?.firesidesSection?.intro ||
          "More intimate discussions centred around experience, reflection and technical depth."
        }
        sessions={firesideGroups}
        onOpen={setSelectedPerson}
      />

      <SessionSection
        label={pageData?.masterclassesSection?.label || "Masterclasses"}
        title={
          pageData?.masterclassesSection?.title ||
          "Smaller sessions for deeper insight"
        }
        intro={
          pageData?.masterclassesSection?.intro ||
          "A focused format for those who want to go further into specific themes, methods and questions."
        }
        sessions={masterclassGroups}
        onOpen={setSelectedPerson}
      />

      <section className="px-5 pb-24 md:px-12 md:pb-32 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="Keynote"
            title="Closing keynote"
            intro="The keynote brings the day together — reflecting on the conversations, insights and what comes next."
          />

          <div className="grid max-w-sm gap-8 sm:gap-10">
            {keynoteSpeakers.map((person) => (
              <SpeakerCard
                key={`${person.name}-${person.session}`}
                person={person}
                onOpen={setSelectedPerson}
              />
            ))}
          </div>
        </div>
      </section>

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
                  {selectedPerson.cardLabel || selectedPerson.format}
                </p>

                <h2
                  className={`${lora.className} mt-3 text-[1.95rem] leading-[1.05] text-[#1f1f1f] sm:text-[2.2rem] md:text-[2.8rem]`}
                >
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
                  <p
                    className={`${lora.className} mt-2 text-[1.2rem] leading-[1.18] text-[#1f1f1f] sm:text-[1.3rem] md:text-[1.4rem]`}
                  >
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
            Engineering Day – Sweden’s first official day for engineers. We
            celebrate our engineers and their powers of innovation, creativity
            and hard work. The event is also a forum for knowledge-sharing and
            networking.
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