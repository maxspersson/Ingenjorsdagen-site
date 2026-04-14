"use client";

import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type HeroImage = {
  asset?: {
    url?: string;
  };
};

type HeroSection = {
  mediaType?: "image" | "video";
  image?: HeroImage;
  videoUrl?: string;
};

type TextSection = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  body?: string;
};

type CriteriaItem = {
  label?: string;
  text?: string;
};

type FeaturedWinner = {
  label?: string;
  year?: string;
  winner?: string;
  presentedBy?: string;
  summary?: string;
  jury?: string;
};

type HallOfFameItem = {
  year?: string;
  winner?: string;
  presentedBy?: string;
  summary?: string;
  jury?: string;
};

type GrandPrizeCategoryPageData = {
  seo?: {
    title?: string;
    description?: string;
    ogTitle?: string;
    ogDescription?: string;
    noIndex?: boolean;
    ogImage?: {
      alt?: string;
      asset?: {
        url?: string;
      };
    };
  };
  hero?: HeroSection;
  whySection?: TextSection;
  whoSection?: TextSection;
  criteriaSection?: TextSection;
  criteriaItems?: CriteriaItem[];
  hallOfFameSection?: TextSection;
  featuredWinner?: FeaturedWinner;
  hallOfFameItems?: HallOfFameItem[];
};

const fallbackWhySection = {
  eyebrow: "WHY?",
  title: "Why role models matter",
  subtitle:
    "The future of engineering is shaped not only by technology, but by people, leadership and the courage to drive change.",
  body: `The engineering of the future is not only about technology - it is also about people, leadership and the courage to change. To meet the challenges of society and create a more sustainable and innovative world, we need role models who inspire, engage and show the way.

With the Role Model of the Year award, we want to recognize engineers who through their work have challenged norms and shown new ways of thinking and working, taken initiatives that contribute to positive change in technology, society or sustainability, and inspired others through leadership, engagement or expertise.

This may involve driving technical innovation, creating new ways of working and new solutions, paving the way for the engineers of the future, or in other ways making a significant contribution to the industry and society.

We highlight the individuals and teams who, through their commitment, not only improve their own organization, but also influence and change the world around them.`,
};

const fallbackWhoSection = {
  eyebrow: "WHO?",
  title: "Who can win?",
  subtitle:
    "An engineer or a team whose work has inspired others and created positive change.",
  body: `The Role Model of the Year award can be given to an individual engineer or to a team in which the majority have engineering expertise.

We are looking for a person or team who, through their work, has challenged norms and shown new ways of thinking and working in technology and engineering, taken concrete initiatives to create positive change in technology, society or sustainability, and influenced their surroundings while inspiring others through leadership, engagement or expertise.

This may be a person or team that has broken new ground through leadership, education, technical innovation or societal development - or an engineer or team whose commitment has made a difference for individuals, teams or entire organizations.`,
};

const fallbackCriteriaSection = {
  eyebrow: "CRITERIA",
  title: "What defines the award",
  subtitle: "The fundamental criteria for nomination.",
};

const fallbackCriteriaItems = [
  {
    label: "Connection to Sweden",
    text: "The person or team must have a strong connection to the Swedish engineering market.",
  },
  {
    label: "Societal benefit",
    text: "The work must contribute to a sustainable society.",
  },
  {
    label: "Ethics and sustainability",
    text: "The work or initiative must meet high ethical standards and promote sustainable development.",
  },
  {
    label: "Current work",
    text: "Nominees must have been active in the area during the past year.",
  },
  {
    label: "Note",
    text: "Employees of Sweco cannot be nominated.",
  },
];

const fallbackHallOfFameSection = {
  eyebrow: "HALL OF FAME",
  title: "Previous winners",
  subtitle:
    "A selection of individuals and teams previously recognized by the award.",
};

const fallbackFeaturedWinner = {
  label: "Featured winner",
  year: "2025",
  winner: "Jonatan Stromgren, LM International",
  presentedBy: "Presented by Sweco",
  summary:
    "Jonatan Stromgren has worked with water supply in Swedish municipalities and taken his expertise further into humanitarian projects in East Africa. There, he has developed sustainable solutions for clean water in some of the world's most vulnerable environments.",
  jury:
    "The jury highlights his ability to combine technical knowledge with cultural understanding - and that he inspires both younger and more experienced colleagues through his commitment.",
};

const fallbackHallOfFame: HallOfFameItem[] = [];

