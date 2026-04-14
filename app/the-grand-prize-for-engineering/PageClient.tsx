"use client";

import { useEffect, useRef, useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import { urlFor } from "@/sanity/lib/image";
import { Fira_Sans, Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type GrandPrizeCategory = {
  title?: string;
  description?: string;
  href?: string;
  linkLabel?: string;
};

type JuryMember = {
  name?: string;
  title?: string;
  company?: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
};

type GrandPrizePageData = {
  page?: {
    hero?: {
      eyebrow?: string;
      title?: string;
      text?: string;
      mediaType?: "image" | "video";
      image?: {
        alt?: string;
        asset?: any;
      };
      videoUrl?: string;
    };
    whySection?: {
      label?: string;
      title?: string;
      intro?: string;
      body1?: string;
      body2?: string;
      body3?: string;
    };
    whoSection?: {
      label?: string;
      title?: string;
      intro?: string;
      body1?: string;
      body2?: string;
      body3?: string;
    };
    categoriesSection?: {
      label?: string;
      title?: string;
      intro?: string;
    };
    categories?: GrandPrizeCategory[];
    jurySection?: {
      title?: string;
    };
    bottomSection?: {
      title?: string;
      text?: string;
      linkLabel?: string;
      linkHref?: string;
    };
  };
  juryMembers?: JuryMember[];
};

const fallbackJuryMembers: JuryMember[] = [
  {
    name: "Anna Holm",
    title: "Chief Technology Officer",
    company: "NordTech",
    image: { asset: { url: "/speaker-1.jpg" } },
  },
  {
    name: "Erik Lund",
    title: "VP Engineering",
    company: "Future Systems",
    image: { asset: { url: "/speaker-2.jpg" } },
  },
  {
    name: "Sara Berg",
    title: "Head of Innovation",
    company: "Green Industry",
    image: { asset: { url: "/speaker-3.jpg" } },
  },
  {
    name: "Johan Ek",
    title: "Director of R&D",
    company: "Infra Nordic",
    image: { asset: { url: "/speaker-4.jpg" } },
  },
  {
    name: "Lisa Nyström",
    title: "Senior Advisor",
    company: "Industrial Transformation",
    image: { asset: { url: "/speaker-5.jpg" } },
  },
  {
    name: "Mikael Sjöberg",
    title: "Engineering Director",
    company: "Nordic Grid",
    image: { asset: { url: "/speaker-1.jpg" } },
  },
  {
    name: "Karin West",
    title: "Head of Product Development",
    company: "Urban Systems",
    image: { asset: { url: "/speaker-2.jpg" } },
  },
  {
    name: "David Lind",
    title: "Innovation Lead",
    company: "Advanced Materials",
    image: { asset: { url: "/speaker-3.jpg" } },
  },
  {
    name: "Elin Fors",
    title: "Senior Engineering Manager",
    company: "TechWorks",
    image: { asset: { url: "/speaker-4.jpg" } },
  },
  {
    name: "Oskar Broman",
    title: "R&D Strategist",
    company: "Future Mobility",
    image: { asset: { url: "/speaker-5.jpg" } },
  },
  {
    name: "Maria Nyberg",
    title: "Director of Sustainability Engineering",
    company: "GreenCore",
    image: { asset: { url: "/speaker-1.jpg" } },
  },
  {
    name: "Henrik Åström",
    title: "Chief Engineer",
    company: "Industrial Scale",
    image: { asset: { url: "/speaker-2.jpg" } },
  },
  {
    name: "Sofia Lindqvist",
    title: "Transformation Lead",
    company: "Energy Systems",
    image: { asset: { url: "/speaker-3.jpg" } },
  },
  {
    name: "Patrik Holmér",
    title: "VP Technology",
    company: "Smart Infra",
    image: { asset: { url: "/speaker-4.jpg" } },
  },
  {
    name: "Nina Ekström",
    title: "Head of Research Collaboration",
    company: "Engine Lab",
    image: { asset: { url: "/speaker-5.jpg" } },
  },
];

const fallbackCategories: GrandPrizeCategory[] = [
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

export default function PageClient({
  initialPageData,
}: {
  initialPageData: GrandPrizePageData;
}) {
  const pageData = initialPageData;
  const juryScrollRef = useRef<HTMLDivElement | null>(null);
  const [isJuryHovered, setIsJuryHovered] = useState(false);

  useEffect(() => {
    const container = juryScrollRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scrollStep = () => {
      if (!isJuryHovered) {
        container.scrollLeft += 0.35;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrameId = window.requestAnimationFrame(scrollStep);
    };

    animationFrameId = window.requestAnimationFrame(scrollStep);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isJuryHovered]);

  const juryMembers = pageData?.juryMembers?.length
    ? pageData.juryMembers
    : fallbackJuryMembers;

  const categories = pageData?.page?.categories?.length
    ? pageData.page.categories
    : fallbackCategories;

  const scrollingJuryMembers = [...juryMembers, ...juryMembers];

  const hasHeroMedia =
    (pageData?.page?.hero?.mediaType === "image" &&
      pageData?.page?.hero?.image?.asset) ||
    (pageData?.page?.hero?.mediaType === "video" &&
      pageData?.page?.hero?.videoUrl);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#111111]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#0f0e0d] text-[#f4efe7]">
        <div className="absolute inset-0">
          {pageData?.page?.hero?.mediaType === "video" &&
          pageData?.page?.hero?.videoUrl ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={pageData.page.hero.videoUrl} type="video/mp4" />
            </video>
          ) : hasHeroMedia && pageData?.page?.hero?.image?.asset ? (
            <img
              src={urlFor(pageData.page.hero.image).width(2200).quality(90).url()}
              alt={
                pageData?.page?.hero?.image?.alt ||
                pageData?.page?.hero?.title ||
                "Grand Prize hero image"
              }
              className="h-full w-full object-cover"
            />
          ) : (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/grand-prize-for-engineering.mp4" type="video/mp4" />
            </video>
          )}
        </div>

        <div className="absolute inset-0 bg-black/42" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,164,65,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_24%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.18)_40%,rgba(0,0,0,0.42)_100%)]" />

        <div className="relative px-5 md:px-12 lg:px-20">
          <div className="mx-auto flex min-h-[72vh] max-w-7xl items-center pt-14 pb-16 sm:min-h-[76vh] sm:pt-16 sm:pb-20 md:min-h-[82vh] md:pt-20 md:pb-32">
            <div className="max-w-4xl">
              <p
                className={`${firaSans.className} mb-6 text-[10px] uppercase tracking-[0.26em] text-[#d9a441] sm:mb-7 md:mb-8 md:text-[11px]`}
              >
                {pageData?.page?.hero?.eyebrow || "The Grand Prize for Engineering"}
              </p>

              <h1 className={`${lora.className} text-[2.7rem] leading-[0.94] font-light tracking-[-0.04em] text-[#f7f1e8] sm:text-[3.4rem] md:text-[5.1rem] lg:text-[6.2rem] whitespace-pre-line`}>
  {pageData?.page?.hero?.title ? (
    pageData.page.hero.title
  ) : (
    <>
      Celebrating the people
      behind the progress
    </>
  )}
</h1>

              <p className="mt-6 max-w-xl text-[1rem] leading-[1.75] text-[#d6d0c7] sm:mt-7 sm:text-[1.05rem] md:mt-8 md:text-[15px] md:leading-relaxed">
                {pageData?.page?.hero?.text ||
                  "Since 2021, we have celebrated the engineers, ideas and achievements that turn innovation into real-world impact."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pt-20 pb-20 sm:pt-22 sm:pb-22 md:px-12 md:pt-24 md:pb-24 lg:px-20 lg:pt-28 lg:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} mb-3 md:mb-4 text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              {pageData?.page?.whySection?.label || "WHY?"}
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              {pageData?.page?.whySection?.title || "Engineering that matters"}
            </h2>

            <p className="italic text-[1.06rem] sm:text-[1.14rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              {pageData?.page?.whySection?.intro ||
                "A prize for engineering that creates lasting impact."}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-6 md:mb-8">
              {pageData?.page?.whySection?.body1 ||
                "Engineering has always been at the core of progress. From infrastructure and energy systems to digital platforms and intelligent machines, it is engineers who translate ideas into reality."}
            </p>

            <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-8 md:mb-10">
              {pageData?.page?.whySection?.body2 ||
                "The Grand Prize for Engineering exists to recognize individuals and teams whose work not only advances technology, but creates lasting impact in society."}
            </p>

            <p className="text-[0.98rem] sm:text-[1.02rem] md:text-[1.22rem] leading-[1.85] md:leading-[1.9] text-[#555]">
              {pageData?.page?.whySection?.body3 ||
                "It highlights the people, ideas and achievements that move industries forward and shape the future through knowledge, courage and execution."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pt-20 pb-20 sm:pt-22 sm:pb-22 md:px-12 md:pt-24 md:pb-24 lg:px-20 lg:pt-28 lg:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} mb-3 md:mb-4 text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              {pageData?.page?.whoSection?.label || "WHO?"}
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              {pageData?.page?.whoSection?.title || "The people behind the progress"}
            </h2>

            <p className="italic text-[1.06rem] sm:text-[1.14rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              {pageData?.page?.whoSection?.intro ||
                "Individuals and teams redefining what engineering can achieve."}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-6 md:mb-8">
              {pageData?.page?.whoSection?.body1 ||
                "The Grand Prize for Engineering recognizes individuals and teams who have distinguished themselves through exceptional work, innovation and leadership. Their contributions push boundaries, solve real-world challenges and create meaningful impact across industries."}
            </p>

            <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-8 md:mb-10">
              {pageData?.page?.whoSection?.body2 ||
                "The prize is awarded across five categories: Innovation, Leadership, Sustainability, Rising Star and Role Model of the Year. Together, they reflect the breadth of engineering and the many ways progress is shaped."}
            </p>

            <p className="text-[0.98rem] sm:text-[1.02rem] md:text-[1.22rem] leading-[1.85] md:leading-[1.9] text-[#555]">
              {pageData?.page?.whoSection?.body3 ||
                "From breakthrough technologies to transformative leadership, each category highlights those who contribute to building a more advanced, sustainable and resilient society."}
            </p>
          </div>
        </div>
      </section>

      <section
        id="categories"
        className="bg-[#f3f1ed] px-5 pt-20 pb-20 sm:pt-22 sm:pb-22 md:px-12 md:pt-24 md:pb-24 lg:px-20 lg:pt-28 lg:pb-28"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} mb-3 md:mb-4 text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              {pageData?.page?.categoriesSection?.label || "WHAT?"}
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              {pageData?.page?.categoriesSection?.title || (
                <>
                  Five ways engineering
                  <br />
                  <span className="block">makes an impact</span>
                </>
              )}
            </h2>

            <p className="italic text-[1.06rem] sm:text-[1.14rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              {pageData?.page?.categoriesSection?.intro ||
                "Explore the five award categories within The Grand Prize for Engineering."}
            </p>
          </div>

          <div className="max-w-4xl mx-auto border-t border-black/10">
            {categories.map((category, index) => (
              <a
                key={`${category.title || "category"}-${index}`}
                href={category.href || "#"}
                className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-start md:items-end gap-3 md:gap-4 border-b border-black/10 py-6 md:py-8 transition-colors hover:text-[#a27a26]"
              >
                <div>
                  <h3 className="font-serif text-[1.55rem] sm:text-[1.7rem] md:text-[2.4rem] leading-[1.05] text-[#1f1f1f]">
                    {category.title || "Category"}
                  </h3>
                  <p className="mt-2 text-[0.98rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
                    {category.description || ""}
                  </p>
                </div>
                <span
                  className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
                >
                  {category.linkLabel || "Read more"}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pt-4 pb-20 sm:pt-6 sm:pb-22 md:px-12 md:pt-8 md:pb-24 lg:px-20 lg:pt-10 lg:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 text-center md:mb-14">
            <p
              className={`${firaSans.className} mb-3 text-[11px] uppercase tracking-[0.24em] text-[#a27a26] md:text-[13px]`}
            >
              {pageData?.page?.jurySection?.title || "Meet the jury"}
            </p>

            <div className="mx-auto h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f3f1ed] to-transparent md:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f3f1ed] to-transparent md:w-24" />

            <div
              ref={juryScrollRef}
              onMouseEnter={() => setIsJuryHovered(true)}
              onMouseLeave={() => setIsJuryHovered(false)}
              className="overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex w-max gap-6">
                {scrollingJuryMembers.map((member, index) => (
                  <div
                    key={`${member.name || "jury"}-${index}`}
                    className="group w-[240px] shrink-0 md:w-[260px]"
                  >
                    <div className="overflow-hidden rounded-[1.6rem] bg-[#e9e4dc]">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={member.image?.asset?.url || "/speaker-1.jpg"}
                          alt={member.name || "Jury member"}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>

                    <div className="pt-4 text-center">
                      <h3 className="font-serif text-[1.25rem] leading-[1.15] text-[#1f1f1f]">
                        {member.name || "Jury member"}
                      </h3>

                      <p className="mt-2 text-[0.95rem] leading-[1.65] text-[#6a6256]">
                        {[member.title, member.company].filter(Boolean).join(", ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 text-white sm:py-24 md:px-12 md:py-32 lg:px-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/award-group.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.72))]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-5 md:mb-6 font-serif text-[2rem] sm:text-[2.4rem] md:text-[3.4rem] lg:text-[4rem] leading-[1.08]">
            {pageData?.page?.bottomSection?.title || "Engineering deserves recognition"}
          </h2>

          <p className="mb-8 md:mb-10 text-[1rem] sm:text-[1.08rem] md:text-[1.3rem] leading-[1.7] text-[#d0d0d0]">
            {pageData?.page?.bottomSection?.text ||
              "The Grand Prize for Engineering highlights the people and ideas that move society forward — not for attention, but for impact."}
          </p>

          <a
            href={pageData?.page?.bottomSection?.linkHref || "/engineering-day-2026"}
            className="inline-block mt-4 md:mt-6 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#a27a26] hover:text-[#d9a441] transition-colors"
          >
            {pageData?.page?.bottomSection?.linkLabel ||
              "The winners will be celebrated at SPACE, Stockholm · October 21"}
          </a>
        </div>
      </section>

      <footer className="bg-[#f3f1ed] pt-12 pb-12 md:pt-12 md:pb-14">
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