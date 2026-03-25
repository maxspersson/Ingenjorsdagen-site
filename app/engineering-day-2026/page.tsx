"use client";

import { useEffect, useState } from "react";
import { Fira_Sans } from "next/font/google";
import SiteHeader from "@/app/components/SiteHeader";
import { client } from "@/sanity/lib/client";
import { partnersQuery } from "@/sanity/lib/queries";
import { programmeQuery } from "@/sanity/lib/queries";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const masterclasses = [
  {
    id: 1,
    kicker: "MASTERCLASS #1 – ENERGIMYNDIGHETEN",
    title:
      "Powering the Future: Engineering the Next Generation of Energy Systems",
    speaker: "Name Surname",
    role: "Role / Title",
    company: "Energimyndigheten",
    image: "https://i.imgur.com/E1HQ3Q1.jpeg",
    avatar: "https://i.imgur.com/3e7Qg0A.png",
    body: (
      <>
        <p className="mb-6">
          In this masterclass, experts from the Swedish Energy Agency will
          explore how modern energy systems are evolving to support a fossil-free
          society. The session will highlight how electrification, smart grids,
          and digital technologies are reshaping the way energy is produced,
          distributed, and consumed.
        </p>

        <p className="mb-6">
          Participants will gain insights into the engineering challenges behind
          integrating renewable energy sources, balancing grid stability, and
          developing scalable energy infrastructure for the future.
        </p>

        <p className="mb-3 font-semibold text-[#242424]">Learnings</p>
        <ul className="mb-8 list-disc space-y-3 pl-5">
          <li>
            How renewable energy sources are integrated into modern power
            systems.
          </li>
          <li>
            Key engineering challenges in maintaining grid stability in
            electrified societies.
          </li>
          <li>
            The role of digital technologies and smart grids in future energy
            systems.
          </li>
          <li>
            Practical examples of system design for scalable and resilient
            energy infrastructure.
          </li>
        </ul>

        <div className="space-y-2 text-[0.98rem]">
          <p>
            <strong>Target audience:</strong> This masterclass is aimed at
            engineers working with energy systems, electrical infrastructure or
            electrification.
          </p>
          <p>
            <strong>Language:</strong> Swedish
          </p>
          <p>
            <strong>Time:</strong> 11:45–12:30
          </p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    kicker: "MASTERCLASS #2 – VAROPREEM",
    title:
      "From Refinery to Renewable: Engineering the Future of Liquid Fuels",
    speaker: "Name Surname",
    role: "Role / Title",
    company: "VAROPreem",
    image: "https://i.imgur.com/uTmIYDa.jpeg",
    avatar: "https://i.imgur.com/3e7Qg0A.png",
    body: (
      <>
        <p className="mb-6">
          Engineers from VAROPreem will explore how refinery infrastructure can
          be transformed to support renewable fuels and low-carbon energy
          systems.
        </p>

        <div className="space-y-2 text-[0.98rem]">
          <p>
            <strong>Language:</strong> English
          </p>
          <p>
            <strong>Time:</strong> 11:45–12:30
          </p>
        </div>
      </>
    ),
  },
  {
    id: 3,
    kicker: "MASTERCLASS #3 – TBA",
    title: "TBA",
    speaker: "Name Surname",
    role: "Role / Title",
    company: "",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    avatar: "https://i.imgur.com/5r0gkLr.png",
    body: (
      <>
        <p>Description coming soon.</p>
      </>
    ),
  },
  {
    id: 4,
    kicker: "MASTERCLASS #4 – TBA",
    title: "TBA",
    speaker: "Name Surname",
    role: "Role / Title",
    company: "",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
    avatar: "https://i.imgur.com/5r0gkLr.png",
    body: (
      <>
        <p>Description coming soon.</p>
      </>
    ),
  },
];
type ProgrammeSubItem = {
  time: string;
  title: string;
  meta?: string;
};

type ProgrammeItem = {
  id: string;
  time: string;
  title: string;
  description?: string;
  detailsLabel?: string;
  detailsText?: string;
  subItems?: ProgrammeSubItem[];
};
const programme: ProgrammeItem[] = [
  {
    id: "registration-masterclass",
    time: "11:30",
    title: "MASTERCLASS REGISTRATION OPENS",
    description: "Check-in for Masterclass participants only.",
  },
  {
    id: "masterclasses",
    time: "11:45",
    title: "MASTERCLASSES",
    description: "Limited seats. Pre-registration required.",
  },
  {
    id: "registration-networking",
    time: "12:00",
    title: "REGISTRATION & NETWORKING",
    description: "Doors open for all participants.",
  },
  {
    id: "opening-remarks",
    time: "13:00",
    title: "OPENING REMARKS",
    description: "Welcome to Engineering Day 2026.",
  },
  {
    id: "hero-talks-1",
    time: "13:05",
    title: "HERO TALKS",
    description:
      "Three consecutive talks from engineering leaders working at the forefront of industrial transformation.",
    detailsLabel: "SESSION DETAILS",
    detailsText:
      "This block consists of three individual talks presented in sequence. Speaker names, titles, portraits and talk descriptions can be added here later without changing the overall structure of the programme.",
    subItems: [
      { time: "13:05", title: "Preem", meta: "TBA" },
      { time: "13:20", title: "Saab", meta: "TBA" },
      { time: "13:35", title: "Skanska", meta: "TBA" },
    ],
  },
  {
    id: "panel-discussion-1",
    time: "13:50",
    title: "PANEL DISCUSSION",
    description: "TBA",
    detailsLabel: "PANEL DETAILS",
    detailsText:
      "A moderated panel conversation. This area is prepared for speakers, roles, participating organisations and a short editorial framing of the discussion.",
  },
  {
    id: "networking-break-1",
    time: "14:05",
    title: "NETWORKING BREAK",
    description: "Coffee, snacks and networking.",
  },
  {
    id: "hero-talks-2",
    time: "14:35",
    title: "HERO TALKS",
    description:
      "A second sequence of focused talks highlighting applied engineering in practice.",
    detailsLabel: "SESSION DETAILS",
    detailsText:
      "As above, these are sequential talks within one programme block. The structure leaves room for later expansion with full speaker content while keeping the overview calm and premium.",
    subItems: [
      { time: "14:35", title: "Trafikverket", meta: "TBA" },
      { time: "14:50", title: "Sweco", meta: "TBA" },
    ],
  },
  {
    id: "fireside-chat",
    time: "15:05",
    title: "FIRESIDE CHAT",
    description:
      "Two consecutive conversations exploring what engineering leadership looks like in a time of intelligent systems.",
    detailsLabel: "CONVERSATION DETAILS",
    detailsText:
      "This slot contains two separate fireside conversations in sequence, not one combined session. The expandable area is prepared for moderator, participants and editorial talk descriptions.",
    subItems: [
      { time: "15:05", title: "Fireside Chat 1", meta: "TBA" },
      { time: "15:20", title: "Fireside Chat 2", meta: "TBA" },
    ],
  },
  {
    id: "networking-break-2",
    time: "15:35",
    title: "NETWORKING BREAK",
    description: "Coffee, snacks and networking.",
  },
  {
    id: "panel-discussion-2",
    time: "16:05",
    title: "PANEL DISCUSSION",
    description: "TBA",
    detailsLabel: "PANEL DETAILS",
    detailsText:
      "Prepared for a larger panel format with room for multiple participants, affiliations and a concise framing of the topic.",
  },
  {
    id: "keynote",
    time: "16:20",
    title: "KEYNOTE",
    description: "TBA",
    detailsLabel: "KEYNOTE DETAILS",
    detailsText:
      "Reserved for keynote speaker profile, title, organisation and session abstract.",
  },
  {
    id: "award-ceremony",
    time: "16:50",
    title: "AWARD CEREMONY",
    description: "The Grand Prize for Engineering.",
  },
  {
    id: "celebration",
    time: "17:30",
    title: "LET’S CELEBRATE ENGINEERING!",
    description:
      "Enjoy an evening of networking, music, delicious bites and bubbly drinks as we celebrate engineering.",
  },
];





export default function EngineeringDayPage() {
  const [activeMasterclass, setActiveMasterclass] = useState<number | null>(
    null
  );
  const [activeProgramme, setActiveProgramme] = useState<string | null>(null);
  const [sanityPartners, setSanityPartners] = useState<any[]>([]);
  const [sanityProgramme, setSanityProgramme] = useState<ProgrammeItem[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMasterclass(null);
        setActiveProgramme(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
  async function loadProgramme() {
    const data = await client.fetch(programmeQuery);
    console.log(
      "SANITY FIRESIDE",
      data.find((item: any) => item.id === "fireside-chat")
    );
    setSanityProgramme(data);
  }

  loadProgramme();
}, []);
useEffect(() => {
  async function loadProgramme() {
    const data = await client.fetch(programmeQuery);
    console.log(
      "SANITY PROGRAMME IDS",
      data.map((item: any) => item.id)
    );
    setSanityProgramme(data);
  }

  loadProgramme();
}, []);

  const handleMasterclassClick = (index: number) => {
    setActiveMasterclass((prev) => (prev === index ? null : index));
  };

  const handleProgrammeClick = (id: string) => {
    setActiveProgramme((prev) => (prev === id ? null : id));
  };

  const rows = [masterclasses.slice(0, 2), masterclasses.slice(2, 4)];
const foundingPartnersFromSanity = sanityPartners.filter(
  (partner) => partner.tier === "founding"
);
const partnersFromSanity = sanityPartners.filter(
  (partner) => partner.tier === "partner"
);
const programmeToRender: ProgrammeItem[] = programme.map((defaultItem) => {
  const sanityItem = sanityProgramme.find((item) => item.id === defaultItem.id);
  return sanityItem || defaultItem;
});
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f1ed] text-[#1f1f1f]">
      <SiteHeader />

      <section className="relative flex min-h-[58vh] items-center justify-center px-5 text-center text-white sm:min-h-[66vh] md:min-h-[85vh] md:px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 max-w-4xl py-20 sm:py-24">
          <p className="mb-6 text-[10px] uppercase tracking-[0.28em] text-white/80 sm:text-[11px] sm:tracking-[0.4em] md:mb-8">
            OCTOBER 21, 2026 – STOCKHOLM
          </p>

          <h1 className="mb-8 font-serif text-[2.7rem] font-light leading-[1.02] sm:text-[3.35rem] md:mb-10 md:text-7xl lg:text-8xl">
            Engineering Day
            <br />
            2026
          </h1>

          <p className="mb-10 text-[1.02rem] opacity-90 sm:text-[1.1rem] md:mb-12 md:text-xl">
            We the engineers. Together. For the future.
          </p>

          <button
            className={`${firaSans.className} bg-[#d9a441] px-8 py-3 text-[11px] uppercase tracking-[0.24em] text-white shadow-lg transition hover:bg-[#c8932f] sm:px-10 sm:py-3.5 md:px-14 md:py-4 md:text-xs md:tracking-[0.3em]`}
          >
            BOOK YOUR SPOT
          </button>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pt-20 pb-14 md:px-12 md:pt-28 md:pb-20 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              THIS YEAR&apos;S THEME
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <h2 className="mb-5 font-serif text-[2.35rem] font-light leading-[1.02] text-[#1f1f1f] sm:text-[2.85rem] md:text-[4.25rem] lg:text-[4.85rem]">
              Engineering Intelligent
              <br />
              <span className="block">Machines</span>
            </h2>

            <p className="text-[1.08rem] italic leading-[1.48] text-[#5a5a5a] sm:text-[1.16rem] md:text-[1.48rem]">
              Where AI enters the physical world
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="mb-7 text-[1.03rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-8 md:text-[1.34rem] md:leading-[1.8]">
              Engineers today face a new kind of problem: how to make
              intelligent machines function reliably in the messy, unpredictable
              physical world. AI is no longer confined to controlled
              environments. It is moving into robots, tools and autonomous
              systems that must operate safely, respond in real time and
              interact with people.
            </p>

            <p className="mb-8 text-[1.03rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-10 md:text-[1.34rem] md:leading-[1.8]">
              How do we make intelligent machines work in the real world, with
              real constraints and real consequences?
            </p>

            <p className="text-[1rem] leading-[1.82] text-[#555] sm:text-[1.05rem] md:text-[1.24rem] md:leading-[1.9]">
              Engineering Day 2026 brings together engineers working at the
              center of this shift across robotics, mobility, energy,
              healthcare and infrastructure. Together we explore what applied
              machine intelligence means in practice and what this
              transformation means for the future of engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pt-10 pb-20 md:px-12 md:pt-14 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              MASTERCLASSES
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-8 max-w-4xl text-center md:mb-12">
            <h2 className="mb-5 font-serif text-[2.1rem] font-light leading-[1.08] text-[#1f1f1f] sm:text-[2.45rem] md:mb-6 md:text-[3.2rem] lg:text-[3.55rem]">
              Focused sessions.
              <br />
              Deeper technical insight.
            </h2>
          </div>

          <div className="mx-auto mb-10 max-w-3xl md:mb-14">
            <p className="mb-5 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-6 md:text-[1.28rem] md:leading-[1.8]">
              Masterclasses are focused, small-group sessions designed to give
              engineers deeper insight into real technical challenges.
            </p>

            <p className="mb-5 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-6 md:text-[1.28rem] md:leading-[1.8]">
              Before the main Engineering Day programme begins, participants can
              join one of four expert-led masterclasses exploring engineering
              topics in greater depth.
            </p>

            <p className="text-[0.98rem] leading-[1.82] text-[#555] sm:text-[1.02rem] md:text-[1.14rem] md:leading-[1.9]">
              Each masterclass lasts <strong>45 minutes</strong> and is limited
              in size to ensure an engaging and practical learning environment.
            </p>
          </div>

          <div className="border-t border-black/5 pt-10 md:pt-14">
            <div className="space-y-7 md:space-y-10">
              {rows.map((row, rowIndex) => {
                const rowStartIndex = rowIndex * 2;
                const rowEndIndex = rowStartIndex + row.length - 1;
                const rowHasActive =
                  activeMasterclass !== null &&
                  activeMasterclass >= rowStartIndex &&
                  activeMasterclass <= rowEndIndex;

                const selectedMasterclass =
                  rowHasActive && activeMasterclass !== null
                    ? masterclasses[activeMasterclass]
                    : null;

                return (
                  <div key={rowIndex} className="space-y-4 md:space-y-5">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
                      {row.map((item, cardOffset) => {
                        const index = rowStartIndex + cardOffset;
                        const isActive = activeMasterclass === index;

                        return (
                          <div key={item.id} className="space-y-4">
                            <button
                              type="button"
                              onClick={() => handleMasterclassClick(index)}
                              aria-expanded={isActive}
                              className={`group relative w-full overflow-hidden rounded-[24px] text-left transition-all duration-300 md:rounded-[28px] ${
                                isActive
                                  ? "shadow-[0_18px_46px_rgba(0,0,0,0.16)] ring-1 ring-[#d9a441]/70"
                                  : "shadow-[0_14px_34px_rgba(0,0,0,0.10)] ring-1 ring-black/5 hover:-translate-y-[3px] hover:shadow-[0_18px_42px_rgba(0,0,0,0.14)]"
                              }`}
                            >
                              <div
                                className="relative h-[330px] bg-cover bg-center sm:h-[350px] md:h-[380px]"
                                style={{ backgroundImage: `url('${item.image}')` }}
                              >
                                <div
                                  className={`absolute inset-0 transition-all duration-300 ${
                                    isActive
                                      ? "bg-gradient-to-b from-black/15 via-black/38 to-black/78"
                                      : "bg-gradient-to-b from-black/20 via-black/42 to-black/80"
                                  }`}
                                />

                                <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white sm:p-6 md:p-8">
                                  <div>
                                    <p
                                      className={`${firaSans.className} mb-3 text-[9px] uppercase tracking-[0.2em] text-white/80 sm:text-[10px] md:mb-4 md:text-[11px] md:tracking-[0.24em]`}
                                    >
                                      {item.kicker}
                                    </p>

                                    <h3 className="max-w-[30rem] font-serif text-[1.62rem] font-semibold leading-[1.05] sm:text-[1.8rem] md:text-[2.15rem]">
                                      {item.title}
                                    </h3>
                                  </div>

                                  <div>
                                    <div className="mb-5 flex items-center gap-3 md:mb-6 md:gap-4">
                                      <img
                                        src={item.avatar}
                                        alt={item.speaker}
                                        className="h-[56px] w-[56px] rounded-full border border-white/80 object-cover md:h-[70px] md:w-[70px]"
                                      />

                                      <div className="leading-[1.35]">
                                        <p className="text-[1rem] font-semibold md:text-[1.12rem]">
                                          {item.speaker}
                                        </p>
                                        <p className="text-[0.9rem] text-white/90 md:text-[1rem]">
                                          {item.role}
                                        </p>
                                        {item.company ? (
                                          <p className="text-[0.9rem] text-white/90 md:text-[1rem]">
                                            {item.company}
                                          </p>
                                        ) : null}
                                      </div>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-white/20 pt-4">
                                      <span className="text-[0.94rem] text-white/95 md:text-[0.98rem]">
                                        {isActive ? "Close details" : "Read details"}
                                      </span>

                                      <span
                                        className={`flex h-9 w-9 items-center justify-center rounded-full border text-[1.05rem] text-white transition-all duration-300 md:h-10 md:w-10 md:text-[1.15rem] ${
                                          isActive
                                            ? "rotate-45 border-[#d9a441] bg-[#d9a441]/10"
                                            : "border-white/55 group-hover:border-white/80"
                                        }`}
                                      >
                                        +
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </button>

                            {isActive ? (
                              <div className="overflow-hidden rounded-[24px] border border-black/5 bg-[#f8f6f2] shadow-[0_14px_40px_rgba(0,0,0,0.07)] md:hidden">
                                <div className="px-5 py-6">
                                  <div className="mb-6 flex items-start justify-between gap-6">
                                    <p
                                      className={`${firaSans.className} text-[10px] uppercase tracking-[0.2em] text-[#a27a26]`}
                                    >
                                      MASTERCLASS DETAILS
                                    </p>

                                    <button
                                      type="button"
                                      onClick={() => setActiveMasterclass(null)}
                                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-[1rem] text-[#1f1f1f] transition-colors hover:border-[#d9a441] hover:text-[#d9a441]"
                                      aria-label="Close masterclass details"
                                    >
                                      +
                                    </button>
                                  </div>

                                  <div className="max-w-[52rem] text-[0.98rem] leading-[1.85] text-[#434343]">
                                    {item.body}
                                  </div>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>

                    {selectedMasterclass ? (
                      <div className="hidden overflow-hidden rounded-[28px] border border-black/5 bg-[#f8f6f2] shadow-[0_14px_40px_rgba(0,0,0,0.07)] md:block">
                        <div className="px-10 py-10 lg:px-12 lg:py-11">
                          <div className="mb-7 flex items-start justify-between gap-6">
                            <p
                              className={`${firaSans.className} text-[11px] uppercase tracking-[0.22em] text-[#a27a26]`}
                            >
                              MASTERCLASS DETAILS
                            </p>

                            <button
                              type="button"
                              onClick={() => setActiveMasterclass(null)}
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-[1.05rem] text-[#1f1f1f] transition-colors hover:border-[#d9a441] hover:text-[#d9a441]"
                              aria-label="Close masterclass details"
                            >
                              +
                            </button>
                          </div>

                          <div className="max-w-[52rem] text-[1.08rem] leading-[1.95] text-[#434343]">
                            {selectedMasterclass.body}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pt-20 pb-24 md:px-12 md:pt-28 md:pb-32 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              PROGRAMME
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-8 max-w-4xl text-center md:mb-12">
            <h2 className="mb-5 font-serif text-[2.15rem] font-light leading-[1.08] text-[#1f1f1f] sm:text-[2.5rem] md:mb-6 md:text-[3.35rem] lg:text-[3.85rem]">
              A day designed with
              <br />
              clarity, rhythm and depth.
            </h2>
          </div>

          <div className="mx-auto mb-10 max-w-3xl md:mb-16">
            <p className="mb-5 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-6 md:text-[1.28rem] md:leading-[1.8]">
              The programme moves between focused talks, conversations and
              shared moments throughout the day, building from technical depth
              towards broader discussion, recognition and celebration.
            </p>

            <p className="text-[0.98rem] leading-[1.82] text-[#555] sm:text-[1.02rem] md:text-[1.14rem] md:leading-[1.9]">
              Some sessions contain several talks or conversations in sequence.
              These are shown with smaller undertimes below the main slot to
              make the flow immediately clear.
            </p>
          </div>

          <div className="border-t border-black/5 pt-8 md:pt-12">
            <div className="mx-auto max-w-5xl">
              {programmeToRender.map((item) => {
                const isActive = activeProgramme === item.id;
                const hasExpandableContent =
                  item.subItems || item.detailsText || item.detailsLabel;

                return (
                  <div key={item.id} className="border-b border-black/6">
                    <div className="py-7 md:py-10">
                      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-[120px_1fr] md:gap-x-8">
                        <div className="pt-1">
                          <p
                            className={`${firaSans.className} text-[0.76rem] uppercase tracking-[0.14em] text-[#6a675f] md:text-[0.84rem] md:tracking-[0.16em]`}
                          >
                            {item.time}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-start justify-between gap-4 md:gap-6">
                            <div className="max-w-[44rem]">
                              <h3 className="font-serif text-[1.24rem] font-semibold leading-[1.15] text-[#1f1f1f] sm:text-[1.36rem] md:text-[1.72rem] md:leading-[1.16]">
                                {item.title}
                              </h3>

                              {item.description ? (
                                <p className="mt-3 text-[0.96rem] leading-[1.78] text-[#55514a] sm:text-[1rem] md:text-[1.08rem] md:leading-[1.82]">
                                  {item.description}
                                </p>
                              ) : null}
                            </div>

                            {hasExpandableContent ? (
                              <button
                                type="button"
                                onClick={() => handleProgrammeClick(item.id)}
                                aria-expanded={isActive}
                                className={`${firaSans.className} mt-1 hidden shrink-0 items-center gap-3 text-[0.68rem] uppercase tracking-[0.18em] text-[#7a7468] transition-colors hover:text-[#a27a26] md:inline-flex`}
                              >
                                <span>{isActive ? "Close" : "More"}</span>
                                <span
                                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-[1rem] transition-all duration-300 ${
                                    isActive
                                      ? "rotate-45 border-[#d9a441] text-[#a27a26]"
                                      : ""
                                  }`}
                                >
                                  +
                                </span>
                              </button>
                            ) : null}
                          </div>

                          {item.subItems ? (
                            <div className="mt-5 pl-0 md:mt-7 md:pl-8">
                              <div className="space-y-3">
                                {item.subItems.map((subItem, subIndex) => (
                                  <div
                                    key={`${item.id}-${subIndex}`}
                                    className="grid grid-cols-[58px_1fr] gap-3 sm:grid-cols-[64px_1fr] md:grid-cols-[74px_1fr] md:gap-4"
                                  >
                                    <p
                                      className={`${firaSans.className} text-[0.68rem] uppercase tracking-[0.12em] text-[#8a8478] sm:text-[0.72rem] md:text-[0.76rem] md:tracking-[0.14em]`}
                                    >
                                      {subItem.time}
                                    </p>

                                    <div className="min-w-0">
                                      <p className="text-[0.94rem] leading-[1.55] text-[#2a2a2a] sm:text-[0.98rem] md:text-[1.03rem]">
                                        <span className="font-medium">
                                          {subItem.title}
                                        </span>
                                        {subItem.meta ? (
                                          <span className="text-[#746f64]">
                                            {" "}
                                            - {subItem.meta}
                                          </span>
                                        ) : null}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : null}

                          {hasExpandableContent ? (
                            <button
                              type="button"
                              onClick={() => handleProgrammeClick(item.id)}
                              aria-expanded={isActive}
                              className={`${firaSans.className} mt-5 inline-flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.18em] text-[#7a7468] transition-colors hover:text-[#a27a26] md:hidden`}
                            >
                              <span>{isActive ? "Close" : "More"}</span>
                              <span
                                className={`flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-[1rem] transition-all duration-300 ${
                                  isActive
                                    ? "rotate-45 border-[#d9a441] text-[#a27a26]"
                                    : ""
                                }`}
                              >
                                +
                              </span>
                            </button>
                          ) : null}

                          {isActive ? (
                            <div className="mt-6 rounded-[20px] border border-black/5 bg-[#f8f6f2] px-4 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)] md:mt-8 md:ml-8 md:rounded-[24px] md:px-7 md:py-7">
                              <p
                                className={`${firaSans.className} mb-4 text-[10px] uppercase tracking-[0.2em] text-[#a27a26] md:text-[11px] md:tracking-[0.22em]`}
                              >
                                {item.detailsLabel || "SESSION DETAILS"}
                              </p>

                              <div className="max-w-[44rem] text-[0.95rem] leading-[1.82] text-[#47433d] md:text-[1.03rem] md:leading-[1.9]">
                                <p>{item.detailsText}</p>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pt-10 pb-24 md:px-12 md:pt-14 md:pb-32 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 md:mb-20">
            <p
              className={`${firaSans.className} text-center text-[0.76rem] uppercase tracking-[0.26em] text-[#d9a441] sm:text-[0.82rem] md:text-[0.95rem] md:tracking-[0.34em]`}
            >
              FOUNDING PARTNERS 2026
            </p>
          </div>

          <div className="mx-auto mb-16 max-w-5xl md:mb-24">
            <div className="md:hidden">
              <div className="grid grid-cols-3 justify-items-center gap-x-4 gap-y-8 sm:gap-x-6">
                {foundingPartnersFromSanity.slice(0, 3).map((partner) => (
                  <div key={partner.name} className="group flex justify-center">
                    <div className="relative flex h-[112px] w-[112px] items-center justify-center transition-transform duration-300 group-hover:-translate-y-[3px] sm:h-[126px] sm:w-[126px]">
                      <img
  src={partner.logo?.asset?.url}
  alt={partner.alt || partner.name}
                        className="h-full w-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.16)]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center gap-x-8 sm:gap-x-12">
                {foundingPartnersFromSanity.slice(3, 5).map((partner) => (
                  <div key={partner.name} className="group flex justify-center">
                    <div className="relative flex h-[112px] w-[112px] items-center justify-center transition-transform duration-300 group-hover:-translate-y-[3px] sm:h-[126px] sm:w-[126px]">
                      <img
  src={partner.logo?.asset?.url}
  alt={partner.alt || partner.name}
                       className="h-full w-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.16)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-5 md:gap-8 md:items-start md:justify-items-center">
              {foundingPartnersFromSanity.map((partner) => (
                <div key={partner.name} className="group flex justify-center">
                  <div className="relative flex h-[158px] w-[158px] items-center justify-center transition-transform duration-300 group-hover:-translate-y-[3px]">
                    <img
  src={partner.logo?.asset?.url}
  alt={partner.alt || partner.name}
                      className="h-full w-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.16)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-black/6 pt-14 md:pt-20">
            <div className="mb-10 text-center md:mb-14">
              <p
                className={`${firaSans.className} text-center text-[0.76rem] uppercase tracking-[0.26em] text-[#d9a441] sm:text-[0.82rem] md:text-[0.95rem] md:tracking-[0.34em]`}
              >
                PARTNERS
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-2 items-center justify-items-center gap-x-4 gap-y-8 px-2 md:grid-cols-5 md:gap-x-10 md:gap-y-12 md:px-0">
              {partnersFromSanity.map((partner, index) => (
                <div
                  key={partner.name}
                 className={`flex h-[96px] w-full items-center justify-center transition-transform duration-300 hover:-translate-y-[2px] md:h-[110px] ${
                   partnersFromSanity.length % 2 === 1 &&
index === partnersFromSanity.length - 1
                      ? "col-span-2"
                      : ""
                  } md:col-span-1`}
                >
                  {partner.logo?.asset?.url ? (
  <img
    src={partner.logo.asset.url}
    alt={partner.alt || partner.name}
    className="max-h-[70%] max-w-[78%] object-contain md:max-h-[70%] md:max-w-[70%]"
  />
) : (
  <span className="text-sm text-red-500">{partner.name} missing logo</span>
)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#f3f1ed] pt0 pb-12 md:pt0 md:pb-14">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-6">
          <p className="text-[0.98rem] leading-[1.82] text-[#3e3c38] sm:text-[1.02rem] md:text-[1.15rem] md:leading-[1.9]">
            Engineering Day - Sweden&apos;s first official day for engineers. We
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