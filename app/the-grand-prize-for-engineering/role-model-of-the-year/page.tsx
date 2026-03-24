"use client";

import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RoleModelOfTheYearPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f1ed] text-[#1f1f1f]">
      <SiteHeader />

<section className="relative min-h-[44vh] overflow-hidden bg-[#f3f1ed] sm:min-h-[52vh] md:min-h-[70vh] lg:min-h-[82vh]">
  <div
    className="absolute inset-0 bg-no-repeat bg-center bg-contain lg:bg-cover lg:bg-center"
    style={{
      backgroundImage: "url('/role-model-of-the-year-2026.png')",
      backgroundPosition: "left center",
    }}
  />
</section>

      <section className="bg-[#f3f1ed] px-5 md:px-12 lg:px-20 pt-14 md:pt-28 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              WHY?
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <h2 className="mb-5 font-serif text-[2.2rem] font-light leading-[1.03] text-[#1f1f1f] sm:text-[2.6rem] md:mb-6 md:text-[4.05rem] lg:text-[4.6rem]">
              Why role models matter
            </h2>

            <p className="mx-auto max-w-[23rem] text-[1.06rem] italic leading-[1.5] text-[#5f5a52] sm:max-w-[31rem] sm:text-[1.14rem] md:max-w-none md:text-[1.4rem]">
              The future of engineering is shaped not only by technology, but by
              people, leadership and the courage to drive change.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="mb-7 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-8 md:text-[1.3rem] md:leading-[1.82]">
              The engineering of the future is not only about technology - it
              is also about people, leadership and the courage to change. To
              meet the challenges of society and create a more sustainable and
              innovative world, we need role models who inspire, engage and show
              the way.
            </p>

            <p className="mb-7 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-8 md:text-[1.3rem] md:leading-[1.82]">
              With the Role Model of the Year award, we want to recognize
              engineers who through their work have challenged norms and shown
              new ways of thinking and working, taken initiatives that
              contribute to positive change in technology, society or
              sustainability, and inspired others through leadership,
              engagement or expertise.
            </p>

            <p className="mb-7 text-[1rem] leading-[1.82] text-[#555] sm:text-[1.05rem] md:mb-8 md:text-[1.22rem] md:leading-[1.9]">
              This may involve driving technical innovation, creating new ways
              of working and new solutions, paving the way for the engineers of
              the future, or in other ways making a significant contribution to
              the industry and society.
            </p>

            <p className="text-[1rem] leading-[1.82] text-[#555] sm:text-[1.05rem] md:text-[1.22rem] md:leading-[1.9]">
              We highlight the individuals and teams who, through their
              commitment, not only improve their own organization, but also
              influence and change the world around them.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pb-20 pt-0 md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              WHO?
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <h2 className="mb-5 font-serif text-[2.2rem] font-light leading-[1.03] text-[#1f1f1f] sm:text-[2.6rem] md:mb-6 md:text-[4.05rem] lg:text-[4.6rem]">
              Who can win?
            </h2>

            <p className="mx-auto max-w-[24rem] text-[1.06rem] italic leading-[1.5] text-[#5f5a52] sm:max-w-[31rem] sm:text-[1.14rem] md:max-w-none md:text-[1.4rem]">
              An engineer or a team whose work has inspired others and created
              positive change.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="mb-7 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-8 md:text-[1.3rem] md:leading-[1.82]">
              The Role Model of the Year award can be given to an individual
              engineer or to a team in which the majority have engineering
              expertise.
            </p>

            <p className="mb-7 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-8 md:text-[1.3rem] md:leading-[1.82]">
              We are looking for a person or team who, through their work, has
              challenged norms and shown new ways of thinking and working in
              technology and engineering, taken concrete initiatives to create
              positive change in technology, society or sustainability, and
              influenced their surroundings while inspiring others through
              leadership, engagement or expertise.
            </p>

            <p className="text-[1rem] leading-[1.82] text-[#555] sm:text-[1.05rem] md:text-[1.22rem] md:leading-[1.9]">
              This may be a person or team that has broken new ground through
              leadership, education, technical innovation or societal
              development - or an engineer or team whose commitment has made a
              difference for individuals, teams or entire organizations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pb-20 pt-0 md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              CRITERIA
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-16">
            <h2 className="mb-5 font-serif text-[2.2rem] font-light leading-[1.03] text-[#1f1f1f] sm:text-[2.6rem] md:mb-6 md:text-[4.05rem] lg:text-[4.6rem]">
              What defines the award
            </h2>

            <p className="mx-auto max-w-[22rem] text-[1.06rem] italic leading-[1.5] text-[#5f5a52] sm:max-w-[28rem] sm:text-[1.14rem] md:max-w-none md:text-[1.4rem]">
              The fundamental criteria for nomination.
            </p>
          </div>

          <div className="mx-auto max-w-4xl border-t border-black/10">
            <div className="grid grid-cols-1 gap-3 border-b border-black/10 py-6 md:grid-cols-[220px_1fr] md:gap-5 md:py-8">
              <p
                className={`${firaSans.className} text-[11px] uppercase tracking-[0.16em] text-[#8b8276] md:text-[12px] md:tracking-[0.18em]`}
              >
                Connection to Sweden
              </p>
              <p className="text-[0.98rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.02rem] md:text-[1.12rem] md:leading-[1.85]">
                The person or team must have a strong connection to the Swedish
                engineering market.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 border-b border-black/10 py-6 md:grid-cols-[220px_1fr] md:gap-5 md:py-8">
              <p
                className={`${firaSans.className} text-[11px] uppercase tracking-[0.16em] text-[#8b8276] md:text-[12px] md:tracking-[0.18em]`}
              >
                Societal benefit
              </p>
              <p className="text-[0.98rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.02rem] md:text-[1.12rem] md:leading-[1.85]">
                The work must contribute to a sustainable society.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 border-b border-black/10 py-6 md:grid-cols-[220px_1fr] md:gap-5 md:py-8">
              <p
                className={`${firaSans.className} text-[11px] uppercase tracking-[0.16em] text-[#8b8276] md:text-[12px] md:tracking-[0.18em]`}
              >
                Ethics and sustainability
              </p>
              <p className="text-[0.98rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.02rem] md:text-[1.12rem] md:leading-[1.85]">
                The work or initiative must meet high ethical standards and
                promote sustainable development.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 border-b border-black/10 py-6 md:grid-cols-[220px_1fr] md:gap-5 md:py-8">
              <p
                className={`${firaSans.className} text-[11px] uppercase tracking-[0.16em] text-[#8b8276] md:text-[12px] md:tracking-[0.18em]`}
              >
                Current work
              </p>
              <p className="text-[0.98rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.02rem] md:text-[1.12rem] md:leading-[1.85]">
                Nominees must have been active in the area during the past year.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 border-b border-black/10 py-6 md:grid-cols-[220px_1fr] md:gap-5 md:py-8">
              <p
                className={`${firaSans.className} text-[11px] uppercase tracking-[0.16em] text-[#8b8276] md:text-[12px] md:tracking-[0.18em]`}
              >
                Note
              </p>
              <p className="text-[0.98rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.02rem] md:text-[1.12rem] md:leading-[1.85]">
                Employees of Sweco cannot be nominated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pb-20 pt-10 md:px-12 md:pb-28 md:pt-16 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              HALL OF FAME
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-16">
            <h2 className="mb-5 font-serif text-[2.2rem] font-light leading-[1.03] text-[#1f1f1f] sm:text-[2.6rem] md:mb-6 md:text-[4.05rem] lg:text-[4.6rem]">
              Previous winners
            </h2>

            <p className="mx-auto max-w-[24rem] text-[1.06rem] italic leading-[1.5] text-[#5f5a52] sm:max-w-[31rem] sm:text-[1.14rem] md:max-w-none md:text-[1.4rem]">
              A selection of individuals and teams previously recognized by the
              award.
            </p>
          </div>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-[22px] border border-black/10 bg-white md:rounded-[28px]">
            <div className="border-b border-black/10 px-5 py-5 md:px-8 md:py-7">
              <p
                className={`${firaSans.className} mb-3 text-[10px] uppercase tracking-[0.18em] text-[#a27a26] md:text-[11px] md:tracking-[0.2em]`}
              >
                Featured winner · 2025
              </p>

              <h3 className="mb-3 font-serif text-[1.7rem] leading-[1.08] text-[#1f1f1f] sm:text-[1.95rem] md:text-[2.7rem]">
                Jonatan Stromgren, LM International
              </h3>

              <p className="text-[0.94rem] text-[#6a6256] md:text-[1.04rem]">
                Presented by Sweco
              </p>
            </div>

            <div className="px-5 py-6 md:px-8 md:py-9">
              <p className="mb-5 text-[1rem] leading-[1.82] text-[#2c2c2c] sm:text-[1.03rem] md:mb-6 md:text-[1.14rem] md:leading-[1.9]">
                Jonatan Stromgren has worked with water supply in Swedish
                municipalities and taken his expertise further into humanitarian
                projects in East Africa. There, he has developed sustainable
                solutions for clean water in some of the world's most vulnerable
                environments.
              </p>

              <p className="text-[0.98rem] leading-[1.82] text-[#555] sm:text-[1rem] md:text-[1.1rem] md:leading-[1.9]">
                The jury highlights his ability to combine technical knowledge
                with cultural understanding - and that he inspires both younger
                and more experienced colleagues through his commitment.
              </p>
            </div>
          </div>
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