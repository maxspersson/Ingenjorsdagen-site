import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function MalmoPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f1ed] text-[#1f1f1f]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[54vh] overflow-hidden bg-[#0f0f10] text-white sm:min-h-[62vh] md:min-h-[85vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pre-events-malmo.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.32),rgba(0,0,0,0.14),rgba(0,0,0,0.44))]" />

        <div className="relative z-10 flex min-h-[54vh] items-center justify-center px-5 text-center sm:min-h-[62vh] md:min-h-[85vh] md:px-6">
          <div className="max-w-[1100px] -mt-8 sm:-mt-10 md:-mt-12">
            <p
              className={`${firaSans.className} mb-5 text-[10px] uppercase tracking-[0.24em] text-[#d9a441] sm:text-[11px] sm:tracking-[0.28em] md:mb-6`}
            >
              Malmö · 11 November 2026
            </p>

            <h1 className="font-serif text-white leading-[1.02]">
              <span className="block text-[2.2rem] tracking-[-0.02em] sm:text-[2.8rem] md:text-[4.8rem] lg:text-[5.8rem]">
                Career Day
              </span>

              <span className="mt-2 block text-[1.35rem] italic text-white/90 sm:text-[1.65rem] md:text-[2.4rem] lg:text-[2.8rem]">
                @ Malmö
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-[22rem] text-[1rem] leading-[1.58] text-white/80 sm:mt-6 sm:max-w-[30rem] sm:text-[1.08rem] md:max-w-2xl md:text-[1.3rem] md:leading-[1.6]">
              A focused career fair at Slagthuset, bringing together engineers,
              tech professionals and companies ready to recruit.
            </p>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="bg-[#f3f1ed] px-5 pt-16 pb-10 md:px-12 md:pt-24 md:pb-12 lg:px-20">
        <div className="mx-auto max-w-4xl border-t border-black/10 pt-8 md:pt-10">
          <div className="grid grid-cols-1 gap-y-8 text-center md:grid-cols-4 md:gap-x-12 md:gap-y-0">
            <div>
              <p
                className={`${firaSans.className} text-[10px] uppercase tracking-[0.16em] text-[#8b8276] md:tracking-[0.18em]`}
              >
                Date
              </p>
              <p className="mt-2 font-serif text-[1.25rem] text-[#1f1f1f] sm:text-[1.32rem] md:text-[1.4rem]">
                11 November
              </p>
            </div>

            <div>
              <p
                className={`${firaSans.className} text-[10px] uppercase tracking-[0.16em] text-[#8b8276] md:tracking-[0.18em]`}
              >
                Location
              </p>
              <p className="mt-2 font-serif text-[1.25rem] text-[#1f1f1f] sm:text-[1.32rem] md:text-[1.4rem]">
                Slagthuset
              </p>
            </div>

            <div>
              <p
                className={`${firaSans.className} text-[10px] uppercase tracking-[0.16em] text-[#8b8276] md:tracking-[0.18em]`}
              >
                Time
              </p>
              <p className="mt-2 font-serif text-[1.25rem] text-[#1f1f1f] sm:text-[1.32rem] md:text-[1.4rem]">
                09:00 - 12:00
              </p>
            </div>

            <div>
              <p
                className={`${firaSans.className} text-[10px] uppercase tracking-[0.16em] text-[#8b8276] md:tracking-[0.18em]`}
              >
                Admission
              </p>
              <p className="mt-2 font-serif text-[1.25rem] text-[#1f1f1f] sm:text-[1.32rem] md:text-[1.4rem]">
                Free
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-[#f3f1ed] px-5 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              Malmö
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <h2 className="mb-5 font-serif text-[2.2rem] font-light leading-[1.03] text-[#1f1f1f] sm:text-[2.6rem] md:mb-8 md:text-[4.05rem] lg:text-[4.6rem]">
              Where new connections
              <br />
              take shape
            </h2>

            <p className="mx-auto max-w-[24rem] text-[1.06rem] italic leading-[1.5] text-[#5f5a52] sm:max-w-[31rem] sm:text-[1.14rem] md:max-w-none md:text-[1.4rem]">
              A setting built for conversations, opportunities and what comes
              next.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="mb-7 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-8 md:text-[1.3rem] md:leading-[1.82]">
              Malmö is one of Sweden’s most dynamic and fast-moving regions,
              shaped by proximity, collaboration and international perspective.
              Career Day @ Malmö brings together engineers, tech professionals
              and companies in a format designed for direct and meaningful
              interaction.
            </p>

            <p className="mb-8 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-10 md:text-[1.3rem] md:leading-[1.82]">
              At Slagthuset, visitors can meet employers who are actively
              recruiting, explore new opportunities and connect with others
              navigating similar paths. The format is intentionally focused,
              allowing for deeper conversations and more relevant exchanges.
            </p>

            <p className="text-[1rem] leading-[1.82] text-[#555] sm:text-[1.05rem] md:text-[1.22rem] md:leading-[1.9]">
              Whether you are looking ahead or ready for your next step, Career
              Day offers a space to engage directly with the companies and ideas
              shaping what comes next.
            </p>

            <div className="mt-12 text-center md:mt-16">
              <a
                href="https://confetti.events/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${firaSans.className} text-[13px] uppercase tracking-[0.2em] text-[#a27a26] transition-colors hover:text-[#d9a441] md:text-[15px] md:tracking-[0.22em]`}
              >
                View event details & register
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
              <img src="/Linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
            </a>

            <a
              href="https://www.instagram.com/engineeringdaysweden/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition duration-200 hover:opacity-100"
            >
              <img src="/Instagram.png" alt="Instagram" className="h-5 w-5" />
            </a>

            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition duration-200 hover:opacity-100"
            >
              <img src="/Spotify.png" alt="Spotify" className="h-5 w-5" />
            </a>

            <a
              href="https://www.nyteknik.se/ingenjorsdagen"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition duration-200 hover:opacity-100"
            >
              <img src="/Website.png" alt="Ny Teknik" className="h-5 w-5" />
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