function splitParagraphs(text?: string) {
  if (!text) return [];
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export default function PageClient({
  initialPageData,
}: {
  initialPageData: GrandPrizeCategoryPageData;
}) {
  const pageData = initialPageData;

  const hero = pageData?.hero;
  const whySection = pageData?.whySection || fallbackWhySection;
  const whoSection = pageData?.whoSection || fallbackWhoSection;
  const criteriaSection = pageData?.criteriaSection || fallbackCriteriaSection;
  const criteriaItems =
    pageData?.criteriaItems && pageData.criteriaItems.length > 0
      ? pageData.criteriaItems
      : fallbackCriteriaItems;
  const hallOfFameSection =
    pageData?.hallOfFameSection || fallbackHallOfFameSection;
  const featuredWinner =
    pageData?.featuredWinner?.winner || pageData?.featuredWinner?.summary
      ? pageData.featuredWinner
      : fallbackFeaturedWinner;
  const hallOfFameItems =
    pageData?.hallOfFameItems && pageData.hallOfFameItems.length > 0
      ? pageData.hallOfFameItems
      : fallbackHallOfFame;

  const heroImageUrl =
    hero?.image?.asset?.url || "/role-model-of-the-year-2026.png";
  const whyParagraphs = splitParagraphs(whySection.body);
  const whoParagraphs = splitParagraphs(whoSection.body);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f1ed] text-[#1f1f1f]">
      <SiteHeader />

      <section className="relative min-h-[44vh] overflow-hidden bg-[#f3f1ed] sm:min-h-[52vh] md:min-h-[70vh] lg:min-h-[82vh]">
        {hero?.mediaType === "video" && hero?.videoUrl ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={hero.videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-contain lg:bg-cover lg:bg-center"
            style={{
              backgroundImage: `url('${heroImageUrl}')`,
              backgroundPosition: "left center",
            }}
          />
        )}
      </section>

      <section className="bg-[#f3f1ed] px-5 md:px-12 lg:px-20 pt-14 md:pt-28 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              {whySection.eyebrow || "WHY?"}
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <h2 className="mb-5 font-serif text-[2.2rem] font-light leading-[1.03] text-[#1f1f1f] sm:text-[2.6rem] md:mb-6 md:text-[4.05rem] lg:text-[4.6rem]">
              {whySection.title || fallbackWhySection.title}
            </h2>

            <p className="mx-auto max-w-[23rem] text-[1.06rem] italic leading-[1.5] text-[#5f5a52] sm:max-w-[31rem] sm:text-[1.14rem] md:max-w-none md:text-[1.4rem]">
              {whySection.subtitle || fallbackWhySection.subtitle}
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            {whyParagraphs.map((paragraph, index) => {
              const isSecondToLast = index === whyParagraphs.length - 2;
              const isLast = index === whyParagraphs.length - 1;

              return (
                <p
                  key={index}
                  className={
                    isLast
                      ? "text-[1rem] leading-[1.82] text-[#555] sm:text-[1.05rem] md:text-[1.22rem] md:leading-[1.9]"
                      : isSecondToLast
                      ? "mb-7 text-[1rem] leading-[1.82] text-[#555] sm:text-[1.05rem] md:mb-8 md:text-[1.22rem] md:leading-[1.9]"
                      : "mb-7 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-8 md:text-[1.3rem] md:leading-[1.82]"
                  }
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pb-20 pt-0 md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              {whoSection.eyebrow || "WHO?"}
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <h2 className="mb-5 font-serif text-[2.2rem] font-light leading-[1.03] text-[#1f1f1f] sm:text-[2.6rem] md:mb-6 md:text-[4.05rem] lg:text-[4.6rem]">
              {whoSection.title || fallbackWhoSection.title}
            </h2>

            <p className="mx-auto max-w-[24rem] text-[1.06rem] italic leading-[1.5] text-[#5f5a52] sm:max-w-[31rem] sm:text-[1.14rem] md:max-w-none md:text-[1.4rem]">
              {whoSection.subtitle || fallbackWhoSection.subtitle}
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            {whoParagraphs.map((paragraph, index) => {
              const isLast = index === whoParagraphs.length - 1;

              return (
                <p
                  key={index}
                  className={
                    isLast
                      ? "text-[1rem] leading-[1.82] text-[#555] sm:text-[1.05rem] md:text-[1.22rem] md:leading-[1.9]"
                      : "mb-7 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-8 md:text-[1.3rem] md:leading-[1.82]"
                  }
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pb-20 pt-0 md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              {criteriaSection.eyebrow || "CRITERIA"}
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-16">
            <h2 className="mb-5 font-serif text-[2.2rem] font-light leading-[1.03] text-[#1f1f1f] sm:text-[2.6rem] md:mb-6 md:text-[4.05rem] lg:text-[4.6rem]">
              {criteriaSection.title || fallbackCriteriaSection.title}
            </h2>

            <p className="mx-auto max-w-[22rem] text-[1.06rem] italic leading-[1.5] text-[#5f5a52] sm:max-w-[28rem] sm:text-[1.14rem] md:max-w-none md:text-[1.4rem]">
              {criteriaSection.subtitle || fallbackCriteriaSection.subtitle}
            </p>
          </div>

          <div className="mx-auto max-w-4xl border-t border-black/10">
            {criteriaItems.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="grid grid-cols-1 gap-3 border-b border-black/10 py-6 md:grid-cols-[220px_1fr] md:gap-5 md:py-8"
              >
                <p
                  className={`${firaSans.className} text-[11px] uppercase tracking-[0.16em] text-[#8b8276] md:text-[12px] md:tracking-[0.18em]`}
                >
                  {item.label}
                </p>
                <p className="text-[0.98rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.02rem] md:text-[1.12rem] md:leading-[1.85]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pb-20 pt-10 md:px-12 md:pb-28 md:pt-16 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              {hallOfFameSection.eyebrow || "HALL OF FAME"}
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-16">
            <h2 className="mb-5 font-serif text-[2.2rem] font-light leading-[1.03] text-[#1f1f1f] sm:text-[2.6rem] md:mb-6 md:text-[4.05rem] lg:text-[4.6rem]">
              {hallOfFameSection.title || fallbackHallOfFameSection.title}
            </h2>

            <p className="mx-auto max-w-[24rem] text-[1.06rem] italic leading-[1.5] text-[#5f5a52] sm:max-w-[31rem] sm:text-[1.14rem] md:max-w-none md:text-[1.4rem]">
              {hallOfFameSection.subtitle || fallbackHallOfFameSection.subtitle}
            </p>
          </div>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-[22px] border border-black/10 bg-white md:rounded-[28px]">
            <div className="border-b border-black/10 px-5 py-5 md:px-8 md:py-7">
              <p
                className={`${firaSans.className} mb-3 text-[10px] uppercase tracking-[0.18em] text-[#a27a26] md:text-[11px] md:tracking-[0.2em]`}
              >
                {(featuredWinner?.label || "Featured winner") +
                  " · " +
                  (featuredWinner?.year || "2025")}
              </p>

              <h3 className="mb-3 font-serif text-[1.7rem] leading-[1.08] text-[#1f1f1f] sm:text-[1.95rem] md:text-[2.7rem]">
                {featuredWinner?.winner || fallbackFeaturedWinner.winner}
              </h3>

              <p className="text-[0.94rem] text-[#6a6256] md:text-[1.04rem]">
                {featuredWinner?.presentedBy ||
                  fallbackFeaturedWinner.presentedBy}
              </p>
            </div>

            <div className="px-5 py-6 md:px-8 md:py-9">
              <p className="mb-5 text-[1rem] leading-[1.82] text-[#2c2c2c] sm:text-[1.03rem] md:mb-6 md:text-[1.14rem] md:leading-[1.9]">
                {featuredWinner?.summary || fallbackFeaturedWinner.summary}
              </p>

              {(featuredWinner?.jury || fallbackFeaturedWinner.jury) && (
                <p className="text-[0.98rem] leading-[1.82] text-[#555] sm:text-[1rem] md:text-[1.1rem] md:leading-[1.9]">
                  {featuredWinner?.jury || fallbackFeaturedWinner.jury}
                </p>
              )}
            </div>
          </div>

          {hallOfFameItems.length > 0 ? (
            <div className="mx-auto mt-10 max-w-5xl border-t border-black/10 md:mt-14">
              {hallOfFameItems.map((item, index) => (
                <div
                  key={`${item.year}-${item.winner}-${index}`}
                  className="grid grid-cols-1 gap-4 border-b border-black/10 py-7 md:grid-cols-[120px_1fr] md:gap-5 md:py-9"
                >
                  <div>
                    <p
                      className={`${firaSans.className} text-[11px] uppercase tracking-[0.16em] text-[#a27a26] md:text-[12px] md:tracking-[0.18em]`}
                    >
                      {item.year}
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-serif text-[1.4rem] leading-[1.12] text-[#1f1f1f] sm:text-[1.52rem] md:text-[2rem]">
                      {item.winner}
                    </h3>

                    <p className="mb-4 text-[0.92rem] text-[#6a6256] md:mb-5 md:text-[1rem]">
                      {item.presentedBy}
                    </p>

                    <p className="mb-4 text-[0.98rem] leading-[1.8] text-[#2c2c2c] sm:text-[1rem] md:text-[1.06rem] md:leading-[1.85]">
                      {item.summary}
                    </p>

                    {item.jury ? (
                      <p className="text-[0.96rem] leading-[1.8] text-[#555] sm:text-[0.98rem] md:text-[1.04rem] md:leading-[1.85]">
                        {item.jury}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <footer className="bg-[#f3f1ed] pt0 pb-12 md:pt0 md:pb-14">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-6">
          <p className="text-[0.98rem] leading-[1.82] text-[#3e3c38] sm:text-[1.02rem] md:text-[1.15rem] md:leading-[1.9]">
            Engineering Day - Sweden's first official day for engineers. We
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