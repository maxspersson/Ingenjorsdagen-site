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
    winner: "Johanna Stjernström, Stockholm City Exploitation Office",
    presentedBy: "Presented by Skanska",
    summary:
      "The construction industry’s path toward an emission-free future. Johanna Stjernström has led the work on 'Persikan', one of Sweden’s first emission-free construction sites. Through innovative knowledge-sharing and a strong commitment to collaboration, she has shown how the construction sector can reduce its climate impact, while also lowering noise and air pollution in densely built urban areas.",
  },
  {
    year: "2023",
    winner: "Skellefteå Kraft Business Innovation Team",
    presentedBy: "Presented by Skanska",
    summary:
      "Business models that drive the climate transition. The winners have shown how innovative business models can solve climate challenges by creating win-win situations. By transforming old business models and thinking in new ways, they have found a key to accelerating the transition toward a more sustainable energy sector.",
  },
  {
    year: "2022",
    winner: "Gaia Gen",
    presentedBy: "Presented by Skanska",
    summary:
      "Data that reduces the climate footprint of digitalization. In a world where digitalization is increasing, new solutions are needed to understand and reduce its climate impact. Gaia Gen has created a solution that makes it possible for companies to gain precise knowledge of the climate impact of their cloud services, making it easier to make data-driven and sustainable decisions.",
  },
  {
    year: "2021",
    winner: "Northvolt through Maria Åstrand",
    presentedBy: "Presented by Skanska",
    summary:
      "Revolutionizing Swedish industry through sustainable battery production. Northvolt has shown that it is possible to create circular and climate-neutral industrial production in Sweden. By building a green value chain for battery metals, they have laid the foundation for more sustainable electrification and the transformation of the transport sector.",
  },
];

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-[#f3f1ed] text-[#1f1f1f]">
      <SiteHeader />

<section className="relative min-h-[44vh] overflow-hidden bg-[#f3f1ed] sm:min-h-[52vh] md:min-h-[70vh] lg:min-h-[82vh]">
  <div
    className="absolute inset-0 bg-no-repeat bg-center bg-contain lg:bg-cover lg:bg-center"
    style={{
      backgroundImage: "url('/sustainability-2026.png')",
      backgroundPosition: "left center",
    }}
  />
</section>

      <section className="bg-[#f3f1ed] px-5 md:px-12 lg:px-20 pt-14 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} mb-3 md:mb-4 text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              WHY?
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <h2 className="mb-5 md:mb-6 font-serif text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] font-light leading-[1.04] text-[#1f1f1f]">
              Why sustainability matters
            </h2>

            <p className="text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] italic leading-[1.45] text-[#5f5a52]">
              The climate crisis demands concrete action, innovation and
              engineering expertise.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="mb-6 md:mb-8 text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c]">
              The climate crisis is one of the greatest challenges of our time,
              and we have a responsibility toward future generations to both
              contribute to solutions and reduce our own climate impact. To
              succeed in the green transition, groundbreaking innovation, new
              business models and engineering expertise are required.
            </p>

            <p className="mb-6 md:mb-8 text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c]">
              Skanska has set the goal of being climate-neutral throughout its
              entire value chain by 2045, and we see that the transformation of
              the industry needs to happen quickly. That is why this year we are
              focusing on solutions that directly affect environmental and
              climate issues.
            </p>

            <p className="text-[0.98rem] sm:text-[1.02rem] md:text-[1.22rem] leading-[1.85] md:leading-[1.9] text-[#555]">
              Through this award, we want to highlight engineers and teams who
              have turned climate challenges into concrete actions and
              innovations that make a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pb-20 pt-0 md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} mb-3 md:mb-4 text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              WHO?
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <h2 className="mb-5 md:mb-6 font-serif text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] font-light leading-[1.04] text-[#1f1f1f]">
              Who can win?
            </h2>

            <p className="text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] italic leading-[1.45] text-[#5f5a52]">
              An engineer or small team turning climate challenges into
              practical, lasting solutions.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="mb-6 md:mb-8 text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c]">
              The Sustainability prize in engineering can be awarded to an
              individual engineer or a smaller team in which the majority have
              engineering expertise. The winner is someone who is passionate
              about the climate issue, thinks innovatively and wants to change
              the world in a sustainable way.
            </p>

            <p className="mb-6 md:mb-8 text-[1rem] sm:text-[1.05rem] md:text-[1.3rem] leading-[1.82] text-[#2c2c2c]">
              The nominee must have identified a climate challenge, large or
              small, and developed a product, service or innovation that has had
              a positive, direct and sustainable impact on the climate.
            </p>

            <p className="text-[0.98rem] sm:text-[1.02rem] md:text-[1.22rem] leading-[1.85] md:leading-[1.9] text-[#555]">
              This could, for example, involve a new product or technology, an
              innovative method or new way of working, or a service that
              contributes to reduced climate impact.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pb-20 pt-0 md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} mb-3 md:mb-4 text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              CRITERIA
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
            <h2 className="mb-5 md:mb-6 font-serif text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] font-light leading-[1.04] text-[#1f1f1f]">
              What defines the award
            </h2>

            <p className="text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] italic leading-[1.45] text-[#5f5a52]">
              The fundamental criteria for nomination.
            </p>
          </div>

          <div className="mx-auto max-w-4xl border-t border-black/10">
            <div className="grid grid-cols-1 gap-3 md:gap-5 border-b border-black/10 py-6 md:grid-cols-[220px_1fr] md:py-8">
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

            <div className="grid grid-cols-1 gap-3 md:gap-5 border-b border-black/10 py-6 md:grid-cols-[220px_1fr] md:py-8">
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

            <div className="grid grid-cols-1 gap-3 md:gap-5 border-b border-black/10 py-6 md:grid-cols-[220px_1fr] md:py-8">
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

            <div className="grid grid-cols-1 gap-3 md:gap-5 border-b border-black/10 py-6 md:grid-cols-[220px_1fr] md:py-8">
              <p
                className={`${firaSans.className} text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Current work
              </p>
              <p className="text-[0.98rem] md:text-[1.12rem] leading-[1.82] md:leading-[1.85] text-[#2c2c2c]">
                Nominees must have been active in the area during the past year.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:gap-5 border-b border-black/10 py-6 md:grid-cols-[220px_1fr] md:py-8">
              <p
                className={`${firaSans.className} text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Note
              </p>
              <p className="text-[0.98rem] md:text-[1.12rem] leading-[1.82] md:leading-[1.85] text-[#2c2c2c]">
                Employees of Skanska cannot be nominated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-5 pb-20 pt-0 md:px-12 md:pb-28 md:pt-16 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 md:mb-12">
            <p
              className={`${firaSans.className} mb-3 md:mb-4 text-[11px] md:text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              HALL OF FAME
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
            <h2 className="mb-5 md:mb-6 font-serif text-[2.2rem] sm:text-[2.6rem] md:text-[4.05rem] lg:text-[4.6rem] font-light leading-[1.04] text-[#1f1f1f]">
              Previous winners
            </h2>

            <p className="text-[1.04rem] sm:text-[1.12rem] md:text-[1.4rem] italic leading-[1.45] text-[#5f5a52]">
              A selection of individuals and teams previously recognized by the
              award.
            </p>
          </div>

          <div className="mx-auto mb-10 max-w-5xl overflow-hidden rounded-[24px] md:rounded-[28px] border border-black/10 bg-white md:mb-14">
            <div className="border-b border-black/10 px-5 py-5 md:px-8 md:py-7">
              <p
                className={`${firaSans.className} mb-3 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#a27a26]`}
              >
                Featured winner · 2025
              </p>

              <h3 className="mb-3 font-serif text-[1.7rem] sm:text-[1.9rem] md:text-[2.7rem] leading-[1.08] text-[#1f1f1f]">
                HYBRIT’s hydrogen storage
              </h3>

              <p className="text-[0.95rem] md:text-[1.04rem] text-[#6a6256]">
                Presented by Skanska
              </p>
            </div>

            <div className="px-5 py-6 md:px-8 md:py-9">
              <p className="mb-5 md:mb-6 text-[1rem] md:text-[1.14rem] leading-[1.85] md:leading-[1.9] text-[#2c2c2c]">
                One of industry’s biggest climate challenges is how to store
                energy and balance the system when solar and wind output vary.
                HYBRIT’s pilot project in Luleå has provided an answer: storage
                of fossil-free hydrogen in steel-lined rock caverns. The
                technology has been tested in real operation with performance
                corresponding to 50 years of use — and the results show that
                fossil-free steel is no longer a vision, but a reality on the
                path to scaling up.
              </p>

              <p className="text-[0.98rem] md:text-[1.1rem] leading-[1.85] md:leading-[1.9] text-[#555]">
                The jury sees the project as a technical milestone that can
                reduce Sweden’s carbon emissions by up to ten percent and give
                industry an entirely new flexibility.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl border-t border-black/10">
            {hallOfFame.map((item) => (
              <div
                key={item.year}
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