import SiteHeader from "@/app/components/SiteHeader";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function PreEventsPage() {
  return (
    <main className="min-h-screen bg-[#f3f1ed]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[52vh] overflow-hidden bg-[#0f0f10] text-white sm:min-h-[60vh] md:min-h-[88vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pre-events.png')" }}
        />

        <div className="absolute inset-0 bg-black/38" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.34),rgba(0,0,0,0.16),rgba(0,0,0,0.42))]" />

        <div className="relative z-10 flex min-h-[52vh] items-center justify-center px-5 text-center sm:min-h-[60vh] md:min-h-[88vh] md:px-6">
          <div className="max-w-[1100px] -mt-8 sm:-mt-10 md:-mt-12">
            <p
              className={`${firaSans.className} mb-5 text-[10px] uppercase tracking-[0.24em] text-[#d9a441] sm:text-[11px] sm:tracking-[0.28em] md:mb-6`}
            >
              Pre-events
            </p>

            <h1 className="font-serif leading-[0.98] text-white">
              <span className="block text-[2.15rem] tracking-[-0.02em] sm:text-[2.7rem] md:text-[4.6rem] lg:text-[5.8rem]">
                A fair designed for
              </span>

              <span className="block text-center text-[2.15rem] tracking-[-0.02em] sm:text-[2.7rem] md:text-[4.6rem] lg:text-[5.8rem]">
                your next step
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[22rem] text-[1rem] leading-[1.58] text-white/82 sm:mt-7 sm:max-w-[32rem] sm:text-[1.08rem] md:mt-8 md:max-w-3xl md:text-[1.28rem] md:leading-[1.65]">
              Career Day brings together engineers, tech professionals and
              employers in a format built around real conversations, direct
              contact and concrete opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-[#f3f1ed] px-5 pt-20 pb-20 md:px-12 md:pt-28 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              Why?
            </p>

            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
            <h2 className="mb-5 font-serif text-[2.2rem] font-light leading-[1.03] text-[#1f1f1f] sm:text-[2.6rem] md:mb-6 md:text-[4.05rem] lg:text-[4.6rem]">
              Built for the right match
            </h2>

            <p className="mx-auto max-w-[23rem] text-[1.06rem] italic leading-[1.5] text-[#5f5a52] sm:max-w-[30rem] sm:text-[1.14rem] md:max-w-none md:text-[1.4rem]">
              A more focused setting for engineers and employers to meet.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="mb-7 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-8 md:text-[1.3rem] md:leading-[1.82]">
              Career Day is built on a simple idea: the right match rarely
              happens through noise.
            </p>

            <p className="mb-7 text-[1.02rem] leading-[1.78] text-[#2c2c2c] sm:text-[1.08rem] md:mb-8 md:text-[1.3rem] md:leading-[1.82]">
              Instead of large, crowded formats, the focus is on creating a
              setting where engineers and companies can meet more directly —
              where conversations are relevant, and where opportunities are
              tangible.
            </p>

            <p className="text-[1rem] leading-[1.82] text-[#555] sm:text-[1.05rem] md:text-[1.22rem] md:leading-[1.9]">
              As hiring begins to gradually pick up again after a more uncertain
              period, the need for spaces that connect talent and employers
              becomes clearer. Career Day is designed to meet that moment,
              offering a more focused and human way to explore what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[#f3f1ed] px-5 pb-20 md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              What to expect
            </p>
            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-3xl md:mb-14">
            <p className="text-[1rem] leading-[1.8] text-[#555] sm:text-[1.05rem] md:text-[1.18rem] md:leading-[1.85]">
              Each event is designed as a focused half-day format where visitors
              can move freely between companies, conversations and
              opportunities.
            </p>
          </div>

          <div className="grid gap-8 border-t border-black/10 pt-8 sm:gap-9 md:grid-cols-2 md:gap-x-16 md:gap-y-12 md:pt-10 lg:grid-cols-4">
            <div>
              <h3 className="font-serif text-[1.38rem] leading-[1.08] text-[#1f1f1f] sm:text-[1.48rem] md:text-[1.75rem]">
                Employers on site
              </h3>
              <p className="mt-3 text-[0.98rem] leading-[1.72] text-[#5a5a5a] md:text-[1rem] md:leading-[1.75]">
                Meet companies that are actively looking for engineers and tech
                professionals across different fields.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-[1.38rem] leading-[1.08] text-[#1f1f1f] sm:text-[1.48rem] md:text-[1.75rem]">
                Real conversations
              </h3>
              <p className="mt-3 text-[0.98rem] leading-[1.72] text-[#5a5a5a] md:text-[1rem] md:leading-[1.75]">
                Speak directly with hiring teams, recruiters and peers in a
                setting built around access rather than noise.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-[1.38rem] leading-[1.08] text-[#1f1f1f] sm:text-[1.48rem] md:text-[1.75rem]">
                Career guidance
              </h3>
              <p className="mt-3 text-[0.98rem] leading-[1.72] text-[#5a5a5a] md:text-[1rem] md:leading-[1.75]">
                Selected events include support around CVs, applications and
                interview preparation.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-[1.38rem] leading-[1.08] text-[#1f1f1f] sm:text-[1.48rem] md:text-[1.75rem]">
                The next step
              </h3>
              <p className="mt-3 text-[0.98rem] leading-[1.72] text-[#5a5a5a] md:text-[1rem] md:leading-[1.75]">
                Whether you are actively job hunting or simply exploring what is
                next, the format is designed to move things forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING STOPS */}
      <section className="bg-[#f3f1ed] px-5 pb-20 md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 md:mb-12">
            <p
              className={`${firaSans.className} mb-4 text-[12px] uppercase tracking-[0.22em] text-[#a27a26] md:text-[13px] md:tracking-[0.24em]`}
            >
              Upcoming stops
            </p>
            <div className="h-px w-14 bg-[#d9a441]" />
          </div>

          <div className="mx-auto mb-10 max-w-3xl md:mb-12">
            <p className="text-[1rem] leading-[1.8] text-[#555] sm:text-[1.05rem] md:text-[1.18rem] md:leading-[1.85]">
              Career Day will take place in three cities during 2026. Each
              location reflects its local context, while staying true to the
              same core format.
            </p>
          </div>

          <div className="mx-auto max-w-4xl border-t border-black/10">
            <a
              href="/pre-events/stockholm"
              className="group grid grid-cols-1 items-end gap-3 border-b border-black/10 py-6 transition-colors hover:text-[#a27a26] md:grid-cols-[1fr_auto] md:gap-4 md:py-8"
            >
              <div>
                <p
                  className={`${firaSans.className} text-[10px] uppercase tracking-[0.16em] text-[#8b8276] md:tracking-[0.18em]`}
                >
                  Stockholm · 22 April 2026 · Kulturhuset
                </p>

                <h3 className="mt-2 font-serif text-[1.55rem] leading-[1.06] md:text-[2.4rem]">
                  Career Day @ Stockholm
                </h3>

                <p className="mt-2 text-[0.98rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256] md:text-[1.08rem]">
                  A focused career fair at Kulturhuset, bringing together
                  engineers, tech professionals and employers in the capital.
                </p>
              </div>

              <span
                className={`${firaSans.className} text-[10px] uppercase tracking-[0.16em] text-[#8b8276] group-hover:text-[#a27a26] md:text-[11px] md:tracking-[0.18em]`}
              >
                View city page
              </span>
            </a>

            <a
              href="/pre-events/goteborg"
              className="group grid grid-cols-1 items-end gap-3 border-b border-black/10 py-6 transition-colors hover:text-[#a27a26] md:grid-cols-[1fr_auto] md:gap-4 md:py-8"
            >
              <div>
                <p
                  className={`${firaSans.className} text-[10px] uppercase tracking-[0.16em] text-[#8b8276] md:tracking-[0.18em]`}
                >
                  Göteborg · 27 April 2026 · Radisson Blu
                </p>

                <h3 className="mt-2 font-serif text-[1.55rem] leading-[1.06] md:text-[2.4rem]">
                  Career Day @ Göteborg
                </h3>

                <p className="mt-2 text-[0.98rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256] md:text-[1.08rem]">
                  A west coast stop designed to connect regional employers with
                  engineering talent across industries and disciplines.
                </p>
              </div>

              <span
                className={`${firaSans.className} text-[10px] uppercase tracking-[0.16em] text-[#8b8276] group-hover:text-[#a27a26] md:text-[11px] md:tracking-[0.18em]`}
              >
                View city page
              </span>
            </a>

            <a
              href="/pre-events/malmo"
              className="group grid grid-cols-1 items-end gap-3 border-b border-black/10 py-6 transition-colors hover:text-[#a27a26] md:grid-cols-[1fr_auto] md:gap-4 md:py-8"
            >
              <div>
                <p
                  className={`${firaSans.className} text-[10px] uppercase tracking-[0.16em] text-[#8b8276] md:tracking-[0.18em]`}
                >
                  Malmö · 11 November 2026 · Slagthuset
                </p>

                <h3 className="mt-2 font-serif text-[1.55rem] leading-[1.06] md:text-[2.4rem]">
                  Career Day @ Malmö
                </h3>

                <p className="mt-2 text-[0.98rem] leading-[1.7] text-[#5a5a5a] group-hover:text-[#6a6256] md:text-[1.08rem]">
                  A southern stop where engineers and companies meet in a more
                  direct and personal format centred around recruitment.
                </p>
              </div>

              <span
                className={`${firaSans.className} text-[10px] uppercase tracking-[0.16em] text-[#8b8276] group-hover:text-[#a27a26] md:text-[11px] md:tracking-[0.18em]`}
              >
                View city page
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden px-5 py-20 text-white md:px-12 md:py-32 lg:px-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pre-events.png')" }}
        />
        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.48),rgba(0,0,0,0.72))]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-5 font-serif text-[2rem] leading-[1.08] sm:text-[2.35rem] md:mb-6 md:text-[3.4rem] lg:text-[4rem]">
            Part of a broader platform
          </h2>

          <p className="mx-auto max-w-[22rem] text-[1.02rem] leading-[1.62] text-[#d0d0d0] sm:max-w-[31rem] sm:text-[1.1rem] md:max-w-3xl md:text-[1.3rem] md:leading-[1.7]">
            Career Day is part of Engineering Day — Sweden’s platform for
            engineers, innovation and the future of technology.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-[0.98rem] leading-[1.78] text-white/72 sm:text-[1rem] md:mt-6 md:text-[1.12rem] md:leading-[1.85]">
            While the main event takes place in October, the pre-events extend
            the idea throughout the year. They bring the community closer to the
            market, creating opportunities for engineers and companies to meet
            where things are already in motion.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-[0.98rem] leading-[1.78] text-white/72 sm:text-[1rem] md:mt-6 md:text-[1.12rem] md:leading-[1.85]">
            Together, they form a platform that is not only about celebrating
            engineering — but about enabling it.
          </p>
        </div>
      </section>

      <footer className="bg-[#f3f1ed] pt-12 pb-12 md:pt-12 md:pb-14">
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