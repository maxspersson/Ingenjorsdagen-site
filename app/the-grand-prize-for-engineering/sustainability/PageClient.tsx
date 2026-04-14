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
  title: "Why sustainability matters",
  subtitle:
    "The climate crisis demands concrete action, innovation and engineering expertise.",
  body: `The climate crisis is one of the greatest challenges of our time, and we have a responsibility toward future generations to both contribute to solutions and reduce our own climate impact. To succeed in the green transition, groundbreaking innovation, new business models and engineering expertise are required.

Skanska has set the goal of being climate-neutral throughout its entire value chain by 2045, and we see that the transformation of the industry needs to happen quickly. That is why this year we are focusing on solutions that directly affect environmental and climate issues.

Through this award, we want to highlight engineers and teams who have turned climate challenges into concrete actions and innovations that make a difference.`,
};

const fallbackWhoSection = {
  eyebrow: "WHO?",
  title: "Who can win?",
  subtitle:
    "An engineer or small team turning climate challenges into practical, lasting solutions.",
  body: `The Sustainability prize in engineering can be awarded to an individual engineer or a smaller team in which the majority have engineering expertise. The winner is someone who is passionate about the climate issue, thinks innovatively and wants to change the world in a sustainable way.

The nominee must have identified a climate challenge, large or small, and developed a product, service or innovation that has had a positive, direct and sustainable impact on the climate.

This could, for example, involve a new product or technology, an innovative method or new way of working, or a service that contributes to reduced climate impact.`,
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
    text: "Employees of Skanska cannot be nominated.",
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
  winner: "HYBRIT’s hydrogen storage",
  presentedBy: "Presented by Skanska",
  summary:
    "One of industry’s biggest climate challenges is how to store energy and balance the system when solar and wind output vary. HYBRIT’s pilot project in Luleå has provided an answer: storage of fossil-free hydrogen in steel-lined rock caverns. The technology has been tested in real operation with performance corresponding to 50 years of use — and the results show that fossil-free steel is no longer a vision, but a reality on the path to scaling up.",
  jury:
    "The jury sees the project as a technical milestone that can reduce Sweden’s carbon emissions by up to ten percent and give industry an entirely new flexibility.",
};

