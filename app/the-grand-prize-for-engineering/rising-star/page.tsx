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
    winner: "Jonna Matthiesen",
    presentedBy: "Presented by Trafikverket",
    summary:
      "The AI researcher shaping the future. Jonna Matthiesen has made groundbreaking progress in AI and deep learning, where her work in neural architecture search (NAS) has driven innovation in scalable AI solutions. In a short time, she has gone from intern to team lead, and is today one of the most important young voices in the AI industry.",
    jury:
      "The jury highlights her expertise, strategic ability and leadership, as well as how she serves as a role model for women in one of the most male-dominated areas of the tech industry.",
  },
  {
    year: "2023",
    winner: "Paula Runsten and Felix Kruse with Rebaba",
    presentedBy: "Presented by Trafikverket",
    summary:
      "Sustainability and circular economy for the energy solutions of the future. Paula Runsten and Felix Kruse have developed a simple, functional and industrially scalable battery solution, with a focus on lifespan and reuse of lithium-ion batteries. By combining entrepreneurship with long-term sustainability work, they help reduce the environmental impact of battery use while also creating hope for a more sustainable energy future.",
    jury: "",
  },
  {
    year: "2022",
    winner: "Elvftech",
    presentedBy: "Presented by Trafikverket",
    summary:
      "Innovation that reduces energy losses and carbon emissions. Elvftech’s technology can significantly reduce energy losses from electricity production, resulting in a substantial reduction in carbon emissions. Through their work, they address one of our most urgent climate challenges and create solutions that make society more energy efficient.",
    jury:
      "The jury emphasizes how the technology has strong scalability and can be used by a wide range of actors, making it an important piece of the transition to a more sustainable energy sector.",
  },
];

