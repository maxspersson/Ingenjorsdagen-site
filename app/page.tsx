"use client";

import { useEffect, useState } from "react";
import { Fira_Sans } from "next/font/google";

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
        <ul className="mb-8 list-disc pl-5 space-y-3">
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

const programme = [
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

const foundingPartners = [
  { name: "Saab", logo: "Saab-Logo.png" },
  { name: "VAROPreem", logo: "Varopreem-Logo.png" },
  { name: "Skanska", logo: "Skanska-Logo.png" },
  { name: "Sweco", logo: "Sweco-Logo.png" },
  { name: "Trafikverket", logo: "Trafikverket-Logo.png" },
];

const partners = [
  {
    name: "Energimyndigheten",
    logo: "Energimyndigheten-Logo.png",
    className: "max-h-[74px] md:max-h-[84px]",
  },
  {
    name: "BAE Systems",
    logo: "BAESystems-Logo.png",
    className: "max-h-[34px] md:max-h-[38px]",
  },
  {
    name: "Axis Communications",
    logo: "Axis-Logo.png",
    className: "max-h-[44px] md:max-h-[50px]",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMasterclass, setActiveMasterclass] = useState<number | null>(
    null
  );
  const [activeProgramme, setActiveProgramme] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMasterclass(null);
        setActiveProgramme(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMasterclassClick = (index: number) => {
    setActiveMasterclass((prev) => (prev === index ? null : index));
  };

  const handleProgrammeClick = (id: string) => {
    setActiveProgramme((prev) => (prev === id ? null : id));
  };

  const rows = [masterclasses.slice(0, 2), masterclasses.slice(2, 4)];

  return (
    <main className="min-h-screen bg-[#f3f1ed] text-[#1f1f1f]">
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/85 backdrop-blur-md shadow-md" : "bg-[#efefef]"
        }`}
      >
        <div className="flex justify-center pt-10 pb-6">
          <img
            src="/EngineeringDay-logo.png"
            alt="Engineering Day"
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-20 md:h-24" : "h-24 md:h-28"
            }`}
          />
        </div>

        <div className="border-t border-[#d9a441] px-10 py-3 flex justify-between items-center">
          <div
            className={`${firaSans.className} text-[10px] font-medium tracking-[0.18em] uppercase`}
          >
            STOCKHOLM, 21 OCTOBER 2026
          </div>

          <div
            className={`${firaSans.className} flex items-center gap-8 text-[10px] font-medium tracking-[0.16em] uppercase`}
          >
            <a href="#" className="hover:text-[#d9a441] transition-colors">
              ATTENDING HEROES
            </a>

            <div className="relative group">
              <button className="flex items-center gap-2 uppercase hover:text-[#d9a441] transition-colors">
                <span>THE GRAND PRIZE FOR ENGINEERING</span>
                <span className="text-[9px]">▾</span>
              </button>

              <div className="invisible absolute left-0 top-full z-50 mt-3 w-80 translate-y-2 bg-white opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="py-3">
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    INNOVATION
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    LEADERSHIP
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    RISING STAR
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    ROLE MODEL OF THE YEAR
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    SUSTAINABILITY
                  </a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-2 uppercase hover:text-[#d9a441] transition-colors">
                <span>PRE-EVENTS</span>
                <span className="text-[9px]">▾</span>
              </button>

              <div className="invisible absolute left-0 top-full z-50 mt-3 w-72 translate-y-2 bg-white opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="py-3">
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    CAREER DAY @ GÖTEBORG
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    CAREER DAY @ MALMÖ
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    CAREER DAY @ STOCKHOLM
                  </a>
                </div>
              </div>
            </div>

            <a href="#" className="hover:text-[#d9a441] transition-colors">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-[85vh] flex items-center justify-center text-center text-white px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 max-w-4xl py-24">
          <p className="uppercase tracking-[0.4em] text-[11px] mb-8 opacity-80">
            OCTOBER 21, 2026 – STOCKHOLM
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.05] mb-10">
            Engineering Day
            <br />
            2026
          </h1>

          <p className="mb-12 text-lg md:text-xl opacity-90">
            We the engineers. Together. For the future.
          </p>

          <button
            className={`${firaSans.className} bg-[#d9a441] hover:bg-[#c8932f] transition px-14 py-4 text-white tracking-[0.3em] text-xs uppercase shadow-lg`}
          >
            BOOK YOUR SPOT
          </button>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-12">
            <p
              className={`${firaSans.className} text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-4`}
            >
              THIS YEAR&apos;S THEME
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-14">
            <h2 className="text-[3.15rem] md:text-[4.25rem] lg:text-[4.85rem] leading-[1.01] font-serif font-light text-[#1f1f1f] mb-5">
              Engineering Intelligent
              <br />
              <span className="block">Machines</span>
            </h2>

            <p className="italic text-[1.28rem] md:text-[1.48rem] leading-[1.45] text-[#5a5a5a]">
              Where AI enters the physical world
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-[1.18rem] md:text-[1.34rem] leading-[1.8] text-[#2c2c2c] mb-8">
              Engineers today face a new kind of problem: how to make
              intelligent machines function reliably in the messy, unpredictable
              physical world. AI is no longer confined to controlled
              environments. It is moving into robots, tools and autonomous
              systems that must operate safely, respond in real time and
              interact with people.
            </p>

            <p className="text-[1.18rem] md:text-[1.34rem] leading-[1.8] text-[#2c2c2c] mb-10">
              How do we make intelligent machines work in the real world, with
              real constraints and real consequences?
            </p>

            <p className="text-[1.12rem] md:text-[1.24rem] leading-[1.9] text-[#555]">
              Engineering Day 2026 brings together engineers working at the
              center of this shift across robotics, mobility, energy,
              healthcare and infrastructure. Together we explore what applied
              machine intelligence means in practice and what this
              transformation means for the future of engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 pt-12 md:pt-14 pb-24 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-12">
            <p
              className={`${firaSans.className} text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-4`}
            >
              MASTERCLASSES
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
            <h2 className="text-[2.45rem] md:text-[3.2rem] lg:text-[3.55rem] leading-[1.08] font-serif font-light text-[#1f1f1f] mb-6">
              Focused sessions.
              <br />
              Deeper technical insight.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mb-14">
            <p className="text-[1.14rem] md:text-[1.28rem] leading-[1.8] text-[#2c2c2c] mb-6">
              Masterclasses are focused, small-group sessions designed to give
              engineers deeper insight into real technical challenges.
            </p>

            <p className="text-[1.14rem] md:text-[1.28rem] leading-[1.8] text-[#2c2c2c] mb-6">
              Before the main Engineering Day programme begins, participants can
              join one of four expert-led masterclasses exploring engineering
              topics in greater depth.
            </p>

            <p className="text-[1.08rem] md:text-[1.14rem] leading-[1.9] text-[#555]">
              Each masterclass lasts <strong>45 minutes</strong> and is limited
              in size to ensure an engaging and practical learning environment.
            </p>
          </div>

          <div className="border-t border-black/5 pt-12 md:pt-14">
            <div className="space-y-8 md:space-y-10">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                      {row.map((item, cardOffset) => {
                        const index = rowStartIndex + cardOffset;
                        const isActive = activeMasterclass === index;

                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleMasterclassClick(index)}
                            aria-expanded={isActive}
                            className={`group relative overflow-hidden rounded-[28px] text-left transition-all duration-300 ${
                              isActive
                                ? "shadow-[0_18px_46px_rgba(0,0,0,0.16)] ring-1 ring-[#d9a441]/70"
                                : "shadow-[0_14px_34px_rgba(0,0,0,0.10)] ring-1 ring-black/5 hover:-translate-y-[3px] hover:shadow-[0_18px_42px_rgba(0,0,0,0.14)]"
                            }`}
                          >
                            <div
                              className="relative h-[360px] md:h-[380px] bg-cover bg-center"
                              style={{ backgroundImage: `url('${item.image}')` }}
                            >
                              <div
                                className={`absolute inset-0 transition-all duration-300 ${
                                  isActive
                                    ? "bg-gradient-to-b from-black/15 via-black/38 to-black/78"
                                    : "bg-gradient-to-b from-black/20 via-black/42 to-black/80"
                                }`}
                              />

                              <div className="relative z-10 flex h-full flex-col justify-between p-7 md:p-8 text-white">
                                <div>
                                  <p
                                    className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-white/80 mb-4`}
                                  >
                                    {item.kicker}
                                  </p>

                                  <h3 className="max-w-[30rem] text-[2rem] md:text-[2.15rem] leading-[1.04] font-serif font-semibold">
                                    {item.title}
                                  </h3>
                                </div>

                                <div>
                                  <div className="flex items-center gap-4 mb-6">
                                    <img
                                      src={item.avatar}
                                      alt={item.speaker}
                                      className="h-[64px] w-[64px] md:h-[70px] md:w-[70px] rounded-full border border-white/80 object-cover"
                                    />

                                    <div className="leading-[1.4]">
                                      <p className="text-[1.08rem] md:text-[1.12rem] font-semibold">
                                        {item.speaker}
                                      </p>
                                      <p className="text-[0.98rem] md:text-[1rem] text-white/90">
                                        {item.role}
                                      </p>
                                      {item.company ? (
                                        <p className="text-[0.98rem] md:text-[1rem] text-white/90">
                                          {item.company}
                                        </p>
                                      ) : null}
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between border-t border-white/20 pt-4">
                                    <span className="text-[0.98rem] text-white/95">
                                      {isActive
                                        ? "Close details"
                                        : "Read details"}
                                    </span>

                                    <span
                                      className={`flex h-10 w-10 items-center justify-center rounded-full border text-[1.15rem] text-white transition-all duration-300 ${
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
                        );
                      })}
                    </div>

                    {selectedMasterclass ? (
                      <div className="rounded-[28px] border border-black/5 bg-[#f8f6f2] shadow-[0_14px_40px_rgba(0,0,0,0.07)] overflow-hidden">
                        <div className="px-6 py-7 md:px-10 md:py-10 lg:px-12 lg:py-11">
                          <div className="flex items-start justify-between gap-6 mb-7">
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

                          <div className="max-w-[52rem] text-[1.02rem] md:text-[1.08rem] leading-[1.95] text-[#434343]">
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

      <section className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-28 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-12">
            <p
              className={`${firaSans.className} text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-4`}
            >
              PROGRAMME
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
            <h2 className="text-[2.55rem] md:text-[3.35rem] lg:text-[3.85rem] leading-[1.08] font-serif font-light text-[#1f1f1f] mb-6">
              A day designed with
              <br />
              clarity, rhythm and depth.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mb-14 md:mb-16">
            <p className="text-[1.14rem] md:text-[1.28rem] leading-[1.8] text-[#2c2c2c] mb-6">
              The programme moves between focused talks, conversations and
              shared moments throughout the day, building from technical depth
              towards broader discussion, recognition and celebration.
            </p>

            <p className="text-[1.08rem] md:text-[1.14rem] leading-[1.9] text-[#555]">
              Some sessions contain several talks or conversations in sequence.
              These are shown with smaller undertimes below the main slot to
              make the flow immediately clear.
            </p>
          </div>

          <div className="border-t border-black/5 pt-10 md:pt-12">
            <div className="max-w-5xl mx-auto">
              {programme.map((item) => {
                const isActive = activeProgramme === item.id;
                const hasExpandableContent =
                  item.subItems || item.detailsText || item.detailsLabel;

                return (
                  <div key={item.id} className="border-b border-black/6">
                    <div className="py-8 md:py-10">
                      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-y-4 md:gap-x-8">
                        <div className="pt-1">
                          <p
                            className={`${firaSans.className} text-[0.8rem] md:text-[0.84rem] tracking-[0.16em] uppercase text-[#6a675f]`}
                          >
                            {item.time}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-start justify-between gap-6">
                            <div className="max-w-[44rem]">
                              <h3 className="text-[1.42rem] md:text-[1.72rem] leading-[1.16] font-serif font-semibold text-[#1f1f1f]">
                                {item.title}
                              </h3>

                              {item.description ? (
                                <p className="mt-3 text-[1rem] md:text-[1.08rem] leading-[1.82] text-[#55514a]">
                                  {item.description}
                                </p>
                              ) : null}
                            </div>

                            {hasExpandableContent ? (
                              <button
                                type="button"
                                onClick={() => handleProgrammeClick(item.id)}
                                aria-expanded={isActive}
                                className={`${firaSans.className} mt-1 hidden md:inline-flex shrink-0 items-center gap-3 text-[0.68rem] uppercase tracking-[0.18em] text-[#7a7468] transition-colors hover:text-[#a27a26]`}
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
                            <div className="mt-6 md:mt-7 pl-0 md:pl-8">
                              <div className="space-y-3 md:space-y-3.5">
                                {item.subItems.map((subItem, subIndex) => (
                                  <div
                                    key={`${item.id}-${subIndex}`}
                                    className="grid grid-cols-[64px_1fr] md:grid-cols-[74px_1fr] gap-4"
                                  >
                                    <p
                                      className={`${firaSans.className} text-[0.72rem] md:text-[0.76rem] tracking-[0.14em] uppercase text-[#8a8478]`}
                                    >
                                      {subItem.time}
                                    </p>

                                    <div className="min-w-0">
                                      <p className="text-[0.98rem] md:text-[1.03rem] leading-[1.55] text-[#2a2a2a]">
                                        <span className="font-medium">
                                          {subItem.title}
                                        </span>
                                        {subItem.meta ? (
                                          <span className="text-[#746f64]">
                                            {" "}
                                            — {subItem.meta}
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
                              className={`${firaSans.className} mt-6 inline-flex md:hidden items-center gap-3 text-[0.68rem] uppercase tracking-[0.18em] text-[#7a7468] transition-colors hover:text-[#a27a26]`}
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
                            <div className="mt-7 md:mt-8 md:ml-8 rounded-[24px] border border-black/5 bg-[#f8f6f2] px-5 py-6 md:px-7 md:py-7 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                              <p
                                className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-[#a27a26] mb-4`}
                              >
                                {item.detailsLabel || "SESSION DETAILS"}
                              </p>

                              <div className="max-w-[44rem] text-[0.98rem] md:text-[1.03rem] leading-[1.9] text-[#47433d]">
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

     <section className="relative overflow-hidden bg-gradient-to-b from-[#f3f1ed] via-[#f3f1ed] to-[#eae4dc] px-6 md:px-12 lg:px-20 pt-12 md:pt-14 pb-28 md:pb-32">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(250,167,1,0.12),_rgba(250,167,1,0.05)_24%,_rgba(243,241,237,0)_58%)] pointer-events-none" />

  <div className="relative max-w-6xl mx-auto">
    <div className="mb-16 md:mb-20">
      <p
        className={`${firaSans.className} text-center text-[0.88rem] md:text-[0.95rem] uppercase tracking-[0.34em] text-[#2d2b27]`}
      >
        FOUNDING PARTNERS 2026
      </p>
    </div>

    <div className="max-w-5xl mx-auto grid grid-cols-5 gap-6 md:gap-8 items-start justify-items-center mb-20 md:mb-24">
      {foundingPartners.map((partner) => (
        <div key={partner.name} className="group flex justify-center">
          <div className="relative flex h-[142px] w-[142px] md:h-[158px] md:w-[158px] items-center justify-center transition-transform duration-300 group-hover:-translate-y-[3px]">
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-full w-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.16)]"
            />
          </div>
        </div>
      ))}
    </div>

    <div className="border-t border-black/6 pt-16 md:pt-20">
      <div className="text-center mb-12 md:mb-14">
        <p
          className={`${firaSans.className} text-[0.88rem] md:text-[0.95rem] uppercase tracking-[0.34em] text-[#2d2b27]`}
        >
          PARTNERS
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-12 md:gap-y-14 items-center justify-items-center">
{partners.map((partner) => (
  <div
    key={partner.name}
    className="flex items-center justify-center h-[90px] md:h-[110px] w-full transition-transform duration-300 hover:-translate-y-[2px]"
  >
    <img
      src={`/${partner.logo}`}
      alt={partner.name}
      className="h-12 md:h-14 w-auto object-contain"
    />
  </div>
))}
      </div>
    </div>
  </div>
</section>
<footer className="pt-24 pb-12 bg-[#eae4dc]">
  <div className="max-w-3xl mx-auto text-center px-6">
    <p className="text-base md:text-lg text-black/70 leading-relaxed">
      Engineering Day – Sweden’s first official day for engineers. We celebrate
      our engineers and their powers of innovation, creativity and hard work.
      The event is also a forum for knowledge-sharing and networking.
    </p>

    <p className="mt-4 text-sm text-black/40 italic">
      A part of Ny Teknik
    </p>

    <div className="flex justify-center items-center gap-6 mt-10">
      <a
        href="https://www.linkedin.com/company/ingenj%C3%B6rsdagen/"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-70 hover:opacity-100 transition"
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
        className="opacity-70 hover:opacity-100 transition"
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
        className="opacity-70 hover:opacity-100 transition"
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
        className="opacity-70 hover:opacity-100 transition"
      >
        <img
          src="/Website.png"
          alt="Ny Teknik"
          className="h-5 w-5 object-contain"
        />
      </a>
    </div>

    <div className="mt-10 text-xs text-black/30">
      © 2026 Ny Teknik
    </div>
  </div>
</footer>
    </main>
  );
}