const fallbackHallOfFame = [
  {
    year: "2024",
    winner: "Johanna Stjernström, Stockholm City Exploitation Office",
    presentedBy: "Presented by Skanska",
    summary:
      "The construction industry’s path toward an emission-free future. Johanna Stjernström has led the work on 'Persikan', one of Sweden’s first emission-free construction sites. Through innovative knowledge-sharing and a strong commitment to collaboration, she has shown how the construction sector can reduce its climate impact, while also lowering noise and air pollution in densely built urban areas.",
    jury: "",
  },
  {
    year: "2023",
    winner: "Skellefteå Kraft Business Innovation Team",
    presentedBy: "Presented by Skanska",
    summary:
      "Business models that drive the climate transition. The winners have shown how innovative business models can solve climate challenges by creating win-win situations. By transforming old business models and thinking in new ways, they have found a key to accelerating the transition toward a more sustainable energy sector.",
    jury: "",
  },
  {
    year: "2022",
    winner: "Gaia Gen",
    presentedBy: "Presented by Skanska",
    summary:
      "Data that reduces the climate footprint of digitalization. In a world where digitalization is increasing, new solutions are needed to understand and reduce its climate impact. Gaia Gen has created a solution that makes it possible for companies to gain precise knowledge of the climate impact of their cloud services, making it easier to make data-driven and sustainable decisions.",
    jury: "",
  },
  {
    year: "2021",
    winner: "Northvolt through Maria Åstrand",
    presentedBy: "Presented by Skanska",
    summary:
      "Revolutionizing Swedish industry through sustainable battery production. Northvolt has shown that it is possible to create circular and climate-neutral industrial production in Sweden. By building a green value chain for battery metals, they have laid the foundation for more sustainable electrification and the transformation of the transport sector.",
    jury: "",
  },
];

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

  const heroImageUrl = hero?.image?.asset?.url || "/sustainability-2026.png";
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
              className={`${firaSans.className} mb-3 md:mb-4 text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              {whySection.eyebrow || "WHY?"}
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <h2 className="mb-5 md:mb-6 font-serif text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] font-light leading-[1.04] text-[#1f1f1f]">
              {whySection.title || fallbackWhySection.title}
            </h2>

            <p className="text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] italic leading-[1.45] text-[#5f5a52]">
              {whySection.subtitle || fallbackWhySection.subtitle}
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            {whyParagraphs.map((paragraph, index) => {
              const isLast = index === whyParagraphs.length - 1;

              return (
                <p
                  key={index}
                  className={
                    isLast
                      ? "text-[0.98rem] sm:text-[1.02rem] md:text-[1.22rem] leading-[1.85] md:leading-[1.9] text-[#555]"
                      : "mb-6 md:mb-8 text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c]"
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
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} mb-3 md:mb-4 text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              {whoSection.eyebrow || "WHO?"}
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <h2 className="mb-5 md:mb-6 font-serif text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] font-light leading-[1.04] text-[#1f1f1f]">
              {whoSection.title || fallbackWhoSection.title}
            </h2>

            <p className="text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] italic leading-[1.45] text-[#5f5a52]">
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
                      ? "text-[0.98rem] sm:text-[1.02rem] md:text-[1.22rem] leading-[1.85] md:leading-[1.9] text-[#555]"
                      : "mb-6 md:mb-8 text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c]"
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
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} mb-3 md:mb-4 text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              {criteriaSection.eyebrow || "CRITERIA"}
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
            <h2 className="mb-5 md:mb-6 font-serif text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] font-light leading-[1.04] text-[#1f1f1f]">
              {criteriaSection.title || fallbackCriteriaSection.title}
            </h2>

            <p className="text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] italic leading-[1.45] text-[#5f5a52]">
              {criteriaSection.subtitle || fallbackCriteriaSection.subtitle}
            </p>
          </div>

          <div className="mx-auto max-w-4xl border-t border-black/10">
            {criteriaItems.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="grid grid-cols-1 gap-3 md:gap-5 border-b border-black/10 py-6 md:grid-cols-[220px_1fr] md:py-8"
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

      <section className="bg-[#f3f1ed] px-5 pb-20 pt-0 md:px-12 md:pb-28 md:pt-16 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} mb-3 md:mb-4 text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              {hallOfFameSection.eyebrow || "HALL OF FAME"}
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
            <h2 className="mb-5 md:mb-6 font-serif text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] font-light leading-[1.04] text-[#1f1f1f]">
              {hallOfFameSection.title || fallbackHallOfFameSection.title}
            </h2>

            <p className="text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] italic leading-[1.45] text-[#5f5a52]">
              {hallOfFameSection.subtitle || fallbackHallOfFameSection.subtitle}
            </p>
          </div>

          <div className="mx-auto mb-10 max-w-5xl overflow-hidden rounded-[24px] md:rounded-[28px] border border-black/10 bg-white md:mb-14">
            <div className="border-b border-black/10 px-5 py-5 md:px-8 md:py-7">
              <p
                className={`${firaSans.className} mb-3 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#a27a26]`}
              >
                {(featuredWinner?.label || "Featured winner") +
                  " · " +
                  (featuredWinner?.year || "2025")}
              </p>

              <h3 className="mb-3 font-serif text-[1.7rem] sm:text-[1.9rem] md:text-[2.7rem] leading-[1.08] text-[#1f1f1f]">
                {featuredWinner?.winner || fallbackFeaturedWinner.winner}
              </h3>

              <p className="text-[0.95rem] md:text-[1.04rem] text-[#6a6256]">
                {featuredWinner?.presentedBy ||
                  fallbackFeaturedWinner.presentedBy}
              </p>
            </div>

            <div className="px-5 py-6 md:px-8 md:py-9">
              <p className="mb-5 md:mb-6 text-[1rem] md:text-[1.14rem] leading-[1.85] md:leading-[1.9] text-[#2c2c2c]">
                {featuredWinner?.summary || fallbackFeaturedWinner.summary}
              </p>

              {(featuredWinner?.jury || fallbackFeaturedWinner.jury) && (
                <p className="text-[0.98rem] md:text-[1.1rem] leading-[1.85] md:leading-[1.9] text-[#555]">
                  {featuredWinner?.jury || fallbackFeaturedWinner.jury}
                </p>
              )}
            </div>
          </div>

          <div className="mx-auto max-w-5xl border-t border-black/10">
            {hallOfFameItems.map((item, index) => (
              <div
                key={`${item.year}-${item.winner}-${index}`}
                className="grid grid-cols-1 gap-4 md:gap-5 border-b border-black/10 py-7 md:grid-cols-[120px_1fr] md:py-9"
              >
                <div>
                  <p
                    className={`${firaSans.className} text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[#a27a26]`}
                  >
                    {item.year}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-serif text-[1.45rem] sm:text-[1.6rem] md:text-[2rem] leading-[1.1] text-[#1f1f1f]">
                    {item.winner}
                  </h3>

                  <p className="mb-4 md:mb-5 text-[0.94rem] md:text-[1rem] text-[#6a6256]">
                    {item.presentedBy}
                  </p>

                  <p className="mb-4 text-[0.98rem] md:text-[1.06rem] leading-[1.82] md:leading-[1.85] text-[#2c2c2c]">
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
        <div className="mx-auto max-w-3xl px-5 md:px-6 text-center">
          <p className="text-[1rem] md:text-[1.15rem] leading-[1.85] md:leading-[1.9] text-[#3e3c38]">
            Engineering Day - Sweden&apos;s first official day for engineers. We
            celebrate our engineers and their powers of innovation, creativity
            and hard work. The event is also a forum for knowledge-sharing and
            networking.
          </p>

          <p className="mt-5 text-sm italic tracking-[0.02em] text-black/40">
            A part of Ny Teknik
          </p>

          <div className="mt-10 md:mt-12 flex items-center justify-center gap-8">
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

          <div className="mt-10 md:mt-12 text-[11px] uppercase tracking-[0.12em] text-black/30">
            © 2026 Ny Teknik
          </div>
        </div>
      </footer>
    </main>
  );
}