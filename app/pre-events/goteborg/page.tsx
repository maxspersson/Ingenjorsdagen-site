import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function GoteborgPage() {
  return (
    <main className="min-h-screen bg-[#f3f1ed]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden bg-[#0f0f10] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pre-events-goteborg.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.32),rgba(0,0,0,0.14),rgba(0,0,0,0.44))]" />

        <div className="relative z-10 flex min-h-[85vh] items-center justify-center px-6 text-center">
          <div className="max-w-[1100px] -mt-16 md:-mt-12">
            <p
              className={`${firaSans.className} mb-6 text-[11px] uppercase tracking-[0.28em] text-[#d9a441]`}
            >
              Göteborg · 27 April 2026
            </p>

            <h1 className="font-serif text-white leading-[1.02]">
              <span className="block text-[2.6rem] md:text-[4.8rem] lg:text-[5.8rem] tracking-[-0.02em]">
                Career Day
              </span>

              <span className="mt-2 block text-[1.6rem] md:text-[2.4rem] lg:text-[2.8rem] italic text-white/90">
                @ Göteborg
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[1.1rem] leading-[1.6] text-white/80 md:text-[1.3rem]">
              A focused career fair at Radisson Blu, bringing together engineers,
              tech professionals and companies ready to recruit.
            </p>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="bg-[#f3f1ed] px-6 pb-12 pt-20 md:px-12 md:pt-24 lg:px-20">
        <div className="mx-auto max-w-4xl border-t border-black/10 pt-10">
          <div className="grid grid-cols-1 gap-y-10 text-center md:grid-cols-4 md:gap-x-12 md:gap-y-0">
            <div>
              <p
                className={`${firaSans.className} text-[10px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Date
              </p>
              <p className="mt-2 font-serif text-[1.4rem] text-[#1f1f1f]">
                27 April
              </p>
            </div>

            <div>
              <p
                className={`${firaSans.className} text-[10px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Location
              </p>
              <p className="mt-2 font-serif text-[1.4rem] text-[#1f1f1f]">
                Radisson Blu
              </p>
            </div>

            <div>
              <p
                className={`${firaSans.className} text-[10px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Time
              </p>
              <p className="mt-2 font-serif text-[1.4rem] text-[#1f1f1f]">
                09:00 - 12:00
              </p>
            </div>

            <div>
              <p
                className={`${firaSans.className} text-[10px] uppercase tracking-[0.18em] text-[#8b8276]`}
              >
                Admission
              </p>
              <p className="mt-2 font-serif text-[1.4rem] text-[#1f1f1f]">
                Free
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-[#f3f1ed] px-6 py-24 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[13px] uppercase tracking-[0.24em] text-[#a27a26]`}
            >
              Göteborg
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-12 max-w-4xl text-center md:mb-14">
            <h2 className="font-serif text-[3rem] leading-[1.03] font-light text-[#1f1f1f] md:text-[4.05rem] lg:text-[4.6rem]">
              Where engineering
              <br />
              meets industry
            </h2>

            <p className="text-[1.22rem] italic leading-[1.45] text-[#5f5a52] md:text-[1.4rem]">
              A focused morning for direct meetings, new opportunities and
              meaningful conversations.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-[1.16rem] leading-[1.82] text-[#2c2c2c] md:text-[1.3rem]">
              Göteborg has long been one of Sweden’s strongest industrial and
              engineering cities. Career Day @ Göteborg is designed to reflect
              that context, bringing together engineers, tech professionals and
              employers in a format built around direct contact and relevant
              conversations.
            </p>

            <p className="mb-10 text-[1.16rem] leading-[1.82] text-[#2c2c2c] md:text-[1.3rem]">
              At Radisson Blu, visitors can meet companies that are actively
              recruiting, explore new roles and discover where their skills can
              create value. The setting is intentionally focused, making space
              for real interaction rather than crowded exhibition noise.
            </p>

            <p className="text-[1.1rem] leading-[1.9] text-[#555] md:text-[1.22rem]">
              Whether you are looking for your next role or simply want to
              understand where the market is moving, Career Day offers a more
              direct way to connect with the people and companies shaping what
              comes next.
            </p>

            <div className="mt-16 text-center">
              <a
                href="https://nyteknikgroup.confetti.events/career-day-goteborg-2026"
                target="_blank"
                rel="noopener noreferrer"
                className={`${firaSans.className} text-[15px] uppercase tracking-[0.22em] text-[#a27a26] transition-colors hover:text-[#d9a441]`}
              >
                View event details & register
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f3f1ed] pt-28 pb-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-[1.05rem] leading-[1.9] text-[#3e3c38] md:text-[1.15rem]">
            Engineering Day – Sweden’s first official day for engineers. We
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
                className="h-5 w-5"
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
                className="h-5 w-5"
              />
            </a>

            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition duration-200 hover:opacity-100"
            >
              <img
                src="/Spotify.png"
                alt="Spotify"
                className="h-5 w-5"
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
                className="h-5 w-5"
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