"use client";

import { useEffect, useState } from "react";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f3f1ed] text-[#1f1f1f]">
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/85 backdrop-blur-md shadow-md" : "bg-[#efefef]"
        }`}
      >
        <div className="flex justify-center pt-10 pb-6">
          <a href="/">
            <img
              src="/EngineeringDay-Logo.png"
              alt="Engineering Day"
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-[104px] md:h-[112px]" : "h-[144px] md:h-[152px]"
              }`}
            />
          </a>
        </div>

        <div className="border-t border-[#d9a441] px-10 py-3 flex justify-between items-center">
          <div
            className={`${firaSans.className} text-[10px] font-medium tracking-[0.18em] uppercase`}
          >
            STOCKHOLM, 21 OCTOBER 2026
          </div>

          <div
            className={`${firaSans.className} flex items-center gap-8 text-[10px] font-medium tracking-[0.16em] uppercase`}
          >
            <a
              href="/engineering-day-2026"
              className="hover:text-[#d9a441] transition-colors"
            >
              ENGINEERING DAY 2026
            </a>

            <a href="#" className="hover:text-[#d9a441] transition-colors">
              ATTENDING HEROES
            </a>

<div className="relative group flex items-center gap-2">
  <a
    href="/the-grand-prize-for-engineering"
    className="uppercase hover:text-[#d9a441] transition-colors"
  >
    THE GRAND PRIZE FOR ENGINEERING
  </a>

  <button className="text-[9px] hover:text-[#d9a441] transition-colors">
    ▾
  </button>

              <div className="invisible absolute left-0 top-full z-50 mt-3 w-80 translate-y-2 bg-white opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="py-3">
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    INNOVATION
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    LEADERSHIP
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    RISING STAR
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    ROLE MODEL OF THE YEAR
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    SUSTAINABILITY
                  </a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-2 uppercase hover:text-[#d9a441] transition-colors">
                <span>PRE-EVENTS</span>
                <span className="text-[9px]">▾</span>
              </button>

              <div className="invisible absolute left-0 top-full z-50 mt-3 w-72 translate-y-2 bg-white opacity-0 shadow-xl ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="py-3">
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    CAREER DAY @ GÖTEBORG
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    CAREER DAY @ MALMÖ
                  </a>
                  <a
                    href="#"
                    className="block px-5 py-3 text-[11px] uppercase tracking-[0.12em] hover:bg-[#f7f3ea] hover:text-[#d9a441]"
                  >
                    CAREER DAY @ STOCKHOLM
                  </a>
                </div>
              </div>
            </div>

            <a href="#" className="hover:text-[#d9a441] transition-colors">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-[#161514] text-[#f4efe7]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,164,65,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_22%)]" />

        <div className="absolute inset-0 opacity-[0.08]">
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

        <div className="relative px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto min-h-[78vh] flex items-center pt-12 pb-24 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32">
            <div className="max-w-4xl">
              <p
                className={`${firaSans.className} text-[11px] uppercase tracking-[0.28em] text-[#d9a441] mb-8`}
              >
                A PLATFORM FOR ENGINEERING
              </p>

              <h1 className="text-[3.6rem] md:text-[5.4rem] lg:text-[6.8rem] leading-[0.96] font-serif font-light tracking-[-0.03em] text-[#f7f1e8]">
                Engineering,
                <br />
                ideas and the future
                <br />
                built into one platform.
              </h1>

              <p className="mt-8 max-w-2xl text-[1.1rem] md:text-[1.22rem] leading-[1.9] text-white/72">
                Ingenjörsdagen is more than a single event. It is a platform for
                conversations, recognition, talent and the engineering ideas
                shaping what comes next.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href="/engineering-day-2026"
                  className={`${firaSans.className} inline-flex items-center justify-center min-h-[54px] px-8 bg-[#d9a441] text-white text-[11px] font-medium tracking-[0.24em] uppercase hover:bg-[#c8932f] transition-colors`}
                >
                  Explore Engineering Day 2026
                </a>

                <a
                  href="/the-grand-prize-for-engineering"
                  className={`${firaSans.className} inline-flex items-center justify-center min-h-[54px] px-8 border border-white/18 bg-white/5 text-[#f7f1e8] text-[11px] font-medium tracking-[0.24em] uppercase hover:bg-white/10 transition-colors`}
                >
                  The Grand Prize for Engineering
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-1">  <div className="max-w-7xl mx-auto">
    <div className="max-w-3xl mb-16 md:mb-20">
      <p
        className={`${firaSans.className} text-[11px] uppercase tracking-[0.24em] text-[#a27a26] mb-5`}
      >
        Our foundation
      </p>

      <h2 className="text-[2.4rem] md:text-[3.5rem] lg:text-[4.1rem] leading-[1.04] font-serif font-light text-[#1f1f1f] max-w-4xl">
        Engineering Day is built on three pillars.
      </h2>

      <p className="mt-6 max-w-2xl text-[1.05rem] md:text-[1.12rem] leading-[1.9] text-[#4c4a46]">
        Knowledge, collaboration and community shape the platform and create a
        space where engineers can learn, connect and move ideas forward
        together.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black/10">
      <div className="py-10 md:py-12 md:pr-10 border-b md:border-b-0 md:border-r border-black/10">
        <p
          className={`${firaSans.className} text-[10px] uppercase tracking-[0.24em] text-[#a27a26] mb-6`}
        >
          01
        </p>

        <h3 className="text-[1.8rem] md:text-[2.1rem] leading-[1.08] font-serif font-light text-[#1f1f1f] mb-6">
          Knowledge
        </h3>

        <p className="text-[1rem] md:text-[1.05rem] leading-[1.9] text-[#4c4a46] max-w-[28rem]">
          Engineering Day is a place to learn from real engineering work.
          Through talks, masterclasses and discussions, engineers share how they
          approach complex systems, technical constraints and new technologies
          in practice.
        </p>
      </div>

      <div className="py-10 md:py-12 md:px-10 border-b md:border-b-0 md:border-r border-black/10">
        <p
          className={`${firaSans.className} text-[10px] uppercase tracking-[0.24em] text-[#a27a26] mb-6`}
        >
          02
        </p>

        <h3 className="text-[1.8rem] md:text-[2.1rem] leading-[1.08] font-serif font-light text-[#1f1f1f] mb-6">
          Collaboration
        </h3>

        <p className="text-[1rem] md:text-[1.05rem] leading-[1.9] text-[#4c4a46] max-w-[28rem]">
          Great engineering rarely happens in isolation. Engineering Day creates
          opportunities for dialogue across teams, companies and industries,
          making it easier to exchange perspectives, compare solutions and spark
          new collaborations.
        </p>
      </div>

      <div className="py-10 md:py-12 md:pl-10">
        <p
          className={`${firaSans.className} text-[10px] uppercase tracking-[0.24em] text-[#a27a26] mb-6`}
        >
          03
        </p>

        <h3 className="text-[1.8rem] md:text-[2.1rem] leading-[1.08] font-serif font-light text-[#1f1f1f] mb-6">
          Community
        </h3>

        <p className="text-[1rem] md:text-[1.05rem] leading-[1.9] text-[#4c4a46] max-w-[28rem]">
          Engineering Day brings together people who design, build and improve
          complex systems every day. It is a place to meet peers, strengthen
          your network and be part of a wider engineering community.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 py-24 md:py-28 lg:py-32">
  <div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-8 md:mb-10">      <p
        className={`${firaSans.className} text-[11px] uppercase tracking-[0.24em] text-[#a27a26] mb-6`}
      >
        Why it matters
      </p>

      <h2 className="text-[2.4rem] md:text-[3.6rem] lg:text-[4.2rem] leading-[1.02] font-serif font-light text-[#1f1f1f] max-w-4xl">
        Engineering is shaping the future.
        <br />
        But rarely in one place.
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl">
      <p className="text-[1.05rem] md:text-[1.12rem] leading-[1.9] text-[#4c4a46]">
        Engineering Day exists to bring together the people building the
        systems our society depends on. It creates a shared space for engineers
        across industries to exchange knowledge, challenge ideas and accelerate
        progress.
      </p>

      <p className="text-[1.05rem] md:text-[1.12rem] leading-[1.9] text-[#4c4a46]">
        By connecting companies, individuals and disciplines, the platform
        strengthens the role of engineering in shaping a sustainable, resilient
        and forward-looking society.
      </p>
    </div>
  </div>
</section>
<section className="relative overflow-hidden bg-[#efe9e1] px-6 md:px-12 lg:px-20 py-24 md:py-28 lg:py-32">
  <div className="absolute inset-0 opacity-[0.04]">
    <div
      className="h-full w-full"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.14) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.14) 1px, transparent 1px)
        `,
        backgroundSize: "84px 84px",
      }}
    />
  </div>

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,164,65,0.18),transparent_34%)]" />

  <div className="relative max-w-7xl mx-auto">
    <p
      className={`${firaSans.className} mb-14 text-center text-[11px] uppercase tracking-[0.24em] text-[#a27a26]`}
    >
      Founding Partners 2026
    </p>

<div className="flex items-center justify-center gap-x-20 md:gap-x-28 lg:gap-x-36 py-10 md:py-14">      <img
        src="/Saab-Logo.png"
        alt="Saab"
        className="h-[120px] w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)] md:h-[150px] lg:h-[170px]"
      />

      <img
        src="/Varopreem-Logo.png"
        alt="VAROPreem"
        className="h-[120px] w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)] md:h-[150px] lg:h-[170px]"
      />

      <img
        src="/Skanska-Logo.png"
        alt="Skanska"
        className="h-[120px] w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)] md:h-[150px] lg:h-[170px]"
      />

      <img
        src="/Sweco-Logo.png"
        alt="Sweco"
        className="h-[120px] w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)] md:h-[150px] lg:h-[170px]"
      />

      <img
        src="/Trafikverket-Logo.png"
        alt="Trafikverket"
        className="h-[120px] w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)] md:h-[150px] lg:h-[170px]"
      />
    </div>
  </div>
</section>
<footer className="bg-[#f3f1ed] pt-28 pb-14">
  <div className="max-w-3xl mx-auto text-center px-6">
    <p className="text-[1.05rem] md:text-[1.15rem] text-[#3e3c38] leading-[1.9]">
      Engineering Day – Sweden’s first official day for engineers. We celebrate our engineers and their powers of innovation, creativity and hard work. The event is also a forum for knowledge-sharing and networking.
    </p>

    <p className="mt-5 text-sm text-black/40 italic tracking-[0.02em]">
      A part of Ny Teknik
    </p>

    {/* Socials */}
    <div className="flex justify-center items-center gap-8 mt-12">
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

    <div className="mt-12 text-[11px] tracking-[0.12em] text-black/30 uppercase">
      © 2026 Ny Teknik
    </div>
  </div>
</footer>
    </main>
  );
}