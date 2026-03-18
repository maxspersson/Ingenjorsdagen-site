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

            <div className="relative group">
              <button className="flex items-center gap-2 uppercase hover:text-[#d9a441] transition-colors">
                <span>THE GRAND PRIZE FOR ENGINEERING</span>
                <span className="text-[9px]">▾</span>
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
          <div className="max-w-7xl mx-auto min-h-[78vh] flex items-center py-24 md:py-28 lg:py-32">
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
                  href="#"
                  className={`${firaSans.className} inline-flex items-center justify-center min-h-[54px] px-8 border border-white/18 bg-white/5 text-[#f7f1e8] text-[11px] font-medium tracking-[0.24em] uppercase hover:bg-white/10 transition-colors`}
                >
                  The Grand Prize for Engineering
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ed] px-6 md:px-12 lg:px-20 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p
              className={`${firaSans.className} text-[11px] uppercase tracking-[0.24em] text-[#a27a26] mb-5`}
            >
              First direction
            </p>

            <h2 className="text-[2.4rem] md:text-[3.4rem] leading-[1.04] font-serif font-light text-[#1f1f1f] mb-6">
              This is the homepage.
              <br />
              The event lives further in.
            </h2>

            <p className="text-[1.04rem] md:text-[1.12rem] leading-[1.9] text-[#4c4a46] max-w-2xl">
              Here we can continue with entry points, editorial sections and
              partner presentation lower down. The point right now is just to
              test the darker, more graphic hero and create a clearer
              distinction from the event page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}