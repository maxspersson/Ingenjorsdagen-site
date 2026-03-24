"use client";

import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const hallOfFame = [
  {
    year: "2024",
    winner: "Stina Linderoth, Aurobay",
    presentedBy: "Presented by Fellowmind",
    summary:
      "Visionary leadership that has transformed a complex digital structure. Stina Linderoth has led her team through an extensive digital transformation, in which more than 600 applications have been reworked to create an efficient and sustainable IT infrastructure. By promoting collaboration and innovation, she has inspired her team to see opportunities where others see obstacles.",
  },
  {
    year: "2023",
    winner: "Olof Johansson, Trafikverket",
    presentedBy: "Presented by Fellowmind",
    summary:
      "A leader who simplifies digitalization and engages an entire industry. Through his work, Olof Johansson has been a key person in the digitalization of the infrastructure sector. By driving dialogue, building understanding and creating engagement, he has inspired both internally and externally, and has been a strong advocate for digital transformation throughout society.",
  },
  {
    year: "2022",
    winner: "Marie Brattberg, Recorded Future",
    presentedBy: "Presented by Försvarsmakten",
    summary:
      "Empathetic leadership that creates security and development. In her role as Chief Strategy Officer at Recorded Future, Marie Brattberg has shown how openness, responsibility and a focus on results can build strong organizations. She leads almost 900 employees globally and inspires her teams to reach their full potential.",
  },
  {
    year: "2021",
    winner: "Karin Hagren, King",
    presentedBy: "Presented by Solita",
    summary:
      "Curiosity, structure and culture-building in an international context. In her leadership role at King, Karin Hagren has shown how a coaching and exploratory style of leadership can strengthen organizations. She has created a learning culture where change is seen as an opportunity and where agile work is a natural part of the organization.",
  },
];

