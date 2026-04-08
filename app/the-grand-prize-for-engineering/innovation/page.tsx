"use client";

import { useEffect, useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans } from "next/font/google";
import { client } from "@/sanity/lib/client";
import { grandPrizeCategoryPageQuery } from "@/sanity/lib/queries";

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
  title: "Why innovation matters",
  subtitle:
    "Innovation is a driving force for societal development and a key to a more sustainable future.",
  body: `By highlighting new ideas and solutions, this award aims to encourage engineers to think in new ways and develop technologies that meet the demands of the future — whether they relate to climate challenges, digitalization or solutions that improve society.

With this award, we want to recognize innovations that are not only technically groundbreaking, but also feasible and scalable — solutions that can make a real difference both today and in the future.`,
};

const fallbackWhoSection = {
  eyebrow: "WHO?",
  title: "Who can win?",
  subtitle:
    "A person or team whose idea represents a high degree of innovation.",
  body: `The Innovation prize in engineering is awarded to a person or a team that has developed an idea with a high level of innovation. The innovation may represent an entirely new way of thinking, a new method or a concrete solution to an existing problem.

We value innovation that is implementable and has the potential to scale, that has a positive impact on society and the economy, and that takes climate challenges into account while contributing to a more sustainable world.

It does not have to be a complex solution — the best innovations are often the simplest and most effective.`,
};

const fallbackCriteriaSection = {
  eyebrow: "CRITERIA",
  title: "What defines the award",
  subtitle: "The fundamental criteria for nomination.",
};

const fallbackCriteriaItems = [
  {
    label: "Connection to Sweden",
    text: "The person or the solution must have a strong connection to Sweden through place of residence, development or another clear link.",
  },
  {
    label: "Societal benefit",
    text: "The work must have a positive impact on society or the environment.",
  },
  {
    label: "Ethics and sustainability",
    text: "The solution must meet high ethical standards and promote sustainable development.",
  },
  {
    label: "Current work",
    text: "Nominees must have been active in the area during the past year.",
  },
  {
    label: "Note",
    text: "Employees of VAROPreem cannot be nominated.",
  },
];

const fallbackHallOfFameSection = {
  eyebrow: "HALL OF FAME",
  title: "Previous winners",
  subtitle:
    "A selection of innovators and teams previously recognized by the award.",
};

const fallbackFeaturedWinner = {
  label: "Featured winner",
  year: "2025",
  winner: "Sunsurf Solar",
  presentedBy: "Presented by Preem",
  summary:
    "When land is already occupied, why not move solar parks out onto the water? SunSurf Solar has developed a modular floating solar technology adapted to Nordic conditions, with solutions for snow, ice, wind and varying water levels. The water surface cools the panels and increases efficiency, while also reducing evaporation and algal bloom.",
  jury:
    "The jury highlights that SunSurf has not only developed the technology — they have also proven it in operation. That makes them pioneers within a solution with global potential.",
};

const fallbackHallOfFame = [
  {
    year: "2024",
    winner: "Dr. Mustafa S Hamada",
    presentedBy: "Presented by Vattenfall",
    summary:
      "Innovation for mental sustainability in an AI-driven world. Mustafa S Hamada has developed a technology that makes cognitive training accessible to millions of people. His innovation addresses a growing need to strengthen mental focus and resilience in a world where stress and information overload threaten our creative ability.",
    jury:
      "The jury highlights his work as a groundbreaking combination of technology and human well-being, with the potential to influence both individuals and society at large.",
  },
  {
    year: "2023",
    winner: "Team EasyMining",
    presentedBy: "Presented by Vattenfall",
    summary:
      "Circular solutions for more sustainable food production. Team EasyMining has shown how research can be put into practice by creating an innovation that enables the recycling of nutrients and resources. By reducing the environmental impact of food production, their technology has the potential to change the industry globally.",
    jury: "",
  },
  {
    year: "2022",
    winner: "SaniSOLE",
    presentedBy: "Presented by Vattenfall",
    summary:
      "Environmentally friendly and recyclable hygiene products. Innovation can both improve everyday life and reduce climate impact. The SaniSOLE team has developed a product that makes it possible to use circular and environmentally friendly sanitation solutions without compromising on quality.",
    jury:
      "The jury emphasizes that this innovation has the potential to help people around the world reduce their climate impact, while offering a sustainable and practical solution.",
  },
  {
    year: "2021",
    winner: "Hans-Olof Nilsson",
    presentedBy: "Presented by Vattenfall",
    summary:
      "The energy pioneer who built his own sustainable system. Hans-Olof Nilsson has proven that it is possible to live completely off-grid using renewable energy. Through innovative solutions in energy and hydrogen storage, he has created a self-sufficient energy system that inspires both private individuals and decision-makers.",
    jury:
      "The jury highlights his curiosity, experimental mindset and willingness to share his insights, which make him a true innovator and role model for the energy solutions of the future.",
  },
];

