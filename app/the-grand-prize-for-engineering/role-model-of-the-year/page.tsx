"use client";

import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RoleModelOfTheYearPage() {
  return (
    <main className="min-h-screen bg-[#f3f1ed] text-[#1f1f1f]">
      <SiteHeader />

      <section className="relative min-h-[82vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/role-model-of-the-year-2026.png')" }}
        />
      </section>

      <section className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-24 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              WHY?
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
            <h2 className="mb-6 font-serif text-[3rem] font-light leading-[1.03] text-[#1f1f1f] md:text-[4.05rem] lg:text-[4.6rem]">
              Why role models matter
            </h2>

            <p className="text-[1.22rem] italic leading-[1.45] text-[#5f5a52] md:text-[1.4rem]">
              The future of engineering is shaped not only by technology, but by
              people, leadership and the courage to drive change.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-[1.16rem] leading-[1.82] text-[#2c2c2c] md:text-[1.3rem]">
              The engineering of the future is not only about technology - it
              is also about people, leadership and the courage to change. To
              meet the challenges of society and create a more sustainable and
              innovative world, we need role models who inspire, engage and show
              the way.
            </p>

            <p className="mb-8 text-[1.16rem] leading-[1.82] text-[#2c2c2c] md:text-[1.3rem]">
              With the Role Model of the Year award, we want to recognize
              engineers who through their work have challenged norms and shown
              new ways of thinking and working, taken initiatives that
              contribute to positive change in technology, society or
              sustainability, and inspired others through leadership,
              engagement or expertise.
            </p>

            <p className="mb-8 text-[1.1rem] leading-[1.9] text-[#555] md:text-[1.22rem]">
              This may involve driving technical innovation, creating new ways
              of working and new solutions, paving the way for the engineers of
              the future, or in other ways making a significant contribution to
              the industry and society.
            </p>

            <p className="text-[1.1rem] leading-[1.9] text-[#555] md:text-[1.22rem]">
              We highlight the individuals and teams who, through their
              commitment, not only improve their own organization, but also
              influence and change the world around them.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-6 pb-24 pt-0 md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              WHO?
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
            <h2 className="mb-6 font-serif text-[3rem] font-light leading-[1.03] text-[#1f1f1f] md:text-[4.05rem] lg:text-[4.6rem]">
              Who can win?
            </h2>

            <p className="text-[1.22rem] italic leading-[1.45] text-[#5f5a52] md:text-[1.4rem]">
              An engineer or a team whose work has inspired others and created
              positive change.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-[1.16rem] leading-[1.82] text-[#2c2c2c] md:text-[1.3rem]">
              The Role Model of the Year award can be given to an individual
              engineer or to a team in which the majority have engineering
              expertise.
            </p>

            <p className="mb-8 text-[1.16rem] leading-[1.82] text-[#2c2c2c] md:text-[1.3rem]">
              We are looking for a person or team who, through their work, has
              challenged norms and shown new ways of thinking and working in
              technology and engineering, taken concrete initiatives to create
              positive change in technology, society or sustainability, and
              influenced their surroundings while inspiring others through
              leadership, engagement or expertise.
            </p>

            <p className="text-[1.1rem] leading-[1.9] text-[#555] md:text-[1.22rem]">
              This may be a person or team that has broken new ground through
              leadership, education, technical innovation or societal
              development - or an engineer or team whose commitment has made a
              difference for individuals, teams or entire organizations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-6 pb-24 pt-0 md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              CRITERIA
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-14 max-w-4xl text-center md:mb-16">
            <h2 className="mb-6 font-serif text-[3rem] font-light leading-[1.03] text-[#1f1f1f] md:text-[4.05rem] lg:text-[4.6rem]">
              What defines the award
            </h2>

            <p className="text-[1.22rem] italic leading-[1.45] text-[#5f5a52] md:text-[1.4rem]">
              The fundamental criteria for nomination.
            </p>
          </div>

          <div className="mx-auto max-w-4xl border-t border-black/10">
            <div className="grid grid-cols-1 gap-5 border-b border-black/10 py-7 md:grid-cols-[220px_1fr] md:py-8">
              <p
                className={`${firaSans.className} text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Connection to Sweden
              </p>
              <p className="text-[1.05rem] leading-[1.85] text-[#2c2c2c] md:text-[1.12rem]">
                The person or team must have a strong connection to the Swedish
                engineering market.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 border-b border-black/10 py-7 md:grid-cols-[220px_1fr] md:py-8">
              <p
                className={`${firaSans.className} text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Societal benefit
              </p>
              <p className="text-[1.05rem] leading-[1.85] text-[#2c2c2c] md:text-[1.12rem]">
                The work must contribute to a sustainable society.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 border-b border-black/10 py-7 md:grid-cols-[220px_1fr] md:py-8">
              <p
                className={`${firaSans.className} text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Ethics and sustainability
              </p>
              <p className="text-[1.05rem] leading-[1.85] text-[#2c2c2c] md:text-[1.12rem]">
                The work or initiative must meet high ethical standards and
                promote sustainable development.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 border-b border-black/10 py-7 md:grid-cols-[220px_1fr] md:py-8">
              <p
                className={`${firaSans.className} text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Current work
              </p>
              <p className="text-[1.05rem] leading-[1.85] text-[#2c2c2c] md:text-[1.12rem]">
                Nominees must have been active in the area during the past year.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 border-b border-black/10 py-7 md:grid-cols-[220px_1fr] md:py-8">
              <p
                className={`${firaSans.className} text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Note
              </p>
              <p className="text-[1.05rem] leading-[1.85] text-[#2c2c2c] md:text-[1.12rem]">
                Employees of Sweco cannot be nominated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-6 pb-24 pt-12 md:px-12 md:pb-28 md:pt-16 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              HALL OF FAME
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-14 max-w-4xl text-center md:mb-16">
            <h2 className="mb-6 font-serif text-[3rem] font-light leading-[1.03] text-[#1f1f1f] md:text-[4.05rem] lg:text-[4.6rem]">
              Previous winners
            </h2>

            <p className="text-[1.22rem] italic leading-[1.45] text-[#5f5a52] md:text-[1.4rem]">
              A selection of individuals and teams previously recognized by the
              award.
            </p>
          </div>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-black/10 bg-white">
            <div className="border-b border-black/10 px-6 py-6 md:px-8 md:py-7">
              <p
                className={`${firaSans.className} mb-3 text-[11px] uppercase tracking-[0.2em] text-[#a27a26]`}
              >
                Featured winner · 2025
              </p>

              <h3 className="mb-3 font-serif text-[2rem] leading-[1.08] text-[#1f1f1f] md:text-[2.7rem]">
                Jonatan Stromgren, LM International
              </h3>

              <p className="text-[0.98rem] text-[#6a6256] md:text-[1.04rem]">
                Presented by Sweco
              </p>
            </div>

            <div className="px-6 py-7 md:px-8 md:py-9">
              <p className="mb-6 text-[1.06rem] leading-[1.9] text-[#2c2c2c] md:text-[1.14rem]">
                Jonatan Stromgren has worked with water supply in Swedish
                municipalities and taken his expertise further into humanitarian
                projects in East Africa. There, he has developed sustainable
                solutions for clean water in some of the world's most vulnerable
                environments.
              </p>

              <p className="text-[1.04rem] leading-[1.9] text-[#555] md:text-[1.1rem]">
                The jury highlights his ability to combine technical knowledge
                with cultural understanding - and that he inspires both younger
                and more experienced colleagues through his commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#f3f1ed] pt-28 pb-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-[1.05rem] leading-[1.9] text-[#3e3c38] md:text-[1.15rem]">
            Engineering Day - Sweden's first official day for engineers. We
            celebrate our engineers and their powers of innovation, creativity
            and hard work. The event is also a forum for knowledge-sharing and
            networking.
          </p>

          <p className="mt-5 text-sm italic tracking-[0.02em] text-black/40">
            A part of Ny Teknik
          </p>

          <div className="mt-12 flex items-center justify-center gap-8">
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

          <div className="mt-12 text-[11px] uppercase tracking-[0.12em] text-black/30">
            © 2026 Ny Teknik
          </div>
        </div>
      </footer>
    </main>
  );
}