export default function LeadershipPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f1ed] text-[#1f1f1f]">
      <SiteHeader />

<section className="relative min-h-[44vh] overflow-hidden bg-[#f3f1ed] sm:min-h-[52vh] md:min-h-[70vh] lg:min-h-[82vh]">
  <div
    className="absolute inset-0 bg-no-repeat bg-center bg-contain lg:bg-cover lg:bg-center"
    style={{
      backgroundImage: "url('/ledarskap-2026.png')",
      backgroundPosition: "left center",
    }}
  />
</section>

      <section className="bg-[#f3f1ed] px-5 md:px-12 lg:px-20 pt-14 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-3 md:mb-4`}
            >
              WHY?
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              Why leadership matters
            </h2>

            <p className="italic text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              Leadership is a decisive force in times of change.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-6 md:mb-8">
              The world is changing rapidly and many organizations find
              themselves in the middle of major transformations. In times of
              change, leadership becomes a crucial force for driving development
              forward. Those who fail to adapt risk losing their competitiveness
              — but the right leadership can create both direction and security.
            </p>

            <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-0">
              Leading through change is a complex challenge that requires both
              strategic understanding and the ability to bring people along. It
              requires clear, inspiring and sustainable leadership that can turn
              visions into reality.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 md:px-12 lg:px-20 pt-0 md:pt-12 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-3 md:mb-4`}
            >
              WHO?
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              Who can win?
            </h2>

            <p className="italic text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              A person who has successfully led a team or an organization
              through change.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-6 md:mb-8">
              The Leadership prize is awarded to a person who has successfully
              led a team or an organization through change. The winner has not
              only taken the operation from point A to point B, but has also
              ensured that people, processes and ideas work together in an
              effective way.
            </p>

            <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c] mb-0">
              A strong leader understands that it is not about change for the
              sake of change, but about creating real value. Through their
              leadership, the winner has contributed to developing the operation
              in a sustainable, inclusive and strategic way.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 md:px-12 lg:px-20 pt-0 md:pt-12 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-3 md:mb-4`}
            >
              CRITERIA
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              What defines the award
            </h2>

            <p className="italic text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              The fundamental criteria for nomination.
            </p>
          </div>

          <div className="max-w-4xl mx-auto border-t border-black/10">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-5 border-b border-black/10 py-6 md:py-8">
              <p
                className={`${firaSans.className} text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Connection to Sweden
              </p>
              <p className="text-[0.98rem] md:text-[1.12rem] leading-[1.82] md:leading-[1.85] text-[#2c2c2c]">
                The person or the solution must have a strong connection to
                Sweden through place of residence, development or another clear
                link.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-5 border-b border-black/10 py-6 md:py-8">
              <p
                className={`${firaSans.className} text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Societal benefit
              </p>
              <p className="text-[0.98rem] md:text-[1.12rem] leading-[1.82] md:leading-[1.85] text-[#2c2c2c]">
                The work must have a positive impact on society or the
                environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-5 border-b border-black/10 py-6 md:py-8">
              <p
                className={`${firaSans.className} text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Ethics and sustainability
              </p>
              <p className="text-[0.98rem] md:text-[1.12rem] leading-[1.82] md:leading-[1.85] text-[#2c2c2c]">
                The solution must meet high ethical standards and promote
                sustainable development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-5 border-b border-black/10 py-6 md:py-8">
              <p
                className={`${firaSans.className} text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Current work
              </p>
              <p className="text-[0.98rem] md:text-[1.12rem] leading-[1.82] md:leading-[1.85] text-[#2c2c2c]">
                Nominees must have been active in the area during the past year.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-5 border-b border-black/10 py-6 md:py-8">
              <p
                className={`${firaSans.className} text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Note
              </p>
              <p className="text-[0.98rem] md:text-[1.12rem] leading-[1.82] md:leading-[1.85] text-[#2c2c2c]">
                Employees of SAAB cannot be nominated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 md:px-12 lg:px-20 pt-0 md:pt-16 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26] mb-3 md:mb-4`}
            >
              HALL OF FAME
            </p>

            <div className="w-14 h-px bg-[#d9a441]" />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-5 md:mb-6">
              Previous winners
            </h2>

            <p className="italic text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] leading-[1.45] text-[#5f5a52]">
              Since 2021, The Grand Prize for Engineering in Leadership has
              celebrated leaders who, through clarity, inspiration and
              strategic ability, have driven successful transformation journeys.
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-[24px] md:rounded-[28px] border border-black/10 bg-white overflow-hidden mb-10 md:mb-14">
            <div className="border-b border-black/10 px-5 py-5 md:px-8 md:py-7">
              <p
                className={`${firaSans.className} text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#a27a26] mb-3`}
              >
                Featured winner · 2025
              </p>

              <h3 className="font-serif text-[1.7rem] sm:text-[1.9rem] md:text-[2.7rem] leading-[1.08] text-[#1f1f1f] mb-3">
                Donna Hanafi, Spotify
              </h3>

              <p className="text-[0.95rem] md:text-[1.04rem] text-[#6a6256]">
                Presented by Fellowmind
              </p>
            </div>

            <div className="px-5 py-6 md:px-8 md:py-9">
              <p className="text-[1rem] md:text-[1.14rem] leading-[1.85] md:leading-[1.9] text-[#2c2c2c] mb-5 md:mb-6">
                In her roles at Spotify, Tictail and Mentimeter, Donna Hanafi
                has built product teams that deliver innovation and value, but
                also cultures where gender equality and openness about mental
                health are natural parts of the work. The jury highlights her
                combination of technical competence, strategic perspective and a
                strong commitment to diversity.
              </p>

              <p className="text-[0.98rem] md:text-[1.1rem] leading-[1.85] md:leading-[1.9] text-[#555]">
                She is a role model for the engineering leadership of the
                future — where technology and people go hand in hand.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto border-t border-black/10">
            {hallOfFame.map((item) => (
              <div
                key={item.year}
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

                  <p className="text-[0.98rem] md:text-[1.06rem] leading-[1.82] md:leading-[1.85] text-[#2c2c2c]">
                    {item.summary}
                  </p>
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