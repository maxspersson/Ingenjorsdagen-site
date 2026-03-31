"use client";

import { useEffect, useState } from "react";
import { Fira_Sans } from "next/font/google";
import SiteHeader from "@/app/components/SiteHeader";
import { client } from "@/sanity/lib/client";
import { grandPrizePageQuery } from "@/sanity/lib/queries";

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
  role?: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
};

type GrandPrizePageData = {
  hero?: {
    eyebrow?: string;
    title?: string;
    text?: string;
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
  juryMembers?: JuryMember[];
  bottomSection?: {
    title?: string;
    text?: string;
    linkLabel?: string;
    linkHref?: string;
  };
};

const fallbackJuryMembers: JuryMember[] = [
  {
    name: "Anna Holm",
    role: "Chief Technology Officer, NordTech",
    image: { asset: { url: "/speaker-1.jpg" } },
  },
  {
    name: "Erik Lund",
    role: "VP Engineering, Future Systems",
    image: { asset: { url: "/speaker-2.jpg" } },
  },
  {
    name: "Sara Berg",
    role: "Head of Innovation, Green Industry",
    image: { asset: { url: "/speaker-3.jpg" } },
  },
  {
    name: "Johan Ek",
    role: "Director of R&D, Infra Nordic",
    image: { asset: { url: "/speaker-4.jpg" } },
  },
  {
    name: "Lisa Nyström",
    role: "Senior Advisor, Industrial Transformation",
    image: { asset: { url: "/speaker-5.jpg" } },
  },
  {
    name: "Mikael Sjöberg",
    role: "Engineering Director, Nordic Grid",
    image: { asset: { url: "/speaker-1.jpg" } },
  },
  {
    name: "Karin West",
    role: "Head of Product Development, Urban Systems",
    image: { asset: { url: "/speaker-2.jpg" } },
  },
  {
    name: "David Lind",
    role: "Innovation Lead, Advanced Materials",
    image: { asset: { url: "/speaker-3.jpg" } },
  },
  {
    name: "Elin Fors",
    role: "Senior Engineering Manager, TechWorks",
    image: { asset: { url: "/speaker-4.jpg" } },
  },
  {
    name: "Oskar Broman",
    role: "R&D Strategist, Future Mobility",
    image: { asset: { url: "/speaker-5.jpg" } },
  },
  {
    name: "Maria Nyberg",
    role: "Director of Sustainability Engineering, GreenCore",
    image: { asset: { url: "/speaker-1.jpg" } },
  },
  {
    name: "Henrik Åström",
    role: "Chief Engineer, Industrial Scale",
    image: { asset: { url: "/speaker-2.jpg" } },
  },
  {
    name: "Sofia Lindqvist",
    role: "Transformation Lead, Energy Systems",
    image: { asset: { url: "/speaker-3.jpg" } },
  },
  {
    name: "Patrik Holmér",
    role: "VP Technology, Smart Infra",
    image: { asset: { url: "/speaker-4.jpg" } },
  },
  {
    name: "Nina Ekström",
    role: "Head of Research Collaboration, Engine Lab",
    image: { asset: { url: "/speaker-5.jpg" } },
  },
];

export default function Page() {
  const [pageData, setPageData] = useState<GrandPrizePageData | null>(null);

  useEffect(() => {
    client.fetch(grandPrizePageQuery).then((data) => {
      setPageData(data);
    });
  }, []);

  const juryMembers =
    pageData?.juryMembers && pageData.juryMembers.length > 0
      ? pageData.juryMembers
      : fallbackJuryMembers;
        const scrollingJuryMembers = [...juryMembers, ...juryMembers];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#111111]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#0f0e0d] text-[#f4efe7]">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/grand-prize-for-engineering.mp4" type="video/mp4" />
          </video>
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
                {pageData?.hero?.eyebrow || "The Grand Prize for Engineering"}
              </p>

              <h1 className="font-serif text-[2.7rem] leading-[0.94] font-light tracking-[-0.04em] text-[#f7f1e8] sm:text-[3.4rem] md:text-[5.1rem] lg:text-[6.2rem]">
                {pageData?.hero?.title || (
                  <>
                    Celebrating the people
                    <br />
                    behind the progress
                  </>
                )}
              </h1>

              <p className="mt-6 max-w-xl text-[1rem] leading-[1.75] text-[#d6d0c7] sm:mt-7 sm:text-[1.05rem] md:mt-8 md:text-[15px] md:leading-relaxed">
                {pageData?.hero?.text ||
                  "Since 2021, we have celebrated the engineers, ideas and achievements that turn innovation into real-world impact."}
              </p>
            </div>
          </div>
        </div>
      </section>

                  <section className="bg-[#f3f1ed] px-5 pt-4 pb-20 sm:pt-6 sm:pb-22 md:px-12 md:pt-8 md:pb-24 lg:px-20 lg:pt-10 lg:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 md:mb-14 text-center">
            <p
              className={`${firaSans.className} mb-3 text-[11px] uppercase tracking-[0.24em] text-[#a27a26] md:text-[13px]`}
            >
              {pageData?.jurySection?.title || "Meet the jury"}
            </p>

            <div className="mx-auto h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f3f1ed] to-transparent md:w-24" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f3f1ed] to-transparent md:w-24" />

            <div className="jury-track">
              <div className="jury-row">
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
                        {member.role || ""}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
              {pageData?.whoSection?.label || "WHO?"}
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              {pageData?.whoSection?.title ||
                "The people behind the progress"}
            </h2>

            <p className="italic text-[1.06rem] sm:text-[1.14rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              {pageData?.whoSection?.intro ||
                "Individuals and teams redefining what engineering can achieve."}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-6 md:mb-8">
              {pageData?.whoSection?.body1 ||
                "The Grand Prize for Engineering recognizes individuals and teams who have distinguished themselves through exceptional work, innovation and leadership. Their contributions push boundaries, solve real-world challenges and create meaningful impact across industries."}
            </p>

            <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-8 md:mb-10">
              {pageData?.whoSection?.body2 ||
                "The prize is awarded across five categories: Innovation, Leadership, Sustainability, Rising Star and Role Model of the Year. Together, they reflect the breadth of engineering and the many ways progress is shaped."}
            </p>

            <p className="text-[0.98rem] sm:text-[1.02rem] md:text-[1.22rem] leading-[1.85] md:leading-[1.9] text-[#555]">
              {pageData?.whoSection?.body3 ||
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
              {pageData?.categoriesSection?.label || "WHAT?"}
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              {pageData?.categoriesSection?.title || (
                <>
                  Five ways engineering
                  <br />
                  <span className="block">makes an impact</span>
                </>
              )}
            </h2>

            <p className="italic text-[1.06rem] sm:text-[1.14rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              {pageData?.categoriesSection?.intro ||
                "Explore the five award categories within The Grand Prize for Engineering."}
            </p>
          </div>

          <div className="max-w-4xl mx-auto border-t border-black/10">
            <a
              href="/the-grand-prize-for-engineering/innovation"
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-start md:items-end gap-3 md:gap-4 border-b border-black/10 py-6 md:py-8 transition-colors hover:text-[#a27a26]"
            >
              <div>
                <h3 className="font-serif text-[1.55rem] sm:text-[1.7rem] md:text-[2.4rem] leading-[1.05] text-[#1f1f1f]">
                  Innovation
                </h3>
                <p className="mt-2 text-[0.98rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
                  For breakthrough ideas, technologies and solutions with the
                  power to create real-world change.
                </p>
              </div>
              <span
                className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
              >
                Read more
              </span>
            </a>

            <a
              href="/the-grand-prize-for-engineering/leadership"
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-start md:items-end gap-3 md:gap-4 border-b border-black/10 py-6 md:py-8 transition-colors hover:text-[#a27a26]"
            >
              <div>
                <h3 className="font-serif text-[1.55rem] sm:text-[1.7rem] md:text-[2.4rem] leading-[1.05] text-[#1f1f1f]">
                  Leadership
                </h3>
                <p className="mt-2 text-[0.98rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
                  For leaders who create progress by combining technical
                  understanding with vision, courage and direction.
                </p>
              </div>
              <span
                className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
              >
                Read more
              </span>
            </a>

            <a
              href="/the-grand-prize-for-engineering/sustainability"
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-start md:items-end gap-3 md:gap-4 border-b border-black/10 py-6 md:py-8 transition-colors hover:text-[#a27a26]"
            >
              <div>
                <h3 className="font-serif text-[1.55rem] sm:text-[1.7rem] md:text-[2.4rem] leading-[1.05] text-[#1f1f1f]">
                  Sustainability
                </h3>
                <p className="mt-2 text-[0.98rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
                  For engineering that helps accelerate the transition toward a
                  more sustainable and resilient society.
                </p>
              </div>
              <span
                className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
              >
                Read more
              </span>
            </a>

            <a
              href="/the-grand-prize-for-engineering/rising-star"
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-start md:items-end gap-3 md:gap-4 border-b border-black/10 py-6 md:py-8 transition-colors hover:text-[#a27a26]"
            >
              <div>
                <h3 className="font-serif text-[1.55rem] sm:text-[1.7rem] md:text-[2.4rem] leading-[1.05] text-[#1f1f1f]">
                  Rising Star
                </h3>
                <p className="mt-2 text-[0.98rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
                  For emerging engineers whose ideas, leadership or technical
                  achievements point clearly toward the future.
                </p>
              </div>
              <span
                className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
              >
                Read more
              </span>
            </a>

            <a
              href="/the-grand-prize-for-engineering/role-model-of-the-year"
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto] items-start md:items-end gap-3 md:gap-4 border-b border-black/10 py-6 md:py-8 transition-colors hover:text-[#a27a26]"
            >
              <div>
                <h3 className="font-serif text-[1.55rem] sm:text-[1.7rem] md:text-[2.4rem] leading-[1.05] text-[#1f1f1f]">
                  Role Model of the Year
                </h3>
                <p className="mt-2 text-[0.98rem] md:text-[1.08rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256]">
                  For those who inspire others through leadership, expertise and
                  a clear commitment to positive change.
                </p>
              </div>
              <span
                className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#8b8276] group-hover:text-[#a27a26]`}
              >
                Read more
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pt-4 pb-20 sm:pt-6 sm:pb-22 md:px-12 md:pt-8 md:pb-24 lg:px-20 lg:pt-10 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14 text-center">
            <p
              className={`${firaSans.className} mb-3 text-[11px] uppercase tracking-[0.24em] text-[#a27a26] md:text-[13px]`}
            >
              {pageData?.jurySection?.title || "Meet the jury"}
            </p>

            <div className="mx-auto h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-5 md:gap-6">
              {juryMembers.map((member, index) => (
                <div
                  key={`${member.name || "jury"}-${index}`}
                  className="group w-[240px] shrink-0"
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

                  <div className="pt-4">
                    <h3 className="font-serif text-[1.25rem] leading-[1.15] text-[#1f1f1f]">
                      {member.name || "Jury member"}
                    </h3>

                    <p className="mt-2 text-[0.95rem] leading-[1.65] text-[#6a6256]">
                      {member.role || ""}
                    </p>
                  </div>
                </div>
              ))}
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
            {pageData?.bottomSection?.title || "Engineering deserves recognition"}
          </h2>

          <p className="mb-8 md:mb-10 text-[1rem] sm:text-[1.08rem] md:text-[1.3rem] leading-[1.7] text-[#d0d0d0]">
            {pageData?.bottomSection?.text ||
              "The Grand Prize for Engineering highlights the people and ideas that move society forward — not for attention, but for impact."}
          </p>

          <a
            href={pageData?.bottomSection?.linkHref || "/engineering-day-2026"}
            className="inline-block mt-4 md:mt-6 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#a27a26] hover:text-[#d9a441] transition-colors"
          >
            {pageData?.bottomSection?.linkLabel ||
              "The winners will be celebrated at SPACE, Stockholm · October 21"}
          </a>
        </div>
      </section>
            <style jsx>{`
        .jury-track {
          overflow: hidden;
          width: 100%;
        }

        .jury-row {
          display: flex;
          width: max-content;
          gap: 24px;
          animation: juryScroll 80s linear infinite;
          will-change: transform;
        }

        .jury-row:hover {
          animation-play-state: paused;
        }

        @keyframes juryScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>

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