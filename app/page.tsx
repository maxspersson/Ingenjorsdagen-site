"use client";

import { Fira_Sans } from "next/font/google";
import SiteHeader from "@/app/components/SiteHeader";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f1ed] text-[#1f1f1f]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#161514] text-[#f4efe7]">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/engineering-day.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-black/72 md:bg-black/68" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,164,65,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_22%)]" />

        <div className="absolute inset-0 opacity-[0.05] md:opacity-[0.06]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.36),rgba(0,0,0,0.26),rgba(0,0,0,0.6))]" />

        <div className="relative px-5 md:px-12 lg:px-20">
          <div className="mx-auto flex min-h-[72vh] max-w-7xl items-center pt-14 pb-16 sm:min-h-[76vh] sm:pt-16 sm:pb-20 md:min-h-[78vh] md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
            <div className="max-w-4xl">
              <p
                className={`${firaSans.className} mb-6 text-[10px] uppercase tracking-[0.26em] text-[#d9a441] sm:mb-7 md:mb-8 md:text-[11px]`}
              >
                A Platform for Engineering
              </p>

              <h1 className="font-serif text-[2.7rem] leading-[0.94] tracking-[-0.04em] text-[#f7f1e8] sm:text-[3.4rem] md:text-[5rem] lg:text-[6.4rem]">
                Engineering,
                <br />
                ideas and the future
                <br />
                built into one platform.
              </h1>

              <p className="mt-6 max-w-[39rem] text-[1rem] leading-[1.75] text-white/78 sm:mt-7 sm:text-[1.06rem] md:mt-8 md:text-[1.18rem] md:leading-[1.9]">
                Engineering Day is more than a single event. It is a platform
                for conversations, recognition, talent and the engineering
                ideas shaping what comes next.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-12">
                <a
                  href="/engineering-day-2026"
                  className={`${firaSans.className} inline-flex min-h-[54px] items-center justify-center bg-[#d9a441] px-6 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#c8932f] sm:px-8 sm:text-[11px]`}
                >
                  Explore Engineering Day 2026
                </a>

                <a
                  href="/the-grand-prize-for-engineering"
                  className={`${firaSans.className} inline-flex min-h-[54px] items-center justify-center border border-white/18 bg-white/5 px-6 text-[10px] font-medium uppercase tracking-[0.22em] text-[#f7f1e8] transition-colors hover:bg-white/10 sm:px-8 sm:text-[11px]`}
                >
                  The Grand Prize for Engineering
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pb-10 pt-18 sm:pt-20 md:px-12 md:pb-14 md:pt-24 lg:px-20 lg:pt-28 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl md:mb-16">
            <p
              className={`${firaSans.className} mb-4 text-[10px] uppercase tracking-[0.24em] text-[#a27a26] md:mb-5 md:text-[11px]`}
            >
              Our foundation
            </p>

            <h2 className="max-w-4xl font-serif text-[2.1rem] leading-[1.02] font-light text-[#1f1f1f] sm:text-[2.5rem] md:text-[3.3rem] lg:text-[4.1rem]">
              Engineering Day is built on three pillars.
            </h2>

            <p className="mt-5 max-w-2xl text-[1rem] leading-[1.85] text-[#4c4a46] md:mt-6 md:text-[1.08rem]">
              Knowledge, collaboration and community shape the platform and
              create a space where engineers can learn, connect and move ideas
              forward together.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-black/10 md:grid-cols-3">
            <div className="border-b border-black/10 py-8 md:border-b-0 md:border-r md:py-10 md:pr-8 lg:pr-10">
              <p
                className={`${firaSans.className} mb-5 text-[10px] uppercase tracking-[0.24em] text-[#a27a26]`}
              >
                01
              </p>

              <h3 className="mb-5 font-serif text-[1.65rem] leading-[1.05] font-light text-[#1f1f1f] sm:text-[1.8rem] md:text-[2rem]">
                Knowledge
              </h3>

              <p className="max-w-[28rem] text-[0.98rem] leading-[1.85] text-[#4c4a46] md:text-[1.02rem]">
                Engineering Day is a place to learn from real engineering work.
                Through talks, masterclasses and discussions, engineers share
                how they approach complex systems, technical constraints and new
                technologies in practice.
              </p>
            </div>

            <div className="border-b border-black/10 py-8 md:border-b-0 md:border-r md:px-8 md:py-10 lg:px-10">
              <p
                className={`${firaSans.className} mb-5 text-[10px] uppercase tracking-[0.24em] text-[#a27a26]`}
              >
                02
              </p>

              <h3 className="mb-5 font-serif text-[1.65rem] leading-[1.05] font-light text-[#1f1f1f] sm:text-[1.8rem] md:text-[2rem]">
                Collaboration
              </h3>

              <p className="max-w-[28rem] text-[0.98rem] leading-[1.85] text-[#4c4a46] md:text-[1.02rem]">
                Great engineering rarely happens in isolation. Engineering Day
                creates opportunities for dialogue across teams, companies and
                industries, making it easier to exchange perspectives, compare
                solutions and spark new collaborations.
              </p>
            </div>

            <div className="py-8 md:py-10 md:pl-8 lg:pl-10">
              <p
                className={`${firaSans.className} mb-5 text-[10px] uppercase tracking-[0.24em] text-[#a27a26]`}
              >
                03
              </p>

              <h3 className="mb-5 font-serif text-[1.65rem] leading-[1.05] font-light text-[#1f1f1f] sm:text-[1.8rem] md:text-[2rem]">
                Community
              </h3>

              <p className="max-w-[28rem] text-[0.98rem] leading-[1.85] text-[#4c4a46] md:text-[1.02rem]">
                Engineering Day brings together people who design, build and
                improve complex systems every day. It is a place to meet peers,
                strengthen your network and be part of a wider engineering
                community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 py-18 sm:py-20 md:px-12 md:py-24 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl md:mb-10">
            <p
              className={`${firaSans.className} mb-5 text-[10px] uppercase tracking-[0.24em] text-[#a27a26] md:mb-6 md:text-[11px]`}
            >
              Why it matters
            </p>

            <h2 className="max-w-4xl font-serif text-[2.1rem] leading-[1.02] font-light text-[#1f1f1f] sm:text-[2.6rem] md:text-[3.4rem] lg:text-[4.2rem]">
              Engineering is shaping the future.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              But rarely in one place.
            </h2>
          </div>

          <div className="grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
            <p className="text-[1rem] leading-[1.85] text-[#4c4a46] md:text-[1.08rem]">
              Engineering Day exists to bring together the people building the
              systems our society depends on. It creates a shared space for
              engineers across industries to exchange knowledge, challenge ideas
              and accelerate progress.
            </p>

            <p className="text-[1rem] leading-[1.85] text-[#4c4a46] md:text-[1.08rem]">
              By connecting companies, individuals and disciplines, the
              platform strengthens the role of engineering in shaping a
              sustainable, resilient and forward-looking society.
            </p>
          </div>
        </div>
      </section>

<section className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 py-24">
  <div className="max-w-6xl mx-auto">
    <p className="text-[#d9a441] uppercase tracking-[0.3em] text-[10px] md:text-sm text-center">
      FOUNDING PARTNERS 2026
    </p>

    {/* Mobil: 3 + 2 */}
    <div className="mt-10 md:hidden">
      <div className="grid grid-cols-3 justify-items-center gap-x-4 gap-y-10">
        <img
          src="/Saab-Logo.png"
          alt="Saab"
          className="h-[92px] w-auto object-contain"
        />

        <img
          src="/Varopreem-Logo.png"
          alt="VAROPreem"
          className="h-[92px] w-auto object-contain"
        />

        <img
          src="/Skanska-Logo.png"
          alt="Skanska"
          className="h-[92px] w-auto object-contain"
        />
      </div>

      <div className="mt-10 flex items-center justify-center gap-12">
        <img
          src="/Sweco-Logo.png"
          alt="Sweco"
          className="h-[92px] w-auto object-contain"
        />

        <img
          src="/Trafikverket-Logo.png"
          alt="Trafikverket"
          className="h-[92px] w-auto object-contain"
        />
      </div>
    </div>

    {/* Desktop: 5 på rad */}
    <div className="mt-14 hidden md:flex items-center justify-center gap-18 lg:gap-24">
      <img
        src="/Saab-Logo.png"
        alt="Saab"
className="h-[192px] lg:h-[180px] w-auto object-contain"      />

      <img
        src="/Varopreem-Logo.png"
        alt="VAROPreem"
        className="h-[192px] lg:h-[180px] w-auto object-contain"
      />

      <img
        src="/Skanska-Logo.png"
        alt="Skanska"
        className="h-[192px] lg:h-[180px] w-auto object-contain"
      />

      <img
        src="/Sweco-Logo.png"
        alt="Sweco"
        className="h-[192px] lg:h-[180px] w-auto object-contain"
      />

      <img
        src="/Trafikverket-Logo.png"
        alt="Trafikverket"
        className="h-[192px] lg:h-[180px] w-auto object-contain"
      />
    </div>
  </div>
</section>

      <footer className="bg-[#f3f1ed] pt0 pb-12 md:pt0 md:pb-14">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-6">
          <p className="text-[1rem] leading-[1.85] text-[#3e3c38] md:text-[1.12rem]">
            Engineering Day is Sweden&apos;s first official day for engineers.
            We celebrate engineers and their powers of innovation, creativity
            and hard work. The event is also a forum for knowledge-sharing and
            networking.
          </p>

          <p className="mt-5 text-[12px] italic tracking-[0.02em] text-black/40">
            A part of Ny Teknik
          </p>

          <div className="mt-10 flex items-center justify-center gap-7 md:mt-12">
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

          <div className="mt-10 text-[11px] uppercase tracking-[0.12em] text-black/30 md:mt-12">
            © 2026 Ny Teknik
          </div>
        </div>
      </footer>
    </main>
  );
}