function splitParagraphs(text?: string) {
  if (!text) return [];
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export default function InnovationPage() {
  const [pageData, setPageData] = useState<GrandPrizeCategoryPageData | null>(
    null
  );

  useEffect(() => {
    async function loadPageData() {
      try {
        const data = await client.fetch(grandPrizeCategoryPageQuery, {
          slug: "innovation",
        });
        setPageData(data);
      } catch (error) {
        console.error("Failed to load innovation page data:", error);
      }
    }

    loadPageData();
  }, []);

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

  const heroImageUrl = hero?.image?.asset?.url || "/innovation-2026.png";
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
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-3 md:mb-4`}
            >
              {whySection.eyebrow || "WHY?"}
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              {whySection.title || fallbackWhySection.title}
            </h2>

            <p className="italic text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              {whySection.subtitle || fallbackWhySection.subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {whyParagraphs.length > 0 ? (
              whyParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] ${
                    index !== whyParagraphs.length - 1 ? "mb-6 md:mb-8" : "mb-0"
                  }`}
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <>
                <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-6 md:mb-8">
                  By highlighting new ideas and solutions, this award aims to
                  encourage engineers to think in new ways and develop
                  technologies that meet the demands of the future — whether
                  they relate to climate challenges, digitalization or solutions
                  that improve society.
                </p>

                <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-0">
                  With this award, we want to recognize innovations that are not
                  only technically groundbreaking, but also feasible and scalable
                  — solutions that can make a real difference both today and in
                  the future.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 md:px-12 lg:px-20 pt-0 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-3 md:mb-4`}
            >
              {whoSection.eyebrow || "WHO?"}
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              {whoSection.title || fallbackWhoSection.title}
            </h2>

            <p className="italic text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              {whoSection.subtitle || fallbackWhoSection.subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {whoParagraphs.map((paragraph, index) => {
              const isLast = index === whoParagraphs.length - 1;

              return (
                <p
                  key={index}
                  className={
                    isLast
                      ? "text-[0.98rem] sm:text-[1.02rem] md:text-[1.22rem] leading-[1.85] md:leading-[1.9] text-[#555]"
                      : "text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-6 md:mb-8"
                  }
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 md:px-12 lg:px-20 pt-0 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-3 md:mb-4`}
            >
              {criteriaSection.eyebrow || "CRITERIA"}
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              {criteriaSection.title || fallbackCriteriaSection.title}
            </h2>

            <p className="italic text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              {criteriaSection.subtitle || fallbackCriteriaSection.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto border-t border-black/10">
            {criteriaItems.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-5 border-b border-black/10 py-6 md:py-8"
              >
                <p
                  className={`${firaSans.className} text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
                >
                  {item.label}
                </p>
                <p className="text-[0.98rem] md:text-[1.12rem] leading-[1.82] md:leading-[1.85] text-[#2c2c2c]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 md:px-12 lg:px-20 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-3 md:mb-4`}
            >
              {hallOfFameSection.eyebrow || "HALL OF FAME"}
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              {hallOfFameSection.title || fallbackHallOfFameSection.title}
            </h2>

            <p className="italic text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              {hallOfFameSection.subtitle || fallbackHallOfFameSection.subtitle}
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-[24px] md:rounded-[28px] border border-black/10 bg-white overflow-hidden mb-10 md:mb-14">
            <div className="border-b border-black/10 px-5 py-5 md:px-8 md:py-7">
              <p
                className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#a27a26] mb-3`}
              >
                {(featuredWinner?.label || "Featured winner") +
                  " · " +
                  (featuredWinner?.year || "2025")}
              </p>

              <h3 className="font-serif text-[1.7rem] sm:text-[1.9rem] md:text-[2.7rem] leading-[1.08] text-[#1f1f1f] mb-3">
                {featuredWinner?.winner || fallbackFeaturedWinner.winner}
              </h3>

              <p className="text-[0.95rem] md:text-[1.04rem] text-[#6a6256]">
                {featuredWinner?.presentedBy ||
                  fallbackFeaturedWinner.presentedBy}
              </p>
            </div>

            <div className="px-5 py-6 md:px-8 md:py-9">
              <p className="text-[1rem] md:text-[1.14rem] leading-[1.85] md:leading-[1.9] text-[#2c2c2c] mb-5 md:mb-6">
                {featuredWinner?.summary || fallbackFeaturedWinner.summary}
              </p>

              {(featuredWinner?.jury || fallbackFeaturedWinner.jury) && (
                <p className="text-[0.98rem] md:text-[1.1rem] leading-[1.85] md:leading-[1.9] text-[#555]">
                  {featuredWinner?.jury || fallbackFeaturedWinner.jury}
                </p>
              )}
            </div>
          </div>

          <div className="max-w-5xl mx-auto border-t border-black/10">
            {hallOfFameItems.map((item, index) => (
              <div
                key={`${item.year}-${item.winner}-${index}`}
                className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-5 border-b border-black/10 py-7 md:py-9"
              >
                <div>
                  <p
                    className={`${firaSans.className} text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[#a27a26]`}
                  >
                    {item.year}
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-[1.45rem] sm:text-[1.6rem] md:text-[2rem] leading-[1.1] text-[#1f1f1f] mb-2">
                    {item.winner}
                  </h3>

                  <p className="text-[0.94rem] md:text-[1rem] text-[#6a6256] mb-4 md:mb-5">
                    {item.presentedBy}
                  </p>

                  <p className="text-[0.98rem] md:text-[1.06rem] leading-[1.82] md:leading-[1.85] text-[#2c2c2c] mb-4">
                    {item.summary}
                  </p>

                  {item.jury ? (
                    <p className="text-[0.96rem] md:text-[1.04rem] leading-[1.82] md:leading-[1.85] text-[#555]">
                      {item.jury}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#f3f1ed] pt0 pb-12 md:pt0 md:pb-14">
        <div className="max-w-3xl mx-auto text-center px-5 md:px-6">
          <p className="text-[1rem] md:text-[1.15rem] text-[#3e3c38] leading-[1.85] md:leading-[1.9]">
            Engineering Day – Sweden&apos;s first official day for engineers. We
            celebrate our engineers and their powers of innovation, creativity
            and hard work. The event is also a forum for knowledge-sharing and
            networking.
          </p>

          <p className="mt-5 text-sm text-black/40 italic tracking-[0.02em]">
            A part of Ny Teknik
          </p>

          <div className="flex justify-center items-center gap-8 mt-10 md:mt-12">
            <a
              href="https://www.linkedin.com/company/ingenj%C3%B6rsdagen/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition duration-200"
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
              className="opacity-60 hover:opacity-100 transition duration-200"
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
              className="opacity-60 hover:opacity-100 transition duration-200"
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
              className="opacity-60 hover:opacity-100 transition duration-200"
            >
              <img
                src="/Website.png"
                alt="Ny Teknik"
                className="h-5 w-5 object-contain"
              />
            </a>
          </div>

          <div className="mt-10 md:mt-12 text-[11px] tracking-[0.12em] text-black/30 uppercase">
            © 2026 Ny Teknik
          </div>
        </div>
      </footer>
    </main>
  );
}