export default function RisingStarPage() {
  return (
    <main className="min-h-screen bg-[#f3f1ed] text-[#1f1f1f]">
      <SiteHeader />

<section className="relative min-h-[44vh] overflow-hidden bg-[#f3f1ed] sm:min-h-[52vh] md:min-h-[82vh]">
  <div
    className="absolute inset-0 bg-no-repeat bg-center bg-contain md:bg-cover md:bg-center"
    style={{
      backgroundImage: "url('/rising-star-2026.png')",
      backgroundPosition: "center top",
    }}
  />
</section>

      <section className="bg-[#f3f1ed] px-5 pt-20 pb-20 md:px-12 md:pt-28 md:pb-28 lg:px-20">
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
              Why rising stars matter
            </h2>

            <p className="mx-auto max-w-[22rem] text-[1.06rem] italic leading-[1.5] text-[#5f5a52] sm:max-w-[30rem] sm:text-[1.14rem] md:max-w-none md:text-[1.4rem]">
              Young engineers with new ideas, leadership and commitment are
              essential to the future.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="mb-7 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-8 md:text-[1.3rem] md:leading-[1.82]">
              To meet the major challenges facing society and infrastructure, we
              need young engineers with new ideas, leadership and commitment. By
              highlighting the technical talents of the future, this award aims
              to inspire the next generation to think big, challenge convention
              and contribute to more sustainable development.
            </p>

            <p className="mb-7 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-8 md:text-[1.3rem] md:leading-[1.82]">
              The prize is intended to recognize innovative perspectives and
              solutions in technology and sustainability, with a particular
              focus on the engineer’s role in shaping the future of transport
              and infrastructure. By celebrating young role models, we create a
              platform for new ideas and inspire more people to choose an
              engineering path where they can make a difference.
            </p>

            <p className="text-[1rem] leading-[1.82] text-[#555] sm:text-[1.05rem] md:text-[1.22rem] md:leading-[1.9]">
              The award was previously called “The Grand Prize for Engineering –
              Student”, but changed its name in 2024 to Rising Star in order to
              better reflect the next generation of engineers.
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
              An individual or team that has made a significant impact early in
              their career or during their studies.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="mb-7 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-8 md:text-[1.3rem] md:leading-[1.82]">
              The Rising Star award is presented to an individual or a team that
              has made a significant impact early in their career or during
              their studies. The winner is someone who, through innovation,
              leadership or technical ingenuity, has inspired others and shown a
              strong desire to influence their industry and society at large.
            </p>

            <p className="mb-7 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-8 md:text-[1.3rem] md:leading-[1.82]">
              We are looking for people whose work has developed an innovative
              idea or solution, demonstrated impressive leadership and inspired
              others, or engaged with sustainability, inclusion or societal
              development.
            </p>

            <p className="text-[1rem] leading-[1.82] text-[#555] sm:text-[1.05rem] md:text-[1.22rem] md:leading-[1.9]">
              The nominee must be a student or have started their career within
              the past three years.
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
                The person or the solution must have a strong connection to
                Sweden through place of residence, development or another clear
                link.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 border-b border-black/10 py-6 md:grid-cols-[220px_1fr] md:gap-5 md:py-8">
              <p
                className={`${firaSans.className} text-[11px] uppercase tracking-[0.16em] text-[#8b8276] md:text-[12px] md:tracking-[0.18em]`}
              >
                Societal benefit
              </p>
              <p className="text-[0.98rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.02rem] md:text-[1.12rem] md:leading-[1.85]">
                The work must have a positive impact on society or the
                environment.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 border-b border-black/10 py-6 md:grid-cols-[220px_1fr] md:gap-5 md:py-8">
              <p
                className={`${firaSans.className} text-[11px] uppercase tracking-[0.16em] text-[#8b8276] md:text-[12px] md:tracking-[0.18em]`}
              >
                Ethics and sustainability
              </p>
              <p className="text-[0.98rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.02rem] md:text-[1.12rem] md:leading-[1.85]">
                The solution must meet high ethical standards and promote
                sustainable development.
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
                Employees of Trafikverket cannot be nominated.
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

          <div className="mx-auto mb-10 max-w-5xl overflow-hidden rounded-[22px] border border-black/10 bg-white md:mb-14 md:rounded-[28px]">
            <div className="border-b border-black/10 px-5 py-5 md:px-8 md:py-7">
              <p
                className={`${firaSans.className} mb-3 text-[10px] uppercase tracking-[0.18em] text-[#a27a26] md:text-[11px] md:tracking-[0.2em]`}
              >
                Featured winner · 2025
              </p>

              <h3 className="mb-3 font-serif text-[1.7rem] leading-[1.08] text-[#1f1f1f] sm:text-[1.95rem] md:text-[2.7rem]">
                Jonatan Persson, Helios Innovation
              </h3>

              <p className="text-[0.94rem] text-[#6a6256] md:text-[1.04rem]">
                Presented by Trafikverket
              </p>
            </div>

            <div className="px-5 py-6 md:px-8 md:py-9">
              <p className="mb-5 text-[1rem] leading-[1.82] text-[#2c2c2c] sm:text-[1.03rem] md:mb-6 md:text-[1.14rem] md:leading-[1.9]">
                In just a few years, Jonatan Persson has gone from student to
                founder of Helios Innovation. The company develops a technology
                that uses waste heat to purify industrial wastewater — a
                solution that both saves energy and reduces emissions. The jury
                sees him as a prime example of the next generation of engineers:
                young, courageous and entrepreneurial.
              </p>

              <p className="text-[0.98rem] leading-[1.82] text-[#555] sm:text-[1rem] md:text-[1.1rem] md:leading-[1.9]">
                He has already received several awards, but most importantly,
                his innovation works in practice and drives industry toward a
                more sustainable future.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl border-t border-black/10">
            {hallOfFame.map((item) => (
              <div
                key={item.year}
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
        </div>
      </section>

      <footer className="bg-[#f3f1ed] pt0 pb-12 md:pt0 md:pb-14">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-6">
          <p className="text-[0.98rem] leading-[1.82] text-[#3e3c38] sm:text-[1.02rem] md:text-[1.15rem] md:leading-[1.9]">
            Engineering Day – Sweden’s first official day for engineers. We
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